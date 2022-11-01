import React from "react";
import Language from "./Language"

function Description(){
    return(
        <div className="px-10 mt-10">
            <h1 className="text-white text-xl font-bold">About</h1>
            <p className="text-white text-[12px]">
                I am a univeristy student currently studying at Bina Nusantara University, majoring in Computer Science.
                I am really interested in becoming a FrontEnd Developer as it fits with my skillset.
                </p>
            <h1 className="text-white text-xl font-bold mt-5">Language & Framework</h1>
            <div className="flex mt-2 flex-wrap gap-4 mb-5">
                <Language name="HTML"/>
                <Language name="CSS"/>
                <Language name="JS"/>
                <Language name="Tailwind"/>
                <Language name="ReactJS"/>
            </div>
        </div>
    )
}

export default Description