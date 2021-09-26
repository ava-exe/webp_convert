
export default function(): Promise<void> {
	return new Promise( (res, rej) => {
		setTimeout( () => res(), 3000)
	})
}