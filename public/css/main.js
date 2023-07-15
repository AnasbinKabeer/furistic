// Get references to the edit button and the popup
var editButton = document.getElementById("editButton");
var popup = document.getElementById("popup");
var cancelButton=document.getElementById("cancelButton")

// Add an event listener to the edit button
editButton.addEventListener("click", function() {
  // Add the "hidden" class to the popup
  popup.classList.remove("hidden");
});

cancelButton.addEventListener("click", function() {
    // Add the "hidden" class to the popup
    popup.classList.add("hidden");
  });