import React from "react";

const AboutModal = ({ isOpen, onClose }) => {
    return (
        isOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-white w-1/2 p-6 rounded-lg shadow-xl">
                    <h2 className="text-2xl font-bold mb-4">Good Question!</h2>
                    <p className="mb-4">GoodJob! helps you keep track of the jobs to which you've applied ( that way when you're sending out 200 cold applications, you won't apply to the same job twice).  GoodJob saves you from having to make, and then look at at a sad spreadsheet.  Sign up, log in, and see what happens! P.S. GoodJob! was created by an overwhelmed career changer, so as you're going through this process, know that we see you (but not in a creepy way)  </p>
                    <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-lg" onClick={onClose}>
                        Close
                    </button>
                </div>
            </div>
        )
    );
};

export default AboutModal;
