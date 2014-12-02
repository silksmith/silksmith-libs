var expect = chai.expect;


goog.require('todomvc.model.ToDoItemStore');

describe("todomvc.model.ToDoItemStore",function(){
	
	it("should fire event", function(){
		
		var mechanism = sinon.stub(goog.storage.mechanism.mechanismfactory, "createHTML5LocalStorage")
		
		var item = sinon.createStubInstance(todomvc.model.ToDoItem)
		
		var eventHandler = sinon.spy()
		
		
		var store = new todomvc.model.ToDoItemStore()
		
		goog.events.listen(store, todomvc.model.ToDoItemStore.ChangeEventType, eventHandler);
		
		
		store.addOrUpdate(item);
		
		expect(eventHandler).to.be.calledOnce
	});
	
});