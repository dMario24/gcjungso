import { ImageResponse } from 'next/og';

// Image metadata
export const alt = '과천시중소기업협의회';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export const runtime = 'edge';

// Image generation
export default async function Image() {
  const logoUrl = `https://gcjungso.vercel.app/opengraph-image.jpeg`;

  try {
    const logoData = await fetch(logoUrl).then((res) => res.arrayBuffer());

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            color: 'black',
            padding: 50,
          }}
        >
          <img alt="과천시중소기업협의회 로고" width="180" src={logoData as any} />
          <h1 style={{ fontSize: 64, fontWeight: 'bold', marginTop: 40, textAlign: 'center' }}>
            과천시중소기업협의회
          </h1>
          <p style={{ fontSize: 32, marginTop: 20, textAlign: 'center', color: '#333' }}>
            여러분의 비즈니스 성공을 위한 든든한 파트너가 되겠습니다.
          </p>
        </div>
      ),
      {
        // `size` 속성은 이제 파일 상단에서 export되므로 여기서 다시 정의할 필요가 없습니다.
      }
    );
  } catch (e: any) {
    console.error(`Failed to generate OG image: ${e.message}`);
    return new Response('Failed to generate OG image', { status: 500 });
  }
}
