var app = {
  server : 'https://api.parse.com/1/classes/chatterbox'

};  

app.init = function(){

};


app.send = function(message){
    $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: this.server,
    type: 'POST',
    data: JSON.stringify(message),
    contentType: 'application/json',
    success: function (data) {
      console.log('chatterbox: Message sent');
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message');
    }
  });
};

app.fetch = function(){
    $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: this.server,
    type: 'GET',
    contentType: 'application/json',
    success: function (data) {
      console.log('We got data back');
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.log('failed to get anything');
      // console.error('chatterbox: Failed to send message');
    }
  });
};

app.clearMessages = function(){
  var chats = document.getElementById('chats');
  while(chats.hasChildNodes()){
    chats.removeChild(chats.lastChild);
  }
};

app.addMessage = function(message){

  var superNode = document.createElement('div');

  //username (clickable to add friend)
  var node = document.createElement('a');
    //make button have class of .username
  var script = document.createTextNode(message.username);
  node.appendChild(script);
  superNode.appendChild(node);

  //roomname (clickable to add room)
  var node = document.createElement('a');
    //make button have class of .roomname
  var script = document.createTextNode(message.roomname);
  node.appendChild(script);
  superNode.appendChild(node);

  //message
  var node = document.createElement('p');
  var script = document.createTextNode(message.text);
  node.appendChild(script);
  document.getElementById('chats').appendChild(node);

};

app.addRoom = function(room){
  var node = document.createElement('div');
  var room = document.createTextNode(room);
  node.appendChild(room);
  document.getElementById('roomSelect').appendChild(node);
};

app.addFriend = function(){

}







//THIS TOTALLY WORKS BUT IS NOT WHAT THEY ASKED FOR!!!!

// $(document).ready(function(){

// //function to send messages

// $('.send').on('click', function(){
//   // console.log('button working');
//   var message = {};
//   message.username = "Heidi and Tad's Excellent Adventures"
//   message.text = "Please don't hack us!"
//   message.room = "The Floor of Awesomeness"
//     $.ajax({
//     // This is the url you should use to communicate with the parse API server.
//     url: 'https://api.parse.com/1/classes/chatterbox',
//     type: 'POST',
//     data: JSON.stringify(message),
//     contentType: 'application/json',
//     success: function (data) {
//       console.log('chatterbox: Message sent');
//     },
//     error: function (data) {
//       // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
//       console.error('chatterbox: Failed to send message');
//     }
//   });
// })

// //function to get messages
//   //this needs to be within a function, but for now we are putting it in a button for testing

// $('.get').on('click', function(){

//     $.ajax({
//     // This is the url you should use to communicate with the parse API server.
//     url: 'https://api.parse.com/1/classes/chatterbox',
//     type: 'GET',
//     contentType: 'application/json',
//     success: function (data) {
//       console.log('We got data back');
//     },
//     error: function (data) {
//       // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
//       console.log('failed to get anything');
//       // console.error('chatterbox: Failed to send message');
//     }
//   });

// })
// });