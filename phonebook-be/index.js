const express = require("express");
const app = express();
const cors = require("cors");

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
  {
    id: 7,
    name: "Mary Poppendieck",
  },
];

app.use(express.json());

app.use(cors());

app.use(express.static("build"));

app.get("/api/persons", (request, response) => {
  response.json(persons);
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((person) => person.id === id);
  if (person) {
    response.json(person);
  } else {
    response.status(404).end();
  }
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((person) => person.id !== id);
  response.status(204).end();
});

function getRandomArbitrary(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

app.post("/api/persons", (request, response) => {
  const body = request.body;

  const found = persons.filter((person) => person.name === body.name);

  if (!body.name || !body.number) {
    return response.status(400).json({
      error: "property missing",
    });
  }

  if (found.length !== 0) {
    return response.status(409).json({
      error: "name must be unique",
    });
  }

  const person = {
    name: body.name,
    number: body.number,
    id: getRandomArbitrary(persons.length + 1, 200000),
  };

  persons = persons.concat(person);

  response.json(person);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
