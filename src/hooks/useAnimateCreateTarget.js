import { useState } from 'react';
import { Animated } from 'react-native';

const useAnimateCreateTarget = height => {
  const [subViewState, setSubViewState] = useState({
    bounceValue: new Animated.Value(height),
    isHidden: true,
  });

  const toggleSubview = isHidden => {
    var toValue = height;

    if (isHidden) {
      toValue = 0;
    }

    //This will animate the transalteY of the subview between 0 & 400 depending on its current state
    //400 comes from the style, which is the height of the subview.
    Animated.spring(subViewState.bounceValue, {
      toValue: toValue,
      velocity: 3,
      tension: 2,
      friction: 8,
    }).start();

    setSubViewState({
      ...subViewState,
      isHidden: !isHidden,
    });
  };

  return {
    subViewState,
    toggleSubview,
  };
};

export default useAnimateCreateTarget;
