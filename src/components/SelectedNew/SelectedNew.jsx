import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { popError } from '../../helpers/errorPop/errorPop';
import { get } from '../../services/apiService';
/* import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer"; */
import { Loader } from '../loader/Loader';
import NewStyles from './SelectedNew.module.css';
import Header from '../Header/Header';
const newsa = {
  title: 'Hola a todos los argentinos',
  image: 'https://www.1zoom.me/prev/56/55228.jpg',
  category: 'Telemarket',
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa magnam quis omnis reiciendis perferendis, amet quaerat soluta beatae aspernatur provident doloremque, necessitatibus voluptatem fugit, aliquam nesciunt repellendus consequuntur. Quas ea rerum impedit reprehenderit eveniet laborum molestias! Quis nihil voluptate minus facilis vitae explicabo placeat quas et eaque pariatur laboriosam, distinctio officiis, quam nostrum commodi fugiat, dolor inventore aliquam quaerat maxime iure corrupti ut odit obcaecati. Porro quaerat veritatis eveniet, recusandae minima harum itaque adipisci dolore iusto laborum aspernatur suscipit, sint magnam illo. Obcaecati quasi officiis quod, natus nam ratione laborum eligendi aperiam reiciendis tempore nihil soluta odit, dolore nulla explicabo suscipit, saepe maxime rerum quia veritatis temporibus in. Quia dignissimos odit eveniet! Nam vero corrupti officia quam deserunt facilis. Sed similique nam tenetur qui reprehenderit aperiam repellendus officia error, ducimus blanditiis architecto minima cupiditate quas sequi laboriosam, provident tempore in sunt. Cum nobis modi facilis repudiandae. Fugiat consequuntur mollitia eius!',
};

const menu = [
  {
    link: '/home',
    name: 'Home',
  },
  {
    link: '/home',
    name: 'Home',
  },
  {
    link: '/home',
    name: 'Home',
  },
  {
    link: '/home',
    name: 'Home',
  },
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
          'https://iconarchive.com/download/i75481/cornmanthe3rd/squareplex/Internet-chrome.ico'
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
