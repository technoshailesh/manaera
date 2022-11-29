import React from 'react'
import "./ProjectRow.css"

const ProjectRow = (props) => {
  



  return (
   <>
      
   
           

           <div className="single">
        <img src={props.src} alt="" />
        <span  >  {props.name} </span>
        
        <span className='about'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nisi, mi, ornare aliquet. </span>
        <span>{props.status}</span>
     

      {/* 👇️ show component on click */}
      {/* {isShown && <GaramMasala />} */}
   </div>
   
   
   </>
  )
}

export default ProjectRow