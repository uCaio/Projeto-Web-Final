const passport = require('passport');

const renderLoginPage = (req, res) => {
  res.render('login');
};

const loginUser = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      req.flash('error', 'Erro interno no servidor.');
      return next(err);
    }
    console.log(user)
    if (!user) {
      req.flash('error', info.message || 'Credenciais inválidas.');
      return res.redirect('/home');
    }
    req.logIn(user, (err) => {
      if (err) {
        req.flash('error', 'Erro ao realizar login.');
        return next(err);
      }
      req.flash('success', 'Login realizado com sucesso!');
      return res.redirect('/home');
    });
  })(req, res, next);
};

const logoutUser = (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    res.redirect('/');
  });
};

const renderDashboard = (req, res) => {
  res.render('dashboard', { user: req.user });
};

const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
};

module.exports = { renderLoginPage, loginUser, logoutUser, renderDashboard, isAuthenticated };
