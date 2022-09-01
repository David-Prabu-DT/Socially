export interface logInType {
  email?: string | number;
  password?: string | number;
}

export interface signUpType {
  firstName?: string;
  lastName?: string;
  email?: string | number;
  password?: string | number;
}

export interface userAuthType {
  _id?: number | string | null;
}

export interface postsType {
  _id?: number | string | null;
}

export interface profileUserType {
  relationship?: string;
  livesIn?: string;
  worksAt?: string;
}

export interface uploadPostType {
  userId?: string | number | null;
  desc?: string | null;
  image?: string | Blob | null | undefined;
}

export interface postDataType {
  createdAt: string;
  post: object[];
  _id: number | string;
  userId?: number | string;
  image?: string;
  profile?: string;
  name?: string;
  date?: string;
  desc?: string;
  likes?: string;
  liked?: boolean;
}

export interface personData {
  _id?: number | string;
  person?: object[];
  followers?: number[] | string[];
}

export interface authDataType {
  _id?: string | never,
  username?: string,
  password?: string,
  firstname?: string,
  lastname?: string,
  isAdmin?: boolean,
  followers?: string[] | number[],
  following?: string[] | number[],
  createdAt?: string,
  updatedAt?: string,
  worksAt?: string,
  profilePicture?: string | null;
  coverPicture?: string | null;
  __v?: number
}

export interface postsDataType {
  _id?: string,
  userId?: string,
  desc?: string,
  likes?: string[] | number[],
  createdAt?: string,
  image?: string,
  updatedAt?: string,
  __v?: number
  filter: Function;

}
