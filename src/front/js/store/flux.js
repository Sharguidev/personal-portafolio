

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],

			projects: [
				{
					id: 1,
					title: "Roomies",
					description: "This was the final project developed in collaboration with other classmates in 4geeksAcademy."

				},
				{
					id: 2,
					title: "Star Wars API",
					description: "This was made with Python and Flask API, it should be capable of insert, delete or update data in the database."
				},
				{
					id: 3,
					title: "Authentication System",
					description: "This is a Login System using hash password, and JWT token. Capable to start a new session and logout."
				},
				{
					id: 4,
					title: "Landing Page with React Js",
					description: "This was made with React JS, Bootstrap and CSS. simple project to practice React"
				}



			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
