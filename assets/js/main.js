const data = {
	"prefixes" : [
		"O'",
		"Mac",
		"Van Der",
		"Fitz",
	],
	"noms"     : [
		"Moppe ",
		"Yarrrr",
		"Calico",
		"Marsouin",
		"Barbu",
		"Canon",
		"Poulpe",
		"Teigneux ",
		"Bigleux ",
		"Borgne",
		"Crapule",
		"Scorbut",
		"Serpilleur",
		"Croquette",
		"Barbiche",
		"Plongeon",
		"Espadon",
		"Poisseux",
		"Barracuda",
		"Tuba",
		"Piranha ",
		"Morbleu",
		"Mousse",
		"Babord",
		"Boucane",
		"Grog",
		"Butin",
		"Sloop",
		"Bamboche",
		"Bourlingue",
		"Boujaron",
		"Caboulot",
		"Cambuse",
		"Rafiot",
		"Frégate",
		"Sapristi",
		"Parsambleu",
		"Poisson",
		"Mouille",
		"Marigane ",
		"Crapet",
		"Méné",
		"Barbotte",
		"Truite",
		"Anchois",
		"Brochet",
		"Dorade",
		"Éperlan",
		"Flétan",
		"Gallinette",
		"Hareng",
		"Murène",
		"Briochette",
		"Nemo",
	],
	"dit"      : [
		"Chuchoteur de perroquets",
		"Sabre ébréché",
		"Squelette sec",
		"Homard houspillé ",
		"Maraudeur marin",
		"Pont glissant",
		"Banc de corail",
		"Loup de mer",
		"Barbe blonde",
		"Pionnier des cales mouillées",
		"Seau troué",
		"Naufragé",
		"Pendu",
		"Rebelle",
		"Gredin",
		"Jolly Roger",
		"Bois-sans-soif",
		"Molaston",
		"Tonnelier",
		"Bachi-bouzouk",
		"Fruit de caquet",
		"Fièvre du Cap Horn",
		"Marin d'eau douce",
		"Roule-caillou",
		"Mulet",
		"Tête-de-boule",
		"Raseux-de-terre",
		"Requin pyjama",
		"Merlu",
	],
}


function getRandomName() {
	const randomPrefix = getRandomElement( data.prefixes );
	const randomName   = getRandomElement( data.noms );
	const randomDit    = getRandomElement( data.dit );


	return [
		'<span class="prefixe">' + randomPrefix + '</span>',
		'<span class="nom">' + randomName + '</span>',
		'<span class="dit"><span class="dit-delimiter">dit </span> <span class="word-value">«&nbsp;' + randomDit + '&nbsp;»</span></span>',
	].join("\n");

}

function getRandomElement( itemsCollection ) {
	return itemsCollection[ Math.floor( Math.random() * itemsCollection.length ) ];
}


const btnGenerate   = document.querySelector( '#regenerate' ),
	  namePlacement = document.querySelector( '#result' );

btnGenerate.addEventListener( 'click', displayRandomName )


function displayRandomName() {
	const randomName = getRandomName();

	namePlacement.innerHTML = randomName;
}

displayRandomName();


$('body').ripples({
	resolution: 512,
	dropRadius: 20,
	perturbance: 0.04,
});