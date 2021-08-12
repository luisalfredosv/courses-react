import React, { useRef } from "react";

const Ref = () => {
	const ref = useRef(null);

	const handleRef = () => {
		// const ref = document.getElementById("area");
		ref.current.value = "hola mundo";
		ref.current.select();
	};

	return (
		<>
			<h1 onClick={handleRef}>useRef</h1>
			<hr />
			<textarea ref={ref} placeholder='Escribe tu mensaje'></textarea>
		</>
	);
};

export default Ref;
