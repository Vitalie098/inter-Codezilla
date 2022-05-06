const browsersync = require("browser-sync")

module.exports =  server = () => {
	return browsersync.init({
		server : {
			baseDir: `./`
		},
		notify: false,
		port: 3000,
	})
}