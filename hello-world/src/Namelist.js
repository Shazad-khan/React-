import React from 'react'

function Namelist() {
  const names =['shazad', 'laxman', 'kiran', 'shazad']
  const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
    return <div>{nameList}</div>
}

export default Namelist