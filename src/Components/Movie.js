import React from 'react'
import { Card,Button } from 'react-bootstrap'

const Movie = ({movies}) => {
  return (
    <div>
      
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movies.posterUrl} />
      <Card.Body>
        <Card.Title> {movies.title} </Card.Title>
        <Card.Text>
          {movies.description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    </div>
  )
}

export default Movie