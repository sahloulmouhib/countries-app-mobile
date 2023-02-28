import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const WikiPageSkeleton = () => {
  return (
    <SkeletonPlaceholder borderRadius={4}>
      <SkeletonPlaceholder.Item marginTop={70}>
        <SkeletonPlaceholder.Item width={'30%'} height={20} marginBottom={25} />
        {Array(40)
          .fill(0)
          .map((_, index) => (
            <SkeletonPlaceholder.Item
              key={index}
              marginTop={12}
              width={'100%'}
              height={20}
            />
          ))}
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default WikiPageSkeleton;
