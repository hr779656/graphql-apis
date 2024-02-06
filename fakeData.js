const userList = [
  {
    id: 1,
    name: "hasnain",
    username: "hasnainRaza",
    age: 22,
    nationality: "pak",
    friends: [
      {
        id: 4,
        name: "Noman",
        username: "hasnainRaza",
        age: 22,
        nationality: "pak",
      },
      {
        id: 2,
        name: "usman",
        username: "hasnainRaza",
        age: 22,
        nationality: "pak",
      },
    ],
  },
  {
    id: 2,
    name: "usman",
    username: "hasnainRaza",
    age: 22,
    nationality: "pak",
    friends: [
      {
        id: 3,
        name: "Baber",
        username: "hasnainRaza",
        age: 22,
        nationality: "pak",
      },
    ],
  },
  {
    id: 3,
    name: "Baber",
    username: "hasnainRaza",
    age: 22,
    nationality: "pak",
    friends: [],
  },
  {
    id: 4,
    name: "Noman",
    username: "hasnainRaza",
    age: 22,
    nationality: "pak",
    friends: [],
  },
];

const movieList = [
  {
    id: 1,
    name: "three Idiot",
    yearOfPublication: 2016,
    isInTheater: true,
  },
  {
    id: 2,
    name: "herry porter",
    yearOfPublication: 2012,
    isInTheater: true,
  },
  {
    id: 3,
    name: "herra pherry",
    yearOfPublication: 2001,
    isInTheater: true,
  },
  {
    id: 4,
    name: "Dangal",
    yearOfPublication: 2019,
    isInTheater: true,
  },
];

module.exports = { userList, movieList };
