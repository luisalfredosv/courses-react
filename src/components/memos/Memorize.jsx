import React, { useState, useMemo, useCallback } from "react";
import Dato from "./Dato";
import Btn from "./Btn";

const Memorize = () => {
	const [counter, setCounter] = useState(5);
	const [view, setView] = useState(true);

	// const handleClick = () => {
	// 	setCounter(counter + 1);
	// };

	const pesado = (iter) => {
		for (let i = 0; i < iter; i++) {
			console.log("Procesing");
		}
		return "Finished";
	};

	const pesadoMemo = useMemo(() => {
		return pesado(counter);
	}, [counter]);

	const add = useCallback(() => {
		setCounter((act) => act + 1);
	}, [setCounter]);

	return (
		<>
			<h1>
				Memorizes: <Dato value={counter}></Dato>
			</h1>
			<hr />

			{pesadoMemo}

			<Btn add={add} />

			<button onClick={() => setView(!view)}>Ver / Quitar</button>
		</>
	);
};

export default Memorize;
