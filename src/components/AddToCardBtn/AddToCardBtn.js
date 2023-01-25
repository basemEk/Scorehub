import React, { useState } from 'react';
import './AddToCardBtn.css'

function AddToCardBtn() {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div onClick={() => setIsLiked(!isLiked)}>
      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className={`heart-svg ${isLiked ? 'liked': ''}`}>
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
    </div>
  );
}

export default AddToCardBtn;
