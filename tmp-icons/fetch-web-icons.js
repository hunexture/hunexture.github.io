const fs = require('fs');
const path = require('path');
const simpleIcons = require('simple-icons');

const dstDir = path.join(__dirname, '..', 'public', 'images', 'tech-icons');

if (!fs.existsSync(dstDir)) {
    fs.mkdirSync(dstDir, { recursive: true });
}

const iconsToFetch = [
    { slug: 'php', filename: 'php' },
    { slug: 'dotnet', filename: 'dotnet' },
    { slug: 'html5', filename: 'html5' },
    { slug: 'drupal', filename: 'drupal' },
    { slug: 'joomla', filename: 'joomla' },
    { slug: 'wordpress', filename: 'wordpress' },
    { slug: 'magento', filename: 'magento' },
    { slug: 'shopify', filename: 'shopify' },
    { slug: 'nodedotjs', filename: 'nodedotjs' },
    { slug: 'angularjs', filename: 'angularjs' },
    { slug: 'mongodb', filename: 'mongodb' },
    { slug: 'mysql', filename: 'mysql' },
    { slug: 'microsoftsqlserver', filename: 'microsoftsqlserver' }
];

for (const { slug, filename } of iconsToFetch) {
    const icon = simpleIcons.Get(slug);
    if (icon) {
        const coloredSvg = icon.svg.replace('<svg ', `<svg fill="#${icon.hex}" `);
        fs.writeFileSync(path.join(dstDir, `${filename}.svg`), coloredSvg);
        console.log(`Saved colored ${filename}.svg`);
    } else {
        console.log(`Icon not found: ${slug}`);
    }
}

// Write the java colored SVG
const javaSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 345" width="24" height="24">
<path fill="#5382A1" d="M128 344L128 344c-35 0-66-10-86-28-11-9-17-21-20-33l-1-4-2-12c-3-22 3-41 17-57 20-22 55-34 92-34 38 0 72 12 92 34 14 16 19 35 16 57l-1 12-2 4c-2 12-9 24-20 33-20 18-50 28-85 28zm0-20c29 0 54-8 69-21 7-6 12-14 14-22v-11c2-15-2-26-11-37-15-16-43-25-72-25-30 0-58 9-73 25-9 11-13 22-11 37v11c1 8 6 16 13 22 15 13 41 21 71 21z"/>
<path fill="#5382A1" d="M74 274c36 0 72 6 72 17 0 11-36 17-72 17-36 0-71-6-71-17 0-11 35-17 71-17z"/>
<path fill="#E76F00" d="M255 243c0 9-14 16-30 20-4 1-9 2-15 2l3-1 2-2c6-3 10-7 11-13l3-19v-2-2l2 4c9 6 15 12 17 21v1 1z"/>
<path fill="#E76F00" d="M232 232h3v-2l1 1-4 1zm14 11h-3v1l3-1zm4 11l-3-1v1l3-1v1zM116 169c9-6 16-16 19-27l1-6V60v-2l5 4c24 16 33 24 33 55 0 22-16 32-35 34-31 4-43 21-43 45 0 23 18 36 34 45 23 12 51 21 77 24-22 6-47 5-72 3h-6l-9 8v3l3-9c17 4 33 5 49 5 36-1 72-10 65-42-8-36-58-47-83-59-13-6-26-21-25-39 2-25 15-38 41-41 18-2 32-11 32-31 0-21-12-30-22-38l-4-3-4-2c-29-21-39-44-31-72l3-9-4 6c-17 25-18 53-7 87l2 8v4c-1 14-6 26-14 36l-8 10z"/>
<path fill="#E76F00" d="M91 161c16-5 28-21 28-40v-4l4 1c20 6 30 19 32 37 0 12-5 24-11 31l-4 6 5-5c21-23 2-63-35-71l-11-2-2 4 1 5c6 31-7 38-7 38zM24 246c0-11 6-21 16-29l2-2-2 2h-1c-15 13-17 29-17 31 0 26 27 34 55 42 22 6 46 11 69 11 20 0 40-4 61-9l-9 5c-23 10-54 13-84 7-38-7-90-21-90-58z"/>
<path fill="#5382A1" d="M83 243c36 0 71 6 71 17 0 11-35 17-71 17-36 0-72-6-72-17 0-11 36-17 72-17z"/>
<path fill="#5382A1" d="M92 212c36 0 71 6 71 17 0 11-35 17-71 17-36 0-71-6-71-17 0-11 35-17 71-17z"/>
</svg>`;
fs.writeFileSync(path.join(dstDir, 'java.svg'), javaSvg);
console.log('Saved colored java.svg');
