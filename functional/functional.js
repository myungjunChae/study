//get specific property list
function _map(list, mapper) {
  var newList = [];

  _each(list, function(val) {
    newList.push(mapper(val));
  });

  return newList;
}

//get conditional list
function _filter(list, predi) {
  var newList = [];
  _each(list, function(val) {
    if (predi(val)) {
      newList.push(val);
    }
  });

  return newList;
}

//for loop
function _each(list, iter) {
  let keys = _keys(list);

  for (let i = 0, len = keys.length; i < len; i++) {
    iter(list[keys[i]]);
  }
  return list;
}

//change multi argument function to single argumnet
function _curry(fn) {
  return function(a, b) {
    return arguments.length == 2
      ? fn(a, b)
      : function(b) {
          return fn(a, b);
        };
  };
}

//reverse curry
function _curryr(fn) {
  return function(a, b) {
    return arguments.length == 2
      ? fn(b, a)
      : function(b) {
          return fn(b, a);
        };
  };
}

//get object property for security
//usage
//: _get($key)($obj)
var _get = _curryr(function(obj, key) {
  return obj == null ? undefined : obj[key];
});

//slice function coverable Array-like object
slice = Array.prototype.slice;
function _rest(list, num) {
  return slice.call(list, num || 1);
}

//apply user define function, array each element
//usage
//: iter = function(cum, val){
//    return ;
//}
function _reduce(list, iter, memo) {
  if (arguments.length == 2) {
    memo = list[0];
    list = _rest(list);
  }

  _each(list, function(val) {
    memo = iter(memo, val);
  });
  return memo;
}

//multi function chaining
function _pipe() {
  let fns = arguments;
  return function(arg) {
    return _reduce(
      fns,
      function(arg, fn) {
        return fn(arg);
      },
      arg
    );
  };
}

//automation calling pipe function
function _go(arg) {
  var fns = _rest(arguments);
  return _pipe.apply(null, fns)(arg);
}

//object type check
function _is_object(obj) {
  return typeof obj == "object" && !!obj;
}

//return object keys
function _keys(obj) {
  return _is_object(obj) ? Object.keys(obj) : [];
}

//return object values
function _values(data) {
  return _map(data, _identity);
}

//return object specific property
function _pluck(data, key) {
  return _map(data, _get(key));
}

function _identity(val) {
  return val;
}

// var _map = _curryr(_map),
//   _filter = _curryr(_filter);
