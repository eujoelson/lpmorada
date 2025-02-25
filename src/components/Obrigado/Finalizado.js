import React from 'react';

function Finalizado() {
  return (
    <div class="sectionObrigado">
      <div class="body_obrigado">
        <div class="space-book"></div>
        <div class="interesse">
          <div class="book">
            <img src="../morada/Asset/book.png" class="img-book"></img>
            <div class="text-book">
              <h1>
                {' '}
                <b>Agradecemos seu interesse!</b>
              </h1>
              <h4>
                Logo mais, um de nossos consultores entrará em contato com você!
              </h4>
            </div>
          </div>
        </div>
        <div class="conheca">
          <div class="text-acessa">
            <h2>
              <b>Conheça o Morada da Paz Essencial!</b>
            </h2>
          </div>
          <div class="area-bt">
            <div class="bt-acessa">
              <a
                class="link"
                href="https://www.moradaessencial.com.br/"
                target="_blank"
              >
                Acessar Site
              </a>
            </div>
          </div>
        </div>
        <div class="footer">
          <div class="redes_sociais">
            <a
              href="https://www.youtube.com/channel/UCjyZNcVscw2-eVArGuJUpfw"
              target="_blank"
            >
              <img src="../morada/Asset/logo_youtube.png" class="bt-rede"></img>
            </a>
            <a href="https://instagram.comessencial" target="_blank">
              {' '}
              <img src="../morada/Asset/logo_instagran.png" class="bt-rede"></img>
            </a>
            <a href="https://www.facebook.comessencial" target="_blank">
              {' '}
              <img src="../morada/Asset/logo_face.png" class="bt-rede"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Finalizado;
