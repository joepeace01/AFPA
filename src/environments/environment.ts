// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {Appareil} from '../app/models/Appareil.model';

export const environment = {
  production: false,

  firebase: {
    apikey: ' AIzaSyBk8_-mIEqIS94aE9380oh7YBIwygoN1vY ',
    authDomain: 'mon-projet-angular-79503.firebaseapp.com',
    databaseURL: 'https://mon-projet-angular-79503.firebaseio.com',
    projectId: 'mon-projet-angular-79503',
    storageBucket: 'mon-projet-angular-79503.appspot.com',
    messagingSenderId: '924363414808'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
