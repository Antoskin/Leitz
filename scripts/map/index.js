
export default function() {

    $(`.show-cont-form-button`).click( function() {
        $(`.the_form`).toggleClass(`showedF`)
        if($(`.the_form`).hasClass(`showedF`)) {
            $(`.show-cont-form-button`).text(`Cкасувати`)
        } else{
            $(`.show-cont-form-button`).text(`Замовити взвiнок`)
        }
        
    } )


    console.log('form')
}