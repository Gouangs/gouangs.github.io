const teacher = ['Fahmi', 'Dahlia', 'Ricardo', 'Risma', 'Enti', 'Eka Trimurti', 'Komariah', 'Dian', 'Sri', 'Kurniawati', 'Juraidah', 'Sri Murni', 'Yulham', 'Mudiarti', 'Yuli', 'Zarzazi', 'Dani', 'Derry', 'Verina', 'Nurwindo', 'Untung', 'Anggi', 'Rina', 'Wahyu', 'Agus', 'Rindu', 'Alvador', 'Desty', 'Vidia', 'Ansori', 'Feri', 'Lela', 'Aristiana', 'Ningsih', 'Nina', 'Emita', 'Gita', 'Devi', 'Sariwandi', 'Desti Tri', 'Nela', 'Astari', 'Dola', 'Bahri', 'Fitria', 'Rezi', 'Riki', 'Nurul', 'Eka Okta']
const mapel = ['B.Indonesia', 'Biologi', 'Fisika', 'Matematika', 'Biologi', 'Ekonomi', ['Kimia', 'PKWU'], 'Kimia', 'Sejarah', 'Ekonomi', 'Geografi', ['MTK', 'MTK PM'], 'B.Inggris', ['Sejarah PM', 'Sejarah'], 'Geografi', 'PAI', 'PKn', 'PKn', 'Kimia', 'PKWU', 'Seni Budaya', 'Fisika', 'Sosiologi', 'PAI', 'Penjas', 'Penjas', 'PAK', 'Seni Budaya', 'B.Inggris', 'Sejarah Indonesia', 'Penjas', 'Matematika', ['Ekonomi' , 'Geografi'], 'B.Indonesia', 'Biologi', 'B.Indonesia', 'Matematika', 'B.Inggris', 'PAI', 'B.Indonesia', ['MTK', 'Informatika', 'Fisika'], 'Sosiologi', 'PAB', ['Matematika', 'Informatika'], 'BK X1-6', 'BK XI1-6', 'BK XII MIPA DAN IPS', 'BK X7-8 & XI7-9']

function get(frmt) {
	var t= null;
	var m= null;
	var h= null;
	var ho= null;
	var th = null;
	var fnl = null;
	var person = {}
	var nT = [];
	frmt.forEach((v,k) => {
		t=teacher[v-1];
		m=mapel[v-1];
		h=v;

		if (ho !== null && h != ho) {
			nT.push(person)
			th = 1;
		}

		if (th === null) {
			th = 1;
		}

		if (h == ho) {
			th += 1;
		}
		
		if (typeof m == 'array') {
			m = m.toString()
		}

		person = {
			name: t,
			mapel: m,
			jam: th,
		}

		if (k == (frmt.length - 1)) { nT.push(person) }
		
		ho = h;
	})
	return nT;
}

const _format = {
	[1]: [39,39,39,1,1,3,3,17,17],
	[2]: [5,5,1,1,12,12,28,28,29,29],
	[3]: [8,8,3,3,13,13,13,13,20,20],
	[4]: [14,14,12,12,4,4,8,8,5,5],
	[5]: [26,26,26,4,4]
}

setInterval(() => {
	dt = new Date();
	currentDay = dt.getDay();
	nextDay = dt.getDay() + 1;

	currentFormat = _format[currentDay];
	nextFormat = _format[nextDay];

	dFormat = currentFormat ? get(currentFormat) : false
	if (dFormat && Object.keys(dFormat).length > 0) {
		let fnlF1 = "TODAY<br><br>"
		let p1 = document.getElementById('today')
		dFormat.forEach((v) => {
			let t = JSON.stringify(v.name)
			let m = JSON.stringify(v.mapel)

			fnlF1 = fnlF1 + t + "<=>" + m + '<br>';
		})
	}

	tFormat = nextFormat ? get(nextFormat) : false;
	if (tFormat && Object.keys(tFormat).length > 0) {
		let fnlF2 = "TOMORROW<br><br>"
		let p2 = document.getElementById('tomorrow')
		tFormat.forEach((v) => {
			let t = JSON.stringify(v.name)
			let m = JSON.stringify(v.mapel);

			fnlF2 = fnlF2 + t + "<=>" + m + '<br>';
		})
		p2.innerHTML = fnlF2;
		p1.innerHTML = fnlF1;
	}
}, 1000)