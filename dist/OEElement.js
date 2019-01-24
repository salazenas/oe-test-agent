"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const OEAttributes_enum_1=require("./OEAttributes.enum");class OEElement{constructor(t){this.oe=t}waitForElement(t,e=!0,s){return this.oe.waitForElement(t,e,s,this)}findElement(t,e=!0){return this.oe.findElement(t,e,this)}findElementByAttribute(t,e,s=!0){return this.oe.findElementByAttribute(t,e,s,this)}isEnabled(){return this.get(OEAttributes_enum_1.OEAttributes.SENSITIVE).then(t=>"true"===t||"yes"===t)}isChecked(){return this.get(OEAttributes_enum_1.OEAttributes.CHECKED).then(t=>"true"===t||"yes"===t)}clear(){return this.oe.clear(this),this}sendKeys(t){return this.oe.sendKeys(t,this),this}getValue(){return this.get(OEAttributes_enum_1.OEAttributes.SCREENVALUE)}check(t){return this.oe.check(t,this),this}select(t,e=!1){return this.oe.select(t,e,this),this}selectRow(t){return this.oe.selectRow(t,this),this}repositionToRow(t){return this.oe.repositionToRow(t,this),this}choose(){return this.oe.choose(this),this}apply(t){return this.oe.apply(t,this),this}get(t){return this.oe.get(t,this)}set(t,e){return this.oe.set(t,e,this),this}}exports.OEElement=OEElement;