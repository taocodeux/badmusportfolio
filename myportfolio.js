// block to change the letters one by one
let changeText = document.getElementById("change-text")
let wordsArr = ["Web-Developer", "Product-Designer"]
let currentLetterIndex = 0
let currentWordIndex = 0
let typingSpeed = 100

function typeLetters(){
    if (currentLetterIndex < wordsArr[currentWordIndex].length){
        changeText.innerText += wordsArr[currentWordIndex][currentLetterIndex]
        currentLetterIndex++
        setTimeout(typeLetters, typingSpeed)
    }else{
        setTimeout(clearLetters,typingSpeed)
    }
}
function clearLetters(){
    if(changeText.innerText){
        changeText.innerText = changeText.innerText.slice(0, -1)
        setTimeout(clearLetters, typingSpeed)
    }else{
        currentWordIndex = (currentWordIndex + 1) % wordsArr.length
        currentLetterIndex = 0
        setTimeout(typeLetters, typingSpeed)
    }
}
typeLetters()

// block to open the nav dropdown f\ or responsiveness
let myDropDown = document.getElementById("hidden-dd")
let myHamburger = document.getElementById("hamburger")
let myLogo = document.getElementById("logo")
let myMoon = document.getElementById("moon")
let myNav = document.getElementById("nav")
let close = document.getElementById("close")

function openDropDown() {
    let dropdownStyle = window.getComputedStyle(myDropDown)
    if (dropdownStyle.display === "none") {
        myDropDown.style.display = "block"
        myHamburger.style.display = "none"
        myMoon.style.display = "none"
        myNav.style.padding = "0"
    } else {
        myDropDown.style.display = "none";
        myHamburger.style.display = "block"
        myMoon.style.display = "block"
    }
}
// block to close the nav dropdown for responsiveness

function closeDropDown(){
    if(myDropDown.style.display === "block"){
        myDropDown.style.display = "none"
        myNav.style.padding = "1.5rem 2rem 1.5rem 2rem"
        myHamburger.style.display = "block"
        myMoon.style.display = "block"
    } else{
        myDropDown.style.display = "block"
    }
}
//to close navli when li is clicked
document.querySelectorAll('.hidden-li a').forEach(item => {
    item.addEventListener('click', () => {
        closeDropDown()
    })
})
//stop hambruger from showing on big screens
function keepHamburgerout() {
    if (window.innerWidth >= 320 && window.innerWidth <= 480) {
        myHamburger.style.display = "block"
        myNav.style.padding = "1.5rem"
    } else if(window.innerWidth > 480 && window.innerWidth <= 768) {
        myHamburger.style.display = "block"
        myNav.style.padding = "1.5rem"
    } else{
        myHamburger.style.display = "none"
        myNav.style.padding = "1.5rem 5rem"
    }
}

window.addEventListener("resize", keepHamburgerout);
keepHamburgerout(); 

//open resume
let viewBtn =document.getElementById("view-btn")

function openResume(){
    window.open("portfolio images and icon/Badmus Tech CV.pdf", "_blank")
}


//change to darkmode
document.addEventListener("DOMContentLoaded", () => {
    const toggleDarkMode = () => {
        let myAbout = document.getElementById("about")
        let myHome = document.getElementById("home")
        let myContact = document.getElementById("contact")
        let myProjects = document.getElementById("projects")
        let hireBtn = document.querySelector(".hire-btn")
        let viewBtn = document.querySelector(".view-btn")
        let openBtns = document.querySelectorAll(".open-btn")

        const isDarkMode = !myHome.classList.contains("dark-mode")

        myAbout.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue("--whitesw")
        myContact.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue("--whitesw")
        myHome.style.backgroundColor = isDarkMode ? "#000" : getComputedStyle(document.documentElement).getPropertyValue("--ashbg")
        myProjects.style.backgroundColor = isDarkMode ? "#000" : getComputedStyle(document.documentElement).getPropertyValue("--ashbg")

        // to change back to light mode
        const elements = [
            { id: "nav", style: { backgroundColor: isDarkMode ? "#000" : getComputedStyle(document.documentElement).getPropertyValue("--ashbg") } },
            { id: "moon", style: { backgroundColor: isDarkMode ? getComputedStyle(document.documentElement).getPropertyValue("--ashbg") : getComputedStyle(document.documentElement).getPropertyValue("--lightblack") } },
            { id: "logo", style: { color: isDarkMode ? getComputedStyle(document.documentElement).getPropertyValue("--reddishbrown") : getComputedStyle(document.documentElement).getPropertyValue("--initial-text-color") } },
        ]
        const nav = document.getElementById("nav")
        if (isDarkMode) {
            const navShadowColor = getComputedStyle(document.documentElement).getPropertyValue("--reddishbrown")
            nav.style.boxShadow = `0px 1px 5px ${navShadowColor}`
        } else {
            nav.style.boxShadow = "" 
        }

        elements.forEach(({ id, style }) => {
            const element = document.getElementById(id)
            Object.assign(element.style, style)
        })

        document.querySelectorAll(".nav-li").forEach(li => {
            li.style.color = isDarkMode ? getComputedStyle(document.documentElement).getPropertyValue("--reddishbrown") : getComputedStyle(document.documentElement).getPropertyValue("--initial-text-color")
        })

        const allTextElements = document.querySelectorAll("*")
        allTextElements.forEach(element => {
            if (!element.closest('.hire-btn') && !element.closest('.view-btn') && !element.closest('.open-btn')) {
                element.style.color = isDarkMode ? getComputedStyle(document.documentElement).getPropertyValue("--reddishbrown") : ""
            }
        })

        if (isDarkMode) {
            myAbout.classList.add("dark-mode")
            myHome.classList.add("dark-mode")
            myContact.classList.add("dark-mode")
            myProjects.classList.add("dark-mode")
            hireBtn.style.color = "#000" 
            viewBtn.style.color = getComputedStyle(document.documentElement).getPropertyValue("--reddishbrown")
            viewBtn.addEventListener("mouseenter", () => { 
                viewBtn.style.color = "#000"
            })
            viewBtn.addEventListener("mouseleave", () => {
                viewBtn.style.color = getComputedStyle(document.documentElement).getPropertyValue("--reddishbrown")
            })
            openBtns.forEach(openBtn => {
                openBtn.style.color = getComputedStyle(document.documentElement).getPropertyValue("--reddishbrown") 
                openBtn.addEventListener("mouseenter", () => { 
                    openBtn.style.color = "#000"
                })
                openBtn.addEventListener("mouseleave", () => { 
                    openBtn.style.color = getComputedStyle(document.documentElement).getPropertyValue("--reddishbrown")
                })
            })
        } else {
            myAbout.classList.remove("dark-mode")
            myHome.classList.remove("dark-mode")
            myContact.classList.remove("dark-mode")
            myProjects.classList.remove("dark-mode")
            hireBtn.style.color = ""
            viewBtn.style.color = ""
            openBtns.forEach(openBtn => {
                openBtn.style.color = "" 
            })
        }
    }

    document.getElementById("moon").addEventListener("click", toggleDarkMode)
})











