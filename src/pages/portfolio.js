import React from 'react';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import PortfolioMain from '../components/Portfolio/PortfolioMain';

class ContactPage extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <Header />
            <PortfolioMain/>
            <Footer />
            </React.Fragment>
        );
    }
}


export default ContactPage;

