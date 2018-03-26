(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"vidTest2_atlas_", frames: [[1922,0,1920,1080],[1922,2164,1920,1080],[2244,3608,640,360],[1602,3608,640,360],[1922,1082,1920,1080],[2886,3246,640,360],[0,2164,1920,1080],[960,3608,640,360],[3528,3432,127,180],[3528,3246,143,184],[480,3246,478,536],[0,3246,478,536],[2244,3246,640,360],[0,1082,1920,1080],[960,3246,640,360],[0,0,1920,1080],[1602,3246,640,360]]}
];


// symbols:



(lib._1cliff = function() {
	this.spriteSheet = ss["vidTest2_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2cliff = function() {
	this.spriteSheet = ss["vidTest2_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.cave1withSound_0 = function() {
	this.spriteSheet = ss["vidTest2_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.cave2WithSound_0 = function() {
	this.spriteSheet = ss["vidTest2_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.caveWaterfallScenePanels = function() {
	this.spriteSheet = ss["vidTest2_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.cliffWithSound_0 = function() {
	this.spriteSheet = ss["vidTest2_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.deadCowScenePanel = function() {
	this.spriteSheet = ss["vidTest2_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.deadMamaWithSound_0 = function() {
	this.spriteSheet = ss["vidTest2_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.DRAGONIN = function() {
	this.spriteSheet = ss["vidTest2_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.DRAGONUP = function() {
	this.spriteSheet = ss["vidTest2_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.dragon = function() {
	this.spriteSheet = ss["vidTest2_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.dragondrink = function() {
	this.spriteSheet = ss["vidTest2_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.forestVideo_0 = function() {
	this.spriteSheet = ss["vidTest2_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.MountainPathPanels = function() {
	this.spriteSheet = ss["vidTest2_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.mountainPathVideoWithSound1_0 = function() {
	this.spriteSheet = ss["vidTest2_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.splitpaths = function() {
	this.spriteSheet = ss["vidTest2_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.villageVideoWithSound_0 = function() {
	this.spriteSheet = ss["vidTest2_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.Vilageloading = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.villageVideoWithSound_0();
	this.instance.parent = this;
	this.instance.setTransform(0,0,3,3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Vilageloading, new cjs.Rectangle(0,0,1920,1080), null);


(lib.Pathloading = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mountainPathVideoWithSound1_0();
	this.instance.parent = this;
	this.instance.setTransform(0,0,3,3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Pathloading, new cjs.Rectangle(0,0,1920,1080), null);


(lib.Forestloading = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.forestVideo_0();
	this.instance.parent = this;
	this.instance.setTransform(0,0,3,3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Forestloading, new cjs.Rectangle(0,0,1920,1080), null);


(lib.FadeInBlack = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_40 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(40).call(this.frame_40).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape.setTransform(960,540);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_1.setTransform(960,540);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(0,0,0,0.976)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_2.setTransform(960,540);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.976)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_3.setTransform(960,540);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(0,0,0,0.949)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_4.setTransform(960,540);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.949)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_5.setTransform(960,540);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(0,0,0,0.925)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_6.setTransform(960,540);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.925)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_7.setTransform(960,540);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(0,0,0,0.898)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_8.setTransform(960,540);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.902)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_9.setTransform(960,540);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(0,0,0,0.875)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_10.setTransform(960,540);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.875)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_11.setTransform(960,540);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(0,0,0,0.851)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_12.setTransform(960,540);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.851)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_13.setTransform(960,540);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("rgba(0,0,0,0.824)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_14.setTransform(960,540);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(0,0,0,0.827)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_15.setTransform(960,540);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(0,0,0,0.8)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_16.setTransform(960,540);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(0,0,0,0.8)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_17.setTransform(960,540);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(0,0,0,0.776)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_18.setTransform(960,540);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(0,0,0,0.776)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_19.setTransform(960,540);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(0,0,0,0.749)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_20.setTransform(960,540);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(0,0,0,0.753)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_21.setTransform(960,540);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("rgba(0,0,0,0.725)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_22.setTransform(960,540);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(0,0,0,0.725)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_23.setTransform(960,540);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("rgba(0,0,0,0.698)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_24.setTransform(960,540);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(0,0,0,0.702)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_25.setTransform(960,540);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(0,0,0,0.675)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_26.setTransform(960,540);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(0,0,0,0.675)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_27.setTransform(960,540);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("rgba(0,0,0,0.651)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_28.setTransform(960,540);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(0,0,0,0.651)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_29.setTransform(960,540);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("rgba(0,0,0,0.624)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_30.setTransform(960,540);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(0,0,0,0.627)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_31.setTransform(960,540);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("rgba(0,0,0,0.6)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_32.setTransform(960,540);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(0,0,0,0.6)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_33.setTransform(960,540);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("rgba(0,0,0,0.576)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_34.setTransform(960,540);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(0,0,0,0.576)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_35.setTransform(960,540);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("rgba(0,0,0,0.549)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_36.setTransform(960,540);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(0,0,0,0.553)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_37.setTransform(960,540);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("rgba(0,0,0,0.525)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_38.setTransform(960,540);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(0,0,0,0.525)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_39.setTransform(960,540);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("rgba(0,0,0,0.502)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_40.setTransform(960,540);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(0,0,0,0.502)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_41.setTransform(960,540);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("rgba(0,0,0,0.475)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_42.setTransform(960,540);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(0,0,0,0.478)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_43.setTransform(960,540);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("rgba(0,0,0,0.451)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_44.setTransform(960,540);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(0,0,0,0.451)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_45.setTransform(960,540);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("rgba(0,0,0,0.424)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_46.setTransform(960,540);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(0,0,0,0.427)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_47.setTransform(960,540);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_48.setTransform(960,540);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(0,0,0,0.404)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_49.setTransform(960,540);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("rgba(0,0,0,0.376)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_50.setTransform(960,540);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(0,0,0,0.376)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_51.setTransform(960,540);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("rgba(0,0,0,0.349)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_52.setTransform(960,540);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(0,0,0,0.353)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_53.setTransform(960,540);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("rgba(0,0,0,0.325)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_54.setTransform(960,540);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(0,0,0,0.329)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_55.setTransform(960,540);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("rgba(0,0,0,0.302)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_56.setTransform(960,540);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(0,0,0,0.302)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_57.setTransform(960,540);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("rgba(0,0,0,0.275)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_58.setTransform(960,540);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(0,0,0,0.278)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_59.setTransform(960,540);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("rgba(0,0,0,0.251)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_60.setTransform(960,540);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(0,0,0,0.255)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_61.setTransform(960,540);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("rgba(0,0,0,0.224)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_62.setTransform(960,540);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(0,0,0,0.227)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_63.setTransform(960,540);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("rgba(0,0,0,0.2)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_64.setTransform(960,540);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(0,0,0,0.204)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_65.setTransform(960,540);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("rgba(0,0,0,0.176)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_66.setTransform(960,540);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(0,0,0,0.176)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_67.setTransform(960,540);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("rgba(0,0,0,0.149)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_68.setTransform(960,540);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(0,0,0,0.153)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_69.setTransform(960,540);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("rgba(0,0,0,0.125)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_70.setTransform(960,540);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(0,0,0,0.129)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_71.setTransform(960,540);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("rgba(0,0,0,0.102)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_72.setTransform(960,540);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(0,0,0,0.102)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_73.setTransform(960,540);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("rgba(0,0,0,0.075)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_74.setTransform(960,540);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(0,0,0,0.078)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_75.setTransform(960,540);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("rgba(0,0,0,0.051)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_76.setTransform(960,540);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(0,0,0,0.055)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_77.setTransform(960,540);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("rgba(0,0,0,0.024)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_78.setTransform(960,540);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(0,0,0,0.027)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_79.setTransform(960,540);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_80.setTransform(960,540);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(0,0,0,0.004)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_81.setTransform(960,540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_79},{t:this.shape_78}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,1922,1082);


(lib.FadeIn2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_40 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(40).call(this.frame_40).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape.setTransform(960,540);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_1.setTransform(960,540);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(255,255,255,0.976)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_2.setTransform(960,540);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.976)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_3.setTransform(960,540);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(255,255,255,0.949)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_4.setTransform(960,540);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.949)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_5.setTransform(960,540);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(255,255,255,0.925)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_6.setTransform(960,540);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.925)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_7.setTransform(960,540);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(255,255,255,0.898)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_8.setTransform(960,540);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.898)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_9.setTransform(960,540);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(255,255,255,0.875)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_10.setTransform(960,540);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.875)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_11.setTransform(960,540);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(255,255,255,0.851)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_12.setTransform(960,540);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.851)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_13.setTransform(960,540);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("rgba(255,255,255,0.824)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_14.setTransform(960,540);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.824)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_15.setTransform(960,540);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(255,255,255,0.8)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_16.setTransform(960,540);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.8)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_17.setTransform(960,540);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(255,255,255,0.776)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_18.setTransform(960,540);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.776)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_19.setTransform(960,540);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(255,255,255,0.749)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_20.setTransform(960,540);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.749)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_21.setTransform(960,540);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("rgba(255,255,255,0.725)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_22.setTransform(960,540);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,255,255,0.725)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_23.setTransform(960,540);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("rgba(255,255,255,0.698)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_24.setTransform(960,540);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,255,0.698)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_25.setTransform(960,540);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(255,255,255,0.675)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_26.setTransform(960,540);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.675)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_27.setTransform(960,540);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("rgba(255,255,255,0.651)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_28.setTransform(960,540);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,255,255,0.651)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_29.setTransform(960,540);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("rgba(255,255,255,0.624)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_30.setTransform(960,540);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(255,255,255,0.624)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_31.setTransform(960,540);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("rgba(255,255,255,0.6)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_32.setTransform(960,540);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(255,255,255,0.6)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_33.setTransform(960,540);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("rgba(255,255,255,0.576)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_34.setTransform(960,540);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(255,255,255,0.576)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_35.setTransform(960,540);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("rgba(255,255,255,0.549)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_36.setTransform(960,540);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(255,255,255,0.549)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_37.setTransform(960,540);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("rgba(255,255,255,0.525)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_38.setTransform(960,540);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(255,255,255,0.525)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_39.setTransform(960,540);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("rgba(255,255,255,0.502)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_40.setTransform(960,540);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(255,255,255,0.502)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_41.setTransform(960,540);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("rgba(255,255,255,0.475)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_42.setTransform(960,540);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(255,255,255,0.475)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_43.setTransform(960,540);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("rgba(255,255,255,0.451)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_44.setTransform(960,540);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(255,255,255,0.451)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_45.setTransform(960,540);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("rgba(255,255,255,0.424)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_46.setTransform(960,540);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(255,255,255,0.424)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_47.setTransform(960,540);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("rgba(255,255,255,0.4)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_48.setTransform(960,540);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(255,255,255,0.4)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_49.setTransform(960,540);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("rgba(255,255,255,0.376)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_50.setTransform(960,540);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(255,255,255,0.376)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_51.setTransform(960,540);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("rgba(255,255,255,0.349)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_52.setTransform(960,540);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(255,255,255,0.349)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_53.setTransform(960,540);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("rgba(255,255,255,0.325)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_54.setTransform(960,540);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(255,255,255,0.325)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_55.setTransform(960,540);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("rgba(255,255,255,0.302)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_56.setTransform(960,540);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(255,255,255,0.302)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_57.setTransform(960,540);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("rgba(255,255,255,0.275)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_58.setTransform(960,540);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(255,255,255,0.275)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_59.setTransform(960,540);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("rgba(255,255,255,0.251)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_60.setTransform(960,540);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(255,255,255,0.251)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_61.setTransform(960,540);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("rgba(255,255,255,0.224)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_62.setTransform(960,540);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(255,255,255,0.224)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_63.setTransform(960,540);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("rgba(255,255,255,0.2)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_64.setTransform(960,540);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(255,255,255,0.2)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_65.setTransform(960,540);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("rgba(255,255,255,0.176)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_66.setTransform(960,540);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(255,255,255,0.176)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_67.setTransform(960,540);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("rgba(255,255,255,0.149)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_68.setTransform(960,540);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(255,255,255,0.149)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_69.setTransform(960,540);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("rgba(255,255,255,0.125)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_70.setTransform(960,540);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(255,255,255,0.125)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_71.setTransform(960,540);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("rgba(255,255,255,0.102)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_72.setTransform(960,540);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(255,255,255,0.102)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_73.setTransform(960,540);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("rgba(255,255,255,0.075)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_74.setTransform(960,540);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(255,255,255,0.075)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_75.setTransform(960,540);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("rgba(255,255,255,0.051)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_76.setTransform(960,540);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(255,255,255,0.051)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_77.setTransform(960,540);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("rgba(255,255,255,0.024)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_78.setTransform(960,540);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(255,255,255,0.024)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_79.setTransform(960,540);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("rgba(255,255,255,0)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_80.setTransform(960,540);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(255,255,255,0)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_81.setTransform(960,540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_79},{t:this.shape_78}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,1922,1082);


(lib.FadeIn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_40 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(40).call(this.frame_40).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape.setTransform(960,540);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_1.setTransform(960,540);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(255,255,255,0.976)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_2.setTransform(960,540);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.976)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_3.setTransform(960,540);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(255,255,255,0.949)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_4.setTransform(960,540);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.949)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_5.setTransform(960,540);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(255,255,255,0.925)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_6.setTransform(960,540);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.925)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_7.setTransform(960,540);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(255,255,255,0.898)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_8.setTransform(960,540);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.898)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_9.setTransform(960,540);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(255,255,255,0.875)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_10.setTransform(960,540);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.875)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_11.setTransform(960,540);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(255,255,255,0.851)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_12.setTransform(960,540);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.851)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_13.setTransform(960,540);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("rgba(255,255,255,0.824)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_14.setTransform(960,540);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.824)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_15.setTransform(960,540);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(255,255,255,0.8)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_16.setTransform(960,540);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.8)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_17.setTransform(960,540);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(255,255,255,0.776)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_18.setTransform(960,540);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.776)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_19.setTransform(960,540);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(255,255,255,0.749)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_20.setTransform(960,540);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.749)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_21.setTransform(960,540);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("rgba(255,255,255,0.725)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_22.setTransform(960,540);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,255,255,0.725)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_23.setTransform(960,540);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("rgba(255,255,255,0.698)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_24.setTransform(960,540);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,255,0.698)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_25.setTransform(960,540);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(255,255,255,0.675)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_26.setTransform(960,540);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.675)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_27.setTransform(960,540);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("rgba(255,255,255,0.651)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_28.setTransform(960,540);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,255,255,0.651)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_29.setTransform(960,540);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("rgba(255,255,255,0.624)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_30.setTransform(960,540);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(255,255,255,0.624)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_31.setTransform(960,540);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("rgba(255,255,255,0.6)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_32.setTransform(960,540);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(255,255,255,0.6)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_33.setTransform(960,540);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("rgba(255,255,255,0.576)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_34.setTransform(960,540);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(255,255,255,0.576)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_35.setTransform(960,540);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("rgba(255,255,255,0.549)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_36.setTransform(960,540);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(255,255,255,0.549)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_37.setTransform(960,540);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("rgba(255,255,255,0.525)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_38.setTransform(960,540);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(255,255,255,0.525)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_39.setTransform(960,540);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("rgba(255,255,255,0.502)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_40.setTransform(960,540);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(255,255,255,0.502)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_41.setTransform(960,540);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("rgba(255,255,255,0.475)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_42.setTransform(960,540);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(255,255,255,0.475)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_43.setTransform(960,540);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("rgba(255,255,255,0.451)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_44.setTransform(960,540);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(255,255,255,0.451)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_45.setTransform(960,540);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("rgba(255,255,255,0.424)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_46.setTransform(960,540);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(255,255,255,0.424)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_47.setTransform(960,540);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("rgba(255,255,255,0.4)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_48.setTransform(960,540);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(255,255,255,0.4)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_49.setTransform(960,540);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("rgba(255,255,255,0.376)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_50.setTransform(960,540);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(255,255,255,0.376)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_51.setTransform(960,540);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("rgba(255,255,255,0.349)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_52.setTransform(960,540);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(255,255,255,0.349)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_53.setTransform(960,540);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("rgba(255,255,255,0.325)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_54.setTransform(960,540);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(255,255,255,0.325)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_55.setTransform(960,540);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("rgba(255,255,255,0.302)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_56.setTransform(960,540);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(255,255,255,0.302)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_57.setTransform(960,540);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("rgba(255,255,255,0.275)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_58.setTransform(960,540);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(255,255,255,0.275)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_59.setTransform(960,540);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("rgba(255,255,255,0.251)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_60.setTransform(960,540);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(255,255,255,0.251)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_61.setTransform(960,540);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("rgba(255,255,255,0.224)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_62.setTransform(960,540);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(255,255,255,0.224)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_63.setTransform(960,540);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("rgba(255,255,255,0.2)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_64.setTransform(960,540);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(255,255,255,0.2)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_65.setTransform(960,540);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("rgba(255,255,255,0.176)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_66.setTransform(960,540);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(255,255,255,0.176)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_67.setTransform(960,540);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("rgba(255,255,255,0.149)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_68.setTransform(960,540);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(255,255,255,0.149)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_69.setTransform(960,540);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("rgba(255,255,255,0.125)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_70.setTransform(960,540);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(255,255,255,0.125)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_71.setTransform(960,540);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("rgba(255,255,255,0.102)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_72.setTransform(960,540);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(255,255,255,0.102)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_73.setTransform(960,540);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("rgba(255,255,255,0.075)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_74.setTransform(960,540);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(255,255,255,0.075)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_75.setTransform(960,540);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("rgba(255,255,255,0.051)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_76.setTransform(960,540);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(255,255,255,0.051)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_77.setTransform(960,540);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("rgba(255,255,255,0.024)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_78.setTransform(960,540);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(255,255,255,0.024)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_79.setTransform(960,540);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("rgba(255,255,255,0)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_80.setTransform(960,540);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(255,255,255,0)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_81.setTransform(960,540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_79},{t:this.shape_78}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,1922,1082);


(lib.Deadloading = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.deadMamaWithSound_0();
	this.instance.parent = this;
	this.instance.setTransform(0,0,3,3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Deadloading, new cjs.Rectangle(0,0,1920,1080), null);


(lib.Cave2Loading = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cave2WithSound_0();
	this.instance.parent = this;
	this.instance.setTransform(0,0,3,3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Cave2Loading, new cjs.Rectangle(0,0,1920,1080), null);


(lib.Cave1Loading = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cave1withSound_0();
	this.instance.parent = this;
	this.instance.setTransform(0,0,3,3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Cave1Loading, new cjs.Rectangle(0,0,1920,1080), null);


(lib.CliffLoading = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.instance = new lib.cliffWithSound_0();
	this.instance.parent = this;
	this.instance.setTransform(0,0,3,3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.CliffLoading, new cjs.Rectangle(0,0,1920,1080), null);


(lib.Eggloading = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape.setTransform(963.8,543.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_1.setTransform(963.8,543.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Eggloading, new cjs.Rectangle(2.8,2.8,1922,1082), null);


(lib.sPathUp3Button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACEv5IASAZIDuFJIBNBqQAWAfARAXIkAAAAk3n3IjAAAIInp1IBUBzIADACAk3RtIAA5EAD4nXIAAZE");
	this.shape.setTransform(50.4,113.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ak3RtIAA5EIAAggIjAAAIInp1IBUBzIADACIAPAXQBuCuB3CQIAJALIARAUIA8BWIhNhqIBNBqIAnA2IkAAAIAAAgIAAZEgACWvgIgSgZg");
	this.shape_1.setTransform(50.4,113.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,102.8,228.7);


(lib.sPathUp2Button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACEv5IASAZIDuFJIBNBqQAWAfARAXIkAAAAk3n3IjAAAIInp1IBUBzIADACAk3RtIAA5EAD4nXIAAZE");
	this.shape.setTransform(50.4,113.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ak3RtIAA5EIAAggIjAAAIInp1IBUBzIADACIAPAXQBuCuB3CQIAJALIARAUIA8BWIhNhqIBNBqIAnA2IkAAAIAAAgIAAZEgACWvgIgSgZg");
	this.shape_1.setTransform(50.4,113.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,102.8,228.7);


(lib.sPathUp1Button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACEv5IASAZIDuFJIBNBqQAWAfARAXIkAAAAk3n3IjAAAIInp1IBUBzIADACAk3RtIAA5EAD4nXIAAZE");
	this.shape.setTransform(50.4,113.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ak3RtIAA5EIAAggIjAAAIInp1IBUBzIADACIAPAXQBuCuB3CQIAJALIARAUIA8BWIhNhqIBNBqIAnA2IkAAAIAAAgIAAZEgACWvgIgSgZg");
	this.shape_1.setTransform(50.4,113.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,102.8,228.7);


(lib.MountainPathReturn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Az0iDIAfgSIGajuICFhNQAmgWAdgRIAAEAAz0iDIACgDApzE4IAADAIsQonICPhUAWEE4I/PAAApLj3IfPAA");
	this.shape.setTransform(141.1,50.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkcCjIAdgOIgfASgACzhpIBsg9IiFBOIAZgRg");
	this.shape_1.setTransform(42.9,20.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("A2DgvICPhUIAfgSQDZhuC0h3IANgJICFhNIBDgnIAAEAIAoAAIfPAAIAAIvI/PAAIgoAAIAADAg");
	this.shape_2.setTransform(141.1,50.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,-1,284.5,102.8);


(lib.SplitPathButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Az0iDIAfgSIGajuICFhNQAmgWAdgRIAAEAAz0iDIACgDApzE4IAADAIsQonICPhUApLj3IfPAAAWEE4I/PAA");
	this.shape.setTransform(141,50.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("A2DgvICPhUIAfgSQDZhuC0h3IANgJICFhNIBDgnIAAEAIAoAAIfPAAIAAIvI/PAAIgoAAIAADAg");
	this.shape_1.setTransform(141,50.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AkcCjIAdgOIgfASgACzhpIBsg9IiFBOIAZgRg");
	this.shape_2.setTransform(42.8,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,-1,284.5,102.8);


(lib.mPathPanel4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// signatureJosh
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(1820.2,1017.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.instance = new lib.MountainPathPanels();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 3
	this.instance_1 = new lib.dragon();
	this.instance_1.parent = this;
	this.instance_1.setTransform(442.5,470.3,0.889,0.889,-4.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.mPathPanel4, new cjs.Rectangle(0,0,1920,1080), null);


(lib.MountainPathRight2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AT1iDIgCgDAT1iDIgfgSImajuIiFhNQgmgWgdgRIAAEAAJ0E4IAADAIMQonIiPhUA2DE4IfPAAAJMj3I/PAA");
	this.shape.setTransform(141.1,50.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AJ0E4IgoAAI/PAAIAAovIfPAAIAoAAIAAkAIBDAnICFBNIANAJQC0B3DZBuIAdAPIACADIgfgSIAfASICPBUIsQIngAM8mDgAK3nQIBsA8IAZARg");
	this.shape_1.setTransform(141.1,50.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,-1,284.5,102.8);


(lib.mPathPanel3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// signatureJosh
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(1820.2,1017.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// panel
	this.instance = new lib.MountainPathPanels();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// dragon
	this.instance_1 = new lib.dragon();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1456,652,0.597,0.597);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.mPathPanel3, new cjs.Rectangle(0,0,1920,1080), null);


(lib.MountainPathUp1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACEP6IASgZIDulJIBNhqQAWgfARgXIkAAAAk3H4IjAAAIInJ1IBUhzIADgCAk3xsIAAZEAD4HYIAA5E");
	this.shape.setTransform(50.4,113.3,1,1,0,180,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("An3H4IDAAAIAAggIAA5EIIvAAIAAZEIAAAgIEAAAIgnA2IhNBqIgJALQh3CQhuCuIgSAZIhUBzgACEP6gACWPhIgPAXIgDACgACWPhIAAAAgAGEKYgAHRIuIg8BWIgRAUgAHRIuIAAAAg");
	this.shape_1.setTransform(50.4,113.3,1,1,0,180,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,102.8,228.7);


(lib.MountainPathLeft2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Az0iDIAfgSIGajuICFhNQAmgWAdgRIAAEAAz0iDIACgDApzE4IAADAIsQonICPhUApLj3IfPAAAWEE4I/PAA");
	this.shape.setTransform(141.1,50.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A2DgvICPhUIAfgSQDZhuC0h3IANgJIAZgRIBsg8IiFBNICFhNIBDgnIAAEAIAoAAIfPAAIAAIvI/PAAIgoAAIAADAgAzyiGIAdgPIgfASgAzViVg");
	this.shape_1.setTransform(141.1,50.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,-1,284.5,102.8);


(lib.mPathPanel2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// signatureJosh
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(1820.2,1017.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// panel
	this.instance = new lib.MountainPathPanels();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// dragon
	this.instance_1 = new lib.dragon();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1159,141.6,0.537,0.537,0,-16.4,163.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.mPathPanel2, new cjs.Rectangle(0,0,1920,1080), null);


(lib.MountainPathLeft1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Az0iDIAfgSIGajuICFhNQAmgWAdgRIAAEAAz0iDIACgDApzE4IAADAIsQonICPhUAWEE4I/PAAApLj3IfPAA");
	this.shape.setTransform(141.1,50.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A2DgvICPhUIAfgSQDZhuC0h3IANgJIAZgRIBsg8IiFBNICFhNIBDgnIAAEAIAoAAIfPAAIAAIvI/PAAIgoAAIAADAgAzyiGIAdgPIgfASgAzViVg");
	this.shape_1.setTransform(141.1,50.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,-1,284.5,102.8);


(lib.MountainPathDown1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACEP6IASgZIDulJIBNhqQAWgfARgXIkAAAAk3H4IjAAAIInJ1IBUhzIADgCAD4HYIAA5EAk3xsIAAZE");
	this.shape.setTransform(50.4,113.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("An3H4IDAAAIAAggIAA5EIIvAAIAAZEIAAAgIEAAAIgnA2IhNBqIBNhqIg8BWIgRAUIgJALQh3CQhuCuIgSAZIhUBzgACEP6gACWPhIgPAXIgDACgACWPhIAAAAg");
	this.shape_1.setTransform(50.4,113.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,102.8,228.7);


(lib.mPathPanel1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// signatureJosh
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(1820.2,1017.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// p
	this.instance = new lib.MountainPathPanels();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// dragon
	this.instance_1 = new lib.dragon();
	this.instance_1.parent = this;
	this.instance_1.setTransform(552.1,118,0.672,0.672,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.mPathPanel1, new cjs.Rectangle(0,0,1920,1080), null);


(lib.MountainPathRight1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AJ0E4IAADAIMQonIiPhUIgfgSImajuIiFhNQgmgWgdgRIAAEAAT1iDIgCgDAJMj3I/PAAA2DE4IfPAA");
	this.shape.setTransform(141.1,50.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AJ0E4IgoAAI/PAAIAAovIfPAAIAoAAIAAkAIBDAnICFBNIANAJQC0B3DZBuIAfASICPBUIsQIngAT1iDgATWiVIAdAPIACADgATWiVIAAAAgAM8mDgAK3nQIBsA8IAZARg");
	this.shape_1.setTransform(141.1,50.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,-1,284.5,102.8);


(lib.cave2ReturnButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Az0iDIAfgSIGajuICFhNQAmgWAdgRIAAEAAz0iDIACgDApzE4IAADAIsQonICPhUAWEE4I/PAAApLj3IfPAA");
	this.shape.setTransform(141.1,50.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkcCjIAdgOIgfASgACzhpIBsg9IiFBOIAZgRg");
	this.shape_1.setTransform(42.9,20.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("A2DgvICPhUIAfgSQDZhuC0h3IANgJICFhNIBDgnIAAEAIAoAAIfPAAIAAIvI/PAAIgoAAIAADAg");
	this.shape_2.setTransform(141.1,50.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,-1,284.5,102.8);


(lib.mountainPathButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AJ0E4IAADAIMQonIiPhUIgfgSImajuIiFhNQgmgWgdgRIAAEAAT1iDIgCgDA2DE4IfPAAAJMj3I/PAA");
	this.shape.setTransform(141.2,50.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AJ0E4IgoAAI/PAAIAAovIfPAAIAoAAIAAkAIBDAnICFBNIANAJQC0B3DZBuIAfASICPBUIsQIng");
	this.shape_1.setTransform(141.2,50.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AEACVIAdAOIACAEgAkeimIBsA9IAZARg");
	this.shape_2.setTransform(239.4,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,284.5,102.8);


(lib.cave2Up1Button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ak3n3IjAAAIInp1IBUBzIADACACEv5IASAZIDuFJIBNBqQAWAfARAXIkAAAAD4nXIAAZEAk3RtIAA5E");
	this.shape.setTransform(141.1,50.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ak3RtIAA5EIAAggIjAAAIInp1IBUBzIADACIAPAXQBuCuB3CQIAJALIARAUIA8BWIhNhqIBNBqIAnA2IkAAAIAAAgIAAZEgACWvgIgSgZg");
	this.shape_1.setTransform(141.1,50.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(89.8,-64,102.8,228.7);


(lib.cave2Panel3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// signature
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(1658.9,1043.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// p
	this.instance = new lib.deadCowScenePanel();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// d
	this.instance_1 = new lib.dragon();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1340.9,652,0.657,0.657,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.cave2Panel3, new cjs.Rectangle(0,0,1920,1104.2), null);


(lib.cave2Panel2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// signature
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(1658.9,1043.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// panel
	this.instance = new lib.deadCowScenePanel();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// dragon
	this.instance_1 = new lib.dragon();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1370.3,124,0.806,0.806,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.cave2Panel2, new cjs.Rectangle(0,0,1920,1104.2), null);


(lib.cave2Left1Button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Az0iDIAfgSIGajuICFhNQAmgWAdgRIAAEAAz0iDIACgDApzE4IAADAIsQonICPhUAWEE4I/PAAApLj3IfPAA");
	this.shape.setTransform(141.1,50.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A2DgvICPhUIAfgSQDZhuC0h3IANgJIAZgRIBsg8IiFBNICFhNIBDgnIAAEAIAoAAIfPAAIAAIvI/PAAIgoAAIAADAgAzyiGIAdgPIgfASgAzViVg");
	this.shape_1.setTransform(141.1,50.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,-1,284.5,102.8);


(lib.cave2Down1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACEP6IASgZIDulJIBNhqQAWgfARgXIkAAAAk3H4IjAAAIInJ1IBUhzIADgCAk3xsIAAZEAD4HYIAA5E");
	this.shape.setTransform(141.1,50.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("An3H4IDAAAIAAggIAA5EIIvAAIAAZEIAAAgIEAAAIgnA2IhNBqIgJALQh3CQhuCuIgSAZIhUBzgACEP6gACWPhIgPAXIgDACgACWPhIAAAAgAGEKYgAHRIuIg8BWIgRAUgAHRIuIAAAAg");
	this.shape_1.setTransform(141.1,50.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(89.8,-63.9,102.8,228.7);


(lib.cave2Right1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AT1iDIgfgSImajuIiFhNQgmgWgdgRIAAEAAJ0E4IAADAIMQonIiPhUIgCgDAJMj3I/PAAA2DE4IfPAA");
	this.shape.setTransform(141.2,50.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AJ0E4IgoAAI/PAAIAAovIfPAAIAoAAIAAkAIBDAnICFBNIANAJQC0B3DZBuIAdAPIACADICPBUIsQIngAT1iDIgfgSgAM8mDgAK3nQIBsA8IAZARg");
	this.shape_1.setTransform(141.2,50.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,284.5,102.8);


(lib.cave2Panel1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// signature
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(1658.9,1043.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.instance = new lib.deadCowScenePanel();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AreOpIAA9RIW9AAIAAdRg");
	mask.setTransform(73.5,269.7);

	// Layer 3
	this.instance_1 = new lib.dragon();
	this.instance_1.parent = this;
	this.instance_1.setTransform(147,155.8,0.389,0.389,0,5.7,-174.3);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.cave2Panel1, new cjs.Rectangle(0,0,1920,1104.2), null);


(lib.cave1ReturnButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Az0iDIAfgSIGajuICFhNQAmgWAdgRIAAEAAz0iDIACgDApzE4IAADAIsQonICPhUApLj3IfPAAAWEE4I/PAA");
	this.shape.setTransform(141.1,50.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkcCjIAdgOIgfASgACzhpIBsg9IiFBOIAZgRg");
	this.shape_1.setTransform(42.9,20.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("A2DgvICPhUIAfgSQDZhuC0h3IANgJICFhNIBDgnIAAEAIAoAAIfPAAIAAIvI/PAAIgoAAIAADAg");
	this.shape_2.setTransform(141.1,50.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,-1,284.5,102.8);


(lib.cave2VideoButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AJ0E4IAADAIMQonIiPhUIgfgSImajuIiFhNQgmgWgdgRIAAEAAT1iDIgCgDA2DE4IfPAAAJMj3I/PAA");
	this.shape.setTransform(141.2,50.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AJ0E4IgoAAI/PAAIAAovIfPAAIAoAAIAAkAIBDAnICFBNIANAJQC0B3DZBuIAfASICPBUIsQIng");
	this.shape_1.setTransform(141.2,50.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AEACVIAdAOIACAEgAkeimIBsA9IAZARg");
	this.shape_2.setTransform(239.4,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,284.5,102.8);


(lib.cave1Panel4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// signature
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(1658.9,1043.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.instance = new lib.caveWaterfallScenePanels();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgeJAtxMAAAhbhMA8SAAAMAAABbhg");
	mask.setTransform(1638.4,686.8);

	// dragon
	this.instance_1 = new lib.dragon();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1841.9,328,1.15,1.15,0,0,180);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.cave1Panel4, new cjs.Rectangle(0,0,1920,1104.2), null);


(lib.cave1left3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Az0iDIAfgSIGajuICFhNQAmgWAdgRIAAEAAz0iDIACgDApzE4IAADAIsQonICPhUApLj3IfPAAAWEE4I/PAA");
	this.shape.setTransform(141.1,50.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A2DgvICPhUIAfgSQDZhuC0h3IANgJIAZgRIBsg8IiFBNICFhNIBDgnIAAEAIAoAAIfPAAIAAIvI/PAAIgoAAIAADAgAzyiGIAdgPIgfASgAzViVg");
	this.shape_1.setTransform(141.1,50.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,-1,284.5,102.8);


(lib.cave1right3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AT1iDIgCgDAJ0E4IAADAIMQonIiPhUIgfgSImajuIiFhNQgmgWgdgRIAAEAA2DE4IfPAAAJMj3I/PAA");
	this.shape.setTransform(141.2,50.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AJ0E4IgoAAI/PAAIAAovIfPAAIAoAAIAAkAIBDAnIBsA8IAZARIANAJQC0B3DZBuIAfASICPBUIsQIngAM8mDIiFhNgAT1iDgATWiVIAdAPIACADgATWiVIAAAAg");
	this.shape_1.setTransform(141.2,50.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AJ0E4IgoAAI/PAAIAAovIfPAAIAoAAIAAkAIBDAnIBsA8IAZARIANAJQC0B3DZBuIAfASICPBUIsQIngAM8mDIiFhNgAT1iDgATWiVIAdAPIACADgATWiVIAAAAg");
	this.shape_2.setTransform(141.2,50.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AJ0E4IgoAAI/PAAIAAovIfPAAIAoAAIAAkAIBDAnIBsA8IAZARIANAJQC0B3DZBuIAfASICPBUIsQIngAM8mDIiFhNgAT1iDgATWiVIAdAPIACADgATWiVIAAAAg");
	this.shape_3.setTransform(141.2,50.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,284.5,102.8);


(lib.cave1Panel3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// signature
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(1658.9,1043.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.instance = new lib.caveWaterfallScenePanels();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 3
	this.instance_1 = new lib.dragondrink();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1282.4,965.7,1,1,0,83.2,-96.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.cave1Panel3, new cjs.Rectangle(0,0,1920,1104.2), null);


(lib.cave1left2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Az0iDIAfgSIGajuICFhNQAmgWAdgRIAAEAAz0iDIACgDApzE4IAADAIsQonICPhUApLj3IfPAAAWEE4I/PAA");
	this.shape.setTransform(141.1,50.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A2DgvICPhUIAfgSQDZhuC0h3IANgJIAZgRIBsg8IiFBNICFhNIBDgnIAAEAIAoAAIfPAAIAAIvI/PAAIgoAAIAADAgAzyiGIAdgPIgfASgAzViVg");
	this.shape_1.setTransform(141.1,50.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("A2DgvICPhUIAfgSQDZhuC0h3IANgJIAZgRIBsg8IiFBNICFhNIBDgnIAAEAIAoAAIfPAAIAAIvI/PAAIgoAAIAADAgAzyiGIAdgPIgfASgAzViVg");
	this.shape_2.setTransform(141.1,50.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("A2DgvICPhUIAfgSQDZhuC0h3IANgJIAZgRIBsg8IiFBNICFhNIBDgnIAAEAIAoAAIfPAAIAAIvI/PAAIgoAAIAADAgAzyiGIAdgPIgfASgAzViVg");
	this.shape_3.setTransform(141.1,50.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,-1,284.5,102.8);


(lib.cave1right2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AT1iDIgCgDAJ0E4IAADAIMQonIiPhUIgfgSImajuIiFhNQgmgWgdgRIAAEAA2DE4IfPAAAJMj3I/PAA");
	this.shape.setTransform(141.2,50.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AJ0E4IgoAAI/PAAIAAovIfPAAIAoAAIAAkAIBDAnIBsA8IAZARIANAJQC0B3DZBuIAfASICPBUIsQIngAM8mDIiFhNgAT1iDgATWiVIAdAPIACADgATWiVIAAAAg");
	this.shape_1.setTransform(141.2,50.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,284.5,102.8);


(lib.cave1Panel2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// signature
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(1658.9,1043.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.instance = new lib.caveWaterfallScenePanels();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgMLAhvMAAAhDdIYXAAMAAABDdg");
	mask.setTransform(575.8,863.7);

	// Layer 3
	this.instance_1 = new lib.dragon();
	this.instance_1.parent = this;
	this.instance_1.setTransform(673,590,0.738,0.738,0,0,180);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.cave1Panel2, new cjs.Rectangle(0,0,1920,1104.2), null);


(lib.cave1left1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Az0iDIAfgSIGajuICFhNQAmgWAdgRIAAEAAz0iDIACgDApzE4IAADAIsQonICPhUAWEE4I/PAAApLj3IfPAA");
	this.shape.setTransform(141.1,50.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A2DgvICPhUIAfgSQDZhuC0h3IANgJIAZgRIBsg8IBDgnIAAEAIAoAAIfPAAIAAIvI/PAAIgoAAIAADAgAs7mDICFhNgAzyiGIAdgPIgfASgAzViVg");
	this.shape_1.setTransform(141.1,50.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,-1,284.5,102.8);


(lib.cliffReturnBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Az0iDIAfgSIGajuICFhNQAmgWAdgRIAAEAAz0iDIACgDApzE4IAADAIsQonICPhUAWEE4I/PAAApLj3IfPAA");
	this.shape.setTransform(141.1,50.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkcCjIAdgOIgfASgACzhpIBsg9IiFBOIAZgRg");
	this.shape_1.setTransform(42.9,20.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("A2DgvICPhUIAfgSQDZhuC0h3IANgJICFhNIBDgnIAAEAIAoAAIfPAAIAAIvI/PAAIgoAAIAADAg");
	this.shape_2.setTransform(141.1,50.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("Az0iDIAfgSIGajuICFhNQAmgWAdgRIAAEAAz0iDIACgDApzE4IAADAIsQonICPhUApLj3IfPAAAWEE4I/PAA");
	this.shape_3.setTransform(141.1,50.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AkcCjIAdgOIgfASgACzhpIBsg9IiFBOIAZgRg");
	this.shape_4.setTransform(42.9,20.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("A2DgvICPhUIAfgSQDZhuC0h3IANgJICFhNIBDgnIAAEAIAoAAIfPAAIAAIvI/PAAIgoAAIAADAg");
	this.shape_5.setTransform(141.1,50.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("A2DgvICPhUIAfgSQDZhuC0h3IANgJIAZgRIBsg8IBDgnIAAEAIAoAAIfPAAIAAIvI/PAAIgoAAIAADAgAs7mDICFhNgAzyiGIAdgPIgfASgAzViVg");
	this.shape_6.setTransform(141.1,50.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("A2DgvICPhUIAfgSQDZhuC0h3IANgJIAZgRIBsg8IiFBNICFhNIBDgnIAAEAIAoAAIfPAAIAAIvI/PAAIgoAAIAADAgAzyiGIAdgPIgfASgAzViVg");
	this.shape_7.setTransform(141.1,50.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_6},{t:this.shape}]},1).to({state:[{t:this.shape_7},{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,-1,284.5,102.8);


(lib.cave1Right1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AT1iDIgfgSImajuIiFhNQgmgWgdgRIAAEAAJ0E4IAADAIMQonIiPhUIgCgDAJMj3I/PAAA2DE4IfPAA");
	this.shape.setTransform(141.2,50.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AJ0E4IgoAAI/PAAIAAovIfPAAIAoAAIAAkAIBDAnICFBNIANAJQC0B3DZBuIAdAPIACADICPBUIsQIngAT1iDIgfgSgAM8mDgAK3nQIBsA8IAZARg");
	this.shape_1.setTransform(141.2,50.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AJ0E4IgoAAI/PAAIAAovIfPAAIAoAAIAAkAIBDAnICFBNIANAJQC0B3DZBuIAfASICPBUIsQIng");
	this.shape_2.setTransform(141.2,50.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AEACVIAdAOIACAEgAkeimIBsA9IAZARg");
	this.shape_3.setTransform(239.4,20.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AJ0E4IgoAAI/PAAIAAovIfPAAIAoAAIAAkAIBDAnICFBNIANAJQC0B3DZBuIAfASICPBUIsQIng");
	this.shape_4.setTransform(141.2,50.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AJ0E4IgoAAI/PAAIAAovIfPAAIAoAAIAAkAIBDAnICFBNIANAJQC0B3DZBuIAdAPIACADICPBUIsQIngAT1iDIgfgSgAM8mDgAK3nQIBsA8IAZARg");
	this.shape_5.setTransform(141.2,50.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_4},{t:this.shape}]},1).to({state:[{t:this.shape_5},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,284.5,102.8);


(lib.cave1Panel1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// signature
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(1658.9,1043.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// panels
	this.instance = new lib.caveWaterfallScenePanels();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// dragon
	this.instance_1 = new lib.dragon();
	this.instance_1.parent = this;
	this.instance_1.setTransform(355.1,622,0.724,0.724,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.cave1Panel1, new cjs.Rectangle(0,0,1920,1104.2), null);


(lib.left3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Az0iDIAfgSIGajuICFhNQAmgWAdgRIAAEAAz0iDIACgDApzE4IAADAIsQonICPhUAWEE4I/PAAApLj3IfPAA");
	this.shape.setTransform(141.1,50.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A2DgvICPhUIAfgSQDZhuC0h3IANgJIAZgRIBsg8IiFBNICFhNIBDgnIAAEAIAoAAIfPAAIAAIvI/PAAIgoAAIAADAgAzyiGIAdgPIgfASgAzViVg");
	this.shape_1.setTransform(141.1,50.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("A2DgvICPhUIAfgSQDZhuC0h3IANgJICFhNIBDgnIAAEAIAoAAIfPAAIAAIvI/PAAIgoAAIAADAg");
	this.shape_2.setTransform(141.1,50.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AkcCjIAdgOIgfASgACzhpIBsg9IiFBOIAZgRg");
	this.shape_3.setTransform(42.9,20.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("A2DgvICPhUIAfgSQDZhuC0h3IANgJIAZgRIBsg8IiFBNICFhNIBDgnIAAEAIAoAAIfPAAIAAIvI/PAAIgoAAIAADAgAzyiGIAdgPIgfASgAzViVg");
	this.shape_4.setTransform(141.1,50.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,-1,284.5,102.8);


(lib.cliffPanel4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// signatureJosh
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A9VJuQgbgPgCg3QgGhvAEg6QAGheAghEQAcg+AygwQAygwA/gYQg1hcgchoQgbhpgBhqQgChBAhgWQAWgOAdAKQAaAJAUAXQA+BDgECIQgBAkgGBIQgDBBAHAsQB/gkCFgMQgEgQAGgOQAFgQANAEQAIACAHAQQAJASAVAbQAbAhAGAJQARAYAGAZQAHAdgKAXQAoACAXgCQAkgDAagLQAXgLAqgjQA0gtAZggQAkgxACgwIgFhNQgCgsAWgUQAOAMAGAZQADAPAAAeIgEFdQAAA3gIAgQgLAvgdAaQgVARgeAHQgbAFgdgEQgagEgdgLQgSgGgjgQIAlBsQAIAaAMAKQAOAMAZgCQA2gDAvgyQAhgjAkhDIAdg6QAOggAHgbQAEgRADgeIAHgvQAEgaAXhFQAahUAMhUQAKhPABhmQAAgtgDiJQAAggARgBQASgDAFAjQAiFFgNEyQAOgYALgOQARgTATgHQARgHAeACIAVABQALACAHAGQAHAGADANIADAYIAEDJQAPgbALgvQAPg8AGgPQAQgsAdglQAegkAngYQAuBbgKBlQgCASgLANQgNAOgMgIQAJhOgdhJQgyA7gaBRQgXBLAABVQAAAVgGAPQgIATgPACQgQABgKgRQgJgOgCgUQgSiVAAiWIg4ADQguAvgWBAQgXBBAIBBIADAfQAAARgFANQgGAPgPAGQgQAHgLgJQgLgIgCgYQgDgrANg7QARhEAHghQAVhpgRhsQgdAngNBKIgXB7QgKAigSAnQgLAYgZAuQgVAogMATQgUAggUAWQg0A5g/AGQgrADgagXQgNgLgKgTQgGgKgJgZQgWg7g7iLIhIimQADBLgXBKQgXBKguA9QgSAXgUALQgZAOgVgJQgPgHgIgSQgGgPAAgTQAAgKADgaQACgWgBgMQgEgpgmgkQgZgYg0geQgmBBgpCkQgmCZgxBHQgSAYgVAMQgPAIgNAAQgKAAgJgFgA7cCLQg4AtgaA3QgeA9ABBnIABCsQAjgJAZgmQASgbAPgwIAchhIAVhKQAMgtAPgtQAKggAQgqQAOgmAMgNQhHAmgoAigA1rADQgWAHgMAQQgIAJgKAWQgRAogFAjQgHAoACBEQACBTgCAbIAVgFQgEgJAIgLQAEgGANgLQAagWAOgeQAFgNAFgSIAJghQAMgwACgJQAGgeAAglQABgWgCgtQgIgBgJAAQgMAAgMADgAwkB3QgdAWgOAGQgSAHgiADQgnAEgPAEQAAAeAEARQAHAaASALQAJAFAUAGQATAHAiAXQAyAcAugNQAngLAUgiQALgUADgbQADgTAAggIAAiigA3eASQgbADgNAEQgIACgYAJQgTAIgNABQANAkAYAeQAZAeAiATQAFgGgBgPQgCgSACgFQACgGAKgNQAJgLABgIIgBgMQgCgIACgEQAAgDAIgKQANgPADgVIgEgEQgMANgZAEgA7ImeQgGAGgCAKQgCAHAAAKIABASIgBAnQgBAXADAPQACAJAHAVQAGAUACALQACALgBAYQAAAXADAMQADAPANAVQAQAcAEAIIAPAoQAKAWAQAJIABkFQAAgfgCgQQgDgZgJgSQgIgQgagaQgQgQgLAAQgJAAgHAHgACsHvQg5gFgcABIggAAQgTgBgLgGQgQgJgJgUQgEgMgGgZIg1jxIgzBNQgJANgIABQgKAAgFgLQgEgJAAgNQAEhTAkhnQAMghA8iSQAshuAQhHQAXhjgOhVQhMAEhJBCQhbBWgkCKQgEAOgHAIQgIALgKgCQgTgEAFghQARhdBDhUQA6hKBbg7QAegTAZgGQAggHAVARQAUARAEAuQAGBUgbBnQgQA/gtB3IhmEEQAJgUAbABQAZABAPASQANAPAGAZQACAMAEAiQALBrAqBhQAagGBBAEQA7AEAfgMQBOgeAZiLQAVh3ACidQABgxgFjmQgBgdACgRQADgYALgRQAPgZAsgVQCBhDC+giQAYgFE6goIGWg1QDogWCsAcIAJADQAGACADADQAEAGgDAJQgDAIgHAEQgHADgJABIgQgBQiigSjLAPQh7AJjxAgQizAYhZAOQiVAXh1AcQhMASgsAUQg/AdggAuQAJDZgEByQgFC2giCQQgeB+hHAhQgbAMgpAAIgPgBg");
	this.shape.setTransform(1543.6,953.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// panels
	this.instance = new lib._1cliff();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgTrAsrMAAAhZVMAnWAAAMAAABZVg");
	mask.setTransform(1449.5,793.7);

	// Layer 5
	this.instance_1 = new lib.dragon();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1519.3,399.6,1,1,0,-11.2,168.8);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// nest
	this.instance_2 = new lib._2cliff();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.cliffPanel4, new cjs.Rectangle(0,0,1920,1080), null);


(lib.caveVideoBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AT1iDIgCgDAT1iDIgfgSImajuIiFhNQgmgWgdgRIAAEAAJ0E4IAADAIMQonIiPhUAJMj3I/PAAA2DE4IfPAA");
	this.shape.setTransform(141.2,50.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AJ0E4IgoAAI/PAAIAAovIfPAAIAoAAIAAkAIBDAnICFBNIANAJQC0B3DZBuIAfASICPBUIsQIng");
	this.shape_1.setTransform(141.2,50.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AEACVIAdAOIACAEgAkeimIBsA9IAZARg");
	this.shape_2.setTransform(239.4,20.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AT1iDIgfgSImajuIiFhNQgmgWgdgRIAAEAAJ0E4IAADAIMQonIiPhUIgCgDA2DE4IfPAAAJMj3I/PAA");
	this.shape_3.setTransform(141.2,50.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AJ0E4IgoAAI/PAAIAAovIfPAAIAoAAIAAkAIBDAnICFBNIANAJQC0B3DZBuIAfASICPBUIsQIng");
	this.shape_4.setTransform(141.2,50.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AEACVIAdAOIACAEgAkeimIBsA9IAZARg");
	this.shape_5.setTransform(239.4,20.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AT1iDIgfgSImajuIiFhNQgmgWgdgRIAAEAAJ0E4IAADAIMQonIiPhUIgCgDAJMj3I/PAAA2DE4IfPAA");
	this.shape_6.setTransform(141.2,50.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AJ0E4IgoAAI/PAAIAAovIfPAAIAoAAIAAkAIBDAnICFBNIANAJQC0B3DZBuIAdAPIACADICPBUIsQIngAT1iDIgfgSgAM8mDgAK3nQIBsA8IAZARg");
	this.shape_7.setTransform(141.2,50.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,284.5,102.8);


(lib.right2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AT1iDIgCgDAJ0E4IAADAIMQonIiPhUIgfgSImajuIiFhNQgmgWgdgRIAAEAA2DE4IfPAAAJMj3I/PAA");
	this.shape.setTransform(141.2,50.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AJ0E4IgoAAI/PAAIAAovIfPAAIAoAAIAAkAIBDAnIBsA8IAZARIANAJQC0B3DZBuIAfASICPBUIsQIngAM8mDIiFhNgAT1iDgATWiVIAdAPIACADgATWiVIAAAAg");
	this.shape_1.setTransform(141.2,50.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AJ0E4IgoAAI/PAAIAAovIfPAAIAoAAIAAkAIBDAnICFBNIANAJQC0B3DZBuIAfASICPBUIsQIng");
	this.shape_2.setTransform(141.2,50.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AEACVIAdAOIACAEgAkeimIBsA9IAZARg");
	this.shape_3.setTransform(239.4,20.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AJ0E4IgoAAI/PAAIAAovIfPAAIAoAAIAAkAIBDAnIBsA8IAZARIANAJQC0B3DZBuIAfASICPBUIsQIngAM8mDIiFhNgAT1iDgATWiVIAdAPIACADgATWiVIAAAAg");
	this.shape_4.setTransform(141.2,50.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,284.5,102.8);


(lib.left2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Az0iDIAfgSIGajuICFhNQAmgWAdgRIAAEAAz0iDIACgDApzE4IAADAIsQonICPhUApLj3IfPAAAWEE4I/PAA");
	this.shape.setTransform(141.1,50.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A2DgvICPhUIAfgSQDZhuC0h3IANgJIAZgRIBsg8IiFBNICFhNIBDgnIAAEAIAoAAIfPAAIAAIvI/PAAIgoAAIAADAgAzyiGIAdgPIgfASgAzViVg");
	this.shape_1.setTransform(141.1,50.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("A2DgvICPhUIAfgSQDZhuC0h3IANgJICFhNIBDgnIAAEAIAoAAIfPAAIAAIvI/PAAIgoAAIAADAg");
	this.shape_2.setTransform(141.1,50.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AkcCjIAdgOIgfASgACzhpIBsg9IiFBOIAZgRg");
	this.shape_3.setTransform(42.9,20.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("A2DgvICPhUIAfgSQDZhuC0h3IANgJIAZgRIBsg8IiFBNICFhNIBDgnIAAEAIAoAAIfPAAIAAIvI/PAAIgoAAIAADAgAzyiGIAdgPIgfASgAzViVg");
	this.shape_4.setTransform(141.1,50.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,-1,284.5,102.8);


(lib.cliffPanel3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// signatureJosh
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A9VJuQgbgPgCg3QgGhvAEg6QAGheAghEQAcg+AygwQAygwA/gYQg1hcgchoQgbhpgBhqQgChBAhgWQAWgOAdAKQAaAJAUAXQA+BDgECIQgBAkgGBIQgDBBAHAsQB/gkCFgMQgEgQAGgOQAFgQANAEQAIACAHAQQAJASAVAbQAbAhAGAJQARAYAGAZQAHAdgKAXQAoACAXgCQAkgDAagLQAXgLAqgjQA0gtAZggQAkgxACgwIgFhNQgCgsAWgUQAOAMAGAZQADAPAAAeIgEFdQAAA3gIAgQgLAvgdAaQgVARgeAHQgbAFgdgEQgagEgdgLQgSgGgjgQIAlBsQAIAaAMAKQAOAMAZgCQA2gDAvgyQAhgjAkhDIAdg6QAOggAHgbQAEgRADgeIAHgvQAEgaAXhFQAahUAMhUQAKhPABhmQAAgtgDiJQAAggARgBQASgDAFAjQAiFFgNEyQAOgYALgOQARgTATgHQARgHAeACIAVABQALACAHAGQAHAGADANIADAYIAEDJQAPgbALgvQAPg8AGgPQAQgsAdglQAegkAngYQAuBbgKBlQgCASgLANQgNAOgMgIQAJhOgdhJQgyA7gaBRQgXBLAABVQAAAVgGAPQgIATgPACQgQABgKgRQgJgOgCgUQgSiVAAiWIg4ADQguAvgWBAQgXBBAIBBIADAfQAAARgFANQgGAPgPAGQgQAHgLgJQgLgIgCgYQgDgrANg7QARhEAHghQAVhpgRhsQgdAngNBKIgXB7QgKAigSAnQgLAYgZAuQgVAogMATQgUAggUAWQg0A5g/AGQgrADgagXQgNgLgKgTQgGgKgJgZQgWg7g7iLIhIimQADBLgXBKQgXBKguA9QgSAXgUALQgZAOgVgJQgPgHgIgSQgGgPAAgTQAAgKADgaQACgWgBgMQgEgpgmgkQgZgYg0geQgmBBgpCkQgmCZgxBHQgSAYgVAMQgPAIgNAAQgKAAgJgFgA7cCLQg4AtgaA3QgeA9ABBnIABCsQAjgJAZgmQASgbAPgwIAchhIAVhKQAMgtAPgtQAKggAQgqQAOgmAMgNQhHAmgoAigA1rADQgWAHgMAQQgIAJgKAWQgRAogFAjQgHAoACBEQACBTgCAbIAVgFQgEgJAIgLQAEgGANgLQAagWAOgeQAFgNAFgSIAJghQAMgwACgJQAGgeAAglQABgWgCgtQgIgBgJAAQgMAAgMADgAwkB3QgdAWgOAGQgSAHgiADQgnAEgPAEQAAAeAEARQAHAaASALQAJAFAUAGQATAHAiAXQAyAcAugNQAngLAUgiQALgUADgbQADgTAAggIAAiigA3eASQgbADgNAEQgIACgYAJQgTAIgNABQANAkAYAeQAZAeAiATQAFgGgBgPQgCgSACgFQACgGAKgNQAJgLABgIIgBgMQgCgIACgEQAAgDAIgKQANgPADgVIgEgEQgMANgZAEgA7ImeQgGAGgCAKQgCAHAAAKIABASIgBAnQgBAXADAPQACAJAHAVQAGAUACALQACALgBAYQAAAXADAMQADAPANAVQAQAcAEAIIAPAoQAKAWAQAJIABkFQAAgfgCgQQgDgZgJgSQgIgQgagaQgQgQgLAAQgJAAgHAHgACsHvQg5gFgcABIggAAQgTgBgLgGQgQgJgJgUQgEgMgGgZIg1jxIgzBNQgJANgIABQgKAAgFgLQgEgJAAgNQAEhTAkhnQAMghA8iSQAshuAQhHQAXhjgOhVQhMAEhJBCQhbBWgkCKQgEAOgHAIQgIALgKgCQgTgEAFghQARhdBDhUQA6hKBbg7QAegTAZgGQAggHAVARQAUARAEAuQAGBUgbBnQgQA/gtB3IhmEEQAJgUAbABQAZABAPASQANAPAGAZQACAMAEAiQALBrAqBhQAagGBBAEQA7AEAfgMQBOgeAZiLQAVh3ACidQABgxgFjmQgBgdACgRQADgYALgRQAPgZAsgVQCBhDC+giQAYgFE6goIGWg1QDogWCsAcIAJADQAGACADADQAEAGgDAJQgDAIgHAEQgHADgJABIgQgBQiigSjLAPQh7AJjxAgQizAYhZAOQiVAXh1AcQhMASgsAUQg/AdggAuQAJDZgEByQgFC2giCQQgeB+hHAhQgbAMgpAAIgPgBg");
	this.shape.setTransform(1543.6,953.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// panel
	this.instance = new lib._1cliff();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// dragon
	this.instance_1 = new lib.dragon();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1112.9,688,0.642,0.642,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// nest
	this.instance_2 = new lib._2cliff();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.cliffPanel3, new cjs.Rectangle(0,0,1920,1080), null);


(lib.right1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AT1iDIgfgSImajuIiFhNQgmgWgdgRIAAEAAJ0E4IAADAIMQonIiPhUIgCgDAJMj3I/PAAA2DE4IfPAA");
	this.shape.setTransform(141.2,50.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AJ0E4IgoAAI/PAAIAAovIfPAAIAoAAIAAkAIBDAnICFBNIANAJQC0B3DZBuIAdAPIACADICPBUIsQIngAT1iDIgfgSgAM8mDgAK3nQIBsA8IAZARg");
	this.shape_1.setTransform(141.2,50.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AJ0E4IgoAAI/PAAIAAovIfPAAIAoAAIAAkAIBDAnICFBNIANAJQC0B3DZBuIAfASICPBUIsQIng");
	this.shape_2.setTransform(141.2,50.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AEACVIAdAOIACAEgAkeimIBsA9IAZARg");
	this.shape_3.setTransform(239.4,20.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AJ0E4IgoAAI/PAAIAAovIfPAAIAoAAIAAkAIBDAnICFBNIANAJQC0B3DZBuIAfASICPBUIsQIng");
	this.shape_4.setTransform(141.2,50.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_4},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_4},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,284.5,102.8);


(lib.rawrBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009933").s().p("AG7J2IgNgTQjFA/jpABQm4gBk3jlQk3jlAAlCQAAlFE3jlQAcgUAdgTQEmi9GQgBQG5AAE2DlQEHDCAqEFQAHAvAAA0QAAFCk4DlQg/AvhEAmQANAcAQAfQBMCUBpCZQj+hFiFi/g");
	this.shape.setTransform(106.3,89);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003300").s().p("AgJBcQgFgEAAgHQAAgGAFgEQAEgFAFAAQAGAAAFAFQAEAEAAAGQAAAHgEAEQgFAFgGAAQgFAAgEgFgAgBAsIgNhuIgBgLQAAgIAGgGQAEgFAGAAQAFAAAFAFQAFAGAAAKIgBAJIgNBug");
	this.shape_1.setTransform(180.3,73.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003300").s().p("AgKBcQgEgEAAgHQAAgGAEgEQAFgFAFAAQAGAAAFAFQAEAEAAAGQAAAHgEAEQgFAFgGAAQgFAAgFgFgAgCAsIgLhuIgBgLQAAgIAEgGQAFgFAGAAQAGAAAEAFQAFAGgBAKIAAAJIgMBug");
	this.shape_2.setTransform(171,73.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003300").s().p("AgKBcQgEgEAAgHQAAgGAEgEQAEgFAGAAQAHAAAEAFQAEAEAAAGQAAAHgEAEQgEAFgHAAQgGAAgEgFgAgBAsIgMhuIgCgLQABgIAEgGQAFgFAFAAQAHAAAEAFQAEAGABAKIgBAJIgNBug");
	this.shape_3.setTransform(161.7,73.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003300").s().p("AgJBcQgFgEAAgHQAAgGAFgEQAEgFAFAAQAGAAAFAFQAEAEAAAGQAAAHgEAEQgFAFgGAAQgFAAgEgFgAgBAsIgNhuIgBgLQAAgIAGgGQAEgFAGAAQAFAAAFAFQAFAGAAAKIgBAJIgNBug");
	this.shape_4.setTransform(152.4,73.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#003300").s().p("AgKBcQgEgEAAgHQAAgGAEgEQAFgFAFAAQAGAAAFAFQAEAEAAAGQAAAHgEAEQgFAFgGAAQgFAAgFgFgAgCAsIgLhuIgBgLQAAgIAEgGQAFgFAGAAQAGAAAEAFQAFAGgBAKIAAAJIgMBug");
	this.shape_5.setTransform(143.1,73.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003300").s().p("AgKBcQgEgEAAgHQAAgGAEgEQAEgFAGAAQAHAAAEAFQAEAEAAAGQAAAHgEAEQgEAFgHAAQgGAAgEgFgAgBAsIgMhuIgCgLQABgIAEgGQAFgFAFAAQAHAAAEAFQAEAGABAKIgBAJIgNBug");
	this.shape_6.setTransform(133.8,73.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#003300").s().p("AgJBcQgFgEAAgHQAAgGAFgEQAEgFAFAAQAGAAAFAFQAEAEAAAGQAAAHgEAEQgFAFgGAAQgFAAgEgFgAgBAsIgNhuIgBgLQAAgIAGgGQAEgFAGAAQAFAAAFAFQAFAGAAAKIgBAJIgNBug");
	this.shape_7.setTransform(124.5,73.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#003300").s().p("AgKBcQgEgEAAgHQAAgGAEgEQAFgFAFAAQAGAAAFAFQAEAEAAAGQAAAHgEAEQgFAFgGAAQgFAAgFgFgAgCAsIgLhuIgBgLQAAgIAEgGQAFgFAGAAQAGAAAEAFQAFAGgBAKIAAAJIgMBug");
	this.shape_8.setTransform(115.2,73.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#003300").s().p("AArBdIg+hXIgMAAIgDAAIgFAAIAAA2QABARAEAFQAEAGALAAIAHAAIAAAFIhPAAIAAgFIAHAAQAMAAAEgIQADgEABgQIAAh3QgBgRgEgFQgEgGgLAAIgHAAIAAgFIBDAAQAdAAAOAFQAOAEAKAMQAJALABAQQAAARgMANQgLAMgXAFIAmA1QANASAJAGQAKAGAPACIAAAFgAgnhPIAABNIAFABIADAAQAbAAANgMQANgLgBgSQAAgSgKgKQgLgLgRAAQgIAAgOACg");
	this.shape_9.setTransform(101.6,73.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#003300").s().p("AArBfIgqh2IgpB2IgFAAIg3iZIgIgUQgDgGgEgCQgFgDgIAAIAAgFIBFAAIAAAFIgEAAQgHAAgEAEQgEADAAAFQAAAEAGASIAlBnIAfhYIgGgPIgEgNIgHgMIgEgEIgHgEIgIgBIAAgFIBHAAIAAAFIgFAAQgHAAgEAEQgEADAAAGQAAAHAHARIAjBkIAjhlQAGgRAAgHQAAgDgBgDQgCgDgDgBQgGgCgIAAIAAgFIA3AAIAAAFQgHAAgEADQgFADgEAHIgJAXIgzCUg");
	this.shape_10.setTransform(78.7,73.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#003300").s().p("AAZBfIAAgFQAMgBAEgDQADgDAAgFQABgGgGgNIgMgaIhGAAIgNAdQgEALAAAFQAAAEADAEQAEADAOABIAAAFIg7AAIAAgFQAMgCADgEQAIgGAIgUIBBiYIAEAAIBBCZQAHATAHAGQAGAFALABIAAAFgAgnAXIA/AAIgehKg");
	this.shape_11.setTransform(55.3,73.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#003300").s().p("AAqBdIg9hXIgMAAIgDAAIgFAAIAAA2QAAARAFAFQAEAGALAAIAHAAIAAAFIhPAAIAAgFIAHAAQAMAAAEgIQADgEAAgQIAAh3QAAgRgEgFQgEgGgLAAIgHAAIAAgFIBDAAQAdAAAOAFQAOAEAJAMQALALAAAQQAAARgMANQgLAMgXAFIAmA1QANASAJAGQAKAGAPACIAAAFgAgnhPIAABNIAFABIADAAQAbAAANgMQANgLgBgSQAAgSgKgKQgLgLgRAAQgIAAgOACg");
	this.shape_12.setTransform(36.2,73.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#006600").s().p("AG7J2IgNgTQjFA/jpABQm4gBk3jlQk3jlAAlCQAAlFE3jlQAcgUAdgTQEmi9GQgBQG5AAE2DlQEHDCAqEFQAHAvAAA0QAAFCk4DlQg/AvhEAmQANAcAQAfQBMCUBpCZQj+hFiFi/g");
	this.shape_13.setTransform(106.3,89);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#003300").s().p("AG7J2IgNgTQjFA/jpABQm4gBk3jlQk3jlAAlCQAAlFE3jlQAcgUAdgTQEmi9GQgBQG5AAE2DlQEHDCAqEFQAHAvAAA0QAAFCk4DlQg/AvhEAmQANAcAQAfQBMCUBpCZQj+hFiFi/g");
	this.shape_14.setTransform(106.3,89);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_14},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_14},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,212.6,177.9);


(lib.cliffPanel2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// signatureJosh
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(1543.6,953.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// panels
	this.instance = new lib._1cliff();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// dragon
	this.instance_1 = new lib.DRAGONUP();
	this.instance_1.parent = this;
	this.instance_1.setTransform(214,500,1.748,1.748);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// nest
	this.instance_2 = new lib._2cliff();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.cliffPanel2, new cjs.Rectangle(0,0,1920,1080), null);


(lib.left1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Az0iDIAfgSIGajuICFhNQAmgWAdgRIAAEAAz0iDIACgDApzE4IAADAIsQonICPhUApLj3IfPAAAWEE4I/PAA");
	this.shape.setTransform(141.1,50.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A2DgvICPhUIAfgSQDZhuC0h3IANgJIAZgRIBsg8IiFBNICFhNIBDgnIAAEAIAoAAIfPAAIAAIvI/PAAIgoAAIAADAgAzyiGIAdgPIgfASgAzViVg");
	this.shape_1.setTransform(141.1,50.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("A2DgvICPhUIAfgSQDZhuC0h3IANgJICFhNIBDgnIAAEAIAoAAIfPAAIAAIvI/PAAIgoAAIAADAg");
	this.shape_2.setTransform(141.1,50.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AkcCjIAdgOIgfASgACzhpIBsg9IiFBOIAZgRg");
	this.shape_3.setTransform(42.9,20.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("A2DgvICPhUIAfgSQDZhuC0h3IANgJIAZgRIBsg8IiFBNICFhNIBDgnIAAEAIAoAAIfPAAIAAIvI/PAAIgoAAIAADAgAzyiGIAdgPIgfASgAzViVg");
	this.shape_4.setTransform(141.1,50.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,-1,284.5,102.8);


(lib.cliffPanel1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// signatureJosh
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(1543.6,953.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// panels
	this.instance = new lib._1cliff();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// logs
	this.instance_1 = new lib._2cliff();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// dragon
	this.instance_2 = new lib.DRAGONIN();
	this.instance_2.parent = this;
	this.instance_2.setTransform(833,577);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.cliffPanel1, new cjs.Rectangle(0,0,1920,1080), null);


(lib.startBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Start", "bold 100px 'Times New Roman'");
	this.text.lineHeight = 113;
	this.text.lineWidth = 240;
	this.text.parent = this;
	this.text.setTransform(98.7,52.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("EAh+AAAQAAHZp9FNQp9FPuEAAQuEAAp8lPQp9lNAAnZQAAnYJ9lOQJ8lOOEAAQOEAAJ9FOQJ9FOAAHYg");
	this.shape.setTransform(217.4,114.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A4AMmQp8lNgBnZQABnXJ8lPQJ8lOOEAAQOFAAJ8FOQJ8FPAAHXQAAHZp8FNQp8FOuFAAQuEAAp8lOg");
	this.shape_1.setTransform(217.4,114.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("EAqdAAAQAAJPscGhQscGixlAAQxlAAscmiQsbmhAApPQAApOMbmhQMcmiRlAAQRlAAMcGiQMcGhAAJOg");
	this.shape_2.setTransform(217.4,114.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("A+BPwQsbmhAApPQAApOMbmhQMdmiRkAAQRlAAMcGiQMcGhAAJOQAAJPscGhQscGixlAAQxkAAsdmig");
	this.shape_3.setTransform(217.4,114.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(1,1,1).p("AZeAAQAAFjndD6QneD7qjAAQqiAAnej7Qndj6AAljQAAliHdj6QHej7KiAAQKjAAHeD7QHdD6AAFig");
	this.shape_4.setTransform(217.4,114.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AyAJdQndj7AAliQAAlhHdj7QHej7KiABQKjgBHeD7QHdD7AAFhQAAFindD7QneD7qjAAQqiAAnej7g");
	this.shape_5.setTransform(217.4,114.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text,p:{scaleX:1,scaleY:1,x:98.7,y:52.8,color:"#000000"}}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.text,p:{scaleX:1.25,scaleY:1.25,x:69,y:37.4,color:"#666666"}}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.text,p:{scaleX:0.75,scaleY:0.75,x:128.3,y:68.1,color:"#000000"}}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.text,p:{scaleX:0.75,scaleY:0.75,x:128.3,y:68.1,color:"#000000"}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,436.7,230.1);


(lib.sPathPanel1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// signatureJosh copy 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(1182.5,646.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// signatureJosh copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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");
	this.shape_1.setTransform(1856.8,649.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// signatureJosh
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("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");
	this.shape_2.setTransform(1820.2,1017.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// signature
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("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");
	this.shape_3.setTransform(467.8,660.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eh2YAZ7MAAAgz2MDsxAAAMAAAAz2g");
	mask.setTransform(985.6,913.7);

	// Layer 2
	this.instance = new lib.dragon();
	this.instance.parent = this;
	this.instance.setTransform(1451.8,-227,2.439,2.439,0,0,180);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 7
	this.instance_1 = new lib.MountainPathReturn();
	this.instance_1.parent = this;
	this.instance_1.setTransform(20,855);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.instance_2 = new lib.splitpaths();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.sPathPanel1, new cjs.Rectangle(0,0,1956.6,1080), null);


(lib.startStage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.startBtn = new lib.startBtn();
	this.startBtn.name = "startBtn";
	this.startBtn.parent = this;
	this.startBtn.setTransform(965.9,543.6,1,1,0,0,0,217.3,114);
	new cjs.ButtonHelper(this.startBtn, 0, 1, 2, false, new lib.startBtn(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EiVyhURMErlAAAMAAACokMkrlAAAg");
	this.shape.setTransform(961.3,540.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EiVyBUTMAAAiolMErlAAAMAAAColgA3RsHQp9FOAAHXQAAHZJ9FOQJ8FOOEAAQOEAAJ9lOQJ8lOAAnZQAAnXp8lOQp9lOuEAAQuEAAp8FOg");
	this.shape_1.setTransform(961.3,540.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.startBtn}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.startStage, new cjs.Rectangle(1.6,0.1,1919.4,1080.9), null);


// stage content:
(lib.vidTest2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		root = this;
		
		//Cliff
			//Movie Clips
			//Panel 1
			var cliff1 = new lib.cliffPanel1();
			var cliffLeft1 = new lib.left1();
			var fadeIn = new lib.FadeIn();
			//Panel 2
			var cliff2 = new lib.cliffPanel2();
			var cliffRight1 = new lib.right1();
			var rawr = new lib.rawrBtn();
			var rawrAudio = new Audio('dragonSound.mp3');
			//Panel 3
			var cliff3 = new lib.cliffPanel3();
			var cliffRight2 = new lib.right2();
			var cliffLeft2 = new lib.left2();
			//Panel 4
			var cliff4 = new lib.cliffPanel4();
			var cliffLeft3 = new lib.left3();
			var caveVidBtn = new lib.caveVideoBtn();
			//Cave 1 Panel 1 Variables
			var cave11 = new lib.cave1Panel1();
			var cliffRet = new lib.cliffReturnBtn();
			var c1r1 = new lib.cave1Right1();
			
			
			
			
			//EventListeners
			//Panel 1
			function loadCliffScene(){
				video.src = 'cliffWithSound.mp4';
					video.loop = true;
					video.autoplay = true;
					stage.addChild(cliff1);
					stage.addChild(cliffLeft1);
					stage.addChild(fadeIn);
					fadeIn.gotoAndPlay(0)
					cliffLeft1.stop();
					cliffLeft1.x = 464;
					cliffLeft1.y = 500;
			}
			
			cliffLeft1.addEventListener('click', loadCliffPanel2.bind(root));
			
			function loadCliffPanel2(){
				stage.removeChild(cliff1);
				stage.removeChild(cliffLeft1);
				addCliffPanel2();
			}
			//Panel 2
			cliffRight1.addEventListener('click', loadCliffPanel3.bind(root));
			rawr.addEventListener('click', playRawrAudio.bind(root));
			
			function loadCliffPanel3(){
				removeCliffPanel2();
				addCliffPanel3();
			}
			
			function playRawrAudio(){
				rawrAudio.play();
			}
			//Panel 3
			cliffRight2.addEventListener('click',loadCliffPanel4.bind(root));
			cliffLeft2.addEventListener('click',loadCliffPanel2Again.bind(root));
			
			function loadCliffPanel4(){
				removeCliffPanel3();
				addCliffPanel4();
			}
			
			function loadCliffPanel2Again(){
				removeCliffPanel3();
				addCliffPanel2();
			}
			//Panel 4
			cliffLeft3.addEventListener('click', loadCliffPanel3Again.bind(root));
			caveVidBtn.addEventListener('click', loadCaveScene.bind(root));
			
			function loadCliffPanel3Again(){
				removeCliffPanel4();
				addCliffPanel3();
			}
			
			function loadCaveScene(){
				removeCliffPanel4();
				video.src = 'cave1withSound.mp4';
				video.loop = true;
				addC1Panel1();
				stage.addChild(fadeInBlack);
				fadeInBlack.gotoAndPlay(0);
				cliffLoad.visible = (false);
				cave1Load.visible = (true);
				
			}
			
			///Add Cliff Panel Functions
			function addCliffPanel2(){
				stage.addChild(cliff2);
				stage.addChild(cliffRight1);
				cliffRight1.stop();
				stage.addChild(rawr);
				rawr.stop();
				
				//button locations
				cliffRight1.x = 487;
				cliffRight1.y = 500;
				rawr.x = 22;
				rawr.y = 444;
			}
			
			function addCliffPanel3(){
				stage.addChild(cliff3);
				stage.addChild(cliffRight2);
				cliffRight2.stop();
				stage.addChild(cliffLeft2);
				cliffLeft2.stop();
				//button locations
				cliffRight2.x = 1163;
				cliffRight2.y = 500;
				cliffLeft2.x = 464;
				cliffLeft2.y = 500;
			}
			
			function addCliffPanel4(){
				stage.addChild(caveVidBtn);
				caveVidBtn.stop();
				stage.addChild(cliff4);
				stage.addChild(cliffLeft3);
				cliffLeft3.stop();
				//button locations
				caveVidBtn.x = 1638;
				caveVidBtn.y = 961;
				cliffLeft3.x = 1163;
				cliffLeft3.y = 500;
			}
			
			//Remove Cliff Panel Functions
			function removeCliffPanel2(){
				stage.removeChild(cliff2);
				stage.removeChild(cliffRight1);
				stage.removeChild(rawr);
				rawrAudio.pause();
			}
			
			function removeCliffPanel3(){
				stage.removeChild(cliff3);
				stage.removeChild(cliffLeft2);
				stage.removeChild(cliffRight2);
			}
			
			function removeCliffPanel4(){
				stage.removeChild(cliff4);
				stage.removeChild(cliffLeft3);
				stage.removeChild(caveVidBtn);
			}
			
		//Cave 1
			//Movie Clips
			//Panel 1 Variables are a part of cliff variables
			//Panel 2
			var cave12 = new lib.cave1Panel2();
			var c1left1 = new lib.cave1left1();
			var c1r2 = new lib.cave1right2();
			//Panel 3
			var cave13 = new lib.cave1Panel3();
			var c1left2 = new lib.cave1left2();
			var c1r3 = new lib.cave1right3();
			//Panel 4
			var cave14 = new lib.cave1Panel4();
			var c1left3 = new lib.cave1left3();
			var c2Btn = new lib.cave2VideoButton();
			
			//Cave 2 Panel 1 Variables
			var cave21 = new lib.cave2Panel1();
			var cave1Ret = new lib.cave1ReturnButton();
			var c2r1 = new lib.cave2Right1();
			
			var fadeInBlack= new lib.FadeInBlack();
			
			//Event Listeners
			//Panel 1
			cliffRet.addEventListener('click', loadCliffSceneAgain.bind(root));
			c1r1.addEventListener('click', loadCave1Panel2.bind(root));
			
			function loadCliffSceneAgain(){
				removeC1Panel1();
				video.src = 'cliffWithSound.mp4';
				video.loop = true;
				addCliffPanel4();
				cliffLoad.visible = (true);
				cave1Load.visible = (false);
				stage.addChild(fadeIn);
				fadeIn.gotoAndPlay(0);
		
			}
			
			function loadCave1Panel2(){
				removeC1Panel1();
				addC1Panel2();
			}
			
			//Panel 2
			c1left1.addEventListener('click', loadCave1Panel1Again.bind(root));
			c1r2.addEventListener('click', loadCave1Panel3.bind(root));
			
			function loadCave1Panel1Again(){
				removeC1Panel2();
				addC1Panel1();
			}
			
			function loadCave1Panel3(){
				removeC1Panel2();
				addC1Panel3();
			}
		
			//Panel 3
			c1left2.addEventListener('click', loadCave1Panel2Again.bind(root));
			c1r3.addEventListener('click', loadCave1Panel4.bind(root));
			
			function loadCave1Panel2Again(){
				removeC1Panel3();
				addC1Panel2();
			}
			
			function loadCave1Panel4(){
				removeC1Panel3();
				addC1Panel4();
			}
			
			//Panel 4
			c1left3.addEventListener('click', loadCave1Panel3Again.bind(root));
			c2Btn.addEventListener('click', loadCave2Scene.bind(root));
			
			function loadCave1Panel3Again(){
				removeC1Panel4();		
				addC1Panel3();
			}
			
			function loadCave2Scene(){
				removeC1Panel4();
				video.src = 'cave2WithSound.mp4';
				video.loop = true;
				addC2Panel1();
				cave2Load.visible = (true);
				cave1Load.visible = (false);
		
			}
			//Add Panel Functions
			function addC1Panel1(){
				
				stage.addChild(cave11);
				stage.addChild(cliffRet);
				cliffRet.stop();
				stage.addChild(c1r1);
				c1r1.stop();
				//button locations
				cliffRet.x = 9;
				cliffRet.y = 17;
				c1r1.x = 331;
				c1r1.y = 550;
			}
			
			function addC1Panel2(){
				stage.addChild(cave12);
				stage.addChild(c1left1);
				c1left1.stop();
				stage.addChild(c1r2);
				c1r2.stop();
		
				//Button Locations
				c1left1.x = 331;
				c1left1.y = 500;
				c1r2.x = 837;
				c1r2.y = 950;
			}
			
			function addC1Panel3(){
				stage.addChild(cave13);
				stage.addChild(c1left2);
				c1left2.stop();
				stage.addChild(c1r3);
				c1r3.stop();
				//button locations
				c1left2.x = 807;
				c1left2.y = 590;
				c1r3.x = 1294;
				c1r3.y = 590;
			}
			
			function addC1Panel4(){
				stage.addChild(cave14);
				stage.addChild(c1left3);
				c1left3.stop();
				stage.addChild(c2Btn);
				c2Btn.stop();
				
				//Button Locations
				c1left3.x = 1275;
				c1left3.y = 630;
				c2Btn.x = 1600;
				c2Btn.y = 17;
			}
			
			//Remove Panel Functions
			function removeC1Panel1(){
				stage.removeChild(cave11);
				stage.removeChild(cliffRet);
				stage.removeChild(c1r1);
		
			}
			
			function removeC1Panel2(){
				stage.removeChild(cave12);
				stage.removeChild(c1r2);
				stage.removeChild(c1left1);
			}
			
			function removeC1Panel3(){
				stage.removeChild(cave13);
				stage.removeChild(c1left2);
				stage.removeChild(c1r3);
			}
			
			function removeC1Panel4(){
				stage.removeChild(cave14);
				stage.removeChild(c1left3);
				stage.removeChild(c2Btn);
			}
			
		//Cave 2
			//Movie Clips
			//Panel 1 Variables are a part of cave 1 variables
			//Panel 2
			var cave22 = new lib.cave2Panel2();
			var cave2left1 = new lib.cave2Left1Button();
			var c2d1 = new lib.cave2Down1();
			//Panel 3
			var cave23 = new lib.cave2Panel3();
			var c2u1 = new lib.cave2Up1Button();
			var mPathBtn = new lib.mountainPathButton();
			//Mountain Path Panel 1 Variables
			var mPath1 = new lib.mPathPanel1();
			var cave2Ret = new lib.cave2ReturnButton();
			var mPathR1 = new lib.MountainPathRight1();
			
			//Event Listeners
			//Panel 1
			cave1Ret.addEventListener('click', LoadCave1Again.bind(root));
			c2r1.addEventListener('click', LoadCave2Panel2.bind(root));
			
			function LoadCave1Again(){
				removeC2Panel1();
				addC1Panel4();
				video.src = 'cave1withSound.mp4';
				video.loop = true;
				cave2Load.visible = (false);
				cave1Load.visible = (true);
			}
			
			function LoadCave2Panel2(){
				removeC2Panel1();
				addC2Panel2();
			}
			//Panel 2
			cave2left1.addEventListener('click', loadCave2Panel1Again.bind(root));
			c2d1.addEventListener('click', loadCave2Panel3.bind(root));
			
			function loadCave2Panel1Again(){
				removeC2Panel2();
				addC2Panel1();
			}
			
			function loadCave2Panel3(){
				removeC2Panel2();
				addC2Panel3();
			}
			//Panel 3
			c2u1.addEventListener('click',loadCave2Panel2Again.bind(root));
			mPathBtn.addEventListener('click', loadMountainPathScene.bind(root));
			
			function loadCave2Panel2Again(){
				removeC2Panel3();
				addC2Panel2();
			}
			
			function loadMountainPathScene(){
				removeC2Panel3();
				video.src = 'mountainPathVideoWithSound.mp4';
				video.loop = true;
				addPathPanel1();
				stage.addChild(fadeIn);
				fadeIn.gotoAndPlay(0);
				cave2Load.visible = (false);
				pathLoad.visible = (true);
			}
			
			//Add Cave2 Panels Functions
			function addC2Panel1(){
				stage.addChild(cave21);
				stage.addChild(cave1Ret);
				cave1Ret.stop();
				stage.addChild(c2r1);
				c2r1.stop();
				
				//Button Locations
				cave1Ret.x = 43;
				cave1Ret.y = 930;
				c2r1.x = 830;
				c2r1.y = 110;
			}
			
			function addC2Panel2(){
				stage.addChild(cave22);
				stage.addChild(cave2left1);
				cave2left1.stop();
				stage.addChild(c2d1);
				c2d1.stop();
				
				//Button Locations
				cave2left1.x = 830;
				cave2left1.y = 110;
				c2d1.x = 1345;
				c2d1.y = 532;
			}
			
			function addC2Panel3(){
				stage.addChild(cave23);
				stage.addChild(c2u1);
				c2u1.stop();
				stage.addChild(mPathBtn);
				mPathBtn.stop();
				
				//Button Locations
				c2u1.x = 1345;
				c2u1.y = 532;
				mPathBtn.x = 1600;
				mPathBtn.y = 930;
			}
			
			//Remove Cave2 Panels Functions
			function removeC2Panel1(){
				stage.removeChild(cave21);
				stage.removeChild(cave1Ret);
				stage.removeChild(c2r1);
			}
			
			function removeC2Panel2(){
				stage.removeChild(cave22);
				stage.removeChild(cave2left1);
				stage.removeChild(c2d1);	
			}
			
			function removeC2Panel3(){
				stage.removeChild(cave23);
				stage.removeChild(c2u1);
				stage.removeChild(mPathBtn);
				stage.addChild(fadeIn);
				
			}
			
		//Mountain Path
			//Movie Clips
			//Panel 1 Variables are a part of cave 1 variables
			//Panel 2
			var mPath2 = new lib.mPathPanel2();
			var mPathL1 = new lib.MountainPathLeft1();
			var mPathD1 = new lib.MountainPathDown1();
			
			//Panel 3 
			var mPath3 = new lib.mPathPanel3();
			var mPathL2 = new lib.MountainPathLeft2();
			var mPathU1 = new lib.MountainPathUp1();
			//Panel 4
			var mPath4 = new lib.mPathPanel4();
			var mPathR2 = new lib.MountainPathRight2();
			var sPathBtn = new lib.SplitPathButton();
			//Split Path Panel 1 Variables
			var sPath1 = new lib.sPathPanel1();
			var sPathUp1 = new lib.sPathUp1Button();
			var sPathUp2 = new lib.sPathUp2Button();
			var sPathUp3 = new lib.sPathUp3Button();
			var mPathRet = new lib.MountainPathReturn();
			
			//Event Listeners
			cave2Ret.addEventListener('click', LoadCave2Again.bind(root));
			mPathR1.addEventListener('click', loadMountainPathPanel2.bind(root));
			
			function LoadCave2Again(){
				fadeInBlack.gotoAndPlay(0);
				addC2Panel3();
				removePathPanel1();
				stage.addChild(fadeInBlack);
				video.src = 'Cave2WithSound.mp4';
				video.loop = true;
				cave2Load.visible = (true);
				pathLoad.visible = (false);
				
			}
			
			function loadMountainPathPanel2(){
				removePathPanel1();
				addPathPanel2();
			}
			
			mPathL1.addEventListener('click', loadMountainPathPanel1Again.bind(root));
			mPathD1.addEventListener('click', loadMountainPathPanel3.bind(root));
			
			function loadMountainPathPanel1Again(){
				removePathPanel2();
				addPathPanel1();
			}
			
			function loadMountainPathPanel3(){
				removePathPanel2();
				addPathPanel3();
			}
			
			mPathU1.addEventListener('click', loadMountainPathPanel2Again.bind(root));
			mPathL2.addEventListener('click', loadMountainPathPanel4.bind(root));
			
			function loadMountainPathPanel2Again(){
				removePathPanel3();
				addPathPanel2();
			}
			
			function loadMountainPathPanel4(){
				removePathPanel3();
				addPathPanel4();
			}
			
			mPathR2.addEventListener('click', loadMountainPathPanel3Again.bind(root));
			sPathBtn.addEventListener('click', loadSplitPathPanel.bind(root));
			
			function loadMountainPathPanel3Again(){
				removePathPanel4();
				addPathPanel3();
			}
			
			function loadSplitPathPanel()
			{
				removePathPanel4();
				addSplitPathButtons();
				video.src = '';
				video.loop = true;
				pathLoad.visible = (false);
			}
			
			//Add Mountain Path Panels Functions
			function addPathPanel1(){
				stage.addChild(mPath1);
				stage.addChild(cave2Ret);
				cave2Ret.stop();
				stage.addChild(mPathR1);
				mPathR1.stop();
				
				//Button Locations
				cave2Ret.x = 10;
				cave2Ret.y = 375;
				mPathR1.x = 820;
				mPathR1.y = 220;
			}
			
			function addPathPanel2(){
				stage.addChild(mPath2);
				stage.addChild(mPathL1);
				mPathL1.stop();
				stage.addChild(mPathD1);
				mPathD1.stop();
				
				//Button Locations
				mPathL1.x = 820;
				mPathL1.y = 220;
				mPathD1.x = 1400;
				mPathD1.y = 430;
			}
			
			function addPathPanel3(){
				stage.addChild(mPath3);
				stage.addChild(mPathL2);
				mPathL2.stop();
				stage.addChild(mPathU1);
				mPathU1.stop();
				
				//Button Locations
				mPathL2.x = 800;
				mPathL2.y = 750;
				mPathU1.x = 1400;
				mPathU1.y = 430;
			}
			
			function addPathPanel4(){
				stage.addChild(mPath4);
				stage.addChild(mPathR2);
				mPathR2.stop();
				stage.addChild(sPathBtn);
				sPathBtn.stop();
				
				//Button Locations
				mPathR2.x = 800;
				mPathR2.y = 750;
				sPathBtn.x = 10;
				sPathBtn.y = 960;
			}
			
			//Remove Mountain Path Panels functions
			function removePathPanel1(){
				stage.removeChild(mPath1);
				stage.removeChild(cave2Ret);
				stage.removeChild(mPathR1);
			}
			
			function removePathPanel2(){
				stage.removeChild(mPath2);
				stage.removeChild(mPathL1);
				stage.removeChild(mPathD1);
			}
			
			function removePathPanel3(){
				stage.removeChild(mPath3);
				stage.removeChild(mPathL2);
				stage.removeChild(mPathU1);
			}
			
			function removePathPanel4(){
				stage.removeChild(mPath4);
				stage.removeChild(mPathR2);
				stage.removeChild(sPathBtn);
			}
		//Split Paths
			//Movie Clips
			//Panel 1 Variables are a part of Mountain Path variables
			
			//Event Listeners
			sPathUp1.addEventListener('click', LoadVillageScene.bind(root));
			sPathUp2.addEventListener('click', LoadDeadMomScene.bind(root));
			sPathUp3.addEventListener('click', LoadForestScene.bind(root));
			mPathRet.addEventListener('click', LoadMountainPathSceneAgain.bind(root));
			
			function LoadVillageScene(){
				vilageLoad.visible = (true);
				removeSplitPathButtons();
				video.src = 'villageVideoWithSound.mp4';
				video.loop = false;
				
				//Event Listener to Auto Play Reset
				video.addEventListener('ended', endVillage, false);
		
				function endVillage(e) {
		
					if (!e) {
						e = window.event;
					}
				root.removeAllChildren();
				stage.removeAllChildren();
					video.src = '';
				loadStartScene();
				
				}
			}
			
			function LoadDeadMomScene(){
				deadLoad.visible = (true);
				removeSplitPathButtons();
				video.src = 'deadMamaWithSound.mp4';
				video.loop = false;
				
				//Event Listener to Auto Play Reset
				video.addEventListener('ended', endDeadMom, false);
		
				function endDeadMom(e) {
		
					if (!e) {
						e = window.event;
					}
				root.removeAllChildren();
					stage.removeAllChildren();
					video.src = '';
				loadStartScene();
					
				}
			}
		
			
			function LoadForestScene(){
				removeSplitPathButtons();
				video.src = 'forestVideo.mp4';
				video.loop = false;
				forestLoad.visible = (true);
				//Event Listener to Auto Play Reset
				video.addEventListener('ended', endForest, false);
		
				function endForest(e) {
		
					if (!e) {
						e = window.event;
					}
				root.removeAllChildren();
				stage.removeAllChildren();
					video.src = '';
				loadStartScene();
				}
			}
			
			function LoadMountainPathSceneAgain(){
				removeSplitPathButtons();
				video.src = 'mountainPathVideoWithSound.mp4';
				addPathPanel4();
			}
			
			function addSplitPathButtons(){
				stage.addChild(sPath1);
				stage.addChild(sPathUp1);
				sPathUp1.stop();
				stage.addChild(sPathUp2);
				sPathUp2.stop();
				stage.addChild(sPathUp3);
				sPathUp3.stop();
				stage.addChild(mPathRet);
				mPathRet.stop();
				
				//Button Locations
				sPathUp1.x = 230;
				sPathUp1.y = 605;
				sPathUp2.x = 925;
				sPathUp2.y = 605;
				sPathUp3.x = 1560;
				sPathUp3.y = 605
				mPathRet.x = 20;
				mPathRet.y = 855;
			}
			
			function removeSplitPathButtons(){
				stage.removeChild(sPath1);
				stage.removeChild(sPathUp1);
				stage.removeChild(sPathUp2);
				stage.removeChild(sPathUp3);
				stage.removeChild(mPathRet);
			}
				
			
		//Start Screen
		var startScene = new lib.startStage();
			
			var eggLoad = new lib.Eggloading();
			var cliffLoad = new lib.CliffLoading();
			var cave1Load = new lib.Cave1Loading();
			var cave2Load = new lib.Cave2Loading();
			var pathLoad = new lib.Pathloading();
			var vilageLoad = new lib.Vilageloading();
			var deadLoad = new lib.Deadloading();
			var forestLoad = new lib.Forestloading();
			
		loadStartScene();
			
		function loadStartScene(){
			
			stage.addChild(startScene);
		
			//Start Button
			startScene.startBtn.addEventListener('click', startComic.bind(root));
		}
		
		
		//Loads Video After Button is clicked
		function startComic() {
			stage.removeAllChildren();
			
			stage.addChild(vilageLoad);
			stage.addChild(deadLoad);
			stage.addChild(forestLoad);  
			stage.addChild(pathLoad);         
			stage.addChild(cave2Load);                              
			stage.addChild(cave1Load);                       
			stage.addChild(cliffLoad);
			stage.addChild(eggLoad);
			
			vilageLoad.visible = (false);
			deadLoad.visible = (false);
			forestLoad.visible = (false);
			pathLoad.visible = (false);
			cave2Load.visible = (false);
			cave1Load.visible = (false);
			cliffLoad.visible = (false);
			eggLoad.visible = (true);
		
			//Creates Video Settings
			video = document.createElement('video');
			video.src = 'eggCrackWithSound.mp4';
			video.autoplay = true;
			video.controls = false;
			video.loop = false;
			video.load();
			var Video = new createjs.Bitmap(video);
			
			//Adds Video to Stage
			stage.addChild(Video);
			
			//Event Listener to Auto Play Scene 2
			video.addEventListener('ended', myHandler, false);
		
			function myHandler(e) {
		
				if (!e) {
					e = window.event;
				}
				eggLoad.visible = (false);
				cliffLoad.visible = (true);
				video.autoplay = false;
				loadCliffScene();
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	id: 'F01C4C9DDDFB4BA7BE88E8572A488954',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#000000",
	opacity: 0.00,
	manifest: [
		{src:"images/vidTest2_atlas_.png", id:"vidTest2_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

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
an.compositions['F01C4C9DDDFB4BA7BE88E8572A488954'] = {
	getStage: function() { return exportRoot.getStage(); },
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;