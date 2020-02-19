import { useState } from 'react';

const useModalState = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return {
    isModalVisible,
    setIsModalVisible,
  };
};

export default useModalState;
