const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

const container = document.querySelector('.images');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('active');
	hamButton.classList.toggle('active');
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Campinas Brazil",
    location: "Campinas, Brazil",
    dedicated: "2002, May, 17",
    area: 48100,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/campinas-brazil/400x250/campinas-brazil-temple-1030031-wallpaper.jpg"
  },
  {
    templeName: "Asunción Paraguay",
    location: "Asunción, Paraguay",
    dedicated: "2002, May, 19",
    area: 11906,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/asuncion-paraguay/400x250/1-68dfd881f93cb86e99828aa547eac056189c55ff.jpeg"
  },
  {
    templeName: "Guatemala City Guatemala",
    location: "Guatemala City, Guatemala",
    dedicated: "1984, December, 14-16",
    area: 11610,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/guatemala-city-guatemala/400x250/lds-temple-guatemala-city-1021144-wallpaper.jpg"
  },
];

templeCards(temples);

const home = document.getElementById('home');
const old = document.getElementById('old');
const newest = document.getElementById('new');
const large = document.getElementById('large');
const small = document.getElementById('small');

home.addEventListener('click', () => {
	templeCards(temples);
});

old.addEventListener('click', () => {
	const filteredByOld = temples.filter(temple => {
		const year = Number(temple.dedicated.split(', ')[0]);
		return year < 1900;
	});
	templeCards(filteredByOld);
});

newest.addEventListener('click', () => {
	const filteredByNew = temples.filter(temple => {
		const year = Number(temple.dedicated.split(', ')[0]);
		return year > 2000;
	});
	templeCards(filteredByNew);
});

large.addEventListener('click', () => {
	const filteredByLarge = temples.filter(temple => {
		const templeArea = temple.area;
		return templeArea > 90000;
	});
	templeCards(filteredByLarge);
});

small.addEventListener('click', () => {
	const filteredBySmall = temples.filter(temple => {
		const templeArea = temple.area;
		return templeArea < 10000;
	});
	templeCards(filteredBySmall);
});

function templeCards(filteredTemples) {
	document.querySelector('.images').innerHTML = '';
	filteredTemples.forEach(temple => {
		const section = document.createElement('section');
		const templeName = document.createElement('h2');
		const location = document.createElement('p');
		const dedicationDate = document.createElement('p');
		const size = document.createElement('p');

		const img = document.createElement('img');

		section.className = 'card';
		templeName.textContent = temple.templeName;
		location.textContent = `Location: ${temple.location}`;
		dedicationDate.textContent = `Dedicated: ${temple.dedicated}`;
		size.textContent = `Size: ${temple.area} sq ft`;

		img.src = temple.imageUrl;
		img.alt = `${temple.templeName} Temple`;
		img.loading = 'lazy';

		container.appendChild(section);
		section.append(templeName, location, dedicationDate, size, img);
	});
}