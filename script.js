const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");
const navbar = document.querySelector(".navbar");
const about = document.querySelector(".about");

burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    // navLinks.forEach((link, index) => {
    //     if (link.style.animation) {
    //         link.style.animation = "";
    //     } else {
    //         link.style.animation = 'navLinksFade 0.5s ease forwards ${index / 7 + 0.4}s';
    //     }
    // });
    burger.classList.toggle("toggle");
});

//ヘッダーがulタグの一に来たら、ヘッダーを固定する。
window.addEventListener("scroll", () => {
    if (window.pageYOffset >= about.offsetTop) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
});



// Vanilla JS
/*
$(function(){
    const work_name = "aobaotenkitushin";
    const work_id = "#" + work_name;
    const work_url = "/" + work_name + ".txt";
    
    document.querySelector(work_id+"-btn").addEventListener("click", function(event) {
        const ele = document.querySelector(work_id);
        ele.style.width = "100%";
        ele.style.backgroundColor = "white";
        
        fetch(work_url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            ele.innerHtml = data;
        })
        .catch(error => {
            console.log("Error when accessing: " + work_url);
        });
    }, false);
*/



// jQuery
$(function(){
    const work_name = "aobaotenkitushin";
    const work_id = "#" + work_name;
    const work_url = "/" + work_name + ".txt";
    
    $(work_id+"-btn").click(function() {
        $(work_id).addClass("enlarged");
        $.ajax({
            type:'GET',
            url: work_url,
        })
        .done(function(data){
            $(work_id).html(data);
        })
        .fail(function(){
            alert("Error when accessing: " + work_url);
        })
    });
});


$(function(){
    const work_name = "problem-selector";
    const work_id = "#" + work_name;
    const work_url = "/" + work_name + ".txt";
    $(work_id+"-btn").click(function() {
        $(work_id).css("width", "100%");
        $(work_id).css("background-color", "rgb(107, 142, 35, 0.5)");
        $(work_id).css("transition", "all 2s");
        
        $.ajax({
            type:'GET',
            url: work_url,
        })
        .done(function(data){
            $(work_id).html(data);
        })
        .fail(function(){
            alert("Error when accessing: " + work_url);
        })
    });
});
