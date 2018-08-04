import 'babel-polyfill'
import React, { Component } from 'react'
import axios from 'axios'
import { hot } from 'react-hot-loader'
import RestaurantPreview from './RestaurantPreview'
import DetailedView from './DetailedView';
import NavBar from './NavBar'
import Footer from './Footer'

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
    this.setState({ detailedViewData: { isOpen: true, data }})
    // disable scrollable view when on mobiel
    const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    if(width <= 600) document.body.style.overflow = 'hidden'
  }

  onBack = () => {
    this.setState({ detailedViewData: { isOpen: false, data: {} }})
    // enable scrollable view
    document.body.style.overflow = 'scroll'
  }

  render({ restaurants, detailedViewData } = this.state) {
    return(
      <div>
        <NavBar onBack={this.onBack} hasBack={detailedViewData.isOpen} />

        <div className='list-container flex-container'>
          <DetailedView restaurant={detailedViewData.data} isOpen={detailedViewData.isOpen} />
          <div className='flex-row'>
            {restaurants.map((restaurant, index) => (
              <div className='flex-column' key={`column-${index}`}>
                <RestaurantPreview 
                  key={`restaurant-${index}`} 
                  restaurant={restaurant} 
                  onSelect={this.onSelect} />
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}

export default hot(module)(App)
