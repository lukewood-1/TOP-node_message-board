import db from "./db.js";

const insertEntry = async (author, message, added) => {
  const query = 'INSERT INTO messaging_board (author, message, added) VALUES ($1, $2, $3)';
  const params = [author, message, added];

  await db.query(query, params)
};

const deleteEntry = async id => {
  console.log(`Id: ${id}`);

  await db.query(
    'DELETE FROM messaging_board WHERE id = $1',
    [id]
  )
};

const getEntries = async () => {
  const { rows } = await db.query(
    'SELECT * FROM messaging_board'
  );

  return rows;
}

export { insertEntry, deleteEntry, getEntries }