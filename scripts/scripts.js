$( document ).ready(function() {
    $(".header-menu li:has(ul)").addClass("has-children");
    $(".header-menu>li").click(function(){
        $( this ).siblings("li").children(".header-menu-sublist").slideUp(200)
        $( this ).siblings("li").css("background-color", "rgb(256, 256, 256)")
        $( this ).css("background-color", "rgba(0, 0, 0, 0.05)")
        $( this ).children(".header-menu-sublist").slideToggle(200)
    })

    $(".header-menu").click(function(e){
        e.stopPropagation();
    })
    $(".header-menu-sublist").click(function(e){
        e.stopPropagation();
    })
    
    $(document).click(
            closeAllSubmenues()
        )
    
    $(document).keyup(function(e) {
            if (e.keyCode == 27) closeAllSubmenues()
        })

    $(".header-menu-sublist").menuAim({
        activate: openSubmenu,
        deactivate: closeSubmenu
    })
})

function openSubmenu(row) {
    $( row ).children(".header-menu-sublist").show()
}
function closeSubmenu(row) {
    $( row ).children(".header-menu-sublist").hide()
}
function closeAllSubmenues() {
    $(".header-menu-sublist .header-menu-sublist").hide()
    $(".header-menu-sublist").slideUp(200)
    $(".header-menu>li").css("background-color", "rgb(256, 256, 256)")
}