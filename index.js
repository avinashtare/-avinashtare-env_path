import { getAllEnvironmentVariables, getPathsFromEnvironment, addPathsFromEnvironment, removePathsFromEnvironment, replacePathsFromEnvironment } from "./lib/index.js";


export default { "getAll": getAllEnvironmentVariables, "getPath":getPathsFromEnvironment, "addPath":addPathsFromEnvironment, "removePath":removePathsFromEnvironment, "replacePath":replacePathsFromEnvironment };