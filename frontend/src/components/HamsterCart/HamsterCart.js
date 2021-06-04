import { BASE_URL, IMG_URL } from "../../constants";
export default function HamsterCart({
  index,
  randomData,
  getIdHamster,
  winner,
}) {
  const data = randomData[index];

  return (
    <div
      className={winner === index ? "hamster-cart active" : "hamster-cart"}
      onClick={() => getIdHamster(index)}
    >
      <img src={BASE_URL + IMG_URL + data.imgName} alt="" />
      <div className={winner > -1 ? "overlay active" : "overlay"}>
        <p>
          name: <span>{data.name}</span>
        </p>
        <p>
          age: <span>{data.age}</span>
        </p>
        <p>
          favorit food: <span>{data.favFood}</span>
        </p>
        <p>
          favorit active: <span>{data.loves}</span>
        </p>
        {winner > -1 && (
          <div>
            <h3 className="hamster-cart-title">
              {winner === index ? "Winner!" : "Looser"}
            </h3>
            <p>Winner {data.wins} </p>
            <p>looser {data.defeats}</p>
          </div>
        )}
      </div>
    </div>
  );
}
