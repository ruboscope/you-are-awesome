// DO WHATEVER YOU WANT HERE
var incCount = 0;
var asyncIncCount = 0;

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


const createIncrementer = () => { };

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => { };
const getDeepPropertiesCount = () => { };
const createSerializedObject = () => { };
const toBuffer = () => { };
const sortByProto = () => { };

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