import React, { useState, useEffect } from 'react';

type propType = {
    ourState: number;
    handleClick: any; // Corrected typo: hancleClick -> handleClick
}

const HomeUpdate: React.FC<propType> =
 ({ ourState, handleClick }) => {
    // State to hold the current time
    const [currentTime, setCurrentTime] = useState(new Date());

    // Effect hook to update the time every second
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(timer);
    }, []);

    // Formatting the time to be displayed
    const formattedTime = currentTime.toLocaleTimeString();

    return (
        <>
            <div className="text-2xl">Our state: {ourState}</div>
            <button onClick={handleClick}>Increment</button>
            <div>
                <h2>{formattedTime}</h2>
                <p>Coming soon</p>
            </div>
        </>
    )
}

export default HomeUpdate;
