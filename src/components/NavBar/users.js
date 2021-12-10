const _users = [
	{
		id: 1,
		firstName: "Selene",
		lastName: "Chavez",
	},
	{
		id: 2,
		firstName: "Omar",
		lastName: "Mijangos",
	},
	{
		id: 3,
		firstName: "Luis",
		lastName: "Balán",
	},
	{
		id: 4,
		firstName: "Odon",
		lastName: "Balán",
	},
];

export const newUser=_users.map((user) => (
	<div key={user.id}>
		<h1>
			{user.firstName} {user.lastName}
		</h1>
	</div>
))
