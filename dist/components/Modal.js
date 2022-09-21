"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Modal;

require("./Modalcss.css");

var _react = _interopRequireDefault(require("react"));

/**
 * Modal for Form
 * @function
 * @name Modal
 * @param {string} text return the desired body text
 * @param {string} close return the desired text for the button
 * @returns {HTML} the Modal
 */
function Modal(_ref) {
  var texte = _ref.texte,
      close = _ref.close;
  document.addEventListener("click", function (event) {
    // If user either clicks on the button OR clicks outside the modal window, then close modal by calling closeModal()
    if (event.target.matches(".button-close-modal") || !event.target.closest(".ModalContainer")) {
      closeModal();
    }
  }, false);

  function closeModal() {
    document.querySelector(".ModalContainer").style.display = "none";
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "ModalContainer"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "ModalMessage"
  }, /*#__PURE__*/_react.default.createElement("p", null, " ", texte, " "), /*#__PURE__*/_react.default.createElement("div", {
    className: "ModalButton"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "button-close-modal",
    onClick: closeModal
  }, close)))));
}