$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/MyToDoFlow.feature");
formatter.feature({
  "name": "ToDo List",
  "description": "  Below scenarios will validate TODO flows",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Create TODO",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Launch \"MVC\" application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.TODOStepDefinitions.launch_application(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Create TODO list by entering value as \"Pay Mobile Bill\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.TODOStepDefinitions.create_TODO_list_by_entering_value_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "My TODO list should get reflect in list as \"Pay Mobile Bill\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.TODOStepDefinitions.my_TODO_list_should_get_reflect_in_list(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Create TODO with multiple values",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Launch \"MVC\" application",
  "keyword": "Given "
});
formatter.step({
  "name": "Create TODO list by entering value as \"\u003ctodoName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "My TODO list should get reflect in list as \"\u003ctodoName\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "todoName"
      ]
    },
    {
      "cells": [
        "test1"
      ]
    },
    {
      "cells": [
        "test2"
      ]
    },
    {
      "cells": [
        "test3"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Create TODO with multiple values",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Launch \"MVC\" application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.TODOStepDefinitions.launch_application(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Create TODO list by entering value as \"test1\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.TODOStepDefinitions.create_TODO_list_by_entering_value_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "My TODO list should get reflect in list as \"test1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.TODOStepDefinitions.my_TODO_list_should_get_reflect_in_list(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Create TODO with multiple values",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Launch \"MVC\" application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.TODOStepDefinitions.launch_application(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Create TODO list by entering value as \"test2\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.TODOStepDefinitions.create_TODO_list_by_entering_value_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "My TODO list should get reflect in list as \"test2\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.TODOStepDefinitions.my_TODO_list_should_get_reflect_in_list(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Create TODO with multiple values",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Launch \"MVC\" application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.TODOStepDefinitions.launch_application(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Create TODO list by entering value as \"test3\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.TODOStepDefinitions.create_TODO_list_by_entering_value_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "My TODO list should get reflect in list as \"test3\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.TODOStepDefinitions.my_TODO_list_should_get_reflect_in_list(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Show Active todo List",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Launch \"MVC\" application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.TODOStepDefinitions.launch_application(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on link \"Active\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.TODOStepDefinitions.click_on_link(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "It should display only active list",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.TODOStepDefinitions.it_should_display_only_active_list()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Mark todo has completed",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Launch \"MVC\" application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.TODOStepDefinitions.launch_application(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on checkbox to mark as completed",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.TODOStepDefinitions.click_on_checkbox_to_mark_as_completed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "It should display marked todo list in completed option",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.TODOStepDefinitions.it_should_display_marked_todo_list_in_completed_option()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Show All todo List",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Launch \"MVC\" application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.TODOStepDefinitions.launch_application(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on link \"All\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.TODOStepDefinitions.click_on_link(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "It should display all todo list",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.TODOStepDefinitions.it_should_display_all_todo_list()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Show Completed todo List",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Launch \"MVC\" application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.TODOStepDefinitions.launch_application(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on link \"Completed\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.TODOStepDefinitions.click_on_link(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "It should display only completed list",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.TODOStepDefinitions.it_should_display_only_completed_list()"
});
formatter.result({
  "status": "passed"
});
});