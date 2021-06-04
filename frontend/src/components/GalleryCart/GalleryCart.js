import { v4 as uuidv4 } from "uuid";
import { IMG_URL, BASE_URL } from "../../constants";

export default function GalleryCart({
  open,
  hamsters,
  deleteHamster,
  showDataDeletionPopup,
  hideDataDeletionPopup,
}) {
  const images_url = BASE_URL + IMG_URL;

  return hamsters.map(({ imgName, id }, index) => {
    return (
      <div className="gallery-cart" key={uuidv4()}>
        <div
          className="btn-delete"
          onClick={() => showDataDeletionPopup(index)}
        >
          &#10006;
        </div>
        <img src={images_url + imgName} alt="" />
        {index === open && (
          <div className="overlay">
            <p>delete?</p>
            <div className="box-btns">
              <button
                type="button"
                className="btn-yes"
                onClick={() => deleteHamster(id)}
              >
                yes
              </button>
              <button
                type="button"
                className="btn-no"
                onClick={hideDataDeletionPopup}
              >
                no
              </button>
            </div>
          </div>
        )}
      </div>
    );
  });
}
