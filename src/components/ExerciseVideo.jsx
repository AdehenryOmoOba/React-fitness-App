import React from 'react'
import {Box,Stack,Typography} from '@mui/material';
import Loader from './Loader';

const ExerciseVideo = ({exerciseVideos,name}) => {
      
  if (!exerciseVideos.length) return (<Loader />)

  return (
    <Box sx={{marginTop:{lg:'200px', xs:'20px'}}} p='20px'>
      <Typography variant='h3' mb='33px'>
       Watch <span style={{color:'#ff2625',textTransform:'capitalize'}}>{name}</span> exercise videos
      </Typography>
      <Stack justifyContent='flex-start' flexWrap='wrap' alignItems='center' sx={{flexDirection:{lg:'row'}, gap:{lg:'110px', xs:'0px'}}}>
        {exerciseVideos?.slice(0,3).map((item, index) => (
          <a  key={index} href={`https://www.youtube.com/watch?v=${item.video.videoId}`} target='_blank' rel='noreferrer' className='exercise-video'>
           <img src={item.video.thumbnails[0].url} alt={item.video.title} />
           <Typography variant='h5' color='#000000'>
             {item.video.title}
           </Typography>
           <Typography variant='h6' color='#000000'>
             {item.video.channelName}
           </Typography>
          </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideo