import React, { Component } from 'react';
import { HeaderImg, LanguageProgramation } from '../components';


class Home extends Component {
    render() {
        const { formation } = this.props;
        // console.log(formation);
        formation.forEach(element => console.log(element));

        return (
            <div>
                <HeaderImg />
                <LanguageProgramation
                    formation={formation}
                />
            </div>
        )
    }
}

export { Home };