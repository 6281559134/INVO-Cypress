/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!*********************************************!*\
  !*** ./cypress/e2e/EditPlansAddGoals.cy.js ***!
  \*********************************************/


describe('template first', () => {
  it('passes', () => {
    cy.wait(5000);
    cy.visit('https://invo.dev.teleteachers.us/portal/login.cypress.io');
    cy.wait(5000);
    cy.get('input[name=username]').type("madhulatha+invo@ensarsolutions.com");
    cy.get('input[name=password]').type("Tele@123");
    cy.get('button[type=submit]').click();
    cy.wait(5000);
    cy.get('a[href="/portal/caseload"]').click({
      force: true
    });
    //cy.get('span[title="ACTIVE"]').click(); 
    //cy.get('div[title="SCHEDULING IN PROGRESS"] div[class="ant-select-item-option-content"]').click();

    const searchText = 'Automation';
    const buttonText = 'Automation TestingNew';
    cy.get('input[placeholder="Search"]').type(`${searchText}{enter}`);
    cy.wait(5000);
    cy.wait(5000);
    cy.contains('div', 'Automation Testingnew').click();
    cy.get('#rc-tabs-0-tab-5').click();
    cy.wait(5000);
    cy.contains('button', 'Add Plan').click();
    cy.get('div[name="planTypeId"] div[class="ant-select-selector"]').click();
    cy.get('.ant-select-item-option-content').click();
    cy.get('input[placeholder="Start Date"]').click();
    cy.get('td[title="2023-11-09"] div[class="ant-picker-cell-inner"]').click();
    cy.contains('button', 'Create').click();
    cy.wait(5000);
    //cy.get('body > div:nth-child(1) > section:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > main:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(4) > button:nth-child(2)').click();
    cy.wait(5000);
    //cy.get('div[class="ant-form-item-control-input-content"] div[class="ant-row space-between css-ibennm"] span').click({force: true} );
    cy.contains('span', 'Add Goal').click({
      force: true
    });
    cy.get('input[placeholder="Goal"]').type('5');
    cy.get('textarea[placeholder="Description"]').type('None');
    cy.wait(10000);
    cy.get('div[name="goalTypeId"] div[class="ant-select-selector"]').click();
    cy.get('div[title="A1Discipline"] div[class="ant-select-item-option-content"]').click();
    cy.wait(5000);
    cy.get('div[name="dataCollectionTypeId"] div[class="ant-select-selector"]').click();
    cy.wait(5000);
    cy.get('div[title="Frequency"] div[class="ant-select-item-option-content"]').click();
    cy.wait(5000);
    //cy.get('button.ant-btn.css-ibennm.ant-btn-primary span').click({force: true});
    cy.get('button.ant-btn.css-ibennm.ant-btn-primary span').click({
      force: true
    });
    cy.get('ul.ant-card-actions div:nth-child(2) button:nth-child(1)').click();
  });
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztJQUN2RkwsRUFBRSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2JELEVBQUUsQ0FBQ0csR0FBRyxDQUFDLG1FQUFtRSxDQUFDLENBQUNFLEtBQUssQ0FBQyxDQUFDO0lBQ25GTCxFQUFFLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDYkQsRUFBRSxDQUFDRyxHQUFHLENBQUMsb0VBQW9FLENBQUMsQ0FBQ0UsS0FBSyxDQUFDLENBQUM7SUFDcEZMLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNiO0lBQ0FELEVBQUUsQ0FBQ0csR0FBRyxDQUFDLGdEQUFnRCxDQUFDLENBQUNFLEtBQUssQ0FBQztNQUFDQyxLQUFLLEVBQUU7SUFBSSxDQUFFLENBQUM7SUFDOUVOLEVBQUUsQ0FBQ0csR0FBRyxDQUFDLDBEQUEwRCxDQUFDLENBQUNFLEtBQUssQ0FBQyxDQUFDO0VBRTVFLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3lwcmVzc2F1dG9tYXRpb24vLi9jeXByZXNzL2UyZS9FZGl0UGxhbnNBZGRHb2Fscy5jeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJkZXNjcmliZSgndGVtcGxhdGUgZmlyc3QnLCAoKSA9PiB7XHJcbiAgICBpdCgncGFzc2VzJywgKCkgPT4ge1xyXG4gICAgICAgIGN5LndhaXQoNTAwMCk7XHJcbiAgICAgIGN5LnZpc2l0KCdodHRwczovL2ludm8uZGV2LnRlbGV0ZWFjaGVycy51cy9wb3J0YWwvbG9naW4uY3lwcmVzcy5pbycpO1xyXG4gICAgICBjeS53YWl0KDUwMDApO1xyXG4gICAgICBjeS5nZXQoJ2lucHV0W25hbWU9dXNlcm5hbWVdJykudHlwZShcIm1hZGh1bGF0aGEraW52b0BlbnNhcnNvbHV0aW9ucy5jb21cIik7XHJcbiAgICAgIGN5LmdldCgnaW5wdXRbbmFtZT1wYXNzd29yZF0nKS50eXBlKFwiVGVsZUAxMjNcIik7XHJcbiAgICAgIGN5LmdldCgnYnV0dG9uW3R5cGU9c3VibWl0XScpLmNsaWNrKCk7XHJcbiAgICAgIGN5LndhaXQoNTAwMCk7XHJcbiAgICAgIGN5LmdldCgnYVtocmVmPVwiL3BvcnRhbC9jYXNlbG9hZFwiXScpLmNsaWNrKHsgZm9yY2U6IHRydWUgfSk7XHJcbiAgICAgIC8vY3kuZ2V0KCdzcGFuW3RpdGxlPVwiQUNUSVZFXCJdJykuY2xpY2soKTsgXHJcbiAgICAgIC8vY3kuZ2V0KCdkaXZbdGl0bGU9XCJTQ0hFRFVMSU5HIElOIFBST0dSRVNTXCJdIGRpdltjbGFzcz1cImFudC1zZWxlY3QtaXRlbS1vcHRpb24tY29udGVudFwiXScpLmNsaWNrKCk7XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCBzZWFyY2hUZXh0ID0gJ0F1dG9tYXRpb24nO1xyXG4gICAgICBjb25zdCBidXR0b25UZXh0ID0gJ0F1dG9tYXRpb24gVGVzdGluZ05ldyc7XHJcblxyXG4gICAgICBcclxuICAgICAgY3kuZ2V0KCdpbnB1dFtwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXScpLnR5cGUoYCR7c2VhcmNoVGV4dH17ZW50ZXJ9YCk7XHJcbiAgICAgIGN5LndhaXQoNTAwMCk7XHJcbiAgICAgIGN5LndhaXQoNTAwMCk7XHJcbiAgICAgIGN5LmNvbnRhaW5zKCdkaXYnLCAnQXV0b21hdGlvbiBUZXN0aW5nbmV3JykuY2xpY2soKTtcclxuXHJcbiAgICAgIGN5LmdldCgnI3JjLXRhYnMtMC10YWItNScpLmNsaWNrKCk7XHJcbiAgICAgIGN5LndhaXQoNTAwMCk7XHJcbiAgICAgIGN5LmNvbnRhaW5zKCdidXR0b24nLCAnQWRkIFBsYW4nKS5jbGljaygpO1xyXG4gICAgICBcclxuICAgICAgY3kuZ2V0KCdkaXZbbmFtZT1cInBsYW5UeXBlSWRcIl0gZGl2W2NsYXNzPVwiYW50LXNlbGVjdC1zZWxlY3RvclwiXScpLmNsaWNrKCk7XHJcbiAgICAgIGN5LmdldCgnLmFudC1zZWxlY3QtaXRlbS1vcHRpb24tY29udGVudCcpLmNsaWNrKCk7XHJcbiAgICAgIGN5LmdldCgnaW5wdXRbcGxhY2Vob2xkZXI9XCJTdGFydCBEYXRlXCJdJykuY2xpY2soKTtcclxuXHJcbiAgICAgIGN5LmdldCgndGRbdGl0bGU9XCIyMDIzLTExLTA5XCJdIGRpdltjbGFzcz1cImFudC1waWNrZXItY2VsbC1pbm5lclwiXScpLmNsaWNrKCk7XHJcbiAgICAgIGN5LmNvbnRhaW5zKCdidXR0b24nLCAnQ3JlYXRlJykuY2xpY2soKTtcclxuICAgICAgY3kud2FpdCg1MDAwKTtcclxuICAgICAgLy9jeS5nZXQoJ2JvZHkgPiBkaXY6bnRoLWNoaWxkKDEpID4gc2VjdGlvbjpudGgtY2hpbGQoMSkgPiBzZWN0aW9uOm50aC1jaGlsZCgyKSA+IGRpdjpudGgtY2hpbGQoMikgPiBkaXY6bnRoLWNoaWxkKDEpID4gZGl2Om50aC1jaGlsZCgyKSA+IGRpdjpudGgtY2hpbGQoMSkgPiBkaXY6bnRoLWNoaWxkKDEpID4gZGl2Om50aC1jaGlsZCgxKSA+IG1haW46bnRoLWNoaWxkKDEpID4gZGl2Om50aC1jaGlsZCgxKSA+IGRpdjpudGgtY2hpbGQoMSkgPiBkaXY6bnRoLWNoaWxkKDMpID4gZGl2Om50aC1jaGlsZCgxKSA+IGRpdjpudGgtY2hpbGQoMSkgPiBkaXY6bnRoLWNoaWxkKDEpID4gZGl2Om50aC1jaGlsZCgxKSA+IGZvcm06bnRoLWNoaWxkKDEpID4gZGl2Om50aC1jaGlsZCg0KSA+IGJ1dHRvbjpudGgtY2hpbGQoMiknKS5jbGljaygpO1xyXG4gICAgICBjeS53YWl0KDUwMDApO1xyXG4gICAgICAvL2N5LmdldCgnZGl2W2NsYXNzPVwiYW50LWZvcm0taXRlbS1jb250cm9sLWlucHV0LWNvbnRlbnRcIl0gZGl2W2NsYXNzPVwiYW50LXJvdyBzcGFjZS1iZXR3ZWVuIGNzcy1pYmVubm1cIl0gc3BhbicpLmNsaWNrKHtmb3JjZTogdHJ1ZX0gKTtcclxuY3kuY29udGFpbnMoJ3NwYW4nLCAnQWRkIEdvYWwnKS5jbGljayh7Zm9yY2U6IHRydWV9ICk7XHJcblxyXG4gICAgICBjeS5nZXQoJ2lucHV0W3BsYWNlaG9sZGVyPVwiR29hbFwiXScpLnR5cGUoJzUnKTtcclxuICAgICAgY3kuZ2V0KCd0ZXh0YXJlYVtwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uXCJdJykudHlwZSgnTm9uZScpO1xyXG4gICAgICBjeS53YWl0KDEwMDAwKTtcclxuICAgICAgY3kuZ2V0KCdkaXZbbmFtZT1cImdvYWxUeXBlSWRcIl0gZGl2W2NsYXNzPVwiYW50LXNlbGVjdC1zZWxlY3RvclwiXScpLmNsaWNrKCk7XHJcblxyXG4gICAgICBjeS5nZXQoJ2Rpdlt0aXRsZT1cIkExRGlzY2lwbGluZVwiXSBkaXZbY2xhc3M9XCJhbnQtc2VsZWN0LWl0ZW0tb3B0aW9uLWNvbnRlbnRcIl0nKS5jbGljaygpO1xyXG4gICAgICBjeS53YWl0KDUwMDApO1xyXG4gICAgICBjeS5nZXQoJ2RpdltuYW1lPVwiZGF0YUNvbGxlY3Rpb25UeXBlSWRcIl0gZGl2W2NsYXNzPVwiYW50LXNlbGVjdC1zZWxlY3RvclwiXScpLmNsaWNrKCk7XHJcbiAgICAgIGN5LndhaXQoNTAwMCk7XHJcbiAgICAgIGN5LmdldCgnZGl2W3RpdGxlPVwiRnJlcXVlbmN5XCJdIGRpdltjbGFzcz1cImFudC1zZWxlY3QtaXRlbS1vcHRpb24tY29udGVudFwiXScpLmNsaWNrKCk7XHJcbiAgICAgIGN5LndhaXQoNTAwMCk7XHJcbiAgICAgIC8vY3kuZ2V0KCdidXR0b24uYW50LWJ0bi5jc3MtaWJlbm5tLmFudC1idG4tcHJpbWFyeSBzcGFuJykuY2xpY2soe2ZvcmNlOiB0cnVlfSk7XHJcbiAgICAgIGN5LmdldCgnYnV0dG9uLmFudC1idG4uY3NzLWliZW5ubS5hbnQtYnRuLXByaW1hcnkgc3BhbicpLmNsaWNrKHtmb3JjZTogdHJ1ZX0gKTtcclxuICAgICAgY3kuZ2V0KCd1bC5hbnQtY2FyZC1hY3Rpb25zIGRpdjpudGgtY2hpbGQoMikgYnV0dG9uOm50aC1jaGlsZCgxKScpLmNsaWNrKCk7XHJcblxyXG4gICAgfSlcclxufSkiXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJpdCIsImN5Iiwid2FpdCIsInZpc2l0IiwiZ2V0IiwidHlwZSIsImNsaWNrIiwiZm9yY2UiLCJzZWFyY2hUZXh0IiwiYnV0dG9uVGV4dCIsImNvbnRhaW5zIl0sInNvdXJjZVJvb3QiOiIifQ==