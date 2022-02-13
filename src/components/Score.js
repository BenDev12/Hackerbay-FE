
export function Score (m_steps, max_mushroom){
   
    let score_achived  = document.getElementById('milestones')
	let m_steps_score = document.getElementById('steps')
	m_steps_score.innerHTML = m_steps
	score_achived.innerHTML = max_mushroom - document.getElementsByClassName('active').length
}

