import React, { useEffect, useRef } from 'react';
import LoadingBar, { LoadingBarRef } from 'react-top-loading-bar';

const Loading = () => {
    const loadingRef = useRef<LoadingBarRef>(null)
    useEffect(() => {
        loadingRef.current?.continuousStart();
        setTimeout(() => loadingRef.current?.complete(), 2000);
    }, [])
    return (
        <div>
            <LoadingBar ref={loadingRef} color="red" />
        </div>
    );
};

export default Loading;