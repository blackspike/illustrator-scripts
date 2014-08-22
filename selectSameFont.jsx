/////////////////////////////////////////////////////////////////
//Select Text by font family v.1 -- CC
//>=--------------------------------------
//  Script prompts user for a font family, 
//  and selects all text items in document of chosen font.
//
//  from original script:
// 
//  Note: script also unlocks and unhides all instances of chosen text size.
// change variables at top of script if your use case requires ignoring certain cases.
//>=--------------------------------------
//
// Code mostly stolen and adapted from this guys script, thanks John! Love from blackspike.com
//
// JS code (c) copyright: John Wundes ( john@wundes.com ) www.wundes.com
//copyright full text here:  http://www.wundes.com/js4ai/copyright.txt
////////////////////////////////////////////////////////////////// 

var doc = activeDocument;
var fontFamily = prompt("what font do you want to select?","SegoeUI-Bold"); 

//Edit these variables to change default behavior...
var unlockText = false;
var unhideText = false;
var unlockLayers = false;
var unhideLayers = false;

for(var e = 0,max=doc.textFrames.length;e<max;e++){
    var frame =  doc.textFrames[e];
       frame.selected = false;

    //unlock if locked:
    if(frame.locked && unlockText){
        frame.locked=false;
    }
    //make visible if hidden
    if(frame.hidden && unhideText){
        frame.hidden=false;
    }
    //unlock layer if layer is locked
    if(frame.layer.locked && unlockLayers){
        frame.layer.locked=false;
    }
    //make layer visible if hidden
    if(!frame.layer.visible && unhideLayers){
        frame.layer.visible=true;
    }
      
    if(frame.textRange.characterAttributes.textFont==app.textFonts.getByName(fontFamily) && (!frame.locked) &&  (!frame.hidden) && (!frame.layer.locked) && (frame.layer.visible) ){
           frame.selected = true;
    }
};