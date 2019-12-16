const inputElement = document.getElementById('fileUpload');
const buttonSubmit = document.getElementById('buttonSubmit');
const form = document.querySelector("#addVideo");
var selectedFile;


inputElement.addEventListener("change",(e) =>{
    selectedFile = e.target.files[0];
    filename =selectedFile.name;      
});
/*preventing the page from reloading when clicking on submit
the event listens to the form not the button*/
form.addEventListener("submit",(e)=>{
    e.preventDefault();
})
function uploadFile(){  
    
    var storageRef = firebase.storage().ref('/predici/' + filename);
    var uploadTask = storageRef.put(selectedFile);
    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on('state_changed', function(snapshot){
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log('Upload is paused');
            break;
        case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log('Upload is running');
            break;
        }
    }, function(error) {
        // Handle unsuccessful uploads
    }, function() {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/..
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) { 
            var caption = document.getElementById('caption').value;
            db.collection('Eticheta').add({
             name: filename,
             url:downloadURL, 
             caption: caption           
            })      
            form.reset()
        console.log('File available at', downloadURL);
    });
});
}
var urlS;// global variable
const library = document.querySelector('#bibliotecaVideo');
function renderElements(doc){
    let div = document.createElement('div');
    div.setAttribute('id', "videoElem")    
    let vid = document.createElement('video');
    vid.src =urlS ;
    vid.setAttribute('type',"video/mp4");
    vid.setAttribute('class', "video")
    vid.controls= true;
    let titlu = document.createElement('label');   
    titlu.textContent = doc.data().name;    
    div.appendChild(vid);
    div.appendChild(titlu);
    library.appendChild(div);
}


//getting data
db.collection('Eticheta/').get().then((snapshot) =>{    
    snapshot.docs.forEach(doc =>{  
         urlS = doc.get('url');        
        renderElements(doc);
        
    }) 
})

const videoPause = document.querySelector('.video');
videoPause.addEventListener('playing',(e)=>{
    
})

    






























/* const library = document.querySelector('#bibliotecaVideo');
const form = document.querySelector("#addVideo");
const file = document.querySelector("#fileUpload");


create elements and render them
function renderElements(doc){
    let li = document.createElement('li');
    let titlu = document.createElement('h1');

    li.setAttribute('data-id',doc.id);
    titlu.textContent =doc.data().Titlu

    li.appendChild(titlu);
    library.appendChild(li);

}

getting data
db.collection('predici/').get().then((snapshot) =>{
    snapshot.docs.forEach(doc =>{
        renderElements(doc);
    })
    }) 
/*
//saving data
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    db.collection('Predica').add({
        Titlu: form.titlu.value
    })
})

file.addEventListener("change", function(event){  
  selectedFile = event.target.files[0];
  
  
})
 */