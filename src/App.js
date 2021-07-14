import { createTheme,  ThemeProvider } from '@material-ui/core'
import { blue } from '@material-ui/core/colors'
import React, {Suspense, lazy} from 'react'
import './App.css'
import 'fontsource-roboto'
import Preloader from './shared/Preloader';
import { Route, Switch } from 'react-router-dom'


const LoggedInComponent = lazy(() => import('./logged_in/'))
const LoggedOutComponent = lazy(() => import('./logged_out'))
const theme = createTheme({

  palette:{
      primary: {
          main: blue[600],
          dark: blue[900],
          contrastText: "white"
      },
      text:{
        secondary: "whitesmoke",
        hint:"gray"
        
      }
  }
})


export default function App() {
  const isLoggedin = true
  return (
    <div >
      <ThemeProvider theme = {theme}>
        <Suspense fallback={<Preloader />} >
          {
            isLoggedin ?
                      <Switch>
                        <Route path="/" component={LoggedInComponent} />
                      </Switch>
                      :
                      <Switch>
                        <Route path="/" component={LoggedOutComponent} />
                      </Switch>
                      
                      
          }
        </Suspense>
      </ThemeProvider>
    </div>
  )
}
