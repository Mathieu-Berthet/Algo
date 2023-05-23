console.log("Coucou");


let tabToSortInsertion = [3,9,7,1,6,2,8,4,5];
let tabToSortSelection = [3,9,7,1,6,2,8,4,5];
let tabToSortBulle = [3,9,7,1,6,2,8,4,5];
let tabToSortBulleStop = [3,9,7,1,6,2,8,4,5];
let tabToSortShell = [3,9,7,1,6,2,8,4,5];
let tabToSortPerso = [3,9,7,1,6,2,8,4,5];
let stockElement = 0;

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

function InsertionSort(tab, gap = 1, debut = 0)
{
    let j = 0;
    console.log("Tableau non trié insertion : ", tab);
    for (debut; debut < tab.length; debut+=gap)
    {
        console.log("parcours : ", debut);
        stockElement = tab[debut];
        j = debut;
        while(j > 0 && tab[j - 1] > stockElement)
        {
            tab[j] = tab[j - 1];
            j = j - 1;
        }

        tab[j] = stockElement;
        console.log("Tableau trié, tri insertion : ", tab);
    }
    console.log("Tableau trié fini, tri insertion : ", tab);
}
//Tri Selection
function SelectionSort(tab)
{
    console.log("Tableau non trié selection : ", tab);
    let longueur = tab.length;
    for (let i = 0; i < longueur - 2; i++)
    {
        let min = i;
        for(let j = i + 1; j <longueur; j++)
        {
            if(tab[j] < tab[min])
            {
                min = j;
            }
        }
        if(min !== i)
        {
            stockElement = tab[min];
            tab[min] = tab[i];
            tab[i] = stockElement;
        }
        console.log("Tableau trié, tri selection : ", tab);
    }
    console.log("Tableau trié fini, tri selection : ", tab);
}


//Tri a bulles
//Version sans condition d'arrêt
function BubbleSortWithoutStop(tab)
{
    console.log("Tableau non trié  bubble : ", tab);
    for (let i = tab.length; i > 1; i--)
    {
        let triOk = false;
        for(let j = 0; j < i-1; j++)
        {
            if(tab[j +1] < tab[j])
            {
                stockElement = tab[j+1];
                tab[j+1] = tab[j];
                tab[j] = stockElement;
            }
        }
        console.log("Tableau trié, tri à bulles : ", tab);
    }
    console.log("Tableau trié fini, tri à bulles : ", tab);
}

//2e Version Tri à bulle : Do While, Version avec condition d'arrêt
function BubbleSortWithStop(tab)
{
    let nbPassage = 0;
    let triOk = false;
    console.log("Tableau non trié bubble 2 : ", tab);
    do
    {
        triOk = false;
        for(let i = 0; i < tab.length - 1 - nbPassage; i++)
        {
            if(tab[i] > tab[i + 1])
            {
                stockElement = tab[i+1];
                tab[i+1] = tab[i];
                tab[i] = stockElement;
                triOk = true;
            }

        }
        nbPassage++;
        console.log("Tableau trié, tri à bulles 2 : ", tab);
    } while(triOk);


    console.log("Tableau trié fini, tri à bulles 2 : ", tab);
}


//Tri de Shell
function ShellSort(tab) {
    let tabInterval = [3,2,1];

    console.log("Tableau non trié Shell : ", tab);
    for(let gap = 0; gap < tabInterval.length; gap++)
    {
        for(let debut = 0; debut < tabInterval[gap]; debut++)
        {
            InsertionSort(tab, tabInterval[gap], debut);
            console.log("Tableau trié, tri par Shell : ", tab);
        }
    }

    console.log("Tableau trié fini, tri par Shell : ", tab);
}

//InsertionSort(tabToSortInsertion, 1, 0);
//SelectionSort(tabToSortSelection);
//BubbleSortWithoutStop(tabToSortBulle);
//BubbleSortWithStop(tabToSortBulleStop);
ShellSort(tabToSortShell);