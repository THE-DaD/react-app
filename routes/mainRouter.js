import {BrowserRouter as Router, Routes, Link, Route} from 'react-router-dom'
import {useParams} from 'react-router-dom'
import Screen2 from '../Screen2'
import {Link as link2, useNavigate} from 'react-router-dom'

import {useEffect, useState} from 'react'
import MiddelScreens from '../ScreenTypes/MiddelScreens'

// const noveScreen1 = (next, back) =>{



    

//     return(
//             <div>
//                 <button onClick={() => <Route path={"/"+ next} ></Route>}> next </button>
//                 <button   onClick={() => <Route path={"/"+ back} ></Route>}> back </button>
//                  </div>
     
//     )
// }
// const noveScreenNext = () =>{



    

//     return(
//             <div>
//                 <button onClick={() => <Route path="/" ></Route>}> next </button>
//                  </div>
     
//     )
// }

// const noveScreenBack = () =>{



    

//     return(
//             <div>
//                 <button onClick={() => <Route path="/" ></Route>}> back </button>
//                  </div>
     
//     )
// }
// const Comp2 = () =>{



//     let params = useParams()
//     // let showComp = false
//     // const [counter, setCounter] = useState(0)
//     // const [counter2, setCounter2] = useState(0)
//     // let names = ["jfdkls", "Blue", "Red", "Purple", "Pink"]
//     // const [name, setName] = useState("Null")
//     // console.log(params)
//     // if(params.id == "fdsss"){
//     //     showComp = true
//     // }

//     // useEffect(() => {
//     //     console.log("Counter Changed")
//     //     setName(names[counter])
//     // }, [counter, counter2])

//     return(
//             <div style={{backgroundColor : params.id , width: "100vw", height: "100vh" , BackgroundSize: "cover", }}>
//                 {params.id}
//                  </div>
     
//     )
    

export default function MainRouter(props){
    const [screenArray, setScreenArray] = useState(false)
    const [counter , setCounter] = useState(0)
    

    return(
        <div>
        <Router>
            <Routes>
                <Route path="/5" element={<MiddelScreens Up="/1" Down="/9" Left="/4" Right="/6" screen="5"/>} />
                <Route path="/1" element={<div><Link to="/2"> back </Link> <Link to="/home"> next </Link></div>} />
                <Route path="/2" element={<div><Link to="/home"> back </Link> <Link to="/1"> next </Link></div>} />
                <Route path="/3" element={<h1>Screen 3</h1>} />
                <Route path="/4" element={<h1>Screen 4</h1>} />
                <Route path="/0" element={<h1>Screen 5</h1>} />
                <Route path="/6" element={<MiddelScreens Up="/2" Down="/10" Left="/5" Right="/7" screen="6"/>} />

                <Route path="/7" element={<h1>Screen 5</h1>} />

                <Route path="/8" element={<h1>Screen 5</h1>} />

                <Route path="/9" element={<h1>Screen 5</h1>} />

                <Route path="/10" element={<h1>Screen 5</h1>} />

                <Route path="/11" element={<h1>Screen 5</h1>} />

                <Route path="/12" element={<h1>Screen 5</h1>} />

                <Route path="/13" element={<h1>Screen 5</h1>} />

                <Route path="/14" element={<h1>Screen 5</h1>} />

                <Route path="/15" element={<h1>Screen 5</h1>} />



                
            </Routes>
            
        </Router>
        </div>
    )
}

