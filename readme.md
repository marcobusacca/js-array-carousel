PROBLEMA : Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

    - MILESTONE 1 : Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.

        - Crea il container generale;

        - All'interno del container generale inserisci il contenitore delle slide;

        - All'interno del contenitore delle slide inserisci le slide con all'interno le immagini;

        - Crea il contenitore per i bottoni di controllo;

        - All'interno del contenitore per i bottoni di controllo inserisci il Bottone "Indietro" e il Bottone "Avanti".
        

    - MILESTONE 2 : Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal. 
    Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile. 
    Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

        - Crea un Array contenente tutte le Immagini da inserire nell'HTML;

        - Inserisci una Constante che contiene l'Elemento HTML con classe "slider";

        - Inserisci una Variabile di Tipo Stringa dove inserirai gli Elementi HTML contenenti le Slide e le Immagini;

        - Crea un CICLO FOR che scorre tutti gli Elementi dell'Array contenente le Immagini;

            - Inserisci una Variabile che contiene, ad ogni iterazione del Ciclo FOR, l'Immagine Corrente dell'Array;

            - Inserisci gli elementi HTML contenenti le Slide (classe "slide") e le Immagini Correnti all'interno della Variabile di Tipo Stringa;

        - Inserisci, dentro la Constante che contiene l'elemento HTML con classe "slider", gli Elementi Contenuti all'interno della Variabile di Tipo Stringa;

        - Inserisci una Constante che contiene tutti gli Elementi HTML con classe "slide";

        - Inserisci una Variabile Contatore che indica gli Indici degli Elementi HTML con classe "slide" e classe "active";

        - Prendi il primo Elemento HTML con classe "slide" ed inseriscigli la classe HTML "active".

    - MILESTONE 3 : Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
