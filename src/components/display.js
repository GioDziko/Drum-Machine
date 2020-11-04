import React,{Component} from "react";
import "./css/display.css";
import Box from "./box";
export default class Display extends Component{
    
    constructor(props){
        super(props);
        this.state={
            keys:   [
            {text:"Q" , link:'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' , sms:"gio gio"},
            {text:"W" , link:'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'},
            {text:"E" , link:'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'},
            {text:"A" , link:'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'},
            {text:"S" , link:'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'},
            {text:"D" , link:'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'},
            {text:"Z" , link: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'},
            {text:"X" , link:'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'},
            {text:"C" , link: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'}
        ]
        }
        this.reference=React.createRef();
        
    }
    render(){
        return(
            <div className="display" >
              {this.state.keys.map((item,index)=>(
                  <Box key={index} info={item}  /> 
              ))}

            </div>
        )
    }
}
