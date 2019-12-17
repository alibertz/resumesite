import React from 'react';

const ListItem = (props) => {
    return (
        <ul>
            {props.props.map((e) => (
                <li>{e}</li>
            ))}
        </ul>
    );
};

export default ListItem;