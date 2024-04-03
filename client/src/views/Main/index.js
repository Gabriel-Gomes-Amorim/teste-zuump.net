import '../../style.css';

import { useState, useEffect } from 'react';

import Axios from 'axios';

import {baseUrl} from '../../utils/global';

// var baseUrl = window.location.origin;

// import animated from '../../assets/img/animated.gif';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { faDisplay } from '@fortawesome/free-solid-svg-icons'

import { faCow } from '@fortawesome/free-solid-svg-icons'

import { faHandshake } from '@fortawesome/free-solid-svg-icons'

import { faHatCowboy } from '@fortawesome/free-solid-svg-icons';

import { faCalculator } from '@fortawesome/free-solid-svg-icons';

import Switch from 'react-switch';

import googleplay from '../../assets/img/googleplay.png';

import appstore from '../../assets/img/appstore.png';

// import history from '../../utils/history';
// var baseUrl = window.location.origin;

function Main() {
  const [competitorsData, setCompetitorsData] = useState([]);

  // const [selectedSpan, setSelectedSpan] = useState(null);
  // const [selectedRowId, setSelectedRowId] = useState(null);
  // const [selectedPosition, setSelectedPosition] = useState(null);
  // const [competitorRopes, setCompetitorRopes] = useState([{"1": "", "2": "", "3": "", "4": "", "5": ""},{"1": "", "2": "", "3": "", "4": "", "5": ""}]);
  
  const handleSwitchChange = () => {
    return;
  }
  
  const handleClick = (event, index, key, rowId) => {
    /*
    const clickedSpan = event.target;

    // Update selected span styles
    if (selectedSpan) {
      selectedSpan.style.border = 'none'; // Reset border style of previously selected span
    }
    // const clickedSpan = document.getElementById(`span-${index}-${key}-${rowId}`);
    clickedSpan.style.border = '4px solid pink'; // Apply pink border to clicked span

    // Store selected position, row ID, and value in cache
    setSelectedPosition(key);
    setSelectedRowId(rowId);

    // Update selected span and row ID
    setSelectedSpan(clickedSpan);

    // updateInputValue();
    */
  };

  /*
  const updateInputValue = () => {
    const updatedRopes = [...competitorRopes];
    updatedRopes[selectedRowId - 1][selectedPosition] = "newValue"; // Modify the value as needed

    const hiddenInput = document.querySelector('.ropes');
    if (hiddenInput) {
      hiddenInput.value = JSON.stringify(updatedRopes); // Update the hidden input value
    }
    setCompetitorRopes(updatedRopes); // Update state with modified ropes array
  };
  */

  Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.get(baseUrl + ':3001/list').then((response) => {
      // console.log(response);
      setCompetitorsData(response.data);
    })
    .catch((err) => {
      console.error('Error fetching data:', err);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return(
    <div id="main">
      {/* Competition info */}
      <div className="roping-info">
        <div className="first-half">
          <div className="competition-info">
            <div className="competitors-info">
              <button className="btn-std-rodeo">Mostrar retardatários</button>
              <button className="btn-std-rodeo">Mostrar eliminados</button>
              <button className="btn-std-rodeo">Ocultar eliminados</button>
            </div>
            <div className="search-competitor">
              <label className="std-rodeo-lbl">Pesquisa por nº da inscrição<br/>ou nome do competidor</label>
              <input type="text" className="form-std-rodeo" placeholder="Nº OU NOME" />
              <button className="change-discipline">Alterar modalidade</button>
            </div>
            <div className="main-rules">
              <span>Acertos por força: <b>'C' 05, 06</b> | <b>'B' 07, 08</b> | <b>'A' 09, 10</b></span>
              <span>Tipo: <b>dupla</b> | Voltas classificatórias: <b>05 voltas</b> | escolha de força: <b>não</b></span>
              <span>Finaliza em: <b>02</b> | Premiação: <b>'C' R$ 8.000</b>,00 | <b>'B' R$ 5.000,00</b> | <b>'A' R$ 2.500,00</b></span>
            </div>
          </div>
          <div className="submit-message">
            <div>
              <button className="btn-std-message"><FontAwesomeIcon icon={faEnvelope} /> Enviar recado à secretaria</button>
              <button className="btn-std-message"><FontAwesomeIcon icon={faEnvelope} /> Enviar recado ao narrador</button>
            </div>
          </div>
        </div>
        <div className="second-half">
          <div className="rodeo-actions">
            <button className="btn-std-action open-screen"><FontAwesomeIcon icon={faDisplay} /> Tela aberta<span className="commentator">no narrador</span></button>
            <button className="btn-std-action switch-cattle"><FontAwesomeIcon icon={faCow} /> Trocar gado</button>
            <button className="btn-std-action depart"><FontAwesomeIcon icon={faHandshake} /> Repartiram<span className="halt-discipline">encerrar modalidade</span></button>
          </div>
          <div className="support-chat">
            <div className="chat-box-title">
              Chat de suporte rodeiodigital.com
            </div>
            <div className="chat-box-body">
              <button className="btn-std-chat">Iniciar suporte com rodeiodigital.com</button>
            </div>
          </div>
          <div className="partial-result">
            <div className="partial-result-box">
              <span className="res">Resultado parcial</span>
              <span className="res"><span className="number">34</span> na força 'A'</span>
              <span className="res"><span className="number">45</span> na força 'B'</span>
              <span className="res"><span className="number">80</span> na força 'C'</span>
            </div>
          </div>
        </div>
      </div>
      {/* Real-time data table */}
      <div className="roping-table">
        <div className="table-title">
          <span>Rodando agora: <b>final laço duplas oficiais</b></span>
        </div>
        <div className="table">
          <table className="main-table">
            <thead>
              <tr>
                <th><FontAwesomeIcon icon={faHatCowboy} /></th>
                <th><FontAwesomeIcon icon={faCalculator} /></th>
                <th>Nº</th>
                <th>Laçador</th>
                <th>Observação</th>
                <th>Força</th>
                <th>Acertos</th>
                <th>| 01 | 02 | 03 | 04 | 05 |</th>
              </tr>
            </thead>
            <tbody>
              {competitorsData.map((competitor) => (
              <tr key={competitor.id_team_roper}>
                <td><Switch checked onColor="#737479" height={15} width={38} onChange={handleSwitchChange} /></td>
                <td><span className="calculator-span"><FontAwesomeIcon icon={faCalculator} /></span></td>
                <td>{competitor.id_team_roper}</td>
                <td>
                {competitor.competitors_names.map((name, index) => (
                  <span className="competitor-name" key={index}>{name}</span>
                ))}
                </td>
                <td></td>
                <td></td>
                <td></td>
                {/* <td>{competitor.ropes}</td> */}
                <td>
                {JSON.parse(competitor.ropes).map((ropeSet, index) => (
                  <div key={index}>
                    {Object.keys(ropeSet).map((key, i) => {
                      let colorClass = "";
                      if (ropeSet[key] === "X") {
                        colorClass = "square correct"; // Green color
                      } else if (["Z", "S", "P", "D", "C", "G", "R"].includes(ropeSet[key])) {
                        colorClass = "square incorrect"; // Red color
                      } else {
                        colorClass = "square empty";
                      }
                      // console.log("colorClass:", colorClass);
                      return <span key={i} data-value={ropeSet[key]} className={colorClass} onClick={(event) => handleClick(event, index, key, competitor.id_team_roper)}></span>;
                    })}
                  </div>
                ))}
                <input type="hidden" className="ropes" value={competitor.ropes} />
                </td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="fixed-instructions">
        <div></div>
        <div className="shortcuts-instructions">
          <div className="shortcuts-lbl">Atalhos:</div>
          <div className="shortcuts">
            <div>
              <span><span className="letter-badge-success">X</span> Correta</span>
              <span><span className="letter-badge-danger">Z</span> Apenas branca</span>
              <span><span className="letter-badge-danger">S</span> Saltou</span>
              <span><span className="letter-badge-danger">P</span> Pescoço</span>
              <span><span className="letter-badge-danger">D</span> Dobrada</span>
              <span><span className="letter-badge-danger">C</span> Não cerrou</span>
              <span><span className="letter-badge-danger">G</span> Garupa</span>
              <span><span className="letter-badge-danger">R</span> Rodilha</span>
            </div>
          </div>
        </div>
        <div className="competition-phases">
          <button className="btn-std-phase-1" type="button">Classificatória</button>
          <button className="btn-std-phase-2" type="button">Final</button>
          <button className="btn-std-phase-2" type="button">Vencedores</button>
        </div>
      </div>
    </div>
  );
}

export default Main;