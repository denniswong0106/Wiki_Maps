$(() => {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((users) => {
    for(user of users) {
      $("<div>").text(user.name).appendTo($("body"));
    }
  });;
});

$(document).ready(function() {

  $('.favoriteIcon').click(function() {
    if ($(this).hasClass('favorited')) {
      $(this.children).removeClass('fas');
      $(this.children).addClass('far');
      $(this).removeClass('favorited')
    } else {
      $(this.children).removeClass('far');
      $(this.children).addClass('fas');
      $(this).addClass('favorited')
    }
  })





})
