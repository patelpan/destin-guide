// When a category is opened, bring its heading to the top so guests start at the beginning of that section.
  document.querySelectorAll('details.accordion').forEach(function(d){
    d.addEventListener('toggle', function(){
      if (d.open) {
        requestAnimationFrame(function(){
          d.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      }
    });
  });
