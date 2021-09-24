var data;

var nomsIfNoJSON = [
  "Amour",
  "Amulette",
  "Ancêtre",
  "Anneau",
  "Assiette",
  "Bijou",
  "Biscuit",
  "Bonbon",
  "Burger",
  "Camion",
  "Canard",
  "Carotte",
  "Charité",
  "Chat",
  "Château",
  "Citron",
  "Clé",
  "Couteau",
  "Crabe",
  "Craquelin",
  "Crayon",
  "Culte",
  "Danger",
  "Diamant",
  "Énigme",
  "Fantôme",
  "Fraise",
  "Fruit",
  "Hasard",
  "Jus",
  "Laitue",
  "Liberté",
  "Lit",
  "Livraison",
  "Lutin",
  "Légumes",
  "Manette",
  "Miracle",
  "Mixture",
  "Montagne",
  "Moustache",
  "Nuit",
  "Oeuf",
  "Ogre",
  "Olive",
  "Ours",
  "Pain",
  "Parfum",
  "Patience",
  "Pierre",
  "Pieuvre",
  "Pirate",
  "Potage",
  "Rôti",
  "Sac",
  "Sage",
  "Salade",
  "Sept",
  "Soleil",
  "Soulier",
  "Système",
  "Tarte",
  "Tarôt",
  "Taxi",
  "Tempête",
  "Tricot",
  "Voilier",
  "Vérité",
];

var adjectifsIfNoJSON = [
  "Alpin",
  "Chaotique",
  "Chic",
  "Cru",
  "Dynamique",
  "Débutant",
  "Flamboyant",
  "Géant",
  "Incroyable",
  "Irrésistible",
  "Jumeaux",
  "Ludique",
  "Lumineux",
  "Merveilleux",
  "Nomade",
  "Patient",
  "Pollué",
  "Positif",
  "Spontané",
  "Urbain",
];

function loadJSON(callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', './noms.json', true);
  xobj.onreadystatechange = function ()
  {
    if (xobj.readyState == 4 && xobj.status == "200")
    {
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}

function getRandomIndex(targetArray) {
  return Math.floor(Math.random() * targetArray.length);
}

function getIndexValue(targetArray, index= -1) {
  if (index > 0) {
    return targetArray[index];
  } else {
    return targetArray[getRandomIndex(targetArray)];
  }
}

function renderResult(element, content)
{
  element.innerHTML = content;
}

function douxItte() {
  var noms, adjectifs;

  if (data !== null) {
    noms = data["nom"];
    adjectifs = data["adjectifs"];
  } else {
    noms = nomsIfNoJSON;
    adjectifs = adjectifsIfNoJSON;
  }

  const nom = getIndexValue(noms),//noms[Math.floor(Math.random() * noms.length)],
    adjectif = getIndexValue(adjectifs),//adjectifs[Math.floor(Math.random() * adjectifs.length)],
    verbMode = Math.random() < 0.5,
    $result = document.getElementById("result");

  let resultat;

  if (verbMode) {
    resultat = [nom, "est", adjectif.toLowerCase()].join(" ");
  } else {
    resultat = [adjectif, nom.toLowerCase()].join(" ");
  }

  renderResult($result, resultat);
}


function init() {
  loadJSON(function(response) {
    // Parse JSON string into object
    data = JSON.parse(response);
    console.log(data);
    douxItte();
  });
}

//  Assign callback to events.
const $btn = document.getElementById("regenerate");
$btn.addEventListener("click", douxItte);

//  First load
//$btn.dispatchEvent(new Event("click"));
init();