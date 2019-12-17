import React, { Component } from 'react';
import ProjectCard from './ProjectCard';

class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: {
                weatherApp: {
                    header: 'Simple Weather App',
                    image: require('../images/weatherapp.PNG'),
                    created: 'August 2019',
                    description: 'Small React application that consumes OpenWeatherMap API and outputs weather information based on user input. Includes a dark mode toggle.',
                    technologies: ['React.JS', 'HTML5/CSS3', 'Sass'],
                    techIcons: ['fab fa-react', 'fab fa-html5', 'fab fa-sass']
                },
                bostonsdeals: {
                    header: 'Deal Finder App',
                    image: require('../images/bostonsdeals.PNG'),
                    created: 'Nov - Dec 2019',
                    description: 'Application with a GraphQL interacting with an Apollo/Express server, served with a React client. Enter a Boston neighborhood, and have deals going on in that area for the desired day of the week show. Regularly improving. Deployed to Heroku.',
                    technologies: ['React.JS', 'Apollo', 'GraphQL'],
                    techIcons: ['fab fa-react', 'fab fa-html5', 'fab fa-css3']
                },
                artSite: {
                    header: 'Artist Showcase Website',
                    image: require('../images/artistwebsite.PNG'),
                    created: 'July 2019',
                    description: 'Static page showcasing artist\'s sculpture work',
                    technologies: ['HTML5/CSS3', 'Sass'],
                    techIcons: ['fab fa-html5', 'fab fa-sass']
                },
            }
        }
    }
    render() {
        const projectCard = {
            height:'10rem',
            width:'100%',
            backgroundColor:'white',
            margin: '4rem auto',
            textDecoration: 'none',
            color: 'inherit'
        }
        return (
            <section id="about-me" style={{ zIndex: '0' }}>
                <div className="container-fluid elem">
                    <div className="container">
                        <h3 style={{ borderBottom: '1px solid rgb(117, 117, 117)' }}>ABOUT ME</h3>
                        <div className="row">
                            <div className="col-12 col-md-9 col-lg-7">
                                <p className="pl-3 pl-md-5" id="about-me-p">Aspiring web & software developer and designer mainly focusing on front-end development, while having a solid understanding of back-end processes as well. I am rapidly learning more in both areas every day. I have a distinct appreciation of the importance in working with data and developing interfaces that create seamless user experiences.</p>
                            </div>
                        </div>
                            {/* Projects to show */}
                        <div id="projects">
                            <h4 style={{ borderBottom: '1px solid rgb(117, 117, 117)' }}>PROJECTS</h4>
                            <div className="row">
                                <div className="col-12">
                                    <a style={projectCard} href="https://alibertz.github.io/weather-app">
                                        <ProjectCard project={this.state.projects.bostonsdeals}/>
                                    </a>
                                </div>
                                <div className="col-12">
                                    <a style={projectCard} href="https://bostonsdeals.herokuapp.com">
                                        <ProjectCard project={this.state.projects.weatherApp}/>
                                    </a>
                                </div>
                                <div className="col-12">
                                    <a style={projectCard} href="https://alibertz.github.io/rickyalibertiart">
                                        <ProjectCard project={this.state.projects.artSite}/>
                                    </a>
                                </div>
                            </div>
                            
                        </div>
                            
                        
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutMe;