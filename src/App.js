import React from "react";
import ReactDom from 'react-dom';

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Card from "./components/card";


export default function App(){
    return(
        <div className="app">
            <Navbar />
            <Hero />
            <div className="card-row">
                <Card 
                    img="image 12.png"
                    stars={"5.0"}
                    raters={6}
                    country="USA"
                    title="Life lessons with Katie Zaferes"
                    price={136}
                />
                <Card 
                    img="image 12.png"
                    stars={"5.0"}
                    raters={6}
                    country="USA"
                    title="Life lessons with Katie Zaferes"
                    price={136}
                />
                <Card 
                    img="image 12.png"
                    stars={"5.0"}
                    raters={6}
                    country="USA"
                    title="Life lessons with Katie Zaferes"
                    price={136}
                />
            </div>
        </div>
    )
}
console.log("hi")
const nums = [1,2,3,4,5]
const squared = nums.map(num => <p>{num*num}</p>)
console.log(squared)
