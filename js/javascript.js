/**
 * This will change the button color depending on form selection
 * @select - retrieves the form element
 * @job - sets 'job' variable depending on what is selected in the dropdown
 * @button - retrieves the 'submit' button
*/
function colorChange() {
    let select = document.getElementById('job');
    let job = select.options[select.selectedIndex].text;
    let tank = ['Paladin', 'Warrior', 'Dark Knight', 'Gunbreaker'];
    let healer = ['White Mage', 'Scholar', 'Astrologian', 'Sage'];
    let button = document.getElementById('submit');

    if ( tank.includes(job) ) {
        button.style.background = '#2d3a80';
        button.style.color = '#e8eeef';
    } else if ( healer.includes(job) ) {
        button.style.background = '#346624';
        button.style.color = '#e8eeef';
    } else {
        button.style.background = '#732828';
        button.style.color = '#e8eeef';
    }
}


