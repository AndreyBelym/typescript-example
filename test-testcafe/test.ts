import { Selector } from 'testcafe';

fixture`Example`.page`example.com`;

test(`1`, async t => {
    await t.expect(Selector('body').exists).ok();
});