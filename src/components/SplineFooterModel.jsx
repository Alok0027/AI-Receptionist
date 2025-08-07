// src/components/SplineFooterModel.jsx
import React, { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';

const SplineFooterModel = () => {
  return (
    <div className="w-full h-full" style={{ position: 'relative' }}>
      <style>{`
        a[href*="spline.design"] { display: none !important; }
        a[href*="spline"] { display: none !important; }
        [data-spline-logo] { display: none !important; }
        .spline-watermark { display: none !important; }
        canvas + a { display: none !important; }
        div[style*="position: absolute"][style*="bottom"][style*="right"] a { display: none !important; }
      `}</style>
      <Spline 
        scene="https://prod.spline.design/Q6wySV4BRHRS-oFI/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default SplineFooterModel;