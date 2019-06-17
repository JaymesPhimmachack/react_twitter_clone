$(".dashboard.index").ready(function() {

  var currentUser;

  authenticate(function(response) {
    if (response.authenticated) {
      currentUser = response.username;
      $('.username').text(currentUser);
      $('.screenName').text('@' + currentUser);
      getTweets(currentUser, function(response) {
        $('.user-stats-tweets').text(response.length);
      });
    }
    else {
      window.location.replace("/");
    }
  }, function(error) {
    console.log(error);
  });


  function charCount() {
    var char = $('.post-input').val().length;
    $('.post-char-counter').text(140 - char);
    if (char > 0 && char <= 140) {
      $("#post-tweet-btn").removeAttr('disabled');
    }
    else {
      $("#post-tweet-btn").attr('disabled', 'disabled');
    }
  };

  $(document).on('keyup', '.post-input', function() {
    charCount();
  });



  $(document).on('click', '#post-tweet-btn', function() {
    var imageSelect = document.getElementById('image-select');
    var image = imageSelect.files[0];
    postTweet($('.post-input').val(), image, function(result) {
      if (result.success) {
        $('.post-input').val('');
        imageSelect.value = '';
        $('#image-preview').attr('src', '#');
        $('#image-preview').hide();
        getTweetsAndPost();
        charCount();
        getTweets(currentUser, function(response) {
          $('.user-stats-tweets').text(response.length);
        });
      }
    });
  });

  //--------------- Get Tweets ----------------

  function getTweetsAndPost() {
    getAllTweets(function(tweets) {
      $('.feed').text('');
      $.each(tweets, function(index) {
        if (tweets[index]['username'] === currentUser) {
          var html = '<div class="tweet col-xs-12"> \
            <a class="tweet-username" href="#">' + tweets[index]['username'] + '</a> \
            <a class="tweet-screenName" href="#">@' + tweets[index]['username'] + '</a> \
            <a class="delete-tweet" id="' + tweets[index]['id'] + '" href="#">Delete</a>'

          if (tweets[index]['image'] !== undefined) {
            html += '<img src="' + tweets[index]['image'] + '" class="img img-responsive">'
          }

          html += '<p>' + tweets[index]['message'] + '</p> \
            </div>'
          $('.feed').prepend(html);
        }
        else {
          var html = '<div class="tweet col-xs-12"> \
            <a class="tweet-username" href="#">' + tweets[index]['username'] + '</a> \
            <a class="tweet-screenName" href="#">@' + tweets[index]['username'] + '</a>'

          if (tweets[index]['image'] !== undefined) {
            html += '<img src="' + tweets[index]['image'] + '" class="img img-responsive">'
          }

          html += '<p>' + tweets[index]['message'] + '</p> \
            </div>'
          $('.feed').prepend(html);
        }
      });
    });
  }

  $(document).on('click', '.navbar-brand', function() {
    getTweetsAndPost();

  });

  $(document).on('click', '.delete-tweet', function() {
    deleteOneTweet($(this).attr('id'), function() {
      getTweetsAndPost();
    });
  });


  function getUserTweetsAndPost(username) {
    getUserTweets(username, function(response) {
      $('.feed').text('');
      console.log(response);
      $.each(response, function(index) {
        if (response[index]['username'] === currentUser) {
          $('.feed').prepend(
            '<div class="tweet col-xs-12"> \
            <a class="tweet-username" href="#">' + response[index]['username'] + '</a> \
            <a class="tweet-screenName" href="#">@' + response[index]['username'] + '</a> \
            <p>' + response[index]['message'] + '</p> \
            <a class="delete-tweet" id="' + response[index]['id'] + '" href="#">Delete</a> \
            </div>'
          );
        }
        else {
          $('.feed').prepend(
            '<div class="tweet col-xs-12"> \
            <a class="tweet-username" href="#">' + response[index]['username'] + '</a> \
            <a class="tweet-screenName" href="#">@' + response[index]['username'] + '</a> \
            <p>' + response[index]['message'] + '</p> \
            </div>'
          );
        }
      });
    });
  }

  $(document).on('click', '.tweet-username', function() {
    getUserTweetsAndPost($(this).text());

  });

  $(document).on('click', '.username', function() {
    getUserTweetsAndPost($(this).text());

  });



  getTweetsAndPost();

});
