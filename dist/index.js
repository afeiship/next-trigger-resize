/*!
 * name: @jswork/next-trigger-resize
 * description: Manual trigger native resize event.
 * homepage: https://github.com/afeiship/next-trigger-resize
 * version: 1.0.0
 * date: 2020-11-22 18:14:37
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

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
})();
