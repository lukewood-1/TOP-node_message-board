import { insertEntry, deleteEntry, getEntries } from "../db/queries.js";
import { body, validationResult } from 'express-validator';

const homepageGet = async (req, res) => {
  const messages = await getEntries();

  res.render('index', {title: 'Mini message board', messages: messages});
};

const createMessageGet = (req, res) => {
  res.render('form');
};

const validate = [
  body('author').trim()
  .isLength({min: 3, max: 30})
  .withMessage('Author must have from 3 to 30 characters')
];

const createMessagePost = [
  validate, 
  async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      res.render('form', {errors: errors.array()})
    }

    const { author, message } = req.body;
    await insertEntry(author, message, 'now');
    res.redirect('/');
  }
];

const deleteMessagePost = async (req, res) => {
  const { id } = req.body;

  await deleteEntry(id);

  res.redirect('/');
};

export { homepageGet, createMessageGet, createMessagePost, deleteMessagePost }