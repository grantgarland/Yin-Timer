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
    return (height / 20);
  }

  // renderCard = card => {
  //   return (
  //     <View style={styles.card}>
  //       <Text style={styles.text}>{card}</Text>
  //     </View>
  //   )
  // };

  // onSwipedAllCards = () => {
  //   this.setState({
  //     swipedAllCards: true
  //   })
  // };

  swipeBack = () => {
    if (!this.state.isSwipingBack) {
      this.setIsSwipingBack(true, () => {
        this.swiper.swipeBack(() => {
          this.setIsSwipingBack(false)
        })
      })
    }
  };

  setIsSwipingBack = (isSwipingBack, cb) => {
    this.setState(
      {
        isSwipingBack: isSwipingBack
      },
      cb
    )
  };

  swipeLeft = () => {
    this.swiper.swipeLeft()
  };

  render () {
    let margin = this._calculateCardSize();

    return (
      <Swiper
        ref={swiper => {
          this.swiper = swiper
        }}
        infinite={true}
        verticalSwipe={false}
        horizontalSwipe={true}
        showSecondCard={true}
        backgroundColor={Colors.green}
        onSwiped={this.onSwiped}
        onTapCard={this.props.onTapCard}
        cards={this.props.cards}
        cardIndex={this.state.cardIndex}
        cardStyle={this.props.cardStyle}
        cardVerticalMargin={margin}
        cardHorizontalMargin={margin}
        renderCard={this.props.renderCard}
        // onSwipedAll={this.onSwipedAllCards}
      >

      </Swiper>
    )
  }
}

