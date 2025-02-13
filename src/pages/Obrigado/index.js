import Header from '../../components/Header';
import Finalizado from '../../components/Obrigado/Finalizado';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles-obrigado.css';
function Obrigado() {
  return (
    <div class="obg.body">
      <Header />
      <Finalizado />
    </div>
  );
}

export default Obrigado;
