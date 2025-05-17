import { writeFile, readFile } from 'fs/promises';
import path from 'path';

export async function POST(req, { params }) {
  const { section } = params;
  const filePath = path.join(process.cwd(), 'app/content.json');

  try {
    const incomingData = await req.json();
    const file = await readFile(filePath, 'utf-8');
    const json = JSON.parse(file);

    json[section] = { ...json[section], ...incomingData };

    await writeFile(filePath, JSON.stringify(json, null, 2), 'utf-8');
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Failed to update section' }), { status: 500 });
  }
}

