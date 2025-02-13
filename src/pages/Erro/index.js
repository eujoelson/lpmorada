import Header from '../../components/Header';
import Page404 from '../../components/PageErro/Page404';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles-erro.css';

function Erro() {
  return (
    <div class="pag-erro">
      <Header />
      <Page404 />
    </div>
  );
}

export default Erro;
