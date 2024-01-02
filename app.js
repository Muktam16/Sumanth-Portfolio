var typed = new Typed('.text', {
    strings: ['Frontend Developer', 'Manual Tester'],
    typeSpeed: 50,
    backDelay: 50,
    backSpeed : 50,
    loop:true
  });

  //////sticky menu bar///////////////

  const header = document.querySelector('header');
  window.addEventListener("scroll", function(){
    header.classList.toggle("sticky",this.window.scrollY > 50)
  })

  ///////toogle/////
  let menuIcon = document.querySelector("#menu-icon");
        let menuItems = document.querySelector(".menu-items");

        menuIcon.addEventListener("click", () => {
            menuIcon.classList.toggle("bx-x");
            menuItems.classList.toggle("open");
        });

window.onscroll = ()=>{
  menuIcon.classList.remove("bx-x");
  menuItems.classList.remove("open");
}

/*contact form */

  const scriptURL = 'https://script.google.com/macros/s/AKfycbw_v4fybO-FkOG320skbRum0tcP7JLucGxXSmD_4SNqtH4al7hI3T0AsehCF6dUZVeTbA/exec'
  const form = document.forms['submit-to-google-sheet']
  const message = document.getElementById("message")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        message.innerHTML = "Message Sent Successfully!  :)"
        setTimeout(function(){
          message.innerHTML =""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
