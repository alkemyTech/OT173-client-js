import React, { useEffect, useRef, useState } from 'react';

import { SUPPORTED_IMAGE_FORMATS } from './EditHomeFormValidation';
import styles from './PreviewImageSlide.module.css';

import IMAGE_PLACEHOLDER from './slide-placeholder.png';

const PreviewImageSlide = ({
  name,
  type,
  value,
  setFieldValue,
  setFieldTouched,
}) => {
  const [previewImageURL, setPreviewImageURL] = useState(IMAGE_PLACEHOLDER);
  const inputRef = useRef(null);

  const handleImageClick = () => {
    if (!inputRef) return;
    inputRef.current.click();
  };

  const handleImageChange = event => {
    const { files } = event.target;
    const file = files[0];
    setFieldValue(name, file);
    setFieldTouched(name, true);
  };

  useEffect(() => {
    if (!value) return setPreviewImageURL(IMAGE_PLACEHOLDER);

    const fileReader = new FileReader();
    fileReader.onload = event => {
      const { result } = event.target;
      if (result) {
        setPreviewImageURL(result);
      }
    };
    fileReader.readAsDataURL(value);
  }, [value]);

  return (
    <>
      <img
        onClick={handleImageClick}
        src={previewImageURL}
        alt="Imágen de la slide"
        className={styles.slide_img}
      />
      <input
        type={type}
        name={name}
        ref={inputRef}
        accept={SUPPORTED_IMAGE_FORMATS.join(', ')}
        onChange={handleImageChange}
        className={styles.invisible}
      />
    </>
  );
};

export default PreviewImageSlide;
