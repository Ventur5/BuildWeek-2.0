const monthNames=[
    'gennaio',
    'febbraio',
    'marzo',
    'aprile',
    'maggio',
    'giugno',
    'luglio',
    'agosto',
    'settembre',
    'ottobre',
    'novembre',
    'dicembre',

];

const calendarBody = document.getElementById('calendar-body');
const monthYearLabel = document.getElementById('month-year');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentDate = new Date();

function renderCalendar(){
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    monthYearLabel.textContent = `${monthNames[currentMonth]} ${currentYear}`

    const firstDay = new Date(currentYear, currentMonth,1).getDate();
    const daysInMonth = new Date(currentYear,currentMonth + 1,0 ).getDate();

    calendarBody.innerHTML = '';

    let date = 1;

    for (let i = 0; i < monthNames.length; i++) {
        const row = document.createElement('tr');

        for (let x = 0; x < 7; x++) {
            if (i === 0 && x < firstDay) {
                const cell = document.createElement('td');
                row.appenChild(cell);
                
            } else if(date > daysInMonth){
                break;
            }else{
                const cell = document.createElement('td');
                cell.textContent = date;
                row.appenChild(cell);
                date++;

            }
                
            }
            calendarBody.appendChild(row);
            
        }
        
    }


    prevBtn.addEventListener('click',()=>{
        currentDate.setMonth(currentDate.getMonth()-1);
        renderCalendar();
      })


    nextBtn.addEventListener('click',()=>{
        currentDate.setMonth(currentDate.getMonth()+1);
        renderCalendar();
    })

    renderCalendar();

    //FUNZIONE PER MODALI Footer-copy 

    const btnModalLanguage = document.getElementById("button-language");
    const modalLanguage = document.querySelector(".modal-language");
    const closeModalLanguage = document.querySelector(".close-language");
    
    const btnModalValue = document.getElementById("button-value");
    const modalValue = document.querySelector(".modal-value");
    const closeModalValue = document.querySelector(".close-value");
    
    function sectionModal(btn, show) {
        const modal = document.querySelector(btn);
    
        if (modal) {
        modal.style.display = show ? "block" : "none";
        }
    }
    
    btnModalLanguage.addEventListener("click", () => {
        sectionModal(".modal-language", true);
    });
    
    closeModalLanguage.addEventListener("click", () => {
        sectionModal(".modal-language", false);
    });
    
    btnModalValue.addEventListener("click", () => {
        sectionModal(".modal-value", true);
    });
    
    closeModalValue.addEventListener("click", () => {
        sectionModal(".modal-value", false);
    });
    