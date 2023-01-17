import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled, withStyles } from '@mui/material/styles';
import { Typography } from '@mui/material';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  backgroundColor: "#f4f4f4",
  borderRadius: "8px",
  '& .MuiToggleButtonGroup-grouped': {
    border: "0px solid #f4f4f4",
    borderRadius: "8px",
  }
}));

const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
    fontWeight: 600,
    color: "#37474f",
    "&.Mui-selected, &.Mui-selected:hover": {
      borderRadius: 4,
      color: "#f4f4f4",
      backgroundColor: "#ad1457",
    }
}));

export default function ColorToggleButton() {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <StyledToggleButtonGroup
      color="secondary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <StyledToggleButton value="web">Courses</StyledToggleButton>
      <StyledToggleButton value="android">Content</StyledToggleButton>
      <StyledToggleButton value="ios">Forum</StyledToggleButton>
    </StyledToggleButtonGroup>
  );
}