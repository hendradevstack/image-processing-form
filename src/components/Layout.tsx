import React from 'react'
import { Container } from "@mui/material";
import { styled } from '@mui/material/styles';

const Layout = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(2),
}));

export default Layout;