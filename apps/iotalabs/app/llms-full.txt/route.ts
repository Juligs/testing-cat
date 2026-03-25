import fs from 'fs';
import path from 'path';

export const dynamic = 'force-static';

const MD_FILES_ORDER = ['index.md', 'grants.md', 'projects.md'];

export function GET() {
    const llmsDir = path.join(process.cwd(), 'public', 'llms');
    const parts: string[] = [];

    for (const filename of MD_FILES_ORDER) {
        const filepath = path.join(llmsDir, filename);
        if (fs.existsSync(filepath)) {
            const content = fs.readFileSync(filepath, 'utf-8');
            parts.push(content.trim());
        }
    }

    const fullContent = parts.join('\n\n---\n\n');

    return new Response(fullContent, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
        },
    });
}
