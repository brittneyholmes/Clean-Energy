(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,386,119);


(lib.Shape3861 = function() {
	this.initialize(img.Shape3861);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,745,2198);


(lib.Sun21 = function() {
	this.initialize(img.Sun21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,415,337);


(lib.WindTurbine = function() {
	this.initialize(img.WindTurbine);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,873,1570);


(lib.WindTurbine_1 = function() {
	this.initialize(img.WindTurbine_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,424,1039);


(lib.WindTurbine_2 = function() {
	this.initialize(img.WindTurbine_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,873,1552);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.WindTurbine_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AonuCILmgfMAHoCGAI00DLgEg/BAMXQh9g5hyi4Qhzi3AqikQAjiHCgiiQA7g8BmhbQB5hpA/g5QDrjVCLizIaZycQAJCCCFDJQAlA4BJBlQBFBeAYAlQA7BjAvAYQASAJA0AUQA6AYA+AjI+pZJQhPAmk9CnQjMBrhtAeQhCASg7AAQhKAAg/gdgEAoRgGZQmHhnubkEItMjwQDJhxA9grQByhTBBhtQB+jHAZl/MAqmAIpQEZCACgCRQCXCKAYCLQAYCIhlB0QhnB2jYBQQhiAki1AcQjAAejIAGIhgABQmtAAi4h5gAri4sQi/ihAAjsQAAjrC/ihQC/iiEXAAQEVAADACiQC/ChAADrQAADsi/ChQjACikVAAQkXAAi/iigEAAIgvyQi4gviTAAQiJAAiMAvQg4ASjoBiMgDqggdQgCqKAEjQQALokAwl7QCFwVG+AAQDuAACpFFQCGECBqHyQAnC7BwKeQBQHcA+CcMgBsAkhQiwhKimgqg");
	mask.setTransform(436.2445,784.975);

	// Layer_1
	this.instance = new lib.WindTurbine();

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.WindTurbine_3, new cjs.Rectangle(0.5,0,871.5,1570), null);


(lib.WindTurbine_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance_1 = new lib.WindTurbine_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.WindTurbine_4, new cjs.Rectangle(0,0,424,1039), null);


(lib.WindTurbine_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance_2 = new lib.WindTurbine_2();
	this.instance_2.setTransform(-436.5,-776);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.WindTurbine_5, new cjs.Rectangle(-436.5,-776,873,1552), null);


(lib.Shape3861_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Shape3861();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Shape3861_1, new cjs.Rectangle(0,0,745,2198), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,386,119), null);


(lib.Sun21_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Sun21();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Sun21_1, new cjs.Rectangle(0,0,415,337), null);


(lib.Logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(0,0,1,1,0,0,0,193,59.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logo, new cjs.Rectangle(-193,-59.5,386,119), null);


// stage content:
(lib.AnimationAd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Wind_Turbine
	this.whole = new lib.WindTurbine_3();
	this.whole.name = "whole";
	this.whole.setTransform(77,512.65,0.0836,0.0633,0,0,0,436.5,782.5);
	this.whole._off = true;

	this.timeline.addTween(cjs.Tween.get(this.whole).wait(70).to({_off:false},0).wait(1).to({regX:436.2,regY:785,scaleY:0.0629,x:76.9,y:497.15},0).wait(1).to({scaleY:0.0625,y:481.65},0).wait(1).to({scaleY:0.062,y:466.05},0).wait(1).to({scaleY:0.0616,y:450.45},0).wait(1).to({scaleY:0.0611,y:434.85},0).wait(1).to({scaleY:0.0607,y:419.25},0).wait(1).to({scaleY:0.0603,y:403.65},0).wait(1).to({scaleY:0.0598,y:388.05},0).wait(1).to({scaleY:0.0594,y:372.5},0).wait(1).to({scaleY:0.0589,y:356.9},0).wait(1).to({scaleY:0.0585,y:341.3},0).wait(1).to({scaleY:0.058,y:325.7},0).wait(1).to({scaleY:0.0582,y:336.4},0).wait(1).to({scaleY:0.0584,y:336.45},0).wait(1).to({scaleY:0.0586,y:336.4},0).wait(1).to({scaleY:0.0587},0).wait(1).to({scaleY:0.0589},0).wait(1).to({scaleY:0.0591,y:336.45},0).wait(1).to({scaleY:0.0593,y:336.4},0).wait(1).to({scaleY:0.0594},0).wait(1).to({scaleY:0.0596,y:336.45},0).wait(1).to({scaleY:0.0598},0).wait(1).to({scaleY:0.06,y:336.4},0).wait(1).to({scaleY:0.0601},0).wait(1).to({scaleY:0.0603,y:336.45},0).wait(1).to({scaleY:0.0605},0).wait(1).to({scaleY:0.0607,y:336.4},0).wait(1).to({scaleY:0.0608},0).wait(1).to({scaleY:0.061,y:336.45},0).wait(1).to({scaleY:0.0612},0).wait(1).to({scaleY:0.0614,y:336.4},0).wait(1).to({scaleY:0.0615},0).wait(1).to({scaleY:0.0617,y:336.45},0).wait(1).to({scaleY:0.0619,y:336.4},0).wait(1).to({scaleY:0.0621},0).wait(1).to({scaleY:0.0622,y:336.45},0).wait(1).to({scaleY:0.0624},0).wait(1).to({scaleY:0.0626,y:336.4},0).wait(1).to({scaleY:0.0628},0).wait(1).to({scaleY:0.0629,y:336.45},0).wait(1).to({scaleY:0.0631},0).wait(1).to({scaleY:0.0606},0).to({_off:true},1).wait(32));

	// Turbine_base
	this.blades = new lib.WindTurbine_4();
	this.blades.name = "blades";
	this.blades.setTransform(84.45,358.5,0.0877,0.0578,0,0,5.9756,213.3,521.4);
	this.blades._off = true;

	this.timeline.addTween(cjs.Tween.get(this.blades).wait(113).to({_off:false},0).wait(32));

	// turbine_blades
	this.blades_1 = new lib.WindTurbine_5();
	this.blades_1.name = "blades_1";
	this.blades_1.setTransform(73,338.7,0.0894,0.0675);
	this.blades_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.blades_1).wait(113).to({_off:false},0).wait(1).to({rotation:4.3548,x:72.7306,y:338.1774},0).wait(1).to({rotation:8.7097,x:72.4613,y:337.6548},0).wait(1).to({rotation:13.0645,x:72.1919,y:337.1323},0).wait(1).to({rotation:17.4194,x:71.9226,y:336.6097},0).wait(1).to({rotation:21.7742,x:71.6532,y:336.0871},0).wait(1).to({rotation:26.129,x:71.3839,y:335.5645},0).wait(1).to({rotation:30.4839,x:71.1145,y:335.0419},0).wait(1).to({rotation:34.8387,x:70.8452,y:334.5194},0).wait(1).to({rotation:39.1935,x:70.5758,y:333.9968},0).wait(1).to({rotation:43.5484,x:70.3065,y:333.4742},0).wait(1).to({rotation:47.9032,x:70.0371,y:332.9516},0).wait(1).to({rotation:52.2581,x:69.7677,y:332.429},0).wait(1).to({rotation:56.6129,x:69.4984,y:331.9065},0).wait(1).to({rotation:60.9677,x:69.229,y:331.3839},0).wait(1).to({rotation:65.3226,x:68.9597,y:330.8613},0).wait(1).to({rotation:69.6774,x:68.6903,y:330.3387},0).wait(1).to({rotation:74.0323,x:68.421,y:329.8161},0).wait(1).to({rotation:78.3871,x:68.1516,y:329.2935},0).wait(1).to({rotation:82.7419,x:67.8823,y:328.771},0).wait(1).to({rotation:87.0968,x:67.6129,y:328.2484},0).wait(1).to({rotation:91.4516,x:67.3435,y:327.7258},0).wait(1).to({rotation:95.8065,x:67.0742,y:327.2032},0).wait(1).to({rotation:100.1613,x:66.8048,y:326.6806},0).wait(1).to({rotation:104.5161,x:66.5355,y:326.1581},0).wait(1).to({rotation:108.871,x:66.2661,y:325.6355},0).wait(1).to({rotation:113.2258,x:65.9968,y:325.1129},0).wait(1).to({rotation:117.5806,x:65.7274,y:324.5903},0).wait(1).to({rotation:121.9355,x:65.4581,y:324.0677},0).wait(1).to({rotation:126.2903,x:65.1887,y:323.5452},0).wait(1).to({rotation:130.6452,x:64.9194,y:323.0226},0).wait(1).to({rotation:135,x:64.65,y:322.5},0).wait(1));

	// water
	this.water = new lib.Shape3861_1();
	this.water.name = "water";
	this.water.setTransform(254.35,580.15,0.0504,0.0626,0,0,0,368.3,1097.6);
	this.water.alpha = 0;
	this.water._off = true;

	this.timeline.addTween(cjs.Tween.get(this.water).wait(70).to({_off:false},0).wait(1).to({regX:372.5,regY:1099,scaleX:0.0758,scaleY:0.0544,x:252.45,y:522.45,alpha:0.0833},0).wait(1).to({scaleX:0.1013,scaleY:0.0461,x:250.45,y:467.5,alpha:0.1667},0).wait(1).to({scaleX:0.0935,scaleY:0.0458,x:248.45,y:415.15,alpha:0.25},0).wait(1).to({scaleX:0.0858,scaleY:0.0454,x:246.5,y:365.45,alpha:0.3333},0).wait(1).to({scaleX:0.078,scaleY:0.045,x:245.65,y:343.65,alpha:0.4167},0).wait(1).to({scaleX:0.0774,scaleY:0.0447,alpha:0.5},0).wait(1).to({scaleX:0.0767,scaleY:0.0443,alpha:0.5833},0).wait(1).to({scaleX:0.0761,scaleY:0.044,alpha:0.6667},0).wait(1).to({scaleX:0.0755,scaleY:0.0436,y:343.6,alpha:0.75},0).wait(1).to({scaleX:0.0748,scaleY:0.0432,x:245.6,alpha:0.8333},0).wait(1).to({scaleX:0.0742,scaleY:0.0429,x:245.65,alpha:0.9167},0).wait(1).to({scaleX:0.0736,scaleY:0.0425,alpha:1},0).wait(30).to({_off:true},1).wait(32));

	// sun
	this.sun = new lib.Sun21_1();
	this.sun.name = "sun";
	this.sun.setTransform(453.4,529,0.296,0.2874,0,0,0,207.2,168.4);
	this.sun.alpha = 0;
	this.sun._off = true;

	this.timeline.addTween(cjs.Tween.get(this.sun).wait(89).to({_off:false},0).wait(1).to({regX:207.5,regY:168.5,scaleX:0.2858,scaleY:0.28,x:452.8,y:468.7,alpha:0.125},0).wait(1).to({scaleX:0.2756,scaleY:0.2725,x:452.15,y:413.65,alpha:0.25},0).wait(1).to({scaleX:0.2653,scaleY:0.265,x:451.55,y:363.6,alpha:0.375},0).wait(1).to({scaleX:0.2551,scaleY:0.2576,x:450.95,y:340.25,alpha:0.5},0).wait(1).to({scaleX:0.2448,scaleY:0.2501,x:450.35,y:340.65,alpha:0.625},0).wait(1).to({scaleX:0.2346,scaleY:0.2427,x:449.75,y:341.05,alpha:0.75},0).wait(1).to({scaleX:0.2243,scaleY:0.2352,x:449.45,y:341.4,alpha:0.875},0).wait(1).to({scaleX:0.2141,scaleY:0.2278,x:449.4,y:341.7,alpha:1},0).wait(1).to({y:342},0).wait(1).to({y:342.2},0).wait(1).to({y:342.4},0).wait(1).to({y:342.6},0).wait(1).to({y:342.7},0).wait(1).to({y:342.85},0).wait(1).to({y:342.9},0).wait(8).to({_off:true},1).wait(32));

	// Mission_Statement
	this.text = new cjs.Text("We're committed to excellence, providing our customers with the ability to seamlessly adopt wind energy, solar energy and hydropower, regardless of market.", "21px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 25;
	this.text.lineWidth = 320;
	this.text.parent = this;
	this.text.setTransform(119.1,398.5);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(23).to({_off:false},0).wait(1).to({x:118.8606,y:393.2783},0).wait(1).to({x:118.6223,y:388.0811},0).wait(1).to({x:118.3855,y:382.9153},0).wait(1).to({x:118.1499,y:377.7775},0).wait(1).to({x:117.9156,y:372.6676},0).wait(1).to({x:117.6826,y:367.5856},0).wait(1).to({x:117.451,y:362.5351},0).wait(1).to({x:117.2208,y:357.5125},0).wait(1).to({x:116.9918,y:352.5179},0).wait(1).to({x:116.7642,y:347.5547},0).wait(1).to({x:116.5378,y:342.6159},0).wait(1).to({x:116.3129,y:337.7121},0).wait(1).to({x:116.0892,y:332.8327},0).wait(1).to({x:115.8668,y:327.9813},0).wait(1).to({x:115.6458,y:323.1613},0).wait(1).to({x:115.4261,y:318.3692},0).wait(1).to({x:115.2078,y:313.6086},0).wait(1).to({x:114.9907,y:308.8724},0).wait(1).to({x:114.775,y:304.1677},0).wait(1).to({x:114.5605,y:299.4909},0).wait(1).to({x:114.3476,y:294.8456},0).wait(1).to({x:114.1358,y:290.2281},0).wait(1).to({x:113.9253,y:285.6352},0).wait(1).to({x:113.7163,y:281.0771},0).wait(1).to({x:113.5084,y:276.5435},0).wait(1).to({x:113.302,y:272.0414},0).wait(1).to({x:113.0969,y:267.5671},0).wait(1).to({x:112.893,y:263.1209},0).wait(1).to({x:112.6906,y:258.706},0).wait(1).to({x:112.4895,y:254.3191},0).wait(1).to({x:112.2896,y:249.9602},0).wait(1).to({x:112.091,y:245.6292},0).wait(1).to({x:111.8937,y:241.3261},0).wait(1).to({x:111.6979,y:237.0544},0).wait(1).to({x:111.5033,y:232.8108},0).wait(1).to({x:111.3102,y:228.5985},0).wait(1).to({x:111.1183,y:224.4142},0).wait(1).to({x:110.9276,y:220.2543},0).wait(1).to({x:110.7385,y:216.1294},0).wait(1).to({x:110.5505,y:212.0289},0).wait(1).to({x:110.3639,y:207.9598},0).wait(1).to({x:110.1786,y:203.9187},0).wait(1).to({x:109.9946,y:199.9055},0).wait(1).to({x:109.8121,y:195.9238},0).wait(1).to({x:109.6307,y:191.9665},0).wait(1).to({x:109.4507,y:188.0406},0).wait(1).to({x:109.2721,y:184.1462},0).wait(1).to({x:109.0947,y:180.2762},0).wait(1).to({x:108.9187,y:176.4377},0).wait(1).to({x:108.744,y:172.6271},0).wait(1).to({x:108.5705,y:168.8445},0).wait(1).to({x:108.3985,y:165.0932},0).wait(1).to({x:108.2278,y:161.37},0).wait(1).to({x:108.0584,y:157.6746},0).wait(1).to({x:108.0906,y:157.5},0).wait(1).to({x:108.1324},0).wait(1).to({x:108.1739},0).wait(1).to({x:108.2151},0).wait(1).to({x:108.256},0).wait(1).to({x:108.2965},0).wait(1).to({x:108.3367},0).wait(1).to({x:108.3765},0).wait(1).to({x:108.4161},0).wait(1).to({x:108.4553},0).wait(1).to({x:108.4941},0).wait(1).to({x:108.5327},0).wait(1).to({x:108.5708},0).wait(1).to({x:108.6087},0).wait(1).to({x:108.6462},0).wait(1).to({x:108.6834},0).wait(1).to({x:108.7203},0).wait(1).to({x:108.7568},0).wait(1).to({x:108.793},0).wait(1).to({x:108.8289},0).wait(1).to({x:108.8645},0).wait(1).to({x:108.8997},0).wait(1).to({x:108.9345},0).wait(1).to({x:108.9691},0).wait(1).to({x:109.0033},0).wait(1).to({x:109.0371},0).wait(1).to({x:109.0707},0).wait(1).to({x:109.1039},0).wait(1).to({x:109.1368},0).wait(1).to({x:109.1693},0).wait(1).to({x:109.2016},0).wait(1).to({x:109.2335},0).wait(1).to({x:109.265},0).wait(1).to({x:109.2962},0).wait(1).to({x:109.3271},0).wait(1).to({x:109.3576},0).wait(1).to({x:109.3879},0).wait(1).to({x:109.4178},0).wait(1).to({x:109.4473},0).wait(1).to({x:109.4766},0).wait(1).to({x:109.5055},0).wait(1).to({x:109.534},0).wait(1).to({x:109.5622},0).wait(1).to({x:109.5902},0).wait(1).to({x:109.6177},0).wait(1).to({x:109.6449},0).wait(1).to({x:109.6719},0).wait(1).to({x:109.6984},0).wait(1).to({x:109.7247},0).wait(1).to({x:109.7506},0).wait(1).to({x:109.7762},0).wait(1).to({x:109.8014},0).wait(1).to({x:109.8263},0).wait(1).to({x:109.8509},0).wait(1).to({x:109.8751},0).wait(1).to({x:109.8991},0).wait(1).to({x:109.9226},0).wait(1).to({x:109.9459},0).wait(1).to({x:109.9688},0).wait(1).to({x:109.9914},0).wait(1).to({x:110.0136},0).wait(1).to({x:110.0355},0).wait(1).to({x:110.0571},0).wait(1).to({x:110.0784},0).wait(1).to({x:110.0993},0).wait(1).to({x:110.1},0).wait(2));

	// Logo
	this.instance = new lib.Logo();
	this.instance.setTransform(263.05,552.7,1,1,0,0,0,-0.1,-0.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({regX:0,regY:0,x:263.1709,y:541.6946,alpha:0.0318},0).wait(1).to({x:263.1915,y:530.6338,alpha:0.0635},0).wait(1).to({x:263.2118,y:519.6323,alpha:0.0951},0).wait(1).to({x:263.2318,y:508.6754,alpha:0.1265},0).wait(1).to({x:263.2516,y:497.7779,alpha:0.1577},0).wait(1).to({x:263.271,y:486.9249,alpha:0.1888},0).wait(1).to({x:263.2902,y:476.1313,alpha:0.2197},0).wait(1).to({x:263.3091,y:465.3822,alpha:0.2506},0).wait(1).to({x:263.3277,y:454.6925,alpha:0.2812},0).wait(1).to({x:263.3461,y:444.0474,alpha:0.3117},0).wait(1).to({x:263.3641,y:433.4616,alpha:0.342},0).wait(1).to({x:263.3819,y:422.9204,alpha:0.3723},0).wait(1).to({x:263.3994,y:412.4312,alpha:0.4023},0).wait(1).to({x:263.4167,y:402.0013,alpha:0.4322},0).wait(1).to({x:263.4337,y:391.616,alpha:0.462},0).wait(1).to({x:263.4504,y:381.2901,alpha:0.4916},0).wait(1).to({x:263.4669,y:371.0087,alpha:0.521},0).wait(1).to({x:263.4831,y:360.7792,alpha:0.5504},0).wait(1).to({x:263.499,y:350.6092,alpha:0.5795},0).wait(1).to({x:263.5147,y:340.4837,alpha:0.6085},0).wait(1).to({x:263.5302,y:330.4102,alpha:0.6374},0).wait(1).to({x:263.5454,y:320.396,alpha:0.6661},0).wait(1).to({x:263.5603,y:310.4264,alpha:0.6947},0).wait(1).to({x:263.575,y:300.5088,alpha:0.7231},0).wait(1).to({x:263.5849,y:290.6505,alpha:0.7514},0).wait(1).to({y:280.8368,alpha:0.7795},0).wait(1).to({y:271.075,alpha:0.8075},0).wait(1).to({y:261.3727,alpha:0.8353},0).wait(1).to({x:263.6015,y:251.7148,alpha:0.863},0).wait(1).to({x:263.6218,y:242.109,alpha:0.8905},0).wait(1).to({x:263.6417,y:232.5625,alpha:0.9179},0).wait(1).to({x:263.6613,y:223.0606,alpha:0.9451},0).wait(1).to({x:263.6805,y:213.6106,alpha:0.9722},0).wait(1).to({x:263.6994,y:204.2126,alpha:0.9991},0).wait(1).to({x:263.7179,y:194.874,alpha:1},0).wait(1).to({x:263.7361,y:185.5799},0).wait(1).to({x:263.754,y:176.3378},0).wait(1).to({x:263.7715,y:167.1476},0).wait(1).to({x:263.7887,y:158.0169},0).wait(1).to({x:263.8056,y:148.9306},0).wait(1).to({x:263.8221,y:139.8964},0).wait(1).to({x:263.8383,y:130.9141},0).wait(1).to({x:263.8542,y:121.9912},0).wait(1).to({x:263.8698,y:113.1128},0).wait(1).to({x:263.8851,y:104.2864},0).wait(1).to({x:263.9001,y:95.5119},0).wait(1).to({x:263.9147,y:92.55},0).wait(1).to({x:263.9291},0).wait(1).to({x:263.9431},0).wait(1).to({x:263.9569},0).wait(1).to({x:263.9704},0).wait(1).to({x:263.9835},0).wait(1).to({x:263.9964},0).wait(1).to({x:264.0091},0).wait(1).to({x:264.0214},0).wait(1).to({x:264.0334},0).wait(1).to({x:264.0452},0).wait(1).to({x:264.0567},0).wait(1).to({x:264.068},0).wait(1).to({x:264.0789},0).wait(1).to({x:264.0897},0).wait(1).to({x:264.1},0).wait(82));

	// Sun_rotation
	this.sun_1 = new lib.Sun21_1();
	this.sun_1.name = "sun_1";
	this.sun_1.setTransform(449.4,342.95,0.214,0.2277,0,0,0,207,168.7);
	this.sun_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.sun_1).wait(113).to({_off:false},0).wait(1).to({regX:207.5,regY:168.5,scaleX:0.2141,scaleY:0.2281,rotation:2.5,x:449.45,y:342.9},0).wait(1).to({scaleY:0.2286,rotation:5.0001,x:449.5,y:342.85},0).wait(1).to({scaleY:0.229,rotation:7.5001,y:342.9},0).wait(1).to({scaleY:0.2294,rotation:10.0001},0).wait(1).to({scaleY:0.2298,rotation:12.5002,x:449.45},0).wait(1).to({scaleY:0.2302,rotation:15.0002,x:449.5},0).wait(1).to({scaleY:0.2307,rotation:17.5003,x:449.45},0).wait(1).to({scaleY:0.2311,rotation:20.0003,x:449.5,y:342.95},0).wait(1).to({scaleY:0.2315,rotation:22.5003},0).wait(1).to({scaleX:0.214,scaleY:0.2319,rotation:25.0004,y:342.9},0).wait(1).to({scaleX:0.2141,scaleY:0.2323,rotation:27.5004,x:449.45,y:342.95},0).wait(1).to({scaleX:0.214,scaleY:0.2328,rotation:30.0004,x:449.5},0).wait(1).to({scaleX:0.2141,scaleY:0.2332,rotation:32.5005},0).wait(1).to({scaleX:0.214,scaleY:0.2336,rotation:35.0005,y:343},0).wait(1).to({scaleY:0.234,rotation:37.5005},0).wait(1).to({scaleX:0.2141,scaleY:0.2344,rotation:40.0006,x:449.45,y:342.95},0).wait(1).to({scaleX:0.214,scaleY:0.2349,rotation:42.5006,y:343},0).wait(1).to({scaleY:0.2353,rotation:45.0007},0).wait(1).to({scaleY:0.2357,rotation:47.5007},0).wait(1).to({scaleY:0.2361,rotation:50.0007,y:342.95},0).wait(1).to({scaleY:0.2365,rotation:52.5008,x:449.5,y:343},0).wait(1).to({scaleX:0.2141,scaleY:0.237,rotation:55.0008,x:449.45},0).wait(1).to({scaleY:0.2374,rotation:57.5008},0).wait(1).to({scaleX:0.214,scaleY:0.2378,rotation:60.0009},0).wait(1).to({scaleX:0.2141,scaleY:0.2382,rotation:62.5009},0).wait(1).to({scaleX:0.214,scaleY:0.2386,rotation:65.001},0).wait(1).to({scaleX:0.2141,scaleY:0.2391,rotation:67.501},0).wait(1).to({scaleY:0.2395,rotation:70.001,x:449.5,y:343.05},0).wait(1).to({scaleY:0.2399,rotation:72.5011,x:449.45,y:343},0).wait(1).to({scaleY:0.2403,rotation:75.0011,y:343.05},0).wait(2));

	// water_motion
	this.water_1 = new lib.Shape3861_1();
	this.water_1.name = "water_1";
	this.water_1.setTransform(245.35,343.65,0.0735,0.0425,0,0,0,367.8,1098.2);
	this.water_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.water_1).wait(113).to({_off:false},0).wait(1).to({regX:372.5,regY:1099,scaleX:0.0698,scaleY:0.0422,x:245.65},0).wait(1).to({scaleX:0.066,scaleY:0.0419,x:245.6},0).wait(1).to({scaleX:0.0622,scaleY:0.0417},0).wait(1).to({scaleX:0.0584,scaleY:0.0414},0).wait(1).to({scaleX:0.0546,scaleY:0.0411,x:245.55},0).wait(1).to({scaleX:0.0508,scaleY:0.0408},0).wait(1).to({scaleX:0.047,scaleY:0.0406},0).wait(1).to({scaleX:0.0432,scaleY:0.0403,x:245.5},0).wait(1).to({scaleX:0.0393,scaleY:0.04},0).wait(1).to({scaleX:0.0355,scaleY:0.0397},0).wait(1).to({scaleX:0.0317,scaleY:0.0395,x:245.45},0).wait(1).to({scaleX:0.0279,scaleY:0.0392},0).wait(1).to({scaleX:0.0241,scaleY:0.0389},0).wait(1).to({scaleX:0.0203,scaleY:0.0386},0).wait(1).to({scaleX:0.0165,scaleY:0.0384,x:245.4},0).wait(1).to({scaleX:0.0127,scaleY:0.0381},0).wait(1).to({scaleX:0.0089,scaleY:0.0378},0).wait(1).to({scaleX:0.0051,scaleY:0.0375,x:245.35},0).wait(1).to({scaleX:0.0013,scaleY:0.0372},0).wait(1).to({scaleX:0.0025,scaleY:0.037,skewY:180,y:343.6},0).wait(1).to({scaleX:0.0063,scaleY:0.0367,x:245.3,y:343.65},0).wait(1).to({scaleX:0.0101,scaleY:0.0364},0).wait(1).to({scaleX:0.0139,scaleY:0.0361},0).wait(1).to({scaleX:0.0177,scaleY:0.0359,x:245.25},0).wait(1).to({scaleX:0.0215,scaleY:0.0356,x:245.2},0).wait(1).to({scaleX:0.0253,scaleY:0.0353},0).wait(1).to({scaleX:0.0291,scaleY:0.035,x:245.15},0).wait(1).to({scaleX:0.0329,scaleY:0.0348},0).wait(1).to({scaleX:0.0367,scaleY:0.0345},0).wait(1).to({scaleX:0.0405,scaleY:0.0342,x:245.1},0).wait(2));

	// Background
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#006699").ss(1,1,1).p("Egq4gCQMBVxAAAIAAEhMhVxAAAg");
	this.shape.setTransform(274.475,16.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006699").s().p("Egq4ACRIAAkhMBVxAAAIAAEhg");
	this.shape_1.setTransform(274.475,16.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#006699").ss(1,1,1).p("AqrfXMggNAAAMAAAg+tMBVxAAAIAADu");
	this.shape_2.setTransform(63.6114,174.7124,1.0466,1.0731);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006699").s().p("Egq4AfWIAAjtMAAAg6/MA1kAAAMAgNAAAMAAAA+sg");
	this.shape_3.setTransform(279.3126,200.2515,1.0466,1.0731);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#006699").ss(1,1,1).p("Egk8ge7MBJ5AAAMAAAA93MhJ5AAAg");
	this.shape_4.setTransform(236.475,200.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006699").s().p("Egk8Ae8MAAAg93MBJ5AAAMAAAA93g");
	this.shape_5.setTransform(236.475,200.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#006699").ss(1,1,1).p("Egq4gfAMBVxAAAMAAAA+BUgrJgBTgqoABTg");
	this.shape_6.setTransform(274.525,197.4362,1,1.0434);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006699").s().p("Egq4AfBMAAAg+BMBVxAAAMAAAA+BUgrJgBTgqoABTg");
	this.shape_7.setTransform(274.525,197.4362,1,1.0434);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5,p:{x:236.475}},{t:this.shape_4,p:{x:236.475}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:274.475}},{t:this.shape,p:{x:274.475}}]}).to({state:[{t:this.shape_5,p:{x:236.525}},{t:this.shape_4,p:{x:236.525}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_1,p:{x:274.525}},{t:this.shape,p:{x:274.525}}]},143).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(50.3,158.4,516.3000000000001,490.70000000000005);
// library properties:
lib.properties = {
	id: 'CA491BAAA46F4B9C846372A0E01515B2',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"Bitmap1.png", id:"Bitmap1"},
		{src:"Shape3861.png", id:"Shape3861"},
		{src:"Sun21.png", id:"Sun21"},
		{src:"WindTurbine.png", id:"WindTurbine"},
		{src:"WindTurbine_1.png", id:"WindTurbine_1"},
		{src:"WindTurbine_2.png", id:"WindTurbine_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['CA491BAAA46F4B9C846372A0E01515B2'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;