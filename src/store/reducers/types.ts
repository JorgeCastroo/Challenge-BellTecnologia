export enum UserType {
  UPDATE_USER = "@filter/UPDATE_USER",
}

export type User = {
  cell: string;
  dob: { age: number };
  email: string;
  gender: string;
  id: {};
  location: {
    city: string;
    country: string;
    state: string;
    street: {
      number: number;
      name: string;
    };
  };
  login: { md5: string; username: string; uuid: string };
  name: {
    title: string;
    first: string;
    last: string;
  };
  nat: string;
  picture: { large: string };
  registered: string;
};

export interface UserState {
  readonly userMode: User;
}
