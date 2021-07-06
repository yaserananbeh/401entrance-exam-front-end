import React, { Component } from 'react'
import axios from 'axios'
import CardGroup from 'react-bootstrap/CardGroup'
import FavoriteCard from './FavoriteCard'
import UpdateForm from './UpdateForm'


export class Favorite extends Component {
  constructor(props) {
    super(props)
    this.state = {
      favoriteData: [],
      choosenToUpdate: {},
      showForm: false
    }
  }
  componentDidMount = () => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/favorite`).then(response => {
      this.setState({
        favoriteData: response.data
      })
    }).catch(error => alert(error.message))
  }
  removeFromFavorite = async (item) => {
    // console.log(item.id)
    await axios.delete(`${process.env.REACT_APP_SERVER_URL}/favorite/${item.id}`).then(response => {
    }).catch(error => error.message)
    axios.get(`${process.env.REACT_APP_SERVER_URL}/favorite`).then(response => {
      this.setState({
        favoriteData: response.data
      })
    }).catch(error => alert(error.message))
  }
  showUpdateForm = (item) => {
    // console.log(item)
    this.setState({
      choosenToUpdate: item,
      showForm: !this.state.showForm
    })
  }
  updateTheApi = async (e) => {
    e.preventDefault();
    const id = this.state.choosenToUpdate.id
    const reqBody = {
      name: e.target.name.value,
      img: e.target.img.value
    }
    // console.log(id, reqBody)
    await axios.put(`${process.env.REACT_APP_SERVER_URL}/favorite/${id}`, reqBody).then(response => { 
      // console.log(response.data)
      this.setState({
        showForm:false
      })
     }).catch(error => alert(error.message))
    axios.get(`${process.env.REACT_APP_SERVER_URL}/favorite`).then(response => {
      this.setState({
        favoriteData: response.data
      })
    }).catch(error => alert(error.message))
  }
  render() {
    return (
      <div>
        {
          this.state.showForm &&
          <UpdateForm
            item={this.state.choosenToUpdate}
            updateTheApi={this.updateTheApi}
          />
        }
        {
          this.state.favoriteData &&
          <CardGroup>
            {
              this.state.favoriteData.map((value, idx) => {
                return (
                  <FavoriteCard
                    key={idx}
                    id={value.id}
                    name={value.name}
                    img={value.img}
                    removeFromFavorite={this.removeFromFavorite}
                    showUpdateForm={this.showUpdateForm}
                  />
                )
              })
            }

          </CardGroup>

        }
      </div>
    )
  }
}

export default Favorite
