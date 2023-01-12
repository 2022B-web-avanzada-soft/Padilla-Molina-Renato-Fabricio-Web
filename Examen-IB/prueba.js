const fs = require('fs');

// Entity 1
let entity1 = {
    name: 'John',
    age: 30,
    isEmployed: true,
    startDate: new Date('2020-01-01'),
    salary: 45000
};

// Entity 2
let entity2 = {
    name: 'Jane',
    age: 25,
    isEmployed: false,
    startDate: new Date('2019-01-01'),
    salary: 30000
};

// CREATE
function createEntity(newEntity) {
    // read the existing entities from the file
    let entities = JSON.parse(fs.readFile('entities.txt', 'utf8'));

    // add the new entity to the array
    entities.push(newEntity);

    // write the updated array to the file
    fs.writeFile('entities.txt', JSON.stringify(entities));
    console.log(`Added new entity: ${newEntity.name}`);
}

// READ
function readEntity(entityId) {
    // read the existing entities from the file
    let entities = JSON.parse(fs.readFile('entities.txt', 'utf8'));

    // find the entity with the matching id
    let entity = entities.find(e => e.id === entityId);
    console.log(`Retrieved entity: ${JSON.stringify(entity)}`);
}

// UPDATE
function updateEntity(entityId, updatedEntity) {
    // read the existing entities from the file
    let entities = JSON.parse(fs.readFile('entities.txt', 'utf8'));

    // find the index of the entity with the matching id
    let index = entities.findIndex(e => e.id === entityId);

    // update the entity in the array
    entities[index] = updatedEntity;

    // write the updated array to the file
    fs.writeFile('entities.txt', JSON.stringify(entities));
    console.log(`Updated entity with id: ${entityId}`);
}

// DELETE
function deleteEntity(entityId) {
    // read the existing entities from the file
    let entities = JSON.parse(fs.readFile('entities.txt', 'utf8'));

    // find the index of the entity with the matching id
    let index = entities.findIndex(e => e.id === entityId);

    // remove the entity from the array
    entities.splice(index, 1);

    // write the updated array to the file
    fs.writeFile('entities.txt', JSON.stringify(entities));
    console.log(`Deleted entity with id: ${entityId}`);
}

// Test the CRUD operations
createEntity(entity1);
createEntity(entity2);
readEntity(1);
updateEntity(1, entity2);
deleteEntity(2);