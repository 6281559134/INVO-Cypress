/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./cypress/e2e/Discipline.cy.js ***!
  \**************************************/


describe('template first', () => {
  it('passes', () => {
    cy.visit('https://invo.dev.teleteachers.us/portal/login.cypress.io');
    cy.wait(5000);
    cy.get('input[name=username]').type("madhulatha+invo@ensarsolutions.com");
    cy.get('input[name=password]').type("Tele@123");
    cy.get('button[type=submit]').click();
    cy.wait(5000);
    cy.get('.ant-menu-submenu-title').invoke('attr', 'style', 'visibility: visible;');
    cy.get('.ant-menu-submenu-title').click({
      force: true
    });
    cy.get('a[href="/portal/setup/discipline"]').click({
      force: true
    });
    cy.contains('Create').click();
    cy.get('input[placeholder="Discipline Name"]').type('A1Discipline');
    cy.contains('Save').click();
  });
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGlzY2lwbGluZS5jeS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBQSxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsTUFBTTtFQUM3QkMsRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNO0lBQ2pCQyxFQUFFLENBQUNDLEtBQUssQ0FBQywwREFBMEQsQ0FBQztJQUNwRUQsRUFBRSxDQUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2JGLEVBQUUsQ0FBQ0csR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUNDLElBQUksQ0FBQyxvQ0FBb0MsQ0FBQztJQUN6RUosRUFBRSxDQUFDRyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUMvQ0osRUFBRSxDQUFDRyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQ0UsS0FBSyxDQUFDLENBQUM7SUFDckNMLEVBQUUsQ0FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNiRixFQUFFLENBQUNHLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDRyxNQUFNLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxzQkFBc0IsQ0FBQztJQUNqRk4sRUFBRSxDQUFDRyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQ0UsS0FBSyxDQUFFO01BQUNFLEtBQUssRUFBRTtJQUFJLENBQUMsQ0FBQztJQUN2RFAsRUFBRSxDQUFDRyxHQUFHLENBQUMsb0NBQW9DLENBQUMsQ0FBQ0UsS0FBSyxDQUFDO01BQUVFLEtBQUssRUFBRTtJQUFLLENBQUMsQ0FBQztJQUNuRVAsRUFBRSxDQUFDUSxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUNILEtBQUssQ0FBQyxDQUFDO0lBQzdCTCxFQUFFLENBQUNHLEdBQUcsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDQyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQ25FSixFQUFFLENBQUNRLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQ0gsS0FBSyxDQUFDLENBQUM7RUFLN0IsQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jeXByZXNzYXV0b21hdGlvbi8uL2N5cHJlc3MvZTJlL0Rpc2NpcGxpbmUuY3kuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZGVzY3JpYmUoJ3RlbXBsYXRlIGZpcnN0JywgKCkgPT4ge1xyXG4gICAgaXQoJ3Bhc3NlcycsICgpID0+IHtcclxuICAgICAgY3kudmlzaXQoJ2h0dHBzOi8vaW52by5kZXYudGVsZXRlYWNoZXJzLnVzL3BvcnRhbC9sb2dpbi5jeXByZXNzLmlvJyk7XHJcbiAgICAgIGN5LndhaXQoNTAwMCk7XHJcbiAgICAgIGN5LmdldCgnaW5wdXRbbmFtZT11c2VybmFtZV0nKS50eXBlKFwibWFkaHVsYXRoYStpbnZvQGVuc2Fyc29sdXRpb25zLmNvbVwiKTtcclxuICAgICAgY3kuZ2V0KCdpbnB1dFtuYW1lPXBhc3N3b3JkXScpLnR5cGUoXCJUZWxlQDEyM1wiKTtcclxuICAgICAgY3kuZ2V0KCdidXR0b25bdHlwZT1zdWJtaXRdJykuY2xpY2soKTtcclxuICAgICAgY3kud2FpdCg1MDAwKTtcclxuICAgICAgY3kuZ2V0KCcuYW50LW1lbnUtc3VibWVudS10aXRsZScpLmludm9rZSgnYXR0cicsICdzdHlsZScsICd2aXNpYmlsaXR5OiB2aXNpYmxlOycpO1xyXG4gICAgICBjeS5nZXQoJy5hbnQtbWVudS1zdWJtZW51LXRpdGxlJykuY2xpY2soIHtmb3JjZTogdHJ1ZX0pO1xyXG4gICAgICBjeS5nZXQoJ2FbaHJlZj1cIi9wb3J0YWwvc2V0dXAvZGlzY2lwbGluZVwiXScpLmNsaWNrKHsgZm9yY2U6IHRydWUgfSk7XHJcbiAgICAgIGN5LmNvbnRhaW5zKCdDcmVhdGUnKS5jbGljaygpO1xyXG4gICAgICBjeS5nZXQoJ2lucHV0W3BsYWNlaG9sZGVyPVwiRGlzY2lwbGluZSBOYW1lXCJdJykudHlwZSgnQTFEaXNjaXBsaW5lJyk7XHJcbiAgICAgIGN5LmNvbnRhaW5zKCdTYXZlJykuY2xpY2soKTtcclxuXHJcblxyXG5cclxuXHJcbiAgICB9KVxyXG59KSJdLCJuYW1lcyI6WyJkZXNjcmliZSIsIml0IiwiY3kiLCJ2aXNpdCIsIndhaXQiLCJnZXQiLCJ0eXBlIiwiY2xpY2siLCJpbnZva2UiLCJmb3JjZSIsImNvbnRhaW5zIl0sInNvdXJjZVJvb3QiOiIifQ==