import React, { Component } from 'react';

class AboutMe extends Component {

    render() {

        return (
            <section id="about-me">
                
                <div className="container-fluid elem">
                    <div className="container">
                        <h3 style={{ borderBottom: '1px solid rgb(117, 117, 117)' }}>ABOUT ME</h3>
                        <div className="about-me-wrapper">
                            <div className="">
                                <p className="pl-3 pl-md-5" id="about-me-p">Aspiring web & software developer and designer mainly focusing on front-end development, while having a solid understanding of back-end processes as well. I am rapidly learning more in both areas every day. I have a distinct appreciation of the importance in working with data and developing interfaces that create seamless user experiences.</p>
                            </div>
                            <div className="technical-skills">
                                <div className="frontEnd">
                                    <h4>Front End</h4>
                                    <div className="icons">
                                        <div>
                                            <h5>React.js</h5>
                                            <img src={require('../images/react.png')}/>
                                        </div>
                                        <div>
                                            <h5>HTML5/CSS3</h5>
                                            <div id="htmlcss">
                                                <img src={require('../images/html.png')}/>
                                                <img src={require('../images/css.png')}/>
                                            </div>
                                            
                                        </div>
                                        <div>
                                            <h5>JavaScript</h5>
                                            <img src={require('../images/javascript.png')}/>
                                        </div>
                                        <div>
                                            <h5>Sass</h5>
                                            <img src={require('../images/sass.png')}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="backEnd">
                                    <h4>Back End</h4>
                                    <div className="icons">
                                        <div>
                                            <h5>Node.js</h5>
                                            <img src={require('../images/node.png')}/>
                                        </div>
                                        <div>
                                            <h5>Apollo</h5>
                                            <img src={require('../images/apollo.png')}/>
                                        </div>
                                        <div>
                                            <h5>GraphQL</h5>
                                            <img src={require('../images/graphql.png')}/>
                                        </div>
                                        <div>
                                            <h5>mySQL</h5>
                                            <img src={require('../images/mysql.png')}/>
                                        </div>
                                    </div>
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