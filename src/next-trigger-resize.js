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
