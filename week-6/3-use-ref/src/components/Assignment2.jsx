import React, { useState, useCallback , useRef, useEffect} from 'react';

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

export function Assignment2() {
    const [forceRender,setForceRender] = useState(0);
    const countRef = useRef(forceRender);

    // useEffect(() => {
    //     handleReRender()
    // },[countRef.current])

    const handleReRender = () => {
        // Update state to force re-render
        setForceRender(forceRender+1);
        countRef.current += 1;
        console.log('rendering...'+countRef.current);
    };

    return (
        <div>
            <p>This component has rendered {countRef.current} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
};