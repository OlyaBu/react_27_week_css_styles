import React from "react"
import './card.css'


export default function Card (props) {
    const {title,discription,price,speed}= props;
    return(
        <div className="card">
   

            <h4 className="card-title">{title}</h4>
            <div className="card-price"> {price}
            <p className="card-speed-cur">руб</p>
            </div>
       
        <div className="card-footer">
        <p className="card-speed">{speed}</p>
       
            <p className="card-text">{discription}</p>
            </div>
    </div>
    )
}
