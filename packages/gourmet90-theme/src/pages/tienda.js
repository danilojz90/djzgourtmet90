import React from "react";
import { connect } from "frontity";

// COMPONENTS ::
// ------------------
import Link from "../components/link";


const Tienda = ({state}) => {

  const data = state.source.get(state.router.link);
  const pageData = state.source.page[data.id];
  console.log(pageData);

  return (
    <>
      <h2 dangerouslySetInnerHTML={{ __html: pageData.title.rendered }}></h2>
      <div dangerouslySetInnerHTML={{ __html: pageData.content.rendered }}></div>
      <h3>Ingredientes</h3>
      <ul>
        {pageData.acf.receta.ingredientes.map((value, index) => {
          return(
            <li key={index}>{value.item}</li>
          )
          // <li key={index}>{value.item}</li>
        })}
        {/* { pageData.acf.receta.ingredientes.map( ({ingrediente}) => {
          // console.log(ingrediente);
          return <li>{ingrediente.item}</li>
        }) } */}
      </ul>
      <h3>Preparación</h3>
      <div dangerouslySetInnerHTML={{ __html: pageData.acf.receta.preparacion }}></div>
    </>
  )

}

export default connect(Tienda);