import React from 'react'
import SkillButton from './SkillButton'

import { memo, useState, useEffect } from "react"

import StateStore from "./StateStore";




function SkillTreeContainer({d4class,skills,lines, total, increase, decrease}) {

    const [tiers, setTiers] = useState('');
    



    useEffect(() => {
        if (total === 0) {
            setTiers({
                tier1: 0,
                tier2: 0,
                tier3: 0,
                tier4: 0,
            });
        }
    }, [total]);
    const tiersArray = Object.values(tiers);

    const incTiers = (tier) => {
        setTiers(state => {
            return { ...state, [tier]: tiers[tier] + 1 }
        });
    }
    const decTiers = (tier) => {
        setTiers(state => {
            return { ...state, [tier]: tiers[tier] - 1 }
        });
    }

    
    const remove = StateStore((state) => state.remove);

    return (

        

        
    <div className="SkillTreeContainer">
        <div>{d4class}</div>

        <div>TOTAL: {total}</div>

        {/*
        {lines.map((value) => {
            return <div key={value} className="line" id={value}>LINE</div>
        })}
        */}

        <div>Tiers</div>
        {tiersArray.map((value) => {
            return <div>tiers - {value}</div>
        })}


        <button
 onClick={() => { remove() }}
          ><p>RESET ALL</p>
      </button>



        {skills.map((value) => {


        return <SkillButton
                key={value + value.square}
                d4class = {d4class}
                skill = {value}
                total={total}
                increase={increase}
                decrease={decrease}
                tiersArray = {tiersArray}
                decTiers={decTiers}
                incTiers={incTiers}
                >
            </SkillButton>



        })}
       
       


    </div>
  )
}

export default memo(SkillTreeContainer)