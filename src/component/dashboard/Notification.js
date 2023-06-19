import React, { useState, useEffect } from 'react';
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function Notification() {
    const [showNotifications, setShowNotifications] = useState(false);
    const [notifications, setNotifications] = useState([
        {name: "enes"}
    ]);

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const response = await fetch("http://34.125.231.173/api/Notification");
                const data = await response.json();
                setNotifications(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchNotifications();
    }, []);

    return (
        <div>
            <NotificationsIcon 
                onClick={() => setShowNotifications(!showNotifications)} 
                style={{ cursor: 'pointer' }}
            />
            {showNotifications && (
                <div 
                    style={{ 
                        background: 'lightgray', 
                        padding: '10px', 
                        position: 'fixed', 
                        top: '65px', 
                        right: '10px', 
                        width: '190px', 
                        height: 'auto', 
                        maxHeight: '80vh', 
                    }}
                >
                    {notifications.map((notification, index) => (
                        <p key={index}>{notification.message}</p>
                    ))}
                </div>
            )}
        </div>
    );
}