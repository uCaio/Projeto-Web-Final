const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { Cliente } = require('../models/db').models;
const bcrypt = require('bcryptjs');
const { where } = require('sequelize');

passport.use(
  new LocalStrategy(async (email, senha, done) => {
    try {
      const user = await Cliente.findOne({ where: { email: email } });
      if (!user) return done(null, false, { message: 'Usuário não encontrado' });

      const isValid = await bcrypt.compare(senha, user.senha);
      if (!isValid) return done(null, false, { message: 'Senha incorreta' });

      return done(null, user);
    } catch (error) {
      return done(error);
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await Cliente.findByPk(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});
