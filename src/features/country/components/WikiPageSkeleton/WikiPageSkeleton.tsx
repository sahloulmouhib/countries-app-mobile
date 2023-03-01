import React from 'react';
import Animated, { FadeOut } from 'react-native-reanimated';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const WikiPageSkeleton = () => {
  return (
    <Animated.View exiting={FadeOut}>
      <SkeletonPlaceholder borderRadius={4}>
        <SkeletonPlaceholder.Item marginTop={55}>
          <SkeletonPlaceholder.Item
            width={'50%'}
            height={45}
            marginBottom={25}
          />
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
    </Animated.View>
  );
};

export default WikiPageSkeleton;
