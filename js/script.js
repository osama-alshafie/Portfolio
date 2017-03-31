$(document).ready(function(){
    
    // scroll to top when reload or open page
    $("html,body").animate({scrollTop: 0}, 0);
    
    // navbar 
    var clickableElement = $(".navbar-inverse .navbar-nav > li");
    $(clickableElement).on('click',function(){
        if($(this).hasClass("active") == false) {
            clickableElement.removeClass("active");
            $(this).addClass("active");
        }
    });
    // scroll & its relation of navbar
    $(window).on('scroll',function(){
        if($(this).scrollTop() <= 599) {
            $("#nav_intro").click();
        }else if($(this).scrollTop() >= 600 && $(this).scrollTop() <= 1119) {
            $("#nav_about").click();
        }else if($(this).scrollTop() >= 1120 && $(this).scrollTop() <= 1759) {
            $("#nav_portfolio").click();
        }else if($(this).scrollTop() >= 1760) {
            $("#nav_contact").click();
        }
    });
    
});
//  validate email format
function validateEmail(email) {
    var re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return re.test(email);
}
//  validate phone format
function validatePhoneNumber(inputtxt) {  
   var phoneno = /^\d{12}$/;  
   return phoneno.test(inputtxt);
}
//  validate contact form input
function validateContact() {
    var userName = $('.contact_section input[name="username"]').val(),
        email    = $('.contact_section input[name="email"]').val(),
        phone    = $('.contact_section input[name="phone"]').val(),
        message  = $('.contact_section textarea').val();
    if(userName === "" || userName === null ) {
        alert("Please! Tell Me Who are you?");
        return false;
    }
    if(message === "" || message === null) {
        alert("Please! Tell Me What do you want?");
         return false;
    }
    if( (email === "" || email === null) && (phone === "" || phone === null) ) {
        alert("Email or Phone at least one is Required! ");
        return false;
    }
    if( !validateEmail(email) && !validatePhoneNumber(phone) ) {
        alert("Email or Phone is wrong!");
        return false;
    }
    return true;
}
