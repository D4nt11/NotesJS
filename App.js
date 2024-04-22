/*--------------Array-------------**/

const enterText = document.getElementById('enterNotes')
const btn = document.getElementById('btnAdd')
const list = document.getElementById('spisok')
const btnGreen = document.getElementById('btnGreen')
const btnRed = document.getElementById('btnRed')

// const notes = ['ffasjf', 'sadfagsfwea;fawfe safeaf', 'saf aslknf  askldfn lnlsna   as']

// function render(){

// //     for (let i = 0; i < notes.length; i++){
// //     list.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]))
// // }

// for(let note of notes) {
//     list.insertAdjacentHTML('beforeend', getNoteTemplate(note))
// }
// }
// render()



// btn.onclick = function(){
//     if (enterText.value.length === 0){
//         return
//     }

//     list.insertAdjacentHTML('beforeend', getNoteTemplate(enterText.value))

//     enterText.value = ''
// }



// function getNoteTemplate(argument){
//     return `
//     <li class="punkt" id="punkt">
//     <h3>${argument}</h3>
//     <button class="btn" id="btnGreen">&#128504;</button>
//     <button class="btn" id="btnRed">&#10006;</button>
//     </li>`
// }
/*--------------Objectss------------**/

const notes = [         //create array of objects with our notes
    {
        title:'first',
        compleated: false
    },
    {
        title:'second',
        compleated: false
    },
    {
        title:'third',
        compleated: false
    }
]



    function render(){          //create function that add our notes to the list
    
        list.innerHTML = ''     //clear list before render(we do it to avoid duplicates)

        if(notes.length === 0){
            list.innerHTML = `<p style=" color: white">No elements</p>`
        }

    // for(let note of notes) {            //this cycle like for(let i = 0; i < notes.length; i++)
    //     list.insertAdjacentHTML('beforeend', getNoteTemplate(note))
    // }

        //back to the cycle for(let i = 0; i < notes.length; i++)

        for (let i = 0; i < notes.length; i++){
            list.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i))
        }

    }
    render()





    btn.onclick = function(){           //create function that add NEW notes to the list
        if (enterText.value.length === 0){
            return
        }

        const newNote = {
            title: enterText.value,
            compleated: false,
        }
    
        //list.insertAdjacentHTML('beforeend', getNoteTemplate(/*enterText.value*/newNote))
        
        notes.push(newNote)
        render()

        enterText.value = ''
    }
    

    list.onclick = function (event){
        if(event.target.dataset.index){
            const index = Number(event.target.dataset.index)
            const type = event.target.dataset.type

            if (type === 'toggle'){
                notes[index].compleated = !notes[index].compleated
            }   
            else if (type === 'remove'){
                notes.splice(index, 1)
            }
            render()
         }
    }  


                                                        
    function getNoteTemplate(/*argument*/note, index){         //create function that create template for our notes
    return `                                            
    <li class="punkt" id="punkt">
    <h3 class="${note.compleated ? 'noteThrough' : ''}">${/*argument*/note.title}</h3>
    <button class="btn btnGreen ${note.compleated ? 'btnCompl' : ''} " id="btnGreen" data-index="${index}" data-type="toggle">&#128504;</button>
    <button class="btn btnRed" id="btnRed" data-index="${index}" data-type="remove">&#10006;</button>
    </li>`
    }