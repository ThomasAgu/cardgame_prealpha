import React from 'react'
import { useEffect } from 'react'
const FeedbackComponent = ({active,setActive,descripcion, color}) => {

    useEffect(()=>{
            var per = 100
            const interval = setInterval(() =>{
                const barra = document.getElementById('barra');
                if (barra !== null){
                    per = per - 1
                    barra.style.width = per +"%"
                }
                }, 50)
            return () => {
                clearInterval(interval)
        }
    }, [active])
    
    useEffect(()=>{
        if(active){
            const interval = setTimeout(() => {
                setActive(false)
            }, 5000);

        return () => clearInterval(interval);
        }
    }, [active]);

   
  return (
    <>
        {active &&
        <div id='feedbackComponent' style={{'backgroundColor': color}}>
            <div id='barra'></div>
            <button onClick={()=> setActive(false)}>x</button>
            <h3>{descripcion}</h3>
        </div>
        }
    </>
  )
}

export default FeedbackComponent