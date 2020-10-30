/*

Officer: 8957757
CaseNum: 202-1-20415402-8957757

Case 202 - The case of Bob and Daisy - stage 2

Here’s another letter kid. This time it’s from Daisy (aka. Woz).
Decode it to uncover more about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Orange filled text with a Sienna outline.
Only comment out text commands - leave fill & stroke commands uncommented.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	letterFont = loadFont('Melissa.otf');
}

function setup()
{
	createCanvas(666,753);
	textFont(letterFont);
	textSize(35);
}

function draw()
{
	background(255);

	fill(34,139,34);
	stroke(0,0,139);
	//text("fee", 114,456);
	fill(205,133,63);
	stroke(0,139,139);
	//text("desolate.", 209,456);
	fill(255,105,180);
	stroke(0,255,255);
	//text("Forever", 11,569);
	fill(255,99,71);
	stroke(255,0,255);
	//text("swift", 105,499);
	fill(0,0,255);
	stroke(184,134,11);
	//text("miss", 119,105);
	fill(127,255,212);
	stroke(0,255,255);
	//text("How", 122,144);
	fill(50,205,50);
	stroke(0,255,0);
	//text("Daisy", 11,639);
	fill(250,128,114);
	stroke(0,255,255);
	//text("ght", 553,217);
	fill(127,255,212);
	stroke(0,255,127);
	//text("your", 16,499);
	fill(106,90,205);
	stroke(178,34,34);
	//text("it", 499,144);
	fill(255,0,255);
	stroke(128,0,128);
	//text("ng", 147,35);
	fill(255,165,0);
	stroke(128,0,0);
	//text("ni", 521,217);
	fill(135,206,250);
	stroke(0,255,255);
	//text("kissed", 151,181);
	fill(186,85,211);
	stroke(0,139,139);
	//text("x", 119,639);
	fill(128,0,0);
	stroke(0,191,255);
	//text("my", 281,416);
	fill(218,165,32);
	stroke(255,0,255);
	//text("arms.", 123,217);
	fill(176,224,230);
	stroke(153,50,204);
	//text("I", 231,217);
	fill(240,128,128);
	stroke(178,34,34);
	//text("united", 11,374);
	stroke(128,128,0);
	//text("spring,", 481,374);
	fill(160,82,45);
	stroke(184,134,11);
	//text("you.", 490,254);
	fill(165,42,42);
	stroke(0,206,209);
	//text("Even", 271,374);
	fill(64,224,208);
	stroke(0,0,255);
	//text("ain", 177,374);
	fill(135,206,250);
	stroke(0,206,209);
	//text("I'm", 381,456);
	fill(160,82,45);
	stroke(220,20,60);
	//text("sky,", 12,254);
	fill(34,139,34);
	stroke(199,21,133);
	//text("store", 548,293);
	fill(160,82,45);
	stroke(139,0,139);
	//text("How", 11,105);
	fill(238,130,238);
	stroke(220,20,60);
	//text("think", 262,254);
	fill(124,252,0);
	stroke(0,100,0);
	//text("months", 318,144);
	fill(127,255,212);
	stroke(128,0,0);
	//text("darli", 70,35);
	fill(250,128,114);
	stroke(255,0,255);
	//text("we", 15,181);
	fill(186,85,211);
	stroke(107,142,35);
	//text("up", 351,217);
	fill(255,165,0);
	stroke(160,82,45);
	text("the", 546,105);
	text("town", 17,456);
	text("place", 17,144);
	fill(220,20,60);
	stroke(220,20,60);
	//text("hold", 455,181);
	fill(160,82,45);
	stroke(25,25,112);
	//text("you", 541,181);
	fill(255,0,255);
	stroke(148,0,211);
	//text("will", 372,337);
	fill(144,238,144);
	stroke(0,139,139);
	//text("?", 272,181);
	fill(0,250,154);
	//text("this", 15,337);
	fill(255,165,0);
	stroke(0,191,255);
	//text("er", 283,293);
	fill(124,252,0);
	//text("the", 452,217);
	fill(0,128,128);
	stroke(220,20,60);
	//text("this", 441,416);
	fill(100,149,237);
	//text("I", 384,293);
	fill(0,0,139);
	stroke(139,0,0);
	//text("wit", 17,416);
	//text("long", 208,293);
	fill(238,232,170);
	stroke(0,128,128);
	//text("My", 8,35);
	fill(205,133,63);
	stroke(165,42,42);
	//text("and", 92,254);
	fill(25,25,112);
	stroke(0,0,255);
	//text("in", 369,374);
	stroke(255,140,0);
	//text("ls", 170,456);
	fill(178,34,34);
	stroke(0,255,0);
	//text("to", 409,181);
	fill(0,250,154);
	stroke(210,105,30);
	//text("?", 241,374);
	fill(255,127,80);
	stroke(218,165,32);
	//text("on", 596,456);
	fill(184,134,11);
	stroke(128,0,0);
	//text("to", 502,293);
	fill(255,165,0);
	stroke(184,134,11);
	//text("I", 168,254);
	fill(139,0,0);
	stroke(0,128,128);
	//text("When", 260,337);
	fill(64,224,208);
	stroke(0,255,0);
	//text("do", 330,293);
	fill(72,209,204);
	stroke(184,134,11);
	//text("long", 323,181);
	fill(255,165,0);
	stroke(160,82,45);
	text("is", 460,144);
	fill(34,139,34);
	stroke(107,142,35);
	//text("I", 302,181);
	fill(127,255,212);
	stroke(255,0,255);
	//text("having", 210,105);
	fill(135,206,250);
	stroke(255,165,0);
	//text("r", 198,499);
	fill(250,128,114);
	stroke(255,140,0);
	//text("?", 230,337);
	fill(127,255,212);
	stroke(0,0,128);
	//text("at", 406,217);
	fill(250,128,114);
	stroke(255,165,0);
	//text("can", 189,254);
	fill(255,127,80);
	stroke(34,139,34);
	//text("around", 414,105);
	fill(160,82,45);
	stroke(160,82,45);
	//text("Bob,", 202,35);
	fill(0,255,0);
	stroke(127,255,0);
	//text("ag", 134,374);
	fill(0,255,255);
	stroke(218,165,32);
	//text("at", 235,416);
	fill(138,43,226);
	stroke(0,128,128);
	//text("yours,", 154,569);
	fill(30,144,255);
	stroke(0,255,127);
	//text("much", 100,293);
	fill(255,165,0);
	stroke(160,82,45);
	text("small", 516,416);
	text("bank", 446,456);
	fill(138,43,226);
	stroke(148,0,211);
	//text("side,", 347,416);
	fill(0,191,255);
	stroke(255,0,255);
	//text("I", 98,105);
	fill(128,0,0);
	stroke(0,255,0);
	//text("How", 13,293);
	fill(0,255,255);
	stroke(0,0,139);
	//text("hout", 70,416);
	fill(0,206,209);
	stroke(25,25,112);
	//text("since", 534,144);
	fill(255,255,0);
	stroke(139,0,0);
	//text("ing", 531,456);
	fill(0,191,255);
	stroke(34,139,34);
	//text("my", 57,217);
	fill(64,224,208);
	stroke(210,105,30);
	//text("you", 339,105);
	fill(173,255,47);
	stroke(0,255,255);
	//text("last", 77,181);
	fill(106,90,205);
	stroke(210,105,30);
	//text("we", 442,337);
	fill(255,255,0);
	stroke(0,0,255);
	//text("of", 446,254);
	fill(0,128,0);
	stroke(32,178,170);
	//text("be", 504,337);
	fill(30,144,255);
	stroke(210,105,30);
	//text("stare", 252,217);
	fill(238,130,238);
	stroke(0,206,209);
	//text("only", 361,254);
	fill(244,164,96);
	stroke(154,205,50);
	//text("you", 160,416);
	fill(0,255,255);
	stroke(0,206,209);
	//text("many", 209,144);
	fill(147,112,219);
	//text("in", 14,217);
	fill(173,255,47);
	stroke(255,0,255);
	//text("longing", 90,337);
	fill(0,0,255);
	stroke(32,178,170);
	//text("have", 405,293);
	fill(128,128,0);
	stroke(25,25,112);
	//text("eturn.", 212,499);
	fill(135,206,235);
	stroke(255,69,0);
	//text("the", 412,374);



}
