class Pet {

    constructor(id, race, name,prescription = {}) {
        this.id = id;
        this.race = race;
        this.name = name;
        this.prescription = prescription;
    }

}

export default Pet;