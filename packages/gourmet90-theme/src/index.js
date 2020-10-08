import React from "react";
import Root from "./root";

export default {
  name: "gourmet90-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {
      contador: 0,
      searchValue: ''
    }
  },
  actions: {
    theme: {
      sumador: ({state}) => {
        state.theme.contador++;
      },
      setSearchValue: ({state}) => value => {
        state.theme.searchValue = value;
      }
    }
  }
};
