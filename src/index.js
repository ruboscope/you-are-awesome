// DO WHATEVER YOU WANT HERE
var incCount = 0;
var asyncIncCount = 0;
var createIncCount = 0;

//Воспользуемся https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
const createEnumerableProperty = (propertyName) => { return propertyName };
const createNotEnumerableProperty = (propertyName) => {
  Object.defineProperty(Object.prototype, propertyName, {
    enumerable: false,
    get() { return value; },
    set(x) { value = x; }
  });
  return propertyName;
};

// Будем возвращать Function instance;
const createProtoMagicObject = () => { return Function; };

const incrementor = () => {
  incCount++;
  Function.prototype.valueOf = function () {
    return incCount;
  };
  return incrementor;
};


const asyncIncrementor = () => {
  asyncIncCount++;
  Function.prototype.valueOf = function () {
    return asyncIncCount;
  };
  return asyncIncrementor;
};

// О-О-О, даже использовали функцию-генератор https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/function*
createIncrementer = function*() {
  var count = 1;
  while (true){
    yield count++;
  }
};

// return same argument not earlier than in one second, and not later, than in two
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
const returnBackInSecond = (param) => { 
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(param);
    }, 1000);
  });
};

const getDeepPropertiesCount = (obj) => {
  var result = 0;
  (function search(obj) {
    for (var elem in obj) {
      if (!isEmpty(elem)) {
        result++;
        search(obj[elem]);
       }
    }
  })(obj);
  return result;
};
isEmpty = function(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key))
      return false;
  }
  return true;
}

// Just create new String or Number without initialize, and when we make equal comparison we make Abstract Equality Comparison, so it will be success
const createSerializedObject = () => {
  return new Number;
};
const sortByProto = (array) => {
  array.sort(objSort);
  return array;
};

objSort = function(prev, next) {
  return prev - next;
}

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;