const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  });
  
  document.querySelectorAll('.delay').forEach(section => {
    observer.observe(section);
  });





  let box1 = document.getElementsByClassName('box-1');
  let box2 = document.querySelectorAll('.box-2')
  let span = document.getElementsByClassName('span');
  let Pa = document.getElementsByClassName('P');

  for (let i = 0; i < box2.length; i++) {
    box2[i].addEventListener("click", function() {
      if (Pa[i].style.display === "none") {
        Pa[i].style.display = "block";
      }else{
      console.log("worked")
      }
    })
  }