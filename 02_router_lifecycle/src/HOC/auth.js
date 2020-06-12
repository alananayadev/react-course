import React from 'react'

const Auth = (props) => {
    const pass = 'password1234'

    if (pass !== 'password1234'){
        return <h3>You're not allowed</h3>
    }else {
        return props.children
    }
}

export default Auth