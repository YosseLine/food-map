$(document).ready(function() {
  var $ButtonSelectFood = $('#button-select');
  var $principalView = $('#principal-view');
  var $mexicanFood = $('#mexican-food');
  var $koreanFood = $('#korean-food');
  var $japaneseFood = $('#japanese-food');
  var $peruvianFood = $('#peruvian-food');
  var $venezuelanFood = $('#venezuelan-food');
  var $boxImage = $('#box-image');

  /* Filtrando categorias*/
  $ButtonSelectFood.on('change', function() {
    var foodOption = $(this).val();
    console.log($(this).val());
    if (foodOption === 'mexico') {
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
    }
  });
});
