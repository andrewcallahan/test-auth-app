import Ember from 'ember';

const {
  Controller,
  inject: {
    service
  },
  get
} = Ember;

export default Controller.extend({
  session: service(),
  actions: {
    login () {
      // Check out the docs for all the options:
      // https://auth0.com/docs/libraries/lock/customization
      const lockOptions = {
       auth: {
         params: {
           scope: 'openid user_metadata'
         }
       }
      };

      get(this, 'session').authenticate('authenticator:auth0-lock', lockOptions);
    },

    logout () {
      get(this, 'session').invalidate();
    }
  }
});