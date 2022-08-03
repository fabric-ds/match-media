# match-media plugin

## install

```sh
pnpm add -D @fabric-ds/match-media
```

## use

```js
import { setupMedia } from '@fabric-ds/match-media'

setupMedia((mediaChange) => {
  console.log("Window size changed", mediaChange.name, "is now", mediaChange.matches)
})
```
