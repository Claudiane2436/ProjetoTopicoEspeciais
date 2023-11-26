import React from 'react';
import $ from 'jquery';
import motobanner from './bannners/bannermoto02.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import imgmoto1 from './Imagens/moto.jpg'
import imgmoto2 from './Imagens/motodois.jpg'
import imgmoto3 from './Imagens/bikedois.jpg'
import Formulario from './formulario'

const Motos = () => {
  return (
    <div className="container-fluid">
      <img className="img-fluid rounded mx-auto d-block my-3" src={motobanner} alt="Banner de Carro" />

      <div className="row ">

                    <div className=" col-lg-4 col-md-4 col-sm-6 mb-3 my-5  ">

                        <div className="card-body " style={{ maxWidth: '540px'}} >
                            <div className="row no-gutters">
                                <div>
                                    <img src={imgmoto1} alt="..." className="img-fluid rounded-circle" />
                                </div>
                                <div>
                                    <div className="card-body">
                                        <h4 style={{ color: 'white'}}>Iluminação de LED</h4>
                                        <p style={{ color: 'white'}}> Implementação de Luz de LED na parte traseira, farol de neblina e de milha para motos. </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-6 mb-3 my-5">

                        <div className="card-body " style={{ maxWidth: '540px'}}>
                            <div className="row no-gutters">
                                <div>
                                    <img src={imgmoto2} alt="..." className="img-fluid rounded-circle  " />
                                </div>
                                <div>
                                    <div className="card-body">
                                        <h4 style={{ color: 'white'}}>Serviço de Pintura</h4>
                                        <p style={{ color: 'white'}}> Pintura conforme o planejamento, exigindo os pedidos e as ideias dos clientes. </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" col-lg-4 col-md-4 col-sm-6 mb-3 my-5 ">
                        <div className="card-body " style={{ maxWidth: '540px'}}>
                            <div className="row no-gutters">
                                <div>
                                    <img src={imgmoto3} alt="..." className="img-fluid rounded-circle  " />
                                </div>
                                <div>
                                    <div class="card-body">
                                        <h4 style={{ color: 'white'}}>Serviço de Modificações Interna</h4>

                                        <p style={{ color: 'white'}}>Modificações internas no motor dando mais velocidade e funcionalidade para a sua moto.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                    <Formulario />
        </div>
    </div>
  );
};

export default Motos;
