const express = require("express");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload") ;
const cors = rquire('cors') ;

const app = express();



const BookRoutes = require("./routes/BookRoutes")
const CountryRoutes = require("./routes/CountryRoutes")
const WriterRoutes = require("./routes/WriterRouter")
app.use(cors())
app.use(express.json());

app.use(fileUpload())

const port = 8080;


app.use('/api/writers' ,WriterRoutes) ;
app.use('/api/countries',CountryRoutes)
app.use('/api/books',BookRoutes) ;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
  mongoose
    .connect(
      "mongodb+srv://imranovazer:20023838Aze@blog.6ft9u8s.mongodb.net/TodosDB"
    )
    .then((e) => {
      console.log("DB connected!");
    });
});