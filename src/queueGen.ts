import path from "path";
const { exec } = require("child_process")

const EXTS = [".png", ".jpg", ".jpeg"]

export default function(dir: string, file:string) {
	const ext = path.extname(file)
	if (!EXTS.includes(ext)) return

	// probably should have done it as file.jpg.webp and not file.webp-- too late
	// const webpFile = file + ".webp"

	const webpFile = file.replace(ext, ".webp")

	const commands = ["cwebp", `"${file}"`, "-o " + `"${webpFile}"`]

	if (false) // (ext == ".png")
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

