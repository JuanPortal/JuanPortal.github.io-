// FILE NAMES
const file1 = document.getElementById("file1");
file1.addEventListener("change", ()=>{
    document.getElementById("fileName1").textContent = file1.files[0].name
    document.getElementById("fileName1").style.visibility = "visible";
    console.log(file1)
})

const file2 = document.getElementById("file2");
file2.addEventListener("change", ()=>{
    document.getElementById("fileName2").textContent = file2.files[0].name
    document.getElementById("fileName2").style.visibility = "visible";
})


// SUBMIT
const submit = document.getElementById("submit")
const mainSection = document.querySelector(".main-section");
const questionSection = document.querySelector(".question-section");
submit.addEventListener("click", ()=>{
    if (document.getElementById("question").value){
        mainSection.classList.add("hidden");
        questionSection.classList.remove("hidden")
    }else{
        alert("Enter a question!")
    }
})


// TRICKY
const yes = document.getElementById("YesBtn");
const no = document.getElementById("NoBtn");

no.addEventListener("mouseover", ()=>{
    no.style.top = `${Math.floor(Math.random() * 80)}%`;
    no.style.right = `${Math.floor(Math.random() * 80)}%`;
    console.log(`top: ${no.style.top}    left: ${no.style.right}`);
})


// FORMS
const formQuestion = document.getElementById("formQuestion");
const questionText = document.getElementById("questionText");

const formYes = document.getElementById("formYes");
const yesText = document.getElementById("YesBtn");

const formNo = document.getElementById("formNo");
const noText = document.getElementById("NoBtn");

submit.addEventListener("click", ()=>{
    const formDataQuestion = new FormData(formQuestion)
    const questionTextValue = formDataQuestion.get("question")
    questionText.textContent = questionTextValue;
    
    if (document.getElementById("Yes").value){
        const formDataYes = new FormData(formYes)
        const yesTextValue = formDataYes.get("Yes")
        yesText.textContent = yesTextValue;
    }else{
        yesText.textContent = "Yes"
    }
    
    if (document.getElementById("No").value){
        const formDataNo = new FormData(formNo)
        const noTextValue = formDataNo.get("No")
        noText.textContent = noTextValue;
    }else{
        noText.textContent = "No"
    }
})


// YES
const yesSection = document.querySelector(".yes-section")
const yesImg = document.getElementById("yesImg");
yes.addEventListener("click", ()=>{
    questionSection.classList.add("hidden");
    yesSection.classList.remove("hidden");
    console.log(yesImg.attributes[1].value)
    yesImg.attributes[1].value = file1.files[0]
})


// NO
const noSection = document.querySelector(".no-section")
no.addEventListener("click", ()=>{
    questionSection.classList.add("hidden");
    noSection.classList.remove("hidden");
})