import React from "react";

function Language(props){
    return(
        <h2 className=" bg-gradient-to-r from-cyan-500 to-white p-[2px] rounded-full flex justify-center items-center">
            <span className=" text-white px-4 py-1 bg-[#222222] font-bold text-xs rounded-full">
                {props.name}
            </span>
        </h2>
    )
}

export default Language