export function getFirstName(name) {
  name = name.split(/(\s+)/)[0] || '';
  const capitalizedName = name.charAt(0).toUpperCase() + name.substr(1);
  return capitalizedName;
}
