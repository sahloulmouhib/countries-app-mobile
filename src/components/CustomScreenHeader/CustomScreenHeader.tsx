import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import CustomTitle, {
  CustomTitleType,
} from '_components/CustomTitle/CustomTitle';

import styles from './CustomScreenHeader.styles';

type Props = {
  title: string;
  onBackPress?: () => void;
};

const CustomScreenHeader = ({ title, onBackPress }: Props) => {
  return (
    <View style={styles.container}>
      {onBackPress && (
        <TouchableOpacity onPress={onBackPress}>
          <FontAwesomeIcon icon={faArrowLeft} size={20} />
        </TouchableOpacity>
      )}
      <View style={styles.titleContainer}>
        <CustomTitle
          textAlign="center"
          title={title}
          type={CustomTitleType.H2}
        />
      </View>
      <TouchableOpacity style={styles.emptyView}>
        <FontAwesomeIcon icon={faArrowLeft} size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default CustomScreenHeader;
