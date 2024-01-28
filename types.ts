import firebase from "firebase/compat/app";
import { FormikErrors, FormikProps, FormikTouched, FormikValues } from "formik";
import React, {
  ChangeEventHandler,
  FocusEventHandler,
  FormEvent,
  MouseEventHandler,
} from "react";
import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from "react-query";

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
  setFunction?: ChangeEventHandler<HTMLInputElement>;
  handleBlur?: FocusEventHandler<HTMLInputElement>;
  name: string;
  type: string;
  disabled?: boolean;
  error?:
    | string
    | string[]
    | FormikErrors<any>
    | FormikErrors<any>[]
    | undefined;
  touched?: boolean | FormikTouched<any> | FormikTouched<any>[] | undefined;
  handleSubmit?: React.FormEvent;
};

export type ButtonType = {
  children: string;
  onClick: (e?: FormEvent<HTMLFormElement> | undefined) => void;
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
  formik: FormikProps<FormikValues> | any;
};

export type PageLayoutType = {
  trending?: boolean;
  label: string;
  data: MediaItem[];
  bookMarkedMovies: MediaItem[];
  id: string;
  refresh: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<any, unknown>>;
};
