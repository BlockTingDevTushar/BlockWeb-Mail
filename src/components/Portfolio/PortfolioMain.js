import React, { Component } from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import ProjectTabTwo from '../Elements/Tab/ProjectTabTwo';
import Project from '../Home/ProjectSection';


class PortfolioMain extends Component {

    render() {

        return (
            <main>
                {/* breadcrumb-start */}
                <Breadcrumb pageTitle="Portfolio" />
                {/* breadcrumb-end */}

                {/* service-start */}
                <Project />
                {/* service-end */}

            </main>
        );
    }
}

export default PortfolioMain;