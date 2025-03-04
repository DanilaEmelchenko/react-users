import { instance } from "../config/instance";

export interface IUserResponse {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export class User {
  static async fetchUsers(): Promise<IUserResponse[]> {
    const response = await instance.get<IUserResponse[]>("/users");

    return response.data;
  }
}
