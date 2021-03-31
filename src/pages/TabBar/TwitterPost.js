import React, { Component } from 'react'
import { Image, RefreshControl, ScrollView } from 'react-native'
import Util from '../../utils'

class TwitterPost extends Component {
  constructor() {
    super()
    this.state = {
      isRefreshing: false,
    }
  }

  onRefresh() {
    this.setState({
      isRefreshing: true,
    })
    setTimeout(() => {
      this.setState({
        isRefreshing: false,
      })
    }, 1000)
  }

  render() {
    return (
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={this.state.isRefreshing} onRefresh={() => this.onRefresh()} tintColor="#ddd" />
        }
      >
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2020/11/24/18/58/mosque-5773586_960_720.jpg',
          }}
          style={{
            width: Util.size.width,
            height: Util.size.height - 110,
          }}
        />
      </ScrollView>
    )
  }
}

export default TwitterPost
