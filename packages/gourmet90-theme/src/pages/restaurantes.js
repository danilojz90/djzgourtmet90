import React from "react";
import { connect } from "frontity";

// COMPONENTS ::
// ------------------
import Featured from "../components/featured";
import Link from "../components/link";


const Restaurantes = ({state}) => {

  const data = state.source.get(state.router.link);

  return (
    <>
      {/* Restaurantes disponibles ({data.items.length}) :: */}

      { data.items.map( ({id, index}) => {
        const restData = state.source.restaurante[id];
        // console.log(restData);

        return(

          // BLOQUE ITERADOR DE ITEMS DE RESTAURANTES ::
          // -------------------------------------------- 
          <>
            <article key={index}>
              <Link href={restData.link}>
                <figure>
                  <Featured imgID={restData.featured_media} element="restaurante" />
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

export default connect(Restaurantes);