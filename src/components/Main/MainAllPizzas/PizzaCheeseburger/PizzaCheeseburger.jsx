import React from "react";
import "./PizzaCheeseburger.css";
import img1 from "../../../../img/img1.png"

const PizzaCheeseburger = () => {
    return (

        <section className="infoPizza">
            <div>
            <img src={img1} />
            <h3>Чізбургер-піцца</h3>
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
                    <p>від 60грн</p>
                    <div class="ButtonWrap">
                        <a class="ButtonAdd" href="">+ Додати</a>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default PizzaCheeseburger;








