/* Global Variables */

/* Tank Job Objects*/

const tanks = [
    {
        'job': 'Paladin',
        'image': '<img src="../images/tanks/PAL.png" alt="Paladin shield job symbol">',
        'desc': "These men and women marry exquisite swordplay with stalwart shieldwork to create a style of combat uncompromising in its defense. To be a paladin is to protect, and those who choose to walk this path will become the iron foundation upon which the party's defense is built."
    },
    {
        'job': 'Warrior',
        'image': '<img src="../images/tanks/WAR.png" alt="Warrior axe job symbol">',
        'desc': 'Wielding greataxes and known as warriors, these men and women learn to harness their inner-beasts and translate that power to unbridled savagery on the battlefield.In former times which saw war waged ceaselessly in Eorzea, the warriors featured prominently on the front lines of battle.'
    },
    {
        'job': 'Dark Knight',
        'image': '<img src="../images/tanks/DRK.png" alt="Dark Knight magic job symbol">',
        'desc': 'A valiant few take up arms to defend the downtrodden, and not even the holy priests and knights can escape their judgment. Pariahs in their own land, they are known by many as “dark knights.” These sentinels bear no shields declaring their allegiance. Instead, their greatswords act as beacons to guide the meek through darkness.'
    },
    {
        'job': 'Gunbreaker',
        'image': '<img src="../images/tanks/GNB.png" alt="Gunbreaker barrel job symbol">',
        'desc': 'The Hrothgar of northern Ilsabard have passed the art of the gunblade from one generation to the next. The weapon itself combines a sword with a firing mechanism, emitting a range of magical effects by utilizing aetherially imbued cartridges.'
    }
]

/* Healer Job Objects */

const healers = [
    {
        'job': 'White Mage',
        'image': '<img src="../images/healers/WHM.png" alt="White Mage staff job symbol">',
        'desc': 'White magic, the arcane art of succor, was conceived eras past that the world might know comfort. Those who would walk the path of the white mage are healers without peer, possessed of the power to deliver comrades from the direst of afflictions—even the icy grip of death itself.',
    },
    {
        'job': 'Scholar',
        'image': '<img src="../images/healers/SCH.png" alt="Scholar grimoire job symbol">',
        'desc': "These learned men and women defended the freedom of their tiny nation with their unique command over spell-weaving faeries, utilizing the creatures' magicks to heal the wounded and bolster the strength of their allies."
    },
    {
        'job': 'Astrologian',
        'image': '<img src="../images/healers/AST.png" alt="Astrologian tarot job symbol">',
        'desc': 'By attuning their aetherial energies to that of constellations, they learned to wield magicks with heretofore unseen properties. Thus was astromancy born—a new form of magick which grants its users power over fate. Employing a star globe and divining deck in their miraculous deeds, fortune always smiles upon these masters of arcana.'
    },
    {
        'job': 'Sage',
        'image': '<img src="../images/dalamud.png" alt="Dalamud Moon FFXIV Symbol">',
        'desc': 'There is little known about this new job coming to Eorzea; however, given time, we shall know more about this mystical, Noulith-wielding healer.'
    }
]

/* DPS Job Objects */

const melee = [
    {
        'job': 'Monk',
        'image': '<img src="../images/dps/Melee DPS/MNK.png" alt="Monk angled line job symbol">',
        'desc': 'The monks comprised an order known as the Fist of Rhalgr, and it was to this god—the Destroyer—that they devoted their lives of worship. By mastering seats of power within the body known as chakra, they are capable of performing extraordinary physical feats.'
    },
    {
        'job': 'Dragoon',
        'image': '<img src="../images/dps/Melee DPS/DRG.png" alt="Dragoon spear job symbol">',
        'desc': 'Born amidst the timeless conflict between men and dragons, these lance-wielding knights have developed an aerial style of combat, that they might better pierce the scaled hides of their mortal foes.'
    },
    {
        'job': 'Ninja',
        'image': '<img src="../images/dps/Melee DPS/NIN.png" alt="Ninja shuriken job symbol">',
        'desc': 'Able to manipulate the vital energies of the land, the air, and living beings, they manifest their power through the weaving of signs, unleashing a wide array of attacks against their foes. Master the arts of the ninja and learn to bend the tide of battle to your will.'
    },
    {
        'job': 'Samurai',
        'image': '<img src="../images/dps/Melee DPS/SAM.png" alt="Samurai katana hilt job symbol">',
        'desc': "In the distant past, the realm's great lords vied for supremacy over its seagirt confines in a long and bloody conflict. And taking to battle in their lieges' names were noble swordsmen whose art was forged in the crucible of war: the samurai."
    },
    {
        'job': 'TBD',
        'image': '<img src="../images/dalamud.png" alt="Dalamud Moon FFXIV Symbol">',
        'desc': 'Little to nothing is known about this new job, other than that there is a new heavy-armered, close-ranged fighter coming to Eorzea to spread their knowledge.'
    }
]

const magical = [
    {
        'job': 'Black Mage',
        'image': '<img src="../images/dps/Magical DPS/BLK.png" alt="Black Mage fireball job symbol">',
        'desc': 'In days long past, there existed an occult and arcane art known as black magic—a potent magic of pure destructive force born forth by a sorceress of unparalleled power. Those who learned to wield this instrument of ruin came to be called black mages, out of both fear and respect for their gift.'
    },
    {
        'job': 'Summoner',
        'image': '<img src="../images/dps/Magical DPS/SMN.png" alt="Summoner magic job symbol">',
        'desc': "In times immemorial, there lived mages who had not only the power to summon the primals, but also the means to transmute the primals' essences, thus binding them to their will. Known simply as summoners, the existence of these men and women and their arcane art have been all but lost to the ages."
    },
    {
        'job': 'Red Mage',
        'image': '<img src="../images/dps/Magical DPS/RDM.png" alt="Red Mage saber job symbol">',
        'desc': 'Sworn enemies buried their history for the sake of the future, and cast aside their vestments of black and white. Upon the remnants of their arts a new discipline was built, and the first red mages stepped forward with rapiers in hand to fight back against the rising tides of destruction.'
    },
    {
        'job': 'Blue Mage',
        'image': '<img src="../images/dps/Magical DPS/BLU.png" alt="Blue Mage mask job symbol">',
        'desc': 'So-called mage of rather questionable character claims to have mastered an outlandish form of spellcasting that resembles neither black nor white magic during his voyage to the New World. Allegedly, anyone who purchases one of his soul crystals can learn to mimic the aetherial magicks of wild creatures.'
    }
]

const ranged = [
    {
        'job': 'Bard',
        'image': '<img src="../images/dps/Ranged DPS/BRD.png" alt="Bard harp job symbol">',
        'desc': 'Their origins back to the bowmen of eld, who sang in the heat of battle to fortify the spirits of their companions. In time, their impassioned songs came to hold sway over the hearts of men, inspiring their comrades to great feats and granting peace unto those who lay upon the precipice of death.'
    },
    {
        'job': 'Machinist',
        'image': '<img src="../images/dps/Ranged DPS/MCH.png" alt="Machinist pistol job symbol">',
        'desc': 'Ishgard turns to technology to protect her sons and daughters. The Skysteel Manufactory works tirelessly on the development of advanced armaments. As new and devastating weapons are brought to the fray, a new class of champion arises to wield them―the machinist.'
    },
    {
        'job': 'Dancer',
        'image': '<img src="../images/dps/Ranged DPS/DNC.png" alt="Dancer heart job symbol">',
        'desc': 'Inured to the hardships of the road, these dancers have learned to land throwing weapons with the same exacting precision as their footfalls, removing any who would obstruct the endless beat of the dance.'
    }
]

/* Functions */

/**
 * This will change the button color depending on form selection
 * @select - retrieves the form element
 * @job - sets 'job' variable depending on what is selected in the dropdown
 * @tank - sets 'tank' variable to an array of the .job values in each object of the tanks array above
 * @healer - sets 'healer' variable to an array of the .job values in each object of the healers array above
 * @button - retrieves the 'submit' button
*/
function colorChange() {
    let select = document.getElementById('job');
    let job = select.options[select.selectedIndex].text;
    let tank = tanks.map(t => t.job);
    let healer = healers.map(h => h.job);
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

let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
