import React from "react";
import style from './card.css';


export default function Card (props) {
    const {title,discription,price,speed,backgroundColor,isSelected}= props;
    return(
<div className={isSelected ? style.selectedCard : style.card}>   
<div className="card-header" style={{backgroundColor: backgroundColor}}>
            <h4 className={style.card_title}>{title}</h4>
            <div className={style.card_price}> {price}
            <p className={style.card_speed_cur}>руб</p>
            </div>
            </div>
        <div className= {style.card_footer}>
        <p className={style.card_speed}>{speed}</p>
       
            <p className={style.card_text}>{discription}</p>
            </div>
    </div>
    )
}
