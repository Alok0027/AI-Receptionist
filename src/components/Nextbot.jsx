import Spline from '@splinetool/react-spline';

export default function App() {
  return (
    <div className="w-full h-full relative">
      <style>{`
        a[href*="spline.design"] { display: none !important; }
        a[href*="spline"] { display: none !important; }
        [data-spline-logo] { display: none !important; }
        .spline-watermark { display: none !important; }
        canvas + a { display: none !important; }
        div[style*="position: absolute"][style*="bottom"][style*="right"] a { display: none !important; }
      `}</style>
      <Spline scene="https://prod.spline.design/ZmcLUpC5i5VVZEEI/scene.splinecode" />
    </div>
  );
}
