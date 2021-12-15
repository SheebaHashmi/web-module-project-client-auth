import React from 'react';

const Friend = (props) => {
    
    return(
        <div>
            <h3>-{props.friend.name} -{props.friend.email}</h3>
        </div>
    )
}
export default Friend;