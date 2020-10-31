/*
The case of the Python Syndicate
Stage 1

Officer: 8957757
CaseNum: 301-0-22365310-8957757

I gotta give it to you kid, you’ve made an excellent start, but now it’s time
to take things up a level. For some time I’ve suspected that there’s something
big going down in Console City.

These cases that we’ve been working are all connected somehow. I need to use
that considerable brain of yours to work it all out. Let’s start by laying out
who we know.

Place each mugshot in its designated position by doing the following:

- Create a new variable for the X and Y coordinates of each mugshot.
    - One has already been done for you.
    - Make sure you use the same style and format for the variable name.
- Find coordinates for the mugshot and initialise your variable with these
values.
- Replace the hard-coded constants in the corresponding image command so that
the mugshot appears in its designated position.

*/

var photoBoard;
var rockyKrayImage;
var pawelKarpinskiImage;
var annaKarpinskiImage;
var robbieKrayImage;
var cecilKarpinskiImage;
var countessHamiltonImage;



//declare your new variables below
var cecilKarpinskiXCoordinate = 408;
var cecilKarpinskiYCoordinate = 309;
var rockyKrayXCoordinate = 115;
var rockyKrayYCoordinate = 40;
var pawelKarpinskiXCoordinate = 408;
var pawelKarpinskiYCoordinate = 40;
var annaKarpinskiXCoordinate = 701;
var annaKarpinskiYCoordinate = 40;
var robbieKrayXCoordinate = 115;
var robbieKrayYCoordinate = 309;
var countessHamiltonXCoordinate = 701;
var countessHamiltonYCoordinate = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	rockyKrayImage = loadImage("krayBrothers1.png");
	pawelKarpinskiImage = loadImage("karpinskiBros2.png");
	annaKarpinskiImage = loadImage("karpinskiWoman.png");
	robbieKrayImage = loadImage("krayBrothers2.png");
	cecilKarpinskiImage = loadImage("karpinskiBros1.png");
	countessHamiltonImage = loadImage("countessHamilton.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);



	//And update these image commands with your x and y coordinates.
	image(cecilKarpinskiImage, cecilKarpinskiXCoordinate,cecilKarpinskiYCoordinate);
	image(rockyKrayImage, rockyKrayXCoordinate, rockyKrayYCoordinate);
	image(pawelKarpinskiImage, pawelKarpinskiXCoordinate, pawelKarpinskiYCoordinate);
	image(annaKarpinskiImage, annaKarpinskiXCoordinate, annaKarpinskiYCoordinate);
	image(robbieKrayImage, robbieKrayXCoordinate, robbieKrayYCoordinate);
	image(countessHamiltonImage, countessHamiltonXCoordinate, countessHamiltonYCoordinate);

}