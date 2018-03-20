function odbierz(e){
    

    let nazwaWyd = document.querySelector('#nazWyd').value;
    let czasOD =  document.querySelector('#timeFrom').value;
    let czasDO =  document.querySelector('#timeTo').value;
    let opisWyd =  document.querySelector('#opisWyd').value;
    let wydarzenieObiekt = {
        nazwaWydarzenia : nazwaWyd, 
        odKiedy : czasOD, 
        doKiedy : czasDO,
        opisWydarzenia : opisWyd,
        dzienWydarzenia : kliknietyDzien,
        miesiacWydarzeniaSlownie : nazwyMiesiecy[miesiac],
        miesiacWydarzeniaLiczba : miesiac,
        rokWydarzenia : rok
    };
    console.log(wydarzenieObiekt);
    
    //ustawianie w storage danych (musze do stringa przerobic obiekt, zeby go odpowiednio umiescic w storage)
    localStorage.setItem(timeStamp, JSON.stringify(wydarzenieObiekt));
    
}