import json,time,urllib.request,urllib.parse,glob
seen=set()
for f in glob.glob('r*.json'):
    for it in json.load(open(f))['d']['items']: seen.add(it['full_name'].lower())
ex=[l.split() for l in open('extras.txt') if l.strip()]
names=sorted({n for _,n in ex})
batch=[names[i:i+12] for i in range(0,len(names),12)]
items={}
for b in batch:
    q=' '.join('repo:'+n for n in b)
    url="https://api.github.com/search/repositories?"+urllib.parse.urlencode({'q':q,'per_page':100})
    try:
        d=json.load(urllib.request.urlopen(urllib.request.Request(url,headers={'User-Agent':'s'}),timeout=40))
        for it in d['items']: items[it['full_name'].lower()]=it
        print(len(b),len(d['items']),flush=True)
    except Exception as e: print('err',e,b,flush=True)
    time.sleep(7)
missing=[n for n in names if n.lower() not in items]
print('missing',missing)
byproj={}
for p,n in ex:
    if n.lower() in items: byproj.setdefault(p,[]).append(items[n.lower()])
for p,its in byproj.items():
    json.dump({'proj':p,'q':'extras','extra':True,'d':{'items':its}},open(f'x_{p}.json','w'))
