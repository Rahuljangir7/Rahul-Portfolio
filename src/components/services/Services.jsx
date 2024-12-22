import React from "react";
import "./services.css";
import ServicesBox from "./ServicesBox";
import { service } from "../../data";

const Services = () => {
  return (
    <>
      <section class="services" id="services">
        <h2 class="heading">
          My <span>Services</span>
        </h2>
        <div class="services-container" >
        
       {
        service.map(({title,desc,button,Link})=>{
            return(
                <>
                <ServicesBox
            title={title}
            desc={desc}
            btn={button}
            link={Link}
            />
          
                </>
            )
        })
       }
          

        </div>
      </section>
    </>
  );
};

export default Services;
