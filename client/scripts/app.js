$(document).ready(function(){
  app.init();
  $('.room').hide();
  $('#roomSelect').change(function(){
    $('.room').hide();
    $('#'+$(this).val()).show();
  })
})

$(document).on('click', '.username', function(){
    var text = $(this).text();
    app.addFriend(text);
  });

$(document).on('click', '.refresh', function(){
  app.init();
})

$(document).on('click', '.send', function() {
  var newMessage = {};
  $('.form').each(function() {
    newMessage[username] = this.username,
    newMessage[roomname] = this.roomname,
    newMessage[text] = this.text
  })
  console.log(newMessage);
})

  var app = {
    server : 'https://api.parse.com/1/classes/chatterbox',
    rooms : [],
    friends : []
  };  
  // Upon page load, should fetch messages, usernames and rooms, then load those on page.
  app.init = function(){
    app.fetch();
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

  app.fetch = function(){
      $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: this.server,
      type: 'GET',
      contentType: 'application/json',
      success: function (data) {
        console.log('We got data back');
        // window.data = data.results;
          //for each object in the array we apply the addMessage function
          for (var i=0; i<data.results.length; i++){
            var results = data.results[i];
            if (results.text === undefined || results.username === undefined || results.roomname === undefined){
              continue;
            }
            if (results.text === null || results.username === null  || results.roomname === null){
              continue;
            }
              if(results.text.match(/^[0-9a-zA-Z -]{1,16}$/)){
                if(results.username.match(/^[0-9a-zA-Z -]{1,16}$/)){
                  if(results.roomname.match(/^[0-9a-zA-Z -]{1,16}$/)){
                      console.log("This worked: " + data.results[i].text);
                      app.addMessage(results);
                  }
                }
              }
              else{
                 var errorMessage = "Data contains illegal characters."
                 console.log(errorMessage);
              }
          }

    /*
      Things that need to happen in fetch:
        needs to screen for escape characters
        needs to call add message on each message
    */
          //   // app.addMessage(data.results[i]);
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
    var name = "" + message.roomname + "";
    if (!document.getElementById(name)){
      app.addRoom(name);
    }
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
    var nameClass = "" + message.username + "";
    node.className = nameClass;
    node.appendChild(script);
    superNode.appendChild(node);
    document.getElementById('chats').appendChild(superNode);

    //run addRoom so div will exist
    //add username and message to the div of the room

  };

  app.addRoom = function(room){
    //in our array for possible future use
    app.rooms.push(room);
    //adding room to selection menu
    var newRoom = document.createElement('option');
    newRoom.value = room;
    newRoom.text = room;
    document.getElementById('roomSelect').appendChild(newRoom);

    //adding div to .chats class's div
    var divRoom = document.createElement('div');
    divRoom.id = room;
    divRoom.className = "room";
    document.getElementById('chats').appendChild(divRoom);

    //if there is a room input we will have to sort out how to handle that.
//          <option value = "1">one</option>
    //

  };


  app.addFriend = function(name){
    //we need to grab the text from the button and use that (instead of message.username)

   app.friends.push(name);
   var superFriendList = document.createElement('div');
   var friendList = document.createTextNode(name);
   superFriendList.id = "friendlist";
   superFriendList.appendChild(friendList);
   //where are we adding the superFriendList? 
   document.getElementById('friendsList').appendChild(superFriendList);

   //select all friends of the class
    var elementsArray = document.getElementsByClassName(name);
   //apply styling to that element to make the text bold
    for (var i=0; i<elementsArray.length; i++){
      elementsArray[i].style.fontWeight = "bold";
    }

  }


/*

TO DO LIST:

1. need to add a class for the friends name when the message is created  (CHECK)
2. be able to turn all friends of that class to be bold in add friend (CHECK)
3. need to add a way to toggle between rooms where only messages in that room's div are shown (CHECK)



*/



