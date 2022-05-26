import React from 'react'

// const Greet = ({name, place}) =>{ desctructuring in the function parameter
    const Greet = props =>{ 
        const {name, place} = props    //destructuring is the funcction body
        return(
        <div>
            <h1>
                Hello {name} You are from - {place}
            </h1>
        </div>
    )
}

export default Greet