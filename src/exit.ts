

export default function() {
	console.log("")
	console.log("")
	console.log("press any button to close this window")
	process.stdin.setRawMode(true);
	process.stdin.resume();
	process.stdin.on('data', process.exit.bind(process, 0));
}