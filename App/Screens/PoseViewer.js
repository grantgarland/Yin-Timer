import React, {Component} from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Dimensions
} from 'react-native'
import { Card, Rating, List, ListItem } from 'react-native-elements';

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

    capitalize = (word) => {
      word = word.split(" ");

      for (let i = 0, x = word.length; i < x; i++) {
          word[i] = word[i][0].toUpperCase() + word[i].substr(1);
      }

      return word.join(" ");
    }

    return (
      <Animated.View style={styles.cardContainer}>
        <Card
          featuredTitle={card.name}
          featuredTitleStyle={{fontFamily: Fonts.style.bold}}
          image={card.image}
          imageStyle={styles.image}
          style={styles.card}
          fontFamily={Fonts.type.bold}
          >
          <Text style={{marginBottom: 10, textAlign: 'center'}}>
            A resting pose that opens up the chest and shoulders while elongating the calves and hamstrings.
          </Text>
          <Text style={[Fonts.style.h5, {textAlign: 'center'}]}>Difficulty</Text>
        </Card>
      </Animated.View>
    )
  };

  render () {
    return (
      <Animated.View style={styles.container}>
        <Swiper
          cards={this.state.cards}
          renderCard={this.renderCard}
        >
        </Swiper>
      </Animated.View>
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
  cardDetail: {
    flex: .4,
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginTop: 10
  },
  cardTargets: {
    flexDirection: 'column',
    flex: .6,
    justifyContent: 'center',
    width: Dimensions.get('window').width - 200
  },
  card: {
    flex: 1,
    alignItems: "center", 
    borderRadius: 4,
    width: Dimensions.get('window').width - 50,
    height: Dimensions.get('window').height - 200,
    backgroundColor: "white",
    padding: 5
  },
  image: {
    width: '100%',
    height: "60%",
    alignSelf: 'center'
  },
})