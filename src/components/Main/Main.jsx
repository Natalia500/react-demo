import React from "react";
import "./Main.css";
import PizzaCheeseburger from "./MainAllPizzas/PizzaCheeseburger/PizzaCheeseburger";
import PizzaCheese from "./MainAllPizzas/PizzaCheese/PizzaCheese";
import PizzaShrimp from "./MainAllPizzas/PizzaShrimp/PizzaShrimp";
import PizzaChicken from "./MainAllPizzas/PizzaChicken/PizzaChicken";


const Main = () => {
    return (
        <div>
            <h2>Всі піцци</h2>
            <div className="allPizzas">
                <PizzaCheeseburger />
                <PizzaCheese />
                <PizzaShrimp />
                <PizzaChicken />
            </div>
            <div className="allPizzas1">
                <PizzaCheeseburger />
                <PizzaCheese />
                <PizzaShrimp />
                <PizzaChicken />
            </div>
        </div>
    )
}

export default Main;