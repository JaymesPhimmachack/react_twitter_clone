$(".dashboard.index").ready(function() {

  var currentUser;

  authenticate(function(response) {
    if ($('body').hasClass('dashboard')) {
      if (response.authenticated) {
        currentUser = response.username;
        $('.username').text(currentUser);
        $('.screenName').text('@' + currentUser);
        getTweets(function(response) {
          $('.user-stats-tweets').text(response.length);
        });
      }
      else {
        window.location.replace("/");
      }
    }
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



  $(document).on('click', '#post-tweet-btn', function(e) {

    postTweet($('.post-input').val(), function(result) {
      if (result.success) {
        $('.post-input').val('');
        getTweetsAndPost();
        charCount();
        getTweets(function(response) {
          $('.user-stats-tweets').text(response.length);
        });
      }
    });
  });


  $(document).on('click', '#log-out', function() {
    logOutUser(function() {
      authenticate(function(response) {
        if (!response.authenticated) {
          window.location.replace("/");
        }
      });
    });
  });

  function getTweetsAndPost() {

    getTweets(function(tweets) {
      $('.tweets').text('');
      $.each(tweets, function(index) {
        var html = `<div class="tweet border border-light p-2">
               <div><span class="username mr-5">${tweets[index]['username']}</span><span class="screenName">@${tweets[index]['username']}</span></div>
               <div class="d-flex justify-content-between mt-3"><span class="post">${tweets[index]['message']}</span><a class="delete-tweet" id="${tweets[index]['id']}" href="#">Delete Tweet</a></div>
             </div>`;

        $('.tweets').prepend(html);

      });
    });
  }


  $(document).on('click', '.navbar-brand', function() {
    getTweetsAndPost();

  });

  $(document).on('click', '.delete-tweet', function(e) {
    deleteTweet($(this).attr('id'), function() {
      getTweetsAndPost();
      getTweets(function(response) {
        $('.user-stats-tweets').text(response.length);
      });
    });
  });


  getTweetsAndPost();

});
