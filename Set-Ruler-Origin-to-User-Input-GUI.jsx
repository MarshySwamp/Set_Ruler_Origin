/* 

https://community.adobe.com/t5/photoshop/feature-request-set-origin-point/td-p/12037399
Feature Request: Set Origin Point

Set Ruler Origin to User Input.jsx
Version 1.2, 16th May 2021
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
    {"activeId":0,"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":"dialogWindow","windowType":"Dialog","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":false,"borderless":false,"resizeable":false},"text":"Set Ruler Origin","preferredSize":[410,100],"margins":15,"orientation":"row","spacing":10,"alignChildren":["left","top"]}},"item-2":{"id":2,"type":"Button","parentId":4,"style":{"enabled":true,"varName":"okButton","text":"OK","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-3":{"id":3,"type":"Button","parentId":4,"style":{"enabled":true,"varName":"cancelButton","text":"Cancel","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-4":{"id":4,"type":"Group","parentId":0,"style":{"enabled":true,"varName":"okGroup","preferredSize":[0,0],"margins":[1,1,1,10],"orientation":"column","spacing":12,"alignChildren":["left","top"],"alignment":"top"}},"item-5":{"id":5,"type":"Group","parentId":0,"style":{"enabled":true,"varName":"upperGroup","preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-6":{"id":6,"type":"RadioButton","parentId":5,"style":{"enabled":true,"varName":"upperLeft","text":"Upper Left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-7":{"id":7,"type":"RadioButton","parentId":5,"style":{"enabled":true,"varName":"middleLeft","text":"Middle Left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-8":{"id":8,"type":"RadioButton","parentId":5,"style":{"enabled":true,"varName":"lowerLeft","text":"Lower Left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-9":{"id":9,"type":"Group","parentId":0,"style":{"enabled":true,"varName":"middleGroup","preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-10":{"id":10,"type":"RadioButton","parentId":9,"style":{"enabled":true,"varName":"upperCenter","text":"Upper Center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-11":{"id":11,"type":"RadioButton","parentId":9,"style":{"enabled":true,"varName":"middleCenter","text":"Middle Center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-12":{"id":12,"type":"RadioButton","parentId":9,"style":{"enabled":true,"varName":"lowerCenter","text":"Lower Center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-13":{"id":13,"type":"Group","parentId":0,"style":{"enabled":true,"varName":"lowerGroup","preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-14":{"id":14,"type":"RadioButton","parentId":13,"style":{"enabled":true,"varName":"upperRight","text":"Upper Right","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-15":{"id":15,"type":"RadioButton","parentId":13,"style":{"enabled":true,"varName":"middleRight","text":"Middle Right","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-16":{"id":16,"type":"RadioButton","parentId":13,"style":{"enabled":true,"varName":"lowerRight","text":"Lower Right","preferredSize":[0,0],"alignment":null,"helpTip":null}}},"order":[0,5,6,7,8,9,10,11,12,13,14,15,16,4,2,3],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":false,"afterEffectsDockable":false,"itemReferenceList":"None"}}
    */

    // DIALOGWINDOW
    // ============
    var dialogWindow = new Window("dialog", undefined, undefined, { closeButton: false });
    dialogWindow.text = "Set Ruler Origin - v1.2"; // Remember to update this to match the header!
    dialogWindow.preferredSize.width = 410;
    dialogWindow.preferredSize.height = 100;
    dialogWindow.orientation = "row";
    dialogWindow.alignChildren = ["left", "top"];
    dialogWindow.spacing = 10;
    dialogWindow.margins = 15;

    // UPPERGROUP
    // ==========
    var upperGroup = dialogWindow.add("group", undefined, { name: "upperGroup" });
    upperGroup.orientation = "column";
    upperGroup.alignChildren = ["left", "center"];
    upperGroup.spacing = 10;
    upperGroup.margins = 0;

    var upperLeft = upperGroup.add("radiobutton", undefined, undefined, { name: "upperLeft" });
    upperLeft.text = "Upper Left";

    var middleLeft = upperGroup.add("radiobutton", undefined, undefined, { name: "middleLeft" });
    middleLeft.text = "Middle Left";

    var lowerLeft = upperGroup.add("radiobutton", undefined, undefined, { name: "lowerLeft" });
    lowerLeft.text = "Lower Left";

    ////////////////////// peter kahrel scriptUI for dummies //////////////////////
    // Preset the upper left  radiobutton as active
    upperGroup.children[0].value = true;
    ////////////////////// peter kahrel scriptUI for dummies //////////////////////

    // MIDDLEGROUP
    // ===========
    var middleGroup = dialogWindow.add("group", undefined, { name: "middleGroup" });
    middleGroup.orientation = "column";
    middleGroup.alignChildren = ["left", "center"];
    middleGroup.spacing = 10;
    middleGroup.margins = 0;

    var upperCenter = middleGroup.add("radiobutton", undefined, undefined, { name: "upperCenter" });
    upperCenter.text = "Upper Center";

    var middleCenter = middleGroup.add("radiobutton", undefined, undefined, { name: "middleCenter" });
    middleCenter.text = "Middle Center";

    var lowerCenter = middleGroup.add("radiobutton", undefined, undefined, { name: "lowerCenter" });
    lowerCenter.text = "Lower Center";

    // LOWERGROUP
    // ==========
    var lowerGroup = dialogWindow.add("group", undefined, { name: "lowerGroup" });
    lowerGroup.orientation = "column";
    lowerGroup.alignChildren = ["left", "center"];
    lowerGroup.spacing = 10;
    lowerGroup.margins = 0;

    var upperRight = lowerGroup.add("radiobutton", undefined, undefined, { name: "upperRight" });
    upperRight.text = "Upper Right";

    var middleRight = lowerGroup.add("radiobutton", undefined, undefined, { name: "middleRight" });
    middleRight.text = "Middle Right";

    var lowerRight = lowerGroup.add("radiobutton", undefined, undefined, { name: "lowerRight" });
    lowerRight.text = "Lower Right";

    ////////////////////// peter kahrel scriptUI for dummies //////////////////////
    // Make multiple groups act as one group
    upperGroup.addEventListener("click", function () {
        for (var i = 0; i < middleGroup.children.length; i++)
            middleGroup.children[i].value = false;
    }
    );
    upperGroup.addEventListener("click", function () {
        for (var i = 0; i < lowerGroup.children.length; i++)
            lowerGroup.children[i].value = false;
    }
    );

    middleGroup.addEventListener("click", function () {
        for (var i = 0; i < upperGroup.children.length; i++)
            upperGroup.children[i].value = false;
    }
    );
    middleGroup.addEventListener("click", function () {
        for (var i = 0; i < lowerGroup.children.length; i++)
            lowerGroup.children[i].value = false;
    }
    );

    lowerGroup.addEventListener("click", function () {
        for (var i = 0; i < middleGroup.children.length; i++)
            middleGroup.children[i].value = false;
    }
    );
    lowerGroup.addEventListener("click", function () {
        for (var i = 0; i < upperGroup.children.length; i++)
            upperGroup.children[i].value = false;
    }
    );
    ////////////////////// peter kahrel scriptUI for dummies //////////////////////

    /////////////////////////////// joonas scriptUI ///////////////////////////////

    // OKGROUP
    // =======
    var okGroup = dialogWindow.add("group", undefined, { name: "okGroup" });
    okGroup.orientation = "column";
    okGroup.alignChildren = ["left", "top"];
    okGroup.spacing = 12;
    okGroup.margins = [10, 1, 1, 1];
    okGroup.alignment = ["left", "top"];

    var okButton = okGroup.add("button", undefined, undefined, { name: "okButton" });
    okButton.text = "OK";

    var cancelButton = okGroup.add("button", undefined, undefined, { name: "cancelButton" });
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
    //   desiredKey, optional specific key to get instead of everything
    //   this is recommended as all keys is an expensive call
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
    //   desiredKey (Number), key in question, use charIDToTypeID() or
    //   stringIDToTypeID()
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

    // Execute window
    dialogWindow.show();

    /////////////////////////////// joonas scriptUI ///////////////////////////////

    // Restore the ruler units
    app.preferences.rulerUnits = savedRuler;
}

else {
    alert('A document must be open to use this script!');
}
