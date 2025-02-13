import React from 'react';

function SectionDiferencias({ title, content, image }) {
  return (
    <div class="section3">
      <div class="col-8 texto-difereciais">
        <img src={title} class="img100 img-titulo-dife"></img>
        <p></p>
        <img src={content} class="img100 img-texto-dife"></img>
      </div>
      <div class="col-4 foto-abraco">
        <img src={image} class="imgabraco"></img>
      </div>
    </div>
  );
}

export default SectionDiferencias;
