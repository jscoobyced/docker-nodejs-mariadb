import './index.css';
import { TITLE } from '../../config/constants';
import React from 'react';

export const App = () => {

  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    setUsers([]);
  }, []);

  return (
    <>
      <header>
        <span>{TITLE}</span>
      </header>
      <main>
        <span>List of users:</span>
        <ol>
          {users}
        </ol>
      </main>
      <footer>

      </footer>
    </>
  );
}
