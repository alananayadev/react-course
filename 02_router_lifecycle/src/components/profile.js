import React from 'react';
import { Link } from 'react-router-dom';

import Card from '../HOC/card';
import Auth from '../HOC/auth';

const Profile = (props) => {

    const redir = () => {
        props.history.push('/')
    }

    return (
        <Card>
            <Link to={{
                pathname: `${props.match.url}/posts`
            }}>Take me to /profile/posts</Link>
            
        </Card>
    )
}

export default Profile