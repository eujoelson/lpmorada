import React from 'react';
import { Link } from 'react-router-dom';

function Page404() {
  return (
    <div class="section-erro">
      <div class="erro">
        <div class="text-404">404</div>
        <div class="pg-erro">Página não encontrada</div>
        <div class="area-bt-erro">
          <div class="bt-acessa-erro">
            <Link to="/" class="link">
              Voltar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page404;
