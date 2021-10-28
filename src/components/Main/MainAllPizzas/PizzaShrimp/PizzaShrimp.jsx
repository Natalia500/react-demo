import React from "react";
//import "./PizzaCheese.css";
import img3 from "../../../../img/img3.png"

const PizzaShrimp = () => {
    return (

        <section className="infoPizza">
            <img src={img3} />
            <h3>Креветки по-азіатськи</h3>
            <div className="about">
                <div className="block">
                    <div className="basic">
                        <p className="activeLink">тонке</p>
                        <p>традиційне</p>
                    </div>
                    <div className="size">
                        <p className="activeLink">26 см</p>
                        <p>30 см</p>
                        <p>40см</p>
                    </div>
                </div>
                <div className="price">
                    <p>від 120грн</p>
                    <div class="ButtonWrap">
                        <a class="ButtonAdd" href="">+ Додати</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PizzaShrimp;