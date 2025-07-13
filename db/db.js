import { Pool } from "pg";

const db = new Pool({
  connectionString: 'postgres://luke:I.l.d.t.1.@localhost:5432/top_users'
});

export default db

// Old database entries - for safekeeping
// const messages = [
//   {
//     text: "Sup, man",
//     user: 'Luke',
//     added: new Date()
//   },
//   {
//     text: "7PM at BroDude's, pizzas on me, drinks on you, I WILL get extra drunk, Brad will drive",
//     user: 'Bro from work',
//     added: new Date()
//   },
//   {
//     text: "It is working?",
//     user: 'Wood',
//     added: new Date()
//   }
// ]
