import React, {useEffect, useState} from 'react'
import CardList from './components/CardList'

const App = () => {
  const [data, setData] = useState([])
  const [isDragging, setIsDragging] = useState(false)

  const handleDragStart = (e, data) => {
    setIsDragging(true);
  }

  const handleDragEnd = () => {
    setIsDragging(false);
  }

  useEffect(() => {
    fetch('/data.json')
        .then((response) => response.json())
        .then((data) => setData(data));
  }, [])

  return (
      <div className="container">
        <CardList data={data} onDragStart={handleDragStart} onDragEnd={handleDragEnd} />
      </div>
  )
}

export default App