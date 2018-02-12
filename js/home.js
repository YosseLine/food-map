$(document).ready(function() {
  var $ButtonSelectFood = $('select');
  var $foodOption = $ButtonSelectFood.val();
  var $principalView = $('#principal-view');
  var $mexicanFood = $('#mexican-food');
  var $koreanFood = $('#korean-food');
  var $japaneseFood = $('#japanese-food');
  var $peruvianFood = $('#peruvian-food');
  var $venezuelanFood = $('#venezuelan-food');
  var $imagesFood = $('.imagen-circle');


  /* Filtrando categorias*/
  $ButtonSelectFood.on('change', function() {
    var foodOption = $(this).val();
    for (var food in data) {
      if (foodOption === 'mexico') {
        $principalView.addClass('hidden');
        $('#food-list').removeClass('hidden');
        for (var i = 0; i <= data['comida mexicana']; i++) {
          console.log(data['comida mexicana']);
          for (var j = 0; j <= data[i].length; i++) {
            console.log(data[i]);
            for (var x = 0; x <= $('#food-list img').length; i++) {
              $('food-list img')[x].src = data[i];
            }
          }
        }
      }
    }
    /* if (foodOption === 'mexico') {
      $mexicanFood.removeClass('hidden');
      $('#korean-food, #japanese-food, #peruvian-food, #venezuelan-food, #principal-view').addClass('hidden');
    } else if (foodOption === 'corea') {
      $koreanFood.removeClass('hidden');
      $('#mexican-food, #japanese-food, #peruvian-food, #venezuelan-food, #principal-view, #principal-view').addClass('hidden');
    } else if (foodOption === 'japon') {
      $japaneseFood.removeClass('hidden');
      $('#korean-food, #mexican-food, #peruvian-food, #venezuelan-food, #principal-view, #principal-view').addClass('hidden');
    } else if (foodOption === 'peru') {
      $peruvianFood.removeClass('hidden');
      $('#korean-food, #japanese-food, #mexican-food, #venezuelan-food, #principal-view').addClass('hidden');
    } else if (foodOption === 'venezuela') {
      $venezuelanFood.removeClass('hidden');
      $('#korean-food, #japanese-food, #peruvian-food, #mexican-food, #principal-view').addClass('hidden');
    } else if (foodOption === 'principal') {
      $principalView.removeClass('hidden');
      $('#korean-food, #japanese-food, #peruvian-food, #mexican-food, #venezuelanFood').addClass('hidden');
    }*/
  });

  // Mouseover
  $imagesFood.on('mouseover', function() {
    $(this).addClass('filter');
  }).mouseout(function() {
    $(this).removeClass('filter');
  });

  // Modales
  $('.my-modals').on('shown.bs.modal', function() {
    $('#myInput').focus();
  });
});
