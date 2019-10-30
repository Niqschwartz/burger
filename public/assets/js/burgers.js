// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devour-form").on("submit", function(event) {
      event.preventDefault();
      var burger_id = $(this).children(".burger_id").val();
      console.log(burger_id)
      // Send the PUT request.
      $.ajax({
        method: "PUT",
        url: "/burger/" +burger_id
      }).then(function(data){
        location.reload();
      })
    });
  
  //   $(".create-form").on("submit", function(event) {
  //     // Make sure to preventDefault on a submit event.
  //     event.preventDefault();
  
  //     var newCat = {
  //       name: $("#ca").val().trim(),
  //       sleepy: $("[name=sleepy]:checked").val().trim()
  //     };
  
  //     // Send the POST request.
  //     $.ajax("/api/cats", {
  //       type: "POST",
  //       data: newCat
  //     }).then(
  //       function() {
  //         console.log("created new cat");
  //         // Reload the page to get the updated list
  //         location.reload();
  //       }
  //     );
  //   });
  
  //   $(".delete-cat").on("click", function(event) {
  //     var id = $(this).data("id");
  
  //     // Send the DELETE request.
  //     $.ajax("/api/cats/" + id, {
  //       type: "DELETE"
  //     }).then(
  //       function() {
  //         console.log("deleted cat", id);
  //         // Reload the page to get the updated list
  //         location.reload();
  //       }
  //     );
  //   });
  });