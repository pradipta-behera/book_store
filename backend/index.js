import express from "express";
import {PORT , mongoDBURL} from "./config .js";
import mongoose from 'mongoose';

const app=express();

app.get('/',(request,response) => {
    console.log(request)
    return response.status(234).send("welcome to the book store website");
});


mongoose
.connect(mongoDBURL)
.then(() => {
    console.log('connected to MongoDB');
    app.listen(PORT , () =>{
        console.log(`App is listening to port : ${PORT}`);
    });
})
.catch((error)=>{
console.log(error);
})