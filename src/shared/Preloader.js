import { Avatar, Box, Typography } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
import React from 'react'
import logo from '../media/logo.png'

export default function Preloader() {
    return (
        <div>

            <Box
                height="100vh"
                width="100vw"
                display="flex"
                alignItems="center"
                justifyContent="center"

            >   
                    <Avatar src={logo} />
            </Box>
            
            <Box
                height="100vh"
                width="100vw"
                display="flex"
                alignItems="center"
                justifyContent="center"
                position="absolute"
                top={0}

            >
                <Box  
                    className="loading"
                    
                />
            </Box>
        </div>
    )
}
