import React from 'react';
import { useEffect } from 'react';

export const CongratulationsMessage = ({ threshold, onHide }) => {
  return (
      <>
          <h3>Congratulations! You've reached {threshold} clicks</h3>
          <button onClick={onHide}>Hide</button>
      </>
  );
}