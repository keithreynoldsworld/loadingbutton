$(document).on('ready', function(){

	$('button').on('click',function(){

		 $('button').html('LOADING');
		 $('button').attr('disabled',true);

		 function creepy(){$('button').attr('disabled',false);$('button').html('submit');}
		 
		 setTimeout(creepy, 5000);
	});











});