const fs = require('fs');
const { exec } = require('child_process');
const envFile = '.env.example';

!fs.existsSync(envFile) && fs.copyFileSync(envFile, '.env');

exec('prisma db push && prisma db seed');
