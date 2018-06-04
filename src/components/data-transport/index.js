'use strict'
var axios = require('axios');

module.exports = function (urlCode, formData, successFun, errorFun, method, isLoading) {
  var handleUrl = urlCode
  method = method ? method : 'get'
  var defaultHeaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
    
  }
  var this_ = this
  $.ajax({
    url: handleUrl,
    type: method,
    data: formData,
    dataType:"json",
    //async: false,
    headers: defaultHeaders,
    success(data) {
      if (data.errCode) {
        typeof errorFun === 'function' ? errorFun(data) : null
        return
      }
      typeof successFun === 'function' ? successFun(data) : null
    },
    error(data){
      typeof errorFun === 'function' ? errorFun(data) : null
    }
  })
}
