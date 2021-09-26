import path from "path";
const { exec } = require("child_process")

const EXTS = [".png", ".jpg", ".jpeg"]

export default function(dir: string, file:string) {
	const ext = path.extname(file)
	if (!EXTS.includes(ext)) return

	const webpFile = file.replace(ext, ".webp")
	const commands = ["cwebp", file, "-o " + webpFile]

	if (ext == ".png")
		commands.splice(2, 0, "-lossless")

	return execCmd( commands.join(" ") )
}

function execCmd (command: string): Promise<void> {
	return new Promise( (resolve, reject) => {
		exec(command, (error: Error, stdout: string, stderr: string) => {

			if (error) {
				console.error("EXEC ERROR: " + error)
				reject(error.message)
				return
			}
			// if (stderr) {
			// 	console.error("STDERR: " + stderr)
			// 	reject(stderr)
			// 	return
			// }
			console.error("stderr: " + stderr)
			console.log(`stdout: ${stdout}`);
			resolve()
		})
	})
}

