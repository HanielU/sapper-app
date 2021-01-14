const ghpages = require("gh-pages");

ghpages.publish(
	"__sapper__/export/my-app",
	{
		branch: "master",
		repo: "https://github.com/HanielU/HanielU.github.io.git",
		user: {
			name: "HanielU",
			email: "hanieltobi.gmail.com",
		},
	},
	() => {
		console.log("Deploy Complete!");
	}
);
