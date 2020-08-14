import React, { useState } from 'react';

function App() {
    const currentTime = new Date().toLocaleTimeString();
    const [time, setTime] = useState(currentTime);

    function updateTime() {
        const newTime = new Date().toLocaleTimeString();
        setTime(newTime);
    }

    setInterval(updateTime, 1000); // Here 1sec is specified but u can also leave it blank then it will set to default value i.e. 1sec

    return(
        <div>
        <h1>{time}</h1>
        {/* Uncomment the button to manually update time. */}
        {/* <button onClick= {updateTime}>Get Time</button>  */}
        </div>
    );
}

export default App;