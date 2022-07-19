import React,{useEffect,useState} from 'react'
import Pagination from '@mui/material/Pagination'
import {Box,Stack,Typography} from '@mui/material'
import {exerciseOptions,fetchData} from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'
import Loader from './Loader';


function Exercises({bodyPart,exercises,setExercises}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  const allExercisesURL = 'https://exercisedb.p.rapidapi.com/exercises'
  const exercisesURL = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData(allExercisesURL, exerciseOptions);
      } else {
        exercisesData = await fetchData(exercisesURL, exerciseOptions);
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

    // Pagination
    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);
  
    const paginate = ( value) => {
      setCurrentPage(value);
  
      window.scrollTo({ top: 1800, behavior: 'smooth' });
    };
  
    if (!currentExercises.length) return <Loader />;

  return (
    <Box id='exercises' mt='50px' p='20px' sx={{mt:{lg:'110px'}}}>
      <Typography variant='h3' mb='46px'>
        Showing Results
      </Typography>
      <Stack direction='row' flexWrap='wrap' justifyContent='center' sx={{gap:{lg:'110px', xs:'50px'}}}> 
       {exercises.map((exercise, index) => (
        <ExerciseCard key={index} exercise={exercise}/>
       ))}
      </Stack>
      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  )
}

export default Exercises