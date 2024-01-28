import firebase from "firebase/compat/app";
import { FormikErrors, FormikProps, FormikValues } from "formik";
import React from "react";

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

export type UserType = {
  data(): firebase.User;
  bookmarkedMovies: MediaItem[];
};

export type InputType = {
  icon?: boolean;
  placeholder: string;
  setFunction?: React.ChangeEvent;
  handleBlur?: React.FocusEvent;
  name: string;
  type: string;
  disabled?: boolean;
  error?: string | null;
  touched?: boolean;
  handleSubmit?: React.FormEvent;
};

export type ButtonType = {
  children: string;
  onClick: React.MouseEventHandler;
  bg?: string;
};

export type MovieBannerType = {
  data: MediaItem;
  bookMarkHandler: React.MouseEventHandler;
  bookmarked: boolean;
};

export type OverlayType = {
  handleClick: React.MouseEventHandler;
  trending: boolean;
  bookmarked?: boolean;
};

export type TrendingCarouselType = {
  data: MediaItem[];
  bookMarkedMovies: MediaItem[];
  id: string;
  refresh: () => Promise<void>;
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
  inputs: {
    label: string;
    name: string;
    setFunction: React.Dispatch<React.SetStateAction<any>>;
    type: string;
  }[];
  buttonLabel: string;
  footer_paragraph: string;
  footer_link: string;
  footer_link_href: string;
  onSubmit: React.FormEvent;
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
  refresh: () => Promise<void>;
};
