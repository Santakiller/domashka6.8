'use strict'

var ProgressValue = 0,
	FirstButtonValue = 1,
	SecondButtonValue = 3,
	ThirdButtonValue = 7;
var ProgressBarWidth = 0;

console.log ('Значение ProgressBarWidth: ' + ProgressBarWidth);


$("#FirstButton").click(function(){
	ProgressValue = ProgressValue + FirstButtonValue;
	console.log ('Нажата первая кнопка, значение пргресс-бара: ' + ProgressValue + '%');
	if (ProgressValue >= 100) {
		ProgressValue = 100;
		reboot ();
	};
	drawingBar ();
});

$('#SecondButton').click(function(){
	ProgressValue = ProgressValue + SecondButtonValue;
	console.log ('Нажата вторая кнопка, значение пргресс-бара: ' + ProgressValue + '%');
	if (ProgressValue >= 100) {
		ProgressValue = 100;
		reboot ();
	};
	drawingBar ();
});

$('#ThirdButton').click(function(){
	ProgressValue = ProgressValue + ThirdButtonValue;
	console.log ('Нажата третья кнопка, значение пргресс-бара: ' + ProgressValue + '%');
	if (ProgressValue >= 100) {
		ProgressValue = 100;
		drawingBar ();
		reboot ();
	};

	drawingBar ();
});

function drawingBar () {
	ProgressBarWidth = ProgressValue;
	$('#ProgressBar').width(ProgressBarWidth + '%');
	console.log ('Значение ProgressBarWidth: ' + ProgressBarWidth);
};

function reboot () {
	ProgressValue = 0;
	console.log ('Значение пргресс-бара сброшено и равно ' + ProgressValue + '%');
	alert ('Прогресс-бар заполнен!');
};


console.log ('Скрипт подгрузился');


