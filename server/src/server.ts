// Separating the server from the app instance
import app from "./app";
app.listen(3001, () => {
  console.log(`Listening on port 3001`);
});
