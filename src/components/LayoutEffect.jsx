import { useState, useLayoutEffect, useEffect } from "react";

const LayoutEffect = () => {
	const [data, setData] = useState([]);
	const [length, setLength] = useState(0);
	const newData = [
		{
			name: "Luis",
			email: "luis@gmail.com",
		},
		{
			name: "Luis",
			email: "luis@gmail.com",
		},
		{
			name: "Luis",
			email: "luis@gmail.com",
		},
	];

	useEffect(() => {
		setTimeout(() => {
			setData(newData);
		}, 5000);
	}, []);

	useLayoutEffect(() => {
		const tam = data.length;
		setLength(tam);
	}, []);

	return (
		<>
			<h1>useLayoutEffect</h1>
			<hr />
			<p>Valores {length} </p>
			<pre>{newData}</pre>
		</>
	);
};

export default LayoutEffect;
