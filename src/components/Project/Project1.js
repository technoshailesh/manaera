import React from 'react'
import "./Project1.css"
import ProjectRow from './SingleProject/ProjectRow'

const Project1 = () => {
  return (

    <> 
    <span className='head'>Project</span>
    <img  className='head1' src="pen.png" alt="" />
    <div className='project'>
    <div className="coloum">
            <span className='coloum_item'>Name</span>
            <span className='coloum_item2'>About</span>
            <span className='coloum_item3'>Status</span>
    </div>  
        <div className="div"> 
        <ProjectRow src={"Ellipse.png"} name={"Garam Masala"} status={"Active"}/>
        <div className="divider">

        </div>
         <ProjectRow src={"Ellipse1.png"} name={"Hotels"} status={"Active"}/>
 <div className="divider">

            </div>

         <ProjectRow src={"Ellipse1.png"} name={"Technology"} status={"Upcoming"}/>

         <div className="divider">

</div>

<ProjectRow src={"Ellipse2.png"} name={"fmcg"} status={"Finished"}/>


            </div> 
           

          
    </div>
   

    </>
   
  )
}

export default Project1