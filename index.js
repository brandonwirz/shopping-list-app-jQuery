$(function() {
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();

    const myListItem = $('.js-shopping-list-entry').val();

    $('.js-shopping-list-entry').val('');

    //adds new shopping list item 
    $('.shopping-list').append(
      `<li>
        <span class="shopping-item">${myListItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
  });
  //remove delete an item
  $('.shopping-list').on('click','.shopping-item-delete', function(event){
    $(this).closest('li').remove();
  });
  //toggles check and uncheck
  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });

});