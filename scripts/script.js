$('#border').delay(500).animate({right:3+'px',width:98+'%'},400,function(){
	$('#border').animate({width:5+'px'}, 400)
})



$('.name:nth-child(1)').delay(1000).queue(function () { 
    $(this).css('transform', 'translateX(0)'); 
});

$('.name:nth-child(2)').delay(1200).queue(function () { 
    $(this).css('transform', 'translateY(0)'); 
});

$('.name:nth-child(3)').delay(1400).queue(function () { 
    $(this).css('transform', 'translateY(0)'); 
});

$('.name:nth-child(4)').delay(1600).queue(function () { 
    $(this).css('transform', 'translateX(0)');
    myf();
});

//$('#border').delay(3000).animate({top:50+'px'},1000)
// $('#border').delay(3000).fadeToggle(200).queue(
//     	function () {
//     		$(this).css({'left': '50%','display':'block'})});

function myf() {
	$('#border').delay(1000).fadeToggle(100, function() {
		$(this).css('left', '50%').delay(100).fadeToggle(100,
		function () 
			{
				$(this).animate({top:3+'px',height:4+'px'},200,
					function(){
						$(this).animate({width:98+'%',left:3+'px'},300,
							function(){
								$(this).css('background-color', 'transparent');
								nextf();
							}
						)
					}
				)
			}
		);
});
}


function nextf() {
	$('#border') .animate({top:250+'px'},400,
			function(){
				$(this).animate({width:30+'px',height:30+'px',left:45+'%'},200,
					function(){
						$(this).css({
							background: 'white',
							borderRadius: '50%',
							overflow:'hidden'
						});
						$('#border div').hide(0,function(){next2()});
					}
				)
			}
		)
}



$('#dev').hide(0);
$('#dev p').hide();

function next2() {
	$('#border').delay(400).animate({top:85+'px'}, 400);
	$('#dev').fadeIn(400).animate({top:105+'px'}, 400,
		function(){
			$('#border').animate({width:98+'%',height:4+'px',borderRadius:0,left:4+'px',top:92},200)
			next3();
		});
}
function next3() {
	var time = setInterval(logic,70);
		var index = 1;
		
	function logic() {
		var id = $('#p' + index);
		$(id).delay(100).slideDown(100);
		index++;
		if (index === 13) {
			clearInterval(time);
			next4();
		}
	}
	
}

function next4() {
	$('#border').animate({left:30+'%',width:40+'%'},200,function(){
		$(this).animate({left:4+'%',width:92+'%'}, 200,function(){
		    $(this).fadeOut('100', function() {
		        $('#name').css('border', '4px solid white');
		        });
		    })
	    })
}