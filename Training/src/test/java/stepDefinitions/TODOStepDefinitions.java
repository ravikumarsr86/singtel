package stepDefinitions;

import java.awt.AWTException;

import base.Base;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import page_class.TODOPage;

public class TODOStepDefinitions extends Base {

	@Given("Launch {string} application")
	public void launch_application(String url) throws AWTException {
		Base.loadApplication(url);
		log.info("MVC Application loaded in Browser......");
	}

	@When("Create TODO list by entering value as {string}")
	public void create_TODO_list_by_entering_value_as(String todoName) {
		TODOPage.createTodo(todoName);
		
	}

	@Then("My TODO list should get reflect in list as {string}")
	public void my_TODO_list_should_get_reflect_in_list(String todoListName) {
		TODOPage.validateToDOList(todoListName);
		log.info("Newly created TODO has been validated");
	}
	
	@When("Click on link {string}")
	public void click_on_link(String option) {
	   TODOPage.viewSpecificList(option);
	   log.info("Selected the filters option : "+option);
	}

	@Then("It should display all todo list")
	public void it_should_display_all_todo_list() throws InterruptedException {
		TODOPage.viewAllTODOList();
		Thread.sleep(2000);
		log.info("Selected All filter option");
	}

	@Then("It should display only active list")
	public void it_should_display_only_active_list() throws InterruptedException {
		TODOPage.viewActiveTODOList();
		Thread.sleep(2000);
		log.info("Selected Active filter option");
	}

	@Then("It should display only completed list")
	public void it_should_display_only_completed_list() throws InterruptedException {
		TODOPage.viewCompletedTODOList();
		Thread.sleep(2000);
		log.info("Selected Completed filters option");
	}
	
	@When("Click on checkbox to mark as completed")
	public void click_on_checkbox_to_mark_as_completed() {
	    TODOPage.markCompleted();
	    log.info("Marked as completed in first todo from list");
	}

	@Then("It should display marked todo list in completed option")
	public void it_should_display_marked_todo_list_in_completed_option() throws InterruptedException {
	    TODOPage.viewCompletedTODOList();
	    Thread.sleep(2000);
	    
	    log.info("Verified todo in completed list, which was marked in previous steps");
	}

}
