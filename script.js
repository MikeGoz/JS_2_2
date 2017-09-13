// task 2.2

var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'film o czarodzieju',
        img: './img/hpotter.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'film o królu sawanny',
        img: './img/lionking.jpg'
    },
    {
        id: 3,
        title: 'Pulp Fiction',
        desc: 'film o życiu',
        img: './img/pulpfiction.jpg'
    },
    {
        id: 4,
        title: 'Łowca Androidów',
        desc: 'film science fiction',
        img: './img/lowca.jpg'
    },
    {
        id: 5,
        title: 'Krótki film o miłości',
        desc: 'jak w tytule',
        img: './img/kfom.jpg'
    }
];
var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src:movie.img})
    );
});
var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
    );

ReactDOM.render(element, document.getElementById('app'));