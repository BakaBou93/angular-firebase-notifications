importScripts('https://www.gstatic.com/firebasejs/9.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.8.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyBZpm7K5teo5Q8ktjOY8Xyxr0bCASUjkng",
    authDomain: "push-notifications-3c140.firebaseapp.com",
    projectId: "push-notifications-3c140",
    storageBucket: "push-notifications-3c140.appspot.com",
    messagingSenderId: "453578037468",
    appId: "1:453578037468:web:d30824f928a90d5713fc19",
    measurementId: "G-PNNYZK1VFJ"
});

const isSupported = firebase.messaging.isSupported();
if (isSupported) {
    const messaging = firebase.messaging();
    // messaging.onBackgroundMessage(({ notification: { title, body, image } }) => {
        // self.registration.showNotification(title, { body, icon: image || '/assets/icons/icon-72x72.png' });
        // self.registration.showNotification(title, { body });
        // console.log(title);
    // });
}
