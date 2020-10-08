import React from "react";
import { connect } from "frontity";

// PAGES ::
// --------------------------
import Tienda from '../pages/tienda';
import Cart from '../pages/cart';

// COMPONENTS ::
// --------------------------
// import Featured from "../components/featured";

const Page = ({ state, actions, idPage }) => {

  // const data = state.source.get(state.router.link);
  // const post = state.source[data.type][data.id];
  // const featured = state.source.attachment[data.id];

  // console.log(data);

  // console.log(idPage);

  return(
    <>
      { idPage === 31 && <Tienda /> }
      { idPage === 33 && <Cart /> }
    </>
  )

  // { data.isHome && <Home /> }

  // if(idPage === 31){  // 31 => TIENDA ::
    
    // return(
    //   <>
    //     prueba --TIENDA--
    //   </>
    // )
  // }else if(idPage === 33){ // 33 => CART ::
    // return(
    //   <>
    //     prueba --CART--
    //   </>
    // )
  // }


  // if(element === 'tienda'){
  //   return (
  //     <>
  //       --Tienda--
  //       {/* <article>
  //         <figure> */}
  //           {/* <Featured src={featured.source_url} alt={featured.slug} /> */}
  //         {/* </figure>
  //         <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h2>
  //         <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
  //       </article> */}
  //     </>
  //   );
  // }else if(element === 'cart'){
  //   return (
  //     <>
  //       --Carrito--
  //       {/* <article>
  //         <figure> */}
  //           {/* <Featured src={featured.source_url} alt={featured.slug} /> */}
  //         {/* </figure>
  //         <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h2>
  //         <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
  //       </article> */}
  //     </>
  //   );
  // }

}

export default connect(Page);