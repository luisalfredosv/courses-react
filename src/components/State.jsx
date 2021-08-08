import { useState, useEffect } from "react";

const State = () => {
	const [state, setState] = useState(1);

	useEffect(() => {
		console.log(1);
	}, []);

	return (
		<>
			<h1> useState</h1>
			<hr />
			cuenta: {state}
		</>
	);
};

export default State;
