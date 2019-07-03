const { connect } = require('./client')
const { setupInput } =require('./input');
const net = require('net');

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */


console.log('Connecting ...');
connect();
setupInput();

