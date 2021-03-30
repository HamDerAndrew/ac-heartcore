import React from "react";

const Footer = (props) => {
    return (
        <footer className="max-w-full bg-yellow-600">
            <div className="mx-auto max-w-screen-xl flex">
                <ul>
                <li className="text-black">{props.linkOne}</li>
                <li className="text-black">{props.linkTwo}</li>
                <li >{props.linkThree}</li>
                </ul>
            </div>
      </footer>
    )
}

export default Footer;