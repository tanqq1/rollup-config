export default function del(obj, index) {
    if (obj.length === 0)
        return obj;
    return obj.filter((_v, i) => index !== i);
}
