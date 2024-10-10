class SantropeRp {
	constructor() {
		this.api = "https://ln.bh-rp.com/s"
		this.headers = {
			"user-agent": "Dalvik/2.1.0 (Linux; U; Android 9; RMX3551 Build/PQ3A.190705.003)"
		}
	}

	async getUrls() {
		const response = await fetch(
			`${this.api}/v13_urls.json`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getVersions() {
		const response = await fetch(
			`${this.api}/v13_versions.json`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getNews() {
		const response = await fetch(
			`${this.api}/v1_news.json`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getServers() {
		const response = await fetch(
			`${this.api}/v13_svr_info.json`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getConfig() {
		const response = await fetch(
			`${this.api}/v9_config.json`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}
}

module.exports = {SantropeRp}
