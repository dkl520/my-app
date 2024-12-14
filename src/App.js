import logo from './logo.svg';
import cvs from './util/cvs.png';
import Profiles from './component/Profile';
import './App.css';
import List from './component/list';
import MyButton from './component/MyButton';
import { useState } from 'react';
import TodoList from './component/TodoList';
import Avatar  from './component/Avatar';
import Card from './component/Card';
import ItemList from './component/ItemList';
import Cup from './component/Cup';
function Greeting({ name }) {
    return <h1> hello，{name} </h1>
}



const user = {
    name: 'Jarvan Dan',
    imageUrl: cvs,
    imageSize: 190,
};

let isLoggined = true;

function Profile() {
    return (
        <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson"></img>
    );
}

const person = {
    name: 'Gregorio Y. Zara',
    imageId:"yXOvdOS",
    theme: {
      backgroundColor: 'black',
      color: 'pink'
    }
  };


function App() {

    let [count, setCount] = useState(0);
    return (
        // <div className='App'>
        //     <div className='App-header'>
        //         {/* <Greeting name="react" />
        //     <img src={cvs} className='avatar'></img>
        //     <MyButton buttonTitle="titles" /> */}
        //         {/* {  (isLoggined  &&  <Greeting name="react" />)} */}
        //         {(isLoggined && <header>Header</header>)}
        //         < Profile user={user}></Profile>


        //         <ul> <List></List> </ul>
        //         <MyButton buttonTitle="titles1" className="button" cc={setCount} />
        //         <span>当前值：{count}</span>
        //         <MyButton buttonTitle="titles2" className="button" cc={setCount} />
        //     </div>
        // </div>
        <section>
            <h1>Amazing scientist </h1>
            {/* <Profile /> */}
            {/* <Profile />
            <Profile />
            <Profiles></Profiles>
            <Profiles></Profiles>
            <Profiles></Profiles> */}
            <TodoList/>
            <TodoList/>
            <TodoList/>
            <TodoList/>
            <TodoList/>
            <TodoList/>
            <Card>
            <Avatar person={person} size={40} >  </Avatar>
            <Avatar person={person} size={40} >  </Avatar>
            <Avatar person={person} size={40} >  </Avatar>
            <Avatar person={person} size={40} >  </Avatar>
            </Card>
            <ItemList></ItemList>
            <Cup guest={1} />
            <Cup guest={2} />
            <Cup guest={3} />
        </section>
    );
}

export default App;
