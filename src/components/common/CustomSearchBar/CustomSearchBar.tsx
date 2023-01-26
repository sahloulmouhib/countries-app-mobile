import React, { useState } from 'react';
import { KeyboardTypeOptions, TextInput, View } from 'react-native';

import { colors } from '_utils/theme/colors';

import styles from './CustomSearchBar.styles';

type Props = {
  text: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  defaultValue?: string;
  keyboardType?: KeyboardTypeOptions;
};

const CustomSearchBar = ({
  defaultValue,
  keyboardType,
  onChangeText,
  placeholder,
  text,
}: Props) => {
  const [focused, setFocused] = useState(false);
  const toggleFocus = () => {
    setFocused(!focused);
  };
  return (
    <View>
      <TextInput
        style={[
          styles.textInput,
          { borderColor: focused ? colors.BLACK : colors.GREY_MEDIUM },
          { borderWidth: (focused && 2) || 1 },
        ]}
        value={text}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        onFocus={toggleFocus}
        onBlur={toggleFocus}
        placeholder={placeholder}
        defaultValue={defaultValue}
        cursorColor={colors.PRIMARY}
      />
    </View>
  );
};

export default CustomSearchBar;
