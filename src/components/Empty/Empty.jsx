import React from "react";
import { NavLink } from 'react-router-dom';
import "./Empty.css";
import logoEmpty from "../../img/logoEmpty.png";


const Empty = () => {
    return (
        <div className="MainEmptyBlock">
            <p className="title">Корзина пуста</p>
            <p>Вероятней всего, вы не заказывали ещё пиццу.<br />
             Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
            <div className="ImgBtnEmpty">
                <div>
                    <img src={logoEmpty} />
                    <button className="BtnBack"><NavLink to="/all">Назад</NavLink></button>
                </div>
            </div>
        </div>
    )
}

export default Empty;