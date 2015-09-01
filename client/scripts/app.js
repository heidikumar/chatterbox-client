$(document).ready(function(){
})

$(document).on('click', '.username', function(){
    console.log('this is clicking');
    app.addFriend();
  });

  var app = {
    server : 'https://api.parse.com/1/classes/chatterbox',
    rooms : [],
    friends : [], 
    data : undefined
  };  
  // Upon page load, should fetch messages, usernames and rooms, then load those on page.
  app.init = function(){
    app.fetch();
    //clear drop-down friends menu
    //refill drop-down friends menu
        //we need the friends menu to be a node connected to all the messages, such that the messages will display when we select the correct room.

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

  window.data = null; //for testing purposes only!

  app.fetch = function(callback){
      $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: this.server,
      type: 'GET',
      contentType: 'application/json',
      success: function (data) {
        console.log('We got data back');
        window.data = data.results;
          //for each object in the array we apply the addMessage function
          // for (var i=0; i<data.results.length; i++){
          //     if(data.results[i].match(/^[0-9a-zA-Z]{1,16}$/)){
          //       console.log(data.results[i]);
          //     }
          //     else{
          //        var errorMessage = "Data contains illegal characters."
          //        return errorMessage;
          //     }
          //   // app.addMessage(data.results[i]);
          // }
            //therefore, DOM will show current messages.
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        // console.log('failed to get anything');
        console.error('chatterbox: Failed to send message');
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

    // var superNode = document.createElement('div');
    //rather than superNode, create div room and append
    //check if room already exists
    if (!document.getElementById(message.room)){
      app.addRoom(message.room);
    }
    var name = "" +message.room + "";
    var superNode = document.getElementById(name);

    //username
    var userButton = document.createElement('button');
    var userText = document.createTextNode(message.username);
    userButton.className = "username";
    userButton.appendChild(userText);
    superNode.appendChild(userButton);

    //message
    var node = document.createElement('p');
    var script = document.createTextNode(message.text);
    node.appendChild(script);
    superNode.appendChild(node);
    document.getElementById('chats').appendChild(superNode);

    //run addRoom so div will exist
    //add username and message to the div of the room

  };

  app.addRoom = function(room){
    //in our array for possible future use
    app.rooms.push(message.room);
    //adding room to selection menu
    var newRoom = document.createElement('option');
    newRoom.value = message.room;
    newRoom.text = message.room;
    document.getElementById('roomSelect').appendChild(newRoom);

    //adding div to .chats class's div
    var divRoom = document.createElement('div');
    divRoom.id = message.room;
    document.getElementById('chats').appendChild(divRoom);

    //if there is a room input we will have to sort out how to handle that.
//          <option value = "1">one</option>
    //

  };


  app.addFriend = function(){
   app.friends.push(message.username);
   var superFriendList = document.createElement('div');
   var friendList = document.createTextNode(message.username);
   superFriendList.id = "friendlist";
   superFriendList.appendChild(friendList);
   //where are we adding the superFriendList? 
   document.getElementById('friendsList').appendChild(superFriendList);
   console.log(message.username);
  }



//                if (!app.rooms.hasOwnProperty(data.results[i].roomname)){
//                  var keyVal = data.results[i].roomname;
//                  app.rooms[keyVal] = keyVal;
//                }
//               app.addRoom();
//           



// app.addFriend = function(){
//   $(this).on('click', function(){
//     console.log('clicking');
//     var friend = $(this).closest('#chats').find('.userName');
//     app.friends.push(friend);
//   })





  // //roomName
  // var roomName = document.createElement('button');
  // var roomText = document.createTextNode(message.roomname);
  // roomName.id = "roomSelect";
  // roomName.appendChild(roomText);
  // superNode.appendChild(roomName);


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