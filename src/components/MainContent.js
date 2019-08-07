import React, { Component } from 'react';
import AboutMe from './AboutMe';
import TechnicalSkills from './TechnicalSkills';
import Timeline from './Timeline';

class MainContent extends Component {
    render() {
        return (
            <main>
                <AboutMe />
                <TechnicalSkills />
                <Timeline />
            </main>
        );
    }
}

export default MainContent;