// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Image from './component/Image';
import Gallery from './App';
import Clock from './component/Clock';
import Counter from './component/Counter';
import TrafficLight from './component/TrafficLight';
import RequestTracker from './component/RequestTracker';
import MovingDot from './component/MovingDot';
import Scoreboard from './component/Scoreboard';
import ListArr from './component/ListArr';
import ShoppingCart from './component/ShoppingCart';
import Form from './component/handleFormSubmit';
import Picture from './component/Picture';
import EditProfile from './component/EditProfile';
import Menu from './component/Menu';
import TravelPlan from './component/PlaceTree';
import MyComponent from './component/MyComponent'
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
import SyncedInputs from './component/SyncedInputs';
import Messenger from './component/Messenger';

import TaskApp from './component/TaskApp';

import Scoreboard2 from './component/Scoreboard2';
import ThemeContextApp from './component/ThemeContextApp';
const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(<>
  <APP />
  {/* <Image></Image>
  <Gallery />
  <Clock></Clock>
  <Counter></Counter>
  <TrafficLight></TrafficLight>
  <RequestTracker></RequestTracker> */}
  {/* <MovingDot></MovingDot> */}

  {/* <Scoreboard></Scoreboard>
  <ListArr></ListArr>
  <ShoppingCart></ShoppingCart> */}

  {/* <Form></Form> */}
  {/* <Picture></Picture> */}
  {/* <EditProfile></EditProfile> */}

  {/* {<Menu />} */}
  {/* <TravelPlan></TravelPlan> */}
  {/* <SyncedInputs/> */}
  {/* <MyComponent></MyComponent> */}
  {/* <Scoreboard2></Scoreboard2>
  <Messenger></Messenger> */}
  {/* <TaskApp></TaskApp> */}
  {/* <ThemeContextApp></ThemeContextApp> */}
</>)