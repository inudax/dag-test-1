import React from 'react'
import { useState, useEffect, memo } from "react";
import StateStore from "./StateStore";

function SkillButton({key, d4class, skill, total, increase, decrease, tiersArray, decTiers, incTiers}) {

   const tierRequire = [
      0,
      2,
      6,
      11,
      21,
      38,
      65,
   ];


    const max = skill.max;
    
        const skilltier = skill.tier.num;
        const skilltiername = skill.tier.name;
        const currTierPoint = tiersArray[skilltier-1];


    const [count, setCount] = useState(0);


    const increment = () => {

      console.log('XX depend ' + skill.depend);
      console.log('XX id ' + skill.id);
      console.log('XX excluded ' + skill.excluded);

      if (count < max && total >= skill.pointsreq && skill.depend === undefined && skill.excluded != true ) {

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
        const highestreachedtier = tiersArray.findLastIndex((e) => e > 0) + 1

        console.log('highestreachedtier  ' + highestreachedtier);

        console.log('highestreachedtierREQ  ' + tierRequire[highestreachedtier-1]);
      
        if (count > 0 && total > tierRequire[highestreachedtier-1] + 1){
          dec();
        } else if (count === 1 && currTierPoint === 1 && highestreachedtier === skilltier) {
          dec();
        }
        

    }


    useEffect(() => {
      if (total >= skill.pointsreq && skill.depend === undefined) {
        skill.available = true;
      }
      if (total < skill.pointsreq) {
        skill.available = false;
      }
    }, [total]);



  useEffect(() => {
        if (count > 0) {

            if (skill.dependency) {
              skill.dependency(true);
              console.log('Update dependency');
            }
            
        }

    }, [count, skill.available]);


    useEffect(() => {
      if (skill.has_exclude) {
      if (count > 0) {

          
            skill.to_exclude(true);
            console.log('Update exclusion');
          
          
      } else if (count === 0) {

        
          skill.to_exclude(false);
          console.log('Update exclusion');
        

      }
    }

    }, [count, skill.available]);



    useEffect(() => {
      if (total === 0) {
          setCount(0);
      }
  }, [total]);



  return (

    <div>

  

      <button
              tooltip='button'
              className='style'
              id='1'
              onClick={increment}
              onContextMenu={(e) => decrement(e)}
          ><p>{skill.square}:{key} --- {skill.id} --- {count}/{max} --- T{skilltier}/{currTierPoint}</p>
      </button>

    
   
    </div>
  )
}

export default memo(SkillButton)