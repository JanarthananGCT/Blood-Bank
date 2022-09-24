import React from "react";
import Link from "next/link";

function Footer() {
    return (
        <>
            
            <div className="flex flex-col justify-center items-center text-center  p-2 bg-gray-50" id="foo">
                <h1 className=" text-gray-800 font-semibold" id="heading">
                <span id="copy">©️</span> 2022-2023 All rights reserved | <Link href="http://www.google.com" target="_blank"><a id="foa">DevTech</a></Link> {" "}{" "}
                    <span >
                    ❤️{" "}
                    </span>
                </h1>
            </div>
        </>
    );
}

export default Footer;