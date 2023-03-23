/** 返回入参的所有数字相加的结果 */
const sum = (...args: number[]): number => {
  let sum = 0

  if (args.length) {
    args.forEach((i) => (sum += i))
  }

  return sum
}

export const SAT = new Set([1, 2, 3, 4, 4, 5, 6])

export function promiseFn() {
  return new Promise((resolve) => {
    resolve(43)
  })
}

function noUsedFn() {
  const a = 90
}

export async function asyncFn() {
  const data = await promiseFn
  console.log('data...', data)
}

export const tName = SAT ?? 'aha'
export default sum
