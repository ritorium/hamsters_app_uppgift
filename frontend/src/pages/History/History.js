import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import HistoryCart from "../../components/HistoryCart";

import { getData, deleteData } from "../../api";
import { BASE_URL, MATCHES_URL } from "../../constants";

import "./History.css";

export default function History() {
  let [matches, setMatches] = useState([]);
  let [loading, setLoading] = useState(true);

  const getMatches = () => {
    getData(BASE_URL + MATCHES_URL)
      .then((data) => {
        setMatches((matches = data));
      })
      .finally(() => {
        setLoading((loading = false));
      });
  };

  const deleteMatches = (id) => {
    setLoading((loading = true));
    deleteData(id, MATCHES_URL).then((data) => {
      getMatches();
    });
  };

  useEffect(() => {
    getMatches();
  }, []);

  return (
    <div className="page-wrapper">
      <Header />
      {loading && <Loading />}
      <div className="container">
        <div className="box-history">
          <div className="history">
            <div className="history-header">
              <div className="col">
                <h2 className="history-header-title">winners</h2>
              </div>

              <div className="col">
                <h2 className="history-header-title">loosers</h2>
              </div>
            </div>
            <ul className="history-body">
              {matches.length > 0 && (
                <HistoryCart matches={matches} deleteMatches={deleteMatches} />
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
