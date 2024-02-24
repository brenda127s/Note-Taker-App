//Global variable to keep track of note count
var noteCount = 1;

function addNote() {
    //Get the input value
    var noteText = document.getElementById('note').value;

    if (noteText.trim() !== "") {
        //Create a new list item
        var li = document.createElement('li');

        //Create a label for the note
        var noteLabel = document.createElement('span');
        noteLabel.textContent = "Note " + noteCount + ": ";
        noteLabel.classList.add('note-label');


        //Create a span to hold the note text
        var noteSpan = document.createElement('span');
        noteSpan.textContent = noteText;

        //Create a delete button 
        var deleteButton = document.createElement('button');
        deleteButton.textContent = "X";
        deleteButton.addEventListener('click', function() {
            li.remove();
        })

        //Create a view details button
        var viewButton = document.createElement('button');
        viewButton.textContent = "View Details";
        viewButton.addEventListener('click', function() {
            alert(noteText);
        }) 

        //Append the note text, delete button, and view details button to the list item
        li.appendChild(noteLabel);
        li.appendChild(document.createElement('br')); //Add a line break
        li.appendChild(noteSpan);
        li.appendChild(document.createElement('br')); //Add a line break
        li.appendChild(deleteButton);
        li.appendChild(viewButton);

        //Append the list item to the note list 
        document.getElementById('noteList').appendChild(li);

        //Increment the note count
        noteCount++;

        //Clear the input field
        document.getElementById('note').value = '';
    } else {
        alert('Please enter a note.');
    }


}