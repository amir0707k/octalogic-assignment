export function splitFullName(fullName) {
    const names = fullName.split(' ');
    const firstName = names[0];
    const lastName = names.slice(1).join(' ');
    return [ firstName, lastName ];
  }