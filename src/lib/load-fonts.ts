export async function loadFonts() {
  const [loraRegular, loraBold] = await Promise.all([
    await fetch('https://fonts.cdnfonts.com/s/13623/Lora-Regular.woff').then((res) => res.arrayBuffer()),
    await fetch('https://fonts.cdnfonts.com/s/13623/Lora-Bold.woff').then((res) => res.arrayBuffer())
  ]);

  return { loraRegular, loraBold };
}
