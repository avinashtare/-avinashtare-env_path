import process from "process"
import { convertPath,  updatePath } from "./utils.js"

// Function to retrieve all environment variables
const getAllEnvironmentVariables = () => {
    return process.env;
}

// Function to extract and parse the PATH environment variable
const getPathsFromEnvironment = () => {
    // Get all environment variables
    let allEnv = getAllEnvironmentVariables();

    // Get the PATH environment variable
    let paths = allEnv.PATH;

    // Split the PATH into an array using semicolon as a delimiter
    let pathEnv = paths.split(";");

    // Get the length of the array
    let pathEnvLength = pathEnv.length - 1;

    // Check if the last element in the array is an empty string or has a length less than 2
    if (pathEnv[pathEnvLength].length < 2) {
        // If true, remove the last element from the array
        pathEnv.splice(pathEnvLength, 1);
    }

    // Return the modified array
    return pathEnv;
}

// add new path 
const addPathsFromEnvironment = async (path) => {
    // convet to system readable path 
    path = convertPath(path)
    console.log(path)

    // get all paths
    let allpath = getPathsFromEnvironment()

    // push new path
    allpath.push(path)

    // array to string
    let newPath = allpath.join(";")

    // it's pormise to direct system to update path 
    let isPathUpdated = await updatePath(newPath, "add")

    // return promice value 
    return isPathUpdated;
}

// remove paths
const removePathsFromEnvironment = async (path) => {
    // convet to system readable path 
    let systemPath = convertPath(path);

    let isPathUpdated = await updatePath(systemPath, "remove")
    return isPathUpdated;
}

// remove paths
const replacePathsFromEnvironment = async (oldPath,newPath) => {
    // convet to system readable path 
    oldPath = convertPath(oldPath);
    newPath = convertPath(newPath);
    
    // first remove path 
    let isPathRemoved = await addPathsFromEnvironment(oldPath,"remove");

    // then add new path 
    if(isPathRemoved){
        let isPathAdded = await addPathsFromEnvironment(newPath,"add")
        return isPathAdded;
    }
}

// Export the functions for external use
export { getAllEnvironmentVariables, getPathsFromEnvironment, addPathsFromEnvironment, removePathsFromEnvironment, replacePathsFromEnvironment };
