export function classer(classes : string) {
    const breaks : string[]  = ['sm:','md:','lg:','xl:','2xl:']
    var inBreaks : string[] = [];
    var endClasses : string[] = [];
    var concat : boolean = false
    var val : string = ''
    var toNext : boolean = false
    breaks.map((item) => {
        if(classes.includes(item)){
            inBreaks.push(item)
        }
    })
    const splitedClasses = classes.split(' ')
    splitedClasses.map((item) => {
        for (const iterator of inBreaks) {
            if (item.includes(iterator)) {
                val = iterator
                concat = true
                toNext = true
                break
            }
        }
        if(concat){
            if(!toNext){
                // return val + item
                endClasses.push(val + item)
            }
            else{
                toNext = false
                endClasses.push(item)
                // return item
            }
        }
        else endClasses.push(item)

    })
    // console.log(inBreaks);
    // console.log(splitedClasses);
    console.log(endClasses.join(' '));
    return endClasses.join(' ')
}
