import React from 'react';
import Card from '../Card/Card';

class CardList extends React.Component {
    render() {
        const{ database, visible } = this.props;
        if (database.length === 0) {
            return <p style={{ color: '#FFF', textAlign: 'center', marginTop: '3rem', fontStyle: 'italic' }}>No results. Please search something else</p>
        } else {
            return (
                <div className="CardList" style={{display: 'flex', flexWrap: 'wrap', marginTop: '20px'}}>
                    {database.slice(0, visible).map((item, index) => (
                        <Card 
                            key={item + index} 
                            id={database[index].id} 
                            name={database[index].name} 
                            type={database[index].type}
                        />
                    ))}
                </div>
            )
        }
    }

}

export default CardList;