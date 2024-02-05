import {
  View,
  Text,
  ImageSourcePropType,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {PropsWithChildren, useState} from 'react';
import diceOne from '../assets/diceImages/One.png';
import diceTwo from '../assets/diceImages/Two.png';
import diceThree from '../assets/diceImages/Three.png';
import diceFour from '../assets/diceImages/Four.png';
import diceFive from '../assets/diceImages/Five.png';
import diceSix from '../assets/diceImages/Six.png';
import {trigger} from 'react-native-haptic-feedback';

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

type DiceProps = PropsWithChildren<{
  imgUrl: ImageSourcePropType;
}>;

const DiceImg = ({imgUrl}: DiceProps) => {
  return (
    <View>
      <Image style={styles.diceImage} source={imgUrl} />
    </View>
  );
};

const App = () => {
  const [diceImg, setDiceImg] = useState<ImageSourcePropType>(diceOne);

  const rollTheDice = () => {
    const randonNo = Math.floor(Math.random() * 6) + 1;

    switch (randonNo) {
      case 1:
        setDiceImg(diceOne);
        break;
      case 2:
        setDiceImg(diceTwo);
        break;
      case 3:
        setDiceImg(diceThree);
        break;
      case 4:
        setDiceImg(diceFour);
        break;
      case 5:
        setDiceImg(diceFive);
        break;
      case 6:
        setDiceImg(diceSix);
        break;

      default:
        setDiceImg(diceOne);

        break;
    }
    trigger('impactHeavy', options);
  };

  return (
    <View style={styles.container}>
      <DiceImg imgUrl={diceImg} />
      <TouchableOpacity style={styles.diceContainer} onPress={rollTheDice}>
        <Text style={styles.rollDiceBtnText}>Roll The Dice</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default App;
