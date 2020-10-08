import React, {useEffect} from "react";
import { styled, connect } from "frontity";

// COMPONENTS ::
// -------------------------
import Header from "./components/header";
import Footer from "./components/footer";
import Page from "./components/page";
import Post from "./components/post";

// PAGES ::
// -------------------------
import Home from "./pages/home";
import Restaurantes from "./pages/restaurantes";
import Recetas from "./pages/recetas";


// import tw from 'tailwind.macro';

// const Button = styled.button`
//   ${tw`bg-gray-300 text-yellow-900 px-8 m-8 rounded h-20 text-3xl`}
// `;

const Root = ({state, actions}) => {

  const data = state.source.get(state.router.link);

  useEffect(() => {
    // actions.source.fetch("/home");
    actions.source.fetch("/restaurantes");
    actions.source.fetch("/recetas");
    actions.source.fetch("/tienda");
    actions.source.fetch("/cart");
  },[]);

  // console.log(data);

  return (
    <>
      <Header />
      { data.isFetching && <p>Cargando Datos</p> }
      {/* <Home when={data.isHome} / > */}
      { data.isHome && <Home /> }
      { data.isPage && <Page idPage={data.id} /> }
      { data.isRestauranteArchive && <Restaurantes /> }
      { data.isRestaurante && <Post element='restaurante' /> }
      { data.isRecetaArchive && <Recetas /> }
      { data.isReceta && <Post element='receta' /> }
      <Footer />
      {/* <Button>Teste</Button> */}
    </>
  );

};

// const Button = styled.button `
//   ${tw`bg-gray-300 text-yellow-900 px-8 m-8 rounded h-20 text-3xl`}
// `;
// const Button = tw.button`
//   text-xs
//   font-semibold
//   rounded-full
//   px-4 py-1
//   leading-normal
//   bg-white
//   border
//   hover:text-white
// `;
// console.log(Button);

export default connect(Root);