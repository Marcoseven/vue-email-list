/* 
Descrizione:
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/

// Vue.js
const app = new Vue({
	el: "#app",
	data: {
		emails: [],
		error: "",
	},
	mounted() {
		for (let i = 0; i < 10; i++) {
			axios
				.get("https://flynn.boolean.careers/exercises/api/random/mail")
				.then((resp) => {
					console.log(resp);
					this.emails.push(resp.data.response);
				})
				.catch((e) => {
					console.error(e, "ops, è stato rilevaro un errore");
					this.error = e;
				});
		}
	},
});
