import React from 'react'
import { useRouteMatch } from 'react-router-dom'

function FundAccount() {
    const matchUrl = useRouteMatch("/fund")
    if (matchUrl){

        return (
    
                <div>
                    Fund Account
                </div>
        )
    }
}

export default FundAccount
