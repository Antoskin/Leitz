import steps from './stepsList';

export default function() {
    const forChage = $('.image-target'), //DOM of imageTarget
        h = forChage.find(`h4`),
        p = forChage.find(`p`),
        img = forChage.find('img');
    $('.sibl-step').click( function() { //when click step imageTarget changes over 300ms
        let the_step = $(this),
        num = the_step.attr('data-num'); 
        animationForImageTarget()
        setTimeout( () => {
            h.text(steps[num].title);
            p.text(steps[num].text);
            img.attr('src', steps[num].url);
        },300 )
    })

    function animationForImageTarget() { // animation when imageTarget changes
        TweenMax.to('.image-target', 0.3, { opacity:0, y:-20 });
        TweenMax.to('.image-target', 0.3, { opacity:1, y:0 }).delay(0.3);
    }
}