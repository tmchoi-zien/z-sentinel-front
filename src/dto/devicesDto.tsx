export default function devicesDto(content: any) {
  return content.map((item: any) => {
    return {
      ...item,
    };
  });
}
