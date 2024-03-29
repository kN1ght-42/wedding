$(function() {
    // Intro
    let intro       = $("#intro");
    let introNumber = $("#intro_inner");
    let photo     = $("div.block_one.start");
    let quatIntroH  = (intro.innerHeight());

    //  Text 
    let textItems = $("div.text");
    

    // Intro
    $(window).on("scroll", function() {
        if ($(window).width() > 600) {
            let scrollPos = $(this).scrollTop();
            let quatIntroH  = (intro.innerHeight() / 1.2);
            if (scrollPos < quatIntroH) {
                let h = 1 - (scrollPos / quatIntroH);
                intro.css("opacity", h);
                intro.css("background", "#28282A")
                introNumber.css("color", "#CF9645");
            } else if (scrollPos > quatIntroH){
                intro.css("background", "none")
                let n = (scrollPos / quatIntroH) - 1;
                intro.css("opacity", n);
                introNumber.css("color", "#28282A");
            }
        }
        if ($(window).width() <= 600) {
            let scrollPos = $(this).scrollTop();
            let quatIntroH  = (intro.innerHeight() * 1.3);
            if (scrollPos < quatIntroH) {
                let h = 1 - (scrollPos / quatIntroH);
                intro.css("opacity", h);
                intro.css("background", "#28282A")
                introNumber.css("color", "#CF9645");
            } else if (scrollPos > quatIntroH){
                intro.css("background", "none")
                let n = (scrollPos / quatIntroH) - 1;
                intro.css("opacity", n);
                introNumber.css("color", "#28282A");
            }
        }
    });

    $(window).on("scroll", function() {
        for (let i = 0; i < textItems.length; i++) {
            let text = $(textItems[i]);
            let textPos = $(text).offset().top;
            let scrollPos = $(this).scrollTop();
            if ($(window).width() > 1800) {
                if ((scrollPos + 1000) > textPos) {
                    text.addClass("active");
                }
            } else if ($(window).width() > 1600) {
                if ((scrollPos + 1200) > textPos) {
                    text.addClass("active");
                }
            } else if ($(window).width() > 1300) {
                if ((scrollPos + 1300) > textPos) {
                    text.addClass("active");
                }
            } else if ($(window).width() > 800) {
                if ((scrollPos + 1400) > textPos) {
                    text.addClass("active");
                }
            } else if ($(window).width() > 600) {
                    if ((scrollPos + 1000) > textPos) {
                        text.addClass("active");
                    }
            } else if ($(window).width() > 0) {
                if ((scrollPos + 700) > textPos) {
                    text.addClass("active");
                }
            }
        }
    })


});