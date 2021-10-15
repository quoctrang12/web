//jquery
$(document).ready(
// menu sản phẩm sổ xuống
    $('.icon-sub-menu').click(
        function(){
            $('.sub-menu').slideToggle(200);

            if($('.icon-sub-menu').hasClass('fa-chevron-down')){
                $('.icon-sub-menu').addClass('fa-chevron-up');
                $('.icon-sub-menu').removeClass('fa-chevron-down');
            }else{
                $('.icon-sub-menu').addClass('fa-chevron-down');
                $('.icon-sub-menu').removeClass('fa-chevron-up');
            }
        }
    ),
// Xem thêm sản phẩm
    $('.add-product').click(function() {
        $('.ex').slideToggle(200);
        if ($('.add-product').text() === 'Xem thêm') {
            $('.add-product').text("Ẩn bớt");
        }else{
            $('.add-product').text("Xem thêm");
        }
        

    }),
    $('.menu-hover').click(function(){
        $("menu").slideToggle(200);
    }),
    $('.menu-title').click(function(){
        $("menu").slideToggle(200);
    })


)

//javascript
// Thu phóng ảnh trong chi tiết sản phẩm 
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


