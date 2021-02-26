const board_border_color = 'black';
const board_background_color = 'white';
const snake_color = 'lightblue';
const snake_border = 'darkblue';

let snake = [
	{ x: 200, y: 200 },
	{ x: 190, y: 200 },
	{ x: 180, y: 200 },
	{ x: 170, y: 200 },
	{ x: 160, y: 200 },
];

let changing_direction = false;
let dx = 10;
let dy = 0;

const game_speed = 100;

const board = document.getElementById("board");
const board_ctx = board.getContext("2d");

main();

document.addEventListener("keydown", change_direction);
function main() {
	if (has_game_ended()) return;

	changing_direction = false;

	setTimeout(function loop() {
		clearCanvas();
		drawSnake();
		move();

		main();
	}, game_speed);
}