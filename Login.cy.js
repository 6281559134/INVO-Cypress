/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!*********************************!*\
  !*** ./cypress/e2e/Login.cy.js ***!
  \*********************************/


describe('template first', () => {
  it('passes', () => {
    cy.visit('https://invo.dev.teleteachers.us/portal/login.cypress.io');
    cy.wait(5000);
    cy.get('input[name=username]').type("madhulatha+invo@ensarsolutions.com");
    cy.get('input[name=password]').type("Tele@123");
    cy.get('button[type=submit]').click();
  });
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW4uY3kuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQUEsUUFBUSxDQUFDLGdCQUFnQixFQUFFLE1BQU07RUFDN0JDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTTtJQUNqQkMsRUFBRSxDQUFDQyxLQUFLLENBQUMsMERBQTBELENBQUM7SUFDcEVELEVBQUUsQ0FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNiRixFQUFFLENBQUNHLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDQyxJQUFJLENBQUMsb0NBQW9DLENBQUM7SUFDekVKLEVBQUUsQ0FBQ0csR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUNDLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDL0NKLEVBQUUsQ0FBQ0csR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUNFLEtBQUssQ0FBQyxDQUFDO0VBRXZDLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3lwcmVzc2F1dG9tYXRpb24vLi9jeXByZXNzL2UyZS9Mb2dpbi5jeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZGVzY3JpYmUoJ3RlbXBsYXRlIGZpcnN0JywgKCkgPT4ge1xyXG4gICAgaXQoJ3Bhc3NlcycsICgpID0+IHtcclxuICAgICAgY3kudmlzaXQoJ2h0dHBzOi8vaW52by5kZXYudGVsZXRlYWNoZXJzLnVzL3BvcnRhbC9sb2dpbi5jeXByZXNzLmlvJyk7XHJcbiAgICAgIGN5LndhaXQoNTAwMCk7XHJcbiAgICAgIGN5LmdldCgnaW5wdXRbbmFtZT11c2VybmFtZV0nKS50eXBlKFwibWFkaHVsYXRoYStpbnZvQGVuc2Fyc29sdXRpb25zLmNvbVwiKTtcclxuICAgICAgY3kuZ2V0KCdpbnB1dFtuYW1lPXBhc3N3b3JkXScpLnR5cGUoXCJUZWxlQDEyM1wiKTtcclxuICAgICAgY3kuZ2V0KCdidXR0b25bdHlwZT1zdWJtaXRdJykuY2xpY2soKTtcclxuICAgICAgXHJcbiAgICB9KVxyXG59KSJdLCJuYW1lcyI6WyJkZXNjcmliZSIsIml0IiwiY3kiLCJ2aXNpdCIsIndhaXQiLCJnZXQiLCJ0eXBlIiwiY2xpY2siXSwic291cmNlUm9vdCI6IiJ9