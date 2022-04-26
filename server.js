const express = require('express');
const cors = require('cors');

const app = express();

//connecting to the database and checking for errors if any are present

app.use(cors());
app.use(express.json());


app.listen(process.env.PORT || 4000, () => {
    console.log(`console server listening on port 4000`)
})