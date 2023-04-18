import React from 'react';
import Card  from 'react';
import './estilo.css';
export default function Produtos(){
    return(
        <section id='produtos' className='secao-produtos'>
           <nav>
               <section ClassName='box-titulo'>
                    <h2>Nossos produtos</h2>
                     <p>Trabalhamos com óculos de grau, óculos de
                         sol, lentes transition nos modelos 
                         masculino, feminino e infantil.
                        Todos os nossos preços são acessíveis e 
                         contamcom a melhor qualidade do mercado.
                         Óculos de grau</p>
'               </section>
                <div className='container-cards'>

                     <div className='cards'>
                            <h3>Òculos De Grau</h3>
                            <img src="./assets/imagens/oculos01.png"/>
                            <p>R$500,00</p>
                     </div>

                     <div className='cards'>
                           <h3>Òculos transition</h3>
                           <img src="./assets/imagens/oculos02.png"/>
                           <p>R$750,00</p>
                     </div>

                      <div className='cards'>
                            <h3>Òculos De Sol</h3>
                            <img src="./assets/imagens/oculos03.png"/>
                            <p>R$700,00</p>
                      </div>            
                 
                      <div className='cards'>
                            <h3>Òculos infantil</h3> 
                            <img src="./assets/imagens/oculos04.png"/>
                            <p>R$500,00</p> 
                      </div>
                  
                </div>

          
                <p>Todos os nossos produtos incluem:</p>
                <ul className='list'>
                    <li>Garantia de 1 ano</li>
                    <li>Manutenção preventiva</li>
                    <li>Descontos especiais na compra da segunda unidade</li>
                    <li>Flexibilidade de pagamento</li>
                </ul> 
            </nav>
        </section>
    )
}




/*import React from "react";

export default function capa(){
    return(
        <section> 
            <nav>
                <p>Preços Baixos</p>
                <h1>Óculos De Grau e de sol</h1>
                <p>Você só encontra aqui </p>
            </nav>
        </section>
    )
}
*/