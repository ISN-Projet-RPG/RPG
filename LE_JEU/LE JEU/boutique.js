//classes

function Character(nom, pv, strength, defense, wisdom, money, slot, equipment, inventory){
	this.nom = nom;
	this.pv = pv;
	this.strength = strength;
	this.defense = defense;
	this.wisdom = wisdom;
	this.money = money;
	this.slot = slot;
	this.equipment = equipment;
	this.inventory = inventory;
}

function Weapon(nom, minimalStrength, minimalWisdom, Damage, Parry, disadvantages, size, price){
	this.nom = nom;
	this.minimalStrength = minimalStrength;
	this.minimalWisdom = minimalWisdom;
	this.Damage = Damage;
	this.Parry = Parry;
	this.disadvantages = disadvantages;
	this.size = size;
	this.price = price;
	
	// méthodes
	this.check = function(){
		if (leader.strength >= this.minimalStrength && leader.wisdom >= this.minimalWisdom && leader.slot>=this.size){
			if (moneyLeader >= this.price){
				$("#stats").css("visibility", "hidden");
				$("#enterMarket").css("visibility", "hidden");
				$("#leaveMarket").css("visibility", "hidden");
				$("#name").css("visibility", "visible");
				$("#equipment").css("visibility", "hidden");
				$("#confirm").css("visibility", "visible");
				$("#buy").click(function() {
					leader.equipment.push(this);
					leader.slot = leader.slot - this.size;
					moneyLeader = moneyLeader - this.price;
					$("#stats").css("visibility", "visible");
					$("#enterMarket").css("visibility", "hidden");
					$("#leaveMarket").css("visibility", "visible");
					$("#equipment").css("visibility", "visible");
					$("#confirm").css("visibility", "hidden");
				});
				$("#cancel").click(function() {
					$("#stats").css("visibility", "visible");
					$("#enterMarket").css("visibility", "hidden");
					$("#leaveMarket").css("visibility", "visible");
					$("#equipment").css("visibility", "visible");
					$("#confirm").css("visibility", "hidden");
				});
			}
			else{
				alert("vous n'avez pas assez d'argent");
			}
		}
		else {
			alert("Vous ne pouvez pas prendre cette arme");
		}
		if (leader.slot == 0) {
			$("#validerEquipment").css("visibility", "visible");
		}
	}

}

var longSword = new Weapon("Epée longue", 7, 2, 13, 40, "pas d'autres armes, attaques lentes, 1 tour d'inactivité après attaque", 2, 80);
var sword = new Weapon("Epée", 4, 1, 7, 10, "pas d'inconvénients", 1, 40);
var dagger = new Weapon("Dague", 2, 4, 13, 2, "13 points d'attaque quand attaque discrète mais plus que 3 points lors d'attaques de front", 1, 20);
var shield = new Weapon("Bouclier", 4, 3, 5, 90, "ne peut pas être combiné avec l'arc ni le bâton de magicien mais marche très bien avec dague et épée", 1, 50);
var bow = new Weapon("Arc", 5, 5, 15, 5, "peut être utilisé en attaques discrète comme de front", 1, 40);
var wizardStaff = new Weapon("Bâton de magicien", 1, 7, 18, 5, "peut être utilisé en attaques discrète comme de front", 2, 60);

var warHamer = new Weapon("Marteau de guerre", 10, 4, 15, 50, "compliqué à manier mais fait beaucoup de dégats", 2);
var dwarfShield = new Weapon("Bouclier nain", 10, 3, 8, 100, "gros bouclier, ne peut pas être combiné avec une autre arme", 2);
var dwarfMagicStaff = new Weapon("Bâton de mage nain", 4, 8, 20, 20, "bâton magique très puissant mais qui ne peut être contrôlé que par un nain", 2);

var elfishDagger = new Weapon("Dagues elfiques", 3, 6, 15, 10, "Dagues très efficace en attaque discrète mais aussi efficace en attaques de front", 2);
var elfishBow = new Weapon("Arc elfique", 6, 8, 17, 15, "Arc très puissant mais ne pouvant être utilisé que par un elfe", 2);
var elfishMagicStaff = new Weapon("Bâton de magie elfique", 2, 10, 20, 10, "Puissante magie elfique mais très dure à maitîser", 2);

var armes = [longSword, sword, dagger, shield, bow, wizardStaff, warHamer, dwarfShield, dwarfMagicStaff, elfishDagger, elfishBow, elfishMagicStaff];

var pvLeader, strengthLeader, defenseLeader, wisdomLeader, moneyLeader, leader, nameLeader;

var Thaek = new Character("Thaek", 15, 10, 4, 0, 0, [warHamer], []);
var Turdak = new Character("Turdak", 20, 8, 4, 0, 0, [dwarfShield], []);
var Fack = new Character("Fack", 15, 5, 8, 0, 0, [dwarfMagicStaff], []);

var Gwindor = new Character("Gwindor", 12, 5, 7, 0, 0, [elfishDagger]);
var Niadamar = new Character("Niadamar", 15, 7, 8, 0, 0, [elfishBow]);
var Edrahil = new Character ("Edrahil", 18, 3, 10, 0, 0, [elfishMagicStaff]);

var personnages = [leader, Thaek, Turdak, Fack, Gwindor, Niadamar, Edrahil]

function enterMarket() {
	$("#stats").css("visibility", "visible");
	
	$("#enterMarket").css("visibility", "hidden");
	$("#leaveMarket").css("visibility", "visible");
	
	strengthLeader = 10/*Math.floor(Math.random()*10) + 1*/;
	$("#strength").append("<p>" + strengthLeader + "</p>");
	
	wisdomLeader = 10/*Math.floor(Math.random()*10) + 1*/;
	$("#wisdom").append("<p>" + wisdomLeader + "</p>");
	
	moneyLeader = 81/*Math.floor(Math.random()*100) + 1*/;
	$("#money").append("<p>" + moneyLeader + "</p>");
	
	leader = new Character(0, pvLeader, strengthLeader, defenseLeader, wisdomLeader, moneyLeader, 2, [], []);
	
	/*nameLeader = $("#name").val();
	leader.nom = nameLeader;
	$("#nom").append("<p>" + nameLeader + "</p>");
	$("#name").css("visibility", "hidden");*/
	$("#equipment").css("visibility", "visible");
}

function leaveMarket()  {
	$("#stats").css("visibility", "hidden");
	$("#enterMarket").css("visibility", "visible");
	$("#leaveMarket").css("visibility", "hidden");
	$("#name").css("visibility", "visible");
	$("#equipment").css("visibility", "hidden");
}

$("#enterMarket").click(enterMarket);
$("#leaveMarket").click(leaveMarket);
$("#equipment button").click(function(){
	var index = $("#equipment button").index(this);
	var armeChoisie = armes[index];
	armeChoisie.check();
}); 

