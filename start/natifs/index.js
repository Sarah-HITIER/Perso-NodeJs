const fs = require("fs");

fs.copyFile("src.html", "dest.html", (err) => {
    if (err) throw err;
    console.log("Copie réalisée avec succès");
});
