import React,{useEffect,useState} from 'react'
import {Box,Typography,Button,Stack,TextField} from '@mui/material'

function SearchExercises() {
    const [search, setSearch] = useState('')

    const handleSearch = async () => {
      if(search){
        console.log(search)
      }
    }

  return (
     <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
     <Typography fontWeight={700} sx={{fontSize:{lg:'44px', xs:'30px'}}} mb='50px' textAlign='center'>
      Awesome Exercises You <br /> Should Know
     </Typography>
     <Box position='relative' mb='72px'>
      <TextField  type='text' height='76px' sx={{input:{fontWeight:'700', border:'none',borderRadius:'4px'},width:{lg: '800px', xs:'350px'}, backgroundColor:'#ffffff',borderRadius:'40px'}} placeholder='Search Exercises' value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())}/>
      <Button className='search-btn' sx={{bgcolor:'#ff2625' , color:'#ffffff', textTransform:'none', width:{lg:'175px', xs:'80px'}, fontSize:{lg:'20px', xs:'14px'},height:'56px',position:'absolute', right:'0'}} onClick={handleSearch}>Search</Button>
     </Box>
     </Stack>
  )
}

export default SearchExercises