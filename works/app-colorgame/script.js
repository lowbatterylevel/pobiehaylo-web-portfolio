var numSquares = 6,
	colors = [],
	pickedColor,
	h1 = document.querySelector('h1'),
	squares = document.querySelectorAll('.square'),
	colorDisplay = document.getElementById('color'),
	resetButton = document.querySelector('#reset'),
	modeButtons = document.querySelectorAll('.mode'),
	messageDisplay = document.getElementById('message');

init();

function init(){
	resetButton.addEventListener('click', reset);
	setupModeButtons();
	setupColorsSquares();
	reset();
}

function setupModeButtons(){
	for(var i=0;i<modeButtons.length;i++){
		modeButtons[i].addEventListener('click',function(){
			modeButtons[0].classList.remove('selected');
			modeButtons[1].classList.remove('selected');
			this.classList.add('selected');
			this.textContent === 'Easy' ? numSquares=3: numSquares=6;
			reset();
		})
	}

}

function setupColorsSquares(){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].addEventListener('click',function(){
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor){
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = 'Play again?';
				messageDisplay.textContent = 'Correct!';
				for(var i=0;i<squares.length;i++){
					squares[i].style.backgroundColor = clickedColor;
				}
			}
			else{
				this.style.backgroundColor = '#232323';
				messageDisplay.textContent = 'Try again';
			}
		});
	}
}

function reset(){
	h1.style.backgroundColor = 'steelblue';
	messageDisplay.textContent = '';
	resetButton.textContent = 'New Colors';
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.display = 'block';
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = 'none';
		}
	}
}

//Functions for variables
function generateRandomColors(num) {
	var arr=[];
	for(var i=0;i<num;i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random()*256),
		g = Math.floor(Math.random()*256),
		b = Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

