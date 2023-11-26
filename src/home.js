import React from 'react';
import { Carousel } from 'react-bootstrap';
import bannner01 from './bannners/banner01.jpg';
import bannner02 from './bannners/banner02.jpg';
import bannner03 from './bannners/banner03.jpg';
import email from './Imagens/email.png';
import face from './Imagens/face.png';
import twitter from './Imagens/twitter.png';
import galeria from './Imagens/galeria.png'
import Fotos from './garelaria.js'
import video from './video/videocustomecar.mp4'

const Home = () => {
    return (
      
      <div className="container-fluid" >
        <Carousel className="my-3 d-none d-md-block">
            <Carousel.Item>
                <img className="d-block w-100" src={bannner01} alt="Imagem 01" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={bannner02} alt="Imagem 02" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={bannner03} alt="Imagem 03" />
            </Carousel.Item>
        </Carousel>
        <br />
        <img className='rounded mx-auto d-block' src={galeria} />
        <Fotos />
        <br />
        <h4 className="text-center text-white">Nosso Trabalho</h4>
        <div className="d-flex justify-content-center">
        <div className="d-flex justify-content-center">
        <video width="640" height="360" controls autoPlay muted>
        <source src={video} type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
    </div>
    </div>
        <div className="jumbotron jumbotron-fluid my-5" style={{ backgroundColor: '#151414' }}>
          <div className="row">
            <img className="col-lg-1 col-md-2 col-sm-2 col-3" src={email} alt="Email" style={{ width: '85px', height: '80px', marginTop: '13px' }}/>
            <img className="col-lg-1 col-md-2 col-sm-2 col-3" src={face} alt="Facebook"  style={{ width: '85px', height: '80px', marginTop: '13px' }} />
            <img className="col-lg-1 col-md-2 col-sm-2 col-3" src={twitter} alt="Twitter"  style={{ width: '85px', height: '80px', marginTop: '13px' }}/>
            <h6 className="col-lg-6 col-md-6 col-sm-6 col-8 text-center mt-5" style={{ color: 'white' }}>Telefone (00)0000-0000</h6>
          </div>
        </div>
      </div>
        
    );
  };
  
  export default Home;