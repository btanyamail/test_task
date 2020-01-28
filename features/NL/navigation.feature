Feature: Search

  @home-page @search
  Scenario: Search by make and model
    Given I navigate to "en-be/" page
    When I select make Tesla in make dropdown
    And I select model Model X in model dropdown
    And I click Find cars button
    Then I should see a list of cars of only selected make and model



  Scenario: Filter by price and transmission
    Given I navigate to "en-be/cars/" page
    When I select min and max price in price dropdowns
    And I select transmission option Automatic
    And I select sorting option Increasing by price from sorting dropdown
    Then I should see a list of cars with Automatic transmission
    And I should see a list of cars with prices within defined range and in increasing order 

