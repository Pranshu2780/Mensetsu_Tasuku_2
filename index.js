let express  = require("express");
let mongoose = require("mongoose");
let bodyParser = require("body-parser");
let app = express();
app.set('view engine','ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true}))
// var i1=[];
mongoose.connect("mongodb://localhost:27071/todolistDB,{useNewUrlParser:true,useUnifiedTopology:true"});
const itemSchema={
    name:String
}
const Item = mongoose.model("Item",itemSchema);

const item1=new Item({
    name:"Hello, Welcome to my word",
})

const item2=new Item({
    name:"Hello, Welcome to my word 1",
})

const item3=new Item({
    name:"Hello, Welcome to my word 2",
})

const d=[item1,item2,item3];    
Item.insertMany(d,function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Saved Successfully");
    }
})

app.get("/", function(req,res){
        //  res.send("It's me");
        Item.find({},function(err,f){
            res.render("list",{newListItems:i1});
            // console.log(f);
        })
       
}) 

app.post("/", function(req,res){
     i = req.body.m;
    // console.log(i);
    // res.render("list",{newListItem:i});
    i1.push(i);
    res.redirect("/");
})

app.listen(3000, ()=>{
    console.log("It's working");
})