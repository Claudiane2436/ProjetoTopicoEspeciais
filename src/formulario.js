import React, { useState } from 'react';
import $ from 'jquery';
import carrobanner from './logo/carrobanner.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';


const Formulario = () => {
    const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  // Função para lidar com a submissão do formulário
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode realizar a lógica de envio do formulário, por exemplo, enviando os dados para um servidor.
    console.log('Email:', email);
    console.log('Mensagem:', mensagem);
    // Adicione a lógica de envio do formulário aqui
  };
  return (
    <div className="jumbotron-fluid">
      <div className="form-group" style={{ backgroundColor: '#151414', color: 'white' }}>
        <br />
        <h4 className="text-center" style={{ color: 'red' }}>Faça já seu orçamento</h4>
        <br />
        <form onSubmit={handleSubmit}>
          <label htmlFor="exampleInputEmail1" className="d-flex justify-content-center">Email</label>
          <div className="d-flex justify-content-center">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email:"
              style={{ width: '400px' }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <br /> <br />

          <div className="form-group">
            <label htmlFor="exampleInputPassword1" className="d-flex justify-content-center">Mensagem</label>

            <div className="d-flex justify-content-center">
              <textarea
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Mensagem"
                style={{ width: '400px', height: '90px' }}
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
              />
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary" style={{ width: '90px' }}>Enviar</button>
          </div>
        </form>
        <br /> <br />
      </div>
    </div>
  );
};

export default Formulario;
