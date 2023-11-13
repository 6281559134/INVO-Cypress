/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!***********************************!*\
  !*** ./cypress/e2e/refdata.cy.js ***!
  \***********************************/


describe('template first', () => {
  it('passes', () => {
    cy.wait(5000);
    cy.visit('https://miyo.staging.teleteachers.us/portal/login.cypress.io');
    cy.wait(5000);
    cy.get('input[name=username]').type("navaneetha+1@ensarsolutions.com");
    cy.get('input[name=password]').type("TT_MIYO@stg123");
    cy.get('button[type=submit]').click();
    cy.wait(5000);
    cy.get('a[href="/portal/schedule"]').click({
      force: true
    });
    cy.wait(5000);
    cy.get('button[class="ant-btn css-1orapk0 ant-btn-primary"]').click({
      force: true
    });
    cy.wait(5000);
    cy.get('input[placeholder="Optional"]').type("Nidhi");
    cy.wait(5000);
    cy.get('#rc_select_23').click();
    cy.get('div[title="Direct-ser"] div[class="ant-select-item-option-content"]').click({
      force: true
    });
    cy.get('#rc_select_24').click();
    cy.get('div[title="Telehealth"] div[class="ant-select-item-option-content"]').click({
      force: true
    });
    cy.wait(5000);
    cy.get('#rc_select_26').eq(6).click({
      force: true
    });
    cy.get('div[title="Miyo Districts-1"] div[class="ant-select-item-option-content"]').click({
      force: true
    });
    cy.wait(5000);
    cy.get('div[name="appointmentClients"] div[class="ant-select-selection-overflow"]').click({
      force: true
    });
    cy.get('div[title="latha M"] div[class="ant-select-item-option-content"]').click({
      force: true
    });
    cy.wait(5000);
    //   cy.get('div[name="appointmentClients"] div[class="ant-select-selection-overflow"]').click( {force: true});
    //   cy.get('div[title="Automation Testing1"] div[class="ant-select-item-option-content"]').click({ force: true });
    //   cy.wait(5000);

    cy.get('input[placeholder="Select Start Date"][size="12"]').should('be.visible').click();
    const desiredDate = '2023-11-05';
    cy.get(`td[title="${desiredDate}"] div[class="ant-picker-cell-inner"]`).should('be.visible').click();
    cy.get('input[placeholder="Select Start Date"][name="start"]').should('be.visible').click();
    // Store the desired time in a variable
    const desiredTime = '05:00 PM';

    // Use the variable in Cypress commands
    cy.get(`input[placeholder="Select Start Date"][title="${desiredTime}"]`).should('be.visible').click();
    cy.get('button[class="ant-btn css-1orapk0 ant-btn-primary ant-btn-sm"] span').should('be.visible').click();

    // cy.get('div[class="ant-modal-footer"] button:nth-child(1) span:nth-child(1)').click({ force: true });
  });
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVmZGF0YS5jeS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNFQSxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsTUFBTTtFQUMvQkMsRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNO0lBQ2ZDLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNiRCxFQUFFLENBQUNFLEtBQUssQ0FBQyw4REFBOEQsQ0FBQztJQUN4RUYsRUFBRSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2JELEVBQUUsQ0FBQ0csR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUNDLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQztJQUN0RUosRUFBRSxDQUFDRyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQ3JESixFQUFFLENBQUNHLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDRSxLQUFLLENBQUMsQ0FBQztJQUNyQ0wsRUFBRSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2ZELEVBQUUsQ0FBQ0csR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUNFLEtBQUssQ0FBQztNQUFFQyxLQUFLLEVBQUU7SUFBSyxDQUFDLENBQUM7SUFDM0ROLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNiRCxFQUFFLENBQUNHLEdBQUcsQ0FBQyxxREFBcUQsQ0FBQyxDQUFDRSxLQUFLLENBQUM7TUFBRUMsS0FBSyxFQUFFO0lBQUssQ0FBQyxDQUFDO0lBQ3BGTixFQUFFLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDYkQsRUFBRSxDQUFDRyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyREosRUFBRSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2JELEVBQUUsQ0FBQ0csR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDRSxLQUFLLENBQUMsQ0FBQztJQUMvQkwsRUFBRSxDQUFDRyxHQUFHLENBQUMscUVBQXFFLENBQUMsQ0FBQ0UsS0FBSyxDQUFDO01BQUVDLEtBQUssRUFBRTtJQUFLLENBQUMsQ0FBQztJQUNwR04sRUFBRSxDQUFDRyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUNFLEtBQUssQ0FBQyxDQUFDO0lBQy9CTCxFQUFFLENBQUNHLEdBQUcsQ0FBQyxxRUFBcUUsQ0FBQyxDQUFDRSxLQUFLLENBQUM7TUFBRUMsS0FBSyxFQUFFO0lBQUssQ0FBQyxDQUFDO0lBQ3BHTixFQUFFLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDYkQsRUFBRSxDQUFDRyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUNJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQ0YsS0FBSyxDQUFFO01BQUNDLEtBQUssRUFBRTtJQUFJLENBQUMsQ0FBQztJQUNuRE4sRUFBRSxDQUFDRyxHQUFHLENBQUMsMkVBQTJFLENBQUMsQ0FBQ0UsS0FBSyxDQUFDO01BQUVDLEtBQUssRUFBRTtJQUFLLENBQUMsQ0FBQztJQUMxR04sRUFBRSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2JELEVBQUUsQ0FBQ0csR0FBRyxDQUFDLDJFQUEyRSxDQUFDLENBQUNFLEtBQUssQ0FBRTtNQUFDQyxLQUFLLEVBQUU7SUFBSSxDQUFDLENBQUM7SUFDekdOLEVBQUUsQ0FBQ0csR0FBRyxDQUFDLGtFQUFrRSxDQUFDLENBQUNFLEtBQUssQ0FBQztNQUFFQyxLQUFLLEVBQUU7SUFBSyxDQUFDLENBQUM7SUFDakdOLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNmO0lBQ0E7SUFDQTs7SUFFRUQsRUFBRSxDQUFDRyxHQUFHLENBQUMsbURBQW1ELENBQUMsQ0FBQ0ssTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDSCxLQUFLLENBQUMsQ0FBQztJQUN4RixNQUFNSSxXQUFXLEdBQUcsWUFBWTtJQUNoQ1QsRUFBRSxDQUFDRyxHQUFHLENBQUUsYUFBWU0sV0FBWSx1Q0FBc0MsQ0FBQyxDQUFDRCxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUNILEtBQUssQ0FBQyxDQUFDO0lBRXBHTCxFQUFFLENBQUNHLEdBQUcsQ0FBQyxzREFBc0QsQ0FBQyxDQUFDSyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUNILEtBQUssQ0FBQyxDQUFDO0lBQzNGO0lBQ04sTUFBTUssV0FBVyxHQUFHLFVBQVU7O0lBRTlCO0lBQ0FWLEVBQUUsQ0FBQ0csR0FBRyxDQUFFLGlEQUFnRE8sV0FBWSxJQUFHLENBQUMsQ0FBQ0YsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDSCxLQUFLLENBQUMsQ0FBQztJQUNyR0wsRUFBRSxDQUFDRyxHQUFHLENBQUMscUVBQXFFLENBQUMsQ0FBQ0ssTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDSCxLQUFLLENBQUMsQ0FBQzs7SUFLckc7RUFPRCxDQUFDLENBQUM7QUFDTixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2N5cHJlc3NhdXRvbWF0aW9uLy4vY3lwcmVzcy9lMmUvcmVmZGF0YS5jeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBkZXNjcmliZSgndGVtcGxhdGUgZmlyc3QnLCAoKSA9PiB7XHJcbiAgICBpdCgncGFzc2VzJywgKCkgPT4ge1xyXG4gICAgICAgIGN5LndhaXQoNTAwMCk7XHJcbiAgICAgICAgY3kudmlzaXQoJ2h0dHBzOi8vbWl5by5zdGFnaW5nLnRlbGV0ZWFjaGVycy51cy9wb3J0YWwvbG9naW4uY3lwcmVzcy5pbycpO1xyXG4gICAgICAgIGN5LndhaXQoNTAwMCk7XHJcbiAgICAgICAgY3kuZ2V0KCdpbnB1dFtuYW1lPXVzZXJuYW1lXScpLnR5cGUoXCJuYXZhbmVldGhhKzFAZW5zYXJzb2x1dGlvbnMuY29tXCIpO1xyXG4gICAgICAgIGN5LmdldCgnaW5wdXRbbmFtZT1wYXNzd29yZF0nKS50eXBlKFwiVFRfTUlZT0BzdGcxMjNcIik7XHJcbiAgICAgICAgY3kuZ2V0KCdidXR0b25bdHlwZT1zdWJtaXRdJykuY2xpY2soKTtcclxuICAgICAgICBjeS53YWl0KDUwMDApO1xyXG4gICAgICBjeS5nZXQoJ2FbaHJlZj1cIi9wb3J0YWwvc2NoZWR1bGVcIl0nKS5jbGljayh7IGZvcmNlOiB0cnVlIH0pO1xyXG4gICAgICBjeS53YWl0KDUwMDApO1xyXG4gICAgICBjeS5nZXQoJ2J1dHRvbltjbGFzcz1cImFudC1idG4gY3NzLTFvcmFwazAgYW50LWJ0bi1wcmltYXJ5XCJdJykuY2xpY2soeyBmb3JjZTogdHJ1ZSB9KTtcclxuICAgICAgY3kud2FpdCg1MDAwKTtcclxuICAgICAgY3kuZ2V0KCdpbnB1dFtwbGFjZWhvbGRlcj1cIk9wdGlvbmFsXCJdJykudHlwZShcIk5pZGhpXCIpO1xyXG4gICAgICBjeS53YWl0KDUwMDApO1xyXG4gICAgICBjeS5nZXQoJyNyY19zZWxlY3RfMjMnKS5jbGljaygpOyBcclxuICAgICAgY3kuZ2V0KCdkaXZbdGl0bGU9XCJEaXJlY3Qtc2VyXCJdIGRpdltjbGFzcz1cImFudC1zZWxlY3QtaXRlbS1vcHRpb24tY29udGVudFwiXScpLmNsaWNrKHsgZm9yY2U6IHRydWUgfSk7XHJcbiAgICAgIGN5LmdldCgnI3JjX3NlbGVjdF8yNCcpLmNsaWNrKCk7XHJcbiAgICAgIGN5LmdldCgnZGl2W3RpdGxlPVwiVGVsZWhlYWx0aFwiXSBkaXZbY2xhc3M9XCJhbnQtc2VsZWN0LWl0ZW0tb3B0aW9uLWNvbnRlbnRcIl0nKS5jbGljayh7IGZvcmNlOiB0cnVlIH0pO1xyXG4gICAgICBjeS53YWl0KDUwMDApO1xyXG4gICAgICBjeS5nZXQoJyNyY19zZWxlY3RfMjYnKS5lcSg2KS5jbGljaygge2ZvcmNlOiB0cnVlfSk7XHJcbiAgICAgIGN5LmdldCgnZGl2W3RpdGxlPVwiTWl5byBEaXN0cmljdHMtMVwiXSBkaXZbY2xhc3M9XCJhbnQtc2VsZWN0LWl0ZW0tb3B0aW9uLWNvbnRlbnRcIl0nKS5jbGljayh7IGZvcmNlOiB0cnVlIH0pO1xyXG4gICAgICBjeS53YWl0KDUwMDApO1xyXG4gICAgICBjeS5nZXQoJ2RpdltuYW1lPVwiYXBwb2ludG1lbnRDbGllbnRzXCJdIGRpdltjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0aW9uLW92ZXJmbG93XCJdJykuY2xpY2soIHtmb3JjZTogdHJ1ZX0pO1xyXG4gICAgICBjeS5nZXQoJ2Rpdlt0aXRsZT1cImxhdGhhIE1cIl0gZGl2W2NsYXNzPVwiYW50LXNlbGVjdC1pdGVtLW9wdGlvbi1jb250ZW50XCJdJykuY2xpY2soeyBmb3JjZTogdHJ1ZSB9KTtcclxuICAgICAgY3kud2FpdCg1MDAwKTtcclxuICAgIC8vICAgY3kuZ2V0KCdkaXZbbmFtZT1cImFwcG9pbnRtZW50Q2xpZW50c1wiXSBkaXZbY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGlvbi1vdmVyZmxvd1wiXScpLmNsaWNrKCB7Zm9yY2U6IHRydWV9KTtcclxuICAgIC8vICAgY3kuZ2V0KCdkaXZbdGl0bGU9XCJBdXRvbWF0aW9uIFRlc3RpbmcxXCJdIGRpdltjbGFzcz1cImFudC1zZWxlY3QtaXRlbS1vcHRpb24tY29udGVudFwiXScpLmNsaWNrKHsgZm9yY2U6IHRydWUgfSk7XHJcbiAgICAvLyAgIGN5LndhaXQoNTAwMCk7XHJcblxyXG4gICAgICBjeS5nZXQoJ2lucHV0W3BsYWNlaG9sZGVyPVwiU2VsZWN0IFN0YXJ0IERhdGVcIl1bc2l6ZT1cIjEyXCJdJykuc2hvdWxkKCdiZS52aXNpYmxlJykuY2xpY2soKTtcclxuICAgICAgY29uc3QgZGVzaXJlZERhdGUgPSAnMjAyMy0xMS0wNSc7XHJcbiAgICAgIGN5LmdldChgdGRbdGl0bGU9XCIke2Rlc2lyZWREYXRlfVwiXSBkaXZbY2xhc3M9XCJhbnQtcGlja2VyLWNlbGwtaW5uZXJcIl1gKS5zaG91bGQoJ2JlLnZpc2libGUnKS5jbGljaygpO1xyXG5cclxuICAgICAgY3kuZ2V0KCdpbnB1dFtwbGFjZWhvbGRlcj1cIlNlbGVjdCBTdGFydCBEYXRlXCJdW25hbWU9XCJzdGFydFwiXScpLnNob3VsZCgnYmUudmlzaWJsZScpLmNsaWNrKCk7XHJcbiAgICAgIC8vIFN0b3JlIHRoZSBkZXNpcmVkIHRpbWUgaW4gYSB2YXJpYWJsZVxyXG5jb25zdCBkZXNpcmVkVGltZSA9ICcwNTowMCBQTSc7XHJcblxyXG4vLyBVc2UgdGhlIHZhcmlhYmxlIGluIEN5cHJlc3MgY29tbWFuZHNcclxuY3kuZ2V0KGBpbnB1dFtwbGFjZWhvbGRlcj1cIlNlbGVjdCBTdGFydCBEYXRlXCJdW3RpdGxlPVwiJHtkZXNpcmVkVGltZX1cIl1gKS5zaG91bGQoJ2JlLnZpc2libGUnKS5jbGljaygpO1xyXG5jeS5nZXQoJ2J1dHRvbltjbGFzcz1cImFudC1idG4gY3NzLTFvcmFwazAgYW50LWJ0bi1wcmltYXJ5IGFudC1idG4tc21cIl0gc3BhbicpLnNob3VsZCgnYmUudmlzaWJsZScpLmNsaWNrKCk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgIC8vIGN5LmdldCgnZGl2W2NsYXNzPVwiYW50LW1vZGFsLWZvb3RlclwiXSBidXR0b246bnRoLWNoaWxkKDEpIHNwYW46bnRoLWNoaWxkKDEpJykuY2xpY2soeyBmb3JjZTogdHJ1ZSB9KTtcclxuICAgICBcclxuICAgICAgXHJcblxyXG5cclxuXHJcblxyXG4gICAgfSlcclxufSkiXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJpdCIsImN5Iiwid2FpdCIsInZpc2l0IiwiZ2V0IiwidHlwZSIsImNsaWNrIiwiZm9yY2UiLCJlcSIsInNob3VsZCIsImRlc2lyZWREYXRlIiwiZGVzaXJlZFRpbWUiXSwic291cmNlUm9vdCI6IiJ9