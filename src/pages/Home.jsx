import React,{useState} from 'react'
import {Box} from '@mui/material'
import { Exercises, SearchExercises,HeroBanner } from '../components'



const Home = () => {
  const [exercises, setExercises] = useState([])
  const [bodyPart, setBodyPart] = useState('all')

  return (
    <Box>
      <HeroBanner />
      <SearchExercises bodyPart={bodyPart} setBodyPart={setBodyPart} setExercises={setExercises}/>
      <Exercises  bodyPart={bodyPart} exercises={exercises} setExercises={setExercises}/>
    </Box>
  )
}

export default Home