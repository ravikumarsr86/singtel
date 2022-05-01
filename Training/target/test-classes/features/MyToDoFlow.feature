Feature: ToDo List
  Below scenarios will validate TODO flows

  Scenario: Create TODO
    Given Launch "MVC" application
    When Create TODO list by entering value as "Pay Mobile Bill"
    Then My TODO list should get reflect in list as "Pay Mobile Bill"

  Scenario Outline: Create TODO with multiple values
    Given Launch "MVC" application
    When Create TODO list by entering value as "<todoName>"
    Then My TODO list should get reflect in list as "<todoName>"

    Examples: 
      | todoName |
      | test1    |
      | test2    |
      | test3    |

  Scenario: Show Active todo List
    Given Launch "MVC" application
    When Click on link "Active"
    Then It should display only active list

  Scenario: Mark todo has completed
    Given Launch "MVC" application
    When Click on checkbox to mark as completed
    Then It should display marked todo list in completed option

  Scenario: Show All todo List
    Given Launch "MVC" application
    When Click on link "All"
    Then It should display all todo list

  Scenario: Show Completed todo List
    Given Launch "MVC" application
    When Click on link "Completed"
    Then It should display only completed list
