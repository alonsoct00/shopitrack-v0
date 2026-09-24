import type { ComponentType } from "react";

export type Icon = ComponentType;

export type IconItem = {
  text: string;
  icon: Icon;
};

export type ImageSource = {
  src: string;
  alt: string;
};

export type StepItem = { text: string } & (
  | { icon: Icon; image?: never }
  | { image: ImageSource; icon?: never }
);
