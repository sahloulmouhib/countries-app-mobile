import React from 'react';
import { View } from 'react-native';

import { strings } from '_i18n';

import CustomDivider from '../CustomDivider/CustomDivider';
import CustomTitle, { CustomTitleType } from '../CustomTitle/CustomTitle';

type Props = {
  title?: string;
  description?: string;
};

const CustomEmptyList = ({
  title = strings('global.empty_list.title'),
  description = strings('global.empty_list.description'),
}: Props) => {
  return (
    <View>
      <CustomTitle type={CustomTitleType.H2} title={title} textAlign="center" />
      <CustomDivider height={10} />
      <CustomTitle
        type={CustomTitleType.H4}
        title={description}
        textAlign="center"
      />
    </View>
  );
};

export default CustomEmptyList;
