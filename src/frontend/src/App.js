import './App.css';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CssBaseline from '@material-ui/core/CssBaseline';
import Board from './components/board';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const classes = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <div className={classes.root}>
      <div className="App">
        <Board />  
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
