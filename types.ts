export type MediaItem = {
  category: string;
  // isBookmarked: boolean;
  isTrending: boolean;
  rating: string;

  thumbnail: {
    regular: {
      large: string;
      medium: string;
      small: string;
    };
    trending?: {
      large?: string;
      small?: string;
    };
  };
  title: string;
  year: number;
};

// export type UserType = {
//   data(): any;
//   bookmarkedMovies: MediaItem[];
//   email: string;
//   fullName: string;
//   name: string;
//   profileImage: string;
//   surname: string;
//   username: string;
// };

export type UserType = {
  data(): any;
  bookmarkedMovies: MediaItem[];
  email: string;
  fullName: string;
  name: string;
  profileImage: string;
  surname: string;
  username: string;
  phoneNumber: number;
};
