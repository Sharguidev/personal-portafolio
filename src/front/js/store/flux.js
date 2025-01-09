import toast from "react-hot-toast";


const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: null,
			token: localStorage.getItem("token") || null,
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
					year: "2024",
					title: "Roomies",
					description: "This was the final project developed in collaboration with other classmates in 4geeksAcademy.",
					githubLink: "https://github.com/Sharguidev/Coliving-Final-Project",
					liveLink: "",
					builtWith: "React Js, Bootstrap, CSS, Python, Flask, JWT,  SQLAlchemy"
				},
				{
					id: 2,
					year: "2024",
					title: "Star Wars API",
					description: "This was made with Python and Flask API, it should be capable of insert, delete or update data in the database.",
					githubLink: "https://github.com/Sharguidev/StarWars-API-Sharguidev",
					liveLink: "",
					builtWith: " Python, Flask, JWT,  SQLAlchemy"
				},
				{
					id: 3,
					year: "2024",
					title: "Authentication System",
					description: "This is a Login System  JWT token. Capable to start a new session and logout.",
					githubLink: "https://github.com/Sharguidev/Authentication-System-Sharguidev",
					liveLink: "",
					builtWith: "React Js, Bootstrap, CSS, Python, Flask,  SQLAlchemy"
				},
				{
					id: 4,
					year: "2024",
					title: "Landing Page with React Js",
					description: "This was made with React JS, Bootstrap and CSS. simple project to practice React",
					githubLink: "https://github.com/Sharguidev/landing-page-with-React-Sharguidev",
					liveLink: "",
					builtWith: "React Js, Bootstrap, CSS"
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
			},

			login: async (email, password) => {
				try {
					const resp = await fetch(process.env.BACKEND_URL + "api/login", {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							email: email,
							password: password
						})
					})
					const data = await resp.json()
					localStorage.setItem("token", data.token)

					setStore({
						token: data.token,
						user: data.user
					})
					return true

				} catch (error) {
					console.log(error)

				}
			},

			logout: () => {
				localStorage.removeItem("token")
				setStore({
					token: null,
					user: null
				});
				toast.success("Logout Success🎉")
			},

			getInTouch: async (name, email, message) => {
				try {
					const resp = await fetch(process.env.BACKEND_URL + "api/getintouch", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
							"Authorization": "Bearer"
						},
						body: JSON.stringify({
							name: name,
							email: email,
							message: message
						})
					});

					if (resp.ok) {
						const data = await resp.json();
						toast.success("Message sent successfully! 🎉")
						return data;
					} else {
						toast.error("Error sending message! 🙅🏾‍♂️")
					}
				} catch (error) {
					console.log("Error enviando el mensaje: ", error)
					toast.error("Error sending message! 🙅🏾‍♂️")
				}
			}

		}
	};
};

export default getState;
