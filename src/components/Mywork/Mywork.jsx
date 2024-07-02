import React from 'react'
import './Mywork.css'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'


const Mywork = () => {
  return (
    <div id='project' className='mywork'>
        <div className="mywork-title">
            <h1>My Latest Work</h1>
        </div>
        <div className="mywork-container">
            {mywork_data.map((mywork_data,index)=>{
                return(
                    <img key={index} src={mywork_data.w_img} alt="" />
                )
            })}          
        </div>
        <div className="arrow_icon">
            <p>Show more</p> 
            <img src={arrow_icon} alt="" />
        </div>
      
    </div>
  )
}

export default Mywork
