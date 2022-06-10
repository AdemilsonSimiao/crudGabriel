const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const bd = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"password",
    database:"bdvinil",
});

app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({extended:true}))

app.put("/edit",(req, res) => {
    const {id} = req.body;
    const {name} = req.body;
    const {price} = req.body;
    const {category} = req.body;

    let SQL = "UPDATE tbvinil SET name=?, price=?, category=? WHERE idvinil = ?";

    bd.query(SQL,[name, price, category, id], (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
})
app.delete("/delete/:id", (req, res) => {
    const {id} = req.params;
    
    let SQL = "DELETE  FROM tbvinil WHERE idvinil = ?";
    
    bd.query(SQL,[id], (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
})
app.get("/getCards", (req, res) => {
    
    let SQL = "SELECT * FROM tbvinil";
    
    bd.query(SQL,(err, result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
})
app.post("/register", (req, res) => {
    const {name} = req.body;
    const {price} = req.body;
    const {category} = req.body;
    
    let SQL = "INSERT INTO tbvinil (name, price, category) VALUES ( ?, ?, ? )";

    bd.query(SQL, [name, price, category], (err, result) => {
        if(err){
            console.log(err);
        }else{
            console.log(result);
        }
    });
});


app.listen(3003, () => {
    console.log("Rodando");
});