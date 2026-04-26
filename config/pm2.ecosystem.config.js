module.exports = {
  apps: [{
    name: "bosheq",
    script: "node_modules/next/dist/bin/next",
    args: "start -p 3000",
    cwd: "/var/www/bosheq",
    instances: 1,
    exec_mode: "fork",
    env: { NODE_ENV: "production" }
  }]
};
