import React from 'react'
import { useState } from 'react'

const Card = ({ data, onDragStart, onDragEnd }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [isOverlayOpen, setIsOverlayOpen] = useState(false)

    const handleDragStart = (e) => {
        onDragStart(e, data)
    }

    const handleDragEnd = () => {
        onDragEnd()
    }

    const handleClick = () => {
        setIsOverlayOpen(true)
    }

    const handleOverlayClose = () => {
        setIsOverlayOpen(false)
    }
    return (
        <div
            className="card"
            draggable
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
        >
            <img
                src={''} alt={data.title}
        onLoad={() => setIsLoading(false)}
      />
      {isLoading && (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      <h5 className="card-title">{data.title}</h5>
      <p className="card-text">{data.position}</p>
      <button onClick={handleClick} className="btn btn-primary">
        View Image
      </button>
      {isOverlayOpen && (
        <div className="overlay">
          <img
            src={''}
            alt={data.title}
            />
            <button onClick={handleOverlayClose} className="btn btn-secondary">
                Close
            </button>
        </div>
    )}
</div>
)
}

export default Card