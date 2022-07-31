Blockly.defineBlocksWithJsonArray([
    // Block for colour picker.
    {
      "type": "light_switch",
      "message0": "Play %1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "VALUE",
          "options": [
            ["C4", "sounds/c4.m4a"],
            ["D4", "sounds/d4.m4a"],
            ["E4", "sounds/e4.m4a"],
            ["F4", "sounds/f4.m4a"],
            ["G4", "sounds/g4.m4a"]
          ]
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 355,
    }
  ]);


Blockly.Blocks['light_switch'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Press")
          .appendField(new Blockly.FieldDropdown([["red","R"], ["yellow","Y"], ["green","G"]]), "color")
          .appendField(new Blockly.FieldDropdown([["on","on"], ["off","off"]]), "switch");
      this.setInputsInline(false);
      this.setOutput(true, null);
      this.setColour(30);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['light_switch'] = function(block) {
    var dropdown_color = block.getFieldValue('color');
    var dropdown_switch = block.getFieldValue('switch');
    // TODO: Assemble JavaScript into code variable.
    if(dropdown_switch==="on"){
        var code = "document.getElementById('switch').style.backgroundColor='red')"
    }
    else{
        var code = "document.getElementById('switch').style.backgroundColor='white')"
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };