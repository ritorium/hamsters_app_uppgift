import { v4 as uuidv4 } from "uuid";
import { IMG_URL, BASE_URL } from "../../constants";

export default function HistoryCart({ matches, deleteMatches }) {
  const images_url = BASE_URL + IMG_URL;
  return matches.map(({ loserId, winnerId, id }) => {
    return (
      <li className="history-row" key={uuidv4()}>
        <div className="btn-delete" onClick={() => deleteMatches(id)}>
          &#10006;
        </div>
        <div className="col">
          <div className="history-cart">
            <img src={images_url + winnerId.imgName} alt={winnerId.name} />
            <h3 className="history-cart-title">{winnerId.name}</h3>
          </div>
        </div>
        <div className="col">
          <div className="history-cart">
            <img src={images_url + loserId.imgName} alt={loserId.name} />
            <h3 className="history-cart-title">{loserId.name}</h3>
          </div>
        </div>
      </li>
    );
  });
}
