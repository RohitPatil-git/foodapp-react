import React from "react";
import "./style.css";

const Card = ({ menu }) => {
   
  return (
    <>
      <div className="cards">
        {menu.map((elm) => {
            const {id , image , name , category , desc} = elm
          return (
           
              <div className="card-body" key={id}>
                <div className="card-img">
                  <img src={image} alt="" />
                  <div className="info">
                    <h3>{name} <span>{category}</span></h3>
                    
                    <p>
                     {desc}
                    </p>
                  </div>
                </div>
              </div>
           
          );
        })}
      </div>
    </>
  );
};

export default Card;
