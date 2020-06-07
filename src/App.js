import React from 'react';
import './App.css';
import {Dropdown} from "./dropdown/Dropdown";

const items = [
    {id: 1, text: "Car 1"},
    {id: 2, text: "Car 2"},
    {id: 3, text: "Car 3"},
    {id: 4, text: "Car 4"},
    {id: 5, text: "Car 5"},
    {id: 6, text: "Car 6"},
];

function App() {
    return (
        <div className="app-container">
            <div className="dropdown">
                <Dropdown items={items} onSelect={(value) => {
                    console.log("Provide any function to be run for the selected item here")
                }}/>
            </div>
        </div>
    );
}

export default App;
