function tickets(peopleInLine){
    sum = 0;
    clerk = '';
    for(let i = 0; i < peopleInLine.length; i++)
        if(peopleInLine[i] - 25 > sum) {
            return 'NO';
        } else {
            sum =+ 25;
            clerk = 'YES'
        }

    return clerk;
}