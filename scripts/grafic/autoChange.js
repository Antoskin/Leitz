export default function() {

    let numeric  = 0;

        setInterval( () => {
            $(`.but-graf:eq(${numeric})`).click()
            numeric++
        },1500 );
   


}