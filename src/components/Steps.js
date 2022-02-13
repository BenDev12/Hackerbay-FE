export const Steps = (event, m_jumps, m_steps) =>{
    if (event.keyCode === 37){
		let mario = document.getElementsByClassName('mario')
		let marioid = mario[0].id
		let move = document.getElementById(marioid-1)
		if(move != null){
			if(move.classList.contains('active')){
				move.classList.toggle('active')
			}
			move.innerHTML = document.getElementById(marioid).innerHTML
			document.getElementById(marioid).innerHTML = ""
			document.getElementById(marioid).classList.toggle('mario')
			move.classList.toggle('mario')
			marioid = marioid-1
		}
		else{
			m_steps = m_steps-1
		}
		
	}
	if (event.keyCode === 38){
		let mario = document.getElementsByClassName('mario')
		let marioid = mario[0].id
		let move_up = parseInt(marioid,10) - parseInt(m_jumps,10);
		let move = document.getElementById(move_up)
		if(move != null){
			if(move.classList.contains('active')){
				move.classList.toggle('active')
			}
			move.innerHTML = document.getElementById(marioid).innerHTML
			document.getElementById(marioid).innerHTML = ""
			document.getElementById(marioid).classList.toggle('mario')
			move.classList.toggle('mario')
			marioid = marioid-m_jumps
		}
		else{
			m_steps = m_steps-1
		}
	}
	
	if (event.keyCode ===39){
		let mario = document.getElementsByClassName('mario')
		let marioid = mario[0].id
		let move_right = parseInt(marioid,10) + 1
		let move = document.getElementById(move_right)
		if(move != null){
			if(move.classList.contains('active')){
				move.classList.toggle('active')
			}
			move.innerHTML = document.getElementById(marioid).innerHTML

			document.getElementById(marioid).innerHTML = ""
			document.getElementById(marioid).classList.toggle('mario')
			move.classList.toggle('mario')
			marioid = marioid+1
		}
		else{
			m_steps = m_steps-1
		}
	}
	
	if (event.keyCode === 40){
		let mario = document.getElementsByClassName('mario')
		let marioid = mario[0].id
		let move_up = parseInt(marioid,10) + parseInt(m_jumps,10)
		let move = document.getElementById(move_up)
		if(move != null){
			if(move.classList.contains('active')){
				move.classList.toggle('active')
			}
			move.innerHTML = document.getElementById(marioid).innerHTML
			document.getElementById(marioid).innerHTML = ""
			document.getElementById(marioid).classList.toggle('mario')
			move.classList.toggle('mario')
			marioid = marioid+m_jumps
		}
		else{
			m_steps = m_steps-1
		}
	}
}