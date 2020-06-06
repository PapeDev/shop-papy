(function() {

    var scrollY = function () {
        var supportPageOffset = window.pageXOffset !== undefined;
        var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
    
        return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
    }
    console.log("test");
    console.log(window.scrollY);
    console.log(window.pageYOffset);

    // var element = document.querySelector('.ma-topbar');
    // var top = element.getBoundingClientRect().top + scrollY()
    // console.log(top);



    // var onScroll = function () {
    //     if (scrollY() > top) {
    //         element.classList.add('fixed')
    //     } else {
    //         element.classList.remove('fixed')
    //     }
    // }
    // window.addEventListener('scroll', onScroll)
})()
