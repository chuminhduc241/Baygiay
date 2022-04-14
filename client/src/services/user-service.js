import { ServiceBase } from "config/service-base";

export class UserServices extends ServiceBase {
	// Implement method call API
	update = async (params) => {
		return await this.post("/user/update-info", params);
	};
	getInfo = async (params) => {
		const { username } = params;
		return await this.post("/user/info", { username });
	};
}
