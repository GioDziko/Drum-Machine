import React,{Component} from "react"

export default class Box extends Component{
   constructor(props){
    super(props);
    this.reference=React.createRef();
  
   } 

   playsound=()=>{
    this.reference.current.play();
    }
    render(){
        const {info}=this.props
        return(
            <p onClick={this.playsound}>
                {info.text}
                <audio ref={this.reference} src={info.link} id={info.text} />
            </p>
        );
    }

}
document.addEventListener("keydown",(e)=>{
    const currentkey=e.key.toUpperCase();
    const audio=document.getElementById(currentkey);
    if(audio){
        audio.play();
    }
})
