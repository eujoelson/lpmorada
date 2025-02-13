import React, { useState } from "react";
//import Carousel from "react-bootstrap/Carousel";
//import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import emailjs from "@emailjs/browser";
import EmblaCarousel from "./EmblaCarousel";
import "./embla.css";

const OPTIONS = ({ loop: true }, [Autoplay({ delay: 2000 })]);
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

function Formulario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [unidade, setUnidade] = useState("PB");
  const [captcha, setCaptcha] = useState("");
  const [informacoes, setInformacoes] = useState(false);
  const [privacidade, setPrivacidade] = useState(false);
  const handleSubmit = (event) => {
    if (captcha !== "5") {
      alert("Captcha incorreto");
    } else {
      event.preventDefault();

      emailjs
        .sendForm(          
          "service_o2snpou",
          "template_4kkdcqd",
          event.target,
          "sHTg5Au6XKJYxrygp"
        )
        .then((result) => {
          console.log("SUCCESS!", result);
          window.open("/Obrigado", '_parent');
        })
        .catch((error) => {
          console.log("FAILED...", error.text);
          window.open("/PageErro");
        });
    }

    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    console.log({
      nome,
      email,
      celular,
      unidade,
      captcha,
      informacoes,
      privacidade,
    });
  };

  return (
    <div class="sectionForm" id="form">
      <div class="space-form">
        <img src="../Asset/Secao05/FotoForm2.png" class="img-form-mobile"></img>
      </div>
      <div class="boxForm">
        <div className="container">
          <div className="row">
            <div className="boxFormSpace">
              <h3 class="title-form">
                Preencha o formulário abaixo e <br /> solicite seu atendimento
                com uma
                <br /> de nossas vendedoras
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-0">
                  <label htmlFor="nome" className="form-label">
                    Nome*:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nome"
                    name="nome"
                    value={nome}
                    onChange={(event) => setNome(event.target.value)}
                    required
                  />
                </div>

                <div className="mb-1">
                  <label htmlFor="email" className="form-label">
                    E-mail*:
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </div>

                <div className="mb-1">
                  <label htmlFor="celular" className="form-label">
                    Celular*:
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">+55</span>
                    <input
                      type="tel"
                      className="form-control"
                      id="celular"
                      name="celular"
                      value={celular}
                      onChange={(event) => setCelular(event.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="mb-1">
                  <label htmlFor="unidade" className="form-label">
                    Selecione a unidade que você deseja atendimento*:
                  </label>
                  <select
                    className="form-select"
                    id="unidade"
                    name="unidade"
                    value={unidade}
                    onChange={(event) => setUnidade(event.target.value)}
                    required
                  >
                    <option value="PB">PB (Guarabira)</option>
                    <option value="RN">RN (Zona Norte)</option>
                  </select>
                </div>

                <div className="mb-1">
                  <label htmlFor="captcha" className="form-label">
                    1+4=?
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="captcha"
                    name="captcha"
                    value={captcha}
                    onChange={(event) => setCaptcha(event.target.value)}
                    required
                  />
                </div>

                <div className="form-check mb-1">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="informacoes"
                    name="informacoes"
                    checked={informacoes}
                    onChange={(event) => setInformacoes(event.target.checked)}
                  />
                  <label className="form-check-label" htmlFor="informacoes">
                    Concordo em receber informações periódicas do Morada da Paz
                  </label>
                </div>

                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="privacidade"
                    name="privacidade"
                    checked={privacidade}
                    onChange={(event) => setPrivacidade(event.target.checked)}
                    required
                  />
                  <label className="form-check-label" htmlFor="privacidade">
                    Confirmo que meus dados estão corretos e <br></br>concordo
                    com a Política de Privacidade.
                  </label>
                </div>
                <div class="area-botao-form">
                  <input
                    type="submit"
                    value="Quero Saber Mais"
                    class="Botao-form"
                  ></input>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <img
          src="../Asset/Secao05/TextoOpiniao.png"
          class=" img20 titulo-opn"
        ></img>
      </div>

      <EmblaCarousel slides={SLIDES} options={OPTIONS} />

      <div class="social-links">
        {/* <img src="../Asset/Secao05/Rodape.png" class="img10"></img> */}
        <img
          src="../Asset/Footer/logo_Morada_Essencial.png"
          class="morada_logo"
        ></img>
        <div class="social-link3">
          <a href="https://www.instagram.com/moradaessencial/">
            {" "}
            <img
              src="../Asset/Footer/icone-instagran.png"
              class="icone-social"
            ></img>
          </a>
          <a href="https://web.facebook.com/moradaessencial">
            {" "}
            <img
              src="../Asset/Footer/icone-face.png"
              class="icone-social"
            ></img>
          </a>
          <a href="https://www.youtube.com/channel/UCjyZNcVscw2-eVArGuJUpfw">
            {" "}
            <img
              src="../Asset/Footer/icone-youtube.png"
              class="icone-social"
            ></img>
          </a>
        </div>
        <div class="texto-link">
          <a class="texto-link" href="https://www.moradaessencial.com.br">
            www.moradaessencial.com.br
          </a>
        </div>
      </div>
    </div>
  );
}

export default Formulario;
