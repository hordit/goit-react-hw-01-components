import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    black: "#212121",
    white: "#ffffff",
    accent: "#e7ecf2",
    background: "#79c8ea9a", 
  },
  radii: {
    borderRadiusTop: "4px 4px 0 0",
    borderRadiusBottom: "0 0 4px 4px",
  },
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
    
  </React.StrictMode>
);
