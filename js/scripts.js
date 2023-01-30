
function newItem() {

//Adding a new item to the list of items:

    //Set li variable to create a new element <li> in the DOM.
    let li = $('<li></li>');
    //Set inputValue variable to be the value of all elements with ID "input".
    let inputValue = $('#input').val();
    //Append inputValue as a child of li.
    li.append(inputValue);

    if(inputValue === '') {
        alert('You must write something!');
      } else {
        //Append li as a child of all elements with ID "list".
        $('#list').append(li);
    }

//Crossing out an item from the list of items:

    //Add event listener, so when user double clicks on li element, li element toggles on/off its "strike" class(targeted by CSS).
    li.on('dblclick', function crossOut() {
        li.toggleClass('strike');
    });

//Adding the delete button "X":

    //Set crossOutButton variable to create a new element <crossOutButton> in the DOM.
    let crossOutButton =$('<crossOutButton></crossOutButton>');
    //Create a new node with inner text "X", and append it as a child of crossOutButton.
    crossOutButton.append(document.createTextNode('X'));
    //Append crossOutButton as a child of li.
    li.append(crossOutButton);

//Adding CLASS DELETE (DISPLAY: NONE) from the css:

    //Add event listener, so when user clicks on crossOutButton element, li element is assigned a "delete" class(targeted by CSS).
    crossOutButton.on('click', deleteListItem);
    function deleteListItem() {
        li.addClass('delete')
    }

//Reordering the items:

    //Allows all elements with ID "list" to be sortable.
    $('#list').sortable();

}