type GenericObject = { [key: string]: unknown };

export const doTags = (str = "", identity: number): GenericObject=>{
    const allPossibleTags =  str.split(" ")
        .map(el=>el.toLowerCase())
        .filter(possibleTag=>possibleTag.length > 3)
        .reduce((acc, word)=>{
            const count = (acc[word] || 0) + 1;
            return {...acc, [word]: count}
        }, {});

    const filteredByIdentity = Object.entries(allPossibleTags)
        .filter(tag=>{const [,count] = tag; return count >=identity});

    return Object.fromEntries(filteredByIdentity)
};



