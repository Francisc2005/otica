import React from 'react';
import './estilo.css';
export default function Topo(){
 
    return(
        <header>
            <div className='limitar-sessao'>
              <img src="./assets/imagens/logo.png"/>

              <nav>
                <a href='#produtos'>Produtos</a>
                <a href='#sobre'>Sobre</a>
                <a href='#contato'>Contato</a>
              </nav>

           </div>
        </header>
    )
}