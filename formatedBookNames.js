const { books } = require('./data/library');

const formatedBookNames = () => {
  // escreva seu código aqui
  return books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`)
};

console.log(formatedBookNames())

module.exports = { formatedBookNames };
