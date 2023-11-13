/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./cypress/e2e/Junk.cy.js ***!
  \********************************/


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
    cy.get('a[href="/portal/setup/customers"]').click({
      force: true
    });
    //cy.get('input[placeholder="Search"]').type('AutomationProgram1');
    // cy.get('input[placeholder="Search"]').type('AutomationProgram1');

    // // Wait for a specific time to allow search results to appear
    // cy.wait(5000); // Adjust the time based on how long it usually takes for results to appear

    // // Check if the element with class 'search-results' exists
    // cy.get('.search-results').then(($searchResults) => {
    //   if ($searchResults.length > 0) {
    //     // If the element exists, assert that it contains the expected text
    //     cy.wrap($searchResults).should('contain', 'AutomationProgram1');
    //   } else {
    //     // If the element doesn't exist, you can handle it accordingly
    //     cy.log('Search results not found.');
    //     // You might want to consider failing the test or taking appropriate action
    //   }
    // });
    cy.get('input[placeholder="Search"]').type('AutomationProgram1');

    // Wait for a specific time to allow search results to appear
    cy.wait(5000); // Adjust the time based on how long it usually takes for results to appear

    // Check if the document contains the expected text within .search-results
    cy.contains('.search-results', 'AutomationProgram1').should('exist');
  });
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSnVuay5jeS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBQSxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsTUFBTTtFQUM3QkMsRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNO0lBQ2pCQyxFQUFFLENBQUNDLEtBQUssQ0FBQywwREFBMEQsQ0FBQztJQUNwRUQsRUFBRSxDQUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2JGLEVBQUUsQ0FBQ0csR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUNDLElBQUksQ0FBQyxvQ0FBb0MsQ0FBQztJQUN6RUosRUFBRSxDQUFDRyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUMvQ0osRUFBRSxDQUFDRyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQ0UsS0FBSyxDQUFDLENBQUM7SUFDckNMLEVBQUUsQ0FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNiRixFQUFFLENBQUNHLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDRyxNQUFNLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxzQkFBc0IsQ0FBQztJQUd2Rk4sRUFBRSxDQUFDRyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQ0UsS0FBSyxDQUFFO01BQUNFLEtBQUssRUFBRTtJQUFJLENBQUMsQ0FBQztJQUN2RFAsRUFBRSxDQUFDRyxHQUFHLENBQUMsbUNBQW1DLENBQUMsQ0FBQ0UsS0FBSyxDQUFDO01BQUVFLEtBQUssRUFBRTtJQUFLLENBQUMsQ0FBQztJQUNsRTtJQUNBOztJQUVBO0lBQ0E7O0lBRUE7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBUCxFQUFFLENBQUNHLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDQyxJQUFJLENBQUMsb0JBQW9CLENBQUM7O0lBRWhFO0lBQ0FKLEVBQUUsQ0FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7O0lBRWY7SUFDQUYsRUFBRSxDQUFDUSxRQUFRLENBQUMsaUJBQWlCLEVBQUUsb0JBQW9CLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLE9BQU8sQ0FBQztFQUdwRSxDQUFDLENBQUM7QUFDRixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2N5cHJlc3NhdXRvbWF0aW9uLy4vY3lwcmVzcy9lMmUvSnVuay5jeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJkZXNjcmliZSgndGVtcGxhdGUgZmlyc3QnLCAoKSA9PiB7XHJcbiAgICBpdCgncGFzc2VzJywgKCkgPT4ge1xyXG4gICAgICBjeS52aXNpdCgnaHR0cHM6Ly9pbnZvLmRldi50ZWxldGVhY2hlcnMudXMvcG9ydGFsL2xvZ2luLmN5cHJlc3MuaW8nKTtcclxuICAgICAgY3kud2FpdCg1MDAwKTtcclxuICAgICAgY3kuZ2V0KCdpbnB1dFtuYW1lPXVzZXJuYW1lXScpLnR5cGUoXCJtYWRodWxhdGhhK2ludm9AZW5zYXJzb2x1dGlvbnMuY29tXCIpO1xyXG4gICAgICBjeS5nZXQoJ2lucHV0W25hbWU9cGFzc3dvcmRdJykudHlwZShcIlRlbGVAMTIzXCIpO1xyXG4gICAgICBjeS5nZXQoJ2J1dHRvblt0eXBlPXN1Ym1pdF0nKS5jbGljaygpO1xyXG4gICAgICBjeS53YWl0KDUwMDApO1xyXG4gICAgICBjeS5nZXQoJy5hbnQtbWVudS1zdWJtZW51LXRpdGxlJykuaW52b2tlKCdhdHRyJywgJ3N0eWxlJywgJ3Zpc2liaWxpdHk6IHZpc2libGU7Jyk7XHJcblxyXG5cclxuY3kuZ2V0KCcuYW50LW1lbnUtc3VibWVudS10aXRsZScpLmNsaWNrKCB7Zm9yY2U6IHRydWV9KTtcclxuY3kuZ2V0KCdhW2hyZWY9XCIvcG9ydGFsL3NldHVwL2N1c3RvbWVyc1wiXScpLmNsaWNrKHsgZm9yY2U6IHRydWUgfSk7XHJcbi8vY3kuZ2V0KCdpbnB1dFtwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXScpLnR5cGUoJ0F1dG9tYXRpb25Qcm9ncmFtMScpO1xyXG4vLyBjeS5nZXQoJ2lucHV0W3BsYWNlaG9sZGVyPVwiU2VhcmNoXCJdJykudHlwZSgnQXV0b21hdGlvblByb2dyYW0xJyk7XHJcblxyXG4vLyAvLyBXYWl0IGZvciBhIHNwZWNpZmljIHRpbWUgdG8gYWxsb3cgc2VhcmNoIHJlc3VsdHMgdG8gYXBwZWFyXHJcbi8vIGN5LndhaXQoNTAwMCk7IC8vIEFkanVzdCB0aGUgdGltZSBiYXNlZCBvbiBob3cgbG9uZyBpdCB1c3VhbGx5IHRha2VzIGZvciByZXN1bHRzIHRvIGFwcGVhclxyXG5cclxuLy8gLy8gQ2hlY2sgaWYgdGhlIGVsZW1lbnQgd2l0aCBjbGFzcyAnc2VhcmNoLXJlc3VsdHMnIGV4aXN0c1xyXG4vLyBjeS5nZXQoJy5zZWFyY2gtcmVzdWx0cycpLnRoZW4oKCRzZWFyY2hSZXN1bHRzKSA9PiB7XHJcbi8vICAgaWYgKCRzZWFyY2hSZXN1bHRzLmxlbmd0aCA+IDApIHtcclxuLy8gICAgIC8vIElmIHRoZSBlbGVtZW50IGV4aXN0cywgYXNzZXJ0IHRoYXQgaXQgY29udGFpbnMgdGhlIGV4cGVjdGVkIHRleHRcclxuLy8gICAgIGN5LndyYXAoJHNlYXJjaFJlc3VsdHMpLnNob3VsZCgnY29udGFpbicsICdBdXRvbWF0aW9uUHJvZ3JhbTEnKTtcclxuLy8gICB9IGVsc2Uge1xyXG4vLyAgICAgLy8gSWYgdGhlIGVsZW1lbnQgZG9lc24ndCBleGlzdCwgeW91IGNhbiBoYW5kbGUgaXQgYWNjb3JkaW5nbHlcclxuLy8gICAgIGN5LmxvZygnU2VhcmNoIHJlc3VsdHMgbm90IGZvdW5kLicpO1xyXG4vLyAgICAgLy8gWW91IG1pZ2h0IHdhbnQgdG8gY29uc2lkZXIgZmFpbGluZyB0aGUgdGVzdCBvciB0YWtpbmcgYXBwcm9wcmlhdGUgYWN0aW9uXHJcbi8vICAgfVxyXG4vLyB9KTtcclxuY3kuZ2V0KCdpbnB1dFtwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXScpLnR5cGUoJ0F1dG9tYXRpb25Qcm9ncmFtMScpO1xyXG5cclxuLy8gV2FpdCBmb3IgYSBzcGVjaWZpYyB0aW1lIHRvIGFsbG93IHNlYXJjaCByZXN1bHRzIHRvIGFwcGVhclxyXG5jeS53YWl0KDUwMDApOyAvLyBBZGp1c3QgdGhlIHRpbWUgYmFzZWQgb24gaG93IGxvbmcgaXQgdXN1YWxseSB0YWtlcyBmb3IgcmVzdWx0cyB0byBhcHBlYXJcclxuXHJcbi8vIENoZWNrIGlmIHRoZSBkb2N1bWVudCBjb250YWlucyB0aGUgZXhwZWN0ZWQgdGV4dCB3aXRoaW4gLnNlYXJjaC1yZXN1bHRzXHJcbmN5LmNvbnRhaW5zKCcuc2VhcmNoLXJlc3VsdHMnLCAnQXV0b21hdGlvblByb2dyYW0xJykuc2hvdWxkKCdleGlzdCcpO1xyXG5cclxuXHJcbn0pXHJcbn0pIl0sIm5hbWVzIjpbImRlc2NyaWJlIiwiaXQiLCJjeSIsInZpc2l0Iiwid2FpdCIsImdldCIsInR5cGUiLCJjbGljayIsImludm9rZSIsImZvcmNlIiwiY29udGFpbnMiLCJzaG91bGQiXSwic291cmNlUm9vdCI6IiJ9