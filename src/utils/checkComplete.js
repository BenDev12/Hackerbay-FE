export function checkGameOver (m_steps) {
	let current = document.getElementsByClassName('active')
	if(current.length === 0){
		let game_over = window.confirm("You have finished the game in "+ m_steps + " steps.");
		if (game_over === true){
			window.location.reload()
		}
	}
}
