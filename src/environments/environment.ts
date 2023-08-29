// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  useEmulators: true,
  production: false,
  firebase: {
    apiKey: "AIzaSyBZpm7K5teo5Q8ktjOY8Xyxr0bCASUjkng",
    authDomain: "push-notifications-3c140.firebaseapp.com",
    projectId: "push-notifications-3c140",
    storageBucket: "push-notifications-3c140.appspot.com",
    messagingSenderId: "453578037468",
    appId: "1:453578037468:web:d30824f928a90d5713fc19",
    measurementId: "G-PNNYZK1VFJ"
  },
  vapidKey: 'BA2nS2LKxW8NonlIazh9GN3dqj7e6JWzEamX2VP2H8YvPOgpQrj1MiZg3cSFKa7cyG9Ogex1pcdMxCQZ3UYjFP4',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/plugins/zone-error'; // Included with Angular CLI.
