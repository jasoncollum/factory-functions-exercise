console.log('main.js');

// Practice - doctors
function createDoctor(name, specialty, address) {
    return {
        name: name,
        specialty: specialty,
        address: address
    }
}

const drWho = createDoctor('Who', 'Oncology', '123 Main Street');
console.log(drWho);

// Practice - pets
function createPet(name, breed) {
    return {
        name: name,
        breed: breed
    }
}

const bowWowKennels = []
bowWowKennels.push(createPet('Sydney', 'Labrador'));
bowWowKennels.push(createPet('Bertie', 'Pointer'));
bowWowKennels.push(createPet('Misty', 'Dachsund / Beagle'));
bowWowKennels.push(createPet('Jackie', 'Best friend'));

console.log(bowWowKennels);

// Practice - music row
const jumpStopRecords = [];
const chattenRecords = [];
const polarRecords = [];

function createArtist(name, age, genre) {
    return {
        name: name,
        age: age,
        genre: genre.toLowerCase()
    }
}

function assignLabel(artist) {
    if (artist.genre === 'bluegrass' || artist.genre === 'country') {
        chattenRecords.push(artist);
    } else if (artist.genre === 'funk' || artist.genre === 'rap') {
        jumpStopRecords.push(artist);
    } else if (artist.genre === 'pop') {
        polarRecords.push(artist);
    } else {
        console.log('Your genre does not fit an available label')
    }
}

assignLabel(createArtist('Bruce Atikins', 23, 'Country'));
assignLabel(createArtist('Jensen Brown', 20, 'Pop'));
assignLabel(createArtist('Dre Funkz', 25, 'Funk'));
assignLabel(createArtist('Dusta Grimes', 21, 'Rap'));
assignLabel(createArtist('Bartholomew Danielson', 23, 'Bluegrass'));
assignLabel(createArtist('Avilee Dallas', 19, 'Country'));
assignLabel(createArtist('Austin Kinkaid', 22, 'Pop'));
assignLabel(createArtist('Loyonce Branis', 27, 'Rap'));

console.log(jumpStopRecords);
console.log(chattenRecords);
console.log(polarRecords);