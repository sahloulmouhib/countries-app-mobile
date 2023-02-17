import React from 'react';
import { SafeAreaView, Button } from 'react-native';
import AnimatedNumbers from 'react-native-animated-numbers';

const App = () => {
  const [animateToNumber, setAnimateToNumber] = React.useState(1);

  const increase = () => {
    setAnimateToNumber(593232);
  };

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <AnimatedNumbers
        includeComma
        animateToNumber={animateToNumber}
        fontStyle={{ fontSize: 50, fontWeight: 'bold' }}
      />
      <Button title="increase" onPress={increase} />
    </SafeAreaView>
  );
};
export default App;
