// Package imports
//TODO: if I end up not using this just remove this
import React from "react";

export const WindowContext = React.createContext({
  isNonMobileWidth: false,
  isNonMobileHeight: false,
  isLaptopWidth: false,
  isLaptopHeight: false,
});
