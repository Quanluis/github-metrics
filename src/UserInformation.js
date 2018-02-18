import React, { Component } from 'react';
import './UserInformation.css';

class UserInformation extends Component {
    render() {
        const { info } = this.props;
        if (!info) {
            return <h1 className='UserInformation--header vertical-center'>Please Select a User</h1>
        }
        console.log(info)
        return (
            <div className="UserInformation--container">
                <h1 className="UserInformation--header">{info.login}</h1>
                <div className="UserInformation--avatar-container">
                    <img src={info.avatar_url}
                        alt={info.login}
                        className="UserInformation--avatar" />
                </div>
            </div>
        )
    }
}

export default UserInformation;