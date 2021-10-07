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
