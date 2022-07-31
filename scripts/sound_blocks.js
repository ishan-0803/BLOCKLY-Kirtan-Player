/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

Blockly.defineBlocksWithJsonArray([
  // Block for colour picker.
  {
    "type": "play_sound",
    "message0": "Play %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "VALUE",
        "options": [
          ["Vrindavan Mellows", "sounds/VrindavanMellows.m4a"],
          ["Srila Prabhupad HK Kirtan", "sounds/SrilaPrabhupadKirtan.m4a"],
          ["HH Bhakti Caru Swami mj HK Dhun", "sounds/BCS_Bhajans_-_Hare_Krishna_Dhun_03.m4a"],
          ["Yadi Prabhupad Na Hoito", "sounds/yadiPrabhupadaNaHoito.m4a"],
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 355,
  }
]);

Blockly.JavaScript['play_sound'] = function(block) {
  let value = '\'' + block.getFieldValue('VALUE') + '\'';
  return 'MusicMaker.queueSound(' + value + ');\n';
};

