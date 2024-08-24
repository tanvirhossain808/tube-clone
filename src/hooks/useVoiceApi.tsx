// import { addItem } from "@/store/SearchSlice";
// import { useState } from "react";
// import { useDispatch } from "react-redux";

// const useVoiceApi = () => {
//     const [searchQuery, setSearchQuery] = useState<string>('');

//     // Check if window and SpeechRecognition are available (browser environment)
//     const SpeechRecognition =
//         typeof window !== 'undefined' && (window.SpeechRecognition || window.webkitSpeechRecognition);

//     const recognition = SpeechRecognition ? new SpeechRecognition() : null;
//     const dispatch = useDispatch();
//     // if (!recognition) return

//     const startVoiceRecognition = (): void => {
//         if (recognition) {
//             recognition.lang = 'en-US'; // Set the language
//             recognition.start(); // Start speech recognition

//             recognition.onresult = (event: SpeechRecognitionEvent) => {
//                 const transcript = event.results[0][0].transcript;
//                 setSearchQuery(transcript); // Update the state with the recognized speech
//                 dispatch(addItem(transcript));
//                 console.log('Transcript:', transcript);
//             };

//             recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
//                 console.error('Speech recognition error:', event.error);
//             };
//         } else {
//             console.log('Speech recognition not supported in this browser.');
//         }
//     };

//     // Handle input change
//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setSearchQuery(e.target.value);
//     };

//     // Return the necessary state and functions
//     return {
//         searchQuery,
//         startVoiceRecognition,
//         handleInputChange
//     };
// };

// export default useVoiceApi;
