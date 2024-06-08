import React from "react";
import "./styles.sass";
import ClientsSlider from "./ClientsSlider";

const OurClients = () => {
  return (
    <div className='partners'>
      <div className='container'>
        <div className='partnersTitle'>
          <h2 className='title'>Наши клиенты</h2>
        </div>
      </div>
      <ClientsSlider />
    </div>
  );
};

export default OurClients;
