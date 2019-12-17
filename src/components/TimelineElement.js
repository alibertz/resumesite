import React from 'react';
import 'C:\\Users\\Kevin\\Desktop\\resumesite\\src\\App.css';

const TimelineElement = (props) => {
    return (
        <li className={((props.id+1)%2===0) ? 'timeline-inverted' :null}>
            <div className={props.badge.color}><i className={props.badge.icon}></i></div>
            <div className="timeline-panel">
                <header className="timeline-heading">
                    <h4 className="timeline-title">{props.title}</h4>
                    <h5 className="text-muted">{props.company}</h5>
                    <h6 className="text-muted">{props.timespan}</h6>
                    <h6 className="text-muted pb-4" style={{ fontSize: "0.9rem" }}><a href={props.website} target="_blank" style={{ color: 'rgb(74, 106, 148)' }}><strong>{props.website}</strong></a></h6>
                </header>
                <div className="timeline-body">
                    <ul className="exp-list">
                        {props.duties.map((duty, index) => (
                            <li key={index}>{duty}</li>
                        ))}
                    </ul>
                </div>
            </div>
    </li>
    );
};

export default TimelineElement;