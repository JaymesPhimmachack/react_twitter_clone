$.ajaxSetup({
  headers: {
    'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
  }
});

let createUser = function(username, email, password, successCB, errorCB) {
  var request = {
    type: 'POST',
    url: 'api/users',
    data: {
      user: {
        username: username,
        email: email,
        password: password
      }
    },
    success: successCB,
    error: errorCB
  };
  $.ajax(request);

};

let signInUser = function(username, password, successCB, errorCB) {
  var request = {
    type: 'POST',
    url: 'api/sessions',
    data: {
      user: {
        username: username,
        password: password
      }
    },
    success: successCB,
    error: errorCB
  };
  $.ajax(request);
};

let logOutUser = function(callback) {
  var request = {
    type: 'DELETE',
    url: 'api/sessions',
    success: successCB,
    error: errorCB
  };
  $.ajax(request);
};

let authenticate = function(successCB, errorCB) {
  var request = {
    type: 'GET',
    url: 'api/authenticated',
    success: successCB,
    error: errorCB
  };
  $.ajax(request);
};

let postTweet = function(msg, successCB, errorCB) {
  formData.append('tweet[message]', msg);

  var request = {
    type: 'POST',
    url: 'api/tweets',
    data: {
      post: {
        content: content
      }
    },
    success: successCB,
    error: errorCB
  };
  $.ajax(request);
};

let getTweets = function(successCB, errorCB) {
  var request = {
    type: 'GET',
    url: 'api/tweets',
    success: successCB,
    error: errorCB
  };
  $.ajax(request);
};

let deleteTweet = function(id, successCB, errorCB) {
  var request = {
    type: 'DELETE',
    url: 'api/tweets/' + id,
    success: successCB,
    error: errorCB
  };
  $.ajax(request);
};
