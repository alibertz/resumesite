import React, { Component } from 'react';
import TimelineElement from './TimelineElement';

class Timeline extends Component {
    state = {
        experience: [
            {
                badge: {icon: 'fas fa-code', color: 'timeline-badge first'},
                title: 'Co-Founder of Tech Startup',
                company: 'Prediction Money, Inc',
                timespan: 'Jan 2019 - June 2019',
                website: null,
                duties: ['Formulated business plan with other co-founder',
                            'Worked with experienced back-end programmer to bring early startup visions to a reality',
                            'Develop ways to create an optimal user experience to build loyal customer base',
                            <em>Technologies Used: PHP, CodeIgniter, cPanel, Git, HTML/CSS</em>]
            }, 
            {
                badge: {icon: 'fas fa-poll-h', color: 'timeline-badge second'},
                title: 'Digital Marketing Intern',
                company: 'Cascade School Supplies, Inc',
                timespan: 'June 2018 - Aug 2018',
                website: null,
                duties: ['Created fresh look to product pages to increase brand awareness and aesthetic appeal', 
                            'Added new product pages and deleted duplicate or discontinued products', 
                            'Generated valuable ideas for optimizing company website to increase SEO and a more meaningful user experience']
            },
            {
                badge: {icon: 'fas fa-laptop', color: 'timeline-badge third'},
                title: 'Freelance Odd Jobs',
                company: 'Upwork Freelance Platform',
                timespan: 'Dec 2018 - Present',
                website: null,
                duties: ['Review writing', 'Blog/Content Writing']
            },
            {
                badge: {icon: 'fas fa-hamburger', color: 'timeline-badge fourth'},
                title: 'Server & Food Expediter',
                company: 'Hops & Vines Beer Garden and Brasserie',
                timespan: 'May 2015 - Sept 2017',
                website: null,
                duties: ['Developed strong interpersonal communication skills through regular interaction with patrons',
                            'Assumed additional responsibilities to ensure the kitchen worked in harmony',
                            'Exhibited strong teamwork and multitasking abilities with coworkers']
            },
            {
                badge: {icon: 'fas fa-graduation-cap', color: 'timeline-badge fifth'},
                title: 'Bachelor of the Arts - Economics',
                company: 'Westfield State Univeristy',
                timespan: 'Graduated May 2019',
                website: null,
                duties: ['Minor in Computer Science']
            }
        ]
    }
    render () {
        let timelineElements = this.state.experience.map((elem, index) => {
            return (<TimelineElement 
                    title={elem.title} 
                    company={elem.company} 
                    timespan={elem.timespan}
                    website={elem.website}
                    duties={elem.duties}
                    badge={elem.badge}
                    key={index}
                    id={index}
                    />
            )}); 
        return (
            <section id="experience">
                <div className="container-fluid elem">
                    <div className="container">
                        <h3 style={{borderBottom: '1px solid rgb(117, 117, 117)'}}>EXPERIENCE & EDUCATION</h3>
                        <ul className="timeline">
                            {[timelineElements]}
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
};

export default Timeline;