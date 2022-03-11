import React from "react";
import ReactDom from 'react-dom';

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Card from "./components/card";
import list from "./components/data"

export default function App(){
    return(
        <div className="app">
            <Navbar />
            <Hero />
            <div className="card-row">
                {list.map(item => 
                    <Card 
                    key={item.id}
                    item={item}
                />
                    )}
                
            </div>
        </div>
    )
}

