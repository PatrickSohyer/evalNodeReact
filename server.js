require('dotenv').config()
const PORT = process.env.PORT || 5000;
const URI = process.env.URI || "mongodb://localhost:27017/?retryWrites=true&writeConcern=majority";

const http = require('http').createServer();
const io = require('socket.io')(http, {
  cors: { origin: "*" }
});

http.listen(PORT, () => console.log(`Serveur allumer sur le port: ${PORT}`));


io.on("connection", (socket => {

  socket.on("requestFormations", function () {

    const MongoClient = require("mongodb").MongoClient;
    const client = new MongoClient(URI, { useUnifiedTopology: true });

    client.connect().then( () => {

      const database = client.db("formations");
      const collection = database.collection("formation");
      let formateurs = collection.find({});
      let formateur = formateurs.toArray();

      formateur.then(function(result) { 

        socket.emit("responseFormations", result);
        
      })
    }, error => {
      console.error(error);
    });
  });
}));