$(document).ready(function(){
    $('.miniature-img-container').each(function(index, obj){
        $(this).on('click',function(){
            // Make all video modals dissapear
            $('.modal-video').removeClass('modal-video-visible');

        const videoName = $(this).parent().attr('id');
        const video = $(`#presentation-video-${index+1}`);
        // add display block to the video modal and then 1ms later, add opacity 1
        $(`.${videoName}`).show();
        setTimeout(()=>{
            $(`.${videoName}`).addClass('modal-video-visible');
        },1)

        //Start video
        $(video).get(0).play();

        // When click outside the video but in the modal, set opacity to 0 and display none
        $(`.${videoName}`).on('click',function(){
            $('.modal-video').removeClass('modal-video-visible');
                setTimeout(()=>{
                    $(`.${videoName}`).hide();

                },500);
            $(video).get(0).pause();
            $(video).get(0).currentTime = 0;
        })

        // When video ended, close modal 
        $(video).on('ended',function(){
            setTimeout(() => {
                $('.modal-video').removeClass('modal-video-visible');
                setTimeout(()=>{
                    $(`.${videoName}`).hide();

                },500);

            },1000);
        })

        })
    })



    // Handle brand click
    $('.brand-container').each(function(index, obj){
        $(this).on('click',function(){
            const brandName = $(this).find('p').text();
            // Separate the product name words by - to use it in images src
            const brandFileName = brandName.replace(new RegExp(' ','g'),'-');

            const carouselIndicators = $('.carousel-indicators');
            const myCarouselElement = $('#carousel-more-brand');
            const carouselBrandImages = $('.more-brand-inner');
            //Set the carousel back to position 0 when reopening the modal
            const carousel = new bootstrap.Carousel(myCarouselElement).to(0);
            $(carouselIndicators).empty();
            const imagesQty = parseInt($(this).attr('data-bs-images'));

            // Take the value of data-bs-images in each product, the value must be an integer
            // this will create X number of buttons for each image of the product (data-bs-images)
            for(let i = 0; i< imagesQty; i++){
                const newButton = `<button class="${i===0 ? 'active' : '' } indicator" aria-current="${i===0?true:false}" type="button" data-bs-target="#carousel-more-brand" data-bs-slide-to="${i}" aria-label="Slide ${i+1}"></button>`;
                
                $(carouselIndicators).append(newButton);

            }

            //Generate images
            console.log('generating image');
            console.log(brandFileName);
            $(carouselBrandImages).empty();
            for(let i = 1; i<=imagesQty; i++){
                console.log(`brandFileName-${i}`)
                console.log(`generated: ${i}`);
                $(carouselBrandImages).append(`
                <div class="carousel-item ${i === 1 ? 'active' : ''}">
                    <img src="/img/presentacion/${brandFileName}-${i}.jpg" class="d-block more-product-img" alt="...">
                </div>`)
            }

            $('#brand-title').text(brandName);
        })
    })
})