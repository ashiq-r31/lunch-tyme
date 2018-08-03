import 'babel-polyfill'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { hot } from 'react-hot-loader'
import Listing from './Listing'
import DetailedView from './DetailedView';
import NavBar from './NavBar'
import Footer from './Footer'
import reset from '../static/stylesheets/reset.css'
import main from '../static/stylesheets/main.css'

class App extends Component {
  state = {
    restaurants: [],
    detailedViewData: {
      isOpen: false,
      data: {}
    }
  }

  async componentDidMount() {
    try {
      const response = await axios.get('https://s3.amazonaws.com/br-codingexams/restaurants.json')
      this.setState({ restaurants: response.data.restaurants })
    } catch(e) {
      console.log('something went wrong')
    }
  }

  onSelect = data => {
    console.log(data)
    this.setState({ detailedViewData: { isOpen: true, data }})
    document.body.style.overflow = 'hidden'
  }

  onBack = () => {
    this.setState({ detailedViewData: { isOpen: false, data: {} }})
    document.body.style.overflow = 'scroll'
  }

  render({ restaurants, detailedViewData } = this.state) {
    console.log(this.state)
    return(
      <div>
        <NavBar onBack={this.onBack} />

        <div style={{ paddingTop: 64, paddingBottom: 72, height: '100%', overhidden: detailedViewData.isOpen && 'hidden' }}>
          {detailedViewData.isOpen && <DetailedView restaurant={detailedViewData.data} />}
          <div>
            {restaurants.map((restaurant, index) => (
              <Listing key={`restaurant-${index}`} restaurant={restaurant} onSelect={this.onSelect} />
            ))}
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}

App.propTypes = {
  
}

export default hot(module)(App)
