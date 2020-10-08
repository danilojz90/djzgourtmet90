import React from "react";
import { connect } from "frontity";

const Search = ({state, actions}) => {

  return(
    <>
      <input 
        type="text"
        placeholder="Buscar Receta"
        value={state.theme.searchValue}
        onChange={ event => {
          actions.theme.setSearchValue(event.target.value);
        }}
      />
      <pre>Search Value: {state.theme.searchValue}</pre>
    </>
  );

}

export default connect(Search);