import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import "./Project.css"
import Project1 from './Project1';
const Project = () => {
  return (
           <>
           
                  <div className="project_container">

                 <div className="sidebar">
                            <div className="sidebar_part">
                            <Router>
        <div>
     

          <ul>
           
            <li className='list'> 
            <img src="profile.png" alt="" />
             <Link className='Link' to="/Project">Profile</Link>
            </li>
            <li className='list'><img src="pen.png" alt="" />
              <Link className='Link' to="/project1">Projects</Link>
            </li>
            <li className='list'> 
                <img src="fin.png" alt="" />
              <Link className='Link' to="/protected">Finance</Link>
            </li>
            <li className='list'>
            <img src="support.png" alt="" />
              <Link className='Link' to="/protected">Support</Link>
            </li>
 
          </ul>

          <Routes>
            <Route path="/public" >
           
            </Route>
            <Route path="/project1" element={<Project1/>}>
          
            </Route>
           
             
          
          </Routes>
        </div>
      </Router>
                                 {/* <img src="profile.png" alt="" />
                                 <h1>Profile</h1> */}
                            </div>
                           

                         {/* <h1>fhkjsuh</h1>
                         <h1>fhkjsuh</h1><h1>fhkjsuh</h1><h1>fhkjsuh</h1> */}
                 </div>
     

<div className="sidebar_divider">


        


</div>

                    

                  </div>
           
           
           
           </>

    
  )
}

export default Project