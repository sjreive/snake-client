const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '172.46.0.110',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('connect',() => {
    console.log("Successfully connected to game server!");
    conn.write('Name: SJR');
  });

  conn.on('data',(data) => {
    console.log('Message from server:', data);
});


  return conn;
};

module.exports = { connect };