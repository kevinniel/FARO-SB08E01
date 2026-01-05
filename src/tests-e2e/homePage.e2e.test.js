import puppeteer from "puppeteer";

describe('App', () => {
    let browser;
    let page;

    beforeAll(async () => {
        // {headless: false}
        // pour voir ce qui se passe dans le navigateur
        browser = await puppeteer.launch({headless: false, slowMo: 15});
        page = await browser.newPage();
    });

    afterAll(async () => {
        browser.close();
    });

    test('Lauch home page', async() => {
        await page.goto('http://localhost:3000');
        await expect(page.title()).resolves.toMatch('Le livre d-o-r');
    });

    test('Send data', async() => {
        await page.goto('http://localhost:3000');
        await page.type('#name', 'Peuplu');
        await page.type('#firstname', 'Jean');
        await page.type('#email', 'jpp@gmail.com');
        await page.type('#content', "Salut !\nIl est trop bien ce site, c'est trop top!\n😙");
        await page.click('button.button');
        await page.waitForSelector('body');
        const classes = await page.$eval('div.notification', e => [...e.classList]);
        expect(classes).toContain('is-success');
    });
});