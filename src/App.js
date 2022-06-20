import React, { useState } from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './pages/Nav';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Explore from './pages/Explore';
import Offers from './pages/Offers';
import Cards from './pages/Cards';
import BookNow from './pages/BookNow';
import Home from "./pages/Home";
import { RoomData } from "./RoomData"
import RoomDec from './pages/RoomDec';
function App() {
  const [roomList, setroomList] = useState(RoomData);
  return (
    <div className="App">

      <Nav />

      <Switch>
        <Route path='/Explore'>
          <Explore />
        </Route>
        <Route path='/AboutUs'>
          <AboutUs />
        </Route>
        <Route path='/Contact'>
          <Contact />
        </Route>
        <Route path='/Offers'>
          <Offers roomList={roomList} />
        </Route>
        <Route path='/Cards'>
          <Cards />
        </Route>
        <Route path='/BookNow'>
          <BookNow />
        </Route>
        <Route exact path='/' >
          <Home />
        </Route>
        <Route path="/:roomId">
          <RoomDec />
        </Route>
      </Switch>

    </div>

  );
}

export default App
