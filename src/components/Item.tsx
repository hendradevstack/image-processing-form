import React from 'react'
import { Box } from "@mui/material";
import { styled } from '@mui/material/styles';

const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
}));

export default Item;