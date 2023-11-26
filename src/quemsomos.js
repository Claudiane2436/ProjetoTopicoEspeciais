import React from 'react';
import $ from 'jquery';
import carrobanner from './logo/carrobanner.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const QuemSomos = () => {
  return (
    <div>
      <img className="img-fluid" src={carrobanner} alt="Banner de Carro" />

      <div className="jumbotron jumbotron-fluid my-3" style={{ backgroundColor: '#02081a', height: '300px' }}>
        <h1 className="display-5 text-center" style={{ color: 'white' }}>Quem Somos?</h1>
        <p className="lead text-white">
          Somos uma empresa de customização de carros e motos. Somos referência no mercado automobilístico.
          Nossa Missão: Temos como missão crescer cada vez mais no mercado de trabalho.
          Trazer conforto e as necessárias para se poder chegar à excelência.
        </p>
      </div>
    </div>
  );
};

export default QuemSomos;
