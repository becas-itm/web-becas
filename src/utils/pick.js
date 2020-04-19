export default function pick(object, keys = []) {
  const newObject = {};

  for (const key of keys) {
    if (object[key] !== undefined) {
      newObject[key] = object[key];
    }
  }

  return newObject;
}
