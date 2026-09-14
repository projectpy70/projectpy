// ProjectPy — Progressive Enhancement JS
// Handles minor interactions that CSS alone can't do.

// Re-run on MkDocs instant navigation page transitions
document$.subscribe(function () {

  // Animate content on page load
  var content = document.querySelector('.md-content__inner');
  if (content) {
    content.style.animation = 'none';
    content.offsetHeight; // reflow
    content.style.animation = '';
  }

  // Add data-lang attribute to code blocks for language label display
  document.querySelectorAll('.highlight code[class]').forEach(function (code) {
    var match = code.className.match(/language-(\w+)/);
    if (match) {
      var highlight = code.closest('.highlight');
      if (highlight && !highlight.querySelector('.filename')) {
        highlight.setAttribute('data-lang', match[1]);
      }
    }
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});
