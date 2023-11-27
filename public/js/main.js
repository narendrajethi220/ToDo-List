document.addEventListener("DOMContentLoaded", function () {
  var checkboxes = document.querySelectorAll('.item input[type="checkbox"]');

  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
      var paragraph = this.nextElementSibling; // Get the next sibling, which is the <p> element

      if (this.checked) {
        paragraph.classList.add("completed");
      } else {
        paragraph.classList.remove("completed");
      }
    });
  });
});
