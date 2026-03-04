const fs = require('fs');
const https = require('https');
const path = require('path');

const iconsToFetch = [
    { name: 'openai', url: 'https://cdn.simpleicons.org/openai' },
    { name: 'codex', url: 'https://cdn.simpleicons.org/openai' }, // Codex uses OpenAI logo usually
    { name: 'vertexai', url: 'https://cdn.simpleicons.org/googlecloud' },
    { name: 'cloudvision', url: 'https://cdn.simpleicons.org/googlecloud' },
    { name: 'opencv', url: 'https://cdn.simpleicons.org/opencv' },
    { name: 'tensorflow', url: 'https://cdn.simpleicons.org/tensorflow' },
    { name: 'ibm-watson', url: 'https://cdn.simpleicons.org/ibmwatson' },
    { name: 'cloud-nlp', url: 'https://cdn.simpleicons.org/googlecloud' },
    { name: 'cognitive-services', url: 'https://cdn.simpleicons.org/microsoftazure' },
    { name: 'bot-framework', url: 'https://cdn.simpleicons.org/microsoftazure' },
    { name: 'mistral', url: 'https://cdn.simpleicons.org/google' }, // We'll try to find Mistral separately or use a generic AI if not found
    { name: 'llama', url: 'https://cdn.simpleicons.org/meta' },
    { name: 'gemini', url: 'https://cdn.simpleicons.org/googlegemini' },
    { name: 'anthropic', url: 'https://cdn.simpleicons.org/anthropic' },
    { name: 'n8n', url: 'https://cdn.simpleicons.org/n8n' }
];

const targetDir = path.join(__dirname, '..', 'public', 'images', 'tech-icons');

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

function download(url, dest) {
    return new Promise((resolve, reject) => {
        https.get(url, (response) => {
            if (response.statusCode === 200) {
                const file = fs.createWriteStream(dest);
                response.pipe(file);
                file.on('finish', () => {
                    file.close(resolve);
                });
            } else {
                reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
            }
        }).on('error', reject);
    });
}

async function run() {
    for (const icon of iconsToFetch) {
        const dest = path.join(targetDir, `${icon.name}.svg`);
        try {
            if (icon.name === 'mistral') {
                // let's try simpleicons for mistral first
                await download('https://cdn.simpleicons.org/mistral', dest).catch(() =>
                    download('https://upload.wikimedia.org/wikipedia/commons/e/e4/Mistral_AI_logo.svg', dest)
                );
                console.log(`Successfully downloaded ${icon.name}.svg`);
                continue;
            }
            await download(icon.url, dest);
            console.log(`Successfully downloaded ${icon.name}.svg`);
        } catch (err) {
            console.error(`Error downloading ${icon.name}.svg: ${err.message}`);
        }
    }
}

run();
