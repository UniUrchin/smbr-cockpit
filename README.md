# smbr-cockpit

[SMBR(summiko-brain)](https://github.com/UniUrchin/sumikko-brain)をブラウザ上で実行できるようにしたWebアプリケーション。色んなことがしたかったので欲張りました。

## 🛠️ Develop

- 開発用サーバをローカルに立ち上げる

```
$ npm run dev
```

- Rustで作ったWASMモジュールをエクスポートする

```
$ npm run build:wasm
```

- WebアプリケーションをNetlifyにデプロイする

```
$ npm run deploy
```

> ⚠️ Netlifyの自動ビルドを意図的に止めているので、「Publish Deploy」を選択しないとデプロイされないことに注意!!