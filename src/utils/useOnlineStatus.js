import { useState, useEffect, use } from "react";

const useOnlineStatus = () => {
    // check if online.
    const [onlineStatus, setOnlineStatus] = useState(window.navigator.onLine);
    
    useEffect(() => {
        window.addEventListener("online", () => {
            setOnlineStatus(true);
        });
        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        });
    }, []);
    



    //boolean value to check online status
    return onlineStatus
}

export default useOnlineStatus;