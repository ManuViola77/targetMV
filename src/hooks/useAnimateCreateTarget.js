import { useState } from 'react';
import { Animated } from 'react-native';

const useAnimateCreateTarget = height => {
  const [subViewState, setSubViewState] = useState({
    bounceValue: new Animated.Value(height),
    isHidden: true,
  });

  const toggleSubview = isHidden => {
    const toValue = isHidden ? 0 : height;

    //This will animate the transalteY of the subview between 0 & height depending on its current state
    //height is the total height of the subview.
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
