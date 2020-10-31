/*
The case of the Python Syndicate
Stage 3


Officer: 8957757
CaseNum: 301-2-83167089-8957757

Right kid let’s work out which of our ‘friends’ is connected to the syndicate.

- An object for Anna karpinski has been declared and initialised
- Modify the x and y parameters of each image command using the x and y
properties from the Anna karpinski object so the images remain at their correct
positions on the board.
- To do this you will need to combine add and subtract operators with the
relevant property for each parameter



*/

var photoBoard;
var rocky_kray_img;
var anna_karpinski_img;
var lina_lovelace_img;
var pawel_karpinski_img;
var cecil_karpinski_img;
var robbie_kray_img;

var anna_karpinski_object;




function preload()
{
	photoBoard = loadImage('photoBoard.png');
	rocky_kray_img = loadImage("krayBrothers1.png");
	anna_karpinski_img = loadImage("karpinskiWoman.png");
	lina_lovelace_img = loadImage("lina.png");
	pawel_karpinski_img = loadImage("karpinskiBros2.png");
	cecil_karpinski_img = loadImage("karpinskiBros1.png");
	robbie_kray_img = loadImage("krayBrothers2.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	anna_karpinski_object = {
		x: 408,
		y: 40,
		image: anna_karpinski_img
	};
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(anna_karpinski_object.image, anna_karpinski_object.x, anna_karpinski_object.y);

	//image(rocky_kray_img, 115, 40);
	image(rocky_kray_img, anna_karpinski_object.x - 293, anna_karpinski_object.y)
	//image(lina_lovelace_img, 701, 40);
	image(lina_lovelace_img, anna_karpinski_object.x + 293, anna_karpinski_object.y)
	//image(pawel_karpinski_img, 115, 309);
	image(pawel_karpinski_img, anna_karpinski_object.x  - 293, anna_karpinski_object.y + 269)
	//image(cecil_karpinski_img, 408, 309);
	image(cecil_karpinski_img, anna_karpinski_object.x, anna_karpinski_object.y + 269)
	//image(robbie_kray_img, 701, 309);
	image(robbie_kray_img, anna_karpinski_object.x + 293,anna_karpinski_object.y + 269)

}