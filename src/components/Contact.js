import React, {
    Component
} from 'react';
import ContactInfo from './ContactInfo';

export default class Contact extends Component {
    constructor(props) {
        super(pops);
        this.state = {
            contactData: [{
                name: 'Abet',
                phone: '010-2546-1111'
            }, {
                name: 'Betty',
                phone: '010-2546-2222'
            }, {
                name: 'Charlie',
                phone: '010-2546-3333'
            }, {
                name: 'David',
                phone: '010-2546-4444'
            }]
        };
    }

    render() {
        const mapTpComponents = (data) => {
            return data.map((contact,i) => {
                return (<ContactInfo contact={contact} key={i}/>);
            });
        ;}
            return(
                <div>
                </div>
            )
    }

}