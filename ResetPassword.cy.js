/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!*****************************************!*\
  !*** ./cypress/e2e/ResetPassword.cy.js ***!
  \*****************************************/


describe('template first', () => {
  it('passes', () => {
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
    cy.get('button[class="ant-btn css-ibennm ant-btn-primary"]').click({
      force: true
    });
    cy.wait(5000);
    cy.get('input[placeholder="Enter Title"]').type("Hey");
    cy.wait(5000);
    cy.get('[id*="rc_select_"]').eq(3).click();
    cy.wait(5000);
    const serviceName = 'AutomationService1'; // Make sure this is declared and has a value

    cy.get('div[title="' + serviceName + '"] div[class="ant-select-item-option-content"]').should('exist').scrollIntoView().click({
      force: true
    });
    cy.get('input[placeholder="Select Start Date"]:first').should('be.visible').click();
    //   cy.get('.ant-picker-prev-icon').click();
    //   cy.get('.ant-picker-prev-icon').click();
    const desiredDate = '2023-11-02';

    // Assuming your date picker opens on clicking an input field

    // Replace the following with the actual interactions needed for your date picker
    cy.get('div[class="ant-picker-cell-inner"]').find(desiredDate) // Use Cypress contains to find the specific date
    .click();
    cy.wait(5000);
    cy.get('[id*="rc_select_"]').eq(4).click();
    cy.get('div[title="School"] div[class="ant-select-item-option-content"]').click({
      force: true
    });
    cy.wait(5000);
    cy.get('[id*="rc_select_"]').eq(6).click({
      force: true
    });
    cy.get('div[title="Charter Schools USA"] div[class="ant-select-item-option-content"]').click({
      force: true
    });
    cy.wait(5000);
    cy.get('div[name="appointmentDivisions"] div[class="ant-select-selection-overflow"]').click({
      force: true
    });
    cy.get('div[title="All"] div[class="ant-select-item-option-content"]').click({
      force: true
    });
    cy.wait(5000);
    cy.get('div[name="appointmentClients"] div[class="ant-select-selection-overflow"]').click({
      force: true
    });
    cy.get('div[title="A TEST CLIENT CREEKSIDE CSUSA"] div[class="ant-select-item-option-content"]]').click({
      force: true
    });
    cy.wait(5000);
    cy.get('div[class="ant-modal-footer"] button:nth-child(1) span:nth-child(1)').click({
      force: true
    });
  });
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsQ0FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNiRixFQUFFLENBQUNHLEdBQUcsQ0FBQyw2RUFBNkUsQ0FBQyxDQUFDRSxLQUFLLENBQUU7TUFBQ0MsS0FBSyxFQUFFO0lBQUksQ0FBQyxDQUFDO0lBQzNHTixFQUFFLENBQUNHLEdBQUcsQ0FBQyw4REFBOEQsQ0FBQyxDQUFDRSxLQUFLLENBQUM7TUFBRUMsS0FBSyxFQUFFO0lBQUssQ0FBQyxDQUFDO0lBQzdGTixFQUFFLENBQUNFLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDYkYsRUFBRSxDQUFDRyxHQUFHLENBQUMsMkVBQTJFLENBQUMsQ0FBQ0UsS0FBSyxDQUFFO01BQUNDLEtBQUssRUFBRTtJQUFJLENBQUMsQ0FBQztJQUN6R04sRUFBRSxDQUFDRyxHQUFHLENBQUMseUZBQXlGLENBQUMsQ0FBQ0UsS0FBSyxDQUFDO01BQUVDLEtBQUssRUFBRTtJQUFLLENBQUMsQ0FBQztJQUN4SE4sRUFBRSxDQUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDO0lBS2JGLEVBQUUsQ0FBQ0csR0FBRyxDQUFDLHFFQUFxRSxDQUFDLENBQUNFLEtBQUssQ0FBQztNQUFFQyxLQUFLLEVBQUU7SUFBSyxDQUFDLENBQUM7RUFPdEcsQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jeXByZXNzYXV0b21hdGlvbi8uL2N5cHJlc3MvZTJlL1Jlc2V0UGFzc3dvcmQuY3kuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZGVzY3JpYmUoJ3RlbXBsYXRlIGZpcnN0JywgKCkgPT4ge1xyXG4gICAgaXQoJ3Bhc3NlcycsICgpID0+IHtcclxuICAgICAgY3kudmlzaXQoJ2h0dHBzOi8vaW52by5kZXYudGVsZXRlYWNoZXJzLnVzL3BvcnRhbC9sb2dpbi5jeXByZXNzLmlvJyk7XHJcbiAgICAgIGN5LndhaXQoNTAwMCk7XHJcbiAgICAgIGN5LmdldCgnaW5wdXRbbmFtZT11c2VybmFtZV0nKS50eXBlKFwibWFkaHVsYXRoYStpbnZvQGVuc2Fyc29sdXRpb25zLmNvbVwiKTtcclxuICAgICAgY3kuZ2V0KCdpbnB1dFtuYW1lPXBhc3N3b3JkXScpLnR5cGUoXCJUZWxlQDEyM1wiKTtcclxuICAgICAgY3kuZ2V0KCdidXR0b25bdHlwZT1zdWJtaXRdJykuY2xpY2soKTtcclxuICAgICAgY3kud2FpdCg1MDAwKTtcclxuICAgICAgY3kuZ2V0KCdhW2hyZWY9XCIvcG9ydGFsL3NjaGVkdWxlXCJdJykuY2xpY2soeyBmb3JjZTogdHJ1ZSB9KTtcclxuICAgICAgY3kud2FpdCg1MDAwKTtcclxuICAgICAgY3kuZ2V0KCdidXR0b25bY2xhc3M9XCJhbnQtYnRuIGNzcy1pYmVubm0gYW50LWJ0bi1wcmltYXJ5XCJdJykuY2xpY2soeyBmb3JjZTogdHJ1ZSB9KTtcclxuICAgICAgY3kud2FpdCg1MDAwKTtcclxuICAgICAgY3kuZ2V0KCdpbnB1dFtwbGFjZWhvbGRlcj1cIkVudGVyIFRpdGxlXCJdJykudHlwZShcIkhleVwiKTtcclxuICAgICAgY3kud2FpdCg1MDAwKTtcclxuICAgICAgXHJcbiAgICAgIGN5LmdldCgnW2lkKj1cInJjX3NlbGVjdF9cIl0nKS5lcSgzKS5jbGljaygpO1xyXG4gICAgICBjeS53YWl0KDUwMDApO1xyXG4gICAgICBjb25zdCBzZXJ2aWNlTmFtZSA9ICdBdXRvbWF0aW9uU2VydmljZTEnOyAvLyBNYWtlIHN1cmUgdGhpcyBpcyBkZWNsYXJlZCBhbmQgaGFzIGEgdmFsdWVcclxuXHJcbiAgICAgIGN5LmdldCgnZGl2W3RpdGxlPVwiJyArIHNlcnZpY2VOYW1lICsgJ1wiXSBkaXZbY2xhc3M9XCJhbnQtc2VsZWN0LWl0ZW0tb3B0aW9uLWNvbnRlbnRcIl0nKVxyXG4gIC5zaG91bGQoJ2V4aXN0JylcclxuICAuc2Nyb2xsSW50b1ZpZXcoKVxyXG4gIC5jbGljayh7IGZvcmNlOiB0cnVlIH0pO1xyXG5cclxuICBjeS5nZXQoJ2lucHV0W3BsYWNlaG9sZGVyPVwiU2VsZWN0IFN0YXJ0IERhdGVcIl06Zmlyc3QnKS5zaG91bGQoJ2JlLnZpc2libGUnKS5jbGljaygpO1xyXG4gIC8vICAgY3kuZ2V0KCcuYW50LXBpY2tlci1wcmV2LWljb24nKS5jbGljaygpO1xyXG4gIC8vICAgY3kuZ2V0KCcuYW50LXBpY2tlci1wcmV2LWljb24nKS5jbGljaygpO1xyXG4gIGNvbnN0IGRlc2lyZWREYXRlID0gJzIwMjMtMTEtMDInO1xyXG5cclxuLy8gQXNzdW1pbmcgeW91ciBkYXRlIHBpY2tlciBvcGVucyBvbiBjbGlja2luZyBhbiBpbnB1dCBmaWVsZFxyXG5cclxuXHJcbi8vIFJlcGxhY2UgdGhlIGZvbGxvd2luZyB3aXRoIHRoZSBhY3R1YWwgaW50ZXJhY3Rpb25zIG5lZWRlZCBmb3IgeW91ciBkYXRlIHBpY2tlclxyXG5jeS5nZXQoJ2RpdltjbGFzcz1cImFudC1waWNrZXItY2VsbC1pbm5lclwiXScpXHJcbi5maW5kKGRlc2lyZWREYXRlKSAvLyBVc2UgQ3lwcmVzcyBjb250YWlucyB0byBmaW5kIHRoZSBzcGVjaWZpYyBkYXRlXHJcbi5jbGljaygpO1xyXG4gICAgY3kud2FpdCg1MDAwKTtcclxuXHJcblxyXG4gICAgICBjeS5nZXQoJ1tpZCo9XCJyY19zZWxlY3RfXCJdJykuZXEoNCkuY2xpY2soKTtcclxuICAgICAgY3kuZ2V0KCdkaXZbdGl0bGU9XCJTY2hvb2xcIl0gZGl2W2NsYXNzPVwiYW50LXNlbGVjdC1pdGVtLW9wdGlvbi1jb250ZW50XCJdJykuY2xpY2soeyBmb3JjZTogdHJ1ZSB9KTtcclxuICAgICAgY3kud2FpdCg1MDAwKTtcclxuICAgICAgY3kuZ2V0KCdbaWQqPVwicmNfc2VsZWN0X1wiXScpLmVxKDYpLmNsaWNrKCB7Zm9yY2U6IHRydWV9KTtcclxuICAgICAgY3kuZ2V0KCdkaXZbdGl0bGU9XCJDaGFydGVyIFNjaG9vbHMgVVNBXCJdIGRpdltjbGFzcz1cImFudC1zZWxlY3QtaXRlbS1vcHRpb24tY29udGVudFwiXScpLmNsaWNrKHsgZm9yY2U6IHRydWUgfSk7XHJcbiAgICAgIGN5LndhaXQoNTAwMCk7XHJcbiAgICAgIGN5LmdldCgnZGl2W25hbWU9XCJhcHBvaW50bWVudERpdmlzaW9uc1wiXSBkaXZbY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGlvbi1vdmVyZmxvd1wiXScpLmNsaWNrKCB7Zm9yY2U6IHRydWV9KTtcclxuICAgICAgY3kuZ2V0KCdkaXZbdGl0bGU9XCJBbGxcIl0gZGl2W2NsYXNzPVwiYW50LXNlbGVjdC1pdGVtLW9wdGlvbi1jb250ZW50XCJdJykuY2xpY2soeyBmb3JjZTogdHJ1ZSB9KTtcclxuICAgICAgY3kud2FpdCg1MDAwKTtcclxuICAgICAgY3kuZ2V0KCdkaXZbbmFtZT1cImFwcG9pbnRtZW50Q2xpZW50c1wiXSBkaXZbY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGlvbi1vdmVyZmxvd1wiXScpLmNsaWNrKCB7Zm9yY2U6IHRydWV9KTtcclxuICAgICAgY3kuZ2V0KCdkaXZbdGl0bGU9XCJBIFRFU1QgQ0xJRU5UIENSRUVLU0lERSBDU1VTQVwiXSBkaXZbY2xhc3M9XCJhbnQtc2VsZWN0LWl0ZW0tb3B0aW9uLWNvbnRlbnRcIl1dJykuY2xpY2soeyBmb3JjZTogdHJ1ZSB9KTtcclxuICAgICAgY3kud2FpdCg1MDAwKTtcclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgIGN5LmdldCgnZGl2W2NsYXNzPVwiYW50LW1vZGFsLWZvb3RlclwiXSBidXR0b246bnRoLWNoaWxkKDEpIHNwYW46bnRoLWNoaWxkKDEpJykuY2xpY2soeyBmb3JjZTogdHJ1ZSB9KTtcclxuICAgICBcclxuICAgICAgXHJcblxyXG5cclxuXHJcblxyXG4gICAgfSlcclxufSkiXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJpdCIsImN5IiwidmlzaXQiLCJ3YWl0IiwiZ2V0IiwidHlwZSIsImNsaWNrIiwiZm9yY2UiLCJlcSIsInNlcnZpY2VOYW1lIiwic2hvdWxkIiwic2Nyb2xsSW50b1ZpZXciLCJkZXNpcmVkRGF0ZSIsImZpbmQiXSwic291cmNlUm9vdCI6IiJ9