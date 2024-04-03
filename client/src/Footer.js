import React from 'react';
import Logo from './assets/img/logo.png';
import googleplay from './assets/img/googleplay.png';
import appstore from './assets/img/appstore.png';
import sslsecure from './assets/img/ssl-secure.png';

function Footer() {
  return (
    <div id="footer">
      <span id="brand">
        <img src={Logo} alt="logo" />
      </span>
      
      <div>
        <ul>
          <li><h1>Plataforma</h1></li>
          <li><a href="/cadastro">Cadastro</a></li>
          <li><a href="/suporte">Suporte</a></li>
          <li><a href="/parceiros">Parceiros</a></li>
          <li><a href="/afiliados">Afiliados</a></li>
        </ul>

        <ul>
          <li><h1>Termos</h1></li>
          <li><a href="/termos">Termos de uso</a></li>
          <li><a href="/privacidade">Política de privacidade</a></li>
          <li><a href="/reembolso">Reembolso</a></li>
          <li><a href="/regras_grupo">Regras do grupo</a></li>
        </ul>

        <ul>
          <li><h1>Peões pioneiros</h1></li>
          <li><a href="/peao/1">Zeca Barreiro</a></li>
          <li><a href="/peao/2">Jacques Faxinildo</a></li>
          <li><a href="/peao/3">Gerson Perez</a></li>
          <li><a href="/peao/4">Marquinhos Tapajós</a></li>
        </ul>

        <ul>
          <li><a href="/google_play"><img src={googleplay} alt="Google Play" /></a></li>
          <li><a href="/app_store"><img src={appstore} alt="App Store" /></a></li>
          <li><img src={sslsecure} alt="SSL secured website" /></li>
        </ul>
      </div>

      <div style={{fontSize: '.8rem'}}>
        <div>&copy; Todos os direitos reservados para <strong> rodeiodigital.com</strong></div>
      </div>
    </div>
  );
}

export default Footer;