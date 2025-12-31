const express = require("express");
const server = express();

server.set("view engine", "ejs");
server.use(express.urlencoded({ extended: true }));

let nails = [
    {
        id: "101",
        title: "Pink Chrome",
        description: "Glossy pink chrome nails",
        priority: "Premium",
        date: "2025-12-09"
    },
    {
        id: "102",
        title: "French Tips",
        description: "Classic white french nails",
        priority: "Normal",
        date: "2025-12-07"
    },
    {
        id: "103",
        title: "Minimal Nude",
        description: "Simple nude nail design",
        priority: "Simple",
        date: "2025-12-11"
    }
];


server.get("/", (req, res) => {
    res.render("index", { nails });
});

server.post("/add-nail", (req, res) => {
    nails.push({
        id: Date.now().toString(),
        ...req.body
    });
    res.redirect("/");
});

server.get("/delete-nail/:id", (req, res) => {
    nails = nails.filter(nail => nail.id != req.params.id);
    res.redirect("/");
});

server.get("/edit-nail/:id", (req, res) => {
    const nail = nails.find(n => n.id == req.params.id);
    res.render("updateNail", { nail });
});

server.post("/update-nail", (req, res) => {
    const { Nailid } = req.query;

    nails = nails.map(nail => {
        if (nail.id == Nailid) {
            return {
                id: Nailid,
                ...req.body
            };
        }
        return nail;
    });

    res.redirect("/");
});

server.listen(2211, () => {
    console.log("✅ Server running at http://localhost:2211");
});
