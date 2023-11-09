export function getFullYear() {
  return new Date().getFullYear();
}

export function getFooterCopy(isIndex) {
  return isIndex ? "Milan Carevic" : "Milan Carevic - Portfolio Website";
}