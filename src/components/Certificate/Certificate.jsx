import React from "react";
import "./Certificate.css";
import services_data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Certificate = () => {
  return (
    <div id="certificate" className="certificate">
      <div className="certificate-title">
        <h1>Certificates</h1>
      </div>
      <div className="certificate-container">
        {services_data.map((services,index)=>{
            return <div className="certificate-format" key={index}>
                <h3>{services.s_no}</h3>
                <h2>{services.s_name}</h2>
                <p>{services.s_desc}</p>
                <div className="certificate-readmore">
                    <p>Read more</p>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
        })}

      </div>
    </div>
  );
};

export default Certificate;
