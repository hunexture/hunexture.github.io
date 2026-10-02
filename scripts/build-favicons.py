"""Regenerates the favicon set in public/ from one geometry (the X from the HUNEXTURE wordmark).

Run: python scripts/build-favicons.py
Needs Pillow. The SVG is written alongside the PNG/ICO files so they never drift apart.
"""
import math
import os
from PIL import Image, ImageDraw

BLUE = (29, 78, 216, 255)   # --signal
WHITE = (255, 255, 255, 255)
PUB = os.path.join(os.path.dirname(__file__), '..', 'public')
SS = 4                      # supersampling factor

# X on a 512 grid: one unbroken stroke, one split by a gap (as in the wordmark)
W = 68
STROKES = [
    ((136, 128), (376, 384)),
    ((376, 128), (292, 218)),
    ((220, 294), (136, 384)),
]


def quad(p, q, w):
    (x1, y1), (x2, y2) = p, q
    dx, dy = x2 - x1, y2 - y1
    n = math.hypot(dx, dy)
    ox, oy = -dy / n * w / 2, dx / n * w / 2
    return [(x1 + ox, y1 + oy), (x2 + ox, y2 + oy), (x2 - ox, y2 - oy), (x1 - ox, y1 - oy)]


def render(size, rounded=True, scale=1.0):
    big = size * SS
    img = Image.new('RGBA', (big, big), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    if rounded:
        d.rounded_rectangle([0, 0, big - 1, big - 1], radius=int(big * 0.22), fill=BLUE)
    else:
        d.rectangle([0, 0, big, big], fill=BLUE)
    k = big / 512
    c = 256

    def tf(pt):
        return ((c + (pt[0] - c) * scale) * k, (c + (pt[1] - c) * scale) * k)

    for p, q in STROKES:
        d.polygon([tf(pt) for pt in quad(p, q, W)], fill=WHITE)
    return img.resize((size, size), Image.LANCZOS)


def save(name, img):
    img.save(os.path.join(PUB, name))
    print('wrote', name)


save('favicon-16x16.png', render(16, scale=1.12))
save('favicon-32x32.png', render(32, scale=1.08))
save('favicon-96x96.png', render(96))
save('apple-touch-icon.png', render(180, rounded=False, scale=0.9))
save('android-chrome-192x192.png', render(192, rounded=False, scale=0.78))   # maskable: keep mark in the safe zone
save('android-chrome-512x512.png', render(512, rounded=False, scale=0.78))
render(48, scale=1.05).save(os.path.join(PUB, 'favicon.ico'), sizes=[(16, 16), (32, 32), (48, 48)])
print('wrote favicon.ico')

polys = ''.join(
    '<polygon points="%s"/>' % ' '.join('%g,%g' % pt for pt in quad(p, q, W)) for p, q in STROKES
)
svg = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">'
    '<rect width="512" height="512" rx="112" fill="#1D4ED8"/>'
    '<g fill="#fff">' + polys + '</g></svg>\n'
)
with open(os.path.join(PUB, 'favicon.svg'), 'w', encoding='utf8') as f:
    f.write(svg)
print('wrote favicon.svg')
