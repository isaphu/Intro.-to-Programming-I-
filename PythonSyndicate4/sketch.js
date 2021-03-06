/*
The case of the Python Syndicate
Stage 4

Officer: 8957757
CaseNum: 301-3-47208239-8957757

To really crack the Python Syndicate we need to go in deep. I want to understand
all the connections. I have the data but it’s a mess and I need you to sort it out.

Organise each syndicate member into an object. I’ve done one for you as an example.
Be sure to replicate the naming conventions for your own objects.
Use image command together with the objects you created to organise the mugshots.

- Once you have done this you can comment out or delete the old variables.

*/

var photoBoard;
var robbieKrayImage;
var bonesKarpinskiImage;
var rockyKrayImage;
var pawelKarpinskiImage;
var linaLovelaceImage;
var cecilKarpinskiImage;

var rockyKrayObject;
//declare your new objects below
var robbieKrayObject;
var bonesKarpinskiObject;
var pawelKarpinskiObject;
var linaLovelaceObject;
var cecilKarpinskiObject;


//var robbieKrayXLocation = 115;
//var robbieKrayYLocation = 40;
//var bonesKarpinskiXLocation = 408;
//var bonesKarpinskiYLocation = 40;
//var pawelKarpinskiXLocation = 115;
//var pawelKarpinskiYLocation = 309;
//var linaLovelaceXLocation = 408;
//var linaLovelaceYLocation = 309;
//var cecilKarpinskiXLocation = 701;
//var cecilKarpinskiYLocation = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	robbieKrayImage = loadImage("krayBrothers2.png");
	bonesKarpinskiImage = loadImage("karpinskiDog.png");
	rockyKrayImage = loadImage("krayBrothers1.png");
	pawelKarpinskiImage = loadImage("karpinskiBros2.png");
	linaLovelaceImage = loadImage("lina.png");
	cecilKarpinskiImage = loadImage("karpinskiBros1.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	rockyKrayObject = {
		x: 701,
		y: 40,
		image: rockyKrayImage
	};

	//define your new objects below
	robbieKrayObject = {
		x: 115,
		y: 40,
		image: robbieKrayImage
	};
	bonesKarpinskiObject = {
		x: 408,
		y: 40,
		image: bonesKarpinskiImage
	};
	pawelKarpinskiObject = {
		x: 115,
		y: 309,
		image: pawelKarpinskiImage
	};
	linaLovelaceObject = {
		x: 408,
		y: 309,
		image: linaLovelaceImage
	};
	cecilKarpinskiObject = {
		x: 701,
		y: 309,
		image: cecilKarpinskiImage
	}
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(robbieKrayObject.image, robbieKrayObject.x, robbieKrayObject.y);
	
	image(bonesKarpinskiObject.image, bonesKarpinskiObject.x, bonesKarpinskiObject.y);
	
	image(rockyKrayObject.image, rockyKrayObject.x, rockyKrayObject.y);
	
	image(pawelKarpinskiObject.image, pawelKarpinskiObject.x, pawelKarpinskiObject.y);
	
	image(linaLovelaceObject.image, linaLovelaceObject.x, linaLovelaceObject.y);
	
	image(cecilKarpinskiObject.image, cecilKarpinskiObject.x, cecilKarpinskiObject.y);


}