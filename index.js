const list = document.querySelector('ul');
const titleInput = document.querySelector('#title');
const bodyInput = document.querySelector('#body');
const form = document.querySelector('form');
const submitBtn = document.querySelector('form button');


let db;

window.onload = function () {



    let request = window.indexedDB.open('note_db', 1);


    request.onerror = function () {
        console.log('Database fail to open')
    }


    request.onsuccess = function () {
        console.log('Database open successfully');
        db = request.result;
        //displayData()
    }


    request.onupgradeneeded = function (e) {

        let db = e.target.result;

        let objectStore = db.createObjectStore('notes_os', { keyPath: 'id', autoIncrement: true })

        objectStore.createIndex('title', 'title', { unique: false })
        objectStore.createIndex('body', 'body', { unique: false })

        console.log('Database setup complete')
    }


    form.onsubmit = addData;

    const addData = function (e) {
        e.preventDefault();
    }


}