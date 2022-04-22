import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { popError } from "../../../helpers/errorPop/errorPop";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
const SelectedNew = () => {
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [selectedNew, setSelectedNew] = useState(null);
  useEffect(() => {
    const fetchNew = async () => {
      try {
        const newResponse = await axios.get("http://localhost:4000/news");
        setSelectedNew(newResponse.data);
      } catch (error) {
        popError(setError);
      }
    };
    fetchNew();
  }, []);
  return (
    <>
      <NavBar></NavBar>
      <div>
        {error && <div>Noticia no encontrada o Error en el Servidor</div>}
        {selectedNew && (
          <div>
            <h2>{selectedNew.title}</h2>
            <div>
              <img src={selectedNew.image} alt="" />
            </div>
            <div>{selectedNew.category}</div>
            <p>{selectedNew.content}</p>
          </div>
        )}
      </div>
      <Footer></Footer>
    </>
  );
};

export default SelectedNew;
