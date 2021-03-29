var itens = [];

function deleteElement(name){
    const element = document.getElementsByClassName(`item-${name}`)[0].parentNode;
    const parent = element.parentNode;
    const elements = document.getElementById("elements")
    elementsValue = elements.value
    document.getElementById("elements").value = ''
    itens.forEach((element, i) => {
        if(i == 0){
            document.getElementById("elements").value += element
        }else{
            document.getElementById("elements").value += `,${element}`
        }
   })
    parent.removeChild(element);
}

function createNewElement(name, qnt) {
    const item = document.createElement("DIV");
    const paragraph = document.createElement("P");
    textParagraph = document.createTextNode(`Item: ${name} | Quantidade: ${qnt}`);
    paragraph.appendChild(textParagraph);
    const deletar = document.createElement("SPAN");
    const textDeletar = document.createTextNode("Deletar");
    deletar.appendChild(textDeletar);
    deletar.addEventListener('click', () => {
        itens.forEach((item, i) => {
            if(item == `${name}+${qnt}`){
                delete itens[i];
            }
        })
        deleteElement(name);
    })
    paragraph.appendChild(deletar);
    paragraph.classList.add('new-element')
    paragraph.classList.add(`item-${name}`)
    item.appendChild(paragraph);
    if(document.getElementById("elements").value.split(',') == 0){
        document.getElementById("elements").value += `${name}+${qnt}`;
    }else{
        document.getElementById("elements").value += `,${name}+${qnt}`;
    }
    return item;
}

function createItem(){
    const name = document.getElementById("item-name").value;
    const qnt = document.getElementById("item-qnt").value;
    const parent = document.getElementById("item-name").parentElement.parentElement;
    if(!itens.includes(name)){
        itens.push(`${name}+${qnt}`)
        const element = createNewElement(name, qnt);
        parent.appendChild(element)
        document.getElementById("item-name").value = '';
        document.getElementById("item-qnt").value = '';
    }else{
        alert("Esse item já foi adicionado!");
    }
}

const btnItemSubmit = document.getElementById("btn-item-submit");
btnItemSubmit.addEventListener('click', () => {
    createItem();
})

window.addEventListener('load', () => {
    itens = []
    elementsArray = []
})

const select = document.getElementsByClassName("typeform")[0];
select.addEventListener('click', () => {
    if(select.value == "residencial"){
        const form = document.getElementsByClassName("form")[0];
        if(Array.from(form.classList).includes("hide")){
            form.classList.remove("hide")
        }
        const itens = Array.from(document.getElementsByClassName("agroup"))
        const titles = Array.from(document.getElementsByClassName("title"));
        console.log(titles)
        titles.forEach(title => {
            if(title.classList.contains("residencial")){
                if(title.classList.contains("hide")) title.classList.remove("hide");
            }else if(title.classList.contains("comercial")){
                if(!title.classList.contains("hide")) title.classList.add("hide");
            }
        })
        itens.forEach(item => {
            if(item.classList.contains("residencial")){
                if(item.classList.contains("hide")) item.classList.remove("hide");
            }else if(item.classList.contains("comercial")){
                if(!item.classList.contains("hide")) item.classList.add("hide");
            }
        })
    }else if(select.value == "comercial"){
        const form = document.getElementsByClassName("form")[0];
        if(Array.from(form.classList).includes("hide")){
            form.classList.remove("hide")
        }
        const itens = Array.from(document.getElementsByClassName("agroup"))
        const titles = Array.from(document.getElementsByClassName("title"));
        titles.forEach(title => {
            if(title.classList.contains("comercial")){
                if(title.classList.contains("hide")) title.classList.remove("hide");
            }else if(title.classList.contains("residencial")){
                if(!title.classList.contains("hide")) title.classList.add("hide");
            }
        })
        itens.forEach(item => {
            if(item.classList.contains("comercial")){
                if(item.classList.contains("hide")) item.classList.remove("hide");
            }else if(item.classList.contains("residencial")){
                if(!item.classList.contains("hide")) item.classList.add("hide");
            }
        })
    }
})

const itensCheck = Array.from(document.getElementsByClassName("item"));
itensCheck.forEach(item => {
    const checkbox = item.getElementsByClassName("check-item")[0]
    checkbox.addEventListener('click', () => {
        const qnt = item.getElementsByClassName("quantidade")[0]
        qnt.classList.toggle("hide");
        item.classList.toggle("align-item")
    })
})