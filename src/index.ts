import { statSync } from "fs"
import { readdir } from "fs/promises"
import path from "path"
import exit from "./exit"
import queueGen from "./queueGen"

async function start() {
	let curDir = "./"
	await gen(curDir)
	exit()
}

async function gen(curDir: string) {
	try {
		await genFiles(curDir)
	} catch (e) {
		console.error(e)
		exit()
	}
}

async function genFiles(curDir: string) {
	console.log("curDir: " + curDir)
	const files = await readdir(curDir)

	const dirs: string[] = []
	// files.forEach( fileName => {
	for (let i in files) {
		const fileName = files[i]
		const file = curDir + fileName
		if (statSync(file).isDirectory()) {
			dirs.push(fileName)
			continue
		}

		await queueGen(curDir, file)
	}

	for (let i in dirs) {
		const dir = dirs[i]
		const dirPath = curDir + dir + "/"
		await gen(dirPath)
	}
}

start()


// function readDir(curDir: string) {
// 	return new Promise( (resolve, reject) => {
// 		fs.readdir(curDir, function (err, files) {
// 			if (err) return reject(err)
// 			resolve(files)
// 		})
// 	})
// }
