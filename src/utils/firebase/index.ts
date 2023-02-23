import { getToken, MessagePayload, onMessage } from "firebase/messaging";
import { messaging } from "@config/firebase/firebaseConfig";

const getOrRegisterServiceWorker = (): Promise<ServiceWorkerRegistration> => {
  if ("serviceWorker" in navigator) {
    return window.navigator.serviceWorker
      .getRegistration("/firebase-push-notification-scope")
      .then((serviceWorker) => {
        if (serviceWorker) return serviceWorker;
        return window.navigator.serviceWorker.register(
          "/firebase-messaging-sw.js",
          {
            scope: "/firebase-push-notification-scope",
          }
        );
      });
  }
  throw new Error("The browser doesn`t support service worker.");
};

export const getFirebaseToken = (): Promise<string> =>
  getOrRegisterServiceWorker().then((serviceWorkerRegistration) =>
    getToken(messaging, {
      vapidKey: process.env.FIREBASE_VAPID_KEY,
      serviceWorkerRegistration,
    })
  );

export const onForegroundMessage = (): Promise<MessagePayload> =>
  new Promise((resolve) =>
    onMessage(messaging, (payload: MessagePayload) => resolve(payload))
  );
