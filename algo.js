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
let longueur = tabToSort.length;
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
console.log("Tableau trié fini, tri selection : ", tabToSort);



//Tri a bulles

//console.log("Tableau trié : ", tabToSort);

//Tri de Shell