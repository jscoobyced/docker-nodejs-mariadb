import { User } from "..";

export interface IUserService {
  getUsers: () => Promise<User[]>
}

export const UserService = (): IUserService => {
  const getUsers = async (): Promise<User[]> => {
    return new Promise((resolve, reject) => {
      let wait = setTimeout(() => {
        clearTimeout(wait);
        resolve([
          { username: 'Johnny', firstname: 'Johnny', lastname: 'Smith' },
          { username: 'Janet', firstname: 'Janet', lastname: 'Doe' },
          { username: 'Kelvin', firstname: 'Kelvin', lastname: 'Smith' },
        ]);
      }, 2000)
    });
  }

  return {
    getUsers
  };
}
