import React from 'react';
import { Modal, TouchableOpacity, View } from 'react-native';

import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { WIKI_BASE_URL } from '_features/country/utils/constants';

import CustomTitle, {
  CustomTitleType,
} from '_components/CustomTitle/CustomTitle';
import CustomWebView from '_components/CustomWebView/CustomWebView';

import WikiPageSkeleton from '../WikiPageSkeleton/WikiPageSkeleton';

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
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <CustomTitle
            fontSize={28}
            type={CustomTitleType.H2}
            title={`${countryName}  ${flagEmoji}`}
          />
          <FontAwesomeIcon icon={faX} size={18} />
        </TouchableOpacity>
        <CustomWebView
          uri={`${WIKI_BASE_URL}${countryName}`}
          WebviewCustomLoader={WikiPageSkeleton}
        />
      </View>
    </Modal>
  );
};

export default CountryWikiPage;
