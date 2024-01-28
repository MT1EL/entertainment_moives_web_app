import { FormikErrors, FormikProps, FormikValues } from "formik";

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

export type InputType = {
  icon?: boolean;
  placeholder: string;
  setFunction?: any;
  handleBlur?: any;
  name: string;
  type: string;
  disabled?: boolean;
  error?: string | null;
  touched?: boolean;
  handleSubmit?: any;
};

export type ButtonType = { children: string; onClick: any; bg?: string };

export type MovieBannerType = {
  data: MediaItem;
  bookMarkHandler: any;
  bookmarked: boolean;
};

export type OverlayType = {
  handleClick: any;
  trending: boolean;
  bookmarked?: boolean;
};

export type TrendingCarouselType = {
  data: any;
  bookMarkedMovies: MediaItem[];
  id: string;
  refresh: any;
};

type TextStyles = {
  hl: { fontSize: string; fontWeight: string };
  hm: { fontSize: string; fontWeight: string };
  hs: { fontSize: string; fontWeight: string };
  hxs: { fontSize: string; fontWeight: string };
  hxxs: { fontSize: string; fontWeight: string };
  bm: { fontSize: string; fontWeight: string };
  bs: { fontSize: string; fontWeight: string; opacity?: string };
};

export type TextType = {
  children: string | number;
  size: keyof TextStyles;
  color?: string;
};

export type AuthenticationLayoutProps = {
  label: string;
  inputs: { label: string; name: string; setFunction: any; type: string }[];
  buttonLabel: string;
  footer_paragraph: string;
  footer_link: string;
  footer_link_href: string;
  onSubmit: any;
  error?: FormikErrors<{
    email: string;
    password: string;
    repeatPassword: string;
  }>;
  formik: FormikProps<FormikValues>;
};

export type PageLayoutType = {
  trending?: boolean;
  label: string;
  data: MediaItem[];
  bookMarkedMovies: MediaItem[];
  id: string;
  refresh: any;
};
