import React from "react";
import instagram from "../assets/instagram.png"
import linkedin from "../assets/linkedin.png"
import twitter from "../assets/twitter.png"
import github from "../assets/github.png"

function Footer(){
    return(
        <footer className="flex justify-center gap-6 bg-gray-800 py-3">
            <a href="https://www.instagram.com/bryan.mcl/?hl=en" target = "_blank"><img className="w-7 bg-gray-400 p-1 rounded-md" src={instagram} alt="" /></a>
            <a href="https://www.linkedin.com/in/bryan-miraclo-a176141b6/" target = "_blank"><img className="w-7 bg-gray-400 p-1 rounded-md" src={linkedin} alt="" /></a>
            <a href= "#" target = "_blank"><img className="w-7 bg-gray-400 p-1 rounded-md" src={twitter} alt="" /></a>
            <a href="https://github.com/bryanmcl" target = "_blank"><img className="w-7 bg-gray-400 p-1 rounded-md" src={github} alt="" /></a>
        </footer>
    )
}

export default Footer