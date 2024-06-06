import React from 'react'
import Card from './Card'

const CardList = ({ data, onDragStart, onDragEnd }) => {
    return (
        <div className="row">
            {data.slice(0, 3).map((item) => (
                <div key={item.type} className="col-md-4">
                    <Card data={item} onDragStart={onDragStart} onDragEnd={onDragEnd} />
                </div>
            ))}
            {data.slice(3).map((item) => (
                <div key={item.type} className="col-md-4">
                    <Card data={item} onDragStart={onDragStart} onDragEnd={onDragEnd} />
                </div>
            ))}
        </div>
    )
}

export default CardList