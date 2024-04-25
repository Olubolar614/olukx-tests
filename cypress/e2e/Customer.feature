Feature: XYZ Bank  - Customer Page Functionality

  Scenario Outline: Customer login and perform transactions
    Given I navigate to the XYZ Bank homepage
    When I click on the Customer Login button
    When Select a <validUser> from the dropdown
    When I click on the login button
    Then Customer should be able to see his balance deposit amount and verify updated balance
    # Then I should see a transaction entry with the correct amount and today date

    Examples:
      | validUser |
      |         1 |
      |         2 |
      |         3 |
    