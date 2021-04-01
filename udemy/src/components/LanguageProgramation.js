import React, { Component } from "react";
import "../css/LanguageProgramation.css";

class LanguageProgramation extends Component {
  getData = () => {
    return this.props.formation.map((item, index) => {
      return (
        <div className="col-4 text-center">
          <div key={index} className="card">
            <div className="card-header">Formateur : {item.nom}</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Titre : {item.titre}</li>
              <li className="list-group-item">Famille : {item.famille}</li>
              <li className="list-group-item">
                Sous famille : {item.ssfamille}
              </li>
              <li className="list-group-item">Durée : {item.duree} heures</li>
              <li className="list-group-item">Prix : {item.prix}€</li>
              <li className="list-group-item">Mail : {item.contact}</li>
              <li className="list-group-item">Statut : {item.status}</li>
            </ul>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row">{this.getData()}</div>
      </div>
    );
  }
}

export { LanguageProgramation };
