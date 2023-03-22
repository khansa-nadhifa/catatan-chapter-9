import {List, Button} from 'reactstrap';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import Axios from 'axios';

export default function Home(){
	const [users, setUser] = useState([{id: 1, name: 'dokja'}]) //state awal

	useEffect(() => {
		// alert('anda telah masuk')
		Axios.get('https://jsonplaceholder.typicode.com/users')
			.then((response) => setUser(response.data))
			// .then((data) => setUser(data))
	}, [])

	return (
		<>
			<Button>
				<Link to='/create-user'>Create user</Link>
			</Button>

			<h1>List All Users</h1>
			
			<List>
				{
					users.map(user => (
						<li key={user.id}>
							{user.name}
						</li>
					))
				}
			</List>
		</>
	)
}