/**
 *
 * @namespace
 */
var sinon = {};

/**
 *
 * @constructor
 */
sinon.Spy = function () {
};
/**
 *
 * @constructor
 */
sinon.Stub = function () {
};
/**
 *
 * @constructor
 */
sinon.Mock = function () {
};
/**
 * @throws {Error}
 */
sinon.Mock.prototype.verify = function () {
};
/**
 */
sinon.Mock.prototype.restore = function () {
};
/**
 * @param {string} methodName
 * @returns {sinon.MockExpectation}
 */
sinon.Mock.prototype.expects = function (methodName) {
};
/**
 *
 * @constructor
 */
sinon.MockExpectation = function () {
};

/**
 *
 * @param {*=} object
 * @param {string=} what
 * @returns {sinon.Spy}
 */
sinon.spy = function (object, what) {
};
/**
 *
 * @param {*=} object
 * @param {string=} method
 * @param {function()=} func
 * @returns {sinon.Stub}
 */
sinon.stub = function (object, method, func) {
};
/**
 *
 * @param {*=} object
 * @returns {sinon.Mock}
 */
sinon.mock = function (object) {
};


sinon.Spy.prototype.isSinonProxy = function () {
};
sinon.Spy.prototype.reset = function () {
};
sinon.Spy.prototype.invoke = function () {
};
sinon.Spy.prototype.named = function () {
};
sinon.Spy.prototype.getCall = function () {
};
sinon.Spy.prototype.getCalls = function () {
};
sinon.Spy.prototype.calledBefore = function () {
};
sinon.Spy.prototype.calledAfter = function () {
};
sinon.Spy.prototype.withArgs = function () {
};
sinon.Spy.prototype.matches = function () {
};
sinon.Spy.prototype.printf = function () {
};
sinon.Spy.prototype.calledOn = function () {
};
sinon.Spy.prototype.alwaysCalledOn = function () {
};
sinon.Spy.prototype.calledWith = function () {
};
sinon.Spy.prototype.calledWithMatch = function () {
};
sinon.Spy.prototype.alwaysCalledWith = function () {
};
sinon.Spy.prototype.alwaysCalledWithMatch = function () {
};
sinon.Spy.prototype.calledWithExactly = function () {
};
sinon.Spy.prototype.alwaysCalledWithExactly = function () {
};
sinon.Spy.prototype.neverCalledWith = function () {
};
sinon.Spy.prototype.neverCalledWithMatch = function () {
};
sinon.Spy.prototype.threw = function () {
};
sinon.Spy.prototype.alwaysThrew = function () {
};
sinon.Spy.prototype.returned = function () {
};
sinon.Spy.prototype.alwaysReturned = function () {
};
sinon.Spy.prototype.calledWithNew = function () {
};
sinon.Spy.prototype.alwaysCalledWithNew = function () {
};
sinon.Spy.prototype.callArg = function () {
};
sinon.Spy.prototype.callArgWith = function () {
};
sinon.Spy.prototype.callArgOn = function () {
};
sinon.Spy.prototype.callArgOnWith = function () {
};
sinon.Spy.prototype.yield = function () {
};
sinon.Spy.prototype.invokeCallback = function () {
};
sinon.Spy.prototype.yieldOn = function () {
};
sinon.Spy.prototype.yieldTo = function () {
};
sinon.Spy.prototype.yieldToOn = function () {
};
sinon.Spy.prototype.formatters = function () {
};
sinon.Spy.prototype.spyCall = function () {
};
sinon.Spy.prototype.called = function () {
};
sinon.Spy.prototype.notCalled = function () {
};
sinon.Spy.prototype.calledOnce = function () {
};
sinon.Spy.prototype.calledTwice = function () {
};
sinon.Spy.prototype.calledThrice = function () {
};
sinon.Spy.prototype.callCount = function () {
};
sinon.Spy.prototype.firstCall = function () {
};
sinon.Spy.prototype.secondCall = function () {
};
sinon.Spy.prototype.thirdCall = function () {
};
sinon.Spy.prototype.lastCall = function () {
};
sinon.Spy.prototype.args = function () {
};
sinon.Spy.prototype.returnValues = function () {
};
sinon.Spy.prototype.thisValues = function () {
};
sinon.Spy.prototype.exceptions = function () {
};
sinon.Spy.prototype.callIds = function () {
};
sinon.Spy.prototype.displayName = function () {
};
sinon.Spy.prototype.toString = function () {
};
sinon.Spy.prototype.instantiateFake = function () {
};
sinon.Spy.prototype.id = function () {
};


sinone.Stub.prototype.isSinonProxy = function () {
};
sinone.Stub.prototype.reset = function () {
};
sinone.Stub.prototype.invoke = function () {
};
sinone.Stub.prototype.named = function () {
};
sinone.Stub.prototype.getCall = function () {
};
sinone.Stub.prototype.getCalls = function () {
};
sinone.Stub.prototype.calledBefore = function () {
};
sinone.Stub.prototype.calledAfter = function () {
};
sinone.Stub.prototype.withArgs = function () {
};
sinone.Stub.prototype.matches = function () {
};
sinone.Stub.prototype.printf = function () {
};
sinone.Stub.prototype.calledOn = function () {
};
sinone.Stub.prototype.alwaysCalledOn = function () {
};
sinone.Stub.prototype.calledWith = function () {
};
sinone.Stub.prototype.calledWithMatch = function () {
};
sinone.Stub.prototype.alwaysCalledWith = function () {
};
sinone.Stub.prototype.alwaysCalledWithMatch = function () {
};
sinone.Stub.prototype.calledWithExactly = function () {
};
sinone.Stub.prototype.alwaysCalledWithExactly = function () {
};
sinone.Stub.prototype.neverCalledWith = function () {
};
sinone.Stub.prototype.neverCalledWithMatch = function () {
};
sinone.Stub.prototype.threw = function () {
};
sinone.Stub.prototype.alwaysThrew = function () {
};
sinone.Stub.prototype.returned = function () {
};
sinone.Stub.prototype.alwaysReturned = function () {
};
sinone.Stub.prototype.calledWithNew = function () {
};
sinone.Stub.prototype.alwaysCalledWithNew = function () {
};
sinone.Stub.prototype.callArg = function () {
};
sinone.Stub.prototype.callArgWith = function () {
};
sinone.Stub.prototype.callArgOn = function () {
};
sinone.Stub.prototype.callArgOnWith = function () {
};
sinone.Stub.prototype.yield = function () {
};
sinone.Stub.prototype.invokeCallback = function () {
};
sinone.Stub.prototype.yieldOn = function () {
};
sinone.Stub.prototype.yieldTo = function () {
};
sinone.Stub.prototype.yieldToOn = function () {
};
sinone.Stub.prototype.formatters = function () {
};
sinone.Stub.prototype.spyCall = function () {
};
sinone.Stub.prototype.id = function () {
};
sinone.Stub.prototype.called = function () {
};
sinone.Stub.prototype.notCalled = function () {
};
sinone.Stub.prototype.calledOnce = function () {
};
sinone.Stub.prototype.calledTwice = function () {
};
sinone.Stub.prototype.calledThrice = function () {
};
sinone.Stub.prototype.callCount = function () {
};
sinone.Stub.prototype.firstCall = function () {
};
sinone.Stub.prototype.secondCall = function () {
};
sinone.Stub.prototype.thirdCall = function () {
};
sinone.Stub.prototype.lastCall = function () {
};
sinone.Stub.prototype.args = function () {
};
sinone.Stub.prototype.returnValues = function () {
};
sinone.Stub.prototype.thisValues = function () {
};
sinone.Stub.prototype.exceptions = function () {
};
sinone.Stub.prototype.callIds = function () {
};
sinone.Stub.prototype.displayName = function () {
};
sinone.Stub.prototype.toString = function () {
};
sinone.Stub.prototype.instantiateFake = function () {
};
sinone.Stub.prototype.func = function () {
};
sinone.Stub.prototype.create = function () {
};
sinone.Stub.prototype.resetBehavior = function () {
};
sinone.Stub.prototype.onCall = function () {
};
sinone.Stub.prototype.onFirstCall = function () {
};
sinone.Stub.prototype.onSecondCall = function () {
};
sinone.Stub.prototype.onThirdCall = function () {
};
sinone.Stub.prototype.isPresent = function () {
};
sinone.Stub.prototype.callsArg = function () {
};
sinone.Stub.prototype.callsArgOn = function () {
};
sinone.Stub.prototype.callsArgWith = function () {
};
sinone.Stub.prototype.callsArgOnWith = function () {
};
sinone.Stub.prototype.yields = function () {
};
sinone.Stub.prototype.yieldsRight = function () {
};
sinone.Stub.prototype.yieldsOn = function () {
};
sinone.Stub.prototype.yieldsTo = function () {
};
sinone.Stub.prototype.yieldsToOn = function () {
};
sinone.Stub.prototype.throws = function () {
};
sinone.Stub.prototype.throwsException = function () {
};
sinone.Stub.prototype.returns = function () {
};
sinone.Stub.prototype.returnsArg = function () {
};
sinone.Stub.prototype.returnsThis = function () {
};
sinone.Stub.prototype.callsArgAsync = function () {
};
sinone.Stub.prototype.callsArgOnAsync = function () {
};
sinone.Stub.prototype.callsArgWithAsync = function () {
};
sinone.Stub.prototype.callsArgOnWithAsync = function () {
};
sinone.Stub.prototype.yieldsAsync = function () {
};
sinone.Stub.prototype.yieldsRightAsync = function () {
};
sinone.Stub.prototype.yieldsOnAsync = function () {
};
sinone.Stub.prototype.yieldsToAsync = function () {
};
sinone.Stub.prototype.yieldsToOnAsync = function () {
};
sinone.Stub.prototype.defaultBehavior = function () {
};
sinone.Stub.prototype.behaviors = function () {
};