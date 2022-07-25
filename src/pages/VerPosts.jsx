import React from "react";
import BarraDeNavegacion from "../componentes/BarraDeNavegacion";
import Footer from "../componentes/Footer";
import MiPost from "../componentes/Post";

export default function Home() {
  return (
    <>
      <BarraDeNavegacion />
      <MiPost />
      <Footer />
    </>
  );
}
