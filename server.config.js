module.exports = {
  apps: [{
    name: "api",
    script: "./index.js",
    instances: 4,//"max",
    exec_mode: "cluster"
  }]
}