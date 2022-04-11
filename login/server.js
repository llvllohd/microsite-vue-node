const app = require("./src/app");
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Login application is running here: http://localhost:${PORT}`);
  console.log(`Press CTRL + C to EXIT`);
});