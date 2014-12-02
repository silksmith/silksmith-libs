var expect = chai.expect;

goog.require("todomvc.model.ToDoItem");
goog.require('todomvc.model.ToDoItemStore');

describe("todomvc.model.ToDoItem",function(){
	
	it("should return name", function(){
		
		var todoItem = new todomvc.model.ToDoItem("Do testing!")
		
		
		expect(todoItem.getNote()).to.equal("Do testing!");
	});
	it("should fail", function(){
		var x = 4;
		var y = 1;
		expect(x-y).to.equal(5)
	});
	
	it("this one is pennding");
	
	xit("and this x-cluded", function(){
		assert(false);
	});
	
	it("this one times out", function(done){
		console.log("hello world");
	});
});