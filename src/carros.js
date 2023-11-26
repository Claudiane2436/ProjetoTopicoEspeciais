import React from 'react';
import $ from 'jquery';
import carrobanner from './bannners/bannercarro03.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import imgcarro1 from './Imagens/speedometer.jpg'
import imgcarro2 from './Imagens/farol - Copia.jpg'
import imgcarro3 from './Imagens/car.jpg'
import Formulario from './formulario'

const Carros = () => {
  return (
    <div className="container-fluid">
      <img className="img-fluid rounded mx-auto d-block my-3" src={carrobanner} alt="Banner de Carro" />

      <div className="row ">

                    <div className=" col-lg-4 col-md-4 col-sm-6 mb-3 my-5  ">

                        <div className="card-body " style={{ maxWidth: '540px'}} >
                            <div className="row no-gutters">
                                <div>
                                    <img src={imgcarro1} alt="..." className="img-fluid rounded-circle" />
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
                                    <img src={imgcarro2} alt="..." className="img-fluid rounded-circle  " />
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
                                    <img src={imgcarro3} alt="..." className="img-fluid rounded-circle  " />
                                </div>
                                <div>
                                    <div class="card-body">
                                        <h4 style={{ color: 'white'}}>Serviço de Modificações Interna</h4>

                                        <p style={{ color: 'white'}}>Modificações internas no motor dando mais velocidade e funcionalidade para a seu carro.</p>
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

export default Carros;
