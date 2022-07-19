import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Box} from '@mui/material'
import {fetchData,exerciseOptions,youtubeOptions} from '../utils/fetchData'
import { Detail, ExerciseVideo, SimilarExercises } from '../components'

const exerciseBDURL = 'https://exercisedb.p.rapidapi.com'
const youtubeSearchURL = 'https://youtube-search-and-download.p.rapidapi.com'



const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({})
  const [exerciseVideos, setExerciseVideos] = useState([])
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([])
  const [equipmentExercises, setEquipmentExercises] = useState([])

  const {id} = useParams()
  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDetailData = await fetchData(`${exerciseBDURL}/exercises/exercise/${id}`, exerciseOptions)
      setExerciseDetail(exerciseDetailData)
      const youtubeVideos = await fetchData(`${youtubeSearchURL}/search?query=${exerciseDetailData.name}`, youtubeOptions)
      setExerciseVideos(youtubeVideos.contents)

      const targetMuscleexerciseDetailData = await fetchData(`${exerciseBDURL}/exercises/target/${exerciseDetailData.target}`, exerciseOptions)
      setTargetMuscleExercises(targetMuscleexerciseDetailData)

      const equipmentexerciseDetailData = await fetchData(`${exerciseBDURL}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions)
      setEquipmentExercises(equipmentexerciseDetailData)
    }

    fetchExerciseData()
  },[id])

  return (
    <Box>
      <Detail exerciseData={exerciseDetail} />
      <ExerciseVideo exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}/>
    </Box>
  )
}

export default ExerciseDetail