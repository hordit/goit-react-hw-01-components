import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    black: "#212121",
    white: "#ffffff",
    accent: "#e7ecf2",
  },
  radii: {
    borderRadiusTop: "4px 4px 0 0",
    borderRadiusBottom: "0 0 4px 4px",
  },
  boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2)",
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
    
  </React.StrictMode>
);
