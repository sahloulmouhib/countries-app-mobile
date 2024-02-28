import React from 'react';
import { Modal, TouchableOpacity, View } from 'react-native';

import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { WIKI_BASE_URL } from '_features/country/utils/constants';

import CustomTitle, {
  CustomTitleType,
} from '_components/CustomTitle/CustomTitle';
import CustomWebView from '_components/CustomWebView/CustomWebView';

import styles from './CountryWikiPage.styles';

type Props = {
  isVisible: boolean;
  onClose: () => void;
  countryName: string;
  flagEmoji: string;
};

const CountryWikiPage = ({
  isVisible,
  onClose,
  countryName,
  flagEmoji,
}: Props) => {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={isVisible}
      presentationStyle="pageSheet">
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <CustomTitle
            fontSize={24}
            type={CustomTitleType.H2}
            title={`${countryName}  ${flagEmoji}`}
            flex={1}
          />
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <FontAwesomeIcon icon={faX} size={18} />
          </TouchableOpacity>
        </View>

        <CustomWebView uri={`${WIKI_BASE_URL}${countryName}`} />
      </View>
    </Modal>
  );
};

export default CountryWikiPage;
