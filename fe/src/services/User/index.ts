import { User } from "..";
import { BACK_END_SERVICES_ENDPOINTS, BACK_END_URL } from "../../config/constants";

export interface IUserService {
  getUsers: () => Promise<User[]>
}

export const UserService = (): IUserService => {
  const getUsers = async (): Promise<User[]> => {
    const response = await fetch(`${BACK_END_URL}${BACK_END_SERVICES_ENDPOINTS.getUsers}`);
    return response.json();
  }

  return {
    getUsers
  };
}
