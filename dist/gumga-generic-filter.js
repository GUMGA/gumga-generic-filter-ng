(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

(function () {
  'use strict';

  GenericFilter.$inject = ['$filter'];

  function GenericFilter($filter) {
    return function (value, type) {
      if (value == 'valor') return value;
      if (type == 'date') {
        var date = value.split('');
        date.splice(2, 0, '/');
        date.splice(5, 0, '/');
        return date.join('');
      }
      if (type == 'cpf') {
        var cpf = value.split('');
        cpf.splice(3, 0, '.');
        cpf.splice(7, 0, '.');
        cpf.splice(11, 0, '-');
        return cpf.join('');
      }
      if (type == 'cnpj') {
        var cnpj = value.split('');
        cnpj.splice(2, 0, '.');
        cnpj.splice(6, 0, '.');
        cnpj.splice(10, 0, '/');
        cnpj.splice(15, 0, '-');
        return cnpj.join('');
      }

      return value;
    };
  }

  angular.module('gumga.genericfilter', []).filter('gumgaGenericFilter', GenericFilter);
})();

},{}]},{},[1]);
