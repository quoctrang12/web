$(document).ready(
    $('.icon-sub-menu').click(
        function(event){
            $('.sub-menu').slideToggle(200);

            if($('.icon-sub-menu').hasClass('fa-chevron-down')){
                $('.icon-sub-menu').addClass('fa-chevron-up');
                $('.icon-sub-menu').removeClass('fa-chevron-down');
            }else{
                $('.icon-sub-menu').addClass('fa-chevron-down');
                $('.icon-sub-menu').removeClass('fa-chevron-up');
            }
        }   
    )
    
)

tabs = ()=>{
    var items = document.querySelectorAll(".item");
    var contents = document.querySelectorAll(".img-main");

    items.forEach((item,index)=>{
        item.addEventListener("click",()=>{
            removeClass();
            items[index].classList.add("active");
            contents[index].classList.add("active");
        })
    })
    
    removeClass = () => {
        items.forEach((item,index)=>{
                items[index].classList.remove("active");
                contents[index].classList.remove("active");
            })
    }
}
tabs();


