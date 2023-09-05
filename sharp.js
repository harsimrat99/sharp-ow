const sharp = require("sharp");
const axios = require("axios");

function main(args) {
	return answer =  getBuffer("https://assets.digitalocean.com/how-to-process-images-in-node-js-with-sharp/sammy.png").then((res)=>{
		resizeImage(res.data).then((answer)=>{
			str = answer.toString("base64")			
			return {
				body: str
			};
		});		
	});			
}

function getBuffer(url) {
	return axios
		.get(url, {
			responseType: "arraybuffer",
		})
		.then((res) => {
			return res;
		});
}

function resizeImage(buffer) {
	try {		
		return sharp(buffer)
			.resize({
				width: 150,
				height: 97,
			})
			.toBuffer()
			.then((data) => {				
				return data;
			})
			.catch((err) => {
				console.log(err);
				return null;
			});
	} catch (error) {
		console.log(error);
	}
}