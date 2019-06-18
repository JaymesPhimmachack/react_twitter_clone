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



  function getTweetsAndPost() {

    getTweets(function(tweets) {
      $('.feed').text('');
      $.each(tweets, function(index) {
        if (tweets[index]['username'] === currentUser) {

          var html = `<div className="tweet border border-light p-2"> +
          <div><span className="username mr-5">${tweets[index]['username']}</span><span className="screenName">@${tweets[index]['username']}</span></div>
          <div className="d-flex justify-content-between mt-3"><span className="post">Post 1</span><a className="delete-tweet" id="${tweets[index]['id']}" href="#">Delete Tweet</a></div>
        </div>`;
        
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
          $('.tweets').prepend(html);
        }
      });
    });
  }

  $(document).on('click', '.navbar-brand', function() {
    getTweetsAndPost();

  });

  $(document).on('click', '.delete-tweet', function() {
    deleteTweet($(this).attr('id'), function() {
      getTweetsAndPost();
    });
  });


  


  getTweetsAndPost();

});
