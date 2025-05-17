// app/api/translate/route.js (or wherever your API route is)

export async function POST(req) {
  try {
    const { text, target } = await req.json();

    // Lingva API expects: /api/v1/{lang}/{text}
    // Text must be URL encoded
    const encodedText = encodeURIComponent(text);

    const res = await fetch(`https://lingva.ml/api/v1/${target}/${encodedText}`);

    if (!res.ok) {
      return new Response(JSON.stringify({ error: "Lingva translation failed" }), { status: 500 });
    }

    const data = await res.json();

    // Lingva returns { translation: "translated text" }
    return new Response(JSON.stringify({ translated: data.translation }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}


