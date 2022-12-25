from requests import get

class SantropeRP:
	def __init__(self) -> None:
		self.api = "https://ln.bh-rp.com/s"
		self.headers = {
			"user-agent": "Dalvik/2.1.0 (Linux; U; Android 9; RMX3551 Build/PQ3A.190705.003)"
		}

	def get_urls(self) -> dict:
		return get(
			f"{self.api}/v13_urls.json", headers=self.headers).json()

	def get_versions(self) -> dict:
		return get(
			f"{self.api}/v13_versions.json", headers=self.headers).json()

	def get_news(self) -> dict:
		return get(
			f"{self.api}/v1_news.json", headers=self.headers).json()

	def get_servers(self) -> list:
		return get(
			f"{self.api}/v13_svr_info.json", headers=self.headers).json()

	def get_config(self) -> dict:
		return get(
			f"{self.api}/v9_config.json", headers=self.headers).json()
