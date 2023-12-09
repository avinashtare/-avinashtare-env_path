// example.js
import env_path from "@avinashtare/env_path";

// here you have to add 
// import env_path from "env_path";
// const env_path = require("env_path");


// first get all Environment variables from system 
// console.log(env_path.getAll())

// first get all path Environment variables from system 
// console.log(env_path.getPath())



/*
1) it's a async functions
2) it's work only for windows
3) You Must Have sudo permistions <--- open your terminal in administrator mode
3) your path must have \\ -> 
     E:\Users\Public\Music <- wrong
     "E:\\Users\\Public\\Music <- right
*/

// add new path 
async function addPath(newPath){
    let isUpdated = await env_path.addPath(newPath)
    if(isUpdated){
        console.log("Your Path Hass Been Added")
    }
    else{
        console.log("Fail To Update Path")
    }
}
let addNewPath = "E:\\Users\\Public\\Music";
// addPath(addNewPath);


// remove path 
async function removePath(removePath){
    let isUpdated = await env_path.removePath(removePath)
    if(isUpdated){
        console.log("Your Path removed")
    }
    else{
        console.log("Fail To removed Path")
    }
}
let removeOldPath = "E:\\Users\\Public\\Music";
// removePath(removeOldPath);

// replace path 
async function replacePath(oldPath,newPath){
    let isUpdated = await env_path.replacePath(oldPath,newPath)
    if(isUpdated){
        console.log("You Path hass been replaced")
    }
    else{
        console.log("Fail To replaced Path")
    }
}
let addOldPath = "E:\\Users\\Public\\Music";
let addNewPaths = "E:\\Users\\Public\\New";
// replacePath(addOldPath,addNewPaths);