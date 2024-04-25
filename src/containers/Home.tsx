import React, { FC } from 'react'
import { Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Item from '../components/Item';

interface ComponentProps {

}

const Home: FC<ComponentProps> = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/create-transcript");
  };
  return (
    <Stack spacing={2}>
      <Item><Button variant="contained" onClick={handleClick}>Create Transcript</Button></Item>
      <Item>lalal</Item>
    </Stack>
  )
}

export default Home