/*

Officer: 8957757
CaseNum: 202-0-73044423-8957757

Case 202 - The case of Bob and Daisy - stage 1

That pair of notorious criminals Woz and Jobs are up to no good again.
I’ve intercepted letters sent between them. It seems that they are
communicating through an ingenious code in which they masquerade as
besotted lovers, Daisy and Bob. I need you crack their code and determine
the details of their next heist so that we can catch them in the act.

Discover the hidden code by commenting out all text commands except
those which produce Tomato text. Only comment out text commands.
Leave fill commands uncommented.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	letterFont = loadFont('Ballpointprint.ttf');
}

function setup()
{
	createCanvas(606,728);
	textFont(letterFont);
	textSize(32);
}

function draw()
{
	background(255);

	fill(0,255,127);
	//text("eyes.", 247,482);
	//text("alive", 380,372);
	fill(0,139,139);
	//text("only", 182,446);
	//text("alone", 346,273);
	fill(255,0,0);
	//text("mus", 148,338);
	//text("saw", 251,169);
	fill(138,43,226);
	//text("that", 102,305);
	fill(255,255,0);
	//text("ma", 11,131);
	fill(219,112,147);
	//text("May", 495,96);
	fill(107,142,35);
	//text("of", 351,446);
	//text("my", 390,241);
	fill(0,206,209);
	//text("y,", 250,32);
	fill(72,209,204);
	//text("one", 450,241);
	fill(184,134,11);
	//text("sunny", 198,96);
	fill(139,0,0);
	//text("the", 428,131);
	//text("I", 266,273);
	fill(30,144,255);
	//text("are", 76,96);
	//text("that", 157,241);
	fill(147,112,219);
	//text("Oh", 18,32);
	//text("Bob", 10,610);
	fill(165,42,42);
	//text("kisses,", 166,546);
	fill(138,43,226);
	//text("lovely", 73,32);
	//text("like", 458,305);
	fill(127,255,212);
	//text("You", 10,96);
	fill(152,251,152);
	//text("Ever", 278,407);
	fill(25,25,112);
	//text("the", 484,273);
	fill(0,100,0);
	//text("green", 145,482);
	//text("the", 524,305);
	fill(148,0,211);
	//text("the", 294,338);
	//text("in", 373,96);
	fill(218,112,214);
	//text("and", 96,546);
	fill(220,20,60);
	//text("From", 339,131);
	fill(0,0,255);
	//text("am", 285,273);
	fill(184,134,11);
	//text("your", 392,446);
	fill(255,165,0);
	//text("ic", 216,338);
	//text("can", 114,446);
	//text("d", 14,482);
	fill(64,224,208);
	//text("luckiest", 125,372);
	//text("of", 253,338);
	fill(0,0,128);
	//text("seconds", 15,241);
	fill(139,0,0);
	//text("think", 260,446);
	fill(178,34,34);
	//text("blessed", 15,338);
	//text("hear", 197,305);
	fill(0,100,0);
	//text("quiet", 10,305);
	fill(128,0,0);
	//text("harp.", 357,338);
	//text("vely", 435,169);
	fill(127,255,0);
	//text("must", 469,338);
	//text("knew", 123,209);
	fill(124,252,0);
	//text("Dais", 179,32);
	fill(154,205,50);
	//text("my", 138,96);
	//text("be", 12,372);
	fill(0,255,0);
	//text("lo", 406,169);
	//text("arling,", 34,482);
	fill(128,128,0);
	//text("kea", 62,131);
	fill(220,20,60);
	//text("face,", 15,209);
	fill(0,191,255);
	//text("conf", 130,131);
	fill(255,140,0);
	//text("the", 62,372);
	fill(0,128,128);
	//text("last", 517,407);
	fill(255,140,0);
	//text("love.", 14,273);
	fill(100,149,237);
	//text("I", 450,338);
	//text("It", 102,273);
	fill(34,139,34);
	//text("true", 520,241);
	fill(32,178,170);
	//text("am", 10,407);
	fill(100,149,237);
	//text("I", 572,96);
	//text("you", 233,241);
	fill(233,150,122);
	//text("moment", 11,169);
	fill(240,230,140);
	//text("when", 170,273);
	//text("your", 324,169);
	fill(0,0,255);
	//text("voice", 362,305);
	fill(244,164,96);
	//text("those", 302,209);
	//text("x", 82,610);
	fill(255,0,255);
	//text("I", 104,209);
	fill(32,178,170);
	//text("that", 156,169);
	fill(0,255,255);
	//text("on", 330,372);
	fill(255,0,255);
	//text("Love", 10,546);
	fill(0,255,255);
	//text("since", 360,407);
	//text("I", 543,372);
	fill(0,128,0);
	//text("I", 178,305);
	fill(128,0,128);
	//text("your", 71,407);
	//text("few", 402,209);
	fill(144,238,144);
	//text("your", 280,305);
	fill(0,0,205);
	//text("from", 218,209);
	fill(0,100,0);
	//text("I", 95,446);
	fill(0,0,205);
	//text("in", 445,273);
	fill(0,255,0);
	//text("that", 467,372);
	fill(255,99,71);
	text("April", 412,96);
	fill(148,0,211);
	//text("our", 454,407);
	fill(199,21,133);
	//text("ession", 199,131);
	fill(139,0,139);
	//text("pers", 260,372);
	fill(255,99,71);
	text("first", 491,131);
	text("is", 134,273);
	fill(0,100,0);
	//text("were", 302,241);
	//text("day", 304,96);
	fill(255,99,71);
	text("chosen", 153,407);
	text("date", 12,446);
	fill(75,0,130);
	//text("?", 312,131);
	fill(0,100,0);
	//text("I", 232,169);



}
