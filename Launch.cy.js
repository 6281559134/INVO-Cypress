/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./cypress/e2e/Variables.cy.js":
/*!*************************************!*\
  !*** ./cypress/e2e/Variables.cy.js ***!
  \*************************************/
/***/ (() => {



const desiredDate = '2023-09-13';

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************************!*\
  !*** ./cypress/e2e/Launch.cy.js ***!
  \**********************************/


__webpack_require__(/*! ./Variables.cy */ "./cypress/e2e/Variables.cy.js");
describe('template first', () => {
  it('passes', () => {
    cy.wait(5000);
    cy.visit('https://invo.dev.teleteachers.us/portal/login.cypress.io');
    cy.wait(5000);
    cy.get('input[name=username]').type("madhulatha+invo@ensarsolutions.com");
    cy.get('input[name=password]').type("Tele@123");
    cy.get('button[type=submit]').click();
    cy.wait(5000);
    cy.get('a[href="/portal/schedule"]').click({
      force: true
    });
    cy.wait(5000);
    cy.get('button[title="month view"]').click();
    cy.get('.fc-icon.fc-icon-chevron-left').click();
    cy.get('.fc-icon.fc-icon-chevron-left').click();
    const desiredDate = '2023-09-06';
    cy.wait(5000);
    cy.wait(5000);
    cy.get(`[data-date="${desiredDate}"]`).click();
    //cy.contains('span', '12:00 AM', { normalizeWhitespace: true }).click({force: true});
    //cy.get('div[class="ant-modal-footer"] button:nth-child(1)').click();
    cy.contains('Notes').click();
    cy.get('textarea[name="sessionClients.0.notesPlan"]').type('None');
    cy.get('div[name="medicationId"] div[class="ant-select-selector"]').click();
    cy.get('div[title="Refused to take"] div[class="ant-select-item-option-content"]').click();
    cy.get('div[name="sessionClients.0.present"] span[class="ant-select-selection-item"]').click();
    //cy.get('div.ant-select-item.ant-select-item-option.ant-select-item-option-active div.ant-select-item-option-content').click();

    //     cy.get('div[name="sessionClients.0.present"] span.ant-select-selection-item')
    // .contains('Present')
    // .click();
    cy.get('div.ant-select-dropdown') // Replace with the appropriate selector for the dropdown
    .find('div.rc-virtual-list-holder div.ant-select-item-option-content').contains('Absent').click();
    cy.wait(5000);
    cy.wait(5000);
    cy.get('div[name="sessionClients.0.clientAbsenceReasonId"] div[class="ant-select-selector"]').click();
    cy.get('div[title="Absent - Notice"] div[class="ant-select-item-option-content"]').click();
    cy.contains('Save & Document').click();
    cy.wait(5000);
    cy.wait(5000);
    cy.get('canvas[width="300"]').type('.');
    cy.wait(5000);
    //   cy.contains('Document').click( {force: true});
    cy.get('div[class="ant-modal-footer"] button:nth-child(2)').click({
      force: true
    });
    cy.wait(5000);
    cy.wait(5000);
  });
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUIsQ0FBQyxDQUFDRixLQUFLLENBQUMsQ0FBQztJQUN0Q0wsRUFBRSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2JELEVBQUUsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQztJQUViRCxFQUFFLENBQUNHLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDQyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ3ZDSixFQUFFLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDZjtJQUNFRCxFQUFFLENBQUNHLEdBQUcsQ0FBQyxtREFBbUQsQ0FBQyxDQUFDRSxLQUFLLENBQUU7TUFBQ0MsS0FBSyxFQUFFO0lBQUksQ0FBQyxDQUFDO0lBQ2pGTixFQUFFLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDYkQsRUFBRSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDO0VBbUJmLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3lwcmVzc2F1dG9tYXRpb24vLi9jeXByZXNzL2UyZS9WYXJpYWJsZXMuY3kuanMiLCJ3ZWJwYWNrOi8vY3lwcmVzc2F1dG9tYXRpb24vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY3lwcmVzc2F1dG9tYXRpb24vLi9jeXByZXNzL2UyZS9MYXVuY2guY3kuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZGVzaXJlZERhdGUgPSAnMjAyMy0wOS0xMyc7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCAnLi9WYXJpYWJsZXMuY3knO1xyXG5kZXNjcmliZSgndGVtcGxhdGUgZmlyc3QnLCAoKSA9PiB7XHJcbiAgICBpdCgncGFzc2VzJywgKCkgPT4ge1xyXG4gICAgICBjeS53YWl0KDUwMDApO1xyXG4gICAgICBjeS52aXNpdCgnaHR0cHM6Ly9pbnZvLmRldi50ZWxldGVhY2hlcnMudXMvcG9ydGFsL2xvZ2luLmN5cHJlc3MuaW8nKTtcclxuICAgICAgY3kud2FpdCg1MDAwKTtcclxuICAgICAgY3kuZ2V0KCdpbnB1dFtuYW1lPXVzZXJuYW1lXScpLnR5cGUoXCJtYWRodWxhdGhhK2ludm9AZW5zYXJzb2x1dGlvbnMuY29tXCIpO1xyXG4gICAgICBjeS5nZXQoJ2lucHV0W25hbWU9cGFzc3dvcmRdJykudHlwZShcIlRlbGVAMTIzXCIpO1xyXG4gICAgICBjeS5nZXQoJ2J1dHRvblt0eXBlPXN1Ym1pdF0nKS5jbGljaygpO1xyXG4gICAgICBjeS53YWl0KDUwMDApO1xyXG4gICAgICBjeS5nZXQoJ2FbaHJlZj1cIi9wb3J0YWwvc2NoZWR1bGVcIl0nKS5jbGljayh7IGZvcmNlOiB0cnVlIH0pO1xyXG4gICAgICBjeS53YWl0KDUwMDApO1xyXG4gICAgICBjeS5nZXQoJ2J1dHRvblt0aXRsZT1cIm1vbnRoIHZpZXdcIl0nKS5jbGljaygpO1xyXG4gICAgICBjeS5nZXQoJy5mYy1pY29uLmZjLWljb24tY2hldnJvbi1sZWZ0JykuY2xpY2soKTtcclxuICAgICAgY3kuZ2V0KCcuZmMtaWNvbi5mYy1pY29uLWNoZXZyb24tbGVmdCcpLmNsaWNrKCk7XHJcblxyXG4gICAgICBjb25zdCBkZXNpcmVkRGF0ZSA9ICcyMDIzLTA5LTA2JztcclxuICAgICAgXHJcbiAgICAgIGN5LndhaXQoNTAwMCk7XHJcbiAgICAgIGN5LndhaXQoNTAwMCk7XHJcbiAgICAgIGN5LmdldChgW2RhdGEtZGF0ZT1cIiR7ZGVzaXJlZERhdGV9XCJdYCkuY2xpY2soKTtcclxuICAgICAgLy9jeS5jb250YWlucygnc3BhbicsICcxMjowMCBBTScsIHsgbm9ybWFsaXplV2hpdGVzcGFjZTogdHJ1ZSB9KS5jbGljayh7Zm9yY2U6IHRydWV9KTtcclxuICAgICAgLy9jeS5nZXQoJ2RpdltjbGFzcz1cImFudC1tb2RhbC1mb290ZXJcIl0gYnV0dG9uOm50aC1jaGlsZCgxKScpLmNsaWNrKCk7XHJcbiAgICAgIGN5LmNvbnRhaW5zKCdOb3RlcycpLmNsaWNrKCk7XHJcbiAgICAgIGN5LmdldCgndGV4dGFyZWFbbmFtZT1cInNlc3Npb25DbGllbnRzLjAubm90ZXNQbGFuXCJdJykudHlwZSgnTm9uZScpO1xyXG4gICAgICBjeS5nZXQoJ2RpdltuYW1lPVwibWVkaWNhdGlvbklkXCJdIGRpdltjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0b3JcIl0nKS5jbGljaygpO1xyXG4gICAgICBjeS5nZXQoJ2Rpdlt0aXRsZT1cIlJlZnVzZWQgdG8gdGFrZVwiXSBkaXZbY2xhc3M9XCJhbnQtc2VsZWN0LWl0ZW0tb3B0aW9uLWNvbnRlbnRcIl0nKS5jbGljaygpO1xyXG4gICAgICBjeS5nZXQoJ2RpdltuYW1lPVwic2Vzc2lvbkNsaWVudHMuMC5wcmVzZW50XCJdIHNwYW5bY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGlvbi1pdGVtXCJdJykuY2xpY2soKTtcclxuICAgICAgLy9jeS5nZXQoJ2Rpdi5hbnQtc2VsZWN0LWl0ZW0uYW50LXNlbGVjdC1pdGVtLW9wdGlvbi5hbnQtc2VsZWN0LWl0ZW0tb3B0aW9uLWFjdGl2ZSBkaXYuYW50LXNlbGVjdC1pdGVtLW9wdGlvbi1jb250ZW50JykuY2xpY2soKTtcclxuICAgXHJcbiAgLy8gICAgIGN5LmdldCgnZGl2W25hbWU9XCJzZXNzaW9uQ2xpZW50cy4wLnByZXNlbnRcIl0gc3Bhbi5hbnQtc2VsZWN0LXNlbGVjdGlvbi1pdGVtJylcclxuICAvLyAuY29udGFpbnMoJ1ByZXNlbnQnKVxyXG4gIC8vIC5jbGljaygpO1xyXG4gIGN5LmdldCgnZGl2LmFudC1zZWxlY3QtZHJvcGRvd24nKSAgLy8gUmVwbGFjZSB3aXRoIHRoZSBhcHByb3ByaWF0ZSBzZWxlY3RvciBmb3IgdGhlIGRyb3Bkb3duXHJcbiAgLmZpbmQoJ2Rpdi5yYy12aXJ0dWFsLWxpc3QtaG9sZGVyIGRpdi5hbnQtc2VsZWN0LWl0ZW0tb3B0aW9uLWNvbnRlbnQnKVxyXG4gIC5jb250YWlucygnQWJzZW50JylcclxuICAuY2xpY2soKTtcclxuXHJcbiAgY3kud2FpdCg1MDAwKTtcclxuICBjeS53YWl0KDUwMDApO1xyXG4gIGN5LmdldCgnZGl2W25hbWU9XCJzZXNzaW9uQ2xpZW50cy4wLmNsaWVudEFic2VuY2VSZWFzb25JZFwiXSBkaXZbY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdG9yXCJdJykuY2xpY2soKTtcclxuICBjeS5nZXQoJ2Rpdlt0aXRsZT1cIkFic2VudCAtIE5vdGljZVwiXSBkaXZbY2xhc3M9XCJhbnQtc2VsZWN0LWl0ZW0tb3B0aW9uLWNvbnRlbnRcIl0nKS5jbGljaygpO1xyXG5cclxuICAgICAgY3kuY29udGFpbnMoJ1NhdmUgJiBEb2N1bWVudCcpLmNsaWNrKCk7XHJcbiAgICAgIGN5LndhaXQoNTAwMCk7XHJcbiAgICAgIGN5LndhaXQoNTAwMCk7XHJcbiAgICBcclxuICAgICAgY3kuZ2V0KCdjYW52YXNbd2lkdGg9XCIzMDBcIl0nKS50eXBlKCcuJyk7XHJcbiAgICAgIGN5LndhaXQoNTAwMCk7XHJcbiAgICAvLyAgIGN5LmNvbnRhaW5zKCdEb2N1bWVudCcpLmNsaWNrKCB7Zm9yY2U6IHRydWV9KTtcclxuICAgICAgY3kuZ2V0KCdkaXZbY2xhc3M9XCJhbnQtbW9kYWwtZm9vdGVyXCJdIGJ1dHRvbjpudGgtY2hpbGQoMiknKS5jbGljaygge2ZvcmNlOiB0cnVlfSk7XHJcbiAgICAgIGN5LndhaXQoNTAwMCk7XHJcbiAgICAgIGN5LndhaXQoNTAwMCk7XHJcblxyXG4gIFxyXG5cclxuXHJcbiAgXHJcblxyXG5cclxuICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICBcclxuICAgICAgXHJcblxyXG5cclxuICAgIH0pXHJcbn0pIl0sIm5hbWVzIjpbImRlc2lyZWREYXRlIiwicmVxdWlyZSIsImRlc2NyaWJlIiwiaXQiLCJjeSIsIndhaXQiLCJ2aXNpdCIsImdldCIsInR5cGUiLCJjbGljayIsImZvcmNlIiwiY29udGFpbnMiLCJmaW5kIl0sInNvdXJjZVJvb3QiOiIifQ==