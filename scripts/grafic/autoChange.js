export default function() {

    let numeric  = 0;
    // if($('.presentation').hasClass('dis')) {
        setInterval( () => {
            $(`.but-graf:eq(${numeric})`).click()
            // { numeric != 6 ? numeric++ : numeric == 0 }
            numeric++
            if(numeric = 6) numeric == 0
        },500 );
    // }


}