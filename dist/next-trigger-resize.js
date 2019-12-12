/*!
 * name: @feizheng/next-trigger-resize
 * url: https://github.com/afeiship/next-trigger-resize
 * version: 1.0.0
 * date: 2019-12-12T12:46:14.288Z
 * license: MIT
 */

(function () {

  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  nx.triggerResize = function () {
    // For a full list of event types: https://developer.mozilla.org/en-US/docs/Web/API/document.createEvent
    var el = document; // This can be your element on which to trigger the event
    var event = document.createEvent('HTMLEvents');
    event.initEvent('resize', true, false);
    el.dispatchEvent(event);
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.triggerResize;
  }

}());

//# sourceMappingURL=next-trigger-resize.js.map
