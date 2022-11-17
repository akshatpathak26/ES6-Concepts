const bob = {
    first: 'bob',
    last: 'sanders',
    city: 'chicago',
    siblings: {
      sister: 'jane',
      brother: 'john'
    },
  };

const {first,last,city,siblings:{sister:favoriteSibling,brother}} = bob;

console.log(first , last , city, favoriteSibling, brother);

function printPerson({first, last , siblings:{sister,brother}}){
    console.log(first, last, sister,brother);
}

printPerson(bob)