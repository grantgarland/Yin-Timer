import React, {Component} from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Dimensions
} from 'react-native'
import { Rating } from 'react-native-elements';

import Swiper from '../Components/CardSwiper';
import poses from '../Fixtures/poses';

import Styles from '../Themes/masterStyles';
import Fonts from '../Themes/fonts';
import Colors from '../Themes/colors';

export default class PoseViewer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cards: poses
    }
  }

  componentWillMount() {
    this.value = 0;
    this.animatedValue = new Animated.Value(this.value);
    this.animatedValue.addListener(({ value }) => {
      this.value = value;
    })

    this.frontInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg'],
    })

    this.backInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg']
    })
  }

  flipCard = () => {
    if (this.value >= 90) {
      Animated.spring(this.animatedValue,{
        toValue: 0,
        friction: 10,
        tension: 8
      }).start();
    } else {
      Animated.spring(this.animatedValue,{
        toValue: 180,
        friction: 10,
        tension: 8
      }).start();
    }

  }

  renderCard = card => {
    const frontFlipStyle = {
      transform: [
        { rotateY: this.frontInterpolate}
      ]
    }
    const backFlipStyle = {
      transform: [
        { rotateY: this.backInterpolate }
      ]
    }

    return (
      <View style={styles.cardContainer}>
        <Animated.View style={[styles.card, frontFlipStyle]}>
          <Image style={styles.image} source={card.image} />
          <View style={styles.textContainer}>
            <Text style={[Fonts.style.h3, {textAlign: 'center'}]}>{card.name}</Text>
            <Text style={[Fonts.style.description, {textAlign: 'center', paddingBottom: 10}]}>Tap for details</Text>
          </View>
        </Animated.View>
        <Animated.View style={[styles.card, backFlipStyle]}>
          <View style={styles.cardHeader}>
            <Text style={[Fonts.style.h3, {textAlign: 'center'}]}>
              {card.name}
            </Text>
          </View>
          <View style={styles.cardDetail}>
            <Text style={[Fonts.style.h5, {textAlign: 'center'}]}>Difficulty</Text>
            <Rating
              type="star"
              ratingCount={3}
              startingValue={3}
              readonly
              imageSize={25}
              ratingColor={Colors.gong}
              style={{ paddingVertical: 10, alignItems: 'center' }}
            />
            <Text style={[Fonts.style.h5, {textAlign: 'center'}]}>Duration</Text>
            <Rating
              type="bell"
              ratingCount={5}
              startingValue={2}
              readonly
              imageSize={25}
              ratingColor={Colors.gong}
              style={{ paddingVertical: 10 }}
            />
          </View>
          <View style={styles.cardTargets}>
            
          </View>
        </Animated.View>
      </View>
    )
  };

  render () {
    return (
      <View style={styles.container}>
        <Swiper
          cards={this.state.cards}
          renderCard={this.renderCard}
          onTapCard={this.flipCard}
        >
        </Swiper>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.green
  },
  textContainer: {
    flex: .4,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  cardContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center'
  },
  cardHeader: {
    flex: .2,
    justifyContent: 'center'
  },
  cardDetail: {
    flex: .4,
    flexDirection: 'column',
    // justifyContent: 'space-around',
  },
  cardTargets: {
    flex: .4,
    justifyContent: 'center'
  },
  card: {
    flex: 1,
    position: 'absolute',
    alignItems: "center", 
    borderRadius: 4,
    width: Dimensions.get('window').width - 50,
    height: Dimensions.get('window').height - 200,
    backgroundColor: "white",
    backfaceVisibility: 'hidden',
    padding: 5
  },
  image: {
    flex: .6,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
})