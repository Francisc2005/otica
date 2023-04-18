import React from 'react';
import './estilo.css';
export default function SecaoContato(){
        return(
        <section className='secao-contato'>
           <div className='limitar-secao'>
                 <h3>FALE CONOSCO</h3>
                 <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.
                  Contato</p>

           <div className='contato-container'>
                <div className='contato-conteudo'>
                        <h4>contato</h4>
                                <div>
                                        <img src='./assets/imagens/local.png'></img>
                                        <p>Nova iguaçu</p>
                                </div>
                                <div>
                                        <img src='./assets/imagens/telefone.png'></img>
                                        <p>(21)9999-9999</p>
                                </div>
                                <div>
                                         <img src='./assets/imagens/email.png'></img>
                                         <p>contato@oticavida.com</p>
                                </div>
                </div>
          

           <div className='contato-conteudo'>
                <div>
                    <h4>Nossas Redes Sociais</h4>
                        <div>
                                <div>
                                        <img src='./assets/imagens/fb.png'></img>
                                        <p>/oticavida</p>
                                </div>
                                <div>
                                        <img src='./assets/imagens/ig.png'></img>
                                        <p>@oticavida</p>
                                </div>
                                <div> 
                                        <img src='./assets/imagens/tt.png'></img>
                                        <p>@oticavida</p>
                                </div>
                                
                        </div>
                </div>
           </div>
           </div>
           </div>
        </section>
        )
}