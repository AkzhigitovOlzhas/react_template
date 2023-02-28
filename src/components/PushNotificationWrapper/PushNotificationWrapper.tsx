import { FC, ReactNode, useEffect, useState } from 'react';
import { getFirebaseToken, onForegroundMessage } from '@utils/firebase';

interface PushNotificationWrapperProps {
    children: ReactNode;
}

export const PushNotificationWrapper: FC<PushNotificationWrapperProps> = ({ children }) => {
    const [showNotificationBanner, setShowNotificationBanner] = useState<boolean>(
        Notification.permission === 'default',
    );

    useEffect(() => {
        onForegroundMessage()
            .then((payload) => {
                console.log('Received foreground message: ', payload);
            })
            .catch((err) =>
                console.log('An error occured while retrieving foreground message. ', err),
            );
    }, []);

    const handleGetFirebaseToken = () => {
        getFirebaseToken()
            .then((firebaseToken) => {
                console.log('Firebase token: ', firebaseToken);
                if (firebaseToken) {
                    setShowNotificationBanner(false);
                }
            })
            .catch((err) =>
                console.error('An error occured while retrieving firebase token. ', err),
            );
    };

    return (
        <div style={{ height: '100vh' }}>
            {showNotificationBanner && (
                <div
                    style={{
                        height: '20px',
                        width: '100%',
                        background: 'teal',
                        color: 'white',
                    }}
                    onClick={handleGetFirebaseToken}
                >
                    У вас откличины уведомления, нажмите чтобы включить
                </div>
            )}
            {children}
        </div>
    );
};
