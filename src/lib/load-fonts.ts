export async function loadFonts() {
  const regularPromise = fetch(new URL('https://fonts.cdnfonts.com/s/13623/Lora-Regular.woff')).then((res) =>
    res.arrayBuffer()
  );

  const boldPromise = fetch(new URL('https://fonts.cdnfonts.com/s/13623/Lora-Bold.woff')).then((res) =>
    res.arrayBuffer()
  );

  const [loraRegular, loraBold] = await Promise.all([regularPromise, boldPromise]);

  return { loraRegular, loraBold };
}
