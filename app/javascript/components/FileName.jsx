import React from 'react';

export default class FileName extends React.Component {
    render = () => {
        return (
            <li> {this.props.file} </li>
        );
    };
}