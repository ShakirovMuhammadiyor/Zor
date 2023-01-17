import { createTheme } from '@mui/material/styles';
import { pink } from '@mui/material/colors';

const lightTheme = createTheme({
  palette: {
      primary: {
          main: "#ffffff"
      },
      secondary: {
          main: pink[900]
      },
      other: {
          main: "#f4f4f4"
      },
      other2: {
          main: "#37474f" 
      },
      other3: {
          main: "#7986cb"
      },
      text: {
        primary: "#37474f",
        secondary: "#37474f"
      }
  }
});

export default lightTheme;