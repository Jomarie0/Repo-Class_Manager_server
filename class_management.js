const express = require(`express`);

const app = express();
const PORT = 3000;
app.use(express.json());

let users = [
    { id:1, firstName:`Jomarie`,lastName:`Roperez`,section:`Bsit4b`, status: `present`,},
    { id:2, firstName:`Jomaria`,lastName:`Ropereza`,section:`Bsit4b`, status: `absent`,},
];

app.get(`/users`, (req,res) => {
    const { firstName, lastName, section, status } = req.body;
    const userIndex = users.findIndex(user => user.firstName === firstName && user.lastName === lastName);

    if (userIndex !== -1) {
        user[userIndex].status = status;
        console.log(`Updated attendance for ${lastName} ${firstName} to: ${status} `);
        res.status(200).json({message: `Attendance for ${lastName} ${lastName} has been updated to ${'status'}. `});
    } else {
        const newUser = {
            id: user.length +1,
            lastName,
            firstName,
            section,
            status
        
        };
        users.push(newUser);
        console.log(`New user Added ${lastName} ${firstName} to: ${status} `);
        res.status(201).json({message: `New Student ${lastName} ${lastName} has been added with status: ${'status'}. `});

    };


});

app.get(`users`, (req,res) => {
    res.status(200).json(users);
});


app.get(`/`, (res,req) => {
    res.send(`server is up and running!`);
});

module.exports=app

app.listen (this.prototype, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});
