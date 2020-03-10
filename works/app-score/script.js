var p1Button = document.getElementById('p1'),
	p2Button = document.querySelector('#p2'),
	resetButton = document.querySelector('#reset'),
	numInput = document.querySelector('input'),
	p1Display = document.querySelector('#p1Display'),
	p2Display = document.querySelector('#p2Display'),
	maxScoreDisplay = document.querySelector('p span');
	p1Score = 0,
	p2Score = 0,
	gameOver = false,
	maxScore = 5;

p1Button.addEventListener('click', function(){
	if(!gameOver){
		p1Score++;
		if(p1Score === maxScore){
			gameOver = true;
			p1Display.classList.add('win')
		}
		p1Display.textContent = p1Score;
	}
});

p2Button.addEventListener('click', function(){
	if(!gameOver){
		p2Score++;
		if(p2Score === maxScore){
			gameOver = true;
			p2Display.classList.add('win');
		}
		p2Display.textContent = p2Score;
	}
});

resetButton.addEventListener('click', function(){
	reset();
});

numInput.addEventListener('change',function(){
	maxScore = Number(this.value);
	maxScoreDisplay.textContent = maxScore;
	reset();
})

function reset(){
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove('win');
	p2Display.classList.remove('win');
	gameOver = false;
}