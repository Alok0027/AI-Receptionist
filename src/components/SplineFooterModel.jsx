// src/components/SplineFooterModel.jsx
import React, { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';

const SplineFooterModel = () => {
  return (
    <div className="w-full h-full">
      <Spline 
        scene="https://prod.spline.design/Q6wySV4BRHRS-oFI/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default SplineFooterModel;