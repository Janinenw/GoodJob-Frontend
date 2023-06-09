import React from "react";
import { Link } from "react-router-dom";
import PuppyCarousel from '../components/PuppyCarousel';

const Welcome = () => {
    return (
        <div>
            <PuppyCarousel />
            <div className="container mx-auto text-center mt-20">
                <h1 className="text-5xl font-bold text-blue-500 mb-10">Welcome to Good Job!</h1>
                <p className="text-xl text-green-600 mb-20">We are so excited to have you here!</p>
                <div>
                    <Link to="/login">
                        <button className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded-lg mr-5">Login</button>
                    </Link>
                    <Link to="/signup">
                        <button className="bg-pink-500 hover:bg-pink-400 text-white font-bold py-2 px-4 rounded-lg">Sign Up</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Welcome;