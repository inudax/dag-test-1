import React from 'react'
import SkillButton from './SkillButton'

import { memo, useState, useEffect } from "react"



function SkillTreeContainer({d4class,skills,lines, total, increase, decrease}) {



    const [tiers, setTiers] = useState('');

    useEffect(() => {
        if (total === 0) {
            setTiers({
                row1: 0,
                row2: 0,
                row3: 0,
            });
        }
    }, [total]);





    return (
    <div className="SkillTreeContainer">
        <div>{d4class}</div>


        {lines.map((value) => {
            return <div key={value} className="line" id={value}>LINE</div>
        })}


        {skills.map((value) => {


        return <SkillButton
                d4class = {d4class}
                skill = {value}
                increase={increase}
                    decrease={decrease}
                >
            </SkillButton>



        })}
       
       


    </div>
  )
}

export default memo(SkillTreeContainer)