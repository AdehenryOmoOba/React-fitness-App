import React,{useContext} from 'react'
import {Box,Typography} from '@mui/material'
import BodyPart from './BodyPart'
import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu'
import RightArrowIcon from '../assets/icons/right-arrow.png'
import LeftArrowIcon from '../assets/icons/left-arrow.png'
import ExerciseCard from './ExerciseCard'

const LeftArrow = () =>{
    const {scrollPrev} = useContext(VisibilityContext)

    return (
        <Typography className='left-arrow' onClick={() => scrollPrev()}>
            <img src={LeftArrowIcon} alt="left-arrow" />
        </Typography>
    )
}
const RightArrow = () =>{
    const {scrollNext} = useContext(VisibilityContext)

    return (
        <Typography className='right-arrow' onClick={() => scrollNext()}>
            <img src={RightArrowIcon} alt="right-arrow" />
        </Typography>
    )
}


function HorizontalScrollbar({data,bodyPart,setBodyPart,isBodyPart}) {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map((item,index) => (
             <Box key={index} itemId={item.id || item} title={item.id || item} m='0px 40px'> 
             {isBodyPart ? <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/> : <ExerciseCard exercise={item}/>}
            </Box>
        ))}
    </ScrollMenu>
  )
}

export default HorizontalScrollbar