(function ($) {

    // scroll functions
    $(window).scroll(function(e) {
    
        // add/remove class to navbar when scrolling to hide/show
        var scroll = $(window).scrollTop();
        if (scroll >= 150) {
            $('.navbar').addClass("navbar-hide");
        } else {
             $('.navbar').removeClass("navbar-hide");
        }
    
    });
    
})(jQuery);  


// select box of town with cheack box

var expanded = false;

function showCheckboxes() {
  var checkboxes = document.getElementById("checkboxes");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}


// change case of case-donate

function change(){

    var listDonate = document.getElementById("donate-kind"),
        
        list = document.getElementById("list"),

        button = document.getElementById('donate'),

        sub_menu = document.getElementById('sub_menu')


    if(listDonate.value == "general"){

       list.setAttribute('disabled' , true)
       sub_menu.setAttribute('disabled' , true)
    }
 
    else{
        
        list.removeAttribute('disabled')
        sub_menu.removeAttribute('disabled')
    }

    if(listDonate.value == "case"){

        button.textContent = "إظهر النتائج"
    }

    else {

        button.textContent = "تبرع"
    }

   
}


//change case of Baramg

function changed(){

    var social = document.getElementById("social"),

        development = document.getElementById("development"),

        medical = document.getElementById("medical"),

        economic = document.getElementById("economic")

        list = document.getElementById("list");

    document.getElementById("sub_menu").value= "";

 

    if(list.value=='one'){
        social.style.display ='block'
        development.style.display = 'none' 
        medical.style.display = 'none'
        economic.style.display = 'none'     
    }
        
    else if(list.value=='two'){
        social.style.display='none'
        economic.style.display = 'none' 
        economic.style.display = 'none' 
        development.style.display = 'block'    
    }

    else if(list.value=='three'){
        social.style.display='none'
        development.style.display = 'none' 
        economic.style.display = 'none' 
        medical.style.display = 'block' 
    }

    else{
        social.style.display='none'
        development.style.display = 'none' 
        medical.style.display = 'none'
        economic.style.display = 'block' 
    }
    
}
