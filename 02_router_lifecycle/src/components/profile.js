import React from 'react';
import { Link } from 'react-router-dom';

import Card from '../HOC/card';
import Auth from '../HOC/auth';

const Profile = (props) => {

    return (
        <Auth>
            <Card>
                <Link to={{
                    pathname: `${props.match.url}/posts`
                }}>Take me to /profile/posts
                </Link>
            </Card>
        </Auth>
        
    )
}
export default Profile;