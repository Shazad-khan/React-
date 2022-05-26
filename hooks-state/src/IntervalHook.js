import React, {useState, useEffect} from 'react'

function IntervalHook() {
    const [count, setCount] = useState(0)

    const tick = () =>{
        setCount(count+1)
    }

    useEffect(() => {
        const invterval = setInterval(tick, 1000)        
        return()=>{
            clearInterval(invterval)
        }         
    }, [count])



  return (
    <div>
        {count}
    </div>
  )
}

export default IntervalHook