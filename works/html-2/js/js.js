
$('#next').on('click',function(){
	console.log('next')
	$('.carousel').carousel('next');
});

$('#prev').on('click',function(){
	console.log('prev')
	$('.carousel').carousel('prev');
});

$('#carousel-example-generic').on('slide.bs.carousel', function () {
  console.log('lol');
  
})