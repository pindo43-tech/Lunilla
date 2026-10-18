import json,glob,re,os
PAT={
'menstrual':r'menstru|period.?(track|app|calend|log|predict|diary)|cycle.?(track|app|calend|predict|journal)|fertil|ovulat|femtech|symptotherm|family planning|ciclo|menses|\bpms\b|\bnfp\b|period|regla',
'menopause':r'menopaus|perimenopaus|hot.?flash|hot.?flush|climat[eé]r|menopausia|menopausa',
'makeup':r'make.?up|maquill|lipstick|lip.?colou?r|cosmetic|eyeshadow|eye.?liner|blush|beauty|face.?filter|facefilter|foundation.?shade|shade|skin.?tone|try.?on|face.?mesh|face.?landmark|\bar\b|webar',
'hair':r'\bhair|peinado|cabello|\bpelo\b|barber|haircut',
}
STRICT={'menstrual':r'menstru|period|cycle|fertil|ovulat|femtech|symptotherm|ciclo|menses|regla|nfp','makeup':r'make.?up|maquill|lipstick|lip|cosmetic|eyeshadow|liner|blush|beauty|face.?filter|facefilter|shade|skin.?tone|foundation|face'}
TIGHT={
'menstrual':r'menstru|period.?(track|app|calend|log|predict|diary|journal)|periodtracker|cycle.?(track|predict|journal|calend)|fertility|ovulat|femtech|symptotherm|family.?planning|ciclo.?menstrual|\\bpms\\b|\\bnfp\\b|menses',
'menopause':r'menopaus|hot.?flash|hot.?flush|climat[eé]r|wechseljahre',
'makeup':r'make.?up|maquill|lipstick|lip.?(colou?r|tint|gloss)|cosmetic|eyeshadow|eye.?liner|virtual.?try|try.?on|face.?filter|beauty.?(filter|camera|cam|face|effect)|face.?beaut|foundation.?shade|skin.?tone|webar|face.?(mesh|landmark|track|parsing)|ar.?face|augmented.?face|selfie.?filter|美颜|美妆|化妆|妆',
'hair':r'hair.?(style|cut|colou?r|segment|transfer|dye|try|edit|recolor|salon|look|mask|parsing|gan|clip|fast|swap|change|generat)|haircut|peinado|color.de.pelo|cabello|try.?on.*hair|virtual.?hair|bald|hair.?and.?(face|skin)|face.*hair',
}
repos={}  # (proj,full)->item
for f in sorted(glob.glob('r*.json'))+sorted(glob.glob('x*.json')):
    j=json.load(open(f)); proj=j['proj']
    for it in j['d']['items']:
        txt=' '.join([it['full_name'],it.get('description') or '',' '.join(it.get('topics') or [])]).lower()
        extra=j.get('extra',False)
        if not extra and not re.search(PAT[proj],txt): continue
        if not extra and not re.search(TIGHT[proj],txt): continue
        repos[(proj,it['full_name'].lower())]=(it,extra or repos.get((proj,it['full_name'].lower()),(None,False))[1])
out={}
for (p,_),(it,ex) in repos.items():
    lic=(it.get('license') or {}).get('spdx_id') or 'Sin licencia'
    out.setdefault(p,[]).append(dict(full=it['full_name'],url=it['html_url'],stars=it['stargazers_count'],lic=lic,lang=it.get('language') or '-',pushed=(it.get('pushed_at') or '')[:10],desc=(it.get('description') or '').replace('|','/').replace('\n',' ')[:140],archived=it.get('archived'),fork=it.get('fork'),prev=ex))
for p in out: out[p].sort(key=lambda r:-r['stars'])
json.dump(out,open('agg.json','w'),ensure_ascii=False,indent=0)
for p in out: print(p,len(out[p]))
