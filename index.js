var prog = '[ { "giorno": "Domenica", "data": "24/01/2024", "films": [ { "Titolo": "Shrek", "trama": "Quindi, c è questo orco verde e bruttarello di nome Shrek, che abita in una palude perché, diciamocelo, chiunque desidera una bella palude come dimora di lusso, vero? Un giorno, la sua palude si trasforma in una sorta di discarica per personaggi delle fiabe. C è un asino che parla più di una presentatrice televisiva, una principessa con una cotta per la lotta, e anche un cavaliere con l ego più grande di un drago gonfiabile. Per risolvere il suo problema di spazio, Shrek accetta una missione da parte di Lord Farquaad, il nano con le manie di grandezza. Deve salvare la Principessa Fiona, che è praticamente la regina del karaoke nel suo castello. Ma aspetta, ci sono colpi di scena! Fiona ha un piccolo segreto che trasformerà il mondo delle fiabe in una danza scatenata. Durante questa folle avventura, Shrek scopre che l amore può essere più imprevedibile di una pozione magica e che le favolette possono finire in modi davvero inaspettati. Alla fine, tutti vivono felici e contenti, tranne forse il drago gonfiabile che si lamenta di non essere stato invitato alla festa." }, { "Titolo": "Altro Film", "trama": "Trama dell altro film per Domenica" } ] }, { "giorno": "Lunedì", "data": "24/01/2024", "films": [ { "Titolo": "Shrek", "trama": "Trama di Shrek per Lunedì" }, { "Titolo": "Altro Film", "trama": "Trama dell altro film per Lunedì" } ] }, { "giorno": "Martedì", "data": "24/01/2024", "films": [ { "Titolo": "Shrek", "trama": "Trama di Shrek per Martedì" }, { "Titolo": "Altro Film", "trama": "Trama dell altro film per Martedì" } ] }, { "giorno": "Mercoledì", "data": "24/01/2024", "films": [ { "Titolo": "Shrek", "trama": "Trama di Shrek per Mercoledì" }, { "Titolo": "Altro Film", "trama": "Trama dell altro film per Mercoledì" } ] }, { "giorno": "Giovedì", "data": "24/01/2024", "films": [ { "Titolo": "Shrek", "trama": "Trama di Shrek per Giovedì" }, { "Titolo": "Altro Film", "trama": "Trama dell altro film per Giovedì" } ] }, { "giorno": "Venerdì", "data": "4/01/2024", "films": [ { "Titolo": "Shrek", "trama": "Trama di Shrek per Venerdì" }, { "Titolo": "Altro Film", "trama": "Trama dell altro film per Venerdì" } ] }, { "giorno": "Sabato", "data": "24/01/2024", "films": [ { "Titolo": "Shrek", "trama": "Trama di Shrek per Sabato" }, { "Titolo": "Altro Film", "trama": "Trama dell altro film per Sabato"}]}]';
        
        function onClick_Day(day) {
            
            
            const articles = document.getElementsByClassName("locandina-item");
            for (let i = 0; i < articles.length; i++) {
                if (articles[i].id === day) {
                    //quando trova il giorno passato come parametro si mette a fissarlo
                    articles[i].style.display = "block";
                    mostraLocandina(day);
                    
                    
                } else {
                    articles[i].style.display = "none";
                    
                    
                }
            }
        }
        
        
        function stampaData(day){
            const days = ['dom', 'lun', 'mar', 'mer', 'gio', 'ven', 'sab'];
            
            
            const dayIndex = new Date().getDay();
            const dayOffsets = {
                'dom': [0, 6, 5, 4, 3, 2, 1],
                'lun': [1, 0, 6, 5, 4, 3, 2],
                'mar': [2, 1, 0, 6, 5, 4, 3],
                'mer': [3, 2, 1, 0, 6, 5, 4],
                'gio': [4, 3, 2, 1, 0, 6, 5],
                'ven': [5, 4, 3, 2, 1, 0, 6],
                'sab': [6, 5, 4, 3, 2, 1, 0]
            };

             
            const count = new Date().getDate()+dayOffsets[day][dayIndex];
            const d = new Date(new Date().getFullYear(), new Date().getMonth() + 1, count);

            
            return d;

            
        }
        //stampa la locandina
        function mostraLocandina(day) {
            const dayel = document.getElementById(day);
            const program = JSON.parse(prog);

            // Converto il giorno da stringa a indice numerico
            const dayIndex = getDayIndex(day);

            let d =  stampaData(day);

           
            const dayprg = program[dayIndex];
            dayel.innerHTML = "<h2 class='text-item'>" + dayprg.giorno + " "  +d.getDate()+"/"+ d.getMonth()+"/"+ d.getFullYear()+ "</h2>";
            fetch('https://www.sammasensei.it/scuola/movies/get-movies.php')
                .then(response => response.json())
                .then(json =>  loadJSON(json))

            /*for (let i = 0; i < dayprg.films.length; i++) {
                dayel.innerHTML += "<article>" +
                    "<h2  id='text1'>" + dayprg.films[i].Titolo + "</h2>" +
                    "<img id='text2'src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTB9E9pY1dialQj3AKk0nsb-L668Pf3XNeoqUgdi3RqQrqbU1iE' style='height:30vh;'"+"<br>"+
                    "<p id='text3'>" + dayprg.films[i].trama + "</p>" +"<a href='https://en.wikipedia.org/wiki/Shrek'>"+"CLICCA QUI PER MAGGIORI INFORMAZIONI"+"</a>"+
                    "</article>";
            }*/

        
}



    // Funzione per ottenere l'indice numerico del giorno dalla stringa del giorno
    function getDayIndex(day) {
        const days = ['dom', 'lun', 'mar', 'mer', 'gio', 'ven', 'sab'];
        return days.indexOf(day);
    }

        //inizia a fissare il giorno corrente e a mostrare la locandina
        function onLoad_Setup() {
            const days = ['dom', 'lun', 'mar', 'mer', 'gio', 'ven', 'sab'];
            const d = new Date();
            onClick_Day(days[d.getDay()]);
            const dayel = document.getElementById(days[d.getDay()]);
            const dayprg = JSON.parse(prog)[d.getDay()];

            dayel.innerHTML = "<h2 class='text-item'>" + dayprg.giorno + " "  +d.getDate()+"/"+ Number(d.getMonth()+1)+"/"+ d.getFullYear()+ "</h2>";
            /*for (let i = 0; i < dayprg.films.length; i++) {
                dayel.innerHTML += "<article>" +
                    "<h2  id='text1'>" + dayprg.films[i].Titolo + "</h2>" +
                    "<img id='text2'src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTB9E9pY1dialQj3AKk0nsb-L668Pf3XNeoqUgdi3RqQrqbU1iE' style='height:30vh;'"+"<br>"+
                    "<p id='text3'>" + dayprg.films[i].trama + "</p>" +"<a href='https://en.wikipedia.org/wiki/Shrek'>"+"CLICCA QUI PER MAGGIORI INFORMAZIONI"+"</a>"+
                   
                    "</article>";
            }*/
            
                }
                
        
    

    function loadJSON(p){
        console.log(p)
        document.getElementById("lun").innerHTML += 
        "<img id = 'text2'"+"class='imma'" + "src=" + p[0].poster_url + ">"+
            "<h5>"+ "Titolo:" + p[0].title +"<br>" + 
            "Regia:"+ p[0].Regia +"<br>"+  
            "Cast:"+ p[0].cast +"<br>" +
            "Durata:" + p[0].duration + "<br>" +
            "Genere:" + p[0].genre + "<br>" +
            "</h5>"+
        "</div>";
         document.getElementById("mar").innerHTML += 
        "<img id = 'text2'"+"class='imma'" + "src=" + p[1].poster_url + ">"+
            "<h5>"+ "Titolo:" + p[1].title +"<br>" + 
            "Regia:"+ p[1].Regia +"<br>"+  
            "Cast:"+ p[1].cast +"<br>" +
            "Durata:" + p[1].duration + "<br>" +
            "Genere:" + p[1].genre + "<br>" +
            "</h5>"+
        "</div>";
        document.getElementById("mer").innerHTML += 
        "<img id = 'text2'"+"class='imma'" + "src=" + p[2].poster_url + ">"+
            "<h5>"+ "Titolo:" + p[2].title +"<br>" + 
            "Regia:"+ p[2].Regia +"<br>"+  
            "Cast:"+ p[2].cast +"<br>" +
            "Durata:" + p[2].duration + "<br>" +
            "Genere:" + p[2].genre + "<br>" +
            "</h5>"+
        "</div>";
         document.getElementById("gio").innerHTML += 
        "<img id = 'text2'"+"class='imma'" + "src=" + p[3].poster_url + ">"+
            "<h5>"+ "Titolo:" + p[3].title +"<br>" + 
            "Regia:"+ p[3].Regia +"<br>"+  
            "Cast:"+ p[3].cast +"<br>" +
            "Durata:" + p[3].duration + "<br>" +
            "Genere:" + p[3].genre + "<br>" +
            "</h5>"+
        "</div>";
        document.getElementById("ven").innerHTML += 
        "<img id = 'text2'"+"class='imma'" + "src=" + p[4].poster_url + ">"+
            "<h5>"+ "Titolo:" + p[4].title +"<br>" + 
            "Regia:"+ p[4].Regia +"<br>"+  
            "Cast:"+ p[4].cast +"<br>" +
            "Durata:" + p[4].duration + "<br>" +
            "Genere:" + p[4].genre + "<br>" +
            "</h5>"+
        "</div>";
         document.getElementById("sab").innerHTML += 
        "<img id = 'text2'"+"class='imma'" + "src=" + p[0].poster_url + ">"+
            "<h5>"+ "Titolo:" + p[0].title +"<br>" + 
            "Regia:"+ p[0].Regia +"<br>"+  
            "Cast:"+ p[0].cast +"<br>" +
            "Durata:" + p[0].duration + "<br>" +
            "Genere:" + p[0].genre + "<br>" +
            "</h5>"+
        "</div>";
        document.getElementById("dom").innerHTML += 
        "<img id = 'text2'"+"class='imma'" + "src=" + p[1].poster_url + ">"+
            "<h5>"+ "Titolo:" + p[1].title +"<br>" + 
            "Regia:"+ p[1].Regia +"<br>"+  
            "Cast:"+ p[1].cast +"<br>" +
            "Durata:" + p[1].duration + "<br>" +
            "Genere:" + p[1].genre + "<br>" +
            "</h5>"+
        "</div>";
         
    }