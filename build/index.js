/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@emailjs/browser/es/api/sendPost.js"
/*!**********************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/api/sendPost.js ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sendPost: () => (/* binding */ sendPost)
/* harmony export */ });
/* harmony import */ var _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/EmailJSResponseStatus */ "./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/store */ "./node_modules/@emailjs/browser/es/store/store.js");


const sendPost = async (url, data, headers = {}) => {
    const response = await fetch(_store_store__WEBPACK_IMPORTED_MODULE_1__.store.origin + url, {
        method: 'POST',
        headers,
        body: data,
    });
    const message = await response.text();
    const responseStatus = new _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus(response.status, message);
    if (response.ok) {
        return responseStatus;
    }
    throw responseStatus;
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/errors/blockedEmailError/blockedEmailError.js"
/*!****************************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/errors/blockedEmailError/blockedEmailError.js ***!
  \****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blockedEmailError: () => (/* binding */ blockedEmailError)
/* harmony export */ });
/* harmony import */ var _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/EmailJSResponseStatus */ "./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js");

const blockedEmailError = () => {
    return new _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus(403, 'Forbidden');
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/errors/headlessError/headlessError.js"
/*!********************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/errors/headlessError/headlessError.js ***!
  \********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   headlessError: () => (/* binding */ headlessError)
/* harmony export */ });
/* harmony import */ var _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/EmailJSResponseStatus */ "./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js");

const headlessError = () => {
    return new _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus(451, 'Unavailable For Headless Browser');
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/errors/limitRateError/limitRateError.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/errors/limitRateError/limitRateError.js ***!
  \**********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   limitRateError: () => (/* binding */ limitRateError)
/* harmony export */ });
/* harmony import */ var _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/EmailJSResponseStatus */ "./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js");

const limitRateError = () => {
    return new _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus(429, 'Too Many Requests');
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/index.js"
/*!***************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/index.js ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmailJSResponseStatus: () => (/* reexport safe */ _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   init: () => (/* reexport safe */ _methods_init_init__WEBPACK_IMPORTED_MODULE_1__.init),
/* harmony export */   send: () => (/* reexport safe */ _methods_send_send__WEBPACK_IMPORTED_MODULE_2__.send),
/* harmony export */   sendForm: () => (/* reexport safe */ _methods_sendForm_sendForm__WEBPACK_IMPORTED_MODULE_3__.sendForm)
/* harmony export */ });
/* harmony import */ var _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/EmailJSResponseStatus */ "./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js");
/* harmony import */ var _methods_init_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./methods/init/init */ "./node_modules/@emailjs/browser/es/methods/init/init.js");
/* harmony import */ var _methods_send_send__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./methods/send/send */ "./node_modules/@emailjs/browser/es/methods/send/send.js");
/* harmony import */ var _methods_sendForm_sendForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./methods/sendForm/sendForm */ "./node_modules/@emailjs/browser/es/methods/sendForm/sendForm.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    init: _methods_init_init__WEBPACK_IMPORTED_MODULE_1__.init,
    send: _methods_send_send__WEBPACK_IMPORTED_MODULE_2__.send,
    sendForm: _methods_sendForm_sendForm__WEBPACK_IMPORTED_MODULE_3__.sendForm,
    EmailJSResponseStatus: _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus,
});


/***/ },

/***/ "./node_modules/@emailjs/browser/es/methods/init/init.js"
/*!***************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/methods/init/init.js ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init: () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/store */ "./node_modules/@emailjs/browser/es/store/store.js");
/* harmony import */ var _utils_buildOptions_buildOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/buildOptions/buildOptions */ "./node_modules/@emailjs/browser/es/utils/buildOptions/buildOptions.js");


/**
 * EmailJS global SDK config
 * @param {object} options - the EmailJS global SDK config options
 * @param {string} origin - the non-default EmailJS origin
 */
const init = (options, origin = 'https://api.emailjs.com') => {
    if (!options)
        return;
    const opts = (0,_utils_buildOptions_buildOptions__WEBPACK_IMPORTED_MODULE_1__.buildOptions)(options);
    _store_store__WEBPACK_IMPORTED_MODULE_0__.store.publicKey = opts.publicKey;
    _store_store__WEBPACK_IMPORTED_MODULE_0__.store.blockHeadless = opts.blockHeadless;
    _store_store__WEBPACK_IMPORTED_MODULE_0__.store.storageProvider = opts.storageProvider;
    _store_store__WEBPACK_IMPORTED_MODULE_0__.store.blockList = opts.blockList;
    _store_store__WEBPACK_IMPORTED_MODULE_0__.store.limitRate = opts.limitRate;
    _store_store__WEBPACK_IMPORTED_MODULE_0__.store.origin = opts.origin || origin;
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/methods/send/send.js"
/*!***************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/methods/send/send.js ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   send: () => (/* binding */ send)
/* harmony export */ });
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/store */ "./node_modules/@emailjs/browser/es/store/store.js");
/* harmony import */ var _api_sendPost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/sendPost */ "./node_modules/@emailjs/browser/es/api/sendPost.js");
/* harmony import */ var _utils_buildOptions_buildOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/buildOptions/buildOptions */ "./node_modules/@emailjs/browser/es/utils/buildOptions/buildOptions.js");
/* harmony import */ var _utils_validateParams_validateParams__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/validateParams/validateParams */ "./node_modules/@emailjs/browser/es/utils/validateParams/validateParams.js");
/* harmony import */ var _utils_validateTemplateParams_validateTemplateParams__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/validateTemplateParams/validateTemplateParams */ "./node_modules/@emailjs/browser/es/utils/validateTemplateParams/validateTemplateParams.js");
/* harmony import */ var _utils_isHeadless_isHeadless__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/isHeadless/isHeadless */ "./node_modules/@emailjs/browser/es/utils/isHeadless/isHeadless.js");
/* harmony import */ var _errors_headlessError_headlessError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../errors/headlessError/headlessError */ "./node_modules/@emailjs/browser/es/errors/headlessError/headlessError.js");
/* harmony import */ var _utils_isBlockedValueInParams_isBlockedValueInParams__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/isBlockedValueInParams/isBlockedValueInParams */ "./node_modules/@emailjs/browser/es/utils/isBlockedValueInParams/isBlockedValueInParams.js");
/* harmony import */ var _errors_blockedEmailError_blockedEmailError__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../errors/blockedEmailError/blockedEmailError */ "./node_modules/@emailjs/browser/es/errors/blockedEmailError/blockedEmailError.js");
/* harmony import */ var _utils_isLimitRateHit_isLimitRateHit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/isLimitRateHit/isLimitRateHit */ "./node_modules/@emailjs/browser/es/utils/isLimitRateHit/isLimitRateHit.js");
/* harmony import */ var _errors_limitRateError_limitRateError__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../errors/limitRateError/limitRateError */ "./node_modules/@emailjs/browser/es/errors/limitRateError/limitRateError.js");











/**
 * Send a template to the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {object} templateParams - the template params, what will be set to the EmailJS template
 * @param {object} options - the EmailJS SDK config options
 * @returns {Promise<EmailJSResponseStatus>}
 */
const send = async (serviceID, templateID, templateParams, options) => {
    const opts = (0,_utils_buildOptions_buildOptions__WEBPACK_IMPORTED_MODULE_2__.buildOptions)(options);
    const publicKey = opts.publicKey || _store_store__WEBPACK_IMPORTED_MODULE_0__.store.publicKey;
    const blockHeadless = opts.blockHeadless || _store_store__WEBPACK_IMPORTED_MODULE_0__.store.blockHeadless;
    const storageProvider = opts.storageProvider || _store_store__WEBPACK_IMPORTED_MODULE_0__.store.storageProvider;
    const blockList = { ..._store_store__WEBPACK_IMPORTED_MODULE_0__.store.blockList, ...opts.blockList };
    const limitRate = { ..._store_store__WEBPACK_IMPORTED_MODULE_0__.store.limitRate, ...opts.limitRate };
    if (blockHeadless && (0,_utils_isHeadless_isHeadless__WEBPACK_IMPORTED_MODULE_5__.isHeadless)(navigator)) {
        return Promise.reject((0,_errors_headlessError_headlessError__WEBPACK_IMPORTED_MODULE_6__.headlessError)());
    }
    ;(0,_utils_validateParams_validateParams__WEBPACK_IMPORTED_MODULE_3__.validateParams)(publicKey, serviceID, templateID);
    (0,_utils_validateTemplateParams_validateTemplateParams__WEBPACK_IMPORTED_MODULE_4__.validateTemplateParams)(templateParams);
    if (templateParams && (0,_utils_isBlockedValueInParams_isBlockedValueInParams__WEBPACK_IMPORTED_MODULE_7__.isBlockedValueInParams)(blockList, templateParams)) {
        return Promise.reject((0,_errors_blockedEmailError_blockedEmailError__WEBPACK_IMPORTED_MODULE_8__.blockedEmailError)());
    }
    if (await (0,_utils_isLimitRateHit_isLimitRateHit__WEBPACK_IMPORTED_MODULE_9__.isLimitRateHit)(location.pathname, limitRate, storageProvider)) {
        return Promise.reject((0,_errors_limitRateError_limitRateError__WEBPACK_IMPORTED_MODULE_10__.limitRateError)());
    }
    const params = {
        lib_version: '4.4.1',
        user_id: publicKey,
        service_id: serviceID,
        template_id: templateID,
        template_params: templateParams,
    };
    return (0,_api_sendPost__WEBPACK_IMPORTED_MODULE_1__.sendPost)('/api/v1.0/email/send', JSON.stringify(params), {
        'Content-type': 'application/json',
    });
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/methods/sendForm/sendForm.js"
/*!***********************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/methods/sendForm/sendForm.js ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sendForm: () => (/* binding */ sendForm)
/* harmony export */ });
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/store */ "./node_modules/@emailjs/browser/es/store/store.js");
/* harmony import */ var _api_sendPost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/sendPost */ "./node_modules/@emailjs/browser/es/api/sendPost.js");
/* harmony import */ var _utils_buildOptions_buildOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/buildOptions/buildOptions */ "./node_modules/@emailjs/browser/es/utils/buildOptions/buildOptions.js");
/* harmony import */ var _utils_validateForm_validateForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/validateForm/validateForm */ "./node_modules/@emailjs/browser/es/utils/validateForm/validateForm.js");
/* harmony import */ var _utils_validateParams_validateParams__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/validateParams/validateParams */ "./node_modules/@emailjs/browser/es/utils/validateParams/validateParams.js");
/* harmony import */ var _utils_isHeadless_isHeadless__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/isHeadless/isHeadless */ "./node_modules/@emailjs/browser/es/utils/isHeadless/isHeadless.js");
/* harmony import */ var _errors_headlessError_headlessError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../errors/headlessError/headlessError */ "./node_modules/@emailjs/browser/es/errors/headlessError/headlessError.js");
/* harmony import */ var _utils_isBlockedValueInParams_isBlockedValueInParams__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/isBlockedValueInParams/isBlockedValueInParams */ "./node_modules/@emailjs/browser/es/utils/isBlockedValueInParams/isBlockedValueInParams.js");
/* harmony import */ var _errors_blockedEmailError_blockedEmailError__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../errors/blockedEmailError/blockedEmailError */ "./node_modules/@emailjs/browser/es/errors/blockedEmailError/blockedEmailError.js");
/* harmony import */ var _utils_isLimitRateHit_isLimitRateHit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/isLimitRateHit/isLimitRateHit */ "./node_modules/@emailjs/browser/es/utils/isLimitRateHit/isLimitRateHit.js");
/* harmony import */ var _errors_limitRateError_limitRateError__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../errors/limitRateError/limitRateError */ "./node_modules/@emailjs/browser/es/errors/limitRateError/limitRateError.js");











const findHTMLForm = (form) => {
    return typeof form === 'string' ? document.querySelector(form) : form;
};
/**
 * Send a form the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {string | HTMLFormElement} form - the form element or selector
 * @param {object} options - the EmailJS SDK config options
 * @returns {Promise<EmailJSResponseStatus>}
 */
const sendForm = async (serviceID, templateID, form, options) => {
    const opts = (0,_utils_buildOptions_buildOptions__WEBPACK_IMPORTED_MODULE_2__.buildOptions)(options);
    const publicKey = opts.publicKey || _store_store__WEBPACK_IMPORTED_MODULE_0__.store.publicKey;
    const blockHeadless = opts.blockHeadless || _store_store__WEBPACK_IMPORTED_MODULE_0__.store.blockHeadless;
    const storageProvider = _store_store__WEBPACK_IMPORTED_MODULE_0__.store.storageProvider || opts.storageProvider;
    const blockList = { ..._store_store__WEBPACK_IMPORTED_MODULE_0__.store.blockList, ...opts.blockList };
    const limitRate = { ..._store_store__WEBPACK_IMPORTED_MODULE_0__.store.limitRate, ...opts.limitRate };
    if (blockHeadless && (0,_utils_isHeadless_isHeadless__WEBPACK_IMPORTED_MODULE_5__.isHeadless)(navigator)) {
        return Promise.reject((0,_errors_headlessError_headlessError__WEBPACK_IMPORTED_MODULE_6__.headlessError)());
    }
    const currentForm = findHTMLForm(form);
    (0,_utils_validateParams_validateParams__WEBPACK_IMPORTED_MODULE_4__.validateParams)(publicKey, serviceID, templateID);
    (0,_utils_validateForm_validateForm__WEBPACK_IMPORTED_MODULE_3__.validateForm)(currentForm);
    const formData = new FormData(currentForm);
    if ((0,_utils_isBlockedValueInParams_isBlockedValueInParams__WEBPACK_IMPORTED_MODULE_7__.isBlockedValueInParams)(blockList, formData)) {
        return Promise.reject((0,_errors_blockedEmailError_blockedEmailError__WEBPACK_IMPORTED_MODULE_8__.blockedEmailError)());
    }
    if (await (0,_utils_isLimitRateHit_isLimitRateHit__WEBPACK_IMPORTED_MODULE_9__.isLimitRateHit)(location.pathname, limitRate, storageProvider)) {
        return Promise.reject((0,_errors_limitRateError_limitRateError__WEBPACK_IMPORTED_MODULE_10__.limitRateError)());
    }
    formData.append('lib_version', '4.4.1');
    formData.append('service_id', serviceID);
    formData.append('template_id', templateID);
    formData.append('user_id', publicKey);
    return (0,_api_sendPost__WEBPACK_IMPORTED_MODULE_1__.sendPost)('/api/v1.0/email/send-form', formData);
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js"
/*!**************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmailJSResponseStatus: () => (/* binding */ EmailJSResponseStatus)
/* harmony export */ });
class EmailJSResponseStatus {
    constructor(_status = 0, _text = 'Network Error') {
        this.status = _status;
        this.text = _text;
    }
}


/***/ },

/***/ "./node_modules/@emailjs/browser/es/store/store.js"
/*!*********************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/store/store.js ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   store: () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _utils_createWebStorage_createWebStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createWebStorage/createWebStorage */ "./node_modules/@emailjs/browser/es/utils/createWebStorage/createWebStorage.js");

const store = {
    origin: 'https://api.emailjs.com',
    blockHeadless: false,
    storageProvider: (0,_utils_createWebStorage_createWebStorage__WEBPACK_IMPORTED_MODULE_0__.createWebStorage)(),
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/utils/buildOptions/buildOptions.js"
/*!*****************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/buildOptions/buildOptions.js ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildOptions: () => (/* binding */ buildOptions)
/* harmony export */ });
const buildOptions = (options) => {
    if (!options)
        return {};
    // support compatibility with SDK v3
    if (typeof options === 'string') {
        return {
            publicKey: options,
        };
    }
    // eslint-disable-next-line @typescript-eslint/no-base-to-string
    if (options.toString() === '[object Object]') {
        return options;
    }
    return {};
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/utils/createWebStorage/createWebStorage.js"
/*!*************************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/createWebStorage/createWebStorage.js ***!
  \*************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createWebStorage: () => (/* binding */ createWebStorage)
/* harmony export */ });
const createWebStorage = () => {
    if (typeof localStorage === 'undefined')
        return;
    return {
        get: (key) => Promise.resolve(localStorage.getItem(key)),
        set: (key, value) => Promise.resolve(localStorage.setItem(key, value)),
        remove: (key) => Promise.resolve(localStorage.removeItem(key)),
    };
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/utils/isBlockedValueInParams/isBlockedValueInParams.js"
/*!*************************************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/isBlockedValueInParams/isBlockedValueInParams.js ***!
  \*************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isBlockedValueInParams: () => (/* binding */ isBlockedValueInParams)
/* harmony export */ });
/* harmony import */ var _validateBlockListParams_validateBlockListParams__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../validateBlockListParams/validateBlockListParams */ "./node_modules/@emailjs/browser/es/utils/validateBlockListParams/validateBlockListParams.js");

const isBlockListDisabled = (options) => {
    return !options.list?.length || !options.watchVariable;
};
const getValue = (data, name) => {
    return data instanceof FormData ? data.get(name) : data[name];
};
const isBlockedValueInParams = (options, params) => {
    if (isBlockListDisabled(options))
        return false;
    (0,_validateBlockListParams_validateBlockListParams__WEBPACK_IMPORTED_MODULE_0__.validateBlockListParams)(options.list, options.watchVariable);
    const value = getValue(params, options.watchVariable);
    if (typeof value !== 'string')
        return false;
    return options.list.includes(value);
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/utils/isHeadless/isHeadless.js"
/*!*************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/isHeadless/isHeadless.js ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isHeadless: () => (/* binding */ isHeadless)
/* harmony export */ });
const isHeadless = (navigator) => {
    return navigator.webdriver || !navigator.languages || navigator.languages.length === 0;
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/utils/isLimitRateHit/isLimitRateHit.js"
/*!*********************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/isLimitRateHit/isLimitRateHit.js ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isLimitRateHit: () => (/* binding */ isLimitRateHit)
/* harmony export */ });
/* harmony import */ var _validateLimitRateParams_validateLimitRateParams__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../validateLimitRateParams/validateLimitRateParams */ "./node_modules/@emailjs/browser/es/utils/validateLimitRateParams/validateLimitRateParams.js");

const getLeftTime = async (id, throttle, storage) => {
    const lastTime = Number((await storage.get(id)) || 0);
    return throttle - Date.now() + lastTime;
};
const isLimitRateHit = async (defaultID, options, storage) => {
    if (!options.throttle || !storage) {
        return false;
    }
    ;(0,_validateLimitRateParams_validateLimitRateParams__WEBPACK_IMPORTED_MODULE_0__.validateLimitRateParams)(options.throttle, options.id);
    const id = options.id || defaultID;
    const leftTime = await getLeftTime(id, options.throttle, storage);
    if (leftTime > 0) {
        return true;
    }
    await storage.set(id, Date.now().toString());
    return false;
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/utils/validateBlockListParams/validateBlockListParams.js"
/*!***************************************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/validateBlockListParams/validateBlockListParams.js ***!
  \***************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validateBlockListParams: () => (/* binding */ validateBlockListParams)
/* harmony export */ });
const validateBlockListParams = (list, watchVariable) => {
    if (!Array.isArray(list)) {
        throw 'The BlockList list has to be an array';
    }
    if (typeof watchVariable !== 'string') {
        throw 'The BlockList watchVariable has to be a string';
    }
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/utils/validateForm/validateForm.js"
/*!*****************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/validateForm/validateForm.js ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validateForm: () => (/* binding */ validateForm)
/* harmony export */ });
const validateForm = (form) => {
    if (!form || form.nodeName !== 'FORM') {
        throw 'The 3rd parameter is expected to be the HTML form element or the style selector of the form';
    }
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/utils/validateLimitRateParams/validateLimitRateParams.js"
/*!***************************************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/validateLimitRateParams/validateLimitRateParams.js ***!
  \***************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validateLimitRateParams: () => (/* binding */ validateLimitRateParams)
/* harmony export */ });
const validateLimitRateParams = (throttle, id) => {
    if (typeof throttle !== 'number' || throttle < 0) {
        throw 'The LimitRate throttle has to be a positive number';
    }
    if (id && typeof id !== 'string') {
        throw 'The LimitRate ID has to be a non-empty string';
    }
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/utils/validateParams/validateParams.js"
/*!*********************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/validateParams/validateParams.js ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validateParams: () => (/* binding */ validateParams)
/* harmony export */ });
const validateParams = (publicKey, serviceID, templateID) => {
    if (!publicKey || typeof publicKey !== 'string') {
        throw 'The public key is required. Visit https://dashboard.emailjs.com/admin/account';
    }
    if (!serviceID || typeof serviceID !== 'string') {
        throw 'The service ID is required. Visit https://dashboard.emailjs.com/admin';
    }
    if (!templateID || typeof templateID !== 'string') {
        throw 'The template ID is required. Visit https://dashboard.emailjs.com/admin/templates';
    }
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/utils/validateTemplateParams/validateTemplateParams.js"
/*!*************************************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/validateTemplateParams/validateTemplateParams.js ***!
  \*************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validateTemplateParams: () => (/* binding */ validateTemplateParams)
/* harmony export */ });
const validateTemplateParams = (templateParams) => {
    // eslint-disable-next-line @typescript-eslint/no-base-to-string
    if (templateParams && templateParams.toString() !== '[object Object]') {
        throw 'The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/';
    }
};


/***/ },

/***/ "./src/scripts/ContactForm.js"
/*!************************************!*\
  !*** ./src/scripts/ContactForm.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emailjs/browser */ "./node_modules/@emailjs/browser/es/index.js");
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icons */ "./src/scripts/Icons.js");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation */ "./src/scripts/navigation.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const cfg = window.cmjConfig || {};

// Mismo listado de servicios que usa el mega menu del Navbar (ver navigation.js) —
// una sola fuente para no repetir los 9 servicios en un tercer lugar.
const SERVICES_ITEM = _navigation__WEBPACK_IMPORTED_MODULE_3__.NAV_ITEMS.find(item => item.children);
const PROJECT_TYPES = (SERVICES_ITEM ? SERVICES_ITEM.children : []).concat([{
  label: "Something Else",
  slug: "other"
}]);
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const initialFields = {
  name: "",
  phone: "",
  email: "",
  projectType: "",
  message: "",
  website: "" // honeypot: campo invisible para humanos, si llega lleno es un bot
};
function validate(fields) {
  const errors = {};
  if (!fields.name.trim()) errors.name = "Please enter your name.";
  if (!fields.phone.trim()) errors.phone = "Please enter a phone number.";
  if (!fields.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!EMAIL_RE.test(fields.email.trim())) {
    errors.email = "That email doesn't look right.";
  }
  if (!fields.message.trim()) errors.message = "Tell us a bit about your project.";
  return errors;
}

// Dos pieles del mismo form: "light" = card sólida (fondo cmj-wood-bg del hero
// de contacto), "glass" = card traslúcida con backdrop-blur, para usarse sobre
// el slideshow de fotos del hero de Home (ver home-template.php). Todo lo demás
// (validación, envío, estados) es idéntico entre las dos.
const THEME = {
  light: {
    card: "rounded-lg bg-paper p-8",
    heading: "text-ink",
    subtext: "text-ink/70",
    label: "text-ink",
    input: "w-full rounded-md border border-ink/15 bg-paper px-4 py-2.5 text-sm text-ink placeholder:text-ink/40 " + "focus:outline-none focus:ring-2 focus:ring-tan focus:border-transparent transition-colors",
    error: "text-red-600",
    divider: "border-ink/10",
    contactLink: "text-ink hover:text-tan-2",
    resetLink: "text-ink border-ink/30 hover:border-tan hover:text-tan-2",
    iconBg: "bg-tan/15 text-tan-2"
  },
  glass: {
    card: "rounded-lg bg-paper/10 backdrop-blur-md border border-paper/20 shadow-2xl p-8",
    heading: "text-paper",
    subtext: "text-cream/80",
    label: "text-cream",
    input: "w-full rounded-md border border-cream/25 bg-paper/10 px-4 py-2.5 text-sm text-paper placeholder:text-cream/45 " + "focus:outline-none focus:ring-2 focus:ring-tan focus:border-transparent transition-colors",
    error: "text-red-300",
    divider: "border-cream/20",
    contactLink: "text-cream hover:text-tan",
    resetLink: "text-cream border-cream/40 hover:border-tan hover:text-tan",
    iconBg: "bg-paper/15 text-tan"
  }
};
function Field({
  id,
  label,
  error,
  t,
  children
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
      htmlFor: id,
      className: `block text-sm font-medium mb-1.5 ${t.label}`,
      children: label
    }), children, error ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
      id: `${id}-error`,
      className: `mt-1 text-xs ${t.error}`,
      children: error
    }) : null]
  });
}
function ContactForm({
  variant = "light"
}) {
  const t = THEME[variant] || THEME.light;
  const [fields, setFields] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialFields);
  const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("idle"); // idle | submitting | success | error
  const [serverMessage, setServerMessage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const onChange = e => {
    const {
      name,
      value
    } = e.target;
    setFields(f => ({
      ...f,
      [name]: value
    }));
  };
  const onSubmit = async e => {
    e.preventDefault();

    // Honeypot: si un bot llenó este campo invisible, fingimos éxito sin enviar nada.
    if (fields.website) {
      setStatus("success");
      setServerMessage("Thanks! We'll get back to you within one business day.");
      return;
    }
    const fieldErrors = validate(fields);
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) return;
    setStatus("submitting");
    setServerMessage("");

    // Envío 100% client-side vía EmailJS (ver cmj_config() en functions.php para las
    // IDs) — ya no pasa por wp_ajax/wp_mail. Los nombres de estos parámetros son los
    // que la plantilla de EmailJS del cliente debe usar entre {{...}}.
    const templateParams = {
      name: fields.name,
      phone: fields.phone,
      email: fields.email,
      project_type: fields.projectType || "(not specified)",
      message: fields.message
    };
    try {
      // El aviso al negocio es el envío crítico (es el lead en sí) — lo esperamos y,
      // si falla, mostramos error. El auto-reply al cliente es "best effort": si por lo
      // que sea falla, el negocio de todos modos ya recibió el lead, así que no
      // bloqueamos el success del form por eso (solo lo dejamos loggeado).
      await _emailjs_browser__WEBPACK_IMPORTED_MODULE_1__["default"].send(cfg.emailjsServiceId, cfg.emailjsContactTemplateId, templateParams, {
        publicKey: cfg.emailjsPublicKey
      });
      _emailjs_browser__WEBPACK_IMPORTED_MODULE_1__["default"].send(cfg.emailjsServiceId, cfg.emailjsAutoReplyTemplateId, templateParams, {
        publicKey: cfg.emailjsPublicKey
      }).catch(err => console.error("EmailJS auto-reply failed:", err));
      setStatus("success");
      setServerMessage("Thanks! We'll get back to you within one business day.");
      setFields(initialFields);
    } catch (err) {
      setStatus("error");
      setServerMessage("Something went wrong sending your message. Please call or email us directly.");
    }
  };
  if (status === "success") {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: `${t.card} text-center`,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: `w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${t.iconBg}`,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Icons__WEBPACK_IMPORTED_MODULE_2__.CheckIcon, {
          width: "22",
          height: "22"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
        className: `text-xl font-semibold mb-2 ${t.heading}`,
        children: "Request Sent"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
        className: `text-sm ${t.subtext}`,
        children: serverMessage
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
        type: "button",
        onClick: () => setStatus("idle"),
        className: `mt-6 text-sm font-medium border-b transition-colors ${t.resetLink}`,
        children: "Send another request"
      })]
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: t.card,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
      className: `text-xl font-semibold mb-1 ${t.heading}`,
      children: "Request Your Free Estimate"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
      className: `text-sm mb-6 ${t.subtext}`,
      children: "Tell us about your project, we'll get back to you within one business day."
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("form", {
      onSubmit: onSubmit,
      noValidate: true,
      className: "space-y-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Field, {
        id: "cmj-cf-name",
        label: "Full Name",
        error: errors.name,
        t: t,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
          id: "cmj-cf-name",
          name: "name",
          type: "text",
          autoComplete: "name",
          value: fields.name,
          onChange: onChange,
          "aria-invalid": Boolean(errors.name),
          "aria-describedby": errors.name ? "cmj-cf-name-error" : undefined,
          className: t.input,
          placeholder: "Jane Smith"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Field, {
          id: "cmj-cf-phone",
          label: "Phone",
          error: errors.phone,
          t: t,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
            id: "cmj-cf-phone",
            name: "phone",
            type: "tel",
            autoComplete: "tel",
            value: fields.phone,
            onChange: onChange,
            "aria-invalid": Boolean(errors.phone),
            "aria-describedby": errors.phone ? "cmj-cf-phone-error" : undefined,
            className: t.input,
            placeholder: "(323) 555-0100"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Field, {
          id: "cmj-cf-email",
          label: "Email",
          error: errors.email,
          t: t,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
            id: "cmj-cf-email",
            name: "email",
            type: "email",
            autoComplete: "email",
            value: fields.email,
            onChange: onChange,
            "aria-invalid": Boolean(errors.email),
            "aria-describedby": errors.email ? "cmj-cf-email-error" : undefined,
            className: t.input,
            placeholder: "jane@email.com"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Field, {
        id: "cmj-cf-project",
        label: "Project Type (optional)",
        t: t,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("select", {
          id: "cmj-cf-project",
          name: "projectType",
          value: fields.projectType,
          onChange: onChange,
          className: t.input + " appearance-none",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
            className: "text-ink",
            value: "",
            children: "Select a project type"
          }), PROJECT_TYPES.map(p => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
            className: "text-ink",
            value: p.label,
            children: p.label
          }, p.slug))]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Field, {
        id: "cmj-cf-message",
        label: "Tell Us About Your Project",
        error: errors.message,
        t: t,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("textarea", {
          id: "cmj-cf-message",
          name: "message",
          rows: "4",
          value: fields.message,
          onChange: onChange,
          "aria-invalid": Boolean(errors.message),
          "aria-describedby": errors.message ? "cmj-cf-message-error" : undefined,
          className: t.input + " resize-none",
          placeholder: "Room, rough size, timeline, anything that helps us prep your estimate."
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
        type: "text",
        name: "website",
        value: fields.website,
        onChange: onChange,
        tabIndex: -1,
        autoComplete: "off",
        "aria-hidden": "true",
        className: "absolute -left-[9999px] w-px h-px overflow-hidden"
      }), status === "error" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
        className: `text-sm ${t.error}`,
        children: serverMessage
      }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
        type: "submit",
        disabled: status === "submitting",
        className: "cmj-cta flex items-center justify-center relative overflow-hidden w-full h-[52px] bg-linear-to-b from-tan to-tan-2 text-paper text-[13px] font-semibold uppercase disabled:opacity-60 disabled:pointer-events-none",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: "cmj-cta__frame",
          "aria-hidden": "true"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          className: "cmj-cta__label",
          "data-title": status === "submitting" ? "Sending…" : "Send My Request",
          "data-text": cfg.ctaHover || "Let's Talk"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: `mt-6 pt-6 border-t space-y-3 ${t.divider}`,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
        href: `tel:${cfg.phoneRaw || ""}`,
        className: `flex items-center gap-3 text-sm font-medium transition-colors ${t.contactLink}`,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Icons__WEBPACK_IMPORTED_MODULE_2__.PhoneIcon, {}), cfg.phone]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
        href: `mailto:${cfg.email || ""}`,
        className: `flex items-center gap-3 text-sm font-medium transition-colors ${t.contactLink}`,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Icons__WEBPACK_IMPORTED_MODULE_2__.MailIcon, {}), cfg.email]
      })]
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactForm);

/***/ },

/***/ "./src/scripts/Footer.js"
/*!*******************************!*\
  !*** ./src/scripts/Footer.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icons */ "./src/scripts/Icons.js");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation */ "./src/scripts/navigation.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const cfg = window.cmjConfig || {};
const SOCIALS = [{
  label: "Facebook",
  key: "facebook",
  Icon: _Icons__WEBPACK_IMPORTED_MODULE_1__.FacebookIcon
}, {
  label: "Instagram",
  key: "instagram",
  Icon: _Icons__WEBPACK_IMPORTED_MODULE_1__.InstagramIcon
}, {
  label: "TikTok",
  key: "tiktok",
  Icon: _Icons__WEBPACK_IMPORTED_MODULE_1__.TikTokIcon
}, {
  label: "BBB",
  key: "bbb",
  Icon: _Icons__WEBPACK_IMPORTED_MODULE_1__.BbbIcon
}, {
  label: "Google Business Profile",
  key: "gmb",
  Icon: _Icons__WEBPACK_IMPORTED_MODULE_1__.GmbIcon
}];
const QUICK_LINKS = _navigation__WEBPACK_IMPORTED_MODULE_2__.NAV_ITEMS.filter(item => !item.children);
const SERVICES = _navigation__WEBPACK_IMPORTED_MODULE_2__.NAV_ITEMS.find(item => item.children)?.children || [];
function Footer() {
  const year = new Date().getFullYear();
  const socials = SOCIALS.filter(({
    key
  }) => cfg.socials && cfg.socials[key]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("footer", {
    className: "relative isolate bg-linear-to-b from-ink to-ebano text-cream",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "cmj-footer-pattern",
      "aria-hidden": "true",
      children: cfg.footerPatternImgUrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "cmj-footer-pattern-img w-full h-full",
        style: {
          backgroundImage: `url(${cfg.footerPatternImgUrl})`
        }
      }) : null
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "lg:col-span-1 text-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
          href: cfg.homeUrl || "/",
          className: "inline-flex flex-col items-center",
          "aria-label": "CMJ Cabinets \u2014 Home",
          children: cfg.footerLogoUrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
              src: cfg.footerLogoUrl,
              alt: "CMJ Cabinets, Inc.",
              className: "w-full max-w-60 h-auto brightness-0 invert"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              className: "mt-3 text-xs font-semibold uppercase tracking-[0.35em] text-cream/80",
              children: "Est. 2007"
            })]
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
            className: "text-xl font-bold tracking-tight text-paper",
            children: ["CMJ ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              className: "text-tan",
              children: "Cabinets"
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          className: "mt-4 text-sm text-cream/70 leading-relaxed",
          children: "Custom cabinetry crafted in Los Angeles: kitchens, closets, bars and more, built to last."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "flex items-center justify-center gap-4 mt-5 text-tan",
          children: socials.map(({
            label,
            key,
            Icon
          }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
            href: cfg.socials[key],
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": label,
            className: "hover:text-paper transition-colors",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Icon, {
              width: "18",
              height: "18"
            })
          }, key))
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
          className: "text-sm font-display font-bold uppercase tracking-wide text-paper",
          children: "Quick Links"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("ul", {
          className: "mt-4 space-y-2.5",
          children: QUICK_LINKS.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
              href: item.url,
              className: "text-sm text-tan hover:text-paper transition-colors",
              children: item.label
            })
          }, item.label))
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
          className: "text-sm font-display font-bold uppercase tracking-wide text-paper",
          children: "Services"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("ul", {
          className: "mt-4 space-y-2.5",
          children: SERVICES.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
              href: item.url,
              className: "text-sm text-tan hover:text-paper transition-colors",
              children: item.label
            })
          }, item.label))
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
          className: "text-sm font-display font-bold uppercase tracking-wide text-paper",
          children: "Contact"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("ul", {
          className: "mt-4 space-y-3 text-sm text-tan",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              href: `tel:${cfg.phoneRaw || ""}`,
              className: "flex items-center gap-2 hover:text-paper transition-colors",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Icons__WEBPACK_IMPORTED_MODULE_1__.PhoneIcon, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                children: cfg.phone
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              href: `mailto:${cfg.email || ""}`,
              className: "flex items-center gap-2 hover:text-paper transition-colors",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Icons__WEBPACK_IMPORTED_MODULE_1__.MailIcon, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                className: "truncate",
                children: cfg.email
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              href: cfg.mapsUrl || "#",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "flex items-center gap-2 hover:text-paper transition-colors",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Icons__WEBPACK_IMPORTED_MODULE_1__.PinIcon, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                children: cfg.address
              })]
            })
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "border-t border-cream/10",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "max-w-7xl mx-auto px-4 py-5 flex flex-col sm:grid sm:grid-cols-3 items-center gap-2 text-xs text-cream/50",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "sm:justify-self-start flex flex-col items-center sm:items-start gap-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
            children: ["\xA9 ", year, " CMJ Cabinets, Inc. All rights reserved."]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
            className: "flex items-center gap-2",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
              href: cfg.privacyUrl || "/privacy-policy/",
              className: "hover:text-tan transition-colors",
              children: "Privacy Policy"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              "aria-hidden": "true",
              children: "\xB7"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
              href: cfg.termsUrl || "/terms-and-conditions/",
              className: "hover:text-tan transition-colors",
              children: "Terms & Conditions"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
          href: "https://828marketingsolutions.com",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "sm:justify-self-center hover:text-tan transition-colors",
          children: "Site by 828 Marketing Solutions"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          className: "sm:justify-self-end",
          children: "Built with care in Los Angeles, CA."
        })]
      })
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ },

/***/ "./src/scripts/Icons.js"
/*!******************************!*\
  !*** ./src/scripts/Icons.js ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BbbIcon: () => (/* binding */ BbbIcon),
/* harmony export */   CheckIcon: () => (/* binding */ CheckIcon),
/* harmony export */   ChevronIcon: () => (/* binding */ ChevronIcon),
/* harmony export */   CloseIcon: () => (/* binding */ CloseIcon),
/* harmony export */   FacebookIcon: () => (/* binding */ FacebookIcon),
/* harmony export */   GmbIcon: () => (/* binding */ GmbIcon),
/* harmony export */   InstagramIcon: () => (/* binding */ InstagramIcon),
/* harmony export */   MailIcon: () => (/* binding */ MailIcon),
/* harmony export */   MenuIcon: () => (/* binding */ MenuIcon),
/* harmony export */   PhoneIcon: () => (/* binding */ PhoneIcon),
/* harmony export */   PinIcon: () => (/* binding */ PinIcon),
/* harmony export */   TikTokIcon: () => (/* binding */ TikTokIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const PhoneIcon = p => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
  viewBox: "0 0 24 24",
  width: "15",
  height: "15",
  ...base,
  ...p,
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.6 2z"
  })
});
const MailIcon = p => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
  viewBox: "0 0 24 24",
  width: "15",
  height: "15",
  ...base,
  ...p,
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
    x: "2",
    y: "4",
    width: "20",
    height: "16",
    rx: "2"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "m22 7-10 6L2 7"
  })]
});
const PinIcon = p => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
  viewBox: "0 0 24 24",
  width: "15",
  height: "15",
  ...base,
  ...p,
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
    cx: "12",
    cy: "10",
    r: "3"
  })]
});
const ChevronIcon = p => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
  viewBox: "0 0 24 24",
  width: "14",
  height: "14",
  ...base,
  ...p,
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "m6 9 6 6 6-6"
  })
});
const MenuIcon = p => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
  viewBox: "0 0 24 24",
  width: "24",
  height: "24",
  ...base,
  ...p,
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "M3 6h18M3 12h18M3 18h18"
  })
});
const CloseIcon = p => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
  viewBox: "0 0 24 24",
  width: "22",
  height: "22",
  ...base,
  ...p,
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "M18 6 6 18M6 6l12 12"
  })
});
const CheckIcon = p => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
  viewBox: "0 0 24 24",
  width: "16",
  height: "16",
  ...base,
  ...p,
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "M20 6 9 17l-5-5"
  })
});
const solid = {
  fill: "currentColor",
  stroke: "none"
};
const FacebookIcon = p => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
  viewBox: "0 0 24 24",
  width: "15",
  height: "15",
  ...solid,
  ...p,
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
  })
});
const InstagramIcon = p => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
  viewBox: "0 0 24 24",
  width: "15",
  height: "15",
  ...solid,
  ...p,
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 01-1.38-.9 3.72 3.72 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.88 5.88 0 00-2.13 1.38A5.88 5.88 0 00.63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.73 1.46 1.38 2.13a5.88 5.88 0 002.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.88 5.88 0 002.13-1.38 5.88 5.88 0 001.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.88 5.88 0 00-1.38-2.13A5.88 5.88 0 0019.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zm0 10.16a4 4 0 110-8 4 4 0 010 8zm6.4-11.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"
  })
});
const TikTokIcon = p => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
  viewBox: "0 0 24 24",
  width: "15",
  height: "15",
  ...solid,
  ...p,
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.36a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.4z"
  })
});
const BbbIcon = p => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
  viewBox: "0 0 50 50",
  width: "15",
  height: "15",
  ...solid,
  ...p,
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "M 9.2832031 4 C 7.488935 4 5.9052102 5.2051958 5.4277344 6.9355469 L 2 19.365234 L 2 19.5 C 2 23.078268 4.9217323 26 8.5 26 C 10.813035 26 12.845511 24.77516 13.998047 22.945312 C 15.146939 24.778014 17.180833 26 19.5 26 C 21.819167 26 23.853061 24.778014 25.001953 22.945312 C 26.154489 24.77516 28.186965 26 30.5 26 C 32.813993 26 34.847721 24.77447 36 22.943359 C 37.152279 24.77447 39.186007 26 41.5 26 C 45.078268 26 48 23.078268 48 19.5 L 48 19.365234 L 44.570312 6.9355469 C 44.092963 5.2056548 42.509782 4 40.714844 4 L 9.2832031 4 z M 9.2832031 6 L 14.851562 6 L 13.197266 18 L 4.4511719 18 L 7.3554688 7.46875 C 7.5959929 6.597101 8.3794712 6 9.2832031 6 z M 26 6 L 33.128906 6 L 34.783203 18 L 26 18 L 26 6 z M 15 18 L 24 18 L 24 19.5 C 24 19.668891 24.012611 19.834272 24.025391 20 L 15 20 L 15 19.5 L 15 18 z M 36.802734 18 L 45.548828 18 L 45.984375 19.580078 C 45.981749 19.724009 45.951091 19.859765 45.935547 20 L 37.050781 20 C 37.032383 19.833631 37 19.67153 37 19.5 L 37 19.431641 L 36.802734 18 z M 4.0644531 20 L 12.949219 20 C 12.699714 22.256206 10.826202 24 8.5 24 C 6.175282 24 4.3143567 22.254621 4.0644531 20 z M 26.099609 20 L 34.900391 20 C 34.642986 22.247621 32.820142 24 30.5 24 C 28.179858 24 26.357014 22.247621 26.099609 20 z M 14 25.974609 C 12.517 27.235609 10.599 28 8.5 28 C 6.845 28 5.306 27.519172 4 26.701172 L 4 43 C 4 44.654 5.346 46 7 46 L 43 46 C 44.654 46 46 44.654 46 43 L 46 26.701172 C 44.694 27.519172 43.155 28 41.5 28 C 39.401 28 37.483 27.235609 36 25.974609 C 34.517 27.235609 32.599 28 30.5 28 C 28.401 28 26.483 27.235609 25 25.974609 C 23.517 27.235609 21.599 28 19.5 28 C 17.401 28 15.483 27.235609 14 25.974609 z M 35.5 29 C 37.546 29 39.372453 29.952547 40.564453 31.435547 L 39.132812 32.867188 C 38.314813 31.740187 36.996 31 35.5 31 C 33.019 31 31 33.019 31 35.5 C 31 37.981 33.019 40 35.5 40 C 37.453 40 39.102609 38.742 39.724609 37 L 36 37 L 36 35 L 41.974609 35 C 41.986609 35.166 42 35.331 42 35.5 C 42 39.084 39.084 42 35.5 42 C 31.916 42 29 39.084 29 35.5 C 29 31.916 31.916 29 35.5 29 z"
  })
});
const GmbIcon = p => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
  viewBox: "0 0 30 30",
  width: "15",
  height: "15",
  ...solid,
  ...p,
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "M11.166 20.194c.806.577 2.809 1.923 3.222 2.358.412.435.023 1.099.023 1.099l.618.252c.137-.298.962-1.397 1.511-2.084.496-.62.926-1.706.941-2.503.047-2.572-3.367-3.794-4.949-5.237-.778-.71-.16-1.122-.16-1.122l-.527-.343C9.808 14.926 7.662 17.686 11.166 20.194zM12.922 11.605c1.969 1.74 5.435 3.548 5.679 4.717.318 1.523-.412 2.382-.412 2.382l.394.321c.213-.304.451-.591.67-.891.892-1.222 1.752-2.463 2.629-3.695 2.004-2.818 1.254-5.49-1.765-7.648-1.537-1.098-3.032-2.26-4.584-3.339-.871-.733-.275-2.107-.275-2.107l-.367-.32c0 0-3.286 3.984-3.573 5.588C11.045 8.148 10.953 9.865 12.922 11.605zM23 27L22.341 25 7.659 25 7 27 11.19 27 11.822 29 18.217 29 18.816 27z"
  })
});

/***/ },

/***/ "./src/scripts/Navbar.js"
/*!*******************************!*\
  !*** ./src/scripts/Navbar.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icons */ "./src/scripts/Icons.js");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation */ "./src/scripts/navigation.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const cfg = window.cmjConfig || {};

// El único item de NAV_ITEMS con children es "Services" — sus hijos alimentan el mega menu.
const SERVICES_ITEM = _navigation__WEBPACK_IMPORTED_MODULE_2__.NAV_ITEMS.find(item => item.children);
const SOCIALS = [{
  label: "Facebook",
  key: "facebook",
  Icon: _Icons__WEBPACK_IMPORTED_MODULE_1__.FacebookIcon
}, {
  label: "Instagram",
  key: "instagram",
  Icon: _Icons__WEBPACK_IMPORTED_MODULE_1__.InstagramIcon
}, {
  label: "TikTok",
  key: "tiktok",
  Icon: _Icons__WEBPACK_IMPORTED_MODULE_1__.TikTokIcon
}, {
  label: "BBB",
  key: "bbb",
  Icon: _Icons__WEBPACK_IMPORTED_MODULE_1__.BbbIcon
}, {
  label: "Google Business Profile",
  key: "gmb",
  Icon: _Icons__WEBPACK_IMPORTED_MODULE_1__.GmbIcon
}];
function Navbar() {
  const [topbarHidden, setTopbarHidden] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [scrolled, setScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [mobileOpen, setMobileOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [servicesOpen, setServicesOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const lastY = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  const ticking = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);

  // Topbar: se esconde al bajar, reaparece al subir (smooth vía CSS).
  // Bug arreglado #1: el topbar colapsa con max-height, lo que encoge el
  // documento justo arriba del navbar (sticky top-0) — el navegador
  // compensa eso solo ("scroll anchoring", para que el contenido no salte),
  // lo que mueve scrollY, lo que el handler de acá leía como "el usuario
  // scrolleó", lo que volvía a mostrar/esconder el topbar, lo que volvía a
  // encoger/crecer el documento... un loop que se sentía como que "rebotaba"
  // sin parar. Arreglado apagando overflow-anchor en el <html> entero (ver
  // index.css) — no alcanzaba con ponerlo solo en el <header>: eso saca a
  // sus hijos de la lista de candidatos a ser el "anchor", pero no evita que
  // el navegador compense por el cambio de alto del header en sí.
  // Bug arreglado #2 ("sigue rebotando al hacer scroll lento"): lastY.current
  // se reescribía en CADA frame sin importar si se cruzaba el umbral, así que
  // en realidad se comparaba el delta de un frame contra el anterior, no la
  // distancia acumulada desde el último cambio de estado. Con scroll lento
  // (trackpad, rueda de pasos chicos) el delta por frame es chico e
  // inconsistente — cualquier micro-reversa de 1-2px ya cruzaba el umbral de
  // ±4px contra ESE frame puntual, y el topbar parpadeaba. Ahora lastY solo
  // se actualiza cuando de verdad se decide mostrar/ocultar, así el delta se
  // acumula mientras el scroll lento sigue en la misma dirección, y una
  // micro-reversa que no llega a acumular 4px netos no dispara nada.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    lastY.current = window.scrollY;
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      window.requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 8);
        if (y > lastY.current + 4 && y > 96) {
          setTopbarHidden(true);
          lastY.current = y;
        } else if (y < lastY.current - 4) {
          setTopbarHidden(false);
          lastY.current = y;
        }
        ticking.current = false;
      });
    };
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloquear scroll del body con el drawer abierto
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Cerrar dropdown con Escape
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const onKey = e => {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);
  const socials = SOCIALS.filter(({
    key
  }) => cfg.socials && cfg.socials[key]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("header", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: `bg-linear-to-b from-tan to-tan-2 text-paper overflow-hidden transition-all duration-300 ease-in-out ${topbarHidden ? "max-h-0 opacity-0" : "max-h-12 opacity-100"}`,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "max-w-7xl mx-auto px-4 h-11 flex items-center justify-between gap-4 text-sm",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "flex items-center gap-4 min-w-0",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
            href: `tel:${cfg.phoneRaw || ""}`,
            className: "flex items-center gap-1.5 hover:text-ebano transition-colors whitespace-nowrap",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Icons__WEBPACK_IMPORTED_MODULE_1__.PhoneIcon, {
              width: "17",
              height: "17"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              children: cfg.phone
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
            href: `mailto:${cfg.email || ""}`,
            className: "hidden sm:flex items-center gap-1.5 hover:text-ebano transition-colors truncate",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Icons__WEBPACK_IMPORTED_MODULE_1__.MailIcon, {
              width: "17",
              height: "17"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              className: "truncate",
              children: cfg.email
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
          href: cfg.mapsUrl || "#",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "hidden md:flex items-center gap-1.5 hover:text-ebano transition-colors whitespace-nowrap",
          title: "Open in Google Maps",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Icons__WEBPACK_IMPORTED_MODULE_1__.PinIcon, {
            width: "17",
            height: "17"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            children: cfg.address
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "flex items-center gap-3",
          children: socials.map(({
            label,
            key,
            Icon
          }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
            href: cfg.socials[key],
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": label,
            className: "hover:text-ebano transition-colors",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Icon, {
              width: "17",
              height: "17"
            })
          }, key))
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: `bg-paper transition-shadow duration-300 ${scrolled ? "shadow-md" : ""}`,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "max-w-7xl mx-auto px-4 h-[76px] flex items-center justify-between gap-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
          href: cfg.homeUrl || "/",
          className: "flex items-center shrink-0",
          "aria-label": "CMJ Cabinets \u2014 Home",
          children: cfg.logoUrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
            src: cfg.logoUrl,
            alt: "CMJ Cabinets, Inc.",
            className: "h-10.75 w-auto"
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
            className: "text-2xl font-bold tracking-tight text-ink",
            children: ["CMJ ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              className: "text-tan-2",
              children: "Cabinets"
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("nav", {
          className: "hidden lg:flex items-center gap-7",
          "aria-label": "Main",
          children: _navigation__WEBPACK_IMPORTED_MODULE_2__.NAV_ITEMS.map(item => item.children ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            onMouseEnter: () => setServicesOpen(true),
            onMouseLeave: () => setServicesOpen(false),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              href: item.url,
              "aria-expanded": servicesOpen,
              "aria-haspopup": "true",
              onFocus: () => setServicesOpen(true),
              className: "flex items-center gap-1 text-[15px] font-medium text-ink hover:text-tan-2 transition-colors py-6",
              children: [item.label, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Icons__WEBPACK_IMPORTED_MODULE_1__.ChevronIcon, {
                className: `transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`
              })]
            })
          }, item.label) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
            href: item.url,
            className: "text-[15px] font-medium text-ink hover:text-tan-2 transition-colors",
            children: item.label
          }, item.label))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "flex items-center gap-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
            href: cfg.ctaUrl || "/contact-us/",
            "aria-label": cfg.ctaLabel || "Free Estimate",
            className: "cmj-cta hidden lg:flex items-center justify-center relative overflow-hidden w-[178px] h-[46px] bg-linear-to-b from-tan to-tan-2 text-paper text-[13px] font-semibold uppercase",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              className: "cmj-cta__frame",
              "aria-hidden": "true"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "cmj-cta__label",
              "data-title": cfg.ctaLabel || "Free Estimate",
              "data-text": cfg.ctaHover || "Let's Talk"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
            type: "button",
            className: "lg:hidden text-ink p-1",
            "aria-label": mobileOpen ? "Close menu" : "Open menu",
            "aria-expanded": mobileOpen,
            onClick: () => setMobileOpen(v => !v),
            children: mobileOpen ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Icons__WEBPACK_IMPORTED_MODULE_1__.CloseIcon, {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Icons__WEBPACK_IMPORTED_MODULE_1__.MenuIcon, {})
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      onMouseEnter: () => setServicesOpen(true),
      onMouseLeave: () => setServicesOpen(false),
      className: `hidden lg:block absolute inset-x-0 top-full bg-paper border-t border-cream shadow-2xl transition-all duration-200 origin-top ${servicesOpen ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-95 pointer-events-none"}`,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "max-w-[1600px] mx-auto px-8 py-8",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "cmj-mega-grid flex items-stretch gap-6 overflow-x-auto overflow-y-visible pt-2 -mt-2 pb-6 scrollbar-none [perspective:1400px]",
          children: [SERVICES_ITEM.children.map(child => {
            const img = cfg.serviceImages && cfg.serviceImages[child.slug];
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              href: child.url,
              className: "cmj-mega-card group shrink-0 w-42 rounded-md border border-ink/10 bg-paper overflow-hidden",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: `aspect-square overflow-hidden relative ${img ? "" : "cmj-wood-bg"}`,
                children: img ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
                  src: img,
                  alt: child.label,
                  loading: "lazy",
                  className: "cmj-mega-card__img absolute inset-0 w-full h-full object-cover"
                }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                  className: "cmj-mega-card__img absolute inset-0"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                className: "px-3 py-3 text-[14px] font-semibold text-ink group-hover:text-tan-2 transition-colors",
                children: child.label
              })]
            }, child.label);
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
            href: SERVICES_ITEM.url,
            className: "cmj-mega-card group shrink-0 w-42 aspect-square rounded-md border border-transparent bg-ink hover:bg-tan-2 flex flex-col items-center justify-center text-center gap-2 px-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              className: "text-[14px] font-semibold text-paper",
              children: "View All Services"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Icons__WEBPACK_IMPORTED_MODULE_1__.ChevronIcon, {
              className: "text-tan -rotate-90"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "mt-7 pt-6 border-t border-cream flex flex-wrap items-center gap-6",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
            href: `tel:${cfg.phoneRaw || ""}`,
            className: "flex items-center gap-2 text-ink font-medium text-sm hover:text-tan-2 transition-colors",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Icons__WEBPACK_IMPORTED_MODULE_1__.PhoneIcon, {}), "Call ", cfg.phone]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
            href: `mailto:${cfg.email || ""}`,
            className: "flex items-center gap-2 text-ink font-medium text-sm hover:text-tan-2 transition-colors",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Icons__WEBPACK_IMPORTED_MODULE_1__.MailIcon, {}), "Email Us"]
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: `lg:hidden fixed inset-x-0 bottom-0 top-[76px] bg-ink/40 backdrop-blur-[2px] transition-opacity duration-300 ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`,
      onClick: () => setMobileOpen(false),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("nav", {
        "aria-label": "Mobile",
        className: `absolute right-0 top-0 bottom-0 w-[86%] max-w-sm bg-paper shadow-2xl overflow-y-auto transition-transform duration-300 ease-in-out ${mobileOpen ? "translate-x-0" : "translate-x-full"}`,
        onClick: e => e.stopPropagation(),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("ul", {
          className: "py-3",
          children: _navigation__WEBPACK_IMPORTED_MODULE_2__.NAV_ITEMS.map(item => item.children ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
            className: "border-b border-cream",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("details", {
              className: "group",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("summary", {
                className: "flex items-center justify-between px-5 py-3.5 text-ink font-medium cursor-pointer list-none",
                children: [item.label, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Icons__WEBPACK_IMPORTED_MODULE_1__.ChevronIcon, {
                  className: "transition-transform duration-200 group-open:rotate-180"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("ul", {
                className: "pb-2 bg-cream/50",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
                    href: item.url,
                    className: "block px-8 py-2.5 text-[14px] font-medium text-tan-2",
                    children: "All Services"
                  })
                }), item.children.map(child => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
                    href: child.url,
                    className: "block px-8 py-2.5 text-[14px] text-ink/85 hover:text-tan-2",
                    children: child.label
                  })
                }, child.label))]
              })]
            })
          }, item.label) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
            className: "border-b border-cream",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
              href: item.url,
              className: "block px-5 py-3.5 text-ink font-medium hover:text-tan-2",
              children: item.label
            })
          }, item.label))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "px-5 py-4 space-y-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
            href: cfg.ctaUrl || "/contact-us/",
            "aria-label": cfg.ctaLabel || "Free Estimate",
            className: "cmj-cta flex items-center justify-center relative overflow-hidden w-full h-[50px] bg-linear-to-b from-tan to-tan-2 text-paper text-[13px] font-semibold uppercase",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              className: "cmj-cta__frame",
              "aria-hidden": "true"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "cmj-cta__label",
              "data-title": cfg.ctaLabel || "Free Estimate",
              "data-text": cfg.ctaHover || "Let's Talk"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
            href: `tel:${cfg.phoneRaw || ""}`,
            className: "flex items-center justify-center gap-2 text-ink font-medium",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Icons__WEBPACK_IMPORTED_MODULE_1__.PhoneIcon, {}), " ", cfg.phone]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "flex items-center justify-center gap-4 pt-1 text-ink/70",
            children: socials.map(({
              label,
              key,
              Icon
            }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
              href: cfg.socials[key],
              target: "_blank",
              rel: "noopener noreferrer",
              "aria-label": label,
              className: "hover:text-tan-2",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Icon, {})
            }, key))
          })]
        })]
      })
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ },

/***/ "./src/scripts/navigation.js"
/*!***********************************!*\
  !*** ./src/scripts/navigation.js ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NAV_ITEMS: () => (/* binding */ NAV_ITEMS)
/* harmony export */ });
// Fuente única de la navegación del sitio.
// Navbar y Footer leen de aquí para no repetir la lista de servicios en dos lugares.
const NAV_ITEMS = [{
  label: "Home",
  url: "/"
}, {
  label: "About",
  url: "/about/"
}, {
  label: "Services",
  url: "/services/",
  // Orden por % de ingreso, según brief (Parte 1.3 / 4.3).
  // URLs anidadas bajo /services/ — cada página debe tener "Services" como
  // Parent en Atributos de página (WP admin) para que la URL resuelva así.
  // slug = clave usada en cmj_config().serviceImages (PHP, functions.php) para
  // resolver la foto de cada servicio en el mega menu.
  children: [{
    label: "Kitchen Cabinets",
    url: "/services/kitchen/",
    slug: "kitchen"
  }, {
    label: "Custom Closets",
    url: "/services/closet/",
    slug: "closet"
  }, {
    label: "Bar Cabinets",
    url: "/services/bar-cabinets/",
    slug: "bar-cabinets"
  }, {
    label: "Bathroom Vanities",
    url: "/services/bathroom-vanity/",
    slug: "bathroom-vanity"
  }, {
    label: "Garage Cabinets",
    url: "/services/garages/",
    slug: "garages"
  }, {
    label: "Murphy Beds",
    url: "/services/murphy-beds/",
    slug: "murphy-beds"
  }, {
    label: "Laundry Room",
    url: "/services/laundry-room/",
    slug: "laundry-room"
  }, {
    label: "Entertainment Centers",
    url: "/services/entertainment-centers/",
    slug: "entertainment-centers"
  }, {
    label: "Additional Services",
    url: "/services/additional-services/",
    slug: "additional-services"
  }]
}, {
  label: "Gallery",
  url: "/gallery/"
}, {
  label: "Locations",
  url: "/locations/"
}, {
  label: "Contact",
  url: "/contact-us/"
}];

/***/ },

/***/ "react"
/*!************************!*\
  !*** external "React" ***!
  \************************/
(module) {

module.exports = window["React"];

/***/ },

/***/ "react-dom/client"
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
(module) {

module.exports = window["ReactDOM"];

/***/ },

/***/ "react/jsx-runtime"
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
(module) {

module.exports = window["ReactJSXRuntime"];

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			const getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.hasOwn(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "react-dom/client");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scripts_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/Navbar */ "./src/scripts/Navbar.js");
/* harmony import */ var _scripts_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/Footer */ "./src/scripts/Footer.js");
/* harmony import */ var _scripts_ContactForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/ContactForm */ "./src/scripts/ContactForm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const navbarMount = document.querySelector("#cmj-navbar");
if (navbarMount) {
  react_dom_client__WEBPACK_IMPORTED_MODULE_1___default().createRoot(navbarMount).render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_scripts_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {}));
}
const footerMount = document.querySelector("#cmj-footer");
if (footerMount) {
  react_dom_client__WEBPACK_IMPORTED_MODULE_1___default().createRoot(footerMount).render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_scripts_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {}));
}
const contactFormMount = document.querySelector("#cmj-contact-form");
if (contactFormMount) {
  react_dom_client__WEBPACK_IMPORTED_MODULE_1___default().createRoot(contactFormMount).render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_scripts_ContactForm__WEBPACK_IMPORTED_MODULE_4__["default"], {}));
}

// Segunda instancia del mismo form, variante traslúcida para el hero de Home
// (ver home-template.php) — sobre el slideshow de fotos en vez del wood-bg sólido.
const contactFormHeroMount = document.querySelector("#cmj-contact-form-hero");
if (contactFormHeroMount) {
  react_dom_client__WEBPACK_IMPORTED_MODULE_1___default().createRoot(contactFormHeroMount).render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_scripts_ContactForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "glass"
  }));
}

// ===== Reveal global al hacer scroll =====
// Vive acá (bundle compartido, un solo <script> enqueued en todas las páginas vía
// functions.php) en vez de repetirse en cada template — un solo lugar para
// mantener la lógica. Aplica a cada <section> de <main>, salvo la primera (el
// hero de cada página, que ya tiene sus propias animaciones). Ver .cmj-reveal
// en index.css para el CSS de la transición.
function setupScrollReveal() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const targets = document.querySelectorAll("main > section:not(:first-child)");
  if (!targets.length) return;
  targets.forEach(el => el.classList.add("cmj-reveal"));
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -80px 0px"
  });
  targets.forEach(el => observer.observe(el));
}
setupScrollReveal();
})();

/******/ })()
;
//# sourceMappingURL=index.js.map