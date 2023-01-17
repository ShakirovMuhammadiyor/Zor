import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Skeleton from '@mui/material/Skeleton';

const Tabb = styled(Tab)(({ theme }) => ({
  fontSize: '1.01rem', 
  pl: 3, 
  pr: 3, 
  fontWeight: 700
}));



export default function SubjectTabs({ TabSelected, handleClick, data }) {
    return (
        <Tabs value={TabSelected} onChange={handleClick} textColor="secondary" indicatorColor="secondary">
          {data.map((x, i) => <Tabb value={i} label={x} />)}
        </Tabs>
    );
  }