import React from "react";
import { Link } from "react-scroll";
function SectionOqueE({
  title,
  content,
  image,
  image2,
  descricao,
  locais,
  rm,
  rmTexto,
  Guarabira,
  GuarabiraTexto,
  pq,
  patrimonio,
  quero,
}) {
  return (
    <div class="section2">
      <div class="container-fluid">
        <div class="row">
          <div class="col-5 desk-jazibo">
            <div class="box1">
              <img src={image} alt={title} class="img70"></img>
            </div>
          </div>
          <div class="col-12 mobile-jazibo">
            <div class="box1">
              <img src={image2} alt={title} class="tam-jazibo-mobile"></img>
            </div>
          </div>
          <div class="col-5 descricao-jazibo">
            <div class="box2">
              <img src={content} alt={title} class="img100"></img>
            </div>
          </div>
          <div class="col-12 descMobile">
            <div class="box2">
              <img src={descricao} alt={title} class="text-jazibo-mobile"></img>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div>
              <img src={locais} class="img50 titulo-local"></img>
            </div>
          </div>
        </div>
        <div class="row">
          <div>
            <div class="parques">
              <div class="col-5 parques-fotos">
                <div class="locais">
                  <img src={Guarabira} class="fotos-locais"></img>
                </div>
                <div class="locais">
                  <img src={GuarabiraTexto} class="desc-locais"></img>
                  <div class="area-botao">
                    <Link to="form" class="Botao">
                      Quero Saber Mais
                    </Link>
                  </div>
                </div>
              </div>
              <div class="col-5 parques-fotos">
                <div class="locais">
                  <img src={rm} class="fotos-locais"></img>
                </div>
                <div class="locais-texto">
                  <img src={rmTexto} class="desc-locais"></img>
                  <div class="area-botao">
                    <Link to="form" class="Botao">
                      Quero Saber Mais
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="box-porque1 box">
          <img src={pq} class="img50 img-estrela"></img>
        </div>
        <div class="box-porque2 box">
          <img src={patrimonio} class="img80 texto-estrela"></img>
        </div>
        <div class="center">
          <div class="SecBotao">
            <Link to="form" class="Botao">
              Quero Saber Mais
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionOqueE;
