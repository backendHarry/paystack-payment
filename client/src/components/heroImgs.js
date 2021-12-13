import React, { useRef } from "react";
import iconPrev from "../images/icon-previous.svg";
import iconNext from "../images/icon-next.svg";
import "../css/heroImgs.css";

const HeroImgs = ({ images }) => {
  const imgPreviewList = images;

  const fieldRef = useRef();
  //Take useRef or rather definedName = useRef() as document.querySelector('..')

  // for images gallery transition and scrollIntoView Effect
  const countRef = useRef(0);

  const nextHandler = () => {
    let listElements = Array.from(fieldRef.current.children);
    if (countRef.current === listElements.length - 1) {
      countRef.current = 0;
    } else {
      countRef.current = countRef.current + 1;
    }
    listElements[countRef.current].scrollIntoView();
  };

  const prevHandler = () => {
    let listElements = Array.from(fieldRef.current.children);
    if (countRef.current === 0) {
      countRef.current = listElements.length - 1;
    } else {
      countRef.current = countRef.current - 1;
    }
    listElements[countRef.current].scrollIntoView();
  };

  return (
    <section className="hero-imgs">
      <div
        className="main-cover"
        style={{
          width: `calc(100% * ${imgPreviewList.length} `,
        }}
        ref={fieldRef}
      >
        {imgPreviewList.length > 0
          ? imgPreviewList.map((img, id) => (
              <div className="section-imgs" key={id}>
                <img src={img} alt="cover-images" />
                <div className="mobile-photo-btn">
                  <div className="btn-left" onClick={prevHandler}>
                    <img src={iconPrev} alt="back-btn" className="cover-icon" />
                  </div>
                  <div className="btn-right" onClick={nextHandler}>
                    <img src={iconNext} alt="next-btn" className="cover-icon" />
                  </div>
                </div>
              </div>
            ))
          : ""}
      </div>
      <div className="sub-photo">
        {imgPreviewList.map((img, id) => (
          <div className="sub-photo-layer" key={id} className="current">
            <img src={img} alt="selected-img" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroImgs;
