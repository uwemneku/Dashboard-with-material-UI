import { Avatar } from '@material-ui/core'
import React from 'react'
import user from '../media/avatar.jpg'

function UserAvar({dimension}) {
    return (
        <Avatar
            src={user}
            style={{width:dimension, height:dimension}}
        />
    )
}

export default UserAvar
