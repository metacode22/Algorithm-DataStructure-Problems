function isSame(skill, target) {
    for (let i = 0; i < target.length; i++) {
        if (skill[i] !== target[i]) {
            return false;
        }
    }
    
    return true;
}

function solution(skill, skill_trees) {
    let result = 0;
    
    skill_trees.forEach((element) => {
        let compare = '';
        
        for (let currentSkill of element) {
            if (skill.includes(currentSkill) === true) {
                compare += currentSkill;
            }
            
            if (isSame(skill, compare) === false) {
                return;
            } 
        }
        
        result += 1;
    })
    
    return result;
}