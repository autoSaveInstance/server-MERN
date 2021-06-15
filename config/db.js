const mongoose = require("mongoose");
try {
  mongoose.connect("mongodb+srv://root:stupid@fuckyou01@cluster0.6lxq5.mongodb.net/hayroo?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("Database Connected Successfully");
} catch (err) {
  console.log("Database Not Connected"+err.message);
}
