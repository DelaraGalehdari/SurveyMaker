const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");
//user is model class
const User = mongoose.model("users");

//we call serializeUser to generate the identifying piece of info for exsisting user
passport.serializeUser((user, done) => {
  done(null, user.id);
});
//deserializeUser take the id from cookie and tuen it back to user model
passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      //create new instance of model class

      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        //user has record in database
        //first argument is showing to no error
        return done(null, existingUser);
      }
      //we dont have recored with this id in database
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);
