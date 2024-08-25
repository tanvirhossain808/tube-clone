import React, { useEffect, useRef } from 'react';

// Define the hook
const useIframeApi = (
    id: string,
    playerRef: React.RefObject<HTMLDivElement>,
    width?: number,
    height?: number,
    start?: number,
    volume?: number
) => {
    const playerInstance = useRef<any>(null);

    useEffect(() => {
        // Function to load the YouTube API script
        const loadYouTubeAPI = (callback: () => void) => {
            if (window.YT && window.YT.Player) {
                callback();
                return;
            }

            const script = document.createElement('script');
            script.src = 'https://www.youtube.com/iframe_api';

            script.onload = () => {
                if (window.YT && window.YT.Player) {
                    callback();
                }
            };

            document.body.appendChild(script);
        };

        // Function to create the YouTube player
        const createPlayer = () => {
            if (playerRef.current && window.YT && window.YT.Player && !playerInstance.current) {
                playerInstance.current = new window.YT.Player(playerRef.current, {
                    height: height?.toString() || '360',
                    width: width?.toString() || '640',
                    videoId: id,
                    playerVars: {
                        autoplay: 1,
                        start: start || 0,
                        rel: 0,
                    },
                    events: {
                        onReady: (event: any) => {
                            if (volume) event.target.setVolume(volume);
                        },
                    },
                });
            } else {
                console.error("YouTube Player API is not ready.");
            }
        };

        // Load the API and then create the player
        loadYouTubeAPI(createPlayer);

        // Cleanup function
        return () => {
            if (playerInstance.current) {
                try {
                    if (playerInstance.current.getIframe()?.parentNode) {
                        playerInstance.current.destroy();
                    }
                } catch (error) {
                    console.warn("Error during player destruction", error);
                }
            }
        };
    }, [id, width, height, start, volume, playerRef]);
};

export default useIframeApi;
