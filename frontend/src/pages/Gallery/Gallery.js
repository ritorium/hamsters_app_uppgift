import { useState, useEffect } from "react";

import Header from "../../components/Header";
import GalleryCart from "../../components/GalleryCart";
import Form from "../../components/Form";

import { getData, deleteData } from "../../api";
import Loading from "../../components/Loading";
import { BASE_URL, HAMSTERS_URL } from "../../constants";
import "./Gallery.css";

export default function Gallery() {
  let [open, setOpen] = useState(-1);
  let [loading, setLoading] = useState(true);
  let [hamsters, setHamsters] = useState([]);
  let [openForm, setOpenForm] = useState(false);

  const getHamsters = () => {
    getData(BASE_URL + HAMSTERS_URL)
      .then((data) => {
        setHamsters((hamsters = data));
      })
      .finally(() => {
        setLoading((loading = false));
      });
  };

  useEffect(() => {
    getHamsters();
  }, []);

  const showDataDeletionPopup = (id) => {
    setOpen((open = id));
  };

  const hideDataDeletionPopup = () => {
    setOpen((open = -1));
  };

  const togglePopupForm = (bool) => {
    setOpenForm((openForm = bool));
  };

  const toggleLoading = (bool) => {
    setLoading((loading = bool));
  };

  const deleteHamster = (id) => {
    toggleLoading(true);
    deleteData(id, HAMSTERS_URL).then((data) => {
      getHamsters();
      hideDataDeletionPopup();
    });
  };

  return (
    <div className="page-wrapper">
      <Header />
      {loading && <Loading />}
      <Form
        open={openForm}
        togglePopupForm={togglePopupForm}
        getHamsters={getHamsters}
        toggleLoading={toggleLoading}
      />
      <div className="container">
        <div className="box-show-form">
          <h1 className="gallery-title">add hamster data to database</h1>
          <button
            type="button"
            className="btn-show-form"
            onClick={() => togglePopupForm(true)}
          >
            show form
          </button>
        </div>

        <div className="box-gallery">
          <GalleryCart
            open={open}
            hamsters={hamsters}
            deleteHamster={deleteHamster}
            showDataDeletionPopup={showDataDeletionPopup}
            hideDataDeletionPopup={hideDataDeletionPopup}
          />
        </div>
      </div>
    </div>
  );
}
