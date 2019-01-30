// use this for linux deploys

// for windows: use pm2 start windows_api_deploy.js or windows_frontend_deploy.js
module.exports = {
  apps : [{
    name: 'zoo_api',
    script: 'npm',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'run deploy:api',
    instances: 2,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    output: "./api.out.log",
    error: "./api.error.log",
    log: "./api.log.log"
  },
  {
    name: 'zoo_frontend',
    script: 'npm',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'run deploy:frontend',
    instances: 2,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    output: "./frontend.out.log",
    error: "./frontend.error.log",
    log: "./frontend.log.log"
  }]
};