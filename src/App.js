import { createTheme,  ThemeProvider } from '@material-ui/core'
import { blue } from '@material-ui/core/colors'
import React, {Suspense, lazy} from 'react'
import './App.css'
import 'fontsource-roboto'


const LoggedInComponent = lazy(() => import('./logged_in/components'))
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
  const isLoggedin = false
  return (
    <div >
      <ThemeProvider theme = {theme}>
        <Suspense fallback={<div>ddd</div>} >
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
