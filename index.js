function clickBuy() {
    alert("That will be cost 1,000 baht.");
}

var removeCartItemButtons=document.getElementsByClassName("btn-item")

for (var i = 0; i <removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener('click', function() {

    })
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

var gamedata = {
	"product": [{
			"name": "Dragon Age:Inquisition",
			"brand": "Bioware",
            "description": "Dragon Age:Inquisition",
			"price": "1000"
        },
		{
			"name": "The Witcher 3: Wild Hunt",
			"brand": "CD Projekt Red",
            "description": "The Witcher 3: Wild Hunt",
			"price": "1000"
		},
		{
			"name": "Overwatch",
			"brand": "Blizzard Entertainment",
            "description": "Overwatch",
			"price": "1000"
		},
        {
			"name": "The Legend of Zelda: Breath of the Wild",
			"brand": "Nintendo",
            "description": "The Legend of Zelda: Breath of the Wild",
			"price": "1000"
		},
		{
			"name": "God of War",
			"brand": "Santa Monica Studio",
            "description": "God of War",
			"price": "1000"
        },
        {
			"name": "Sekiro: Shadows Die Twice",
			"brand": "applFromSoftware",
            "description": "Sekiro: Shadows Die Twice",
			"price": "1000"
		},
		{
			"name": "The Last of Us Part II",
			"brand": "Naughty Dog",
            "description": "The Last of Us Part II",
			"price": "1000"
        },
        {
			"name": "It Takes Two",
			"brand": "Hazelight Studios",
            "description": "It Takes Two",
			"price": "1000"
        }
	]
}
