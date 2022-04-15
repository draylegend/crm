const fs = require('fs');
const { exec } = require('child_process');

fs.copyFileSync('.env.example', '.env');

exec('prisma db push && prisma db seed');
