import React from 'react';

function SectionBeneficios({
  title,
  titleMemoria,
  titleMemoriaMobile,
  contentMemoria,
  titleCuidado,
  titleCuidadoMobile,
  contentCuidado,
  clubeDesconto,
  titleDescontos,
  contentDescontos,
}) {
  return (
    <div class="section4">
      <div class="container">
        <div>
          <img src={title} class="titulo-dife"></img>
        </div>

        <div class="row linha-1">
          <div class="col-5 col-icone">
            <div class="box icone1">
              <img src={titleMemoria} class="tam-icone1"></img>
            </div>
          </div>
          <div class="col-7">
            <div class="box text-icone">
              <img src={contentMemoria} class="tam-text1"></img>
            </div>
          </div>
        </div>

        {/*Parte Mobile Morada  */}
        <div class="row linha-1-mobile">
          <div class="col-12">
            <div class="box icone1">
              <img src={titleMemoriaMobile} class="tam-icone1-mobile"></img>
            </div>
          </div>
          {/* <div class="col-12">
            <div class="box">
              <img src={contentMemoria} class="tam-text1-mobile"></img>
            </div>
          </div> */}
        </div>
        {/* Fim parte mobile Morada*/}

        <div class="row linha-2">
          <div class="col-7 col-icone">
            <div class="box text-icone2">
              <img src={contentDescontos} class="tam-text2"></img>
            </div>
          </div>
          <div class="col-5">
            <div class="box icone2">
              <img src={titleDescontos} class="tam-icone2"></img>
            </div>
          </div>
        </div>

        {/* Parte Mobile do Clube Desconto */}
        <div class="row linha-2-mobile">
          <div class="col-12">
            <div class="box text-icone2">
              <img src={clubeDesconto} class="tam-text2-mobile"></img>
            </div>
          </div>
        </div>
        {/* Fim do Mobile do Clube Desconto */}

        <div class="row linha-3">
          <div class="col-5 col-icone">
            <div class="icone3">
              <img src={titleCuidado} class="tam-icone3"></img>
            </div>
          </div>
          <div class="col-7">
            <div class="box text-icone">
              <img src={contentCuidado} class="tam-text3"></img>
            </div>
          </div>
        </div>
        {/* Parte Mobile cuidados */}
        <div class="row linha-3-mobile">
          <div class="col-12">
            <div class="icone3">
              <img src={titleCuidadoMobile} class="tam-icone3-mobile"></img>
            </div>
          </div>
        </div>
        {/* Fim parte mobile cuidados */}
      </div>
    </div>
  );
}

export default SectionBeneficios;
