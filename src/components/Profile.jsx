import React from "react";
import fotoprofil from "../assets/profile-photo.jpg"
import linkedinwhite from "../assets/linkedin_white.png"
import email from "../assets/email.png"

function Profile(){
    return(
        <div className="text-center">
            <img className="w-max" src={fotoprofil} alt=""/>
            <h1 className="text-white text-3xl font-bold mt-5">Bryan Miraclo</h1>
            <h2 className="text-cyan-500">Computer Science Major</h2>

            <div className="flex justify-between mt-4 px-10">
                <a href="mailto:bryan.miraclo@binus.ac.id" target = "_blank" className="bg-white py-2 w-32 rounded-md flex items-center justify-center gap-2">
                    <img className="w-5"src={email}/>
                    <p className="font-semibold">Email</p>
                </a>
                <a href = "https://www.linkedin.com/in/bryan-miraclo-a176141b6/" target = "_blank" className="bg-cyan-500 py-2 w-32 rounded-md flex items-center justify-center gap-2">
                    <img className="w-5"src={linkedinwhite}/>
                    <p className="font-semibold text-white">LinkedIn</p>
                </a>
            </div>
        </div>
    )
}

export default Profile