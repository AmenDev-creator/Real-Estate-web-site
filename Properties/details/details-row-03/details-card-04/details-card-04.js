


var sliderimages = Array.from(document.querySelectorAll('.slider-container img'));



var slidescount = sliderimages.length;


var currentslide =1;


var slidenumberelement = document.getElementById('slide-number')



var nextbutton = document.getElementById('next')
var previousbutton = document.getElementById('prev')


nextbutton.onclick = nextslide;
previousbutton.onclick = prevslide;


var paginationelement = document.createElement('ul');


paginationelement.setAttribute('id' , 'pagination-ul');



for (var i = 1 ; i <= slidescount; i++) {
  
var paginationitem = document.createElement('li');
  
  
paginationitem.setAttribute('data-index' , i);


paginationitem.appendChild(document.createTextNode(i));



paginationelement.appendChild(paginationitem);

}


document.getElementById('indicators').appendChild(paginationelement)




var paginationcreatedul = document.getElementById('pagination-ul');



var paginationbullets = Array.from(document.querySelectorAll('#pagination-ul li'));


for (var i = 0 ; i < paginationbullets.length; i++) {
    paginationbullets[i].onclick = function () {
        currentslide = parseInt(this.getAttribute('data-index'));
        thechecker();
    }
}


thechecker();




function nextslide() {
    
    if (nextbutton.classList.contains('disabled')) {
        return false;
    }else {
        currentslide++;
        thechecker();
    }

}



function prevslide() {
    
    if (previousbutton.classList.contains('disabled')) {
        return false;
    }else {
        currentslide--;
        thechecker();
    }
}



function thechecker () {

   
    slidenumberelement.textContent = 'Picture ' + (currentslide) + ' of ' + (slidescount);

    
    removeallactive();
    
   
    sliderimages[currentslide - 1].classList.add('active');

    
    paginationcreatedul.children[currentslide - 1].classList.add('active');
    
   

    if (currentslide == 1) {

   
   previousbutton.classList.add('disabled');
    }else {

    
   previousbutton.classList.remove('disabled');

    }

    
    if (currentslide == slidescount) {

      
      nextbutton.classList.add('disabled');
       }else {
   
       
      nextbutton.classList.remove('disabled');
   
       }
}



function removeallactive (){
    
    sliderimages.forEach(function (img) {
    img.classList.remove('active')


    });

   
    paginationbullets.forEach(function(bullet){
    bullet.classList.remove('active')
    });
}

/*animation*/
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(' .help-footer, .contact-us-footer , .projects , .text h1 , .text h2 , .price , .prop , .adress img , .form-container ,.form-container h2 , .form-container button , .form-container input ' );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

   
    const popup = document.getElementById('popup');
    popup.style.display = 'block';

    
    this.reset();

   
    setTimeout(() => {
        popup.style.display = 'none';
    }, 2000);
});