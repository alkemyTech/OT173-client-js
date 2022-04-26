import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { popError } from '../../helpers/errorPop/errorPop';
import { get } from '../../services/apiService';
import { Loader } from '../loader/Loader';
import NewStyles from './SelectedNew.module.css';
import Header from '../Header/Header';


const menu = [
  {
    link:"/",
    name:"Inicio"
  },
  {
    link: "/about",
    name:"Nosotros"
  },
  {
    link: '/activities',
    name: 'Actividades',
  },
  {
    link: '/news',
    name: 'News',
  },
  {
    link: '/testimonials',
    name: 'Testimonios',
  },
  {
    link: '/contact',
    name: 'Contacto',
  },
  {
    link:"/donate",
    name:"Contribuye"
  }
];

const SelectedNew = () => {
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [selectedNew, setSelectedNew] = useState(null);
  useEffect(() => {
    const fetchNew = async () => {
      const {data,ok} = await get(`http://localhost:4000/news/${id}`);
      if(ok){
        setSelectedNew(data)
      }else{
        popError(setError)
      }
    };
    fetchNew()
  }, [id]);
  return (
    <>
      <Header
        menu={menu}
        logo={
          '/images/assets/LOGO1.png'
        }
      />
      <div className={NewStyles.new_wrapper}>
        {error && (
          <div className={NewStyles.new_error}>
            New not found or Server Error
          </div>
        )}
        {selectedNew ? (
          <div className={NewStyles.new}>
            <h1 className={NewStyles.new_title}>{selectedNew.title}</h1>
            <div className={NewStyles.new_category}>{selectedNew.category}</div>
            <div className={NewStyles.new_image}>
              <img src={selectedNew.image} alt="" />
            </div>
            <p className={NewStyles.new_content}>{selectedNew.content}</p>
          </div>
        ) : (
          !error && <Loader></Loader>
        )}
      </div>
    </>
  );
};

export default SelectedNew;
