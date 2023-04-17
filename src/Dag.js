import React from 'react'
import SkillTreeContainer from "./SkillTreeContainer";
import StateStore from "./StateStore";

import { barbskills } from "./skills/barb";


const d4classes = {
    Barbarian: 'barbarian',
    Rogue: 'rogue',
}

const lines = ["pa-1", "pa-2"]

function Dag() {


    const total = StateStore((state) => state.total);
  
    const remove = StateStore((state) => state.remove);
   
    const increase = StateStore((state) => state.increase);
  
    const decrease = StateStore((state) => state.decrease);
  
    const addTotal = StateStore((state) => state.addTotal);




  return (


    <div className="Dag">
      
      <SkillTreeContainer
        d4class = {d4classes.Barbarian}
        skills = {barbskills}
        lines={lines}

        total={total}
            increase={increase}
            decrease={decrease}
      >
      </SkillTreeContainer>
    </div>
  )
}

export default Dag