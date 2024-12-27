//1//
$(document).ready(function(){

	$('#btnsa').click(function(){
		alert("Welcome");
	});


//2//
$('#btns').on('click', function(){
	$('h3').fadeIn();
});

$('#btnh').on('click', function(){
	$('h3').fadeOut();
});

$('#btnt').on('click', function(){
	$('h3').fadeToggle(1000);
});


})

//3//
$(document).ready(function(){
  $("p").click(function(){
    $(this).hide();
  });
});

//4//
$(document).ready(function(){
  $("#p1").hover(function(){
    alert("You entered p1!");
  },
  function(){
    alert("Bye! You now leave p1!");
  }); 
});

//5//
$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideDown("slow");
  });
});

//6//
$(document).ready(function(){
  $("button").click(function(){
    $("#p2").css("color", "red").slideUp(2000).slideDown(2000);
  });
});