import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import foto1 from './Imagens/img01-td.jpg';
import foto2 from './Imagens/img02-td.jpg';
import foto3 from './Imagens/img03-td.jpg';
import foto4 from './Imagens/img04-td.jpg';
import foto5 from './Imagens/img05-td.jpg';
import foto6 from './Imagens/img06-td.jpg';
import foto7 from './Imagens/img07-td.jpg';
import foto8 from './Imagens/img08-td.jpg';
import gfoto1 from './Imagens/img01.jpg';
import gfoto2 from './Imagens/img02.jpg';
import gfoto3 from './Imagens/img03.jpg';
import gfoto4 from './Imagens/img04.jpg';
import gfoto5 from './Imagens/img05.jpg';
import gfoto6 from './Imagens/img06.jpg';
import gfoto7 from './Imagens/img07.jpg';
import gfoto8 from './Imagens/img08.jpg';
const Galeria = () => {
    return (
        <>      
          <div className="row">
            <a className="col-lg-3 col-md-3 col-sm-6 col-6 my-3" href={gfoto1} data-lightbox="example-set" data-title="Moto Antiga">
                <img src={foto1} alt="Imagem" />
            </a>
            <a className="col-lg-3 col-md-3 col-sm-6 col-6 my-3" href={gfoto2} data-lightbox="example-set" data-title="Moto Antiga 02">
                <img src={foto2} alt="Imagem" />
            </a>
            <a className="col-lg-3 col-md-3 col-sm-6 col-6 my-3" href={gfoto3} data-lightbox="example-set" data-title="Moto Antiga">
                <img src={foto3} alt="Imagem" />
            </a>
            <a className="col-lg-3 col-md-3 col-sm-6 col-6 my-3" href={gfoto4} data-lightbox="example-set" data-title="Moto Antiga 02">
                <img src={foto4} alt="Imagem" />
            </a>
            <a className="col-lg-3 col-md-3 col-sm-6 col-6 my-3" href={gfoto5} data-lightbox="example-set" data-title="Moto Antiga">
                <img src={foto5} alt="Imagem" />
            </a>
            <a className="col-lg-3 col-md-3 col-sm-6 col-6 my-3" href={gfoto6} data-lightbox="example-set" data-title="Moto Antiga 02">
                <img src={foto6} alt="Imagem" />
            </a>
            <a className="col-lg-3 col-md-3 col-sm-6 col-6 my-3" href={gfoto7} data-lightbox="example-set" data-title="Moto Antiga">
                <img src={foto7} alt="Imagem" />
            </a>
            <a className="col-lg-3 col-md-3 col-sm-6 col-6 my-3" href={gfoto8} data-lightbox="example-set" data-title="Moto Antiga 02">
                <img src={foto8} alt="Imagem" />
            </a>
          </div>
        </>
      );
};

export default Galeria;
