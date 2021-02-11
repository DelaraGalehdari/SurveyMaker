const passport = require('passport');//original passport npm
//whenever user come to this route,we kick them to oauth flow that manage by passport
//express app object
module.exports = app => {
    app.get(
      '/auth/google',
      passport.authenticate('google', {
        scope: ['profile', 'email']
      })
    );
  //for routing /auth/google/callback,we ask google strategy to handle it
  app.get('/auth/google/callback', passport.authenticate('google'),
  (req,res)=>{
    res.redirect('/surveys');
  }
  );

  app.get('/api/logout',(req,res)=>{
    //req.logout is a function that is attached automaticlly to req object by password
    req.logout();
    res.redirect("/");
  });

  app.get('/api/current_user',(req,res)=>{
      res.send(req.user);
  });
};




