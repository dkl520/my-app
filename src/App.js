import logo from './logo.svg';
import cvs from './util/cvs.png';
import Profile from './component/Profile';
import './App.css';
import List from './component/list';
import MyButton from './component/MyButton';
import { useState } from 'react';

function Greeting({ name }) {
    return <h1> hello，{name} </h1>
}



const user = {
    name: 'Jarvan Dan',
    imageUrl: cvs,
    imageSize: 190,
};

let isLoggined = true;


function App() {

    let [count, setCount] = useState(0);
    return (
        <div className='App'>
            <div className='App-header'>
                {/* <Greeting name="react" />
            <img src={cvs} className='avatar'></img>
            <MyButton buttonTitle="titles" /> */}
                {/* {  (isLoggined  &&  <Greeting name="react" />)} */}
                {(isLoggined && <header>Header</header>)}
                < Profile user={user}></Profile>


                <ul> <List></List> </ul>
                <MyButton buttonTitle="titles1" className="button" cc={setCount} />
                <span>当前值：{count}</span>
                <MyButton buttonTitle="titles2" className="button" cc={setCount} />
            </div>
        </div>
    );
}

export default App;
