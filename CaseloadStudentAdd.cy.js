/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**********************************************!*\
  !*** ./cypress/e2e/CaseloadStudentAdd.cy.js ***!
  \**********************************************/


describe('template first', () => {
  it('passes', () => {
    cy.wait(5000);
    cy.visit('https://invo.dev.teleteachers.us/portal/login.cypress.io');
    cy.wait(5000);
    cy.get('input[name=username]').type("madhulatha+invo@ensarsolutions.com");
    cy.get('input[name=password]').type("Tele@123");
    cy.get('button[type=submit]').click({
      force: true
    });
    cy.wait(5000);
    cy.get('a[href="/portal/caseload"]').click({
      force: true
    });
    cy.wait(5000);
    cy.get('button.ant-btn.css-ibennm.ant-btn-primary span').should('exist').click({
      force: true
    });
    cy.get('.ant-form.ant-form-vertical.css-ibennm').should('exist').click();

    //cy.get('div[name="clients"] div.ant-select-selection-overflow').should('exist').click(); 
    // Click on all elements with the class .ant-select-item-option-content
    //   cy.get('.ant-select-item-option-content').should('exist').each(($option) => {
    //       cy.wrap($option).click(); // Or perform other interactions for each element
    //   });

    // Click on the specific element with title='Referal Automation' and nested div.ant-select-item-option-content
    //cy.get('div[title="Referal Automation"] div.ant-select-item-option-content').should('exist').click(); // Or perform other interactions
    //   cy.get('.ant-select-item-option-content', { timeout: 10000 }).should('be.visible').each(($option) => {
    //     cy.wrap($ReferalAutomation).click(); // Or perform other interactions for each element
    //   });

    cy.wait(5000);

    //cy.get('div[title="Referal Automation"] div.ant-select-item-option-content').should('be.visible').click();
    //cy.get('.ant-select-item-option-content').should('exist').click(); // Or perform other interactions
    //cy.get('div[name="clients"] div.ant-select-selection-overflow input').should('exist').type('Referral Automation{enter}', { force: true });

    //cy.get('.ant-form.ant-form-vertical.css-ibennm').should('exist').click();

    cy.wait(5000);
    cy.get('body div button:nth-child(2)').should('exist').click({
      force: true
    });
  });
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FzZWxvYWRTdHVkZW50QWRkLmN5LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUFBLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxNQUFNO0VBQzdCQyxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU07SUFDakJDLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNiRCxFQUFFLENBQUNFLEtBQUssQ0FBQywwREFBMEQsQ0FBQztJQUNwRUYsRUFBRSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2JELEVBQUUsQ0FBQ0csR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUNDLElBQUksQ0FBQyxvQ0FBb0MsQ0FBQztJQUN6RUosRUFBRSxDQUFDRyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUMvQ0osRUFBRSxDQUFDRyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQ0UsS0FBSyxDQUFDO01BQUNDLEtBQUssRUFBRTtJQUFJLENBQUMsQ0FBQztJQUNsRE4sRUFBRSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBRWJELEVBQUUsQ0FBQ0csR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUNFLEtBQUssQ0FBQztNQUFFQyxLQUFLLEVBQUU7SUFBSyxDQUFDLENBQUM7SUFDM0ROLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNiRCxFQUFFLENBQUNHLEdBQUcsQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDSSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUNGLEtBQUssQ0FBQztNQUFFQyxLQUFLLEVBQUU7SUFBSyxDQUFDLENBQUM7SUFDL0ZOLEVBQUUsQ0FBQ0csR0FBRyxDQUFDLHdDQUF3QyxDQUFDLENBQUNJLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQ0YsS0FBSyxDQUFDLENBQUM7O0lBSXhFO0lBQ0E7SUFDRjtJQUNBO0lBQ0E7O0lBRUo7SUFDTTtJQUNGO0lBQ0E7SUFDQTs7SUFHRUwsRUFBRSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDOztJQUViO0lBQ0E7SUFDQTs7SUFFQTs7SUFJQUQsRUFBRSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2JELEVBQUUsQ0FBQ0csR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUNJLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQ0YsS0FBSyxDQUFDO01BQUVDLEtBQUssRUFBRTtJQUFLLENBQUMsQ0FBQztFQUcvRSxDQUFDLENBQUM7QUFDTixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2N5cHJlc3NhdXRvbWF0aW9uLy4vY3lwcmVzcy9lMmUvQ2FzZWxvYWRTdHVkZW50QWRkLmN5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRlc2NyaWJlKCd0ZW1wbGF0ZSBmaXJzdCcsICgpID0+IHtcclxuICAgIGl0KCdwYXNzZXMnLCAoKSA9PiB7XHJcbiAgICAgIGN5LndhaXQoNTAwMCk7XHJcbiAgICAgIGN5LnZpc2l0KCdodHRwczovL2ludm8uZGV2LnRlbGV0ZWFjaGVycy51cy9wb3J0YWwvbG9naW4uY3lwcmVzcy5pbycpO1xyXG4gICAgICBjeS53YWl0KDUwMDApO1xyXG4gICAgICBjeS5nZXQoJ2lucHV0W25hbWU9dXNlcm5hbWVdJykudHlwZShcIm1hZGh1bGF0aGEraW52b0BlbnNhcnNvbHV0aW9ucy5jb21cIik7XHJcbiAgICAgIGN5LmdldCgnaW5wdXRbbmFtZT1wYXNzd29yZF0nKS50eXBlKFwiVGVsZUAxMjNcIik7XHJcbiAgICAgIGN5LmdldCgnYnV0dG9uW3R5cGU9c3VibWl0XScpLmNsaWNrKHtmb3JjZTogdHJ1ZX0pO1xyXG4gICAgICBjeS53YWl0KDUwMDApO1xyXG4gICAgIFxyXG4gICAgICBjeS5nZXQoJ2FbaHJlZj1cIi9wb3J0YWwvY2FzZWxvYWRcIl0nKS5jbGljayh7IGZvcmNlOiB0cnVlIH0pO1xyXG4gICAgICBjeS53YWl0KDUwMDApO1xyXG4gICAgICBjeS5nZXQoJ2J1dHRvbi5hbnQtYnRuLmNzcy1pYmVubm0uYW50LWJ0bi1wcmltYXJ5IHNwYW4nKS5zaG91bGQoJ2V4aXN0JykuY2xpY2soeyBmb3JjZTogdHJ1ZSB9KTtcclxuICAgICAgY3kuZ2V0KCcuYW50LWZvcm0uYW50LWZvcm0tdmVydGljYWwuY3NzLWliZW5ubScpLnNob3VsZCgnZXhpc3QnKS5jbGljaygpO1xyXG5cclxuXHJcblxyXG4gICAgICAvL2N5LmdldCgnZGl2W25hbWU9XCJjbGllbnRzXCJdIGRpdi5hbnQtc2VsZWN0LXNlbGVjdGlvbi1vdmVyZmxvdycpLnNob3VsZCgnZXhpc3QnKS5jbGljaygpOyBcclxuICAgICAgLy8gQ2xpY2sgb24gYWxsIGVsZW1lbnRzIHdpdGggdGhlIGNsYXNzIC5hbnQtc2VsZWN0LWl0ZW0tb3B0aW9uLWNvbnRlbnRcclxuICAgIC8vICAgY3kuZ2V0KCcuYW50LXNlbGVjdC1pdGVtLW9wdGlvbi1jb250ZW50Jykuc2hvdWxkKCdleGlzdCcpLmVhY2goKCRvcHRpb24pID0+IHtcclxuICAgIC8vICAgICAgIGN5LndyYXAoJG9wdGlvbikuY2xpY2soKTsgLy8gT3IgcGVyZm9ybSBvdGhlciBpbnRlcmFjdGlvbnMgZm9yIGVhY2ggZWxlbWVudFxyXG4gICAgLy8gICB9KTtcclxuXHJcbi8vIENsaWNrIG9uIHRoZSBzcGVjaWZpYyBlbGVtZW50IHdpdGggdGl0bGU9J1JlZmVyYWwgQXV0b21hdGlvbicgYW5kIG5lc3RlZCBkaXYuYW50LXNlbGVjdC1pdGVtLW9wdGlvbi1jb250ZW50XHJcbiAgICAgIC8vY3kuZ2V0KCdkaXZbdGl0bGU9XCJSZWZlcmFsIEF1dG9tYXRpb25cIl0gZGl2LmFudC1zZWxlY3QtaXRlbS1vcHRpb24tY29udGVudCcpLnNob3VsZCgnZXhpc3QnKS5jbGljaygpOyAvLyBPciBwZXJmb3JtIG90aGVyIGludGVyYWN0aW9uc1xyXG4gICAgLy8gICBjeS5nZXQoJy5hbnQtc2VsZWN0LWl0ZW0tb3B0aW9uLWNvbnRlbnQnLCB7IHRpbWVvdXQ6IDEwMDAwIH0pLnNob3VsZCgnYmUudmlzaWJsZScpLmVhY2goKCRvcHRpb24pID0+IHtcclxuICAgIC8vICAgICBjeS53cmFwKCRSZWZlcmFsQXV0b21hdGlvbikuY2xpY2soKTsgLy8gT3IgcGVyZm9ybSBvdGhlciBpbnRlcmFjdGlvbnMgZm9yIGVhY2ggZWxlbWVudFxyXG4gICAgLy8gICB9KTtcclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICBjeS53YWl0KDUwMDApO1xyXG4gICAgIFxyXG4gICAgICAvL2N5LmdldCgnZGl2W3RpdGxlPVwiUmVmZXJhbCBBdXRvbWF0aW9uXCJdIGRpdi5hbnQtc2VsZWN0LWl0ZW0tb3B0aW9uLWNvbnRlbnQnKS5zaG91bGQoJ2JlLnZpc2libGUnKS5jbGljaygpO1xyXG4gICAgICAvL2N5LmdldCgnLmFudC1zZWxlY3QtaXRlbS1vcHRpb24tY29udGVudCcpLnNob3VsZCgnZXhpc3QnKS5jbGljaygpOyAvLyBPciBwZXJmb3JtIG90aGVyIGludGVyYWN0aW9uc1xyXG4gICAgICAvL2N5LmdldCgnZGl2W25hbWU9XCJjbGllbnRzXCJdIGRpdi5hbnQtc2VsZWN0LXNlbGVjdGlvbi1vdmVyZmxvdyBpbnB1dCcpLnNob3VsZCgnZXhpc3QnKS50eXBlKCdSZWZlcnJhbCBBdXRvbWF0aW9ue2VudGVyfScsIHsgZm9yY2U6IHRydWUgfSk7XHJcblxyXG4gICAgICAvL2N5LmdldCgnLmFudC1mb3JtLmFudC1mb3JtLXZlcnRpY2FsLmNzcy1pYmVubm0nKS5zaG91bGQoJ2V4aXN0JykuY2xpY2soKTtcclxuXHJcblxyXG5cclxuICAgICAgY3kud2FpdCg1MDAwKTtcclxuICAgICAgY3kuZ2V0KCdib2R5IGRpdiBidXR0b246bnRoLWNoaWxkKDIpJykuc2hvdWxkKCdleGlzdCcpLmNsaWNrKHsgZm9yY2U6IHRydWUgfSk7XHJcblxyXG5cclxuICAgIH0pXHJcbn0pIl0sIm5hbWVzIjpbImRlc2NyaWJlIiwiaXQiLCJjeSIsIndhaXQiLCJ2aXNpdCIsImdldCIsInR5cGUiLCJjbGljayIsImZvcmNlIiwic2hvdWxkIl0sInNvdXJjZVJvb3QiOiIifQ==