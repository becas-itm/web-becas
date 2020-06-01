export function greetUser(name) {
  if (name) {
    name = name.split(/(\s+)/)[0] || '';
    const capitalizedName = name.charAt(0).toUpperCase() + name.substr(1);
    name = ` ${capitalizedName}`;
  } else {
    name = '';
  }

  return `¡Hola${name}! Bienvenido`;
}
