import React, { Component } from 'react';
import { HeaderImg, LanguageProgramation } from '../components';


class Home extends Component {
    render() {
        const { titre, famille, ssfamille, duree, prix, nom, formation } = this.props;
        // formation.forEach(element => console.log(element));

        return (
            <div>
                <HeaderImg />
                <LanguageProgramation
                    titre={titre}
                    famille={famille}
                    ssfamille={ssfamille}
                    duree={duree}
                    prix={prix}
                    nom={nom}
                    formation={formation}
                />
            </div>
        )
    }
}

export { Home };