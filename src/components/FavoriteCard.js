import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export class FavoriteCard extends Component {
  render() {
    return (
      <div style={{ width: '25%' }}>
        <Card>
          <Card.Img variant="top" src={this.props.img} />
          <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
            {/* <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text> */}
            <Button variant="primary" onClick={() => this.props.removeFromFavorite(this.props)}>Remove from favorite</Button>
            <Button variant="primary" onClick={() => this.props.showUpdateForm(this.props)}>Update</Button>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default FavoriteCard
