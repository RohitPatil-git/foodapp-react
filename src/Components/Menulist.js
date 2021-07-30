import React, { useState } from "react";
import { meal } from "./Meal";
import Card from "./Card";

const uniqueList = [
  "all",
  ...new Set(
    meal.map((curElm)=>{
      return curElm.category
    })
  ) 
  
]
console.log(uniqueList)

const Menulist = () => {
  const [menu, setMenu] = useState(meal);

  const filterList = (category) => {
    if(category === 'all'){
      setMenu(meal)
      return
    }

    const updateList = meal.filter((curElm) => {
      return curElm.category === category;
    });
    setMenu(updateList);
  };
  return (
    <div>
      <nav>
      {
        uniqueList.map((curBtn)=>{
          return(
            <button className="btn-style" onClick={() => filterList(curBtn)}>
        {curBtn}
        </button>
          )
        })
      }
        
        
      </nav>
      <Card menu={menu} />
    </div>
  );
};

export default Menulist;
