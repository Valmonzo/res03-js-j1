let i = 0;

while (i <=100) {
    if(i <=50) {
        if(i % 2 === 0) {
            console.log(`${i} est pair !`);
        }
        else {
            console.log(`${i} est impair !`);
        }

        i = i+2;
    }

    else {
        if(i % 2 === 0) {
            console.log(`${i} est pair !`);
        }

        else {
            console.log(`${i} est impair !`);
        }

        i = i+3;
    }
}