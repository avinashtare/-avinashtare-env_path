# Env Path

A Node.js module for managing the only windows system environment variable `PATH`.
The env_path middleware is a powerful tool designed to streamline the management of the Windows system environment path. It empowers users to easily control, modify, and enhance their environment variables, providing a seamless experience for developers and system administrators.

## Install

```shell
npm install @avinashtare/env_path

```

## warning
- This Package Only Work On Windows System.
- You Also Run Your Code On Administration

## how to get All Env Variables

```js
import env_path from "@avinashtare/env_path";

console.log(env_path.getAll())

```

## Add Path Environment Variables

```js
import env_path from "@avinashtare/env_path";

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
addPath(addNewPath);

```

## Replace Path Environment Variables

```js
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
replacePath(addOldPath,addNewPaths);

```

## Remove Path Environment Variables

```js
// replace path 
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
```

## License


[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
This project is released under the [MIT License](LICENSE).  


## Contact

**[avinashtare.work@gmail.com](mailto:avinashtare.work@gmail.com)**

## Author
**卐🕉 Avinash Tare 🕉 卐**
