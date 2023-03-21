export default function del(obj: string[], index: number): string[] {
  if (obj.length === 0) return obj
  return obj.filter((_v, i) => index !== i)
}
