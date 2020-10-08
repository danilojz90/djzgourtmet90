import React from "react";
import { connect } from "frontity";
import Link from "./link";

const Header = () => {

  return (
    <>
      Header BEBE ::
      <Link href="/">Inicio</Link>
      <Link href="/restaurantes">Restaurantes</Link>
      <Link href="/recetas">Recetas</Link>
      <Link href="/tienda">Tienda</Link>
      <Link href="/cart">Carrito</Link>
    </>
  );

}

export default connect(Header);