$( document ).ready(function() {
    $(".header-menu li:has(ul)").addClass("has-children");
    $(".header-menu>li").click(function(){
        $( this ).siblings("li").children(".header-menu-sublist").slideUp(200)
        $( this ).siblings("li").css("background-color", "rgb(256, 256, 256)")
        $( this ).css("background-color", "rgba(0, 0, 0, 0.05)")
        $( this ).children(".header-menu-sublist").slideToggle(200)
    })
    $(".header-menu-sublist li").hover(
        function(){
            $( this ).children(".header-menu-sublist").show()
        },
        function(){
            $( this ).children(".header-menu-sublist").hide()
        }
    )
    $(".header-menu").click(function(e){
        e.stopPropagation();
    })
    $(".header-menu-sublist").click(function(e){
        e.stopPropagation();
    })
    $(document).click(function() {
        $(".header-menu-sublist").slideUp(200)
        $(".header-menu>li").css("background-color", "rgb(256, 256, 256)")
    })
})