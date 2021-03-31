import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

class FacebookTabBar extends React.Component {
  constructor(props) {
    super(props)
    this.icons = []
  }

  componentDidMount() {
    setTimeout(() => this.props.goToPage(0), 0)
    this._listener = this.props.scrollValue.addListener(this.setAnimationValue)
  }

  setAnimationValue = ({ value }) => {
    this.icons.forEach((icon, i) => {
      const progress = value - i >= 0 && value - i <= 1 ? value - i : 1
      icon.setNativeProps({
        style: {
          color: this.iconColor(progress),
        },
      })
    })
  }

  // color between rgb(59,89,152) and rgb(204,204,204)
  iconColor(progress) {
    const red = 49 + (159 - 49) * progress
    const green = 149 + (159 - 149) * progress
    const blue = 215 + (159 - 215) * progress
    return `rgb(${red}, ${green}, ${blue})`
  }

  render() {
    return (
      <View style={[styles.tabs, this.props.style]}>
        {this.props.tabs.map((tab, i) => {
          return (
            <TouchableOpacity key={tab} onPress={() => setTimeout(() => this.props.goToPage(i), 0)} style={styles.tab}>
              <Icon
                name={tab}
                size={24}
                color={this.props.activeTab === i ? 'rgb(49,149,215)' : 'rgb(159,159,159)'}
                ref={(icon) => {
                  this.icons[i] = icon
                }}
              />
            </TouchableOpacity>
          )
        })}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tabs: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.05)',
    backgroundColor: '#3b5998',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
})

export default FacebookTabBar
