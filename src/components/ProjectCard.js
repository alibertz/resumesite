import React from 'react';
import './Card.css';

const ProjectCard = (props) => {

    return (
        <div class="card">
            <div class="info">
                <h2>{props.project.header}</h2>
                
                
                <div class="stats">
                    <div>
                        <div class="title">{props.project.technologies[0]}</div>
                        <img style={{height: '48px', width: '48px'}} src={props.project.techIcons[0]} />
                    </div>
                    <div>
                        <div class="title">{props.project.technologies[1]}</div>
                        <img style={{height: '48px', width: '48px'}} src={props.project.techIcons[1]} />
                    </div>
                    <div>
                        <div class="title">{props.project.technologies[2]}</div>
                        <img style={{height: '48px', width: '48px'}} src={props.project.techIcons[2]} />
                    </div>

                </div>
            </div>
            <div className="description">
                <p>{props.project.description}</p>
                <div className="btns">
                    <a href={props.project.codeLink}>View code</a>
                    <a href={props.project.demoLink}>View demo</a>
                </div>
            </div>
            
        </div>
    );
};

export default ProjectCard;