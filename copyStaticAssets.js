const shell = require('shelljs');

// Config
shell.rm('-rf', 'dist/config');
shell.cp('-R', 'src/config', 'dist/config');
