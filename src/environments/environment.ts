// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  dialogflow: {
    angularBot: 'ce065c16522a4ff7834c1c3eafaf7594'
  },
  firebase: {
    apiKey: 'AIzaSyBsgud6VqEv3oQtHnpfqinbkWuVTCgglVc',
    authDomain: 'zipdoc-f17a8.firebaseapp.com',
    databaseURL: 'https://zipdoc-f17a8.firebaseio.com',
    projectId: 'zipdoc-f17a8',
    storageBucket: 'gs://zipdoc-f17a8.appspot.com'
  }
};

/*
  firebase: {
    apiKey: '<your-key>',
    authDomain: '<your-project-authdomain>',
    databaseURL: '<your-database-URL>',
    projectId: 'zipdoc-f17a8',
    storageBucket: '<your-storage-bucket>',
    messagingSenderId: '<your-messaging-sender-id>'
  }
*/