const btnLogin = document.getElementById('modalBtn');
const btnLogout = document.getElementById('logout');
const contentUploader = document.getElementById('addVideo');
const btnAcasa = document.getElementById('acasa');
const btnBiblioteca = document.getElementById('biblioteca'); 


const setUI = (user)=>{
  if(user){
    btnLogin.style.display='none';
    btnLogout.style.display='block';
    if(window.location == 'biblioteca.html'){
      contentUploader.style.display='block'; 
    };     
    btnAcasa.style.display='block';
    btnBiblioteca.style.display ='block'; 
  }
  else{
    btnLogin.style.display = 'block';
    btnLogout.style.display = 'none';
    if(window.location == 'biblioteca.html'){
      contentUploader.style.display = 'none'; 
    };     
    btnAcasa.style.display ='block';
    btnBiblioteca.style.display ='block'; 
  }
}

const toggleUpload = (user)=> {
  if(user){
     
  }else{
    
  }
}
