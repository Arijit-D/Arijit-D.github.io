


    function copyText() {
  
        /* Copy text into clipboard */
        navigator.clipboard.writeText
            ("Arijitdhar401@gmail.com")
    };


    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
      anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior : "smooth"
        });
      });
    });


