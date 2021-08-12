import { memo } from "react";

const Dato = ({ value }) => {
	console.log("load");
	return (
		<>
			<p>{value}</p>
		</>
	);
};

export default memo(Dato);
