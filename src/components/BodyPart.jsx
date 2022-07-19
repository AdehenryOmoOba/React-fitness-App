import React from 'react'
import {Typography,Stack} from '@mui/material'
import Icon from '../assets/icons/gym.png'

function BodyPart({item,bodyPart,setBodyPart}) {
  const handleClick = () => {
    setBodyPart(item);
    window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' })
  }

  return (
    <Stack type='button' alignItems='center' justifyContent='center' className='bodyPart-card' sx={{borderTop: bodyPart === item? '4px solid #ff2625' : '', backgroundColor:'#ffffff', borderBottomLeftRadius: '20px',width:'270px',height:'280px',cursor:'pointer', gap:'47px'}} onClick={handleClick}>
     <img src={Icon} alt='dumbbell' style={{width:'40px', height:'40px'}} />
     <Typography fontSize='24px' fontWeight='bold' color='#3a1212' textTransform='capitalize'>{item}</Typography>
    </Stack>
  )
}

export default BodyPart