import React from "react";
//import "./PizzaCheese.css";
import img4 from "../../../../img/img4.png"

const PizzaChicken = () => {
    return (

        <section className="infoPizza">
            <div>
                <img src={img4} />
                <h3>Курка з сиром</h3>
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
                        <p>від 100грн</p>
                        <div class="ButtonWrap">
                            <a class="ButtonAdd" href="">+ Додати</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default PizzaChicken;


