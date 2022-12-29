
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import HomePage from './HomePage/HomePage';
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      {/* <header className="App-header">
        
      </header> */}
      <HomePage></HomePage>
      </ThemeProvider>
    </div>
  );
}

export default App;
