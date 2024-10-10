# santrope_rp.js
Mobile-API for [santrope](https://santrope-rp.com) an role-playing mobile game based on GTA San Andreas

## Example
```JavaScript
async function main() {
	const { SantropeRp } = require("./santrope_rp.js")
	const santropeRp = new SantropeRp()
	const servers = await santropeRp.getServers()
  console.log(servers)
}

main()
```
