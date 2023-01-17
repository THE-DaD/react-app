import React, {useState} from 'react'
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom'


export default function Screen2(props){
    const [flag1, setFlag] = useState(true)
    const [color, setColor] = useState("red")
    const [numberArray, setNumberArray] = useState([0,1,2,3,4,5,6,7,8,9])
    const [counter, setCounter] = useState(0)
    const [image, setImage] = useState(['https://i.ytimg.com/vi/OF32HThiaTI/maxresdefault.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-juC-09ST80b518KgO03FmtpoPBaYrIBAqDlSoGoROMILDzR_YOQJCjg1YAs8IhHhlKU&usqp=CAU','https://upload.wikimedia.org/wikipedia/he/5/5c/Spongebob-squarepants.png','http://res.cloudinary.com/ananey/image/upload/c_scale,f_auto,q_auto,w_300/Nick//lihvet0bbuufwktvjay2','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvBwFDYHxYHPc5cwobNKgg7r6CoQBT_4znkXMwEZ0YOhjtKW_BItj8KLPqapbDGgA9gJk&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPpsTEFe4ZMeeWzxGu3hRGDaE0CL0kLtUm0704goTUWR2Ugfnk6yT7aVzW7OupBnUda5A&usqp=CAU'])
    console.log(image[counter])
    const [data, setData] = useState(["jkl", "jfld", "jlfd"])

    const [last, setLast] = useState()
    async function getImage(){

        const getData = async () => {
            const response = await axios.get(
                `https://random.imagecdn.app/500/150`
            );
        };
        console.log(getData);
        setLast(getData)
        
    }


     function func(){
        //getImage()
        //console.log( image)
         //setImage([...image, last])
         routerNavigate("/3")
    }
    let routerNavigate = useNavigate()

    return(
        <div style={{backgroundColor : props.color, width: "100%", height: "100%"}}>
                <button className="eye"> add</button>
                
                {image.map((item, index) =>  <img src={item} style={{width : 200, height: 200, objecFit: "cover" }}/>)}
        </div>
    )
    
}