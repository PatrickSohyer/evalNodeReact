import React, { Component } from 'react';
import '../css/LanguageProgramation.css';

class LanguageProgramation extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4 text-center">
                        <h3 className="titleChoice">Le choix de cours le plus vaste du monde</h3>
                        <p className="textChoice">Choisissez parmi 130 000 vidéos de cours en ligne. De nouveaux cours sont ajoutés tous les mois.</p>
                        <div className="card">
                            <div className="card-header">
                            Formateur : {this.props.nom}
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Titre : {this.props.titre}</li>
                                <li className="list-group-item">Famille : {this.props.famille}</li>
                                <li className="list-group-item">Sous famille : {this.props.ssfamille}</li>
                                <li className="list-group-item">Durée : {this.props.duree}</li>
                                <li className="list-group-item">Prix : {this.props.prix}€</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export { LanguageProgramation };