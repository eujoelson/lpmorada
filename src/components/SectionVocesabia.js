import React from "react";
import { Link } from "react-scroll";

function SectionVocesabia({ title, content, image }) {
  return (
    <div class="section1">
      <div class="container-fluid">
        <div class="row">
          <div class="imgflores">
            <img src={image} class="img100"></img>
          </div>
          <div class="col-sm">
            <div class="Sec1Titulo">
              <img src={title} class="img70 img-vaso"></img>
            </div>
            <div class="imgflores2">
              <img src={image} class="img100"></img>
            </div>
            <div class="SecTexto">
              <img src={content} class="img70"></img>
            </div>
            <div class="SecBotao2">
            
              <Link to="form" class="Botao">
                Quero Saber Mais
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionVocesabia;
