import React from 'react';

import CustomTitle, { CustomTitleType } from '../CustomTitle/CustomTitle';

type Props = {
  message: string;
};

const CustomEmptyList = ({ message }: Props) => {
  return <CustomTitle type={CustomTitleType.H4} title={message} />;
};

export default CustomEmptyList;
