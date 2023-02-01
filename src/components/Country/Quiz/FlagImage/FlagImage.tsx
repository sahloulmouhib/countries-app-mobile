import React from 'react';
import { StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image2';

type Props = {
  image: string;
};

const FlagImage = ({ image }: Props) => {
  return (
    <View>
      <FastImage
        source={{
          uri: image,
        }}
        style={styles.image}
      />
    </View>
  );
};

export default FlagImage;

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
});
