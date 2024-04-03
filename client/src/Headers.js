import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWifiStrong } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
// import Player from './assets/img/basketball-player.png';
// import auth from './auth';
import Logo from './assets/img/logo.png';
// import Cover from './assets/img/baskteball-cover.jpg'
// import history from './utils/history';

let navBtns;
navBtns = 
<ul>
  <li>Gustavo, bem vindo ao time!<br/><span>Juiz oficial</span></li>
  <li><button><FontAwesomeIcon icon={faWifiStrong} /> Secretaria conectado</button></li>
  <li><button><FontAwesomeIcon icon={faWifiStrong} /> Juiz conectado</button></li>
  <li><button><FontAwesomeIcon icon={faWifiStrong} /> Narrador Conectado</button></li>
</ul>
;

function Headers() {
  return (
    <div id="header">
      <nav>
        <span id="brand">
          <img src={Logo} alt="logo" />
        </span>
        
        {navBtns}
      </nav>
    </div>
  );
}

export default Headers;