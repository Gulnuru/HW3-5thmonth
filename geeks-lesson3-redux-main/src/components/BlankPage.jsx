import React, { useEffect, useState } from 'react'
import { addBlunk } from '../store/blankReducer'
import { useSelector,useDispatch } from 'react-redux'

const BlankPage = () => {
  const [age, setAge] = useState(0)
  const [name, setName] = useState('')
  const [gender, setGender] = useState('man')
  const names = useSelector(state => state.blank.names)

  const dispatch = useDispatch()

  useEffect(()=>{

    console.log(names);
  }, [names])
  const onButtonClick = () => {
    if (name.trim() !== '' && age.trim() !== 0){
        dispatch(addBlunk({
           name:name,
           age:age,
           gender: gender
        }))
        setName('')
        setAge(0)
    }
}


  return (
    <div>
      <h4>blank</h4>
      <input type='number' onChange={e => setAge(e.target.value)} value={age} />
      <input type='text' onChange={e => setName(e.target.value)} value={name} />
      <select value={gender} onChange={(e)=>setGender(e.target.value)}>
        <option>man</option>
        <option>woman</option> 
      </select>

      <button onClick={onButtonClick}>Добавить</button>
      <br />
     
       {
        names && names.length > 0 &&
        <ul>
          {
            names.map((el, i) => <li key={i}>{el.name}, {el.age}, {el.gender}</li>)
          }
        </ul>
       }
    </div>
  )
}

export default BlankPage
