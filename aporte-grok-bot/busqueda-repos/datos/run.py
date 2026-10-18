import json,time,urllib.request,urllib.parse,os
out={}
for n,line in enumerate(open('queries.txt')):
    line=line.strip()
    if not line: continue
    proj,q=line.split('|',1)
    url="https://api.github.com/search/repositories?"+urllib.parse.urlencode({'q':q,'sort':'stars','order':'desc','per_page':100})
    for attempt in range(4):
        try:
            r=urllib.request.urlopen(urllib.request.Request(url,headers={'User-Agent':'s','Accept':'application/vnd.github+json'}),timeout=30)
            d=json.load(r);break
        except Exception as e:
            print('err',q,e,flush=True);time.sleep(30);d=None
    if d:
        json.dump({'proj':proj,'q':q,'d':d},open(f'r{n:03d}.json','w'))
        print(n,proj,q,d['total_count'],len(d['items']),flush=True)
    time.sleep(7)
print('DONE')
