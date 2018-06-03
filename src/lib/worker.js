require('./index');

process.on('message', (message) => {
    console.log('MESSAGE', message);
    if (message === 'exit') return process.exit();
    if (typeof message !== 'object') return;
    if (message.type === 'require') return require(message.module); //? need?
});

require(process.argv[2]);
process.exit();
