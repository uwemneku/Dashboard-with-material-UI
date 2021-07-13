import { createTheme,  ThemeProvider } from '@material-ui/core'
import { blue } from '@material-ui/core/colors'
import React, {Suspense, lazy} from 'react'
import './App.css'
import 'fontsource-roboto'
import Preloader from './shared/Preloader';


const LoggedInComponent = lazy(() => import('./logged_in/'))
const LoggedOutComponent = lazy(() => import('./logged_out'))
const theme = createTheme({

  palette:{
      primary: {
          main: blue[900],
          contrastText: "white"
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
                      <LoggedInComponent /> :
                      <LoggedOutComponent />
          }
        </Suspense>
      </ThemeProvider>
    </div>
  )
}
