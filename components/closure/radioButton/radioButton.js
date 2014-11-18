/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.5.1-master-ea64b85
 */
goog.provide('ng.material.components.radioButton');
goog.require('ng.material.core');
!function(){"use strict";function e(e,t,n){function i(e,i,r,o){function a(e){e.keyCode===t.KEY_CODE.LEFT_ARROW||e.keyCode===t.KEY_CODE.UP_ARROW?(e.preventDefault(),d.selectPrevious()):(e.keyCode===t.KEY_CODE.RIGHT_ARROW||e.keyCode===t.KEY_CODE.DOWN_ARROW)&&(e.preventDefault(),d.selectNext())}n(i);var d=o[0],u=o[1]||{$setViewValue:angular.noop};d.init(u),i.attr({role:"radiogroup",tabIndex:"0"}).on("keydown",a)}function r(e){this._radioButtonRenderFns=[],this.$element=e}function o(){return{init:function(e){this._ngModelCtrl=e,this._ngModelCtrl.$render=angular.bind(this,this.render)},add:function(e){this._radioButtonRenderFns.push(e)},remove:function(e){var t=this._radioButtonRenderFns.indexOf(e);-1!==t&&this._radioButtonRenderFns.splice(t,1)},render:function(){this._radioButtonRenderFns.forEach(function(e){e()})},setViewValue:function(e,t){this._ngModelCtrl.$setViewValue(e,t),this.render()},getViewValue:function(){return this._ngModelCtrl.$viewValue},selectNext:function(){return a(this.$element,1)},selectPrevious:function(){return a(this.$element,-1)},setActiveDescendant:function(e){this.$element.attr("aria-activedescendant",e)}}}function a(t,n){var i=e.iterator(Array.prototype.slice.call(t[0].querySelectorAll("md-radio-button")),!0);if(i.count()){var r=t[0].querySelector("md-radio-button.md-checked"),o=i[0>n?"previous":"next"](r)||i.first();angular.element(o).triggerHandler("click")}}return r.prototype=o(),{restrict:"E",controller:["$element",r],require:["mdRadioGroup","?ngModel"],link:i}}function t(e,t,n){function i(i,o,a,d){function u(e){o[0].hasAttribute("disabled")||i.$apply(function(){d.setViewValue(a.value,e&&e.type)})}function c(){var e=d.getViewValue()===a.value;e!==s&&(s=e,o.attr("aria-checked",e),e?(o.addClass(r),d.setActiveDescendant(o.attr("id"))):o.removeClass(r))}function l(n,i){function r(){return a.id||"radio_"+t.nextUid()}i.ariaId=r(),n.attr({id:i.ariaId,role:"radio","aria-checked":"false"}),e.expectWithText(n,"aria-label")}var s;n(o),l(o,i),d.add(c),a.$observe("value",c),o.on("click",u).on("$destroy",function(){d.remove(c)})}var r="md-checked";return{restrict:"E",require:"^mdRadioGroup",transclude:!0,template:'<div class="md-container" md-ink-ripple="checkbox"><div class="md-off"></div><div class="md-on"></div></div><div ng-transclude class="md-label"></div>',link:i}}angular.module("material.components.radioButton",["material.core"]).directive("mdRadioGroup",e).directive("mdRadioButton",t),e.$inject=["$mdUtil","$mdConstant","$mdTheming"],t.$inject=["$mdAria","$mdUtil","$mdTheming"]}();