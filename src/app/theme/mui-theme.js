import { createTheme } from "@mui/material";

export const theme = createTheme({
    typography: {
      h1: {
        fontSize: '8rem',
        fontStyle: 'bold',
      },
      h4: {
        fontSize: '3rem',
        fontStyle: 'bold',
      },
      h5: {
        fontSize: '2rem',
        fontStyle: 'bold',
      }
    },  
    components: {
        MuiButton: {
          styleOverrides: {
            root: {
              '&:hover': {
                  backgroundColor: '#848486',
                },  
              fontWeight: 'bold', 
              fontSize: '1.2rem', 
              textTransform: 'none',
              backgroundColor: '#fafafa',
              color: '#363638',
              borderRadius: '0.5rem',
              lineHeight: '2.5rem'
            },
          },
        },
          MuiOutlinedInput: {
            styleOverrides: {
              root: {
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#363638',
                },
                borderRadius: '0.5rem',
                color: '#363638',
              },
              input: {
                color: '#09090b', 
              },
              notchedOutline: {
                borderColor: '#09090b',
              },
            },
          },
    },
});
