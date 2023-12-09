import { exec } from "child_process";

const convertPath = (inputPath) => {
    // Use regular expression to replace single backslashes with double backslashes
    return inputPath.replace(/\\/g, '\\');
}

// update new path 
const updatePath = (paths,action) => {
    let command;
    if(action == "add"){
        command = `setx PATH "${paths}" /M`;
    }
    if(action == "remove"){
        command = `setx PATH "%PATH:${paths}=%" /M`;
    }
    try {

        return new Promise((resolve, reject) => {
            exec(command, (error, stdout, stderr) => {
                if (error) {
                    reject(`Error: ${error.message}`);
                    return false;
                }
                if (stderr) {
                    reject(`stderr: ${stderr}`);
                    return false;
                }
                if (stdout) {
                    resolve(true);
                    return true;
                }
            });
        });

    } catch (error) {
        return false
    }
}





export { convertPath, updatePath };

