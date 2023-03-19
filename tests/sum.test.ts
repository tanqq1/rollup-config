import sum from '../src/sum'

const testCase: [number[], number][] = [
  [[1], 1],
  [[1, 2], 3],
  [[1, 2, 3], 6],
  [[1, 2, 3, 4], 10],
  [[1, 2, 3, 4, 5], 15],
]

testCase.forEach(([args, result]) => {
  const title = `sum: ${args.join(', ')}`

  test(title, () => {
    expect(sum(...args)).toBe(result)
  })
})
