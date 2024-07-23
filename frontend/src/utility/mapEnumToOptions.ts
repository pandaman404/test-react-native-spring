export function mapEnumToOptions(enumObj: object) {
  return Object.keys(enumObj).map((key) => ({
    label: enumObj[key as keyof typeof enumObj],
    value: key,
  }));
}
