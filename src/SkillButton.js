import React from 'react'
import { useState, useEffect, memo } from "react";
import StateStore from "./StateStore";

function SkillButton({d4class,skill, total, increase, decrease}) {


    const max = 50;

    const [count, setCount] = useState(0);


    const increment = () => {
            setCount(state => state + 1);
    }
    const dec = () => {
        setCount(state => state - 1);
    }
    const decrement = (e) => {
        e.preventDefault()
            dec();
    }



  return (


    <button
            tooltip='button'
            className='style'
            id='1'
            onClick={increment}
            onContextMenu={(e) => decrement(e)}
        ><p>{skill.id} --- {count}/{max} --- </p>
    </button>


  )
}

export default memo(SkillButton)