require('./index');

process.on('message', (message) => {
    if (message === 'exit') return process.exit();
    if (typeof message !== 'object') return;
    console.log('MESSAGE', message);
    if (message.type === 'require') return require(message.module); //? need?
});

// console.log('worker', __dirname, process.argv[2]);
// console.log('worker path0', require.main.paths[0]);
require(process.argv[2]);
process.exit();
