import React from 'react'
import Person from './Person'

function PersonList() {
    const person=[
        {
            id: 1,
            name: 'shazad',
            age: 20,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Kiran',
            age: 20,
            skill:'java'
        },
        {
            id:3,
            name: 'laxman',
            age: 21,
            skill: 'angular'
        }
    ]
    const personList = person.map(person => <Person key={person.id} person={person} />)
  return <div>{personList}</div>
}

export default PersonList