const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = 3000;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', (socket) => {
  console.log('user connected');

  //   socket.emit('message', { lee: 'hey how are you?' });
  //   socket.on('another event', (data) => {
  //     console.log(data);
  //   });
  socket.emit('greetings', 'Hey!', { ms: 'jane' }, Buffer.from([4, 3, 3, 1]));
  socket.on('salutations', (elem1, elem2, elem3) => {
    console.log(elem1, elem2, elem3);
  });
});
