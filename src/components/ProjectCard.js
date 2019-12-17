import React from 'react';
import './Card.css';

const ProjectCard = (props) => {

    return (
        <div class="card">
            
            <div class="general">
                <h2>{props.project.header}</h2>
                <p className="description">{props.project.description}</p>
                <div class="stats">
                    <div>
                        <div class="title">{props.project.technologies[0]}</div>
                        <i class={props.project.techIcons[0]}></i>
                    </div>
                    <div>
                        <div class="title">{props.project.technologies[1]}</div>
                        <i class={props.project.techIcons[1]}></i>
                    </div>
                    <div>
                        <div class="title">{props.project.technologies[2]}</div>
                        <i class={props.project.techIcons[2]}></i>
                    </div>

                </div>
            </div>
            <img alt="" src={props.project.image}/>
        </div>
    );
};

export default ProjectCard;