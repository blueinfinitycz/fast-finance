import { getJson } from './promise';

test('promise - get json:', async () => {
  const data = await getJson('some url');
  expect(data).toMatchObject({ obj: { code: 200 } });
});
