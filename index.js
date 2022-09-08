import mongoose from "mongoose";
import app from "./src/server.js";

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, async () => {
	await mongoose.connect("mongodb+srv://michaelviloria:michaelviloria@cluster0.tctmaqg.mongodb.net/?retryWrites=true&w=majority")
	console.log(`Servidor HTTP escuchando en el puerto ${server.address().port}`);
});

server.on("error", (error) => console.log(`Error en servidor: ${error}`));
