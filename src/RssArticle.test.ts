import { RssArticle } from './RssArticle';
import { describe, test, expect } from 'vitest';

describe('RssArticle', () => {
  describe('#fetchArticles()', () => {
    describe('正常系', () => {
      test.todo('RSSのURLにリクエストした結果が空の場合、空配列が返る');
      test.todo('RSSのURLにリクエストした結果が1つ以上存在する場合、Articleの配列が返る');
      test('urlが空文字の場合空配列が返る', async () => {
        const rssArticle = new RssArticle();
        const feedSource = { Name: '', Url: '' };
        const result = await rssArticle.fetchArticles(feedSource);
        expect(result).toEqual([]);
      });
    });

    describe('異常系', () => {
      test.todo('urlが不正な値の場合エラーが返る');
      test.todo('URLへのリクエストに失敗した場合、hogehoge');
    });
  });
});
