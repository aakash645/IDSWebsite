module.exports = {
  apps: [
    {
      name: 'ids-smarttech-backend',
      script: 'server.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        BACKEND_PORT: 5000,
      },
      env_development: {
        NODE_ENV: 'development',
        BACKEND_PORT: 5000,
      },
    },
    {
      name: 'ids-smarttech-frontend',
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      env_development: {
        NODE_ENV: 'development',
        PORT: 3000,
      },
    },
  ],
};

