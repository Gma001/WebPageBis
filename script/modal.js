// Get modal
var modal = document.getElementById('modal-login');
//Get modal button
var modalBtn = document.getElementById('modalBtn');
//Get closeBtn
var closeBtn = document.getElementsByClassName('closeBtn')[0];

//listen for "open" click
 modalBtn.addEventListener('click',openModal);
//listen for close click
closeBtn.addEventListener('click',closeModal);
//listen for outside click
window.addEventListener('click',clickOutside);
 //Function to open modal
 function openModal() {
   modal.style.display = 'block';
 }
//Close modal
 function closeModal(){
   modal.style.display = 'none';
 }
 //close modal if clicked outside
 function clickOutside(e){
  if(e.target == modal){
    modal.style.display='none';
  }
 }

//Listen for auth status changes
auth.onAuthStateChanged(user =>{
  if(user){
    setUI(user);    
    console.log(user);
  }
  else{
    setUI()    
    console.log(user);
  }
})
//Login, logout functions 
 const loginForm = document.querySelector('#login_form');
 loginForm.addEventListener('submit',(e) => {
   e.preventDefault();
   //get user info
   const email = loginForm['login_email'].value;
   const password = loginForm['login_password'].value;  
    //Login method
   auth.signInWithEmailAndPassword(email,password).then(cred =>{     
     //close modal and reset loginForm       
     closeModal();
     loginForm.reset();
    
     
   })
 })
 //log out method
 const logout = document.querySelector('#logout');
 logout.addEventListener('click',(e) =>{
   e.preventDefault();
   auth.signOut()
 })


 

 
