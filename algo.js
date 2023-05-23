console.log("Coucou");


let tabToSort = [3,9,7,1,6,2,8,4,5];
let stockElement = 0;

console.log("Tableau non trié : ", tabToSort);
//Mon algo
/*for(let i = 0; i < tabToSort.length; i++)
{
    for(let j = i + 1; j < tabToSort.length; j++)
    {
        if(tabToSort[j] > tabToSort[i])
        {

        }
        else if(tabToSort[j] < tabToSort[i])
        {
            stockElement = tabToSort[j];
            tabToSort[j] = tabToSort[i];
            tabToSort[i] = stockElement;
        }
        else
        {

        }
    }
    console.log("Tableau trié : ", tabToSort);
}
console.log("Tableau trié fini : ", tabToSort);*/

//Tri Insertion
let j = 0;

/*for (let i = 0; i < tabToSort.length; i++)
{
    stockElement = tabToSort[i];
    j = i;
    while(j > 0 && tabToSort[j - 1] > stockElement)
    {
        tabToSort[j] = tabToSort[j - 1];
        j = j -1;
    }

    tabToSort[j] = stockElement;
    console.log("Tableau trié, tri insertion : ", tabToSort);
}
console.log("Tableau trié fini, tri insertion : ", tabToSort);*/

//Tri Selection
/*let longueur = tabToSort.length;
for (let i = 0; i < longueur - 2; i++)
{
    let min = i;
    for(let j = i + 1; j <longueur; j++)
    {
        if(tabToSort[j] < tabToSort[min])
        {
            min = j;
        }
    }
    if(min !== i)
    {
        stockElement = tabToSort[min];
        tabToSort[min] = tabToSort[i];
        tabToSort[i] = stockElement;
    }
    console.log("Tableau trié, tri selection : ", tabToSort);
}
console.log("Tableau trié fini, tri selection : ", tabToSort);*/



//Tri a bulles
//Version sans condition d'arrêt
/*for (let i = tabToSort.length; i > 1; i--)
{
    let triOk = false;
    for(let j = 0; j < i-1; j++)
    {
        if(tabToSort[j +1] < tabToSort[j])
        {
            stockElement = tabToSort[j+1];
            tabToSort[j+1] = tabToSort[j];
            tabToSort[j] = stockElement;
        }
    }
    console.log("Tableau trié, tri à bulles : ", i, tabToSort);
}*/


//2e Version Tri à bulle : Do While, Version avec condition d'arrêt
/*let nbPassage = 0;
let triOk = false;
do
{
    triOk = false;
    for(let i = 0; i < tabToSort.length - 1 - nbPassage; i++)
    {
        if(tabToSort[i] > tabToSort[i + 1])
        {
            stockElement = tabToSort[i+1];
            tabToSort[i+1] = tabToSort[i];
            tabToSort[i] = stockElement;
            triOk = true;
        }

    }
    nbPassage++;
    console.log("Tableau trié, tri à bulles : ", tabToSort);
} while(triOk);


console.log("Tableau trié fini, tri à bulles : ", tabToSort);*/



//Tri de Shell
let tabInterval = [3,2,1];

for(let gap = 0; gap < tabInterval.length; gap++)
{
    for(debut = 0; debut < gap; debut++)
    {
        for (let i = debut; i < tabToSort.length; i += gap)
        {
            stockElement = tabToSort[i];
            j = i;
            while (j > 0 && tabToSort[j - 1] > stockElement)
            {
                tabToSort[j] = tabToSort[j - 1];
                j = j - 1;
            }
            tabToSort[j] = stockElement;
            console.log("Tableau trié, tri par Shell : ", tabToSort);
            console.table(tabToSort);
        }
    }
}

console.log("Tableau trié fini, tri par Shell : ", tabToSort);
