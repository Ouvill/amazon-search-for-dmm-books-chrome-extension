# ![](src/assets/img/icon-128.png) Chrome拡張 "DMM BOOKSからAmazonの商品を検索する"

DMMブックスの100冊限定セールで商品を探す時に、Amazonのコメントを参考にしたい。そんな貴方に。

DMMの商品ページを開くと、Amazonで商品を検索するボタンが追加されます。

![](./screenshot/screenshot.png)

## インストール方法

### Chromeストアよりダウンロード

[Chrome Web Store](https://chrome.google.com/webstore/detail/dmm-books%E3%81%8B%E3%82%89amazon%E3%81%AE%E5%95%86%E5%93%81%E3%82%92%E6%A4%9C%E7%B4%A2%E3%81%99%E3%82%8B/kjbojocegbacooocggbocjemcahdeehm?hl=ja&authuser=0)よりインストールできます。

[![](doc/images/chrome-web-store.png)](https://chrome.google.com/webstore/detail/dmm-books%E3%81%8B%E3%82%89amazon%E3%81%AE%E5%95%86%E5%93%81%E3%82%92%E6%A4%9C%E7%B4%A2%E3%81%99%E3%82%8B/kjbojocegbacooocggbocjemcahdeehm?hl=ja&authuser=0)

### zipをダウンロードしてインストール

リリースページより"amazon-searh-for-dmm-books.zip"をダウンロードしてください。

https://github.com/Ouvill/amazon-search-for-dmm-books-chrome-extension/releases/

ダウンロードしたら解凍してください。

chromeのアドレスバーに`chrome://extensions/`を入力してください。

「パッケージ化されていない拡張機能を読み込む」もしくは「Load unpacked」をクリックしてください。

解凍してできたフォルダを選択してください。

以上で拡張機能が有効になります。


## Build

```
npm ci
npm run build
```

## Contribution

Pull Request受付中です。
