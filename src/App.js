import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import Main from "./components/Main/Main";
import MeatPizza from "./components/MeatPizza/MeatPizza";
import 'bootstrap/dist/css/bootstrap.min.css';
import Empty from "./components/Empty/Empty";


class App extends React.Component {


  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <div >
            <Header />
            <HeaderMenu />
            <Route path='/all' render={() => <Main />} />
            <Route path='/meat' render={() => <MeatPizza />} />
          </div>
          <Route path='/back' render={() => <Empty />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;