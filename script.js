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



// Works Vanilla JS
document.addEventListener("DOMContentLoaded", () => {
    const works = [
        "aobaotenkitushin",
        "problem-selector",
    ];
    works.forEach(work => {
        const work_id = "#" + work;
        const work_url = "/" + work + ".txt";
        const btn_ele = document.querySelector(work_id + "-btn");
        
        btn_ele.addEventListener("click", () => {
            const work_ele = document.querySelector(work_id);

            // enlarge the clicked work
            work_ele.classList.add("enlarged");
            
            // rewrite the content of the clicked work
            fetch(work_url)
            .then((response) => {
                if (!response.ok) {
                    const message =
                        `HTTP error status: ${response.status}\n` +
                        ` when accessing: ${work_url}`;
                    throw new Error(message);
                }
                return response.text();
            })
            .then(text => {
                work_ele.innerHTML = text;
            })
            .catch(error => {
                console.log(error);
                alert(error);
            });
        }, false);
    });
});
// Works Vanilla JS

/*
// Works jQuery
$(() => {
    const works = [
        "aobaotenkitushin",
        "problem-selector",
    ];
    works.forEach(work => {
        const work_id = "#" + work;
        const work_url = "/" + work + ".txt";

        $(work_id + "-btn").click(() => {
            // enlarge the clicked work
            // bad script
            // $(work_id).css("width", "100%");
            // $(work_id).css("background-color", "rgb(107, 142, 35, 0.5)");
            // $(work_id).css("transition", "all 2s");
            // good script
            $(work_id).addClass("enlarged");

            // rewrite the content of the clicked work
            $.ajax({
                type: 'GET',
                url: work_url,
            })
            .done(data => {
                $(work_id).html(data);
            })
            .fail(() => {
                alert("Error when accessing: " + work_url);
            });
        });
    });
});
// Works jQuery
*/
