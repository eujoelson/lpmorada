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
        title="../morada/Asset/Secao01/Titulo.png"
        content="../morada/Asset/Secao01/Texto2.png"
        image="../morada/Asset/Secao01/ImagemJazigo.png"
      />
      <SectionOqueE
        title="O que é o Jazigo Parque?"
        image="../morada/Asset/Secao02/ilutracaoJazigo.png"
        image2="../morada/Asset/Secao02/ilutracaoJazigo-mobile.png"
        descricao="../morada/Asset/Secao02/jazibo-descricao.png"
        content="../morada/Asset/Secao02/TextoOqueE.png"
        locais="../morada/Asset/Secao02/Locais.png"
        rm="../morada/Asset/Secao02/RNFoto.png"
        rmTexto="../morada/Asset/Secao02/RNTexto.png"
        Guarabira="../morada/Asset/Secao02/GuarabiraFoto.png"
        GuarabiraTexto="../morada/Asset/Secao02/GuarabiraTexto.png"
        pq="../morada/Asset/Secao02/TextoPorque.png"
        patrimonio="../morada/Asset/Secao02/TextoDescritivoIcon.png"
      />
      <SectionDiferencias
        title="../morada/Asset/Secao03/TextoTitulo.png"
        image="../morada/Asset/Secao03/Abraco.png"
        content="../morada/Asset/Secao03/TextoDescritivo2.png"
      />
      <SectionBeneficios
        title="../morada/Asset/Secao04/TituloSecao.png"
        titleMemoria="../morada/Asset/Secao04/Logo_MoradaMemoria.png"
        titleMemoriaMobile="../morada/Asset/Secao04/Morada_da_paz.png"
        contentMemoria="../morada/Asset/Secao04/TextoMoradaMemoria.png"
        titleCuidado="../morada/Asset/Secao04/Logo_MoradaCuidado.png"
        titleCuidadoMobile="../morada/Asset/Secao04/Morada_da_paz_cuidados_com.png"
        contentCuidado="../morada/Asset/Secao04/Texto_MoradaCuidado.png"
        titleDescontos="../morada/Asset/Secao04/Logo_ClubeDescontos.png"
        clubeDesconto="../morada/Asset/Secao04/clube_desconto_texto.png"
        contentDescontos="../morada/Asset/Secao04/TextoClubeDescontos.png"
      />
      <Formulario image="../morada/Asset/Secao05/Foto.png" />
    </div>
  );
}

export default Home;
