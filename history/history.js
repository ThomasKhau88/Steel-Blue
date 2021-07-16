//JQuery
$(document).ready(function() {
    var idList = ["rhrsDiv1", "rhrsDiv2", "rhrsDiv3", "rhrsDiv4", "rhrsDiv5", "rhrsDiv6", "rhrsDiv7", "rhrsDiv8"];

    var factsList = ["Julius Caesar was stabbed 23 times. Due to his coup d’état of the Roman Republic and his proclamation of himself as Dictator for Life, a group of his fellow Roman senators led by his best friend Brutus assassinated him on March 15, 44 BC. During the assassination, Caesar was stabbed at least 23 times before finally dying. He passed away with fabled words to his former best friend Brutus, allegedly being “you too, sweet child?”", "Paul Revere Never Actually Shouted, “The British Are Coming!”. According to History.com, the operation was meant to be quiet and stealthy, since British troops were hiding out in the Massachusetts countryside. Also, colonial Americans still considered themselves to be British.", "Everyone knows the nursery rhyme “Mary Had A Little Lamb”, but you probably didn't know this was based on true story. Her name was Mary Sawyer. She was an 11-year-old girl and lived in Boston and one day was followed to school by her pet lamb. In the late 1860s, she helped raise money for an old church by selling wool from the lamb.", "Cleopatra wasn’t actually Egyptian! As far as historians can tell, Egypt’s famous femme fatal was actually Greek!. She was a descendant of Alexander the Great’s Macedonian general Ptolemy.", "In 1386, a pig was executed in France. In the Middle Ages, a pig attacked a child who went to die later from their wounds. The pig was arrested, kept in prison, and then sent to court where it stood trial for murder, was found guilty and then executed by hanging!", "During the Great Depression, people made clothes out of food sacks. People used flour bags, potato sacks, and anything made out of burlap. Because of this trend, food distributors started to make their sacks more colorful to help people remain a little bit fashionable.", "The shortest war in history lasted 38 minutes! It was between Britain and Zanzibar and known as the Anglo-Zanzibar War, this war occurred on August 27, 1896. It was over the ascension of the next Sultan in Zanzibar and resulted in a British victory.", "The University of Oxford is older than the Aztec Empire. The University of Oxford first opened its doors to students all the way back in 1096. By comparison, the Aztec Empire is said to have originated with the founding of the city of Tenochtitlán at Lake Texcoco by the Mexica which occurred in the year 1325.", "Russia ran out of vodka celebrating the end of World War II! When the long war ended, street parties engulfed the Soviet Union, lasting for days–until all of the nation’s vodka reserves ran out a mere 22 hours after the partying started.", "In 18th century England, pineapples were a status symbol. Those rich enough to own a pineapple would carry them around to signify their personal wealth and high-class status. In that day and age, everything from clothing to houseware was decorated with the tropical fruit.", "In 1945, a balloon bomb launched by Japan landed in Oregon. It fell upon by a woman and five children, who died when it exploded. These were the only World War II casualties on US soil.", "Johnny Appleseed was a real person! His real name was John Chapman and his hometown was Leominster, Massachusetts. He also has a street named after him, though the city planners decided it would be more poetic to use his mythical name: Johnny Appleseed Lane.", "Cars weren’t invented in the United States! The first car actually was created in the 19th century when European engineers Karl Benz and Emile Levassor were working on automobile inventions. Benz patented the first automobile in 1886.", "Abraham Lincoln was also a licensed bartender. In 1833, the 16th president opened up a bar called Berry and Lincoln with his friend William F. Berry in New Salem, Illinois. The shop was eventually closed when Berry, a raging alcoholic, consumed most of the shop’s supply.", "King Henry VIII of England had servants who were called “Grooms of Stool” whose job it was to wipe his bottom after he went to the bathroom. During his reign, he had all of those four such people knighted.", "14 years before the infamous Titanic sank, author Morgan Robertson wrote the novella Futility. It was about the large unsinkable ship “Titan” hitting an iceberg in the Northern Atlantic. What’s even weirder is, the Titanic and the fictional Titan did not have enough lifeboats for the thousands of passengers on board– Coincidence?", "100 million years ago, the Sahara Desert was inhabited by galloping crocodiles. Back then, the Sahara Desert was a lush oasis full of life and full of predators. In 2009, fossil hunters found the remains of crocodiles that had large land-going legs that were capable of galloping across the land at breakneck speeds!", "The Song dynasty ([sʊ̂ŋ]; Chinese: 宋朝; pinyin: Sòng cháo; 960–1279) was an imperial dynasty of China that began in 960 and lasted until 1279.", "The Aztec Empire, or the Triple Alliance (Classical Nahuatl: Ēxcān Tlahtōlōyān, [ˈjéːʃkaːn̥ t͡ɬaʔtoːˈlóːjaːn̥]), was an alliance of three Nahua altepetl city-states: Mexico-Tenochtitlan, Tetzcoco, and Tlacopan."]; // 6/20
    var quotesList = ["“A leader leads by example, not by force.” - Sun Tzu", "“It does not matter how slowly you go as long as you do not stop.” - Confucius", "“Everything has beauty, but not everyone sees it.” - Confucious", "“It is easier to find men who will volunteer to die, than to find those who are willing to endure pain with patience.” - Julius Caesar", "“Advice in old age is foolish; for what can be more absurd than to increase our provisions for the road the nearer we approach to our journey’s end.” - Marcus Tullius Cicero", "“The greatest glory in living lies not in never falling, but in rising every time we fall.” - Nelson Mandela", "“I didn’t fail the test. I just found 100 ways to do it wrong.” - Benjamin Franklin", "“The way to get started is to quit talking and begin doing.” - Walt Disney", "“You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.” - Dr. Seuss", "“The best and most beautiful things in the world cannot be seen or even touched – they must be felt with the heart.” - Helen Keller", "“Spread love everywhere you go. Let no one ever come to you without leaving happier.” - Mother Teresa", "“History is written by the victors.” - Winston Churchill", "“History repeats itself, first as tragedy, second as farce.” - Karl Marx", "“There are no extraordinary men... just extraordinary circumstances that ordinary men are forced to deal with.” - William Halsey"]; // 4/20
    var randomPlacesList = ["Lexington and Concord", "Machu Picchu", "Marshall Islands", "Acropolis", "Jerusalem", "The Great Wall of China", "Plymouth", "Auschwitz", "Ephesus", "Normandy beaches", "Stonehenge", "Tajmahal", "Eastern Island", "Persepolis", "Petra, Jordan", "Alcatraz Island", "The Alamo", "Jamestown", "Williamsburg", "Gettysburg", "Angkor Wat"]; // 3/20
    var randomPeopleList = ["Florence Nightingale", "J.R.R. Tolkien", "Pablo Picasso", "Lord Baden Powell", "Neil Armstrong", "Mahatma Gandhi", "Martin Luther King", "John F. Kennedy", "Benjamin Franklin", "King George III", "Crispus Attucks", "Alexander Hamilton", "Benedict Arnold", "Ethan Allen", "Henry Tandey", "Mangas Coloradas", "Sitting Bull", "T'Chaka", "Mansa Kankan Musa", "Harsha", "Acamapichtli", "Hatshepsut", "Henry VIII of England", "Nefertiti", "Timur", "Shivaji", "Gilgamesh", "Ivar the Boneless", "Suleiman The Magnificent", "Kublai Khan", "Alfred the Great", "Marcus Aurelius", "Catherine of Aragon", "William the Conqueror", "Vladimir Lenin", "Benito Mussolini", "Anne Boleyn", "Augustus", "Charlemagne", "Henry VII of England", "Marie Antoinette", "Catherine the Great", "Julius Caesar", "Napoleon Bonaparte", "Genghis Khan", "Alexander the Great", "Cleopatra", "Queen Victoria", "Queen Elizabeth II"]; // 3/20
    var memesList = ["columbusDiscover.jpg", "marxCapitalize.jpg", "europeGunpowder.jpg", "communistFrog.jpg", "fidgetSpinner.jpg", "russiaAround.jpg", "europeansRat.jpg", "everyCommunist.jpg", "galileoWall.jpg", "invadeRussia.jpg", "plaguePokemon.jpg"]; // 4/20 "“History is written by the victors.” - Winston Churchill"
    var portraitList = []; //implement later

    function buttonClicked(){
        var randomValue = Math.floor((Math.random() * 20)); 

        //randomly clears one of the cells
        for (let i = 0; i < 3; i ++ ){
            var randomDivListIndex = Math.floor((Math.random() * 9));
            var removeDiv = idList[randomDivListIndex];
            $(`#${removeDiv}`).empty();
        }

        // Adding stuff
        if (randomValue >= 0 && randomValue < 16){
            var randomDivListIndex = Math.floor((Math.random() * 6)) + 1; 
            var stuffDiv = idList[randomDivListIndex];
            $(`#${stuffDiv}`).empty();
            
            //Randomly adds one of these items
            if (randomValue >= 0 && randomValue < 6){ // FACTS
                var fact = factsList[Math.floor((Math.random() * factsList.length))];
                $(`#${stuffDiv}`).append($("<p style = 'color: #4682b4; font-size: 18px;'>").text("Fact: " + fact));

            } else if (randomValue >= 6 && randomValue < 10){ // QUOTES
                var fact = quotesList[Math.floor((Math.random() * quotesList.length))];
                $(`#${stuffDiv}`).append($("<p style = 'color: #4682b4; font-size: 20px;'>").text("Quote: " + fact));
    
            } else if (randomValue >= 10 && randomValue < 13){ // RANDOM PHRASES
                var fact = randomPlacesList[Math.floor((Math.random() * randomPlacesList.length))];
                $(`#${stuffDiv}`).append($("<p style = 'color: #4682b4; font-weight: bold; font-size: 30px; text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;'>").text("Place: " + fact));
    
            } else if (randomValue >= 13 && randomValue < 16){ // RANDOM PEOPLE
                var fact = randomPeopleList[Math.floor((Math.random() * randomPeopleList.length))];
                $(`#${stuffDiv}`).append($("<p style = 'color: #4682b4; font-weight: bold; font-size: 25px;'>").text("Person: " + fact));
                
            }

        } else{ // MEMES
            var randomDivListIndex = [0, 7][Math.floor((Math.random() * 2))]; 
            var stuffDiv = idList[randomDivListIndex];
            $(`#${stuffDiv}`).empty();

            var image = memesList[Math.floor((Math.random() * memesList.length))];
            $(`#${stuffDiv}`).append("<img src = './historyMemes/" + image + "' style = 'max-height: 775px, max-width: 400px', max-width: 100%; display: block; height: auto >");

        }
    }
    // Detecting stuff
    $("#pressMeButton").on("click", buttonClicked);

});





