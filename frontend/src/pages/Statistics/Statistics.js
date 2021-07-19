import { useState, useEffect } from "react";
import { getData } from "../../api";
import Header from "../../components/Header";
import StatisticsCard from "../../components/StatisticsCard";
import Loading from "../../components/Loading";
import { getDatasetOfWinnersOrLosers } from "../../util";
import { BASE_URL, HAMSTERS_URL } from "../../constants";
import "./Statistics.css";

export default function Statistics() {
	const controller = new AbortController();
	const signal = controller.signal;

	//let [hamsters, setHamsters] = useState([]);
	let [winners, setWinners] = useState([]);
	let [loosers, setLoosers] = useState([]);
	let [loading, setLoading] = useState(true);

	useEffect(() => {
		getData(BASE_URL + HAMSTERS_URL, signal)
			.then((data) => {
				setWinners((winners = getDatasetOfWinnersOrLosers("wins", data)));
				setLoosers((loosers = getDatasetOfWinnersOrLosers("defeats", data)));
			})
			.finally(() => {
				setLoading((loading = false));
			});
	}, []);
	return (
		<div className="page-wrapper">
			<Header />
			{loading && <Loading />}
			<div className="container">
				<div className="box-statistics">
					{winners.length > 0 && (
						<StatisticsCard data={winners} title="winners" params="wins" />
					)}
					{loosers.length > 0 && (
						<StatisticsCard data={loosers} title="loosers" params="defeats" />
					)}
				</div>
			</div>
		</div>
	);
}
