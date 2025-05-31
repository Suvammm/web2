let books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { id: 3, title: '1984', author: 'George Orwell' }
  ];
  
  const generateId = () => {
    const maxId = books.length > 0 ? Math.max(...books.map(b => b.id)) : 0;
    return maxId + 1;
  };
  
  module.exports = {
    books,
    generateId
  };