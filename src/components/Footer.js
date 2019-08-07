import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="container-fluid footer">
                <div className="container">
                    <h4 id="footer-eml">{'kevin' + 'aliberti@' + 'gmail.com'}</h4>
                    <div className="resume-btn-wrap">
                        <a href="https://github.com/alibertz/resumesite/raw/gh-pages/kevin_aliberti_resume.pdf" className="resume-btn-link" target="_blank" download>
                            <div className="resume-btn">
                                <i class="far fa-arrow-alt-circle-down"></i>  download resume
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;