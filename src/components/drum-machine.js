import React,{Component} from "react";
import Display from "./display";
import "./css/drum-machine.css"

export default class Drum_machine extends Component{
    render(){
        return(
            <div className="drum_machine" >
            <Display />    
            </div>
        )
    }
}