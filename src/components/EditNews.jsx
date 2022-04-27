import React, { useState, useEffect } from 'react';
import FormikNews from './formNews/FormikNews';

const EditNews = () => {

    const news = {
        title: "Title new",
        category: "2",
        image: "https://image.com",
        content: "<h1>Hello world</h1>"
    }

  return (
    <div>
        < FormikNews news={news} />
    </div>
  )
}

export default EditNews