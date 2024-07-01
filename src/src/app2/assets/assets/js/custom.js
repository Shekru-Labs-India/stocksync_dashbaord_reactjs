document.addEventListener("DOMContentLoaded", function() {
    // Get the dropdown element
    var dropdown = document.querySelector('.nav-item.dropdown');
  
    // Show dropdown on mouseover
    dropdown.addEventListener('mouseenter', function() {
      var dropdownMenu = this.querySelector('.dropdown-menu');
      var bsDropdown = new bootstrap.Dropdown(this.querySelector('.dropdown-toggle'));
      bsDropdown.show();
    });
  
    // Hide dropdown on mouseout
    dropdown.addEventListener('mouseleave', function() {
      var bsDropdown = new bootstrap.Dropdown(this.querySelector('.dropdown-toggle'));
      bsDropdown.hide();
    });
  });
  