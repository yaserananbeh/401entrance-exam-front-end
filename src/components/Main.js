import React, { Component } from 'react'
import axios from 'axios'
import Spinner from 'react-bootstrap/Spinner'
import CardGroup from 'react-bootstrap/CardGroup'
import MainCard from './MainCard'


export class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apiData: []
    }
  }
  componentDidMount = () => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/apidata`).then(response => {
      this.setState({
        apiData: response.data
      })
    }).catch(error => alert(error.message))
  }
  handleAddToFavorite=(item)=>{
    // console.log(item)
    const reqBody={
      id:item.id,
      name:item.name,
      img:item.img
    }
    axios.post(`${process.env.REACT_APP_SERVER_URL}/favorite`,reqBody).then(response=>{
      // console.log(response.data)
      if(response.data==='already exist'){
        alert('the drink already in your favorite list')
      }
      else {
        alert('added successfully')
      }
    }).catch(error=>alert(error.message))
  }
  render() {
    return (
      <div>
        {
          this.state.apiData.length > 0 ?
            <CardGroup>
              {
                this.state.apiData.map((value,idx)=>{
                  return (
                    <MainCard
                    key={idx}
                    id={value.idDrink}
                    name={value.strDrink}
                    img={value.strDrinkThumb}
                    handleAddToFavorite={this.handleAddToFavorite}
                    />
                  )
                })
              }

            </CardGroup>
            :
            <Spinner animation="border" />
        }
      </div>
    )
  }
}

export default Main
