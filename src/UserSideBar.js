import React from 'react';
import './UserSideBar.css';

const UserItem = props => {
    const {info} = props; 
        const {user, selectedUser, onSelect, removeUser } = props;
        const classes = selectedUser === user ? 
                            'UserSideBar--list-item active' : 
                            'UserSideBar--list-item';
        return (<li className={classes}>
                    <button onClick={() => onSelect(user)}>
                        {user}
                    </button>
                    <span onClick = {() => removeUser(user)}>X</span>
                </li>);
    }

const UserList = props => {
    const {info} = props;
        const { users, selectedUser, onSelect, removeUser } = props;
        const Users = users.map((user, index) => <UserItem 
                                                        key={index}
                                                        user={user}
                                                        onSelect={onSelect}
                                                        selectedUser={selectedUser}
                                                        removeUser = {removeUser}
                                                        />)
        return (
            <ul className='UserSideBar--list'>
                {Users}
            </ul>
        );
    }

const UserSideBar = props => {
    const {info} = props;
        const { users, selectedUser, onSelect, removeUser } = props;
        
        return (
            <div className="UserSideBar--container">
                <h1 className='UserSideBar--header'>GitHub Users</h1>
                <UserList 
                    users={users}
                    selectedUser={selectedUser}
                    onSelect={onSelect}
                    removeUser = {removeUser}/>
                <div className="UserSideBar--user-form">
                    <form onSubmit={(e) => this.props.addUser(e, props.username)}>
                        <input type="text" 
                            value={props.username} 
                            placeholder='GitHub Username'
                            onChange={e => this.props.updateUser(e)}/> 
                    </form> 
                </div>
            </div>
        );
    }


export default UserSideBar;