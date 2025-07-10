import express, { text } from 'express';

const messages = [
  {
    text: "Sup, man",
    user: 'Luke',
    added: new Date()
  },
  {
    text: "7PM at BroDude's, pizzas on me, drinks on you, I WILL get extra drunk, Brad will drive",
    user: 'Bro from work',
    added: new Date()
  },
  {
    text: "It is working?",
    user: 'Wood',
    added: new Date()
  }
]

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
  res.render('index', {title: 'Mini message board', messages: messages});
});

indexRouter.get('/new', (req, res) => {
  res.render('form');
});

indexRouter.post('/new', (req, res) => {
  messages.push({
    user: req.body.author,
    text: req.body.message,
    date: new Date()
  });
  res.redirect('/');
});

export default indexRouter;