import { createTheme, ThemeProvider } from '@mui/material';
import '@mui/material/styles/createPalette';
import { StoreProvider } from 'app/providers/StoreProvider';
import { initializeApp } from 'firebase/app';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';

declare module '@mui/material/styles/createPalette' {
  interface CommonColors {
    darkPurple: string;
  }
}

initializeApp({
  apiKey: "AIzaSyBiVo_iKkPEVBomj3PlxJAxd5Z4endzb_Y",
  authDomain: "crypto-portfolio-tracker-d8633.firebaseapp.com",
  projectId: "crypto-portfolio-tracker-d8633",
  storageBucket: "crypto-portfolio-tracker-d8633.firebasestorage.app",
  messagingSenderId: "6377369741",
  appId: "1:6377369741:web:c0b09c8cb90281f77eb2c4",
  // measurementId: "G-EK7JDRZ84T"
  databaseURL:"https://crypto-portfolio-tracker-d8633-default-rtdb.firebaseio.com/",

});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const theme = createTheme({
  palette: {
    secondary: {
      main: '#f4f7fd',
    },
    common: {
      darkPurple: '#0C1643',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: '#0C1643',
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 450,
      md: 990,
      lg: 1440,
      xl: 1900,
    },
  },
});

root.render(
  <BrowserRouter>
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StoreProvider>
  </BrowserRouter>,
);
