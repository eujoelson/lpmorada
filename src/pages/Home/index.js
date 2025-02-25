import React from 'react';

// import Header from './components/Header';
import Header from '../../components/Header';
import SectionVocesabia from '../../components/SectionVocesabia';
import SectionOqueE from '../../components/SectionOqueE';
import SectionDiferencias from '../../components/SectionDiferencias';
import SectionBeneficios from '../../components/SectionBeneficios';
import Formulario from '../../components/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Footer from './components/Footer';
import './home.css';

function Home() {
  return (
    <div className="app">
      <Header />
      <SectionVocesabia
        title="../Asset/Secao01/Titulo.png"
        content="../Asset/Secao01/Texto2.png"
        image="../Asset/Secao01/ImagemJazigo.png"
      />
      <SectionOqueE
        title="O que é o Jazigo Parque?"
        image="../Asset/Secao02/ilutracaoJazigo.png"
        image2="../Asset/Secao02/ilutracaoJazigo-mobile.png"
        descricao="../Asset/Secao02/jazibo-descricao.png"
        content="../Asset/Secao02/TextoOqueE.png"
        locais="../Asset/Secao02/Locais.png"
        rm="../Asset/Secao02/RNFoto.png"
        rmTexto="../Asset/Secao02/RNTexto.png"
        Guarabira="../Asset/Secao02/GuarabiraFoto.png"
        GuarabiraTexto="../Asset/Secao02/GuarabiraTexto.png"
        pq="../Asset/Secao02/TextoPorque.png"
        patrimonio="../Asset/Secao02/TextoDescritivoIcon.png"
      />
      <SectionDiferencias
        title="../Asset/Secao03/TextoTitulo.png"
        image="../Asset/Secao03/Abraco.png"
        content="../Asset/Secao03/TextoDescritivo2.png"
      />
      <SectionBeneficios
        title="../Asset/Secao04/TituloSecao.png"
        titleMemoria="../Asset/Secao04/Logo_MoradaMemoria.png"
        titleMemoriaMobile="../Asset/Secao04_da_paz.png"
        contentMemoria="../Asset/Secao04/TextoMoradaMemoria.png"
        titleCuidado="../Asset/Secao04/Logo_MoradaCuidado.png"
        titleCuidadoMobile="../Asset/Secao04_da_paz_cuidados_com.png"
        contentCuidado="../Asset/Secao04/Texto_MoradaCuidado.png"
        titleDescontos="../Asset/Secao04/Logo_ClubeDescontos.png"
        clubeDesconto="../Asset/Secao04/clube_desconto_texto.png"
        contentDescontos="../Asset/Secao04/TextoClubeDescontos.png"
      />
      <Formulario image="../Asset/Secao05/Foto.png" />
    </div>
  );
}

export default Home;
