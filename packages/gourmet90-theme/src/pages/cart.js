import React from "react";
import { connect } from "frontity";

// COMPONENTS ::
// ------------------
import Link from "../components/link";


const Cart = ({state}) => {

  const data = state.source.get(state.router.link);
  const pageData = state.source.page[data.id];
  console.log(pageData);

  return (
    <>
      <h2 dangerouslySetInnerHTML={{ __html: pageData.title.rendered }}></h2>
      <div dangerouslySetInnerHTML={{ __html: pageData.content.rendered }}></div>
    </>
  )

}

export default connect(Cart);