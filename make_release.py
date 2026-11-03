from pathlib import Path
import base64, zipfile, re
root=Path(__file__).resolve().parent
out=root.parent
html=(root/'index.html').read_text(encoding='utf-8')
css=(root/'styles.css').read_text(encoding='utf-8')
config=(root/'config.js').read_text(encoding='utf-8')
content=(root/'content.js').read_text(encoding='utf-8')
app=(root/'app.js').read_text(encoding='utf-8')
logo=(root/'assets/INNOWINE_original_logo.png').read_bytes()
html=html.replace('<link rel="stylesheet" href="styles.css">','<style>\n'+css+'\n</style>')
html=html.replace('src="assets/INNOWINE_original_logo.png"','src="data:image/png;base64,'+base64.b64encode(logo).decode()+'"')
for name,text in [('config.js',config),('content.js',content),('app.js',app)]:
 assert '</script' not in text.lower()
 html=html.replace(f'<script src="{name}"></script>','<script>\n'+text+'\n</script>')
assert '<script src=' not in html and 'href="styles.css"' not in html
standalone=out/'INNOWINE_D3.5_PLAY_NOW.html'
standalone.write_text(html,encoding='utf-8')
zip_path=out/'INNOWINE_D3.5_Gamified_Simulator_GitHub_Ready.zip'
with zipfile.ZipFile(zip_path,'w',compression=zipfile.ZIP_DEFLATED,compresslevel=6) as zipf:
 for f in sorted(root.rglob('*')):
  if f.is_file() and '__pycache__' not in str(f):
   zipf.write(f,f.relative_to(root))
print('standalone:',standalone,standalone.stat().st_size)
print('zip:',zip_path,zip_path.stat().st_size)
print('original logo SHA256:',__import__('hashlib').sha256(logo).hexdigest())
