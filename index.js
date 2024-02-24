
const speech = new SpeechSynthesisUtterance();
 




document.querySelector("button").addEventListener("click",()=>{
    speech.text=document.querySelector("textarea").value;
 window.speechSynthesis.speak(speech);
 });






















































//  const tarea= document.querySelector("textarea");
// // const voiceList= document.querySelector("select");

//  const btn= document.querySelector("button");

//  function textToSpeech(text){
//      let utterance =new SpeechSynthesisUtterance(text);
//     speechSynthesis.speak(utterance);

//  }
// btn.addEventListener("click",e =>{
//     e.preventDefault();
//     if(textarea.value !==""){
//         textToSpeech(textarea.value)
//     }
// });


