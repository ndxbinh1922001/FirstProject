const app = require("./src/app");
const {
  app: { port },
} = require("./src/configs/config.mongodb");
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// process.on("SIGINT", () => {
//     console.log(`Server is off`)
// })
