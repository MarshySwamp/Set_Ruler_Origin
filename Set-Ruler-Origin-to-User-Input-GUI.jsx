/* 
https://community.adobe.com/t5/photoshop/feature-request-set-origin-point/td-p/12037399
Feature Request: Set Origin Point

Set Ruler Origin to User Input.jsx
Version 1.3, 19th May 2021
Stephen Marsh
*/

#target photoshop

if (app.documents.length > 0) {

    // Save the current ruler units and set to pixels
    var savedRuler = app.preferences.rulerUnits;
    app.preferences.rulerUnits = Units.PIXELS;

    /////////////////////////////// joonas scriptUI ///////////////////////////////
    /*
    Code for Import https://scriptui.joonas.me — (Triple click to select): 
    {"activeId":0,"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":"dialogWindow","windowType":"Dialog","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":false,"borderless":false,"resizeable":false},"text":"Set Ruler Origin - v???","preferredSize":[410,100],"margins":15,"orientation":"row","spacing":10,"alignChildren":["left","center"]}},"item-2":{"id":2,"type":"Button","parentId":4,"style":{"enabled":true,"varName":"okButton","text":"OK","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-3":{"id":3,"type":"Button","parentId":4,"style":{"enabled":true,"varName":"cancelButton","text":"Cancel","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-4":{"id":4,"type":"Group","parentId":0,"style":{"enabled":true,"varName":"okGroup","preferredSize":[0,0],"margins":[1,1,1,1],"orientation":"column","spacing":12,"alignChildren":["left","center"],"alignment":"center"}},"item-5":{"id":5,"type":"Group","parentId":20,"style":{"enabled":true,"varName":"upperGroup","preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-6":{"id":6,"type":"RadioButton","parentId":5,"style":{"enabled":true,"varName":"upperLeft","text":"Upper Left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-7":{"id":7,"type":"RadioButton","parentId":5,"style":{"enabled":true,"varName":"middleLeft","text":"Middle Left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-8":{"id":8,"type":"RadioButton","parentId":5,"style":{"enabled":true,"varName":"lowerLeft","text":"Lower Left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-9":{"id":9,"type":"Group","parentId":20,"style":{"enabled":true,"varName":"middleGroup","preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-10":{"id":10,"type":"RadioButton","parentId":9,"style":{"enabled":true,"varName":"upperCenter","text":"Upper Center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-11":{"id":11,"type":"RadioButton","parentId":9,"style":{"enabled":true,"varName":"middleCenter","text":"Middle Center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-12":{"id":12,"type":"RadioButton","parentId":9,"style":{"enabled":true,"varName":"lowerCenter","text":"Lower Center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-13":{"id":13,"type":"Group","parentId":20,"style":{"enabled":true,"varName":"lowerGroup","preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-14":{"id":14,"type":"RadioButton","parentId":13,"style":{"enabled":true,"varName":"upperRight","text":"Upper Right","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-15":{"id":15,"type":"RadioButton","parentId":13,"style":{"enabled":true,"varName":"middleRight","text":"Middle Right","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-16":{"id":16,"type":"RadioButton","parentId":13,"style":{"enabled":true,"varName":"lowerRight","text":"Lower Right","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-17":{"id":17,"type":"Panel","parentId":21,"style":{"enabled":true,"varName":"xyPanel","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"X & Y Position","preferredSize":[0,0],"margins":[10,10,10,10],"orientation":"column","spacing":5,"alignChildren":["left","center"],"alignment":"center"}},"item-18":{"id":18,"type":"EditText","parentId":17,"style":{"enabled":true,"varName":"xValue","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"","justify":"left","preferredSize":[75,0],"alignment":null,"helpTip":"Enter the X value"}},"item-19":{"id":19,"type":"EditText","parentId":17,"style":{"enabled":true,"varName":"yValue","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"","justify":"left","preferredSize":[75,0],"alignment":null,"helpTip":"Enter the Y value"}},"item-20":{"id":20,"type":"Group","parentId":0,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-21":{"id":21,"type":"Group","parentId":0,"style":{"enabled":true,"varName":"xyGroup","preferredSize":[0,0],"margins":[0,0,0,0],"orientation":"row","spacing":0,"alignChildren":["left","center"],"alignment":"center"}}},"order":[0,20,5,6,7,8,9,10,11,12,13,14,15,16,21,17,18,19,4,2,3],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":false,"afterEffectsDockable":false,"itemReferenceList":"None"}}
    */

    // DIALOGWINDOW
    // ============
    var dialogWindow = new Window("dialog", undefined, undefined, {
        closeButton: false
    });
    dialogWindow.text = "Set Ruler Origin - v1.3"; // Remember to update this to match the header!
    dialogWindow.preferredSize.width = 410;
    dialogWindow.preferredSize.height = 100;
    dialogWindow.orientation = "row";
    dialogWindow.alignChildren = ["left", "center"];
    dialogWindow.spacing = 10;
    dialogWindow.margins = 15;

    // GROUP1
    // ======
    var group1 = dialogWindow.add("group", undefined, {
        name: "group1"
    });
    group1.orientation = "row";
    group1.alignChildren = ["left", "center"];
    group1.spacing = 10;
    group1.margins = 0;

    // UPPERGROUP
    // ==========
    var upperGroup = group1.add("group", undefined, {
        name: "upperGroup"
    });
    upperGroup.orientation = "column";
    upperGroup.alignChildren = ["left", "center"];
    upperGroup.spacing = 10;
    upperGroup.margins = 0;

    var upperLeft = upperGroup.add("radiobutton", undefined, undefined, {
        name: "upperLeft"
    });
    upperLeft.text = "Upper Left";
    upperLeft.helpTip = "Radio buttons override the X & Y fields";


    var middleLeft = upperGroup.add("radiobutton", undefined, undefined, {
        name: "middleLeft"
    });
    middleLeft.text = "Middle Left";
    middleLeft.helpTip = "Radio buttons override the X & Y fields";


    var lowerLeft = upperGroup.add("radiobutton", undefined, undefined, {
        name: "lowerLeft"
    });
    lowerLeft.text = "Lower Left";
    lowerLeft.helpTip = "Radio buttons override the X & Y fields";

    // MIDDLEGROUP
    // ===========
    var middleGroup = group1.add("group", undefined, {
        name: "middleGroup"
    });
    middleGroup.orientation = "column";
    middleGroup.alignChildren = ["left", "center"];
    middleGroup.spacing = 10;
    middleGroup.margins = 0;

    var upperCenter = middleGroup.add("radiobutton", undefined, undefined, {
        name: "upperCenter"
    });
    upperCenter.text = "Upper Center";
    upperCenter.helpTip = "Radio buttons override the X & Y fields";

    var middleCenter = middleGroup.add("radiobutton", undefined, undefined, {
        name: "middleCenter"
    });
    middleCenter.text = "Middle Center";
    middleCenter.helpTip = "Radio buttons override the X & Y fields";

    var lowerCenter = middleGroup.add("radiobutton", undefined, undefined, {
        name: "lowerCenter"
    });
    lowerCenter.text = "Lower Center";
    lowerCenter.helpTip = "Radio buttons override the X & Y fields";

    // LOWERGROUP
    // ==========
    var lowerGroup = group1.add("group", undefined, {
        name: "lowerGroup"
    });
    lowerGroup.orientation = "column";
    lowerGroup.alignChildren = ["left", "center"];
    lowerGroup.spacing = 10;
    lowerGroup.margins = 0;

    var upperRight = lowerGroup.add("radiobutton", undefined, undefined, {
        name: "upperRight"
    });
    upperRight.text = "Upper Right";
    upperRight.helpTip = "Radio buttons override the X & Y fields";

    var middleRight = lowerGroup.add("radiobutton", undefined, undefined, {
        name: "middleRight"
    });
    middleRight.text = "Middle Right";
    middleRight.helpTip = "Radio buttons override the X & Y fields";

    var lowerRight = lowerGroup.add("radiobutton", undefined, undefined, {
        name: "lowerRight"
    });
    lowerRight.text = "Lower Right";
    lowerRight.helpTip = "Radio buttons override the X & Y fields";

    // XYGROUP
    // =======
    var xyGroup = dialogWindow.add("group", undefined, {
        name: "xyGroup"
    });
    xyGroup.orientation = "row";
    xyGroup.alignChildren = ["left", "center"];
    xyGroup.spacing = 0;
    xyGroup.margins = [0, 0, 0, 0];
    xyGroup.alignment = ["left", "center"];

    // XYPANEL
    // =======
    var xyPanel = xyGroup.add("panel", undefined, undefined, {
        name: "xyPanel"
    });
    xyPanel.text = "X & Y Position";
    xyPanel.orientation = "column";
    xyPanel.alignChildren = ["left", "center"];
    xyPanel.spacing = 5;
    xyPanel.margins = [10, 10, 10, 10];
    xyPanel.alignment = ["left", "center"];

    var xValue = xyPanel.add('edittext {properties: {name: "xValue"}}');
    xValue.helpTip = "Enter the X value";
    xValue.preferredSize.width = 75;
    xValue.text = "";
    // Call the function to imit keyboard entry to digits
    xyPanel.xValue.addEventListener('keydown', NumericEditKeyboardHandler);

    ////////////////////// peter kahrel scriptUI for dummies //////////////////////
    // Preset the X field as active
    xValue.active = true;
    ////////////////////// peter kahrel scriptUI for dummies //////////////////////

    var yValue = xyPanel.add('edittext {properties: {name: "yValue"}}');
    yValue.helpTip = "Enter the Y value";
    yValue.preferredSize.width = 75;
    yValue.text = "";
    // Call the function to imit keyboard entry to digits
    xyPanel.yValue.addEventListener('keydown', NumericEditKeyboardHandler);

    ////////////////////// peter kahrel scriptUI for dummies //////////////////////
    // Make multiple groups act as one group
    upperGroup.addEventListener("click", function () {
        for (var i = 0; i < middleGroup.children.length; i++)
            middleGroup.children[i].value = false;
    });
    upperGroup.addEventListener("click", function () {
        for (var i = 0; i < lowerGroup.children.length; i++)
            lowerGroup.children[i].value = false;
    });

    middleGroup.addEventListener("click", function () {
        for (var i = 0; i < upperGroup.children.length; i++)
            upperGroup.children[i].value = false;
    });
    middleGroup.addEventListener("click", function () {
        for (var i = 0; i < lowerGroup.children.length; i++)
            lowerGroup.children[i].value = false;
    });

    lowerGroup.addEventListener("click", function () {
        for (var i = 0; i < middleGroup.children.length; i++)
            middleGroup.children[i].value = false;
    });
    lowerGroup.addEventListener("click", function () {
        for (var i = 0; i < upperGroup.children.length; i++)
            upperGroup.children[i].value = false;
    });
    ////////////////////// peter kahrel scriptUI for dummies //////////////////////

    /////////////////////////////// joonas scriptUI ///////////////////////////////
    // OKGROUP
    // =======
    var okGroup = dialogWindow.add("group", undefined, {
        name: "okGroup"
    });
    okGroup.orientation = "column";
    okGroup.alignChildren = ["left", "center"];
    okGroup.spacing = 12;
    okGroup.margins = [1, 1, 1, 1];
    okGroup.alignment = ["left", "center"];

    var okButton = okGroup.add("button", undefined, undefined, {
        name: "okButton"
    });
    okButton.text = "OK";

    var cancelButton = okGroup.add("button", undefined, undefined, {
        name: "cancelButton"
    });
    cancelButton.text = "Cancel";
    /////////////////////////////// joonas scriptUI ///////////////////////////////

    ////////////////////////////// tom_ruark @ adobe //////////////////////////////
    /* https://feedback.photoshop.com/conversations/photoshop/photoshop-ability-to-ruler-origin-by-script/5f5f45bb4b561a3d425c7b32 */
    // Version 2016.11.18
    // Show how to get and set the ruler origin point for the current document
    // Values are in pixels shifted 16 bits
    // some constants to make it more readable

    const classProperty = app.stringIDToTypeID("property");
    const krulerOriginHStr = app.stringIDToTypeID("rulerOriginH");
    const krulerOriginVStr = app.stringIDToTypeID("rulerOriginV");
    const classDocument = app.stringIDToTypeID("document");
    const typeOrdinal = app.stringIDToTypeID("ordinal");
    const enumTarget = app.stringIDToTypeID("targetEnum");
    const typeNULL = app.stringIDToTypeID("null");
    const keyTo = app.stringIDToTypeID("to");
    const eventSet = app.stringIDToTypeID("set");

    // get the current values
    GetRulerOrigin().toSource();

    function GetRulerOrigin() {
        var ro = {};
        ro.horizontal = GetInfo(classDocument, krulerOriginHStr) >> 16;
        ro.vertical = GetInfo(classDocument, krulerOriginVStr) >> 16;
        return ro;
    }

    function SetRulerOrigin_Horiz(horiz) {
        var desc = new ActionDescriptor();
        var ref = new ActionReference();
        ref.putProperty(classProperty, krulerOriginHStr);
        ref.putEnumerated(classDocument, typeOrdinal, enumTarget);
        desc.putReference(typeNULL, ref);
        desc.putInteger(keyTo, horiz << 16);
        executeAction(eventSet, desc, DialogModes.NO);
    }

    function SetRulerOrigin_Vert(vert) {
        var desc = new ActionDescriptor();
        var ref = new ActionReference();
        ref.putProperty(classProperty, krulerOriginVStr);
        ref.putEnumerated(classDocument, typeOrdinal, enumTarget);
        desc.putReference(typeNULL, ref);
        desc.putInteger(keyTo, vert << 16);
        executeAction(eventSet, desc, DialogModes.NO);
    }

    ///////////////////////////////////////////////////////////////////////////////
    // Function: GetInfo
    // Usage:    Get information from Photoshop
    // Input:    desiredClass, classApplication, classLayer, etc.
    //           desiredKey, optional specific key to get instead of everything
    //           this is recommended as all keys is an expensive call
    // Return:   ActionDescriptor or single value depending on what is asked for
    ///////////////////////////////////////////////////////////////////////////////
    function GetInfo(desiredClass, desiredKey) {
        var reference = new ActionReference();
        if (typeof desiredKey != "undefined") {
            reference.putProperty(stringIDToTypeID("property"), desiredKey);
        }
        reference.putEnumerated(desiredClass, stringIDToTypeID("ordinal"), stringIDToTypeID("targetEnum"));
        var desc = executeActionGet(reference);
        if (typeof desiredKey != "undefined") {
            return GetItemFromDescriptor(desc, desiredKey);
        }
        return desc;
    }

    ///////////////////////////////////////////////////////////////////////////////
    // Function: GetItemFromDescriptor
    // Usage:    Get a specific key from an ActionDescriptor
    // Input:    desc (ActionDescriptor), valid ActionDescriptor to pull info from
    //           desiredKey (Number), key in question, use charIDToTypeID() or
    //           stringIDToTypeID()
    // Return:   ActionDescriptor or single value depending on what is asked for
    ///////////////////////////////////////////////////////////////////////////////
    function GetItemFromDescriptor(desc, desiredKey) {
        if (desc.hasKey(desiredKey)) {
            var typeID = desc.getType(desiredKey);
            switch (typeID) {
                case DescValueType.BOOLEANTYPE:
                    return desc.getBoolean(desiredKey);
                    break;
                case DescValueType.STRINGTYPE:
                    return desc.getString(desiredKey);
                    break;
                case DescValueType.DOUBLETYPE:
                    return desc.getDouble(desiredKey);
                    break;
                case DescValueType.INTEGERTYPE:
                    return desc.getInteger(desiredKey);
                    break;
                case DescValueType.LARGEINTEGERTYPE:
                    return desc.getLargeInteger(desiredKey);
                    break;
                case DescValueType.OBJECTTYPE:
                    return desc.getObjectValue(desiredKey);
                    break;
                case DescValueType.UNITDOUBLE:
                    var newT = desc.getUnitDoubleType(desiredKey);
                    var newV = desc.getUnitDoubleValue(desiredKey);
                    return new UnitValue(newV, newT);
                    break;
                case DescValueType.ENUMERATEDTYPE:
                    return desc.getEnumerationValue(desiredKey);
                    break;
                case DescValueType.CLASSTYPE:
                    return desc.getClass(desiredKey);
                    break;
                case DescValueType.ALIASTYPE:
                    return desc.getPath(desiredKey);
                    break;
                case DescValueType.RAWTYPE:
                    var tempStr = desc.getData(desiredKey);
                    var rawData = new Array();
                    for (var tempi = 0; tempi < tempStr.length; tempi++) {
                        rawData[tempi] = tempStr.charCodeAt(tempi);
                    }
                    return rawData;
                    break;
                case DescValueType.REFERENCETYPE:
                    return desc.getReference(desiredKey);
                    break;
                case DescValueType.LISTTYPE:
                    return desc.getList(desiredKey);
                    break;
                default:
                    return;
            }
        }
        return;
    }
    ////////////////////////////// tom_ruark @ adobe //////////////////////////////

    /////////////////////////////// joonas scriptUI ///////////////////////////////
    okButton.onClick = function () {
        dialogWindow.close();
        /////////////////////////////// joonas scriptUI ///////////////////////////////

        // Link function parameters to X & Y field values
        if (xValue.text.length > 0) {
            // Reset ruler origin to zero for a known start point
            SetRulerOrigin_Horiz(0);
            // Set ruler origin to variables
            SetRulerOrigin_Horiz(xValue.text);
        }

        if (yValue.text.length > 0) {
            // Reset ruler origin to zero for a known start point
            SetRulerOrigin_Vert(0);
            // Set ruler origin to variables
            SetRulerOrigin_Vert(yValue.text);
        }

        // Canvas variables
        var rE = app.activeDocument.width; // rightEdge
        var hC = app.activeDocument.width / 2; // horizontalCenter
        var vC = app.activeDocument.height / 2; // verticalCenter
        var bE = app.activeDocument.height; // bottomEdge

        // Link function parameters to radio buttons
        if (upperLeft.value === true) {
            // Reset ruler origin to zero for a known start point
            SetRulerOrigin_Horiz(0);
            SetRulerOrigin_Vert(0);
        }

        if (upperCenter.value === true) {
            // Reset ruler origin to zero for a known start point
            SetRulerOrigin_Horiz(0);
            SetRulerOrigin_Vert(0);
            // Set ruler origin to variables
            SetRulerOrigin_Horiz(hC);
            SetRulerOrigin_Vert(0);
        }

        if (upperRight.value === true) {
            // Reset ruler origin to zero for a known start point
            SetRulerOrigin_Horiz(0);
            SetRulerOrigin_Vert(0);
            // Set ruler origin to variables
            SetRulerOrigin_Horiz(rE);
            SetRulerOrigin_Vert(0);
        }

        if (middleLeft.value === true) {
            // Reset ruler origin to zero for a known start point
            SetRulerOrigin_Horiz(0);
            SetRulerOrigin_Vert(0);
            // Set ruler origin to variables
            SetRulerOrigin_Horiz(0);
            SetRulerOrigin_Vert(vC);
        }

        if (middleCenter.value === true) {
            // Reset ruler origin to zero for a known start point
            SetRulerOrigin_Horiz(0);
            SetRulerOrigin_Vert(0);
            // Set ruler origin to variables
            SetRulerOrigin_Horiz(hC);
            SetRulerOrigin_Vert(vC);
        }

        if (middleRight.value === true) {
            // Reset ruler origin to zero for a known start point
            SetRulerOrigin_Horiz(0);
            SetRulerOrigin_Vert(0);
            // Set ruler origin to variables
            SetRulerOrigin_Horiz(rE);
            SetRulerOrigin_Vert(vC);
        }

        if (lowerLeft.value === true) {
            // Reset ruler origin to zero for a known start point
            SetRulerOrigin_Horiz(0);
            SetRulerOrigin_Vert(0);
            // Set ruler origin to variables
            SetRulerOrigin_Horiz(0);
            SetRulerOrigin_Vert(bE);
        }

        if (lowerCenter.value === true) {
            // Reset ruler origin to zero for a known start point
            SetRulerOrigin_Horiz(0);
            SetRulerOrigin_Vert(0);
            // Set ruler origin to variables
            SetRulerOrigin_Horiz(hC);
            SetRulerOrigin_Vert(bE);
        }

        if (lowerRight.value === true) {
            // Reset ruler origin to zero for a known start point
            SetRulerOrigin_Horiz(0);
            SetRulerOrigin_Vert(0);
            // Set ruler origin to variables
            SetRulerOrigin_Horiz(rE);
            SetRulerOrigin_Vert(bE);
        }
    }

    /////////////////////////////// joonas scriptUI ///////////////////////////////
    // Execute window
    dialogWindow.show();
    /////////////////////////////// joonas scriptUI ///////////////////////////////

    ////////////////////////////// tom_ruark @ adobe //////////////////////////////
    // Function to limit keyboard entry to digits
    function NumericEditKeyboardHandler(event) {
        try {
            var keyIsOK = KeyIsNumeric(event) ||
                KeyIsDelete(event) ||
                KeyIsLRArrow(event) ||
                KeyIsTabEnterEscape(event);

            if (!keyIsOK) {
                // Bad input: tell ScriptUI not to accept the keydown event
                event.preventDefault();
                /*
                Notify user of invalid input: make sure NOT
                to put up an alert dialog or do anything which
                requires user interaction, because that
                interferes with preventing the 'default'
                action for the keydown event */
                app.beep();
            }
        } catch (e) {
            // alert ("Ack! bug in NumericEditKeyboardHandler: " + e);
        }
    }

    function KeyHasModifier(event) {
        return event.shiftKey || event.ctrlKey || event.altKey || event.metaKey;
    }

    function KeyIsNumeric(event) {
        return (event.keyName >= '0') && (event.keyName <= '9') && !KeyHasModifier(event);
    }

    function KeyIsDelete(event) {
        return (event.keyName == 'Backspace') && !(event.ctrlKey);
    }

    function KeyIsLRArrow(event) {
        return ((event.keyName == 'Left') || (event.keyName == 'Right')) && !(event.altKey || event.metaKey);
    }

    function KeyIsTabEnterEscape(event) {
        return event.keyName == 'Tab' || event.keyName == 'Enter' || event.keyName == 'Escape';
    }
    ////////////////////////////// tom_ruark @ adobe //////////////////////////////

    // Restore the ruler units
    app.preferences.rulerUnits = savedRuler;

}

else {
    alert('A document must be open to use this script!');
}
