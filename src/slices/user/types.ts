export interface IUser {
  name: string;
  email: string;
  hasAccess: boolean;
}

export enum NameSpace {
  User = "USER",
}
