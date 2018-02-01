import React, {Component} from 'react'
import Swiper from 'react-native-deck-swiper'
import {Button, StyleSheet, Text, View, Dimensions} from 'react-native'

import Colors from '../Themes/colors';

export default class CardSwiper extends Component {
  constructor (props) {
    super(props)
    this.state = {
      swipeDirection: '',
      isSwipingBack: false,
      cardIndex: 0
    }
  }

  _calculateCardSize() {
    let {width, height} = Dimensions.get('window');
    return (height / 50);
  }

  render () {
    let margin = this._calculateCardSize();

    return (
      <Swiper
        ref={swiper => {
          this.swiper = swiper
        }}
        infinite={true}
        verticalSwipe={false}
        showSecondCard={true}
        goBackToPreviousCardOnSwipeLeft={false}
        backgroundColor={Colors.green}
        onTapCard={this.props.onTapCard}
        cards={this.props.cards}
        cardIndex={this.state.cardIndex}
        cardStyle={this.props.cardStyle}
        cardVerticalMargin={margin}
        cardHorizontalMargin={margin}
        renderCard={this.props.renderCard}
      >

      </Swiper>
    )
  }
}

