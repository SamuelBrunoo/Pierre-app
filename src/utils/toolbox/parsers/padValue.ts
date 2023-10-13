export const padValue = (v: string | number) => {
  return typeof v === 'string'
    ? String(+v).padStart(2, '0')
    : String(v).padStart(2, '0')
}
