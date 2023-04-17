import React from 'react'
import SkillButton from './SkillButton'



function SkillTreeContainer({d4class,skills}) {
  return (
    <div className="SkillTreeContainer">
        <div>{d4class}</div>


        
        {skills.map((value) => {


        return <SkillButton
                d4class = {d4class}
                skill = {value}
                >
            </SkillButton>



        })}
       
       


    </div>
  )
}

export default SkillTreeContainer