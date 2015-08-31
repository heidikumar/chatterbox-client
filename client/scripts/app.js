// YOUR CODE HERE:
var app = {
  app.init = function(d) {
    if (typeof d !== 'undefined') {
      d = true;
    }

  }

  // ******** POST ***********
  app.send = $('.send').on('click', function(event) {
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

// // ******** GET **********
// ***** Make sure to escape because we're pulling down data from others. ******
//   app.fetch = $.ajax({
//   // This is the url you should use to communicate with the parse API server.
//   url: 'https://api.parse.com/1/classes/chatterbox',
//   type: 'GET',
//   data: JSON.stringify(message),
//   contentType: 'application/json',
//   success: function (data) {
//     console.log('chatterbox: Message sent');
//   },
//   error: function (data) {
//     // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
//     console.error('chatterbox: Failed to send message');
//   }
// });

//   // ********* CLEAR CHATS ***********


//   // ********* ADD MESSAGES ***********


//   // ******** ADD ROOMS ************


//   // ********* ADD FRIEND WHEN CLICKING ON USERNAME **********
// // ***** Make sure to escape because we're pulling down data from others. ******


//   // ******* SEND A MESSAGE *********
// };