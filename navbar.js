const sections = ["general", "politics", "campus", "school", "discipline", "sex", "drugs", "wellness", "covid", "community"];
const sectionElems = [];

console.log(sections);

for (section of sections){
    console.log(section);
    sectionElems.push(document.getElementById(section));
}

console.log(sectionElems);

window.addEventListener("scroll", () => {
    if (window.innerWidth > 600){
        for (i in sectionElems){
            const sectionElem = sectionElems[i];
            const section = sections[i];
            const navbarItem = document.querySelector(".sech-" + section) || document.querySelector(".sec-" + section);
            if (window.scrollY > sectionElem.offsetTop && window.scrollY < sectionElem.offsetTop + sectionElem.offsetHeight){
                navbarItem.classList.remove("sech-" + section);
                navbarItem.classList.add("sec-" + section);
            } else{
                navbarItem.classList.remove("sec-" + section);
                navbarItem.classList.add("sech-" + section);
            }
        }
    }
})