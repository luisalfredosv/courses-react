import { useState, useEffect } from "react";

const Effect = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((data) => setUsers(data));
	}, []);

	console.log(users);

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<>
			<h1>useEffect</h1>
			<hr />

			<form onSubmit={handleSubmit}>
				<div>
					<input type='text' />
				</div>
				<div>
					<button type='submit'>Search</button>
				</div>
			</form>
		</>
	);
};

export default Effect;
