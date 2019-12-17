import React, { Component } from 'react';

import ListItem from './ListItem'

class TechnicalSkills extends Component {
    state = {
        skillLists: {frontEnd: true,
                    other: false
        },

        showIndicators: {
            frontEnd: {color: '#ff396a', transition: '0'},
            backEnd: {color: '#707070', transition: '0'},
            other: {color: '#707070', transition: '0'}
        },
    }

    setList = (list) => {
        let choice = list;
        const trans = '0.8s';
        const highlightColor = '#ff396a';
        const restColor = '#707070';
        switch (choice) {
            case 'frontEnd':
                this.setState({ skillLists: {frontEnd: true, backEnd: false, other: false},
                                showIndicators: {frontEnd: {color: highlightColor, transition: trans}, 
                                                backColor: {color: restColor, transition: trans},
                                                other: {color: restColor, transition: trans}} 
                });
                                                
                break;
            case 'backEnd':
                this.setState({ skillLists: {backEnd: false, frontEnd: false, other: true},
                                showIndicators:{frontEnd: {color: restColor, transition: trans}, 
                                                backEnd: {color: highlightColor, transition: trans},
                                                other: {color: highlightColor, transition: trans}} 
                });
                break;
            case 'other':
                this.setState({ skillLists: {other: true, frontEnd: false, backEnd: false},
                                showIndicators: {frontEnd: {color: restColor, transition: trans}, 
                                                backEnd: {color: restColor, transition: trans},
                                                other: {color: highlightColor, transition: trans}}
                });
                break;
            default:
                break;
        }
    }

    componentDidMount() {
        const listsArr = ['frontEnd','backEnd'];
        let i = 0;
        setInterval(() => {
            const currentList = listsArr[i];
            this.setList(currentList);
            i++;
            if(i>=listsArr.length){
                i=0;
            }
        }, 10000);
    }

    render() {
        const indicator = this.state.showIndicators;
        return (
            <section id="technical-skills">
                <div className="container-fluid elem">
                    <div className="container">
                        <h3>TECHNICAL SKILLS</h3>
                        <div className="row">
                            <div className="col-md-4">
                                <h5 className="skill-head">Areas</h5>
                                <h6 style={{ textAlign: 'center', color: 'rgb(214, 214, 214)', fontSize: '.8rem' }} id="mobile-hide">(mouse over for more)</h6>
                                <ul className="list-elems" id="lang-list-elem">
                                    <li style={{color: indicator.frontEnd.color, transition: indicator.frontEnd.transition}} onMouseEnter={() => this.setList('frontEnd')} onClick={() => this.setList('frontEnd')}>Front End</li>
                                    <li style={{color: indicator.other.color, transition: indicator.other.transition}} onMouseEnter={() => this.setList('backEnd')} onClick={() => this.setList('backEnd')}>Back End</li>
                                </ul>
                            </div>

                            {/* --------------------------------------------- */}
                            <div className="col-md-4 skills-border">
                                <h5 className="skill-head pb-5">Frameworks & Abilities</h5>
                                {this.state.skillLists.frontEnd ?
                                    (<ul className="fa-list-elems show">
                                        <li>HTML5 / CSS3 / JavaScript</li>
                                        <li>React.JS</li>
                                        <li>CSS Preprocessors/Frameworks - Sass & Bootstrap</li>
                                        <li>Responsive (mobile-first) Design</li>
                                        <li>Have a birds-eye-view understanding of how websites are built and deployed from the ground up</li>
                                    </ul>) : 
                                    <ul className="fa-list-elems hide">
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>}
                                {this.state.skillLists.other ?
                                    (<ul className="fa-list-elems show">
                                        <li>Basic understanding of PHP</li>
                                        <li>Familiar CodeIgniter PHP framework</li>
                                        <li>Familiar with how MVC design pattern works</li>
                                        <li>Able to build efficient databases from the ground up</li>
                                        <li>Able to query and sort data with multiple (3+) table joins</li>
                                    </ul>) : 
                                    <ul className="fa-list-elems hide">
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>}
                            </div>

                            {/* --------------------------------------------- */}
                            <div className="col-md-4">
                                <h5 className="skill-head">Other Skills</h5>
                                <ul className="list-elems">
                                    <li>Git</li>
                                    <li>MySQL / SQL Server</li>
                                    <li>Strongly design oriented</li>
                                    <li>Meticulous attention to detail</li>
                                    <li>Excellent problem solving skills</li>
                                    <li>Rapid learner</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
};

export default TechnicalSkills;