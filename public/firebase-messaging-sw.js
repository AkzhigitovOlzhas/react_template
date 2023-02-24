importScripts('https://www.gstatic.com/firebasejs/9.10.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.10.0/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyCEBhHikUnReJCGMpUoRBChNo3PrGEs2Xw",
  authDomain: "shamal-6acab.firebaseapp.com",
  projectId: "shamal-6acab",
  storageBucket: "shamal-6acab.appspot.com",
  messagingSenderId: "46275845629",
  appId: "1:46275845629:web:aefb180e77bbe0c3c44d94",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Received background message: ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});