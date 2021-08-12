import React, { memo } from "react";

const Btn = ({ add }) => {
	return (
		<>
			<button onClick={add}>+1</button>
		</>
	);
};

export default memo(Btn);
