const { chromium } = require('playwright');
const assert = require('node:assert/strict');
const http = require('node:http');
const fs = require('node:fs/promises');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const server = http.createServer(async (req, res) => {
  const pathname = new URL(req.url, 'http://localhost').pathname;
  const target = path.resolve(root, '.' + decodeURIComponent(pathname === '/' ? '/index.html' : pathname));
  if (!target.startsWith(root + path.sep)) { res.writeHead(403); res.end(); return; }
  try {
    const data = await fs.readFile(target);
    const types = {'.html':'text/html','.css':'text/css','.js':'text/javascript','.png':'image/png','.svg':'image/svg+xml'};
    res.setHeader('Content-Type', types[path.extname(target)] || 'application/octet-stream');res.end(data);
  } catch { res.writeHead(404); res.end(); }
});
(async () => {
  let browser;
  try {
    await new Promise(resolve => server.listen(0,'127.0.0.1',resolve));
    const base = `http://127.0.0.1:${server.address().port}`;
    browser = await chromium.launch({executablePath:process.env.CHROMIUM_PATH || '/usr/bin/chromium',headless:true,args:['--no-sandbox']});
    const page = await browser.newPage({viewport:{width:1440,height:1000}});
    page.setDefaultTimeout(8000);
    const errors=[];page.on('pageerror',e=>{errors.push(e.message);console.error('PAGE ERROR:',e.message);});
    await page.route('https://**',route=>route.abort());
    await page.goto(base+'/index.html');
    await page.getByRole('link',{name:'Trouver mon compagnon'}).click();
    assert.match(page.url(), /animaux.html/);
    await page.locator('.companion-card').first().waitFor();
    assert.equal(await page.locator('.companion-card').count(),7);
    await page.getByRole('button',{name:'Chiens 04',exact:true}).click();
    assert.equal(await page.locator('.companion-card').count(),4);
    await page.getByLabel('Âge',{exact:true}).selectOption('senior');
    assert.equal(await page.locator('.companion-card h3').innerText(),'Oscar');
    await page.getByRole('button',{name:'Ajouter Oscar aux coups de cœur',exact:true}).click();
    assert.equal(await page.locator('#saved-count').innerText(),'1');
    await page.reload();
    assert.equal(await page.locator('.companion-card h3').innerText(),'Oscar');
    assert.equal(await page.getByRole('button',{name:'Retirer Oscar des coups de cœur',exact:true}).getAttribute('aria-pressed'),'true');
    await page.getByRole('button',{name:'Chats 03',exact:true}).click();
    assert.equal(await page.locator('.companion-card').count(),0);
    assert.equal(await page.locator('#empty-results').isVisible(),true);
    await page.getByRole('button',{name:'Voir tous les compagnons',exact:true}).click();
    await page.getByLabel('Un prénom, un caractère').fill('énergique');
    assert.equal(await page.locator('.companion-card h3').innerText(),'Luna');
    await page.getByRole('button',{name:'Réinitialiser',exact:true}).click();
    await page.getByLabel('Sexe',{exact:true}).selectOption('femelle');
    assert.equal(await page.locator('.companion-card').count(),3);
    await page.getByLabel('Trier par').selectOption('age');
    assert.deepEqual(await page.locator('.companion-card h3').allTextContents(),['Luna','Plume','Nala']);
    await page.getByRole('button',{name:'Réinitialiser',exact:true}).click();
    await page.locator('#saved-filter').click();
    assert.equal(await page.locator('.companion-card h3').innerText(),'Oscar');
    await page.getByRole('button',{name:'Retirer Oscar des coups de cœur',exact:true}).click();
    assert.equal(await page.locator('#empty-results').isVisible(),true);
    assert.equal(await page.locator('#saved-filter').evaluate(e=>e===document.activeElement),true);
    await page.getByRole('button',{name:'Voir tous les compagnons',exact:true}).click();
    await page.getByRole('link',{name:'Découvrir Oscar',exact:true}).click();
    assert.match(await page.locator('h1').innerText(),/Oscar/);
    await page.locator('#profile-save').click();
    await page.locator('.back-catalog').click();
    await page.locator('#saved-filter').click();
    assert.equal(await page.locator('.companion-card h3').innerText(),'Oscar');
    await page.goto(base+'/animal.html?id=inconnu');
    assert.match(await page.locator('h1').innerText(),/introuvable/);
    for(const id of ['milo','plume','oscar','luna','nala','simba','rio']) {
      await page.goto(base+'/animal.html?id='+id);
      assert.equal(await page.locator('.profile-photo img').evaluate(img=>img.complete && img.naturalWidth>0),true);
      assert.equal(await page.locator('.related-card').count(),2);
    }
    for (const width of [1440,768,390,320]) {
      await page.setViewportSize({width,height:950});
      for (const route of ['/index.html','/animaux.html','/animal.html?id=oscar']) {
        await page.goto(base+route);
        assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,`${route} overflows at ${width}`);
      }
    }
    await page.setViewportSize({width:390,height:844});
    await page.goto(base+'/animaux.html');
    await page.getByRole('button',{name:'Menu',exact:false}).click();
    assert.equal(await page.locator('#navigation').isVisible(),true);
    await page.keyboard.press('Escape');
    assert.equal(await page.locator('#navigation').isVisible(),false);
    await page.screenshot({path:'/tmp/animals-mobile.png',fullPage:true});
    await page.setViewportSize({width:1440,height:1000});
    await page.screenshot({path:'/tmp/animals-desktop.png',fullPage:true});
    await page.goto(base+'/animal.html?id=oscar');
    await page.screenshot({path:'/tmp/oscar-desktop.png',fullPage:true});
    assert.deepEqual(errors,[]);
    console.log('PASS: navigation, combined filters, search, sort, empty states, saved portraits, reload, all 7 profiles, unknown profile, 4 screen widths, mobile menu, no JavaScript errors.');
  } finally { if(browser) await browser.close(); server.close(); }
})().catch(error=>{console.error(error);process.exitCode=1;});
