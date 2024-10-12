/* 
Set Ruler Origin to User Input v1-4.jsx
Version 1.4, 12th October 2024 - Stephen Marsh
https://community.adobe.com/t5/photoshop-ecosystem-discussions/feature-request-set-ruler-origin-location-in-photoshop/td-p/10844115/page/2#U14912183
*/

#target photoshop

if (app.documents.length > 0) {

    // Save the current ruler units and set to pixels
    var savedRuler = app.preferences.rulerUnits;
    app.preferences.rulerUnits = Units.PIXELS;

    // Main window
    var dialogWindow = new Window("dialog", undefined, undefined, {
        closeButton: false
    });
    dialogWindow.text = "Set Ruler Origin - v1.4"; // Remember to update this to match the header!
    dialogWindow.preferredSize.width = 410;
    dialogWindow.preferredSize.height = 100;
    dialogWindow.orientation = "row";
    dialogWindow.alignChildren = ["left", "center"];
    dialogWindow.spacing = 10;
    dialogWindow.margins = 15;

    // Main panel
    var mainPanel = dialogWindow.add("panel", undefined, "Ruler Origin Point Location");
    mainPanel.orientation = "column";
    mainPanel.alignChildren = ["left", "top"]; // Align to top
    mainPanel.spacing = 10;
    mainPanel.margins = 10;

    // Group 1
    var group1 = mainPanel.add("group", undefined, {
        name: "group1"
    });
    group1.orientation = "row";
    group1.alignChildren = ["left", "center"];
    group1.spacing = 10;
    group1.margins = 0;

    // Upper group
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

    var middleLeft = upperGroup.add("radiobutton", undefined, undefined, {
        name: "middleLeft"
    });
    middleLeft.text = "Middle Left";

    var lowerLeft = upperGroup.add("radiobutton", undefined, undefined, {
        name: "lowerLeft"
    });
    lowerLeft.text = "Lower Left";

    // Middle group
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

    var middleCenter = middleGroup.add("radiobutton", undefined, undefined, {
        name: "middleCenter"
    });
    middleCenter.text = "Middle Center";

    var lowerCenter = middleGroup.add("radiobutton", undefined, undefined, {
        name: "lowerCenter"
    });
    lowerCenter.text = "Lower Center";

    // Lower group
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

    var middleRight = lowerGroup.add("radiobutton", undefined, undefined, {
        name: "middleRight"
    });
    middleRight.text = "Middle Right";

    var lowerRight = lowerGroup.add("radiobutton", undefined, undefined, {
        name: "lowerRight"
    });
    lowerRight.text = "Lower Right";

    // X & Y group
    var xyGroup = dialogWindow.add("group", undefined, { name: "xyGroup" });
    xyGroup.orientation = "row";
    xyGroup.alignChildren = ["left", "top"]; // Align to top
    xyGroup.spacing = 0;
    xyGroup.margins = [0, 0, 0, 0];
    xyGroup.alignment = ["left", "top"]; // Align group to the top

    // X & Y panel
    var xyPanel = xyGroup.add("panel", undefined, undefined, { name: "xyPanel" });
    xyPanel.text = "Coordinates";
    xyPanel.orientation = "column";
    xyPanel.alignChildren = ["left", "center"];
    xyPanel.spacing = 5;
    xyPanel.margins = [10, 10, 10, 10];
    xyPanel.alignment = ["left", "center"];

    // Create a group for X input and label
    var xGroup = xyPanel.add("group");
    xGroup.orientation = "row";
    xGroup.alignChildren = ["left", "center"];

    // Add X input field
    var xValue = xGroup.add('edittext {properties: {name: "xValue"}}');
    xValue.helpTip = "Enter the X value";
    xValue.preferredSize.width = 80;
    xValue.text = "";
    xValue.addEventListener('keydown', NumericEditKeyboardHandler);
    xValue.addEventListener('changing', updateRadioButtons);

    // Add X label
    var xLabel = xGroup.add("statictext", undefined, "X");
    xLabel.preferredSize.width = 20; // Set preferred width for label alignment

    // Create a group for Y input and label
    var yGroup = xyPanel.add("group");
    yGroup.orientation = "row";
    yGroup.alignChildren = ["left", "center"];

    // Add Y input field
    var yValue = yGroup.add('edittext {properties: {name: "yValue"}}');
    yValue.helpTip = "Enter the Y value";
    yValue.preferredSize.width = 80;
    yValue.text = "";
    yValue.addEventListener('keydown', NumericEditKeyboardHandler);
    yValue.addEventListener('changing', updateRadioButtons);

    // Add Y label
    var yLabel = yGroup.add("statictext", undefined, "Y");
    yLabel.preferredSize.width = 20; // Set preferred width for label alignment

    var radioButtons = [upperLeft, middleLeft, lowerLeft, upperCenter, middleCenter, lowerCenter, upperRight, middleRight, lowerRight];
    for (var i = 0; i < radioButtons.length; i++) {
        radioButtons[i].addEventListener('click', function () {
            xValue.text = "";
            yValue.text = "";
            updateRadioButtons();
        });
    }

    ////////////////////// peter kahrel scriptUI for dummies - make multiple groups act as one group //////////////////////
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

    // OK & Cancel button group
    var okGroup = dialogWindow.add("group", undefined, {
        name: "okGroup"
    });
    okGroup.orientation = "column"; // Set to column for vertical layout
    okGroup.alignChildren = ["fill", "top"]; // Fill width, align to top
    okGroup.spacing = 12; // Space between buttons
    okGroup.margins = [1, 1, 1, 1]; // Margins around the group

    var okButton = okGroup.add("button", undefined, undefined, {
        name: "okButton"
    });
    okButton.text = "OK";
    // Set the button to fill the width of the column
    okButton.preferredSize.width = 100; // Set preferred width (adjust as needed)

    var cancelButton = okGroup.add("button", undefined, undefined, {
        name: "cancelButton"
    });
    cancelButton.text = "Cancel";
    // Set the button to fill the width of the column
    cancelButton.preferredSize.width = 100; // Set preferred width (adjust as needed)

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

    // Get the current values
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

    okButton.onClick = function () {
        dialogWindow.close();

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

    // Execute window;
    if (dialogWindow.show() == 1) {
        // OK pressed
    } else {
        // Cancel pressed
    }

    ////////////////////////////////// mike hale //////////////////////////////////
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

    function updateRadioButtons() {
        var disableRadios = xValue.text.length > 0 || yValue.text.length > 0;

        var radioButtons = [upperLeft, middleLeft, lowerLeft, upperCenter, middleCenter, lowerCenter, upperRight, middleRight, lowerRight];

        for (var i = 0; i < radioButtons.length; i++) {
            radioButtons[i].enabled = !disableRadios;
            if (disableRadios) {
                radioButtons[i].value = false;
            }
        }
    }

    xValue.addEventListener('changing', updateRadioButtons);
    yValue.addEventListener('changing', updateRadioButtons);

    function updateRadioButtons() {
        var disableRadios = xValue.text.length > 0 || yValue.text.length > 0;

        // Disable or enable all radio buttons
        upperLeft.enabled = !disableRadios;
        middleLeft.enabled = !disableRadios;
        lowerLeft.enabled = !disableRadios;
        upperCenter.enabled = !disableRadios;
        middleCenter.enabled = !disableRadios;
        lowerCenter.enabled = !disableRadios;
        upperRight.enabled = !disableRadios;
        middleRight.enabled = !disableRadios;
        lowerRight.enabled = !disableRadios;

        // Uncheck all radio buttons if disabled
        if (disableRadios) {
            upperLeft.value = false;
            middleLeft.value = false;
            lowerLeft.value = false;
            upperCenter.value = false;
            middleCenter.value = false;
            lowerCenter.value = false;
            upperRight.value = false;
            middleRight.value = false;
            lowerRight.value = false;
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
    ////////////////////////////////// mike hale //////////////////////////////////

    // Restore the ruler units
    app.preferences.rulerUnits = savedRuler;

}

else {
    alert('A document must be open to use this script!');
}
