const button = document.querySelector('.services-cards');
const tabButtons = document.querySelectorAll('.services-item');
const images = document.querySelectorAll('.services-img');
const text = document.querySelectorAll('.services-content');

button.addEventListener('click', (event) => {
        let currentButton = event.target;
        let tabId = currentButton.getAttribute('data-tab');
        let currentText = document.querySelectorAll('.services-content')

        tabButtons.forEach(function (item) {
            item.classList.remove('active');
        })

        currentText.forEach(function (item) {
                let currentDataText = item.getAttribute('data-tab')
                tabId === currentDataText ? item.classList.remove('dn') : item.classList.add('dn')
            }
        )
        currentButton.classList.add('active')
    }
)

/************************************** СОРТИРОВКА ФОТО И ДОБАВЛЕНИЕ НОВЫХ *******/

const filterBox = document.querySelectorAll('.gallery-card');
const nav = document.querySelector('.amazing-cards');
const listItems = document.querySelectorAll('.amazing-item');
const showMore = document.querySelector('.amazing-work-more');
const loader = document.querySelector('.cssload-jumping');


function filter(){
    nav.addEventListener('click', event =>{
        let filterClass = event.target.dataset['tab'];
        const target = event.target;
        listItems.forEach(listItems => listItems.classList.remove('active'))
        target.classList.add('active')
        filterBox.forEach(elem =>{
            elem.classList.remove('hide');
            if (!elem.classList.contains(filterClass) && filterClass!== 'all'){
                elem.classList.add('hide')
            }
        })
    })

    showMore.addEventListener('click', event => {
        const target = event.target;
        const filterClass = event.target.dataset['tab'];

        showMore.style.display = 'none'

        loader.classList.remove('none')
        setTimeout(() => {
            loader.classList.add('none')
            filterBox.forEach(elem =>{
                elem.classList.remove('none');
                if (!elem.classList.contains(filterClass)){
                    elem.classList.add('load')
                }
            })
        }, 2000)
    })
}

filter()


/************************************** ТАБЫ ФОТОК *******/

const tabBtns = document.querySelector('.tabs');
const tabTitle = document.querySelectorAll('.people-slider-mini');
const tabItem = document.querySelectorAll('.tab-item');


tabBtns.addEventListener('click', (event) => {
        let currentBtn = event.target,
            tabId = currentBtn.getAttribute('data-tab'),
            currentText = document.querySelectorAll('.tab-item')

        tabTitle.forEach(function (item) {
            item.classList.remove('active')
        })

        currentText.forEach(function (item) {
                let currentDataText = item.getAttribute('data-tab')
                tabId === currentDataText ? item.classList.remove('none') : item.classList.add('none')
            }
        )
        currentBtn.classList.add('active')
    }
)

/****************************** СДВИГ  ВЛЕВО и ВПРАВО *******/

function swiperight() {
    const tabRight = document.getElementById('right');
    tabRight.addEventListener('click', function () {
        let currentIndex = 0;
        const tabTitleArray = [...tabTitle]
        tabTitleArray.forEach((item, key) => {
            if (item.classList.value.includes('active')) {
                currentIndex = key;
            }
        })
        if (currentIndex === tabTitleArray.length-1) {
            currentIndex = 0
        } else {
            currentIndex++;
        }
        toggleCarusel(currentIndex, tabTitleArray)
    })
}

swiperight()
swipeleft()

function swipeleft() {
    const tabLeft = document.querySelector('.fa-angle-left');
    tabLeft.addEventListener('click', function () {
        let currentIndex = 0;
        const tabTitleArray = [...tabTitle]
        tabTitleArray.forEach((item, key) => {
            if (item.classList.value.includes('active')) {
                currentIndex = key;
            }
        })
        if (currentIndex - 1 === -1) {
            currentIndex = tabTitleArray.length-1
        } else {
            currentIndex--;
        }
        toggleCarusel(currentIndex, tabTitleArray)
    })
}

            /****************************** КАРУСЕЛЬ *******/

function toggleCarusel(index, array){
    let dataAttribute = array[index].getAttribute('data-tab');
    array.forEach(function (item) {
        item.classList.remove('active')
    })
    const currentText = document.querySelectorAll('.tab-item');
    currentText.forEach(function (item) {
            let currentDataText = item.getAttribute('data-tab')
            dataAttribute === currentDataText ? item.classList.remove('none') : item.classList.add('none')
        }
    )
    array[index].classList.add('active')
}


