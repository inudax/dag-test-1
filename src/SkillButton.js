import React from 'react'
import { useState, useEffect, memo } from "react";
import StateStore from "./StateStore";

function SkillButton({d4class, skill, total, increase, decrease, tiersArray, decTiers, incTiers}) {


    const max = skill.max;

    const [count, setCount] = useState(0);


    const increment = () => {

      if (count < max && total >= skill.pointsreq && skill.depend === undefined ) {
            setCount(state => state + 1);
            increase(total);
            incTiers(skill.tier.name);

      }
    }
    const dec = () => {
        setCount(state => state - 1);
        decrease(total);
        decTiers(skill.tier.name);
    }
    const decrement = (e) => {
        e.preventDefault()
        const highestIndex = tiersArray.findLastIndex((e) => e > 0)

          dec();

    }



  return (

    <div>

  

      <button
              tooltip='button'
              className='style'
              id='1'
              onClick={increment}
              onContextMenu={(e) => decrement(e)}
          ><p>{skill.square} --- {skill.id} --- {count}/{max} --- </p>
      </button>

    
   
    </div>
  )
}

export default memo(SkillButton)