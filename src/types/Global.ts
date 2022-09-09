export interface LogInType {
  email?: string | number;
  password?: string | number;
}

export interface SignUpType {
  firstName?: string;
  lastName?: string;
  email?: string | number;
  password?: string | number;
}


export interface PostsType {
  _id?: number | string | null;
}

export interface ProfileUserType {
  relationship?: string;
  livesIn?: string;
  worksAt?: string;
}

export interface UploadPostType {
  userId?: string | number | null;
  desc?: string | null;
  image?: string | Blob | null;
}

export interface PostDataType {
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

export interface PersonData {
  _id?: number | string;
  person?: object[];
  followers?: number[] | string[];
}

export interface AuthDataType {
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

export interface PostsDataType {
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
