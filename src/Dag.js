import React from 'react'
import SkillTreeContainer from "./SkillTreeContainer";
import StateStore from "./StateStore";

import { barbskills } from "./skills/barb";


const d4classes = {
    Barbarian: 'barbarian',
    Rogue: 'rogue',
}


function Dag() {
  return (
    <div className="Dag">
      <SkillTreeContainer
        d4class = {d4classes.Barbarian}
        skills = {barbskills}>
      </SkillTreeContainer>
    </div>
  )
}

export default Dag