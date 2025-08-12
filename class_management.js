const express = require(`express`);

const app = express();
const PORT = 3000;
app.use(express.json());

let users = [
    { id:1, firstName:`Jomarie`,lastName:`Roperez`,section:`Bsit4b`, status: `present`,},
    { id:2, firstName:`Jomaria`,lastName:`Ropereza`,section:`Bsit4b`, status: `absent`,},
];

app.get(`/users`, (req,res) => {
    res.status(200).json(users);
});

app.post(`/users`, (req,res) => {
    const { firstName, lastName, section, status } = req.body;
    const userIndex = users.findIndex(user => user.firstName === firstName && user.lastName === lastName);

    if (userIndex !== -1) {
        users[userIndex].status = status;
        console.log(`Updated attendance for ${lastName} ${firstName} to: ${status}`);
        return res.status(200).json({ message: `Attendance for ${lastName} ${firstName} has been updated to ${status}.` });
    }

    const newUser = {
        id: users.length + 1,
        firstName,
        lastName,
        section,
        status
    };
    users.push(newUser);
    console.log(`New user added ${lastName} ${firstName} with status: ${status}`);
    res.status(201).json({ message: `New student ${lastName} ${firstName} has been added with status: ${status}.` });
});


app.get(`/users`, (req,res) => {
    res.status(200).json(users);
});


app.get(`/`, (req,res) => {
    res.send(`server is up and running!`);
});

module.exports=app

app.listen (PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});
