$(".home.index").ready(function() {

  function authRedirect() {
    authenticate(function(response) {
      if (response.authenticated) {
        window.location.replace("/dashboard");
      }
    });
  };

  $(document).on('click', '#sign-up-btn', function(e) {
    e.preventDefault();
    var username = $('.sign-up.username').val();
    var email = $('.sign-up.email').val();
    var password = $('.sign-up.password').val();
    createUser(username, email, password, function() {
      signInUser(username, password, function() {
        authRedirect();
      });
    });
  });

  $(document).on('click', '#log-in-btn', function(e) {
    e.preventDefault();
    var username = $('.log-in.username').val();
    var password = $('.log-in.password').val();

    signInUser(username, password, function() {
      authRedirect();
    });
  });

})
