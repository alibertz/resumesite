import React, { Component } from 'react';
import ProjectCard from './ProjectCard';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: {
                weatherApp: {
                    header: 'Weather App',
                    image: require('../images/weatherapp.PNG'),
                    created: 'August 2019',
                    description: 'Small React application that consumes OpenWeatherMap API and outputs weather information based on user input. Includes a dark mode toggle.',
                    technologies: ['React.JS', 'HTML5', 'Sass'],
                    techIcons: [require('../images/react.png'), require('../images/html.png'), require('../images/sass.png')],
                    codeLink: 'https://github.com/alibertz/weather-app',
                    demoLink: 'https://alibertz.github.io/weather-app/'
                },
                bostonsdeals: {
                    header: 'Deal Finder App',
                    image: require('../images/bostonsdeals.PNG'),
                    created: 'Nov - Dec 2019',
                    description: 'Application with a GraphQL interacting with an Apollo/ Express server, served with a React client. Enter a Boston neighborhood, and have deals going on in that area for the desired day of the week show. Deployed to Heroku.',
                    technologies: ['React.JS', 'Apollo', 'GraphQL'],
                    techIcons: [require('../images/react.png'), require('../images/apollo.png'), require('../images/graphql.png')],
                    codeLink: 'https://github.com/alibertz/bostonsdeals',
                    demoLink: 'https://bostonsdeals.herokuapp.com/'
                },
                artSite: {
                    header: 'Artist Showcase Website',
                    image: require('../images/artistwebsite.PNG'),
                    created: 'July 2019',
                    description: 'Static page showcasing artist\'s sculpture work. (Work in progress)',
                    technologies: ['HTML5', 'CSS3', 'Sass'],
                    techIcons: [require('../images/html.png'), require('../images/css.png') ,require('../images/sass.png')],
                    codeLink: 'https://github.com/alibertz/richardalibertiart',
                    demoLink: 'http://https://alibertz.github.io/richardalibertiart/'
                },
            }
        }
    }
    render() {
        return (
            <section id="projectsSection">
            
            <div className="container">
                <h3 style={{ borderBottom: '1px solid #eee',color: '#eee' }}>PROJECTS</h3>
                <div>
                    <div>
                        <a>
                            <ProjectCard project={this.state.projects.bostonsdeals}/>
                        </a>
                    </div>
                    <div>
                        <a>
                            <ProjectCard project={this.state.projects.weatherApp}/>
                        </a>
                    </div>
                    <div>
                        <a>
                            <ProjectCard project={this.state.projects.artSite}/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

export default Project;