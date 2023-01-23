// DRAWING ( I USE PIXEL DRAWING ON WEBS OR APPS FIRST, THEN TRY TO DRAW MANUALLY USING WORDS)
// IF YOU WANT TO USE MY TEMPLATE, TRY CTRL + H (REPLACING MY OBJECTS), HERE ARE TWO CHARACTERS I USE IN THE DRAWING ('▇','⠀')
let line1 = ['⠀▇▇▇⠀','⠀⠀▇⠀⠀','⠀▇▇▇⠀','⠀▇▇▇⠀','⠀⠀⠀▇⠀','⠀▇▇▇⠀','⠀▇▇▇⠀','⠀▇▇▇⠀','⠀▇▇▇⠀','⠀▇▇▇⠀']
let line2 = ['⠀▇⠀▇⠀','⠀⠀▇⠀⠀','⠀⠀⠀▇⠀','⠀⠀⠀▇⠀','⠀⠀▇⠀⠀','⠀▇⠀⠀⠀','⠀▇⠀⠀⠀','⠀⠀⠀▇⠀','⠀▇⠀▇⠀','⠀▇⠀▇⠀']
let line3 = ['⠀▇⠀▇⠀','⠀⠀▇⠀⠀','⠀⠀▇▇⠀','⠀▇▇▇⠀','⠀▇⠀⠀⠀','⠀▇▇▇⠀','⠀▇▇▇⠀','⠀⠀⠀▇⠀','⠀▇▇▇⠀','⠀▇▇▇⠀']
let line4 = ['⠀▇⠀▇⠀','⠀⠀▇⠀⠀','⠀▇▇⠀⠀','⠀⠀⠀▇⠀','▇▇▇⠀⠀','⠀⠀⠀▇⠀','⠀▇⠀▇⠀','⠀⠀▇⠀⠀','⠀▇⠀▇⠀','⠀⠀⠀▇⠀']
let line5 = ['⠀▇▇▇⠀','⠀⠀▇⠀⠀','⠀▇▇▇⠀','⠀▇▇▇⠀','⠀⠀⠀▇⠀','⠀▇▇▇⠀','⠀▇▇▇⠀','⠀⠀▇⠀⠀','⠀▇▇▇⠀','⠀▇▇▇⠀']

setInterval(() => { // LOOP TO DISPLAY THE TIME PERIODICALLY
    // GET CURRENT DATE
    let utc = 7 // YOUR UTC HOUR ZONE, IN VIETNAM IT IS 7
    var date = new Date;
	const Hours = date.getUTCHours() + utc;
	const Minutes = date.getUTCMinutes();
	const Seconds = date.getUTCSeconds();

    // SEPERATING VALUE'S DIGITs
    let a1= Math.floor(Hours/10); // THE FIRST DIGIT OF HOUR
    let a2= (Hours-Math.floor(Hours/10)*10); // THE SECOND ONE
    let b1= Math.floor(Minutes/10); 
    let b2= (Minutes-Math.floor(Minutes/10)*10); 
    let c1= Math.floor(Seconds/10);
    let c2= (Seconds-Math.floor(Seconds/10)*10);

    // PRINT
    console.clear() // CLEAR OLD CONSOLE
    console.log(`${line1[a1]} ${line1[a2]}⠀ ${line1[b1]} ${line1[b2]}⠀ ${line1[c1]} ${line1[c2]}`)
    console.log(`${line2[a1]} ${line2[a2]}▇ ${line2[b1]} ${line2[b2]}▇ ${line2[c1]} ${line2[c2]}`)
    console.log(`${line3[a1]} ${line3[a2]}⠀ ${line3[b1]} ${line3[b2]}⠀ ${line3[c1]} ${line3[c2]}`)
    console.log(`${line4[a1]} ${line4[a2]}▇ ${line4[b1]} ${line4[b2]}▇ ${line4[c1]} ${line4[c2]}`)
    console.log(`${line5[a1]} ${line5[a2]}⠀ ${line5[b1]} ${line5[b2]}⠀ ${line5[c1]} ${line5[c2]}`)
}, 1000) // LOOPING TIME IN TICKS, 1000 TICKS = 1 SECOND
