import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const CountryCardSkeleton = () => {
  return (
    <SkeletonPlaceholder borderRadius={4}>
      <SkeletonPlaceholder.Item
        margin={16}
        flexDirection="row"
        alignItems="center">
        <SkeletonPlaceholder.Item width={50} height={50} borderRadius={25} />
        <SkeletonPlaceholder.Item marginLeft={20} flex={1} width={'100%'}>
          <SkeletonPlaceholder.Item width={'50%'} height={13} />
          <SkeletonPlaceholder.Item marginTop={6} width={'30%'} height={8} />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default CountryCardSkeleton;
