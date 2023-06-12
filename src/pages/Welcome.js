// // import React from "react";
// // import { Link } from "react-router-dom";
// // import PuppyCarousel from '../components/PuppyCarousel';

// // const Welcome = () => {
// //     return (
// //         <div className="min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 flex flex-col items-center justify-center">
// //             <div className="container mx-auto text-center p-5 bg-white rounded-lg shadow-2xl">
// //                 <h1 className="text-6xl font-bold text-purple-600 mb-5 border-b-2 pb-2">Welcome to GoodJob!</h1>
// //                 <p className="text-2xl text-blue-600 mb-10">You're probably not excited, but we sure are!</p>
// //                 <div className="flex justify-center space-x-5 mb-5">
// //                     <Link to="/login">
// //                         <button className="bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">Login</button>
// //                     </Link>
// //                     <Link to="/signup">
// //                         <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">Sign Up</button>
// //                     </Link>
// //                 </div>
// //             </div>
// //             <div className="mt-20 mx-auto pt-4 pb-1.75 px-4 max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden">
// //                 <PuppyCarousel />
// //             </div>
// //         </div>
// //     )
// // }

// // export default Welcome;

// import React from "react";
// import { Link } from "react-router-dom";
// import PuppyCarousel from '../components/PuppyCarousel';

// const Welcome = () => {
//     return (
//         <div className="min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 flex flex-col items-center justify-center">
//             <div className="container mx-auto text-center p-5 bg-white rounded-lg shadow-2xl">
//                 <h1 className="text-6xl font-bold text-purple-600 mb-5 border-b-2 pb-2">Welcome to GoodJob!</h1>
//                 <p className="text-2xl text-blue-600 mb-10">You're probably not excited, but we sure are!</p>
//                 <div className="flex justify-center space-x-5 mb-5">
//                     <Link to="/login">
//                         <button className="bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">Login</button>
//                     </Link>
//                     <Link to="/signup">
//                         <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">Sign Up</button>
//                     </Link>
//                     <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
//                         What even is this?
//                     </button>
//                 </div>
//             </div>
//             <div className="mt-20 mx-auto pt-4 pb-1.75 px-4 max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden">
//                 <PuppyCarousel />
//             </div>
//         </div>
//     );
// }

// export default Welcome;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import PuppyCarousel from '../components/PuppyCarousel';
// import AboutModal from "./Modals/About";

// const Welcome = () => {
//     const [modalOpen, setModalOpen] = useState(false);

//     const handleModalOpen = () => {
//         setModalOpen(true);
//     };

//     const handleModalClose = () => {
//         setModalOpen(false);
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 flex flex-col items-center justify-center">
//             <div className="container mx-auto text-center p-5 bg-white rounded-lg shadow-2xl">
//                 <h1 className="text-6xl font-bold text-purple-600 mb-5 border-b-2 pb-2">Welcome to GoodJob!</h1>
//                 <p className="text-2xl text-blue-600 mb-10">You're probably not excited, but we sure are!</p>
//                 <div className="flex justify-center space-x-5 mb-5">
//                     <Link to="/login">
//                         <button className="bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">Login</button>
//                     </Link>
//                     <Link to="/signup">
//                         <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">Sign Up</button>
//                     </Link>
//                     <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" onClick={handleModalOpen}>
//                         What even is this?
//                     </button>
//                 </div>
//             </div>
//             <div className="mt-20 mx-auto pt-4 pb-1.75 px-4 max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden">
//                 <PuppyCarousel />
//             </div>

//             <AboutModal isOpen={modalOpen} onClose={handleModalClose} />
//         </div>
//     );
// };

// export default Welcome;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import PuppyCarousel from '../components/PuppyCarousel';
import AboutModal from "../Modals/About";

const Welcome = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleModalOpen = () => {
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 flex flex-col items-center justify-center">
            <div className="container mx-auto text-center p-5 bg-white rounded-lg shadow-2xl">
                <h1 className="text-6xl font-bold text-purple-600 mb-5 border-b-2 pb-2">Welcome to GoodJob!</h1>
                <p className="text-2xl text-blue-600 mb-10">You're probably not excited, but we sure are!</p>
                <div className="flex justify-center space-x-5 mb-5">
                    <Link to="/login">
                        <button className="bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">Login</button>
                    </Link>
                    <Link to="/signup">
                        <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">Sign Up</button>
                    </Link>
                    <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" onClick={handleModalOpen}>
                        What even is this?
                    </button>
                </div>
            </div>
            <div className="mt-20 mx-auto pt-4 pb-1.75 px-4 max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden">
                <PuppyCarousel />
            </div>

            <AboutModal isOpen={modalOpen} onClose={handleModalClose} />
        </div>
    );
};

export default Welcome;