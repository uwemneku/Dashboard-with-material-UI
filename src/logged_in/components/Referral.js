import React from 'react'
import { useRouteMatch } from 'react-router-dom'

function Referral() {
    const matchUrl = useRouteMatch("/refreall")
    if (matchUrl){

        return (
    
                <div>
                    Referal
                </div>
        )
    }
}

export default Referral
