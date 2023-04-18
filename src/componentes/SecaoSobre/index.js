import React from 'react';
import './estilos.css';

export default function SecaoSobre(){
    return(
      <main>
        <section className='sobre'>
          <div className='limitar-secao'>
            <h2>Quem nós somos?</h2>
            <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo. 
                Nossas Filiais
                Hoje temos mais de 20 filiais pelo Brasil e na América
                Atendimento flexível<br/>
                Nossa equipe possui é treinada para te atender</p>
          </div>
            
              <div className='container-cards'>
               
                  <img src='./assets/imagens/loja.png'></img>
               
                 <div className='card'>
                    <h3>NOSSAS FILIAIS</h3>
                    <p>Hoje temos mais de 20 filiais pelo Brasil a na América</p>
                 </div>

                 <div className='card'>
                    <h3>ATENDIMENTO FLEXIVEL</h3>
                    <p>Nossa equipe é treinada para te atender</p>
                 </div>
                
                  <img src='./assets/imagens/atendimento.png'></img>
              
                </div>
    
            
        </section>
      </main>
    )
}
/*            <div className='box-cards'>

                <div className='cards'>
                   <h2>Òculos De Grau</h2>
                      <img src="./assets/imagens/oculos01.png"/>
                   <p>R$500,00</p>
                </div>

                <div className='cards'>
                    <h2>Òculos transition</h2>
                      <img src="./assets/imagens/oculos02.png"/>
                    <p>R$750,00</p>
                </div>

                </div> */