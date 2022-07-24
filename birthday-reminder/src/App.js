import React,{useState} from 'react';
import './App.css';
import List from './List';
import Data from './data'; 


function App() {

  const [people,setPeople] = useState(Data);

  return (
    <main>
      <section className="container"> 
        <h3>{people.length} Birthdays Today</h3>
        <List people={people} />
        <button onClick={()=>setPeople([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
