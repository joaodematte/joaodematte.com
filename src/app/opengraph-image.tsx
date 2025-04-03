import { ImageResponse } from 'next/og';

import { loadFonts } from '@/lib/load-fonts';

export const alt = 'joão dematte';
export const size = {
  width: 1200,
  height: 630
};

export const contentType = 'image/png';

export default async function Image() {
  const { loraRegular, loraBold } = await loadFonts();

  return new ImageResponse(
    (
      <div
        style={{
          position: 'relative',
          background: '#fafafa',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end'
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            opacity: 0.05,
            backgroundImage: "url('https://joaodematte.com/noise.png')"
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: 64
          }}
        >
          <h1
            style={{
              fontSize: 64,
              fontWeight: 600,
              marginBottom: -12
            }}
          >
            joão dematte
          </h1>
          <p
            style={{
              fontSize: 32
            }}
          >
            thoughts about react and programming languages.
          </p>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Lora',
          data: loraRegular,
          style: 'normal',
          weight: 400
        },
        {
          name: 'Lora',
          data: loraBold,
          style: 'normal',
          weight: 600
        }
      ]
    }
  );
}
