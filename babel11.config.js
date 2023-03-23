import _asyncToGenerator from '@babel/runtime/helpers/asyncToGenerator'
import _regeneratorRuntime from '@babel/runtime/regenerator'
/** 返回入参的所有数字相加的结果 */
var sum = function sum() {
  var sum = 0
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  if (args.length) {
    args.forEach(function (i) {
      return (sum += i)
    })
  }
  return sum
}
export var SAT = new Set([1, 2, 3, 4, 4, 5, 6])
export function promiseFn() {
  return new Promise(function (resolve) {
    resolve(43)
  })
}
function noUsedFn() {
  var a = 90
}
export function asyncFn() {
  return _asyncFn.apply(this, arguments)
}
function _asyncFn() {
  _asyncFn = _asyncToGenerator(
    /*#__PURE__*/ _regeneratorRuntime.mark(function _callee() {
      var data
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1)
          switch ((_context.prev = _context.next)) {
            case 0:
              _context.next = 2
              return promiseFn
            case 2:
              data = _context.sent
              console.log('data...', data)
            case 4:
            case 'end':
              return _context.stop()
          }
      }, _callee)
    }),
  )
  return _asyncFn.apply(this, arguments)
}
export var tName = SAT !== null && SAT !== void 0 ? SAT : 'aha'
export default sum

