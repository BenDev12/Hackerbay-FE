export function Randomizer(array){
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		let temp_data = array[i];
		array[i] = array[j];
		array[j] = temp_data;
	}
	return array
}
