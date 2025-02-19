import React, { useState } from "react";
//import Carousel from "react-bootstrap/Carousel";
//import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import emailjs from "@emailjs/browser";
import EmblaCarousel from "./EmblaCarousel";
import "./embla.css";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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
    event.preventDefault(); // Previne o envio do formulário imediatamente

    if (captcha !== "5") {
      toast.error("Captcha incorreto. A soma de 1 + 4 esta incorreta.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return; // Sai da função se o captcha estiver incorreto
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        event.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then((result) => {
        console.log("SUCCESS!", result);
        window.open("/morada/Obrigado", '_parent');
      })
      .catch((error) => {
        console.log("FAILED...", error.text);
        window.open("/morada/PageErro");
      });

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
    <div className="sectionForm">
      <ToastContainer />
      <div className="space-form">
        <img src="../morada/Asset/Secao05/FotoForm2.png" className="img-form-mobile" alt="" />
      </div>
      <div className="boxForm" id="form">
        <div className="container">
          <div className="row">
            <div className="boxFormSpace">
              <h3 className="title-form">
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
      <div className="right">
        <img
          src="../morada/Asset/Secao05/TextoOpiniao.png"
          className="img20 titulo-opn"
          alt=""
        />
      </div>

      <div className="embla-carousel-container">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
      
      <div className="social-links ">
        {/* <img src="../morada/Asset/Secao05/Rodape.png" className="img10" alt="" /> */}
        <img
          src="../morada/Asset/Footer/logo_Morada_Essencial.png"
          className="morada_logo"
          alt="Logo Morada Essencial"
        />
        <div className="social-link3">
          <a href="https://www.instagram.com/moradaessencial/">
            <img
              src="../morada/Asset/Footer/icone-instagran.png"
              className="icone-social"
              alt="Instagram"
            />
          </a>
          <a href="https://web.facebook.com/moradaessencial">
            <img
              src="../morada/Asset/Footer/icone-face.png"
              className="icone-social"
              alt="Facebook"
            />
          </a>
          <a href="https://www.youtube.com/channel/UCjyZNcVscw2-eVArGuJUpfw">
            <img
              src="../morada/Asset/Footer/icone-youtube.png"
              className="icone-social"
              alt="YouTube"
            />
          </a>
        </div>
        <div className="texto-link">
          <a className="texto-link" href="https://www.moradaessencial.com.br">
            www.moradaessencial.com.br
          </a>
        </div>
      </div>
      
    </div>
    
  );
}

export default Formulario;
