import React, { useState, useRef, useEffect } from "react";
import iconPrev from "../images/icon-previous.svg";
import iconNext from "../images/icon-next.svg";
import "../css/heroImgs.css";

const HeroImgs = ({ images }) => {
  const [imgPreviewList, setImgPreviewList] = useState(images);

  let [showNextElement, setShowNextElement] = useState(0);

  useEffect(() => {
    let listElements = Array.from(fieldRef.current.children);
    listElements[showNextElement].scrollIntoView();
  }, [showNextElement]);

  const fieldRef = useRef();
  //Take useRef or rather definedName = useRef() as document.querySelector('..')
  const nextHandler = () => {
    let listElements = Array.from(fieldRef.current.children);
    if (showNextElement === listElements.length - 1) {
      setShowNextElement(0);
    } else {
      setShowNextElement(showNextElement + 1);
    }
  };

  const prevHandler = () => {
    let listElements = Array.from(fieldRef.current.children);
    if (showNextElement === 0) {
      setShowNextElement(listElements.length - 1);
    } else {
      setShowNextElement(showNextElement - 1);
    }
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
