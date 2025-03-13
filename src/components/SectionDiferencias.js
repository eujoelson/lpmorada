import React from "react";

function SectionDiferencias({ title, content, image }) {
  return (
    <div class="section3">
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <div class="texto-difereciais">
              <img
                src="../morada/Asset/Secao03/TextoTituloMob2.png"
                class="img-titulo-modile"
              ></img>
            </div>
          </div>
          <div class="col">
            <div class="foto-abraco">
              <img
                src="../morada/Asset/Secao03/AbracoMob.png"
                class="imgabraco-mobile"
              ></img>
            </div>
          </div>
        </div>
      </div>

      <div class="col-8 texto-difereciais">
        <img src={title} class="img100 img-titulo-dife"></img>
        <p></p>
        <img src={content} class="img100 img-texto-dife"></img>
      </div>
      <div class="col-4 foto-abraco">
        <img src={image} class="imgabraco"></img>
      </div>
      <p></p>
    </div>
  );
}

export default SectionDiferencias;
