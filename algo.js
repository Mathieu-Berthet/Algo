console.log("Coucou");


let tabToSortInsertion = [3,9,7,1,6,2,8,4,5];
let tabToSortSelection = [3,9,7,1,6,2,8,4,5];
let tabToSortBulle = [3,9,7,1,6,2,8,4,5];
let tabToSortBulleStop = [3,9,7,1,6,2,8,4,5];
let tabToSortShell = [3,9,7,1,6,2,8,4,5];
let tabToSortPerso = [3,9,7,1,6,2,8,4,5];
let tabToSortQuick = [3,9,7,1,6,2,8,4,5];
let tabToSortMerge = [3,9,7,1,6,2,8,4,5];
let tabToSortHeap = [3,9,7,1,6,2,8,4,5];
let stockElement = 0;

//Mon algo
function myAlgo(tab)
{
    console.log("Tableau non trié perso : ", tab);
    for(let i = 0; i < tab.length; i++)
    {
        for(let j = i + 1; j < tab.length; j++)
        {
            if(tab[j] > tab[i])
            {

            }
            else if(tab[j] < tab[i])
            {
                stockElement = tab[j];
                tab[j] = tab[i];
                tab[i] = stockElement;
            }
            else
            {

            }
        }
        console.log("Tableau trié, tri perso: ", tab);
    }
    console.log("Tableau trié fini, tri perso : ", tab);
}
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


function partage(tab, first, last, pivot)
{
    console.log("Tableau non trié, tri RAPIDE 2 : ", tab);
    stockElement = tab[pivot];
    tab[pivot] = tab[last];
    tab[last] = stockElement;

    j = first;
    for(let i = first; i < last; i++)
    {
        if(tab[i] < tab[last])
        {
            stockElement = tab[i];
            tab[i] = tab[j];
            tab[j] = stockElement;
            j++;
            console.log("Tableau trié, tri RAPIDE 1 : ", tab);
        }
    }
    stockElement = tab[last];
    tab[last] = tab[j];
    tab[j] = stockElement;
    console.log("Tableau  trié, tri RAPIDE 2 : ", tab);
    return j;

}
function QuickSort(tab, firstElem, lastElem)
{
    console.log("Tableau non trié, tri RAPIDE : ", tab);
    if(firstElem < lastElem)
    {
        let pivot = lastElem;
        pivot = partage(tab, firstElem, lastElem, pivot);
        QuickSort(tab, firstElem, pivot - 1);
        QuickSort(tab, pivot + 1, lastElem);
    }

    console.log("Tableau trié fini, tri rapide : ", tab);
}

function MergeSort(tab)
{
    console.log("Tableau non trié, tri fusion : ", tab);
    if(tab.length == 1)
    {
        console.log("Tableau trié fini, tri fusion : ", tab);
        return tab;
    }
    else
    {
        fusion(MergeSort(tab[0], ...[tab.length/2]), MergeSort(tab[tab.length/2 + 1], ...[tab.length]));
    }
}

function fusion(tabGauche, tabDroite)
{
    if(tabGauche === null)
    {
        return tabDroite;
    }
    if(tabDroite === null)
    {
        return tabGauche;
    }
    if(tabGauche[0] < tabDroite [0])
    {
        return tabGauche[0].concat(fusion(tabGauche[1], ...[tabGauche.length], tabDroite));
        console.log("Tableau trié, tri FUSION 1 : ", tabGauche);
    }
    else
    {
        return tabDroite[0].concat(fusion(tabGauche, tabDroite[1], ...[tabDroite.length]));
        console.log("Tableau trié, tri FUSION 2 : ", tabDroite);
    }
}

//myAlgo(tabToSortPerso);
//InsertionSort(tabToSortInsertion, 1, 0);
//SelectionSort(tabToSortSelection);
//BubbleSortWithoutStop(tabToSortBulle);
//BubbleSortWithStop(tabToSortBulleStop);
//ShellSort(tabToSortShell);
//QuickSort(tabToSortQuick, 0, tabToSortQuick.length -1);
MergeSort(tabToSortMerge);








////////////////////////////////////////////////////// RECURSIVITE //////////////////////////////////////////////////////////////
function factorielle(n)
{
    let result = 0;
    if(n === 0)
    {
        return 1;
    }
    else if(n > 0)
    {
        //console.log("factorielle : ", result);
        return n * factorielle(n-1);
        //console.log("factorielle : ", result);
    }
    else
    {

    }
}



function fibo(n)
{
    let result = 0;
    if(n === 0)
    {
        result += 0;
        //console.log("fibo : ", result);
    }
    else if(n === 1)
    {
        result += 1;
        //console.log("fibo : ", result);
    }
    else
    {
        result += fibo(n-1) + fibo(n-2);
        console.log("fibo apres : ", result);
    }

    return result;
}

function syracuse(n)
{
    let result = 0;
    //console.log(n, "->");
    if(n < 0)
    {
        console.log("Le nombre est inférieur à 0, comment voulait vous faire le calcul ?");
        return result;
    }
    else
    {
        if(n === 0)
        {
            console.log(n);
        }
        else if(n === 1)
        {
            console.log(1);
        }
        else if(n%2 === 0)
        {
            result = n / 2;
            console.log(n / 2, "->");
            syracuse(result);
        }
        else if(n%2 === 1)
        {
            result = n * 3 + 1
            console.log(n * 3 + 1, "->");
            syracuse(result);
        }
    }
    return 1;
}


function pgcd(a,b)
{
    let myPgcd = 0;
    if(b !== 0)
    {
        myPgcd = a%b;
        return pgcd(b,myPgcd);
    }
    else
    {
        return a;
    }
}


/*console.log("factoriel : ", factorielle(5));

console.log("fibo : ", fibo(12));


syracuse(7);

console.log("pgcd : ", pgcd(21,72));
console.log("pgcd : ", pgcd(12,4));*/