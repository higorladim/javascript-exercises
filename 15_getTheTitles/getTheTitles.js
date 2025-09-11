const getTheTitles = function(books) {
    const bookshelf = books;
    const titles = bookshelf.map(({title}) => title);
    console.log ("titles: ", titles);
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
