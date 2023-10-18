import React from 'react'


const Person = (props) => {


    const changeHandler = () => {
    alert('hello')
    }

  

    console.log(props)
  return (
    <div className='container'>
        {props.users.map((people,index) => {
            return (
                <div className='card' onClick={changeHandler} key={index}>
                    <h2 className='name-card'>{people.firstName}</h2>
                    <h3 className='car-model'>{people.carModel}</h3>
                    <p className='card-email'>{people.email}</p>
                    <p className='card-gender'>{people.gender}</p>
                    <h4>{people.id}</h4>

                    

                </div>
            )
        })}
       
        
    </div>
  )
}

export default Person