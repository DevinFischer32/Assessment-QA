import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    
});

describe('Placing X on the board', async ()=> {
    test('I can place a X in upper left corner', async () =>{
        await driver.sleep(1000)
        await driver.findElement(By.id('cell-0')).click()
        await driver.sleep(1000)
    }),
    test('I can place a X in upper right corner', async () =>{
        await driver.sleep(1000)
        await driver.findElement(By.id('cell-2')).click()
        await driver.sleep(1000)
    }),
    test('I can place a X in bottom right corner', async () =>{
        await driver.sleep(1000)
        await driver.findElement(By.id('cell-8')).click()
        await driver.sleep(1000)
    })
})
describe('Checking for O player', async ()=>{
    test("Looking for O's", async ()=>{
        await driver.sleep(1000)
        let cell2 = await driver.findElement(By.id('cell-2'))
        expect(cell2).toBeTruthy()
    })
})