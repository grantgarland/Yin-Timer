import React, {Component} from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Dimensions
} from 'react-native'
import { Card } from 'react-native-elements';

import Swiper from '../Components/CardSwiper';
import poses from '../Fixtures/poses';

import Styles from '../Themes/masterStyles';
import Fonts from '../Themes/fonts';
import Colors from '../Themes/colors';

export default class PoseViewerScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cards: poses
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
          featuredTitleStyle={Fonts.style.emphasis}
          image={card.image}
          imageStyle={styles.image}
          imageWrapperStyle={{height: Dimensions.get('window').height / 1.6}}
          fontFamily={Fonts.type.bold}
          containerStyle={{borderRadius: 10, flex: .75, overflow: 'hidden'}}
        >
          <View style={styles.textContainer} >
            <Text style={styles.headerText}>
              Difficulty
            </Text>
            <Text style={styles.headerText}>Duration</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={Fonts.style.h5}>{card.difficulty}/3</Text>
            <Text style={Fonts.style.h5}>{card.duration} min</Text>
          </View>

          <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around'}} >
          <Text style={[styles.headerText, {paddingBottom: 10}]}>Target Areas</Text>
            { card.targets.map((target, i) => (
              <Text key={i} style={[Fonts.style.description, {paddingTop: 5}]}>{capitalize(target.area)}</Text>
            ))}
          </View>
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
  cardContainer: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: "50%",
    alignSelf: 'center'
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',

  },
  headerText: {
    ...Fonts.style.emphasis,
    color: Colors.gong,
    paddingTop: 15
  }
})