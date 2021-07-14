import React from 'react'
import { useRouteMatch } from 'react-router-dom'

function Support() {
    const matchUrl = useRouteMatch("/support")
    if (matchUrl){

        return (
    
                <div>
                    Sipport
                </div>
        )
    }
}

export default Support
