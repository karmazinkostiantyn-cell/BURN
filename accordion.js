var acc = document.getElementsByClassName("accordion");

//runs once on page start and adds 1 event listener to each button
for (let i = 0; i < acc.length; i++) {
  const anchor = acc[i].getBoundingClientRect();
  acc[i].addEventListener("click", function() { //the function actually does the heavylifting
    
    //close all the other accordions
    for (let j = 0; j < acc.length; j++) {
      if (acc[j] === this) continue;
      acc[j].classList.remove("active");
      acc[j].nextElementSibling.style.maxHeight = null;

    }
    
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;

    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      let bd = document.body.getBoundingClientRect();

      window.scrollTo(0, anchor.y);
      
    } 
  });
}