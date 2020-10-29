/*

Officer: 8957757
CaseNum: 101-3-92497003-8957757

Case 101 - The Case of Lina Lovelace
Stage 4 - The Plaza Hotel

Okay this place is more Lina’s style. Now’s our chance to find out the root of all
of this. Lets see who is Lina meeting.

Identify Lina by drawing a Gold filled rectangle with a Navy outline.
She’s the woman in the red dress of course.

Identify the man with the monocle smoking the cigar by drawing a Fire Brick filled
rectangle with a Spring Green outline around him.

Identify the man reading the newspaper by drawing a Forest Green filled rectangle
with a Chocolate outline around him.

Identify the woman with the dog by drawing a Sienna filled rectangle with a
Brown outline around her. Make sure you include the dog too.

The rectangles should cover the targets as accurately as possible without
including anything else.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use r,g,b values between 0 and 255. Set alpha to 100 for some opacity.
	stroke() Use r,g,b values between 0 and 255.

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
	strokeWeight(2);
}

function draw()
{
	image(img,0,0);

	//Write your code below here ...
	stroke(0,0,128);
	fill(255,215,0,100);
	rect(1467,323,215,430);
	
	stroke(0,255,127);
	fill(178,34,34,100);
	rect(56,484,240,320);
	
	stroke(210,105,30);
	fill(34,139,34,100);
	rect(465,403,190,373);
	
	stroke(165,42,42);
	fill(160,82,45,100);
	rect(1684,301,290,635);

}
