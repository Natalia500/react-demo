import React from "react";
import { NavLink } from 'react-router-dom';
import "./HeaderMenu.css";



const HeaderMenu = () => {
    return (
        <section className="ContainerMenu">
            <div>
                <nav>
                    <ul>
                        <li><NavLink to="/all" activeClassName="activeLink">Всі</NavLink></li>
                        <li><NavLink to="/meat" activeClassName="activeLink">М'сні</NavLink></li>
                        <li><NavLink to="/vegetarian" activeClassName="activeLink">Вегетаріанські</NavLink></li>
                        <li><NavLink to="/grill" activeClassName="activeLink">Гриль</NavLink></li>
                        <li><NavLink to="/chili" activeClassName="activeLink">Гострі</NavLink></li>
                        <li><NavLink to="/closed" activeClassName="activeLink">Закриті</NavLink></li>
                    </ul>
                </nav>
            </div>
            <div class="seldiv">
                <label>Сортування по: </label><select id="selectvalue">
                    <option>по популярності</option>
                    <option>ціні</option>
                    <option>алфавіту</option>
                </select>
            </div>
        </section>
    )
}

export default HeaderMenu;