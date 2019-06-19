$.ajaxSetup({
  headers: {
    'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
  }
});

let createUser = function(username, email, password, callback) {
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
    success: function(response) {
      console.log(response);
      return callback();
    },
    error: function(error) {
      console.log(error);
    }
  };
  $.ajax(request);

};

let signInUser = function(username, password, callback) {
  var request = {
    type: 'POST',
    url: 'api/sessions',
    data: {
      user: {
        username: username,
        password: password
      }
    },
    success: function(response) {
      console.log(response);
      return callback();
    },
    error: function(error) {
      console.log(error);
    }
  };
  $.ajax(request);
};

let logOutUser = function(callback) {
  var request = {
    type: 'DELETE',
    url: 'api/sessions',
    success: function(response) {
      console.log(response);
      return callback();
    },
    error: function(error) {
      console.log(error);
    }
  };
  $.ajax(request);
};

let authenticate = function(callback) {
  var request = {
    type: 'GET',
    url: 'api/authenticated',
    success: function(response) {
      return callback(response);
    },
    error: function(error) {
      console.log(error);
    }
  };
  $.ajax(request);
};

let postTweet = function(msg, callback) {

  var request = {
    type: 'POST',
    url: 'api/tweets',
    data: {
      tweet: {
        message: msg
      }
    },
    success: function(response) {
      return callback({ 'success': true });
    },
    error: function(error) {
      console.log(error);
    }
  };
  $.ajax(request);
};

let getTweets = function(callback) {
  var request = {
    type: 'GET',
    url: 'api/tweets',
    success: function(response) {
      console.log(response);
      return callback(response.tweets);
    },
    error: function(error) {
      console.log(error);
    }
  };
  $.ajax(request);
};

let deleteTweet = function(id, callback) {
  var request = {
    type: 'DELETE',
    url: `api/tweets/${id}`,
    success: function(response) {
      console.log(response);
      return callback();
    },
    error: function(error) {
      console.log(error);
    }
  };
  $.ajax(request);
};
