import React from 'react'
import { Link } from 'react-router-dom';

export default function PaginaInicial() {
  return (
    <>
      <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex a, qui facere excepturi harum asperiores voluptatibus. Debitis fuga et consequuntur illo. Numquam, ad cumque eligendi vitae error maiores facilis cupiditate!</p></div>
      <button><Link to='/configuracao'>Confi</Link></button>
    </>
  );
}
