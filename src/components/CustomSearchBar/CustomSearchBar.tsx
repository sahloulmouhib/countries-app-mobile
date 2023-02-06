import React from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';

import {
  faMagnifyingGlass,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { colors } from '_utils/theme/colors';

import styles from './CustomSearchBar.styles';

type Props = {
  text: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  defaultValue?: string;
};

const CustomSearchBar = ({
  defaultValue,
  onChangeText,
  placeholder,
  text,
}: Props) => {
  const clearText = () => {
    onChangeText('');
  };
  return (
    <View style={styles.container}>
      <FontAwesomeIcon
        secondaryColor={colors.BLACK}
        size={20}
        icon={faMagnifyingGlass}
      />
      <TextInput
        style={styles.textInput}
        value={text}
        onChangeText={onChangeText}
        placeholder={placeholder}
        defaultValue={defaultValue}
        cursorColor={colors.PRIMARY}
      />
      {text.length > 0 && (
        <TouchableOpacity onPress={clearText}>
          <FontAwesomeIcon
            color={colors.GREY_DARK}
            secondaryColor={colors.BLACK}
            size={20}
            icon={faCircleXmark}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomSearchBar;
