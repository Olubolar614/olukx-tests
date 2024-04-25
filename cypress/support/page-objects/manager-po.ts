/// <reference types="cypress" />

class manager_po {
  
  clickbankManagerloginbtn() {
    cy.get(".btn-lg").last().click();
    cy.get('[ng-class="btnClass3"]').click();
  }
  
  searchCustomer(searchquery) {
    cy.get('[ng-model="searchCustomer"]').clear().type(searchquery);
    // Assert search results
    cy.get("table tbody tr").each(($row) => {
      cy.wrap($row).within(() => {
        cy.get("td").contains(searchquery).should("exist");
      });
    });
  }
}
export default manager_po;
