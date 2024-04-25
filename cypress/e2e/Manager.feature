Feature: XYZ Bank  - Customer Page Functionality

  Scenario: Bank manager search for a customer
    Given I navigate to the XYZ Bank homepage
    When I login as a bank manager with valid credentials
    Then User search for <search_term> and should see the details

    Examples:
      | search_term |
      | Hermoine    |
      | Granger     |
      | E859AB      |
      | 1001        |
