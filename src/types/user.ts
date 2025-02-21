export interface Root {
  user: User;
}

export interface User {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  collectionName: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}
