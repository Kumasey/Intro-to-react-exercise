import React from 'react';
import data from './data';
import Person from './component/person.jsx';

function App() {
    return (
        <div>
            <h1>Refactoring with webpack</h1>
            {data.map(info=> <Person key={info.id} {...info}/>)}
        </div>
    );
}
export default App;