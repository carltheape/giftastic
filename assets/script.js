$(document).ready(function(){

var kitties = ["Nyan Cat", "Keyboard Cat", "lil Bub", "Grumpy Cat", "Maru", "Pusheen", "Didga", "catzilla", "Long Cat", "Henri cat", "Colonel Meow" ];
      var moving = false;
      var calling ;

      function displayCatInfo() {

        var kitty = $(this).attr("data-name");
        console.log("kitty var=" + kitty);
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + kitty + "&api_key=dc6zaTOxFJmzC";


        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
          calling = response;
          console.log(response.data[0].images.original.url);


       $('#cat-view').html('' ); 

       $('#cat-view').append("<div id='cat1' class='col-xs-3'>");
       $('#cat1').append('<img id="catpic1" class="catPic" value = '+0+' src=' + response.data[0].images.original_still.url +'>');
       $('#cat1').append('<span class="rating"> Rated: ' + response.data[0].rating +'</span>' );

      $('#cat-view').append("<div id='cat2' class='col-xs-4'>");
       $('#cat2').append('<img class="catPic" value = '+1+' src=' + response.data[1].images.original_still.url +'>' );
       $('#cat2').append('<span class="rating"> Rated: ' + response.data[1].rating +'</span>' );

       $('#cat-view').append("<div id='cat3' class='col-xs-3'>");
       $('#cat3').append('<img class="catPic" value = '+2+' src=' + response.data[2].images.original_still.url +'>' );
       $('#cat3').append('<span class="rating"> Rated: ' + response.data[2].rating +'</span>' );

       $('#cat-view').append("<div id='cat4' class='col-xs-4'>");
       $('#cat4').append('<img class="catPic" value = '+3+' src=' + response.data[3].images.original_still.url +'>' );
       $('#cat4').append('<span class="rating"> Rated: ' + response.data[3].rating +'</span>' );
       
       $('#cat-view').append("<div id='cat5' class='col-xs-3'>");
       $('#cat5').append('<img class="catPic" value = '+4+' src=' + response.data[4].images.original_still.url +'>' );
       $('#cat5').append('<span class="rating"> Rated: ' + response.data[4].rating +'</span>' );

       $('#cat-view').append("<div id='cat6' class='col-xs-4'>");
       $('#cat6').append('<img class="catPic" value = '+5+' src=' + response.data[5].images.original_still.url +'>' );
       $('#cat6').append('<span class="rating"> Rated: ' + response.data[5].rating +'</span>' );

       $('#cat-view').append("<div id='cat7' class='col-xs-3'>");
       $('#cat7').append('<img class="catPic" value = '+6+' src=' + response.data[6].images.original_still.url +'>' );
       $('#cat7').append('<span class="rating"> Rated: ' + response.data[6].rating +'</span>' );

       $('#cat-view').append("<div id='cat8' class='col-xs-4'>");
       $('#cat8').append('<img class="catPic" value = '+7+' src=' + response.data[7].images.original_still.url +'>' );
       $('#cat8').append('<span class="rating"> Rated: ' + response.data[7].rating +'</span>' );

       $('#cat-view').append("<div id='cat9' class='col-xs-3'>");
       $('#cat9').append('<img class="catPic" value = '+8+' src=' + response.data[8].images.original_still.url +'>' );
       $('#cat9').append('<span class="rating"> Rated: ' + response.data[8].rating +'</span>' );

       $('#cat-view').append("<div id='cat10' class='col-xs-4'>");
       $('#cat10').append('<img class="catPic" value = '+9+' src=' + response.data[9].images.original_still.url +'>' );
       $('#cat10').append('<span class="rating"> Rated: ' + response.data[9].rating +'</span>' );
        });

      }

            function renderButtons() {
        $("#buttons-view").empty();

        for (i = 0; i < kitties.length; i++) { 
          console.log(kitties[i]);
        $('#buttons-view').append('<button class="cat btn btn-success" data-name="' + kitties[i] + '">' + kitties[i] + '</button>');

}

      }

      $("#add-cat").on("click", function(event) {
        event.preventDefault();

        var newKitty = $('#cat-input').val().trim();
        console.log(newKitty);
        kitties.push(newKitty);

        renderButtons();
      });



      $(document).on("click", ".cat", displayCatInfo);

      $(document).on("click", ".catPic", function playKittyGif(){
        {

        if (moving == false){
          $(this).attr("src", calling.data[$(this).attr("value")].images.original.url);
          moving = true;
        }
        else {
          $(this).attr("src", calling.data[$(this).attr("value")].images.original_still.url);
          moving = false;
        }
      }

      });

      renderButtons();

      $('.btn').mouseenter(function () {
    $(this).css({border: '0 solid #f37736'}).animate({
        borderWidth: 2
    }, 500);
}).mouseleave(function () {
     $(this).animate({
        borderWidth: 0
    }, 500);
});

});