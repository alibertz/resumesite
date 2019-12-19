import React, { Component } from 'react';
import AboutMe from './AboutMe';
import ScrollableAnchor from 'react-scrollable-anchor';
import Timeline from './Timeline';
import Projects from './Projects';
import { configureAnchors } from 'react-scrollable-anchor'
 
// Offset all anchors by -60 to account for a fixed header
// and scroll more quickly than the default 400ms
configureAnchors({offset: -60, scrollDuration: 400});

class MainContent extends Component {
    render() {
        const scroller = {
            position: 'fixed',
            top: '18%',
            right: '1rem',
            zIndex: '2',
            color: 'purple',
            fontFamily: 'Permanent Marker',
            fontSize: '1.6rem',
            textDecoration: 'none',
            listStyle: 'none',
            textAlign: 'right',
            transition: '.2s'
        }
        return (
            <main style={{overflow: "hidden", position: 'relative'}}>
                <ul style={scroller} id="scroller">
                    <li><a href="#aboutMe" style={{color: 'purple', textDecoration: 'none'}}> {'<About />'} </a></li>
                    <li><a href="#projects" style={{color: 'purple', textDecoration: 'none'}}> {'<Projects />'} </a></li>
                    <li><a href="#timeline" style={{color: 'purple', textDecoration: 'none'}}> {'<Experience />'} </a></li>
                </ul>
                <ScrollableAnchor id={'aboutMe'}>
                    <AboutMe />
                </ScrollableAnchor>
                
                <ScrollableAnchor id={'projects'}>
                    <Projects />
                </ScrollableAnchor>
                <ScrollableAnchor id={'timeline'}>
                    <Timeline />
                </ScrollableAnchor>
            </main>
        );
    }
}

export default MainContent;