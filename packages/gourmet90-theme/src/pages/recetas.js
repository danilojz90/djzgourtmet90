import React from "react";
import { connect } from "frontity";

// COMPONENTS ::
// ------------------
import Featured from "../components/featured";
import Link from "../components/link";
import Search from "../components/search";

const Recetas = ({state, actions}) => {

  const data = state.source.get(state.router.link);
  const allRecetas = Object.values(state.source.receta);
  const filterRecetas = allRecetas.filter((receta) => 
    receta.title.rendered.toLowerCase().includes(state.theme.searchValue.toLowerCase())
  )
  // console.log(filterRecetas);

  return (
    <>
      Recetas disponibles ({data.items.length}) ::
      {/* <br/>
      <pre>Contador: ({state.theme.contador})</pre>
      <button 
        onClick={actions.theme.sumador}
      >sumar</button> */}

      <Search />
      { !filterRecetas.length > 0 && <h2>Sin Resultados con: {state.theme.searchValue}</h2>}
      { filterRecetas.reverse().map( ({id, index}) => {
        const restData = state.source.receta[id];
        console.log(index);
        return(
          <>
            <article key={index} >
              <Link href={restData.link}>
                <figure>
                  <Featured imgID={restData.featured_media} element="receta" />
                </figure>
                <h2 dangerouslySetInnerHTML={{ __html: restData.title.rendered }}></h2>
              </Link>
              <div dangerouslySetInnerHTML={{ __html: restData.content.rendered }}></div>
            </article>
          </>
        )
      }) }
    </>

  )

}

export default connect(Recetas);