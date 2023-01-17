import {Link, useNavigate} from 'react-router-dom'
import React, {useState} from 'react'
import "./Arrows.css"
import "./walking.css"
import ericImage from "./images/eric.png"
import { render } from '@testing-library/react'


{/* <div className='standing'> <img  src={ericImage} style={{height: "150px", width: "150px" }}  alt="Walking Man"/></div> */}
export default function MiddelScreens(props){
    var navigate  = useNavigate()
    var currentScreen = props.screen;
    const [isExit, setIsExit] = useState(false)
    const [exitDir, setExitDir] = useState("")
    const [navDir, setNaveDir] = useState()
    const [isStart, setIsStart] = useState(true)e
    const [isSstanding, setIsStanding] = useState(false)


        

        function exitAnimation(exitDir){
            setIsExit(true)
            setIsStart(false)
            setExitDir("walking-mtb")

        }

    

        return(
        <div style={{backgroundColor: "green", width:"100vw", height:"100vh"}}> 
            {isStart ? <div className="walking-ttm">
                <img style={{height: "150px", width: "150px" }} src={ericImage}  alt="Walking Man"/>
               </div>  : null  }
            <button className='arrow-up' onClick={()=>  navigate(props.Up, {state: {previosePage: props.screen}})} ></button>
            <button className='arrow-down' onClick={()=> navigate(props.Down,{state: {previosePage: props.screen}})}></button>
            <button className='arrow-left' onClick={()=> navigate(props.Left,{state: {previosePage: props.screen}})}></button>
            <button className='arrow-right' onClick={exitAnimation}></button>
            {isExit ?  <div className={exitDir}>
                <img style={{height: "150px", width: "150px" }} src={ericImage}  alt="Walking Man"/>
                {setTimeout(() => {navigate(props.Right, {state: {previosePage: props.screen}})})}
                </div> : null}  

            

        </div>
    )
}
