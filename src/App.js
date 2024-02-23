import React from 'react';
import './App.css';
import Mainscreen from './compenents/mainscreen.js';
import SurveyAlert  from './compenents/SurveyAlert.js';
function App() {
    return (
        <div className="App">
            <header className="App-header">
            <SurveyAlert/>
                <Mainscreen />
            </header>
        </div>
    );
}

export default App;
