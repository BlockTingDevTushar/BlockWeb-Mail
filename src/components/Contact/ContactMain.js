import React, { Component } from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import Map from '../Home/MapSection';
import Cta from '../Home/CtaSection';
import Contact from './ContactSection';


class ContactMain extends Component {

    render() {

        return (
            <main>
                {/* breadcrumb-start */}
				<Breadcrumb pageTitle="Contact" />
				{/* breadcrumb-end */}

                {/* contact-start */}
                <Contact />
				{/* contact-end */}

                {/* cta-start */}
                {/* <Cta/> */}
				{/* cta-end */}

                {/* map-start */}
                <Map />
                {/* map-end */}
        	</main>
        );
    }
}

export default ContactMain;