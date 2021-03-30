import React from "react";

const Card = (props) => {
    return (
        <div className="container bg-yellow-300 w-96 shadow-md">
            <div className="image-container pb-3">
                <img className="max-w-full" src={props.assassinImage} alt="assassin"/>
            </div>
            <div>
                <h3 className="text-3xl pb-3">{props.cardHeader}</h3>
                <p className="pb-3">{props.cardDescription}</p>
            </div>
        </div>
    )
}

export default Card;

// https://www.google.com/search?q=html+cards&sxsrf=ALeKk00ZzkQB90DAwh8noSL0vznUF-UA3Q:1616352180429&source=lnms&tbm=isch&sa=X&ved=2ahUKEwieka-MhcLvAhVD3KQKHTBEDEQQ_AUoAXoECAEQAw&biw=1920&bih=937#imgrc=ETyb8SBtbjbFlM