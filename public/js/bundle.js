// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"view/nightView.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ThemeSwitcher = /*#__PURE__*/function () {
  function ThemeSwitcher() {
    _classCallCheck(this, ThemeSwitcher);

    _defineProperty(this, "theme", 'light');
  }

  _createClass(ThemeSwitcher, [{
    key: "switchThemeIdentifier",
    value: function switchThemeIdentifier() {
      if (this.theme === 'light') {
        this.theme = 'dark';
      } else this.theme = 'light';
    }
  }, {
    key: "switchIconsShared",
    value: function switchIconsShared() {
      this.switchThemeIdentifier();
      var logo = document.querySelector('.logo');
      var sideMenuBtn = document.querySelector('.icon__menu');
      var sideMenuIconhome = document.querySelector('.side-menu-icon__home');
      var sideMenuIconAboutme = document.querySelector('.side-menu-icon__aboutme');
      var sideMenuIconLearning = document.querySelector('.side-menu-icon__learning');
      var sideMenuIconProjects = document.querySelector('.side-menu-icon__projects');
      var sideMenuIconExperience = document.querySelector('.side-menu-icon__experience');
      var runningCodeImage = document.querySelector('.intro-part__animated-code');

      if (this.theme === 'dark') {
        sideMenuBtn.innerHTML = "<use href=\"/images/icons/all-icons.svg#menu-bars-light\"></use>";
        logo.innerHTML = "<use href=\"/images/icons/all-icons.svg#logo-box-night\"></use>";
        sideMenuIconhome.innerHTML = "<use href=\"/images/icons/all-icons.svg#home-menu-icon-light\"></use>";
        sideMenuIconAboutme.innerHTML = "<use href=\"/images/icons/all-icons.svg#icon-me-night\"></use>";
        sideMenuIconLearning.innerHTML = "<use href=\"/images/icons/all-icons.svg#learning-icon-night\"></use>";
        sideMenuIconProjects.innerHTML = "<use href=\"/images/icons/all-icons.svg#projects-icon-night\"></use>";
        sideMenuIconExperience.innerHTML = "<use href=\"/images/icons/all-icons.svg#experience-icon-night\"></use>";
        if (runningCodeImage) runningCodeImage.src = '/images/js-code-white.png';
      }

      if (this.theme === 'light') {
        sideMenuBtn.innerHTML = "<use href=\"/images/icons/all-icons.svg#menu-bars-dark\"></use>";
        logo.innerHTML = "<use href=\"/images/icons/all-icons.svg#logo-box-day\"></use>";
        sideMenuIconhome.innerHTML = "<use href=\"/images/icons/all-icons.svg#home-menu-icon-dark\"></use>";
        sideMenuIconAboutme.innerHTML = "<use href=\"/images/icons/all-icons.svg#aboutme-menu-icon-dark\"></use>";
        sideMenuIconLearning.innerHTML = "<use href=\"/images/icons/all-icons.svg#learning-menu-icon-dark\"></use>";
        sideMenuIconProjects.innerHTML = "<use href=\"/images/icons/all-icons.svg#projects-menu-icon-dark\"></use>";
        sideMenuIconExperience.innerHTML = "<use href=\"/images/icons/all-icons.svg#experience-menu-icon-dark\"></use>";
        if (runningCodeImage) runningCodeImage.src = '/images/js-code-darkblue.png';
      }
    }
  }, {
    key: "switchIconsMain",
    value: function switchIconsMain() {
      var aboutMeIcon = document.querySelector('.about-me__icon');
      var learningIcon = document.querySelector('.learning__icon');
      var projectsIcon = document.querySelector('.projects__icon');
      var experienceIcon = document.querySelector('.experience__icon');
      var learnArrow = document.querySelectorAll('.sec__btn--arrow');
      var learnCircle = document.querySelectorAll('.sec__btn--circle');
      var sectionArrowLeft = document.querySelector('.l-arrow-left');
      var sectionArrowRight = document.querySelector('.l-arrow-right');
      var spinningBoxImages = document.querySelectorAll('.spinning__svg');

      if (this.theme === 'dark') {
        sectionArrowRight.innerHTML = "<use href=\"/images/icons/all-icons.svg#l-arrow-right-night\"></use>";
        sectionArrowLeft.innerHTML = "<use href=\"/images/icons/all-icons.svg#l-arrow-left-night\"></use>";
        aboutMeIcon.innerHTML = "<use href=\"/images/icons/all-icons.svg#icon-me-night\"></use>";
        learningIcon.innerHTML = "<use href=\"/images/icons/all-icons.svg#learning-icon-night\"></use>";
        projectsIcon.innerHTML = "<use href=\"/images/icons/all-icons.svg#projects-icon-night\"></use>";
        experienceIcon.innerHTML = "<use href=\"/images/icons/all-icons.svg#experience-icon-night\"></use>";
        learnArrow.forEach(function (instance) {
          instance.innerHTML = "<use href=\"/images/icons/all-icons.svg#icon-arrow-night\"></use>";
        });
        learnCircle.forEach(function (instance) {
          instance.innerHTML = "<use href=\"/images/icons/all-icons.svg#icon-circle-night\"></use>";
        });
        spinningBoxImages.forEach(function (instance) {
          return instance.innerHTML = "<use class=\"spin-image\" href=\"/images/icons/all-icons.svg#logo-box-night\"></use>";
        });
      }

      if (this.theme === 'light') {
        sectionArrowRight.innerHTML = "<use href=\"/images/icons/all-icons.svg#l-arrow-right-day\"></use>";
        sectionArrowLeft.innerHTML = "<use href=\"/images/icons/all-icons.svg#l-arrow-left-day\"></use>";
        aboutMeIcon.innerHTML = "<use href=\"/images/icons/all-icons.svg#icon-me-day\"></use>";
        learningIcon.innerHTML = "<use href=\"/images/icons/all-icons.svg#learning-icon-day\"></use>";
        projectsIcon.innerHTML = "<use href=\"/images/icons/all-icons.svg#projects-icon-day\"></use>";
        experienceIcon.innerHTML = "<use href=\"/images/icons/all-icons.svg#experience-icon-day\"></use>";
        learnArrow.forEach(function (instance) {
          instance.innerHTML = "<use href=\"/images/icons/all-icons.svg#icon-arrow-day\"></use>";
        });
        learnCircle.forEach(function (instance) {
          instance.innerHTML = "<use href=\"/images/icons/all-icons.svg#icon-circle-day\"></use>";
        });
        spinningBoxImages.forEach(function (instance) {
          return instance.innerHTML = "<use class=\"spin-image\" href=\"/images/icons/all-icons.svg#logo-box-day\"></use>";
        });
      }
    }
  }, {
    key: "switchIconsAboutMe",
    value: function switchIconsAboutMe() {
      var arrowDownSvgs = document.querySelectorAll('.amp-btn-down__icon');
      if (this.theme === 'light') arrowDownSvgs.forEach(function (svgContainer) {
        return svgContainer.innerHTML = "<use href=\"/images/icons/all-icons.svg#arrow-down-dark\"></use>";
      });
      if (this.theme === 'dark') arrowDownSvgs.forEach(function (svgContainer) {
        return svgContainer.innerHTML = "<use href=\"/images/icons/all-icons.svg#arrow-down-light\"></use>";
      });
    }
  }, {
    key: "switchIconsQualifications",
    value: function switchIconsQualifications() {
      var introIcon = document.querySelector('.intro-part__icon');
      var xBtns = document.querySelectorAll('.x-btn-svg');

      if (this.theme === 'dark') {
        introIcon.innerHTML = "<use href=\"/images/icons/all-icons.svg#learning-icon-night\"></use>";
        xBtns.forEach(function (btn) {
          return btn.innerHTML = "<use href=\"/images/icons/all-icons.svg#x-button-light\"></use>";
        });
      }

      if (this.theme === 'light') {
        introIcon.innerHTML = "<use href=\"/images/icons/all-icons.svg#learning-icon-day\"></use>";
        xBtns.forEach(function (btn) {
          return btn.innerHTML = "<use href=\"/images/icons/all-icons.svg#x-button-dark\"></use>";
        });
      }
    }
  }, {
    key: "switchIconsProjects",
    value: function switchIconsProjects() {
      var introIcon = document.querySelector('.intro-part__icon');

      if (this.theme === 'dark') {
        introIcon.innerHTML = "<use href=\"/images/icons/all-icons.svg#projects-icon-night\"></use>"; // xBtns.forEach((btn) => (btn.innerHTML = `<use href="/images/icons/all-icons.svg#x-button-light"></use>`));
      }

      if (this.theme === 'light') {
        introIcon.innerHTML = "<use href=\"/images/icons/all-icons.svg#projects-icon-day\"></use>"; // xBtns.forEach((btn) => (btn.innerHTML = `<use href="/images/icons/all-icons.svg#x-button-dark"></use>`));
      }
    }
  }, {
    key: "switchIconsExperience",
    value: function switchIconsExperience() {
      var introIcon = document.querySelector('.intro-part__icon');

      if (this.theme === 'dark') {
        introIcon.innerHTML = "<use href=\"/images/icons/all-icons.svg#experience-icon-night\"></use>";
      }

      if (this.theme === 'light') {
        introIcon.innerHTML = "<use href=\"/images/icons/all-icons.svg#experience-icon-day\"></use>";
      }
    }
  }, {
    key: "switchIconsIndiv",
    value: function switchIconsIndiv() {
      var scrollBackIcon = document.querySelector('.scroll-back__svg-btn');
      var scrollBackDot = document.querySelector('.scroll-back__svg-btn-dot');

      if (this.theme === 'dark') {
        scrollBackIcon.innerHTML = "<use href=\"/images/icons/all-icons.svg#scroll-back-icon-light\"></use>";
        scrollBackDot.innerHTML = "<use href=\"/images/icons/all-icons.svg#scroll-back-spinning-dot-light\"></use>";
      }

      if (this.theme === 'light') {
        scrollBackIcon.innerHTML = "<use href=\"/images/icons/all-icons.svg#scroll-back-icon-dark\"></use>";
        scrollBackDot.innerHTML = "<use href=\"/images/icons/all-icons.svg#scroll-back-spinning-dot-dark\"></use>";
      }
    }
  }]);

  return ThemeSwitcher;
}();

var _default = new ThemeSwitcher();

exports.default = _default;
},{}],"view/sharedView.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nightView = _interopRequireDefault(require("./nightView.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SharedView = /*#__PURE__*/function () {
  //running code-related variables
  function SharedView() {
    _classCallCheck(this, SharedView);

    _defineProperty(this, "header", document.querySelector('.header-menu'));

    _defineProperty(this, "menuBtn", document.querySelector('.side-menu__btn'));

    _defineProperty(this, "themeBtn", document.querySelector('.theme-container__btn'));

    _defineProperty(this, "sideMenu", document.querySelector('.side-menu'));

    _defineProperty(this, "overlay", document.querySelector('.overlay'));

    _defineProperty(this, "topMenuLogo", document.querySelector('.logo-container'));

    _defineProperty(this, "switched", true);

    _defineProperty(this, "footerMenu", document.querySelector('.footer-menu'));

    _defineProperty(this, "footerBtns", document.querySelector('.footer-menu__buttons'));

    _defineProperty(this, "footerExtraDiv", document.querySelector('.footer-menu__extra'));

    _defineProperty(this, "footerSubmitBtn", document.querySelector('.footer-menu__form-submit'));

    _defineProperty(this, "footerWindow", 'contacts');

    _defineProperty(this, "switchLangBtn", document.querySelector('.switch-language__btn'));

    _defineProperty(this, "switchLangBtnSide", document.querySelector('.switch-language__btn--side'));

    _defineProperty(this, "errorWindow", document.querySelector('.error-window'));

    _defineProperty(this, "errorMessage", document.querySelector('.error-message'));

    _defineProperty(this, "runningCodeDiv", document.querySelector('.intro-part__running-code-box'));

    _defineProperty(this, "fallingDiv", document.querySelector('.falling-down-div'));

    _defineProperty(this, "runningDiv", document.querySelector('.running-right-div'));

    _defineProperty(this, "fallingDivTranslateValue", 2.25);

    _defineProperty(this, "theViewedPage", document.getElementById('this-page').textContent);

    _defineProperty(this, "footerMenuObserver", new IntersectionObserver(this.hideExtraFooterBox.bind(this), {
      root: null,
      threshold: 0
    }));

    this.switchLangBtn.addEventListener('click', this.addHandlerChangeLanguage.bind(this));
    this.switchLangBtnSide.addEventListener('click', this.addHandlerChangeLanguage.bind(this));
    this.overlay.addEventListener('click', this._toggleSideMenu.bind(this));
    this.menuBtn.addEventListener('click', this._toggleSideMenu.bind(this));
    this.themeBtn.addEventListener('click', function () {
      this._changeTheme();

      this._changeIcons();

      var curTheme = localStorage.getItem('myFolioDark');

      if (!curTheme || curTheme === 'disabled') {
        localStorage.setItem('myFolioDark', 'enabled');
      } else localStorage.setItem('myFolioDark', 'disabled');
    }.bind(this));
    this.footerBtns.addEventListener('click', this.displayExtraFooterBox.bind(this));
    this.footerMenuObserver.observe(this.footerMenu);
    this.footerSubmitBtn.addEventListener('click', this.submitFooterMessage.bind(this)); //empty form fields

    document.querySelectorAll('.footer__input-field').forEach(function (field) {
      return field.value = '';
    });
    this.makeDivFall();
  }

  _createClass(SharedView, [{
    key: "addHandlerChangeLanguage",
    value: function () {
      var _addHandlerChangeLanguage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var currentLang, currentLink, currentPage, res;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                currentLang = this.switchLangBtn.textContent === 'ru' ? 'en' : 'ru';
                currentLink = window.location.href.split('/');
                currentPage = currentLink[currentLink.length - 1];
                console.log(currentPage);
                _context.next = 7;
                return axios({
                  method: 'GET',
                  // url: 'http://127.0.0.1:8000/api/v1/users/login',
                  url: "http://127.0.0.1:3000/switch-language?lang=".concat(currentLang, "&page=").concat(currentPage)
                });

              case 7:
                res = _context.sent;

                if (res.data.status === 'success') {
                  // this.switchLangBtn.textContent = currentLang === 'en' ? 'ru' : 'en';
                  console.log(res.data.status);
                  location.reload();
                } // console.log(res);


                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 11]]);
      }));

      function addHandlerChangeLanguage() {
        return _addHandlerChangeLanguage.apply(this, arguments);
      }

      return addHandlerChangeLanguage;
    }() // running code-related functions

  }, {
    key: "makeDivFall",
    value: function makeDivFall() {
      var _this = this;

      var thisPage = document.getElementById('this-page').textContent;
      if (thisPage === 'indiv-project') return;
      this.fallingDiv.style.transform = "translateY(".concat(this.fallingDivTranslateValue, "vh)");
      this.fallingDivTranslateValue < 90 ? this.fallingDivTranslateValue += 2.25 : this.fallingDivTranslateValue = 2.25;

      if (this.fallingDivTranslateValue > 2.25) {
        this.runningCodeDiv.style.transform = "translateY(2vh) scale(1)";
        this.runningCodeDiv.style.backgroundImage = "none";
      }

      if (this.fallingDivTranslateValue > 9.75) {
        this.runningCodeDiv.style.transform = "translateY(18vh) scale(1.2)";
      }

      if (this.fallingDivTranslateValue > 14.5) {
        this.runningCodeDiv.style.transform = "translateY(9vh) scale(1.1)";
      }

      if (this.fallingDivTranslateValue > 20.75) {
        this.runningCodeDiv.style.transform = "translateY(5vh) scale(1.1)";
      }

      if (this.fallingDivTranslateValue > 23) {
        this.runningCodeDiv.style.transform = "translateY(3vh) scale(1.1)";
      }

      if (this.fallingDivTranslateValue > 26.75) {
        this.runningCodeDiv.style.transform = "translateY(-12vh) scale(1.3)";
      }

      if (this.fallingDivTranslateValue > 46.75) {
        this.runningCodeDiv.style.transform = "translateY(2vh) scale(1)";
      }

      if (this.fallingDivTranslateValue > 50) {
        this.runningCodeDiv.style.transform = "translateY(-2vh) scale(1)";
      }

      if (this.fallingDivTranslateValue > 66.75) {
        this.runningCodeDiv.style.transform = "translateY(-25vh) scale(1.2)";
        this.runningCodeDiv.style.backgroundImage = "linear-gradient(to top, var(--main-bg), transparent)";
      }

      if (this.fallingDivTranslateValue > 85.75) {
        this.runningCodeDiv.style.transform = "translateY(2vh) scale(1)";
      }

      setTimeout(function () {
        this.runningDiv.style.transform = "translateX(100%)";
      }.bind(this), 50);
      setTimeout(function () {
        _this.runningDiv.style.transition = "transform 0s, background-color 0.5s ease";
        _this.runningDiv.style.transform = "translateX(0%)";
        _this.runningDiv.style.top = "".concat(_this.fallingDivTranslateValue - 2.25, "vh");
        setTimeout(function () {
          this.runningDiv.style.transition = "transform 6s linear, background-color 0.5s ease";
        }.bind(_this), 50);

        _this.makeDivFall();
      }, 6200);
    }
  }, {
    key: "displayExtraFooterBox",
    value: function displayExtraFooterBox(e) {
      this.footerMenu.classList.add('footer-menu__expand');
      this.footerExtraDiv.classList.remove('footer-menu__extra__hidden');

      if (e.target.closest('.footer-contacts-btn')) {
        if (this.footerWindow !== 'contacts') {
          if (window.innerWidth < 1080) {
            this.footerExtraDiv.style.transform = "rotateY(0deg)";
            this.footerWindow = 'contacts';
          }
        }
      }

      if (e.target.closest('.footer-address-btn')) {
        if (this.footerWindow !== 'address') {
          if (window.innerWidth < 1080) {
            this.footerExtraDiv.style.transform = "rotateY(180deg)";
            this.footerWindow = 'address';
            console.log('switched');
          }
        }
      }

      console.log('scrolling');
      setTimeout(function () {
        return document.body.scrollIntoView({
          block: 'end',
          behavior: 'smooth'
        });
      }, 100);
    }
  }, {
    key: "hideExtraFooterBox",
    value: function hideExtraFooterBox() {
      this.footerMenu.classList.remove('footer-menu__expand');
      this.footerExtraDiv.classList.add('footer-menu__extra__hidden');
    }
  }, {
    key: "submitFooterMessage",
    value: function () {
      var _submitFooterMessage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e) {
        var _this2 = this;

        var messageArr, messageObject, res, errorMessage;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                e.preventDefault(); // console.log(this.switchLangBtn.textContent);

                messageArr = new FormData(document.querySelector('.footer-menu__form'));
                messageObject = Object.fromEntries(messageArr);

                if (!(window.localStorage.getItem('ftrmsgsent') === null)) {
                  _context2.next = 10;
                  break;
                }

                _context2.next = 7;
                return axios({
                  method: 'POST',
                  url: "http://127.0.0.1:3000/message",
                  data: messageObject
                });

              case 7:
                res = _context2.sent;
                _context2.next = 11;
                break;

              case 10:
                throw new Error(400);

              case 11:
                if (!(res.status !== 200)) {
                  _context2.next = 13;
                  break;
                }

                throw new Error(res.response);

              case 13:
                //save a cookie/storage, if message is sent
                window.localStorage.setItem('ftrmsgsent', 'true');
                document.querySelectorAll('.footer__input-field').forEach(function (field) {
                  return field.value = '';
                }); //display success message

                this.errorMessage.textContent = this.switchLangBtn.textContent === 'ru' ? "Message was successfully sent. I will contact you soon." : "\u041E\u0442\u043B\u0438\u0447\u043D\u043E! \u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E. \u042F \u0441\u043A\u043E\u0440\u043E \u0441 \u0412\u0430\u043C\u0438 \u0441\u0432\u044F\u0436\u0443\u0441\u044C.";

                this._makeElementAppear(this.errorWindow, 200, 'block');

                setTimeout(function () {
                  _this2._makeElementDisappear(_this2.errorWindow, 200);
                }, 3000);
                _context2.next = 27;
                break;

              case 20:
                _context2.prev = 20;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0);
                if (_context2.t0.message === 'Network Error') this.errorMessage.textContent = this.switchLangBtn.textContent === 'ru' ? "Oops, something went wrong. Please, check your internet connection." : "\u0423\u043F\u0441, \u0447\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435.";

                if (_context2.t0.message === '400' || _context2.t0.response.status && _context2.t0.response.status === 400) {
                  errorMessage = _context2.t0.response.data.errorMessage; // console.log(errorMessage);

                  if (errorMessage) {
                    this.errorMessage.textContent = this.switchLangBtn.textContent === 'ru' ? "Please, provide a valid email address." : "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0439 \u0430\u0434\u0440\u0435\u0441";
                  }

                  if (!errorMessage) {
                    this.errorMessage.textContent = this.switchLangBtn.textContent === 'ru' ? "You have already tried to contact me via this form. Please, contact me via email." : "\u0412\u044B \u0443\u0436\u0435 \u043F\u0440\u043E\u0431\u043E\u0432\u0430\u043B\u0438 \u0441\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441\u043E \u043C\u043E\u0439 \u0447\u0435\u0440\u0435\u0437 \u044D\u0442\u0443 \u0444\u043E\u0440\u043C\u0443. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0441\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0447\u0435\u0440\u0435\u0437 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0443\u044E \u043F\u043E\u0447\u0442\u0443.";
                  }
                }

                this._makeElementAppear(this.errorWindow, 200, 'block');

                setTimeout(function () {
                  _this2._makeElementDisappear(_this2.errorWindow, 200);
                }, 3000); // document.querySelectorAll('.footer__input-field').forEach((field) => (field.value = ''));

              case 27:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 20]]);
      }));

      function submitFooterMessage(_x) {
        return _submitFooterMessage.apply(this, arguments);
      }

      return submitFooterMessage;
    }()
  }, {
    key: "_changeTheme",
    value: function _changeTheme() {
      document.querySelectorAll('.icon__theme').forEach(function (btn) {
        return btn.classList.toggle('icon__theme--active');
      });

      if (this.switched === true) {
        document.documentElement.setAttribute('data-theme', 'dark');
        this.switched = false;
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        this.switched = true;
      }
    }
  }, {
    key: "_changeIcons",
    value: function _changeIcons() {
      _nightView.default.switchIconsShared();

      if (this.theViewedPage === 'main-page') _nightView.default.switchIconsMain();
      if (this.theViewedPage === 'about-me') _nightView.default.switchIconsAboutMe();
      if (this.theViewedPage === 'qualifications') _nightView.default.switchIconsQualifications();
      if (this.theViewedPage === 'projects') _nightView.default.switchIconsProjects();
      if (this.theViewedPage === 'experience') _nightView.default.switchIconsExperience();
      if (this.theViewedPage === 'indiv-project') _nightView.default.switchIconsIndiv();
    }
  }, {
    key: "_toggleSideMenu",
    value: function _toggleSideMenu() {
      if (this.overlay.style.display === 'block' && !this.sideMenu.classList.contains('side-menu__out')) return;
      this.sideMenu.classList.toggle('side-menu__out');

      if (this.overlay.style.display === 'block') {
        this.overlay.style.opacity = 0;
        setTimeout(function () {
          this.overlay.style.display = 'none';
        }.bind(this), 400);
      } else {
        this.overlay.style.display = 'block';
        this.overlay.style.opacity = 1;
      }
    }
  }, {
    key: "_makeElementAppear",
    value: function _makeElementAppear(element, timer, display) {
      element.style.display = display;
      setTimeout(function () {
        element.style.opacity = 1;
      }.bind(this), timer);
    }
  }, {
    key: "_makeElementDisappear",
    value: function _makeElementDisappear(element, timer) {
      element.style.opacity = 0;
      setTimeout(function () {
        element.style.display = 'none';
      }.bind(this), timer);
    }
  }]);

  return SharedView;
}();

var _default = SharedView;
exports.default = _default;
},{"./nightView.js":"view/nightView.js"}],"view/mainView.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MainView = /*#__PURE__*/function () {
  // imageObserver = new IntersectionObserver(this.loadLazyImages.bind(this), {
  //   root: null,
  //   threshold: 0,
  //   rootMargin: '400px',
  // });
  function MainView() {
    _classCallCheck(this, MainView);

    _defineProperty(this, "allSections", document.querySelectorAll('.section'));

    _defineProperty(this, "topMenu", document.querySelector('.top-menu'));

    _defineProperty(this, "introBox", document.querySelector('.intro-part__glass'));

    _defineProperty(this, "introText", document.querySelector('.welcome-phrase'));

    _defineProperty(this, "advertSections", document.querySelectorAll('.advert__section'));

    _defineProperty(this, "mainSections", document.querySelectorAll('.sec__main'));

    _defineProperty(this, "mainSection", document.querySelector('.sec'));

    _defineProperty(this, "lazyImages", document.querySelectorAll('img[data-src]'));

    _defineProperty(this, "arrowLeft", document.querySelector('.arrow-left--container'));

    _defineProperty(this, "arrowRight", document.querySelector('.arrow-right--container'));

    _defineProperty(this, "currentSlide", 0);

    _defineProperty(this, "xDown", null);

    _defineProperty(this, "yDown", null);

    _defineProperty(this, "allSectionsObserver", new IntersectionObserver(this.revealSection.bind(this), {
      root: null,
      threshold: 0.1
    }));

    _defineProperty(this, "mainSectionObserver", new IntersectionObserver(this.hideShowMenu.bind(this), {
      root: null,
      threshold: [0.6]
    }));

    _defineProperty(this, "backgroundObserver", new IntersectionObserver(this.loadBackgroundImages.bind(this), {
      root: null,
      threshold: 0,
      rootMargin: '400px'
    }));

    this.introBox.addEventListener('mousemove', this.addIntroMovingShadow.bind(this));
    this.setObserversCheckPagePosition();
    this.arrowLeft.addEventListener('click', function () {
      this.swipeBtn('left');
    }.bind(this)); // prettier-ignore

    this.arrowRight.addEventListener('click', function () {
      this.swipeBtn('right');
    }.bind(this)); //TESTING

    this.mainSection.addEventListener('touchstart', this.handleTouchStart.bind(this), false);
    this.mainSection.addEventListener('touchmove', this.handleTouchMove.bind(this), false);
  }

  _createClass(MainView, [{
    key: "setObserversCheckPagePosition",
    value: function setObserversCheckPagePosition() {
      setTimeout(function () {
        var _this = this;

        this.mainSectionObserver.observe(this.mainSection);
        this.allSections.forEach(function (section) {
          return _this.allSectionsObserver.observe(section);
        });
        this.backgroundObserver.observe(this.mainSection);
        this.lazyImages.forEach(function (image) {
          return _this.imageObserver.observe(image);
        });

        if (document.body.getBoundingClientRect().top < 0) {
          this.allSections.forEach(function (section) {
            return section.classList.remove('section-hidden');
          });
        }
      }.bind(this), 400);
    }
  }, {
    key: "hideShowMenu",
    value: function hideShowMenu(entry, observer) {
      if (entry[0].isIntersecting) {
        this.topMenu.style.opacity = 0;
      }

      if (!entry[0].isIntersecting) {
        this.topMenu.style.opacity = 1;
      }
    }
  }, {
    key: "revealSection",
    value: function revealSection(entry, observer) {
      if (!entry[0].isIntersecting) return;

      if (entry[0].isIntersecting) {
        var thisSection = document.getElementById(entry[0].target.id);
        thisSection.classList.remove('section-hidden');
        var images = thisSection.querySelectorAll('.advert__section--image');
        console.log(images);
        var central = thisSection.querySelectorAll('.advert__section--image__central');
        console.log(central.length);

        if (central.length > 0) {
          central.forEach(function (img) {
            return img.src = img.dataset.path;
          });
          return;
        }

        images.forEach(function (img) {
          return img.src = img.dataset.path;
        });
      }
    } // loadLazyImages(entry, observer) {
    //   if (!entry[0].isIntersecting) return;
    //   entry[0].target.src = entry[0].target.dataset.src;
    //   entry[0].target.addEventListener('load', function () {
    //     entry[0].target.classList.remove('blurred');
    //   });
    //   observer.unobserve(entry[0].target);
    // }

  }, {
    key: "loadBackgroundImages",
    value: function loadBackgroundImages(entries, observer) {
      if (!entries[0].isIntersecting) return;
      entries[0].target.querySelectorAll('.sec__main').forEach(function (element) {
        return element.classList.remove('lazy-bg');
      });
      observer.unobserve(entries[0].target);
    }
  }, {
    key: "swipeSlide",
    value: function swipeSlide(string) {
      if (string === 'right') {
        if (this.currentSlide >= 3) return;
        this.currentSlide++;
      }

      if (string === 'left') {
        if (this.currentSlide <= 0) return;
        this.currentSlide--;
      }

      document.getElementById('about-me').style.transform = "translateX(".concat((0 - this.currentSlide) * 100, "vw)");
      document.getElementById('learning').style.transform = "translateX(".concat((1 - this.currentSlide) * 100, "vw)");
      document.getElementById('projects').style.transform = "translateX(".concat((2 - this.currentSlide) * 100, "vw)");
      document.getElementById('experience').style.transform = "translateX(".concat((3 - this.currentSlide) * 100, "vw)");
    } //////////////////////// Swiping functions TESTING //////////////////////////////

  }, {
    key: "getTouches",
    value: function getTouches(evt) {
      return evt.touches || // browser API
      evt.originalEvent.touches; // jQuery
    }
  }, {
    key: "handleTouchStart",
    value: function handleTouchStart(evt) {
      var firstTouch = this.getTouches(evt)[0];
      this.xDown = firstTouch.clientX;
      this.yDown = firstTouch.clientY;
    }
  }, {
    key: "handleTouchMove",
    value: function handleTouchMove(evt) {
      if (!this.xDown || !this.yDown) {
        return;
      }

      var xUp = evt.touches[0].clientX;
      var yUp = evt.touches[0].clientY;
      var xDiff = this.xDown - xUp;
      var yDiff = this.yDown - yUp;

      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) {
          /* right swipe */
          this.swipeSlide('right');
        } else {
          /* left swipe */
          this.swipeSlide('left');
        }
      } // else {
      //   if (yDiff > 0) {
      //     /* down swipe */
      //   } else {
      //     /* up swipe */
      //   }
      // }

      /* reset values */


      this.xDown = null;
      this.yDown = null;
    }
  }, {
    key: "swipeBtn",
    value: function swipeBtn(direction) {
      if (direction == 'left') {
        this.arrowLeft.style.opacity = '0.5';
        setTimeout(function () {
          this.arrowLeft.style.opacity = '0.07';
        }.bind(this), 200);
      } else {
        this.arrowRight.style.opacity = '0.5';
        setTimeout(function () {
          this.arrowRight.style.opacity = '0.07';
        }.bind(this), 400);
      }

      this.swipeSlide(direction);
    }
  }, {
    key: "addIntroMovingShadow",
    value: function addIntroMovingShadow(e) {
      var shadowParameters = this.movingShadow(e, this.introBox, 15);
      this.introText.style.filter = "drop-shadow(".concat(shadowParameters[0], "px ").concat(shadowParameters[1], "px 4px var(--icons-shadow))"); // this.introIcon.style.filter = `drop-shadow(${shadowParameters[0]}px ${shadowParameters[1]}px 8px var(--icons-shadow))`;
    }
  }, {
    key: "movingShadow",
    value: function movingShadow(e) {
      var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : e.target;
      var maxShadow = arguments.length > 2 ? arguments[2] : undefined;
      var totalHeight = element.clientHeight;
      var totalWidth = element.clientWidth;
      var mouseX = e.offsetX;
      var mouseY = e.offsetY;
      return [Math.trunc((totalWidth / 2 - mouseX) * maxShadow / (totalWidth / 2)), Math.trunc((totalHeight / 2 - mouseY) * maxShadow / (totalHeight / 2))];
    }
  }]);

  return MainView;
}();

var _default = MainView;
exports.default = _default;
},{}],"view/projectsView.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ProjectsView = /*#__PURE__*/function () {
  function ProjectsView() {
    _classCallCheck(this, ProjectsView);

    _defineProperty(this, "introBox", document.querySelector('.intro-part'));

    _defineProperty(this, "introText", document.querySelector('.intro-part__text'));

    _defineProperty(this, "introIcon", document.querySelector('.intro-part__icon'));

    _defineProperty(this, "wheelGridBox", document.querySelector('.pr-general-view'));

    _defineProperty(this, "wheelContainer", document.querySelector('.pr-main-section'));

    _defineProperty(this, "mainProjectName", document.querySelector('.pr-main__project-name'));

    _defineProperty(this, "wheelDetails", document.querySelectorAll('.pr-wheel-details'));

    _defineProperty(this, "individualProjectName", document.querySelectorAll('.justadiv__project-name'));

    _defineProperty(this, "justDivs", document.querySelectorAll('.justadiv'));

    _defineProperty(this, "justDivsContentBoxes", document.querySelectorAll('.justadiv__content'));

    _defineProperty(this, "mainImageContainers", document.querySelectorAll('.jad__content-main-img__container'));

    _defineProperty(this, "secondaryImageContainers", document.querySelectorAll('.jad__content-secondary-img__container'));

    _defineProperty(this, "draggedOverDivSupreme", document.querySelector('.supreme-div'));

    _defineProperty(this, "btnSwitchFormat", document.querySelector('.btn__switch-format'));

    _defineProperty(this, "btnSwitchLanguage", document.querySelector('.switch-language__btn'));

    _defineProperty(this, "projectViewFormat", 'wheel');

    _defineProperty(this, "mousePositionX", void 0);

    _defineProperty(this, "isMoving", true);

    _defineProperty(this, "isDragging", false);

    _defineProperty(this, "movingTimer", void 0);

    _defineProperty(this, "timerAfterMouseRelease", void 0);

    _defineProperty(this, "shiftValue", 0);

    _defineProperty(this, "dragDirection", void 0);

    _defineProperty(this, "projectNames", [['Mapty: Workout Records', 'Bankist: Home Page', 'Bankist: Application', 'Natours: Your Travelling Guide', 'Forkify: Enrich Your Kitchen Arsenal', 'Connect Four', 'Pig Game', 'Portfolio Website'], ['Mapty: Дневник Спорсмена', 'Bankist: Главная Страница', 'Bankist: Приложение', 'Natours: Ваш Туристический Гид', 'Forkify: Арсенал Кулинара', 'Cобери 4', 'Игра в Порося', 'Мое Портфолио']]);

    _defineProperty(this, "projectDetails", [[], [], [], [], [], [], [], []]);

    _defineProperty(this, "currentProject", void 0);

    _defineProperty(this, "projectLinks", ['mapty', 'bankist-page', 'bankist-app', 'natours-app', 'forkify-app', 'connect-four', 'pig-game', 'my-portfolio']);

    _defineProperty(this, "observePrMainSection", new IntersectionObserver(this.bringFirstProject.bind(this), {
      root: null,
      threshold: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1]
    }));

    _defineProperty(this, "intersectionCount", 0);

    this.observePrMainSection.observe(this.wheelContainer);
    window.addEventListener('resize', this.returnShiftedSection.bind(this));
    this.introBox.addEventListener('mousemove', this.addIntroMovingShadow.bind(this));
    this.draggedOverDivSupreme.addEventListener('mouseup', this.whereClicks.bind(this));
    this.draggingProjects();
  } //this function is used to return the projects div to the page when mode is shifter from desktop to mobile


  _createClass(ProjectsView, [{
    key: "returnShiftedSection",
    value: function returnShiftedSection() {
      if (window.innerWidth <= 1080) {
        this.wheelGridBox.style.transform = "translateX(0vw)";
      }
    } //it brings first project preview to the center of the page and reveals details

  }, {
    key: "bringFirstProject",
    value: function () {
      var _bringFirstProject = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(entry, observer) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (entry[0].isIntersecting) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                entry[0].target.classList.remove('section-hidden');

                if (!(window.innerWidth >= 1080 && window.matchMedia('(hover: hover)').matches)) {
                  _context.next = 11;
                  break;
                }

                this.wheelGridBox.style.transform = "translateX(".concat(75 - this.intersectionCount * (75 / 20), "vw)");
                this.intersectionCount++;

                if (!(this.intersectionCount >= 20 || entry[0].intersectionRatio >= 0.97)) {
                  _context.next = 11;
                  break;
                }

                _context.next = 9;
                return this.setWheelFinalPosition();

              case 9:
                //prettier-ignore
                setTimeout(function () {
                  this.wheelGridBox.style.transition = 'transform 0ms';
                }.bind(this), 600);
                observer.unobserve(this.wheelContainer);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function bringFirstProject(_x, _x2) {
        return _bringFirstProject.apply(this, arguments);
      }

      return bringFirstProject;
    }() // it allows dragging the block

  }, {
    key: "draggingProjects",
    value: function draggingProjects() {
      var pos1 = 0,
          pos2 = 0;
      this.draggedOverDivSupreme.onmousedown = dragWhileMouseDown.bind(this);

      function dragWhileMouseDown(_x3) {
        return _dragWhileMouseDown.apply(this, arguments);
      }

      function _dragWhileMouseDown() {
        _dragWhileMouseDown = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e) {
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  this.isDragging = false;
                  e = e || window.event;
                  e.preventDefault();
                  pos2 = e.clientX;
                  this.wheelGridBox.style.transition = "transform 0.05s";
                  this.draggedOverDivSupreme.style.cursor = 'grabbing';
                  document.onmouseup = closeProjectsDrag.bind(this);
                  document.onmousemove = projectsDrag.bind(this);

                case 8:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));
        return _dragWhileMouseDown.apply(this, arguments);
      }

      function projectsDrag(e) {
        e = e || window.event;
        e.preventDefault();
        this.wheelDetails.forEach(function (element) {
          element.style.opacity = 0;
        });
        clearTimeout(this.timerAfterMouseRelease);
        this.isDragging = true;
        this.shiftValue = Number(this.wheelGridBox.style.transform.slice(11, this.wheelGridBox.style.transform.length - 3));
        this.isCursorMoving(e);
        pos1 = pos2 - e.clientX;
        pos2 = e.clientX;

        if (pos1 < 0) {
          this.shiftValue = this.shiftValue + 0.1 * Math.abs(pos1);
          this.wheelGridBox.style.transform = "translateX(".concat(this.shiftValue, "vw)");
          this.dragDirection = 'right';
        }

        if (pos1 > 0) {
          this.shiftValue = this.shiftValue - 0.1 * Math.abs(pos1);
          this.wheelGridBox.style.transform = "translateX(".concat(this.shiftValue, "vw)");
          this.dragDirection = 'left';
        }
      }

      function closeProjectsDrag() {
        return _closeProjectsDrag.apply(this, arguments);
      }

      function _closeProjectsDrag() {
        _closeProjectsDrag = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  // stop moving when mouse button is released
                  document.onmouseup = null;
                  document.onmousemove = null;
                  this.draggedOverDivSupreme.style.cursor = 'grab';

                  if (this.isDragging) {
                    _context3.next = 5;
                    break;
                  }

                  return _context3.abrupt("return");

                case 5:
                  this.wheelGridBox.style.transition = "transform 0.8s cubic-bezier(0.24, 1.44, 0.44, 1.19)"; //place the project in the center of the window

                  if (this.dragDirection === 'left' && this.shiftValue > -350 && this.shiftValue < 0 && this.isMoving) this.shiftValue = this.shiftValue - (50 - Math.abs(this.shiftValue % 50));
                  if (this.dragDirection === 'right' && this.shiftValue > -350 && this.shiftValue < 0 && this.isMoving) this.shiftValue = this.shiftValue + Math.abs(this.shiftValue % 50); //in case cursor didn't move on the moment of release, then the nearest project is shown

                  if (!this.isMoving && this.shiftValue > -350 && this.shiftValue < 0) Math.abs(this.shiftValue % 50) > 25 ? this.shiftValue = this.shiftValue - (50 - Math.abs(this.shiftValue % 50)) : this.shiftValue = this.shiftValue + Math.abs(this.shiftValue % 50);
                  _context3.next = 11;
                  return this.setWheelFinalPosition();

                case 11:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));
        return _closeProjectsDrag.apply(this, arguments);
      }
    } //this function places the closest project (as per the mechanics) to the center of the page

  }, {
    key: "setWheelFinalPosition",
    value: function () {
      var _setWheelFinalPosition = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (this.shiftValue > 0) this.shiftValue = 0;
                if (this.shiftValue < -350) this.shiftValue = -350;
                this.wheelGridBox.style.transition = "transform 0.8s cubic-bezier(0.24, 1.44, 0.44, 1.19)";
                this.wheelGridBox.style.transform = "translateX(".concat(this.shiftValue, "vw)");
                this.timerAfterMouseRelease = setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
                  return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          this.wheelGridBox.style.transition = "transform 0.05s";
                          _context4.next = 3;
                          return this.identifyFrontDiv();

                        case 3:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4, this);
                })).bind(this), 600);

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function setWheelFinalPosition() {
        return _setWheelFinalPosition.apply(this, arguments);
      }

      return setWheelFinalPosition;
    }() //this function identifies where clicking is happening over the manipulation field

  }, {
    key: "whereClicks",
    value: function whereClicks(e) {
      if (this.isDragging) return;
      if (e.clientX > window.innerWidth / 4 && e.clientX < window.innerWidth * 3 / 4) window.open("/projects/".concat(this.projectLinks[this.currentProject - 1]), '_self');
    } ////////////////////// FRONT DIV ANIMATION FUNCTIONS ///////////////////////////
    //it identifies if the mouse was moving on the moment of mouse button release

  }, {
    key: "isCursorMoving",
    value: function isCursorMoving(e) {
      clearTimeout(this.movingTimer);
      this.mousePositionX !== e.clientX ? this.isMoving = true : this.isMoving = false;
      this.mousePositionX = e.clientX; //prettier-ignore

      this.movingTimer = setTimeout(function () {
        this.isMoving = false;
      }.bind(this), 125);
    } //it identifies the front project

  }, {
    key: "identifyFrontDiv",
    value: function () {
      var _identifyFrontDiv = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.t0 = this.shiftValue;
                _context6.next = _context6.t0 === 0 ? 3 : _context6.t0 === -50 ? 7 : _context6.t0 === -100 ? 11 : _context6.t0 === -150 ? 15 : _context6.t0 === -200 ? 19 : _context6.t0 === -250 ? 23 : _context6.t0 === -300 ? 27 : _context6.t0 === -350 ? 31 : 35;
                break;

              case 3:
                this.currentProject = 1;
                _context6.next = 6;
                return this.revealProjectDetails('1-mapty');

              case 6:
                return _context6.abrupt("break", 36);

              case 7:
                this.currentProject = 2;
                _context6.next = 10;
                return this.revealProjectDetails('2-bankist');

              case 10:
                return _context6.abrupt("break", 36);

              case 11:
                this.currentProject = 3;
                _context6.next = 14;
                return this.revealProjectDetails('3-bankapp');

              case 14:
                return _context6.abrupt("break", 36);

              case 15:
                this.currentProject = 4;
                _context6.next = 18;
                return this.revealProjectDetails('4-natours');

              case 18:
                return _context6.abrupt("break", 36);

              case 19:
                this.currentProject = 5;
                _context6.next = 22;
                return this.revealProjectDetails('5-forkify');

              case 22:
                return _context6.abrupt("break", 36);

              case 23:
                this.currentProject = 6;
                _context6.next = 26;
                return this.revealProjectDetails('6-connect');

              case 26:
                return _context6.abrupt("break", 36);

              case 27:
                this.currentProject = 7;
                _context6.next = 30;
                return this.revealProjectDetails('7-piggame');

              case 30:
                return _context6.abrupt("break", 36);

              case 31:
                this.currentProject = 8;
                _context6.next = 34;
                return this.revealProjectDetails('8-portfolio');

              case 34:
                return _context6.abrupt("break", 36);

              case 35:
                return _context6.abrupt("break", 36);

              case 36:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function identifyFrontDiv() {
        return _identifyFrontDiv.apply(this, arguments);
      }

      return identifyFrontDiv;
    }() //it reveals the name of the front project and animates the front project

  }, {
    key: "revealProjectDetails",
    value: function () {
      var _revealProjectDetails = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(projectId) {
        var frontDiv, mainContainer, secondaryContainers;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                frontDiv = document.getElementById(projectId);
                mainContainer = frontDiv.querySelector('.justadiv__content').querySelector('.jad__content-main-img__container'); // mainContainer.style.transform = 'scale(1.02)';

                mainContainer.style.opacity = 1;
                secondaryContainers = frontDiv.querySelector('.justadiv__content').querySelectorAll('.jad__content-secondary-img__container');
                secondaryContainers.forEach(function (container) {
                  container.style.opacity = 1; // container.style.transform = 'scale(1.1)';
                });
                this.displayFrontProjectName(projectId);
                _context7.next = 8;
                return this.displayFrontProjectDetails(projectId);

              case 8:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function revealProjectDetails(_x4) {
        return _revealProjectDetails.apply(this, arguments);
      }

      return revealProjectDetails;
    }() //function to identify and reveal project name

  }, {
    key: "displayFrontProjectName",
    value: function displayFrontProjectName(projectId) {
      var idNum = parseInt(projectId);
      this.btnSwitchLanguage.textContent === 'en' ? this.mainProjectName.textContent = this.projectNames[0][idNum - 1] : this.mainProjectName.textContent = this.projectNames[1][idNum - 1];
    } //funtion to identify (and SOON REVEAL) project details

  }, {
    key: "displayFrontProjectDetails",
    value: function () {
      var _displayFrontProjectDetails = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(projectId) {
        var projectData, idNum, res;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;
                idNum = parseInt(projectId);

                if (!(this.projectDetails[idNum - 1].length === 0)) {
                  _context8.next = 9;
                  break;
                }

                _context8.next = 5;
                return axios({
                  method: 'GET',
                  // url: 'http://127.0.0.1:8000/api/v1/users/login',
                  url: "http://127.0.0.1:3000/details?prnumber=".concat(idNum)
                });

              case 5:
                res = _context8.sent;

                if (res.data.message === 'success') {
                  //render project details
                  projectData = [res.data.detailsData.detailsLeft, res.data.detailsData.detailsRight];
                  this.projectDetails[idNum - 1] = projectData;
                }

                _context8.next = 10;
                break;

              case 9:
                projectData = this.projectDetails[idNum - 1];

              case 10:
                console.log(this.projectDetails);
                this.wheelDetails.forEach(function (element, i) {
                  element.firstChild.textContent = projectData[i];
                  element.style.opacity = 1;
                });
                _context8.next = 17;
                break;

              case 14:
                _context8.prev = 14;
                _context8.t0 = _context8["catch"](0);
                this.wheelDetails.forEach(function (element, i) {
                  element.firstChild.textContent = 'Oops... Something went wrong. Information about this project is not accessible at the moment. Please, try again later.';
                  element.style.opacity = 1;
                });

              case 17:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[0, 14]]);
      }));

      function displayFrontProjectDetails(_x5) {
        return _displayFrontProjectDetails.apply(this, arguments);
      }

      return displayFrontProjectDetails;
    }() ////////////////////// MOVING SHADOW CODE ////////////////////////

  }, {
    key: "addIntroMovingShadow",
    value: function addIntroMovingShadow(e) {
      var shadowParameters = this.movingShadow(e, this.introBox, 15);
      this.introText.style.filter = "drop-shadow(".concat(shadowParameters[0], "px ").concat(shadowParameters[1], "px 4px var(--icons-shadow))");
      this.introIcon.style.filter = "drop-shadow(".concat(shadowParameters[0], "px ").concat(shadowParameters[1], "px 8px var(--icons-shadow))");
    }
  }, {
    key: "movingShadow",
    value: function movingShadow(e) {
      var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : e.target;
      var maxShadow = arguments.length > 2 ? arguments[2] : undefined;
      var totalHeight = element.clientHeight;
      var totalWidth = element.clientWidth;
      var mouseX = e.offsetX;
      var mouseY = e.offsetY;
      return [Math.trunc((totalWidth / 2 - mouseX) * maxShadow / (totalWidth / 2)), Math.trunc((totalHeight / 2 - mouseY) * maxShadow / (totalHeight / 2))];
    } /////////////////////////// appear/disappear functions (just in case) //////////////////////////////

  }, {
    key: "_makeElementAppear",
    value: function _makeElementAppear(element, timer, display) {
      element.style.display = display;
      setTimeout(function () {
        element.style.opacity = 1;
      }.bind(this), timer);
    }
  }, {
    key: "_makeElementDisappear",
    value: function _makeElementDisappear(element, timer) {
      element.style.opacity = 0;
      setTimeout(function () {
        element.style.display = 'none';
      }.bind(this), timer);
    }
  }]);

  return ProjectsView;
}();

var _default = ProjectsView;
exports.default = _default;
},{}],"view/aboutmeView.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var AboutMeView = /*#__PURE__*/function () {
  // subObserver = new IntersectionObserver(this.rollInTheSub.bind(this), { root: null, threshold: 0.1 });
  function AboutMeView() {
    var _this = this;

    _classCallCheck(this, AboutMeView);

    _defineProperty(this, "allAmpSubs", document.querySelectorAll('.amp__sub'));

    _defineProperty(this, "allSplitters", document.querySelectorAll('.sub-splitter'));

    _defineProperty(this, "introText", document.querySelector('.intro-part__text'));

    _defineProperty(this, "introImage", document.querySelector('.intro-part__photo'));

    _defineProperty(this, "introBox", document.querySelector('.intro-part__glass'));

    _defineProperty(this, "mainSection", document.querySelector('.amp__main-part'));

    _defineProperty(this, "ampBtnsRevealSection", document.querySelectorAll('.amp-btn__reveal-section'));

    _defineProperty(this, "ampHeadlinesRevealSection", document.querySelectorAll('.amp-headline__reveal-section'));

    _defineProperty(this, "allImages", document.querySelectorAll('.amp-img'));

    _defineProperty(this, "sectionsHeight", []);

    _defineProperty(this, "ampSectionObserver", new IntersectionObserver(this.revealAmpSection.bind(this), {
      root: null,
      threshold: 0
    }));

    this.ampBtnsRevealSection.forEach(function (btn) {
      return btn.addEventListener('click', function () {
        this.revealInfoSection(btn.dataset.ampnum);
      }.bind(_this));
    });
    this.ampHeadlinesRevealSection.forEach(function (headline) {
      return headline.addEventListener('click', function () {
        this.revealInfoSection(headline.dataset.ampnum);
      }.bind(_this));
    });
    this.allAmpSubs.forEach(function (sub) {
      return _this.countSectionHeight(sub);
    });
    this.ampSectionObserver.observe(this.mainSection);
    this.introBox.addEventListener('mousemove', this.addIntroMovingShadow.bind(this)); // this.allAmpSubs.forEach((sub) => this.subObserver.observe(sub));
  } ////////// OBSERVERS //////////////


  _createClass(AboutMeView, [{
    key: "revealAmpSection",
    value: function revealAmpSection(entry, observer) {
      if (!entry[0].isIntersecting) return;

      if (entry[0].isIntersecting) {
        this.mainSection.classList.remove('section-hidden');
        this.allImages.forEach(function (img) {
          return img.src = img.dataset.path;
        });
      }
    } //////////// OPEN SECTION ANIMATION ////////////////

  }, {
    key: "countSectionHeight",
    value: function countSectionHeight(sub) {
      var height = sub.offsetHeight;
      this.sectionsHeight.push(height);
      console.log(this.sectionsHeight);
      sub.style.display = 'none';
    }
  }, {
    key: "revealInfoSection",
    value: function revealInfoSection(id) {
      var _this2 = this;

      var secNum = parseInt(id);
      var chosenSection = this.allAmpSubs[secNum]; //hiding the used btn

      this.hideUsedBtn(secNum); //adding transition and moving subs down

      this.allAmpSubs.forEach(function (sub) {
        return sub.style.transition = 'transform 0.4s ease-in-out, opacity 0.4s linear';
      });
      this.allAmpSubs.forEach(function (sub, i) {
        if (i < secNum) return;
        sub.style.transform = "translateY(".concat(_this2.sectionsHeight[secNum], "px)");
      }); //adding transition and moving splitters down

      this.allSplitters.forEach(function (splitter) {
        return splitter.style.transition = 'transform 0.4s ease-in-out';
      });
      this.allSplitters.forEach(function (splitter, i) {
        if (i < secNum) return;
        splitter.style.transform = "translateY(".concat(_this2.sectionsHeight[secNum], "px)");
      });
      setTimeout(function () {
        chosenSection.style.display = 'flex';

        _this2.allAmpSubs.forEach(function (sub, i) {
          if (i < secNum) return;
          sub.style.transition = 'opacity 0.4s linear';
          sub.style.transform = "translateY(0px)";
        });

        _this2.allSplitters.forEach(function (splitter, i) {
          if (i < secNum) return;
          splitter.style.transition = 'transform 0s';
          splitter.style.transform = "translateY(0px)";
        });
      }, 350);
      setTimeout(function () {
        chosenSection.classList.remove('amp-element-hidden');
      }, 400);
    }
  }, {
    key: "hideUsedBtn",
    value: function hideUsedBtn(num) {
      var _this3 = this;

      this.ampBtnsRevealSection[num].classList.add('amp-element-hidden');
      this.ampHeadlinesRevealSection[num].classList.add('amp-element-hidden');
      setTimeout(function () {
        _this3.ampBtnsRevealSection[num].style.display = 'none';
        _this3.ampHeadlinesRevealSection[num].style.display = 'none';
      }, 400);
    } // rollInTheSub(entry, observer) {
    //   if (!entry[0].isIntersecting) return;
    //   console.log(entry[0]);
    //   entry[0].target.style.transform = 'translateX(0vw)';
    //   entry[0].target.style.opacity = '1';
    // }
    ////////////////////// MOVING SHADOW CODE ////////////////////////

  }, {
    key: "addIntroMovingShadow",
    value: function addIntroMovingShadow(e) {
      var shadowParameters = this.movingShadow(e, this.introBox, 15);
      this.introText.style.filter = "drop-shadow(".concat(shadowParameters[0], "px ").concat(shadowParameters[1], "px 4px var(--icons-shadow))");
      this.introImage.style.filter = "drop-shadow(".concat(shadowParameters[0], "px ").concat(shadowParameters[1], "px 8px var(--icons-shadow))");
    }
  }, {
    key: "movingShadow",
    value: function movingShadow(e) {
      var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : e.target;
      var maxShadow = arguments.length > 2 ? arguments[2] : undefined;
      var totalHeight = element.clientHeight;
      var totalWidth = element.clientWidth;
      var mouseX = e.offsetX;
      var mouseY = e.offsetY;
      return [Math.trunc((totalWidth / 2 - mouseX) * maxShadow / (totalWidth / 2)), Math.trunc((totalHeight / 2 - mouseY) * maxShadow / (totalHeight / 2))];
    }
  }]);

  return AboutMeView;
}();

var _default = AboutMeView;
exports.default = _default;
},{}],"view/experienceView.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ExperienceView = /*#__PURE__*/function () {
  function ExperienceView() {
    _classCallCheck(this, ExperienceView);

    _defineProperty(this, "introBox", document.querySelector('.intro-part'));

    _defineProperty(this, "introText", document.querySelector('.intro-part__text'));

    _defineProperty(this, "introIcon", document.querySelector('.intro-part__icon'));

    _defineProperty(this, "mainExpSection", document.querySelector('.exp__main-part'));

    _defineProperty(this, "expSectionObserver", new IntersectionObserver(this.revealExpSection.bind(this), {
      root: null,
      threshold: 0
    }));

    // console.log(this.mainExpSection);
    this.introBox.addEventListener('mousemove', this.addIntroMovingShadow.bind(this));
    this.expSectionObserver.observe(this.mainExpSection);
  }

  _createClass(ExperienceView, [{
    key: "revealExpSection",
    value: function revealExpSection(entry, observer) {
      if (!entry[0].isIntersecting) return;

      if (entry[0].isIntersecting) {
        this.mainExpSection.classList.remove('section-hidden');
      }
    } ////////////////////// MOVING SHADOW CODE ////////////////////////

  }, {
    key: "addIntroMovingShadow",
    value: function addIntroMovingShadow(e) {
      var shadowParameters = this.movingShadow(e, this.introBox, 15);
      this.introText.style.filter = "drop-shadow(".concat(shadowParameters[0], "px ").concat(shadowParameters[1], "px 4px var(--icons-shadow))");
      this.introIcon.style.filter = "drop-shadow(".concat(shadowParameters[0], "px ").concat(shadowParameters[1], "px 8px var(--icons-shadow))");
    }
  }, {
    key: "movingShadow",
    value: function movingShadow(e) {
      var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : e.target;
      var maxShadow = arguments.length > 2 ? arguments[2] : undefined;
      var totalHeight = element.clientHeight;
      var totalWidth = element.clientWidth;
      var mouseX = e.offsetX;
      var mouseY = e.offsetY;
      return [Math.trunc((totalWidth / 2 - mouseX) * maxShadow / (totalWidth / 2)), Math.trunc((totalHeight / 2 - mouseY) * maxShadow / (totalHeight / 2))];
    }
  }]);

  return ExperienceView;
}();

var _default = ExperienceView;
exports.default = _default;
},{}],"view/qualificationsView.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var QualificationsView = /*#__PURE__*/function () {
  // errorMessageBox = document.querySelector('.error-message-box');
  function QualificationsView() {
    var _this = this;

    _classCallCheck(this, QualificationsView);

    _defineProperty(this, "introBox", document.querySelector('.intro-part'));

    _defineProperty(this, "introText", document.querySelector('.intro-part__text'));

    _defineProperty(this, "introIcon", document.querySelector('.intro-part__icon'));

    _defineProperty(this, "choiceBox", document.querySelector('.choice-part'));

    _defineProperty(this, "towerBox", document.querySelector('.choice-part__towers'));

    _defineProperty(this, "bothTowers", document.querySelectorAll('.towers'));

    _defineProperty(this, "towerDescription", document.querySelectorAll('.tower-description'));

    _defineProperty(this, "leftTower", document.querySelector('.tower-short'));

    _defineProperty(this, "rightTower", document.querySelector('.tower-long'));

    _defineProperty(this, "imgBoxesShort", document.querySelectorAll('.img-box__short'));

    _defineProperty(this, "imgBoxesLong", document.querySelectorAll('.img-box__long'));

    _defineProperty(this, "allImageBoxes", document.querySelectorAll('.img-box'));

    _defineProperty(this, "tempBtn", document.querySelector('.choice-part__question'));

    _defineProperty(this, "towersBase", document.querySelector('.towers-base'));

    _defineProperty(this, "bothQuals", document.querySelectorAll('.quals'));

    _defineProperty(this, "qualsShort", document.querySelector('.quals-short'));

    _defineProperty(this, "qualsLong", document.querySelector('.quals-long'));

    _defineProperty(this, "allQualsImages", document.querySelectorAll('.quals-box__image-container'));

    _defineProperty(this, "btnCloseQualsBox", document.querySelector('.close-quals-btn__box'));

    _defineProperty(this, "btnCloseQuals", document.querySelector('.close-quals__btn'));

    _defineProperty(this, "eduIT", document.querySelector('.close-quals-it'));

    _defineProperty(this, "eduAll", document.querySelector('.close-quals-all'));

    _defineProperty(this, "sectionDetails", document.querySelector('.details-section'));

    _defineProperty(this, "detailsCloseBtn", document.querySelector('.details__button-close'));

    _defineProperty(this, "detailsName", document.querySelector('.details__name-text'));

    _defineProperty(this, "detailsText", document.querySelector('.details__desription-text'));

    _defineProperty(this, "detailsImage", document.querySelector('.details__image'));

    _defineProperty(this, "waitingOverlay", document.querySelector('.spinner-box--overlay'));

    _defineProperty(this, "waitingSpinner", document.querySelector('.spinner-box'));

    _defineProperty(this, "errorWindow", document.querySelector('.error-window'));

    _defineProperty(this, "errorMessage", document.querySelector('.error-message'));

    _defineProperty(this, "imageViewContainer", document.querySelector('.image-view__container'));

    _defineProperty(this, "btnImageViewClose", document.querySelector('.image-view__close-button'));

    _defineProperty(this, "overlay", document.querySelector('.overlay'));

    _defineProperty(this, "switchLangBtn", document.querySelector('.switch-language__btn'));

    _defineProperty(this, "qualsChosen", void 0);

    _defineProperty(this, "transformConditions", void 0);

    _defineProperty(this, "qualSectionObserver", new IntersectionObserver(this.cardLikeImages.bind(this), {
      root: null,
      threshold: 0.1
    }));

    // console.log(window.matchMedia('(hover: hover)').matches);
    this.introBox.addEventListener('mousemove', this.addIntroMovingShadow.bind(this));
    this.qualSectionObserver.observe(this.choiceBox);
    this.allQualsImages.forEach(function (img) {
      return img.addEventListener('mousemove', _this.tiltQualsImage.bind(_this));
    });
    this.allQualsImages.forEach(function (img) {
      return img.addEventListener('mouseout', _this.returnTiltedImage.bind(_this));
    }); //prettier-ignore

    this.btnCloseQuals.addEventListener('click', function () {
      this.closeDisplayQualifications(this.qualsChosen);
      this.displayTowers();
      this.choiceBox.style.marginTop = '0';
    }.bind(this));
    this.detailsCloseBtn.addEventListener('click', this.displayDetails.bind(this));
    this.bothQuals.forEach(function (quals) {
      quals.addEventListener('click', _this.renderDisplayDetails.bind(_this));
    });
    this.sectionDetails.addEventListener('click', this.showDetailsImage.bind(this));
    this.btnImageViewClose.addEventListener('click', this.hideDetailsImage.bind(this));
  } /////////////////////////// IMAGE TILTING IN QUALS //////////////////////////////


  _createClass(QualificationsView, [{
    key: "returnTiltedImage",
    value: function returnTiltedImage(e) {
      var element = e.target.closest('.quals-box__image-container');
      element.style.transform = 'rotateX(0deg) rotateY(0deg) skew(15deg)';
      element.style.boxShadow = '0px 0px 10px var(--logo-image-shadow)';
    }
  }, {
    key: "tiltQualsImage",
    value: function tiltQualsImage(e) {
      var element = e.target.closest('.quals-box__image-container');
      var parameters = this.movingShadow(e, element, 14);
      element.style.transform = "rotateX(".concat(parameters[1], "deg) rotateY(").concat(-parameters[0], "deg) skew(15deg)");
      element.style.boxShadow = "".concat(parameters[0] / 2, "px ").concat(parameters[1] / 2, "px 5px var(--logo-image-shadow)");
    } /////////////////////////// IMAGES IN TOWERS RENDER //////////////////////////////

  }, {
    key: "cardLikeImages",
    value: function cardLikeImages(entry, observer) {
      if (!entry[0].isIntersecting) return;

      if (entry[0].isIntersecting) {
        this.choiceBox.classList.remove('section-hidden');
        this.positionImages();
      }
    }
  }, {
    key: "positionImages",
    value: function positionImages() {
      var _this2 = this;

      // prettier-ignore
      Array.prototype.slice.call(this.imgBoxesShort, 0).reverse().forEach(function (box, i) {
        setTimeout(function () {
          this.imageStyleRender(box);
        }.bind(_this2), i * 170);
      }); // prettier-ignore

      Array.prototype.slice.call(this.imgBoxesLong, 0).reverse().forEach(function (box, i) {
        setTimeout(function () {
          this.imageStyleRender(box);
        }.bind(_this2), i * 120);
      }); //It adds listeners to towers

      setTimeout(function () {
        var _this3 = this;

        this.bothTowers.forEach(function (tower) {
          tower.addEventListener('click', _this3.chooseTower.bind(_this3));

          if (window.matchMedia('(hover: hover)').matches) {
            tower.addEventListener('mouseover', _this3.imageStandOut.bind(_this3));
            tower.addEventListener('mouseout', _this3.returnImageTransformValues.bind(_this3));
          }
        });
      }.bind(this), 1200);
    }
  }, {
    key: "imageStandOut",
    value: function imageStandOut(e) {
      if (!e.target.closest('.img-box')) return;
      var element = e.target.closest('.img-box');
      element.style.transform = "translateZ(10rem) translateY(".concat(+element.dataset.pos / 2.3 - 0.5, "rem) translateX(").concat(element.dataset.pos / 1.5, "rem) rotateZ(").concat(element.dataset.pos * 2 - 5, "deg)");
      element.style.opacity = "1";
    }
  }, {
    key: "returnImageTransformValues",
    value: function returnImageTransformValues(e) {
      if (!e.target.closest('.img-box')) return;
      this.imageStyleRender(e.target.closest('.img-box'));
    }
  }, {
    key: "imageStyleRender",
    value: function imageStyleRender(element) {
      element.style.transform = "translateZ(-".concat(element.dataset.pos, "rem) translateY(").concat(+element.dataset.pos / 2.3, "rem) translateX(").concat(element.dataset.pos / 1.5, "rem) rotateZ(").concat(element.dataset.pos * 2, "deg)");
      element.style.opacity = "".concat(1 - +"".concat(element.dataset.pos >= 10 ? 9.5 : element.dataset.pos) / 10 + 0.05);
    } //////////////// PAGE MECHANICS: CHOOSING DISPLAYING TOWERS/QUALS //////////////////

  }, {
    key: "chooseTower",
    value: function chooseTower(e) {
      var _this6 = this;

      this.imageStyleRender(e.target.closest('.img-box'));

      if (e.target.closest('.tower-short')) {
        //note the chosen tower
        this.qualsChosen = 'short'; //move the other tower away

        this.imgBoxesLong.forEach(function (box) {
          box.style.transform = 'translateX(-65rem)';
        }); //move the chosen tower to the center

        window.innerWidth <= 639 ? this.leftTower.style.transform = 'translateY(25vh)' : this.leftTower.style.transform = 'translateY(22vh) translateX(-20vw)'; //after 1200ms, make all the cards lose opacity one by one
        // prettier-ignore

        setTimeout(function () {
          var _this4 = this;

          this.imgBoxesShort.forEach(function (img) {
            setTimeout(function () {
              img.style.opacity = 0;
            }.bind(_this4), img.dataset.pos * 50);
          });
        }.bind(this), 1200);
      }

      if (e.target.closest('.tower-long')) {
        //note the chosen tower
        this.qualsChosen = 'long'; //move the other tower away

        this.imgBoxesShort.forEach(function (box) {
          box.style.transform = 'translateX(65rem)';
        }); //move the chosen tower to the center

        window.innerWidth <= 639 ? this.rightTower.style.transform = 'translateY(-25vh)' : this.rightTower.style.transform = 'translateY(-15vh) translateX(20vw)'; //after 1200ms, make all the cards lose opacity one by one
        // prettier-ignore

        setTimeout(function () {
          var _this5 = this;

          this.imgBoxesLong.forEach(function (img) {
            setTimeout(function () {
              img.style.opacity = 0;
            }.bind(_this5), img.dataset.pos * 50);
          });
        }.bind(this), 1200);
      } //after 1900ms make the chosen quals show up with the description over them


      setTimeout(function () {
        this.openDisplayQualifications(this.qualsChosen);

        if (this.qualsChosen === 'short') {
          this._makeElementAppear(this.eduIT, 500, 'inline-block');
        } else {
          this._makeElementAppear(this.eduAll, 500, 'inline-block');
        }
      }.bind(this), 1900); //make tower descriptions disappear together with the shift of towers

      this.towerDescription.forEach(function (desc) {
        _this6._makeElementDisappear(desc, 1900);
      }); //display close button and hide tower box (behind the scenes, return the towers back to the positions)

      setTimeout(function () {
        _this6._makeElementAppear(_this6.btnCloseQuals, 500, 'inline-block');

        _this6.towerBox.style.display = 'none';

        _this6.bothTowers.forEach(function (tower) {
          tower.style.transform = 'translateX(0) translateY(0)';
        });
      }, 1800);
    }
  }, {
    key: "displayTowers",
    value: function displayTowers() {
      this.choiceBox.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
      });
      setTimeout(function () {
        var _this7 = this;

        this.towerBox.style.display = 'flex';
        this.allImageBoxes.forEach(function (img) {
          return _this7.imageStyleRender(img);
        });
        this.towerDescription.forEach(function (desc) {
          _this7._makeElementAppear(desc, 50, 'block');
        });
      }.bind(this), 950);
    }
  }, {
    key: "openDisplayQualifications",
    value: function openDisplayQualifications(type) {
      if (type === 'short') {
        this._makeElementAppear(this.qualsShort, 300, 'flex');

        this._makeElementAppear(this.eduIT, 300, 'inline-block');
      }

      if (type === 'long') {
        this._makeElementAppear(this.qualsLong, 300, 'flex');

        this._makeElementAppear(this.eduAll, 300, 'inline-block');
      }

      this.btnCloseQualsBox.style.display = 'flex';
      this.choiceBox.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
      });
    }
  }, {
    key: "closeDisplayQualifications",
    value: function closeDisplayQualifications(type) {
      if (type === 'short') {
        this._makeElementDisappear(this.qualsShort, 600);

        this._makeElementDisappear(this.eduIT, 500);
      }

      if (type === 'long') {
        this._makeElementDisappear(this.qualsLong, 600);

        this._makeElementDisappear(this.eduAll, 500);
      }

      this._makeElementDisappear(this.btnCloseQuals, 500);
    }
  }, {
    key: "_makeElementAppear",
    value: function _makeElementAppear(element, timer, display) {
      element.style.display = display;
      setTimeout(function () {
        element.style.opacity = 1;
      }.bind(this), timer);
    }
  }, {
    key: "_makeElementDisappear",
    value: function _makeElementDisappear(element, timer) {
      element.style.opacity = 0;
      setTimeout(function () {
        element.style.display = 'none';
      }.bind(this), timer);
    } //////////////////////// DETAILS WINDOW FUNCTIONS /////////////////////

  }, {
    key: "renderDisplayDetails",
    value: function () {
      var _renderDisplayDetails = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
        var id;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (e.target.closest('.quals-box')) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                id = e.target.closest('.quals-box').id;
                console.log(id);
                _context.next = 6;
                return this.displayDetails(id);

              case 6:
                this.detailsText.scrollIntoView({
                  block: 'start',
                  behavior: 'smooth'
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function renderDisplayDetails(_x) {
        return _renderDisplayDetails.apply(this, arguments);
      }

      return renderDisplayDetails;
    }()
  }, {
    key: "displayDetails",
    value: function () {
      var _displayDetails = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(id) {
        var _this8 = this;

        var qualData, res;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;

                if (!(this.sectionDetails.style.display === 'flex')) {
                  _context2.next = 7;
                  break;
                }

                // Close details window
                this._makeElementDisappear(this.overlay, 300);

                this._makeElementDisappear(this.sectionDetails, 200);

                this.sectionDetails.style.transform = "translateY(3rem)";
                _context2.next = 16;
                break;

              case 7:
                // Render Loading Spinner
                this._makeElementAppear(this.waitingOverlay, 0, 'block');

                this.waitingSpinner.style.display = 'block'; // Open details window

                this._makeElementAppear(this.overlay, 300, 'block');

                this.sectionDetails.style.display = 'flex';
                setTimeout(function () {
                  this.sectionDetails.style.opacity = 1;
                  this.sectionDetails.style.transform = "translateY(0)";
                }.bind(this), 20); //Make server request

                _context2.next = 14;
                return axios({
                  method: 'GET',
                  // url: 'http://127.0.0.1:8000/api/v1/users/login',
                  url: "http://127.0.0.1:3000/details?id=".concat(id)
                });

              case 14:
                res = _context2.sent;

                if (res.data.message === 'success') {
                  //Add data to page
                  qualData = res.data.detailsData;
                  this.detailsName.textContent = qualData.headline;
                  this.detailsText.textContent = qualData.description;
                  this.detailsImage.src = qualData.imagePath; //Hide Spinner

                  this._makeElementDisappear(this.waitingOverlay, 300); // this.waitingOverlay.style.display = 'none';


                  this.waitingSpinner.style.display = 'none';
                }

              case 16:
                _context2.next = 24;
                break;

              case 18:
                _context2.prev = 18;
                _context2.t0 = _context2["catch"](0);
                this.errorMessage.textContent = this.switchLangBtn.textContent === 'ru' ? "Oops, something went wrong. Please, check your internet connection." : "\u0423\u043F\u0441, \u0447\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435.";
                this.waitingSpinner.style.display = 'none'; // this._makeElementAppear(this.errorMessageBox, 200, 'block');

                this._makeElementAppear(this.errorWindow, 200, 'block');

                setTimeout(function () {
                  // this._makeElementDisappear(this.errorMessageBox, 200);
                  _this8._makeElementDisappear(_this8.errorWindow, 200);

                  _this8._makeElementDisappear(_this8.waitingOverlay, 300);

                  _this8.displayDetails();
                }, 3000);

              case 24:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 18]]);
      }));

      function displayDetails(_x2) {
        return _displayDetails.apply(this, arguments);
      }

      return displayDetails;
    }()
  }, {
    key: "showDetailsImage",
    value: function showDetailsImage(e) {
      if (!e.target.closest('.details__image-box')) return;
      var imageBox = e.target.closest('.details__image-box');
      var imageSource = imageBox.getElementsByTagName('img')[0].src;
      document.querySelector('.image-view__image').src = imageSource;

      this._makeElementAppear(this.imageViewContainer, 50, 'block'); // this.imageViewContainer.style.display = 'block';

    }
  }, {
    key: "hideDetailsImage",
    value: function hideDetailsImage() {
      this._makeElementDisappear(this.imageViewContainer, 200);
    } ////////////////////// MOVING SHADOW CODE ////////////////////////

  }, {
    key: "addIntroMovingShadow",
    value: function addIntroMovingShadow(e) {
      var shadowParameters = this.movingShadow(e, this.introBox, 15);
      this.introText.style.filter = "drop-shadow(".concat(shadowParameters[0], "px ").concat(shadowParameters[1], "px 4px var(--icons-shadow))");
      this.introIcon.style.filter = "drop-shadow(".concat(shadowParameters[0], "px ").concat(shadowParameters[1], "px 8px var(--icons-shadow))");
    }
  }, {
    key: "movingShadow",
    value: function movingShadow(e) {
      var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : e.target;
      var maxShadow = arguments.length > 2 ? arguments[2] : undefined;
      var totalHeight = element.clientHeight;
      var totalWidth = element.clientWidth;
      var mouseX = e.offsetX;
      var mouseY = e.offsetY;
      return [Math.trunc((totalWidth / 2 - mouseX) * maxShadow / (totalWidth / 2)), Math.trunc((totalHeight / 2 - mouseY) * maxShadow / (totalHeight / 2))];
    }
  }]);

  return QualificationsView;
}();

var _default = QualificationsView;
exports.default = _default;
},{}],"view/indivProjectView.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var IndividualView = /*#__PURE__*/function () {
  //section 1
  //section 2
  //section 3
  //section 4
  function IndividualView() {
    var _this = this;

    _classCallCheck(this, IndividualView);

    _defineProperty(this, "headerBox", document.querySelector('.header-menu'));

    _defineProperty(this, "footerBox", document.querySelector('.footer-menu'));

    _defineProperty(this, "indivScrolledSection", document.querySelector('.indiv-section__scrolled-div'));

    _defineProperty(this, "indivMainSection", document.querySelector('.indiv-section__main'));

    _defineProperty(this, "indivContentSection", document.querySelector('.indiv-section__content'));

    _defineProperty(this, "allIndivSections", document.querySelectorAll('.indiv-section-box'));

    _defineProperty(this, "allIndivTextBoxes", document.querySelectorAll('.indiv-headline-text-box'));

    _defineProperty(this, "allParagraphBoxes", document.querySelectorAll('.indiv-par-box'));

    _defineProperty(this, "scrollBackBtn", document.querySelector('.scroll-back__btn-div'));

    _defineProperty(this, "totalNumOfSections", void 0);

    _defineProperty(this, "maxWidthPossible", void 0);

    _defineProperty(this, "mode", 'desktop');

    _defineProperty(this, "thisProjectName", document.querySelector('.this-project__name').textContent);

    _defineProperty(this, "scrollEvent", void 0);

    _defineProperty(this, "boxOne", document.querySelector('.indiv-box-one'));

    _defineProperty(this, "headlineImage", document.querySelector('.indiv-img__one'));

    _defineProperty(this, "headlineBox", document.querySelector('.indiv-headline-box-one'));

    _defineProperty(this, "headlineImageWideScroll", 30);

    _defineProperty(this, "scrollEventTwo", void 0);

    _defineProperty(this, "boxTwo", document.querySelector('.indiv-box-two'));

    _defineProperty(this, "sectionTwoImageLeft", document.querySelector('.indiv-img__two-left'));

    _defineProperty(this, "sectionTwoImageRight", document.querySelector('.indiv-img__two-right'));

    _defineProperty(this, "headlineBoxTwo", document.querySelector('.indiv-headline-box-two'));

    _defineProperty(this, "paragraphBoxTwo", document.querySelector('.indiv-par-box-two'));

    _defineProperty(this, "paragraphTwo", document.querySelector('.indiv-par-two'));

    _defineProperty(this, "sectionTwoWideScroll", 10);

    _defineProperty(this, "scrollEventThree", void 0);

    _defineProperty(this, "sectionThreeImage", document.querySelector('.indiv-img__three'));

    _defineProperty(this, "sectionThreeScroll", 0);

    _defineProperty(this, "scrollEventFour", void 0);

    _defineProperty(this, "sectionFourImage", document.querySelector('.indiv-img__four'));

    _defineProperty(this, "sectionFourWideScroll", -3);

    _defineProperty(this, "indivSectionsObserver", new IntersectionObserver(this.runScrollAnimation.bind(this), {
      root: null,
      threshold: 0.05
    }));

    this.totalNumOfSections = document.getElementById('4-indiv') ? 4 : 3;

    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };

    this.setProjectColor(this.thisProjectName);
    window.addEventListener('load', this.sizeScrolledDiv.bind(this)); // //counting the width of the screen to adjust height of the scrolled div
    // this.indivScrolledSection.style.height = window.innerWidth * 4 - (window.innerWidth - window.innerHeight);
    // this.maxWidthPossible = window.innerWidth * 4 - (window.innerWidth - window.innerHeight) - window.innerWidth;

    window.addEventListener('resize', function () {
      console.log('resized'); //counting the width of the screen to adjust height of the scrolled div

      this.maxWidthPossible = window.innerWidth * this.totalNumOfSections - (window.innerWidth - window.innerHeight) - window.innerWidth;
      this.indivScrolledSection.style.height = "".concat(window.innerWidth * this.totalNumOfSections - (window.innerWidth - window.innerHeight), "px");

      if (window.matchMedia('(hover: hover)').matches && window.innerWidth >= 1080 && this.mode === 'smartphone') {
        this.toggleSmartphoneMode();
        this.mode = 'desktop';
      } else if (window.matchMedia('(hover: hover)').matches && window.innerWidth <= 1080 && this.mode === 'desktop') {
        this.toggleSmartphoneMode();
        this.mode = 'smartphone';
      }
    }.bind(this));
    this.allIndivSections.forEach(function (section) {
      _this.indivSectionsObserver.observe(section);
    });
    this.scrollBackBtn.addEventListener('click', this.indivScrollBack.bind(this));
  }

  _createClass(IndividualView, [{
    key: "setProjectColor",
    value: function setProjectColor(projectName) {
      //prettier-ignore
      var projects = [{
        name: 'mapty',
        color: 'rgba(106, 115, 116, 0.735)'
      }, {
        name: 'bankist-page',
        color: 'rgba(27, 149, 27, 0.743)'
      }, {
        name: 'bankist-app',
        color: 'rgba(227, 204, 52, 0.911)'
      }, {
        name: 'pig-game',
        color: '#af1e56dc'
      }, {
        name: 'natours-app',
        color: 'rgba(39, 144, 76, 0.754)'
      }, {
        name: 'forkify-app',
        color: '#da8c32d5'
      }, {
        name: 'connect-four',
        color: '#beb700d0'
      }, {
        name: 'my-portfolio',
        color: '#7f8dc9e3'
      }]; // console.log(projectName);

      var settings = projects.find(function (pr) {
        return pr.name === projectName;
      }); // console.log(settings);

      this.allIndivTextBoxes.forEach(function (box) {
        return box.style.backgroundColor = settings.color;
      });

      if (window.innerWidth >= 1080 && window.matchMedia('(hover: hover)').matches) {
        this.allParagraphBoxes.forEach(function (box) {
          return box.style.backgroundColor = settings.color;
        });
      } else {
        this.allParagraphBoxes.forEach(function (box) {
          return box.style.borderLeft = "6px solid ".concat(settings.color);
        });
      }
    }
  }, {
    key: "sizeScrolledDiv",
    value: function sizeScrolledDiv() {
      //counting the width of the screen to adjust height of the scrolled div
      this.indivScrolledSection.style.height = "".concat(window.innerWidth * this.totalNumOfSections - (window.innerWidth - window.innerHeight), "px");
      this.maxWidthPossible = window.innerWidth * this.totalNumOfSections - (window.innerWidth - window.innerHeight) - window.innerWidth; //add desktop classes, if the user has desktop

      if (window.matchMedia('(hover: hover)').matches && window.innerWidth >= 1080) this.toggleSmartphoneMode(); // this.indivScrolledSection.style.height = `${window.innerWidth * 4 - (window.innerWidth - window.innerHeight)}px`;
    }
  }, {
    key: "indivScrollBack",
    value: function indivScrollBack() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, {
    key: "toggleSmartphoneMode",
    value: function toggleSmartphoneMode() {
      this.indivScrollBack(); //Real Features to Switch

      this.headerBox.classList.remove('header-scroll-started');
      this.footerBox.classList.remove('footer-scroll-started');
      this.indivMainSection.classList.remove('main-scroll-started');
      this.scrollBackBtn.classList.add('scroll-back__div-hidden');

      if (window.innerWidth <= 1080) {
        this.indivContentSection.style.transform = "translateY(-8vh) translateX(0)";
        this.headlineImage.style.transform = "translateX(0)";
        this.sectionTwoImageRight.style.transform = "translateY(0)";
        this.sectionTwoImageLeft.style.transform = "translateY(0)";
        this.sectionThreeImage.style.transform = "translateX(0)";
        if (this.totalNumOfSections === 4) this.sectionFourImage.style.transform = "translateY(0)";
      }

      if (window.innerWidth >= 1080) {
        this.indivContentSection.style.transform = "translateY(-8vh) translateX(0)";
        this.headlineImage.style.transform = "translateX(30rem)";
        this.sectionTwoImageRight.style.transform = "translateY(10rem)";
        this.sectionTwoImageLeft.style.transform = "translateY(10rem)";
        this.sectionThreeImage.style.transform = "translateX(0)";
        if (this.totalNumOfSections === 4) this.sectionFourImage.style.transform = "translateY(-3rem)";
      }
    }
  }, {
    key: "runScrollAnimation",
    value: function runScrollAnimation(entry, observer) {
      if (!window.matchMedia('(hover: hover)').matches) {
        console.log(entry[0].target.id);
        observer.unobserve(entry[0].target);
        return;
      }

      if (entry[0].target.id === '1-indiv') {
        window.addEventListener('scroll', this.wideActivateIndivOne.bind(this));
      }

      if (entry[0].target.id === '2-indiv') {
        window.addEventListener('scroll', this.wideActivateIndivTwo.bind(this));
      }

      if (entry[0].target.id === '3-indiv') {
        window.addEventListener('scroll', this.wideActivateIndivThree.bind(this));
      }

      if (entry[0].target.id === '4-indiv') {
        window.addEventListener('scroll', this.wideActivateIndivFour.bind(this));
      } // console.log(entry[0].target.id);


      observer.unobserve(entry[0].target);
    }
  }, {
    key: "wideActivateIndivOne",
    value: function wideActivateIndivOne() {
      if (window.innerWidth <= 1080) return;

      if (this.scrollEvent < window.pageYOffset) {
        if (!this.headerBox.classList.contains('header-scroll-started')) {
          this.headerBox.style.transition = 'transform 0.3s linear, opacity 0.3s linear';
          this.footerBox.style.transition = 'transform 0.3s linear';
          this.headerBox.classList.add('header-scroll-started');
          this.footerBox.classList.add('footer-scroll-started');
          this.indivMainSection.classList.add('main-scroll-started');
          this.scrollBackBtn.classList.remove('scroll-back__div-hidden');
        }

        this.indivContentSection.style.transform = "translateY(-8vh) translateX(-".concat(this.scrollEvent, "px)"); //headline image one

        this.headlineImageWideScroll = this.headlineImageWideScroll - (window.pageYOffset - this.scrollEvent) / 40;
        this.headlineImage.style.transform = "translateX(".concat(this.headlineImageWideScroll, "rem)");
      }

      if (this.scrollEvent > window.pageYOffset) {
        this.indivContentSection.style.transform = "translateY(-8vh) translateX(-".concat(this.scrollEvent, "px");

        if (this.scrollEvent < 20 && this.headerBox.classList.contains('header-scroll-started')) {
          this.headerBox.classList.remove('header-scroll-started');
          this.footerBox.classList.remove('footer-scroll-started');
          this.indivMainSection.classList.remove('main-scroll-started');
          this.scrollBackBtn.classList.add('scroll-back__div-hidden');
        } //headline image one


        this.headlineImageWideScroll = this.headlineImageWideScroll + (this.scrollEvent - window.pageYOffset) / 40;
        this.headlineImage.style.transform = "translateX(".concat(this.headlineImageWideScroll, "rem)");
      } //renew scrollEvent


      this.scrollEvent = window.pageYOffset;
    }
  }, {
    key: "wideActivateIndivTwo",
    value: function wideActivateIndivTwo() {
      if (window.innerWidth <= 1080) return; // console.log(window.pageYOffset - this.scrollEventTwo);

      if (this.scrollEventTwo < window.pageYOffset) {
        //headline image one
        this.sectionTwoWideScroll = this.sectionTwoWideScroll - (window.pageYOffset - this.scrollEventTwo) / 90;
        this.sectionTwoImageRight.style.transform = "translateY(".concat(this.sectionTwoWideScroll > 0 ? -this.sectionTwoWideScroll : Math.abs(this.sectionTwoWideScroll), "rem)");
        this.sectionTwoImageLeft.style.transform = "translateY(".concat(this.sectionTwoWideScroll, "rem)");
      }

      if (this.scrollEventTwo > window.pageYOffset) {
        //headline image one
        this.sectionTwoWideScroll = this.sectionTwoWideScroll + (this.scrollEventTwo - window.pageYOffset) / 90;
        this.sectionTwoImageRight.style.transform = "translateY(".concat(this.sectionTwoWideScroll > 0 ? -this.sectionTwoWideScroll : Math.abs(this.sectionTwoWideScroll), "rem)");
        this.sectionTwoImageLeft.style.transform = "translateY(".concat(this.sectionTwoWideScroll, "rem)");
      } // console.log(this.sectionTwoWideScroll, (window.pageYOffset - this.scrollEventTwo) / 30);
      //renew scrollEvent


      this.scrollEventTwo = window.pageYOffset;
    }
  }, {
    key: "wideActivateIndivThree",
    value: function wideActivateIndivThree() {
      if (window.innerWidth <= 1080) return;

      if (this.scrollEventThree < window.pageYOffset) {
        //headline image one
        this.sectionThreeScroll = this.sectionThreeScroll + (window.pageYOffset - this.scrollEventThree) / 40;
        this.sectionThreeImage.style.transform = "translateX(-".concat(this.sectionThreeScroll, "rem)");
      }

      if (this.scrollEventThree > window.pageYOffset) {
        //headline image one
        this.sectionThreeScroll = this.sectionThreeScroll - (this.scrollEventThree - window.pageYOffset) / 40;
        this.sectionThreeImage.style.transform = "translateX(-".concat(this.sectionThreeScroll, "rem)");
      }

      this.scrollEventThree = window.pageYOffset;
    }
  }, {
    key: "wideActivateIndivFour",
    value: function wideActivateIndivFour() {
      if (window.innerWidth <= 1080) return;

      if (this.scrollEventFour < window.pageYOffset) {
        //headline image one
        this.sectionFourWideScroll = this.sectionFourWideScroll + (window.pageYOffset - this.scrollEventFour) / 400;
        this.sectionFourImage.style.transform = "translateY(".concat(this.sectionFourWideScroll, "rem)");
      }

      if (this.scrollEventFour > window.pageYOffset) {
        //headline image one
        this.sectionFourWideScroll = this.sectionFourWideScroll - (this.scrollEventFour - window.pageYOffset) / 400;
        this.sectionFourImage.style.transform = "translateY(".concat(this.sectionFourWideScroll, "rem)");
      }

      this.scrollEventFour = window.pageYOffset;
    }
  }]);

  return IndividualView;
}();

var _default = IndividualView;
exports.default = _default;
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _sharedView = _interopRequireDefault(require("./view/sharedView.js"));

var _mainView = _interopRequireDefault(require("./view/mainView.js"));

var _projectsView = _interopRequireDefault(require("./view/projectsView.js"));

var _aboutmeView = _interopRequireDefault(require("./view/aboutmeView.js"));

var _experienceView = _interopRequireDefault(require("./view/experienceView.js"));

var _qualificationsView = _interopRequireDefault(require("./view/qualificationsView.js"));

var _indivProjectView = _interopRequireDefault(require("./view/indivProjectView.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import axios from 'axios';
// const tempArr = window.location.href.split('/');
// const curPage = tempArr[tempArr.length - 1];
var pageSharedView = new _sharedView.default();
var currentTheme = localStorage.getItem('myFolioDark');

if (currentTheme === 'enabled') {
  pageSharedView._changeTheme();
}

var thisPageIs = document.getElementById('this-page').textContent; // console.log(thisPageIs);

if (thisPageIs === 'main-page') {
  new _mainView.default();
}

if (thisPageIs === 'about-me') {
  new _aboutmeView.default();
}

if (thisPageIs === 'projects') {
  new _projectsView.default();
}

if (thisPageIs === 'experience') {
  new _experienceView.default();
}

if (thisPageIs === 'qualifications') {
  new _qualificationsView.default();
}

if (thisPageIs === 'indiv-project') {
  new _indivProjectView.default();
}

if (currentTheme === 'enabled') {
  pageSharedView._changeIcons();
} // window.addEventListener('load', function () {


document.body.style.overflowY = 'visible';
var loader = document.querySelector('.loader');
loader.style.opacity = '0';
setTimeout(function () {
  loader.style.display = 'none';
}, 200); // });
},{"./view/sharedView.js":"view/sharedView.js","./view/mainView.js":"view/mainView.js","./view/projectsView.js":"view/projectsView.js","./view/aboutmeView.js":"view/aboutmeView.js","./view/experienceView.js":"view/experienceView.js","./view/qualificationsView.js":"view/qualificationsView.js","./view/indivProjectView.js":"view/indivProjectView.js"}],"../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61771" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=bundle.js.map