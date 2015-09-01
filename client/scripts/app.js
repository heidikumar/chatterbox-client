var app = {

};  
// YOUR CODE HERE:
$(document).ready(function(){

//function to send messages

$('.send').on('click', function(){
  // console.log('button working');
  var message = {};
  message.username = "Heidi and Tad's Excellent Adventures"
  message.text = "Please don't hack us!"
  message.room = "The Floor of Awesomeness"
    $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: 'https://api.parse.com/1/classes/chatterbox',
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
})

//function to get messages
  //this needs to be within a function, but for now we are putting it in a button for testing

$('.get').on('click', function(){

    $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: 'https://api.parse.com/1/classes/chatterbox',
    type: 'GET',
    dataType: 'json',
    success: function (data) {
      console.log('We got data back');
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.log('failed to get anything');
      // console.error('chatterbox: Failed to send message');
    }
  });

})


//function to get messages









});