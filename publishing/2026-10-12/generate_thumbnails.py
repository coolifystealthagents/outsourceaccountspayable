import json
import textwrap
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT=Path(__file__).resolve().parents[2]
manifest=json.loads((ROOT/'publishing/2026-10-12/manifest.json').read_text())
bold='/System/Library/Fonts/Supplemental/Arial Bold.ttf'
regular='/System/Library/Fonts/Supplemental/Arial.ttf'
palettes=[
 ((43,33,12),(202,138,4),(15,118,110)),
 ((35,28,18),(217,155,29),(13,148,136)),
 ((28,35,31),(234,179,8),(20,128,116)),
 ((48,30,17),(245,158,11),(14,116,144)),
]

def title_layout(draw,title):
 for size in range(48,31,-2):
  font=ImageFont.truetype(bold,size)
  lines=textwrap.wrap(title,width=max(24,int(35*42/size)))
  if len(lines)<=4 and max(draw.textbbox((0,0),line,font=font)[2] for line in lines)<=665:return font,lines
 return ImageFont.truetype(bold,32),textwrap.wrap(title,36)

for i,a in enumerate(manifest['articles']):
 bg,gold,teal=palettes[i%len(palettes)]
 im=Image.new('RGB',(1200,630),bg);d=ImageDraw.Draw(im)
 d.rounded_rectangle((34,32,1166,598),22,outline=gold,width=3)
 d.rectangle((800,35,1163,595),fill=tuple(min(255,x+8) for x in bg))
 # Invoice-and-ledger motif derived from the site's AP desk visual language.
 for row in range(6):
  y=88+row*78; x=838+(i*31+row*19)%60
  d.rounded_rectangle((x,y,1118,y+49),8,outline=teal,width=3)
  d.line((x+24,y+17,x+152,y+17),fill=gold,width=4)
  d.line((x+24,y+32,x+220,y+32),fill=(136,126,94),width=3)
 d.ellipse((940,205,1080,345),outline=gold,width=12)
 d.line((975,276,1015,316,1057,238),fill=teal,width=14,joint='curve')
 label='AP OPERATIONS GUIDE' if a['section']=='Blog' else 'AP RESEARCH REPORT'
 d.rounded_rectangle((62,60,448,108),10,fill=teal)
 d.text((80,72),label,font=ImageFont.truetype(bold,22),fill=(249,246,235))
 font,lines=title_layout(d,a['title']); y=155
 for line in lines:
  d.text((62,y),line,font=font,fill=(251,248,235));y+=font.size+12
 d.line((62,476,720,476),fill=gold,width=4)
 d.text((62,510),'Outsource Accounts Payable',font=ImageFont.truetype(bold,27),fill=(251,248,235))
 d.text((62,553),'Source  •  owner  •  evidence  •  decision',font=ImageFont.truetype(regular,20),fill=teal)
 target=ROOT/a['thumbnailPath'];target.parent.mkdir(parents=True,exist_ok=True)
 im.save(target,'WEBP',quality=88,method=6)
print(f"Generated {len(manifest['articles'])} thumbnails")
