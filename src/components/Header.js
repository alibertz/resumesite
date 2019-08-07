import React, { Component } from 'react';

class Header extends Component {
    
    render () {
        return (
            <header>
                <div className="parallax">
                    <div style={{ paddingTop: '12%' }}>
                        <img src={require("C:\\Users\\Kevin\\Desktop\\resumesite\\src\\images\\profile.jpg")} alt="" id="profile-img" />

                        <h1 id="name" className="6">KEVIN ALIBERTI</h1>
                        <h2 id="tagline">junior software developer</h2>

                        <div className="social-buttons" data-direction="up" data-speed="0.62">
                            <div className="social-btn">
                                <a href="https://github.com/alibertz" target="_blank"><img src={require("C:\\Users\\Kevin\\Desktop\\resumesite\\src\\images\\GitHub-Mark-Light-64px.png")} alt="" style={{ width: '48px', height: '48px' }} /></a>
                            </div>
                            <div className="social-btn">
                                <a href="https://www.linkedin.com/in/kevinaliberti" target="_blank"><img src={require("C:\\Users\\Kevin\\Desktop\\resumesite\\src\\images\\ln-Blue-48.png")} alt="" style={{ width: '48px', height: '48px'}}/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }  
};

export default Header;