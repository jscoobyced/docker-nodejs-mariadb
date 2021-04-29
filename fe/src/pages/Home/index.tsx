import React, { useContext, useEffect, useState } from 'react';
import './index.css';
import { AUTHOR, COPYRIGHT, RELEASE_YEAR, TITLE } from '../../config/constants';
import { User } from '../../services';
import { ServiceContext } from '../../services/context';

export const App = () => {

  const [users, setUsers] = useState([] as User[]);
  const { userService } = useContext(ServiceContext);

  useEffect(() => {
    userService.getUsers()
      .then(users => {
        setUsers(users);
      })
  }, [userService]);

  const buildUserList = () => {
    if (!users || users.length === 0) {
      return <span className='loading'>Loading...</span>;
    }
    const userList = users.map(user => {
      return <li key={'user-' + user.username}>{user.username}: {user.firstname} {user.lastname}</li>
    });
    return <ol>{userList}</ol>
  }

  const userList = buildUserList();

  const currentYear = new Date().getFullYear();

  const copyrightYear = (currentYear === RELEASE_YEAR ? '' : `-${currentYear}`);
  const copyright = <>
    {COPYRIGHT} &copy; {AUTHOR} - {RELEASE_YEAR}{copyrightYear}
  </>

  return (
    <>
      <header>
        <span>{TITLE}</span>
      </header>
      <main>
        <span>List of users:</span>
        {userList}
      </main>
      <footer>
        {copyright}
      </footer>
    </>
  );
}
