function navigate(screenId) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });

    // Show the selected screen
    document.getElementById(screenId).classList.add('active');
}


function calculate(screenId) {
    if(screenId == 'screen1')
    {
        let input1 = parseFloat(document.getElementById(`${screenId.replace('screen', 'input')}-1`).value) || 0;
        let input2 = parseFloat(document.getElementById(`${screenId.replace('screen', 'input')}-2`).value) || 0;
        let input3 = parseFloat(document.getElementById(`${screenId.replace('screen', 'input')}-3`).value) || 0;
        let input4 = parseFloat(document.getElementById(`${screenId.replace('screen', 'input')}-4`).value) || 0;
        let input5 = parseFloat(document.getElementById(`${screenId.replace('screen', 'input')}-5`).value) || 0;
      
        // Simple calculation (can be replaced with any logic)
        let result1 = (input1 * input2)+ input5;
        let result2 = input1 * input3 * (1 + (input4/100));
        let result3 = result1 - result2;
        document.getElementById(`result${screenId.replace('screen', '')}-1`).textContent = result1;
        document.getElementById(`result${screenId.replace('screen', '')}-2`).textContent = result2;
        document.getElementById(`result${screenId.replace('screen', '')}-3`).textContent = result3;

    }
    if(screenId == 'screen2')
    {
        let input1 = parseFloat(document.getElementById(`${screenId.replace('screen', 'input')}-1`).value) || 0;
        let input2 = parseFloat(document.getElementById(`${screenId.replace('screen', 'input')}-2`).value) || 0;
        let input3 = parseFloat(document.getElementById(`${screenId.replace('screen', 'input')}-3`).value) || 0;
        let input4 = parseFloat(document.getElementById(`${screenId.replace('screen', 'input')}-4`).value) || 0;
        
        // Simple calculation (can be replaced with any logic)
        let result1 = (input1 * input2) / 2;
        let result2 = (input1 * input3 * (1 + (input4/100))) /2;
        let result3 = result1 - result2;
        document.getElementById(`result${screenId.replace('screen', '')}-1`).textContent = result1;
        document.getElementById(`result${screenId.replace('screen', '')}-2`).textContent = result2;
        document.getElementById(`result${screenId.replace('screen', '')}-3`).textContent = result3;

    }
    
}

// Show the first screen on load
document.addEventListener('DOMContentLoaded', () => {
    navigate('screen1');
});
