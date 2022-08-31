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
  post: any;
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
  person: any;
  followers: any;
  _id: number | string;
}
