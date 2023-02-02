Feature: Search Box

  You can search for a specific product by entering the product name in the search box. The search results will show you the products that match your search criteria.

  Scenario: Search for a specific product

    Given I am on the home page
    When I enter the product name in the search box
    And I click on the search button
    Then I should see the product search results page
    And I should see max 4 products


  Scenario: See the product detail page

    Given I am on the product search results page
    When I click on the product name
    Then I should see the product detail page
