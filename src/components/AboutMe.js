import React, { Component } from 'react';

class AboutMe extends Component {
    render() {
        return (
            <section id="about-me" style={{ zIndex: '0' }}>
                <div className="container-fluid elem">
                    <div className="container">
                        <h3 style={{ borderBottom: '1px solid rgb(117, 117, 117)' }}>ABOUT ME</h3>
                        <div className="row">
                            <div className="col-12 col-md-8">
                                <p className="pl-3 pl-md-5" id="about-me-p">Aspiring web & software developer and designer mainly focusing on front-end development, while having a solid understanding of back-end processes as well. I am rapidly learning more in both areas every day. I have a distinct appreciation of the importance in working with data and developing interfaces that create seamless user experiences.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutMe;