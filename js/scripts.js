
function newItem() {

//Adding a new item to the list of items:

    //Set li variable to create a new element <li> in the DOM.
    let li = $('<li></li>');
    //Set inputValue variable to be the value of all elements with ID "input".
    let inputValue = $('#input').val();
    //Append inputValue as a child of li.
    li.append(inputValue);

//Crossing out an item from the list of items:

//Adding the delete button "X":

//Adding CLASS DELETE (DISPLAY: NONE) from the css:

//Reordering the items:

}