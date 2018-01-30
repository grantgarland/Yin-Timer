import React, {Component} from 'react'
import {Button, StyleSheet, Text, View, Image} from 'react-native'

import Styles from '../Themes/masterStyles';
import Fonts from '../Themes/fonts';
import Colors from '../Themes/colors';
import Swiper from '../Components/CardSwiper';

import poses from '../Fixtures/poses';

export default class PoseViewer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cards: poses
    }
  }

  renderCard = card => {
    return (
      <View style={styles.card}>
        <Image style={styles.image} source={card.image} />
        <Text style={[Fonts.style.h3, {textAlign: 'center'}]}>{card.name}</Text>
      </View>
    )
  };

  render () {
    return (
      <View style={{flex: 1, backgroundColor: Colors.green}}>
        <Swiper
          cards={this.state.cards}
          renderCard={this.renderCard}
        >
        </Swiper>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    flex: .75,
    borderRadius: 4,
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  image: {
    flex: .75,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent'
  }
})