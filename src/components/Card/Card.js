import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    render() {
        const {name, type} = this.props;
        return (
            <div className="SingleCard">
                <img src={require(`../../assets/img/${name.replace(' ', '-').toLowerCase()}.webp`)} alt={name}/>
                <h3>{name}</h3>
                <h4>{type}</h4>
            </div>
        )
    }
}

export default Card;