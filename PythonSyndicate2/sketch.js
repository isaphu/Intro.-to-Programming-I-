/*
The case of the Python Syndicate
Stage 2


Officer: 8957757
CaseNum: 301-1-92965236-8957757

- Word on the street is that there is a new gang in town - The Python Syndicate.
It seems my bones were correct on this one. I need you to organise the gang
around the suspected leader Anna karpinski

- The variables for Anna karpinski have been declared and
initialised.
- Modify the x and y parameters of each image command using these two variables
so the images maintain their correct positions their correct positions on the board.
- To do this you will need to combine add and subtract operators with variables
Anna karpinski for for each parameter.
- Do not create any new variables
- Do not add any additional commands


*/

var photoBoard;
var robbie_kray_image;
var pawel_karpinski_image;
var anna_karpinski_image;
var lina_lovelace_image;
var bones_karpinski_image;
var rocky_kray_image;


var anna_karpinski_x_coordinate = 701;
var anna_karpinski_y_coordinate = 40;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	robbie_kray_image = loadImage("krayBrothers2.png");
	pawel_karpinski_image = loadImage("karpinskiBros2.png");
	anna_karpinski_image = loadImage("karpinskiWoman.png");
	lina_lovelace_image = loadImage("lina.png");
	bones_karpinski_image = loadImage("karpinskiDog.png");
	rocky_kray_image = loadImage("krayBrothers1.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(anna_karpinski_image, anna_karpinski_x_coordinate, anna_karpinski_y_coordinate);

	//image(robbie_kray_image, 115, 40);
	image(robbie_kray_image, anna_karpinski_x_coordinate - 586, anna_karpinski_y_coordinate);
	//image(pawel_karpinski_image, 408, 40);
	image(pawel_karpinski_image, anna_karpinski_x_coordinate - 293, anna_karpinski_y_coordinate);
	//image(lina_lovelace_image, 115, 309);
	image(lina_lovelace_image, anna_karpinski_x_coordinate - 586, anna_karpinski_y_coordinate + 269);
	
	
	//image(bones_karpinski_image, 408, 309);
	image(bones_karpinski_image, anna_karpinski_x_coordinate - 293, anna_karpinski_y_coordinate + 269);
	//image(rocky_kray_image, 701, 309);
	image(rocky_kray_image, anna_karpinski_x_coordinate, anna_karpinski_y_coordinate + 269);

}
























