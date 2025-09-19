// Ambil semua tautan pada menu navigasi
const navLinks = document.querySelectorAll('nav ul li a');

// Loop melalui setiap tautan
navLinks.forEach(link => {
    // Tambahkan event listener untuk setiap tautan
    link.addEventListener('click', function() {
        // Hapus kelas "active" dari semua tautan
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        // Tambahkan kelas "active" ke tautan yang diklik
        this.classList.add('active');
    });
});

// Menampilkan pesan saat tombol "Kirim" pada formulir langganan ditekan
const subscriptionForm = document.getElementById('subscription-form');

if (subscriptionForm) {
    subscriptionForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('fullname').value.trim();
        const email = document.getElementById('email').value.trim();
        const dob = document.getElementById('dob').value.trim();
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const agree = document.getElementById('agree').checked;

        // Validasi dan penanganan hasil validasi
        if (validateName(name) && validateEmail(email) && validateDOB(dob) && validateGender(gender) && validateAgreement(agree)) {
            showSuccessDialog(); // Tampilkan dialog sukses
            resetForm(); // Reset formulir
        }
    });
}

function validateName(name) {
    const nameError = document.getElementById('name-error');
    if (name === '') {
        nameError.textContent = 'Name is required';
        return false;
    } else if (name.length < 5) {
        nameError.textContent = 'Full name length must be at least 5 characters';
        return false;
    } else {
        nameError.textContent = '';
        return true;
    }
}

function validateEmail(email) {
    const emailError = document.getElementById('email-error');
    if (email === '') {
        emailError.textContent = 'Email is required';
        return false;
    } else {
        emailError.textContent = '';
        return true;
    }
}

function validateDOB(dob) {
    const dobError = document.getElementById('dob-error');
    const date_value = new Date(dob);
    if (dob === '') {
        dobError.textContent = 'Date of Birth is required';
        return false;
    } else if (date_value.getFullYear() > 2005) {
        dobError.textContent = 'Year must be before or at least 2005';
        return false;
    } else {
        dobError.textContent = '';
        return true;
    }
}

function validateGender(gender) {
    const genderError = document.getElementById('gender-error');
    if (gender === '') {
        genderError.textContent = 'Gender is required';
        return false;
    } else {
        genderError.textContent = '';
        return true;
    }
}

// Ambil elemen teks "Male" dan "Female"
const maleText = document.getElementById('maleText');
const femaleText = document.getElementById('femaleText');

// Tambahkan event listener untuk teks "Male"
if (maleText) {
    maleText.addEventListener('click', function() {
        // Setel properti checked radio button "Male" menjadi true
        document.getElementById('gender_male').checked = true;
    });
}

// Tambahkan event listener untuk teks "Female"
if (femaleText) {
    femaleText.addEventListener('click', function() {
        // Setel properti checked radio button "Female" menjadi true
        document.getElementById('gender_female').checked = true;
    });
}

function validateAgreement(agree) {
    const agreeError = document.getElementById('agree-error');
    if (!agree) {
        agreeError.textContent = 'Please agree to the terms and conditions';
        return false;
    } else {
        agreeError.textContent = '';
        return true;
    }
}

function showSuccessDialog() {
    const successDialog = document.getElementById('successDialog');
    successDialog.showModal();
}

// Ambil tombol "Tutup" pada dialog sukses
const closeDialogBtn = document.getElementById('closeDialogBtn');

// Tambahkan event listener untuk menutup dialog saat tombol "Tutup" ditekan
if (closeDialogBtn) {
    closeDialogBtn.addEventListener('click', function() {
        const successDialog = document.getElementById('successDialog');
        successDialog.close(); // Tutup dialog
    });
}

function resetForm() {
    const subscriptionForm = document.getElementById('subscription-form');
    if (subscriptionForm) {
        subscriptionForm.reset(); // Reset formulir
        const errorElements = document.querySelectorAll('.error'); // Ambil semua pesan kesalahan
        errorElements.forEach(element => {
            element.textContent = ''; // Kosongkan pesan kesalahan
        });
    }
}


// Data for car specifications
const carDetails = {
    'Koenisegg Agera RS': {
        specs: 'Top speed: 447 km/h, 0-100 km/h: 2.8s, Horsepower: 1160hp'
    },
    'Ajlani Drakuma': {
        specs: 'Top speed: 399 km/h, 0-100 km/h: 3.0s, Horsepower: 1200hp'
    },
    'Tushek TS 900 Racer Pro': {
        specs: 'Top speed: 380 km/h, 0-100 km/h: 2.5s, Horsepower: 950hp'
    },
    'Bugatti Divo': {
        specs: 'Top speed: 380 km/h, 0-100 km/h: 2.4s, Horsepower: 1500hp'
    },
    'McLaren Senna GTR': {
        specs: 'Top speed: 340 km/h, 0-100 km/h: 2.8s, Horsepower: 825hp'
    },
    'Ferrari F8 Tributto': {
        specs: 'Top speed: 340 km/h, 0-100 km/h: 2.9s, Horsepower: 720hp'
    },
    'Jaguar C-X75': {
        specs: 'Top speed: 330 km/h, 0-100 km/h: 3.4s, Horsepower: 850hp'
    },
    'Porsche 911 GT2 RS': {
        specs: 'Top speed: 340 km/h, 0-100 km/h: 2.7s, Horsepower: 700hp'
    },
    'Apollo IE': {
        specs: 'Top speed: 335 km/h, 0-100 km/h: 2.7s, Horsepower: 780hp'
    },
    'Lotus Evija': {
        specs: 'Top speed: 320 km/h, 0-100 km/h: 2.9s, Horsepower: 2000hp'
    },
    'Pagani Huayra R': {
        specs: 'Top speed: 375 km/h, 0-100 km/h: 2.7s, Horsepower: 850hp'
    },
    'Volkswagen w12 Coupe': {
        specs: 'Top speed: 375 km/h, 0-100 km/h: 2.5s, Horsepower: 650hp'
    },
    'Ares S1': {
        specs: 'Top speed: 360 km/h, 0-100 km/h: 3.1s, Horsepower: 700hp'
    },
    'Chevrolet Corvette Stingray': {
        specs: 'Top speed: 300 km/h, 0-100 km/h: 3.2s, Horsepower: 495hp'
    },
    'Maserati MC12': {
        specs: 'Top speed: 330 km/h, 0-100 km/h: 3.8s, Horsepower: 632hp'
    },
    'Mercedes Benz AMG GT Black Series': {
        specs: 'Top speed: 325 km/h, 0-100 km/h: 3.2s, Horsepower: 730hp'
    },
    'BMW i8 Roadster': {
        specs: 'Top speed: 250 km/h, 0-100 km/h: 4.4s, Horsepower: 369hp'
    },
    'Mazda Furai': {
        specs: 'Top speed: 290 km/h, 0-100 km/h: 3.7s, Horsepower: 450hp'
    },
    'Nissan Leaf Nismo RC': {
        specs: 'Top speed: 150 km/h, 0-100 km/h: 6.9s, Horsepower: 322hp'
    },
    'KTM X-Bow GTX': {
        specs: 'Top speed: 280 km/h, 0-100 km/h: 3.0s, Horsepower: 600hp'
    }
};
// Mendapatkan elemen dialog
const carDetailsDialog = document.getElementById('carDetailsDialog');

// Fungsi untuk menutup pop-up saat pengguna mengklik di luar area pop-up
function closeOnClickOutside(event) {
    if (event.target === carDetailsDialog) {
        carDetailsDialog.close();
    }
}

// Fungsi untuk menutup pop-up saat tombol close ditekan
function closeDetails() {
    carDetailsDialog.close();
}

// Fungsi untuk menampilkan pop-up dengan detail mobil
function showDetails(carName, carClass, carType, carFuel, carRefillTime) {
    const nameElement = document.getElementById('carName');
    const classElement = document.getElementById('carClass');
    const typeElement = document.getElementById('carType');
    const fuelElement = document.getElementById('carFuel');
    const refillTimeElement = document.getElementById('carRefillTime');

    nameElement.innerText = carName;
    classElement.innerText = carClass;
    typeElement.innerText = carType;
    fuelElement.innerText = carFuel;
    refillTimeElement.innerText = carRefillTime;

    carDetailsDialog.showModal();
}

function showNewsDetails(title, date, imageSrc, content) {
    document.getElementById('news-details-section').style.display = 'block';
    document.getElementById('detailed-news-title').textContent = title;
    document.getElementById('detailed-news-date').textContent = date;
    document.getElementById('detailed-news-image').src = imageSrc;
    document.getElementById('detailed-news-content').innerHTML = content;
    document.getElementById('news-details-section').style.display = 'block';
    document.getElementById('news-details-section').scrollIntoView({ behavior: 'smooth' });
}

function showProductDetails(title, imageSrc, content) {
    document.getElementById('product-details-section').style.display = 'block';
    document.getElementById('detailed-product-title').textContent = title;
    document.getElementById('detailed-product-image').src = imageSrc;
    document.getElementById('detailed-product-content').innerHTML = content;
    document.getElementById('product-details-section').style.display = 'block';
    document.getElementById('product-details-section').scrollIntoView({ behavior: 'smooth' });
}



document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navUl = document.querySelector('.nav-ul');

    hamburgerMenu.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('active');
        navUl.classList.toggle('show');
    });
});


function moveSlide(carouselId, direction) {
    const carousel = document.getElementById(carouselId);
    const slides = carousel.querySelectorAll('.slide');
    let currentIndex = 0;
    slides.forEach((slide, index) => {
        if (slide.classList.contains('active')) {
            currentIndex = index;
            slide.classList.remove('active');
        }
    });

    const nextIndex = (currentIndex + direction + slides.length) % slides.length;
    slides[nextIndex].classList.add('active');

    const carouselInner = carousel.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(-${nextIndex * 100}%)`;
}

document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector(".header-esports");
    const eventDetailsSection = document.querySelector("#event-details-section");

    window.addEventListener("scroll", function() {
        const sectionTop = eventDetailsSection.getBoundingClientRect().top;
        if (sectionTop <= 100) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});
