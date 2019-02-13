$(document).ready(function(){

  $('#create_user').click(function() {
    var name = $('#name').val();
    var email = $('#email').val();
    var password = $('#password').val();
    var token = localStorage.getItem("Authorization"); 
    console.log(token);
    console.log(email);

    $.ajax({
     type: "POST",
     url: "http://localhost:8888/TuristMe/public/index.php/api/register",
     headers: {
      Authorization: token
    },

    data: {
     name: name,
     email: email,
     password: password
   },

   success: function(data, text, done){
    console.log(data);

            },
            error: function(data, text, done){
              console.log(data.message);
              console.log("Hola");
              console.log(name);
              console.log(email);
              console.log(password);
            }

          });

  });

  return false;
});
