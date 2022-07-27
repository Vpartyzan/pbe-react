const sas = "#{sas.exhibition}#";
const contentSas = "#{sas.content}#";

const state = {
  currentLanguage: "eng",
  currentRegion: "Minsk",
  activeExhibition: 1,
  amountImg: "22",
};

const content = {
  textContent: [
    {
      language: "eng",
      homePage: {
        title: ["Polychrome", "Belarus", "Embroidery"],
        firstPar:
          "The project was implemented within the Creative Industries course of EHU Cultural Heritage Development Masters program.",
        secondPar: "",
        btn: "About Exhibition",
      },
      header: {
        home: "Home",
        about: "About",
        contact: "Contact us",
      },
      about: {
        title: "Polychrome Belarus Embroidery",
        subtitle:
          "While looking at the modern market of stylized folk shirts, the viewer immediately comes across shirts with large flowers. But is this a modern or authentic phenomenon? Where did it come from?",
        firstPar:
          "The beginning of the twentieth century is characterized by technological growth. New ways of clothes decoration appeared along with variety of materials and colors. Since the 1910s, aniline paints became a part of everyday life. This simple invention changed traditional costumes and each Belarusian region was blown by flourishing colors. This is how polychrome folk shirts appeared. Embroidery itself transformed by replacing the `outdated` technique of cross-stitch embroidery to newer satin stitch. Unfortunately, the Soviet period (1922-1991) for Belarus was a time of unification and simplification ideas of folk costume by making it more theatrical.",
        secondPar:
          "However, it is incorrect to consider this time as a certain isolated period without any influences. In each part of the country, the change (or rather the evolution) of the regional costume has taken its own unique path, making the preserved artifacts unique remnants of a vanished phenomenon.",
      },
      contact: {
        first: "project coordinator and collection keeper -",
        firstName: "Aliaksandra Navitskaya",
        second: "web page development -",
        secondName: "Maksim Cichanau",
        third: "photo -",
        thirdName: "Piotr Astrelin",
        fourth: "visual design -",
        fourthName: "Iryna Goncharik",
      },
    },
    {
      language: "blr",
      homePage: {
        title: ["Паліхромная", "беларуская", "вышыўка"],
        firstPar:
          "Гэты праект рэалізаваны ў межах магістарскай праграмы ЕГУ Развіцце культурнай спадчыны, курс Крэатыўныя індустрыі",
        secondPar: "",
        btn: "Аб выставе",
      },
      header: {
        home: "Галоўная",
        about: "Аб выставе",
        contact: "Кантакты",
      },
      about: {
        title: "Паліхромная беларуская вышыўка",
        subtitle:
          "Прыглядаючы сучасны рынак стылізаваных народных кашуль, гледачу адразу ж трапляюцца кашулі з буйнымі кветкамі. Але ж ці аутэнтычная гэта з’ява, адкуль яна да нас прыйшла і куда падзеліся звыклыя арнаментаваныя ромбы ды зоркі? ",
        firstPar:
          "Пачатак ХХ стагоддзя характарызуецца тэхналагічным уздымам. Хутка з’яўляюцца спачатку новыя спосабы аздаблення адзення, а затым і новая каларыстыка і разнастайнасць выкарыстоўваючыхся матэрыялаў. Пачынаючы з 1910-х гг у побыт жыхароў трапляюць анілінавыя фарбы і традыцыйныя строі рэгіёнаў імгненна квітнеюць стракатымі фарбамі, ствараючы з’яву паліхромных народных кашуль. Найдалей спосабы вышывання трансфармуюцца і на змену “састарэлай” тэхніцы вышыўкі крыжыкам прыходзіць гладзёвая. Нажаль, савецкі перыяд для Беларусі стаў часам ўніфікавання і спрашчальнага тэатралізавання ідэі народнага касцюма. Нягледзячы на гэта няправільна разглядаць гэты час як пэўны ізаляваны перыяд.",
        secondPar:
          "У кожнай частцы краіны змяненне (а недзе хутчэй эвалюцыя) народнага строя праходзіла па свой унікальны шлях, што робіць захаваныя артэфакты ўнікальнымі рэшткамі зніклай з’явы. ",
      },
      contact: {
        first: "аўтар праекта і захавальнік калекцыі -",
        firstName: "Аляксандра Навіцкая",
        second: "распрацоўка сайта -",
        secondName: "Максім Ціханаў",
        third: "фота -",
        thirdName: "Пятро Астрэлін",
        fourth: "дызайн -",
        fourthName: "Ірына Ганчарык",
      },
    },
    {
      language: "ru",
      homePage: {
        title: ["Полихромная", "белорусская", "вышивка"],
        firstPar:
          "Этот проект реализован в рамках магистерской программы ЕГУ Развитие культурного наследия, курс Креативные индустрии.",
        secondPar: "",
        btn: "О выставке",
      },
      header: {
        home: "Главная",
        about: "О выставке",
        contact: "Контакты",
      },
      about: {
        title: "Полихромная белорусская вышивка",
        subtitle:
          "Нет необходимости долго изучать рынок, чтобы встретить современные стилизации народных сорочек, расшитые цветами всех возможных оттенков. Откуда же к нам пришло такое, на первый взгляд чужое веяние и куда исчезли привычные ромбы и звезды орнаментов?",
        firstPar:
          "Начало ХХ века характеризуется технологическим подъемом. Быстро появляются сначала новые способы декорирования одежды, а затем и новая колористика с разнообразием используемых материалов. Начиная с 1910-х годов широкое использование находят анилиновые красители и традиционные костюмы мгновенно расцветают яркими красками, создавая новое явление полихромных народных сорочек. Способы вышивания трансформируются и на смену «устаревшей» технике вышивки крестиком постепенно приходит гладь. К сожалению, совесткий период для Беларуси стал временем унифицирования и упрощающей театрализации идеи народного костюма. Несмотря на это неправильно рассматривать это время как некий изолированный период.",
        secondPar:
          "В каждой части страны изменение (а где-то скорее эволюция) народного костюма проходила свой уникальный путь, что делает сохраненные артефакты уникальными остатками исчезнувшего явления.",
      },
      contact: {
        first: "автор проекта и хранитель коллекции -",
        firstName: "Александра Новицкая",
        second: "разработка сайта -",
        secondName: "Максим Тихонов",
        third: "фото -",
        thirdName: "Пётр Астрелин",
        fourth: "дизайн -",
        fourthName: "Ирина Гончарик",
      },
    },
  ],
  regions: [
    {
      name: "Brest",
      description: [
        {
          language: "eng",
          description:
            "Western Polesie is the most striking example of the birth and evolution of polychrome embroidery.",
        },
        {
          language: "blr",
          description:
            "Заходняе палессе - самы яркі прыклад нараджэння і развіцця паліхромнай вышыўкі.",
        },
        {
          language: "ru",
          description:
            "Западное Полесье – самый яркий пример рождения и развития полихромной вышивки.",
        },
      ],
      exhibition: [
        {
          id: 1,
          amountImg: "16",
          image: `https://polyreactsa.blob.core.windows.net/images/brest/brest-1-1.jpg${sas}`,
          content: [
            {
              language: "eng",
              title: "Ivacevičy. Men's Shirt",
              subtitle: "Hortaĺ village, Ivacevičy district, Brest region.",
              paragraph:
                "Silk embroidery. A men shirt is a pretty rare find. This one is remarkable by its&apos; specific style. It combines archaic pattern with modern coloristic.",
            },
            {
              language: "blr",
              title: "Івацэвічы. Мужчынская кашуля",
              subtitle: "Вёска Горталь, Івацэвіцкі раён, Брэсцкая вобласць.",
              paragraph:
                "Шаўковая вышыўка каляровымі ніткамі. Мужчынская кашуля сама па сабе - даволі рэдкая знаходка. Гэтая унікальная яшчэ і спецыфічным стылем: у ёй спалучаны архаічны ўзор з сучаснай каларыстыкай.",
            },
            {
              language: "ru",
              title: "Ивацевичи. Мужская сорочка",
              subtitle:
                "Деревня Гортоль, Ивацевичский раён, Брестская область.",
              paragraph:
                "Шелковая вышивка цветными нитками. Мужская рубашка сама сама по себе – довольно редкая находка. Эта уникальна еще и своим специфическим стилем: он сочетает в себе архаичный рисунок с современной колористикой.",
            },
          ],
        },
        {
          id: 2,
          amountImg: "23",
          image: `https://polyreactsa.blob.core.windows.net/images/brest/brest-2-1.jpg${sas}`,
          content: [
            {
              language: "eng",
              title: "Drahičyn. Chemise",
              subtitle: "Bradok village, Drahičyn district, Brest region.",
              paragraph: "Made during 1920s.",
            },
            {
              language: "blr",
              title: "Драгічын. Жаночая кашуля",
              subtitle: "Вёска Брадок, Драгічынскі раён, Брэсцкай вобласці.",
              paragraph: "Пашыта ў сярэдзіне 1920-х гадоў.",
            },
            {
              language: "ru",
              title: "Дрогичин. Женская сорочка",
              subtitle:
                "Деревня Бродок, Дрогичинский район, Брестская область.",
              paragraph: "Пошита в середине 1920-х годов.",
            },
          ],
        },
        {
          id: 3,
          amountImg: "22",
          image: `https://polyreactsa.blob.core.windows.net/images/brest/brest-3-1.jpg${sas}`,
          content: [
            {
              language: "eng",
              title: "Kamianiec. Chemise",
              subtitle: "Minkavičy village, Kamianiec county, Brest region",
              paragraph:
                "Sewn before World War II and was whole-cut. One-piece shirts (no seam in the middle) were a very festive option, mostly for wedding. According to the hostess, during the war part of the canvas was trimmed because there were more important things than girlish dresses. But the shirt was re-sewn again after the war.",
            },
            {
              language: "blr",
              title: "Камянец. Жаночая кашуля",
              subtitle: "Вёска Мінкавічы, Камянецкі раён, Брэсцкай вобласці.",
              paragraph:
                "Пашыта да другой сусветнай вайны і была цэльнай. Цэльныя кашулі (без шва па паясу) былі вельмі святочным варыянтам, з вялікай магчымасцю вясельным. Па словах гаспадыні пад час вайны частка палатна была абрэзана, бо існавалі больш важныя рэчы, чым дзявочыя сукенкі, дзе палатно было патрэбна больш. Але ж кашуля дашыта зноў ужо пасля вайны.",
            },
            {
              language: "ru",
              title: "Каменец. Женская сорочка",
              subtitle:
                "деревня Минковичи, Каменецкий район, Брестская область.",
              paragraph:
                "Сшита перед Второй мировой войной и была цельнокройной. Цельнокроеные рубашки (без шва по поясу) были очень праздничным, с большой вероятностью свадебным вариантом. По словам хозяйки, во время войны часть ткани обрезали, потому что были вещи поважнее девичьих платьев, где пригодился бы лен. Но сорочку вновь сшили после войны.",
            },
          ],
        },
        {
          id: 4,
          amountImg: "28",
          image: `https://polyreactsa.blob.core.windows.net/images/brest/brest-4-1.jpg${sas}`,
          content: [
            {
              language: "eng",
              title: "Brest. Womens Blouse",
              subtitle: "",
              paragraph: "",
            },
            {
              language: "blr",
              title: "Брэст. Жаночая блуза",
              subtitle: "",
              paragraph: "",
            },
            {
              language: "ru",
              title: "Брест. Женская блузка",
              subtitle: "",
              paragraph: "",
            },
          ],
        },
        {
          id: 5,
          amountImg: "23",
          image: `https://polyreactsa.blob.core.windows.net/images/brest/brest-5-1.jpg${sas}`,
          content: [
            {
              language: "eng",
              title: "Stolin. Chemise with Apron",
              subtitle: "",
              paragraph: "",
            },
            {
              language: "blr",
              title: "Столін. Жаночая кашуля з фартухом",
              subtitle: "",
              paragraph:
                "Важна адзначыць, што такім чынам кашулю з фартухом насіць не маглі. Павінна абавязкова прысутнічаць паясное адзенне накшталт спадніцы. Аднак мы вырашылі не разлучаць рэчы, знойдзеныя ў адным населеным пункце ці сям'і. Столінскі раён - гэта сэрца Палесся, якое ўвабрала ў сябе і заходнія і ўсходнія павевы. Тут мы бачым адносна стары малюнак вышыўкі, блізкі да архаікі, але ўжо дапоўнены новымі колерамі.",
            },
            {
              language: "ru",
              title: "Столин. Женская сорочка с фартуком",
              subtitle: "",
              paragraph:
                "Важно отметить, что таким образом сорочку с фартуком носить не могли. Должна обязательно присутствовать поясная одежда вроде юбки. Однако мы решили не разлучать вещи, найденные в одном населенном пункте или семье. Столинский район - это сердце Полесья, впитавшее в себя и западные и восточные веяния. Здесь мы видим относительно старый рисунок вышивки, близкий к архаике, но уже разбавленный новыми цветами.",
            },
          ],
        },
        {
          id: 6,
          amountImg: "23",
          image: `https://polyreactsa.blob.core.windows.net/images/brest/brest-6-1.jpg${sas}`,
          content: [
            {
              language: "eng",
              title: "Ivanava. Girl's Vest",
              subtitle: "",
              paragraph: "",
            },
            {
              language: "blr",
              title: "Іванава. Дзявочы гарсэт",
              subtitle: "",
              paragraph: "",
            },
            {
              language: "ru",
              title: "Иваново. Девичий горсет (жилет)",
              subtitle: "",
              paragraph: "",
            },
          ],
        },
        {
          id: 7,
          amountImg: "20",
          image: `https://polyreactsa.blob.core.windows.net/images/brest/brest-7-1.jpg${sas}`,
          content: [
            {
              language: "eng",
              title: "Malaryta. Andarak (woolen skirt)",
              subtitle: "",
              paragraph: "",
            },
            {
              language: "blr",
              title: "Маларыта. Андарак",
              subtitle: "",
              paragraph: "",
            },
            {
              language: "ru",
              title: "Молорита. Андарак (шерстяная юбка)",
              subtitle: "",
              paragraph: "",
            },
          ],
        },
        {
          id: 8,
          amountImg: "25",
          image: `https://polyreactsa.blob.core.windows.net/images/brest/brest-8-1.jpg${sas}`,
          content: [
            {
              language: "eng",
              title: "Pružany. Womens Blouse",
              subtitle: "",
              paragraph: "",
            },
            {
              language: "blr",
              title: "Пружаны. Жаночая блуза",
              subtitle: "",
              paragraph: "",
            },
            {
              language: "ru",
              title: "Пружаны. Жаночая блузка",
              subtitle: "",
              paragraph: "",
            },
          ],
        },
      ],
    },
    {
      name: "Viciebsk",
      description: [
        {
          language: "eng",
          description: "Not represented",
        },
        {
          language: "blr",
          description: "Не прадстаўлена",
        },
        {
          language: "ru",
          description: "Не представлена",
        },
      ],
      exhibition: [],
    },
    {
      name: "Grodno",
      description: [
        {
          language: "eng",
          description:
            "Despite the rapid departure of the 'village' fashion from the everyday life of the west of the country, the examples are noticeably similar with Brest and Minsk regions.",
        },
        {
          language: "blr",
          description:
            "Нягледзячы на хуткі сыход 'вясковай' моды з ужытку захада краіны, знойдзеныя прыклады прыкметна пераклікаюцца з брэсцкім і цэнтральным рэгіёнам.",
        },
        {
          language: "ru",
          description:
            "Несмотря на быстрый уход «деревенской» моды из обихода запада страны, найденные примеры заметно перекликаются с брестским и центральным регионом.",
        },
      ],

      exhibition: [
        {
          id: 1,
          amountImg: "20",
          image: `https://polyreactsa.blob.core.windows.net/images/grodno/grodno-1-1.jpg${sas}`,
          content: [
            {
              language: "eng",
              title: "Masty. Womens Blouse",
              subtitle: "Masty district, Hrodna region.",
              paragraph:
                "Made approx 1940-1950s. This example shares common knitted collar style with all post 1940s examples.",
            },
            {
              language: "blr",
              title: "Масты. Жаночая блуза",
              subtitle: "Мастоўскі раён, Гродненская вобласць.",
              paragraph:
                "Прыкладна 1940-1950-я гг, пашыта з віскозы. Мае такі ж вязаны каўнер, як і іншыя прыклады жаночага адзення 1940-х гадоў.",
            },
            {
              language: "ru",
              title: "Мосты. Женская блузка",
              subtitle: "Мостовский район, Гродненская область.",
              paragraph:
                "Около 1940-1950 гг, пошита из вискозы. Имеет такой же вязаный воротник, как и другие образцы женской одежды 1940-х годов.",
            },
          ],
        },
      ],
    },
    {
      name: "Gomel",
      description: [
        {
          language: "eng",
          description:
            "The region is rich in bright colors. What’s distinctive about it is that inhabitants used variations of the folk costume almost until the end of the 20th century.",
        },
        {
          language: "blr",
          description:
            "Багаты на яркія фарбы край, жыхары якога выкарыстоўвалі варыяцыі народнага строя амаль да канца 20-га стагоддзя.",
        },
        {
          language: "ru",
          description:
            "Богатый на яркие краски край, жители которого использовали вариации народного костюма почти до конца 20-го века.",
        },
      ],
      exhibition: [
        {
          id: 1,
          amountImg: "19",
          image: `https://polyreactsa.blob.core.windows.net/images/gomel/gomel-1-1.jpg${sas}`,
          content: [
            {
              language: "eng",
              title: "Lelčycy. Bride Costume",
              subtitle: "Sewn in a year of 1920",
              paragraph:
                "Came from the village of Zarubanaje, Lelčycy district, Homieĺ region.",
            },
            {
              language: "blr",
              title: "Лельчыцы. Cтрой нявесты",
              subtitle: "Пашыты ў 1920-м годзе",
              paragraph:
                "З вёскі Зарубанае, Лельчыцкага раёна Гомельскай вобласці.",
            },
            {
              language: "ru",
              title: "Лельчицы. остюм невесты",
              subtitle: "Пошит в 1920-м году",
              paragraph:
                "Деревня Зарубаное, Лельчицкого района, Гомельской области.",
            },
          ],
        },
        {
          id: 2,
          amountImg: "19",
          image: `https://polyreactsa.blob.core.windows.net/images/gomel/gomel-2-1.jpg${sas}`,
          content: [
            {
              language: "eng",
              title: "Lelčycy. Mother of the Bride Costume",
              subtitle: "Sewn in a year of 1920",
              paragraph:
                "Came from the village of Zarubanaje, Lelčycy district, Homieĺ region.",
            },
            {
              language: "blr",
              title: "Лельчыцы. Cтрой маці нявесты",
              subtitle: "Пашыты ў 1920-м годзе",
              paragraph:
                "З вёскі Зарубанае, Лельчыцкага раёна Гомельскай вобласці.",
            },
            {
              language: "ru",
              title: "Лельчицы. Костюм матери невесты",
              subtitle: "Пошит в 1920-м году",
              paragraph:
                "Деревня Зарубаное, Лельчицкого района, Гомельской области.",
            },
          ],
        },
        {
          id: 3,
          amountImg: "23",
          image: `https://polyreactsa.blob.core.windows.net/images/gomel/gomel-3-1.jpg${sas}`,
          content: [
            {
              language: "eng",
              title: "Lojeŭ. Girl's Blouse",
              subtitle:
                "Mid-twentieth century. This is a typical example of the Soviet period. ",
              paragraph:
                "Similar images were first distributed by guilds and then actively printed through popular magazines. The Bobruisk artel 'March 8' through its website tells about its work on collecting ancient embroidery images. Then processed drawings from towels, tablecloths and other embroidered products moved to costume details with colored additions.",
            },
            {
              language: "blr",
              title: "Лоеў. Дзявочая блуза",
              subtitle:
                "Сярэдзіна ХХ стагоддзя. Гэта тыповы прыклад савецкага перыяду.",
              paragraph:
                "Падобныя малюнкі былі распаўсюджаны спачатку арцелямі, а затым актыўна друкаваліся праз часопісы. Аб сваёй працы па збору старадаўніх малюнкаў вышывак цікава распавядае бабруйская арцель '8 Сакавіка' на сваім сайце. Так на адзенні пачалі з'яўляцца апрацаваныя малюнкі яшчэ і з рушнікоў, абрусаў і іншых вышытых вырабаў, да якіх дадаўся колер.",
            },
            {
              language: "ru",
              title: "Лоев. Девичья блузка",
              subtitle:
                "Середина ХХ века. Это типичный пример работы советского периода.",
              paragraph:
                "Подобные изображения сначала собирались артелями, а затем активно печатались через журналы. Бобруйская артель «8 марта» рассказывает о своей работе по сбору старинных изображений вышивок на своем сайте. Так на одежде стали появляться и обработанные рисунки с ручников, скатертей и других вышитых изделий, в которые добавилось больше цвета.",
            },
          ],
        },
        {
          id: 4,
          amountImg: "26",
          image: `https://polyreactsa.blob.core.windows.net/images/gomel/gomel-4-1.jpg${sas}`,
          content: [
            {
              language: "eng",
              title: "Chojniki. Chemise",
              subtitle:
                "Middle of 20th century. Made out of manufactured cotton fabric.",
              paragraph:
                "This dress has a colored decor only on the cuffs (embroidered with green and red threads). The embroidery on the sleeves was black and red. Often cotton black threads of the Soviet period had poor color quality. In this shirt they faded to white.",
            },
            {
              language: "blr",
              title: "Хойнікі. Жаночая кашуля",
              subtitle:
                "Сярэдзіна ХХ стагоддзя. Пашыта з перкалевай крамной тканіны.",
              paragraph:
                "Мае каляровы дэкор толькі на каўнярцах (вышыўка зялёнымі і чырвонымі ніткамі). Вышыўака на рукавах была чорна-чырвонай. Часцяком баваўняныя чорныя ніткі савецкага перыяду мелі дрэнную ўстойлівасць колеру. У гэтай кашулі яны выцвілі дабяла.",
            },
            {
              language: "ru",
              title: "Хойники. Женская сорочка",
              subtitle:
                "Середина ХХ-го века. Пошита из магазинной хлопковой ткани.",
              paragraph:
                "Имеет цветной декор только на манжетах (вышивка зелеными и красными нитками). Вышивка на рукавах была черно-красной. Зачастую хлопковые черные нитки советского периода имели плохую стойкость цвета. В этой сорочке они выцвели добела.",
            },
          ],
        },
        {
          id: 5,
          amountImg: "25",
          image: `https://polyreactsa.blob.core.windows.net/images/gomel/gomel-5-1.jpg${sas}`,
          content: [
            {
              language: "eng",
              title: "Niehliubka. Womens Blouse",
              subtitle: "",
              paragraph: "",
            },
            {
              language: "blr",
              title: "Неглюбка. Жаночая блуза",
              subtitle: "",
              paragraph: "",
            },
            {
              language: "ru",
              title: "Неглюбка. Женская блузка",
              subtitle: "",
              paragraph: "",
            },
          ],
        },
        {
          id: 6,
          amountImg: "19",
          image: `https://polyreactsa.blob.core.windows.net/images/gomel/gomel-6-1.jpg${sas}`,
          content: [
            {
              language: "eng",
              title: "Niehliubka. Boy Shirt",
              subtitle: "",
              paragraph: "",
            },
            {
              language: "blr",
              title: "Неглюбка. Кашуля юнака",
              subtitle: "",
              paragraph: "",
            },
            {
              language: "ru",
              title: "Неглюбка. Рубашка юноши",
              subtitle: "",
              paragraph: "",
            },
          ],
        },
      ],
    },
    {
      name: "Minsk",
      description: [
        {
          language: "eng",
          description:
            "The brightest examples of polychrome embroidery were found in the northwestern and southern borders of this area.",
        },
        {
          language: "blr",
          description:
            "Ярчэй за ўсё з'ява прадстаўлена на паўночна-заходняй і паўднёвай межах гэтай вобласці.",
        },
        {
          language: "ru",
          description:
            "Ярче всего явление представлено на северо-западной и южной границах этой области.",
        },
      ],
      exhibition: [
        {
          id: 1,
          amountImg: "22",
          image: `https://polyreactsa.blob.core.windows.net/images/minsk/minsk-1-1.jpg${sas}`,
          content: [
            {
              language: "eng",
              title: "Kapyĺ. Girl Costume",
              subtitle:
                "It is difficult to unambiguously identify because of the family history it comes from.",
              paragraph:
                "The family comes from the village of Smalichi, Kopyl district, Minsk region. In the period from the second half of the 1940s to the end of the 1950s, frequent relocations within the Pinsk region complicated attribution. Most likely sewn in the mid-1950s, Teliakhany or Logishyn, Pinsk region (now Brest region). Found in the village of Smalichi.",
            },
            {
              language: "blr",
              title: "Капыль. Дзявочы строй.",
              subtitle:
                "Строй складана адназначна ідэнтыфікаваць з-за гісторыі сям'і, з якой ён паходзіць.",
              paragraph:
                "Сям'я паходзіць з вёскі Смалічы, Копыльскі раён, Мінская вобласць. У перыяд з другой паловы 1940-х гадоў да канца 1950-х частыя пераезды ў межах Пінскай вобласці ўскладняюць атрыбуцыю. Верагодней усяго пашыты ў сярэдзіне 1950-х гадоў, г. Целяханы ці г. Лагішын, Пінскай вобласці (зараз Брэсцкая вобласць). Знайдзены ў вёске Смалічы.",
            },
            {
              language: "ru",
              title: "Копыль. Девичий костюм",
              subtitle:
                "Костюм трудно однозначно идентифицировать из-за истории семьи, в которой он был создан.",
              paragraph:
                "Семья родом из деревни Смоличи Копыльского района Минской области. В период со второй половины 1940-х до конца 1950-х годов частые переезды в пределах Пинской области затрудняли атрибуцию. Пошит, скорее всего, в середине 1950-х, Теляханы или Логишин Пинской области (ныне Брестская область). Найден в деревне Смоличи. Использовался для школьных праздников. Сохранились фотографии школьниц из этой местности, носивших такие вышитые блузки повседневно в школу.",
            },
          ],
        },
        {
          id: 2,
          amountImg: "24",
          image: `https://polyreactsa.blob.core.windows.net/images/minsk/minsk-2-1.jpg${sas}`,
          content: [
            {
              language: "eng",
              title: "Kapyĺ. Women Costume",
              subtitle: "",
              paragraph: "",
            },
            {
              language: "blr",
              title: "Капыль. Жаночы строй",
              subtitle: "",
              paragraph: "",
            },
            {
              language: "ru",
              title: "Копыль. Женский костюм",
              subtitle: "",
              paragraph: "",
            },
          ],
        },
        {
          id: 3,
          amountImg: "24",
          image: `https://polyreactsa.blob.core.windows.net/images/minsk/minsk-3-1.jpg${sas}`,
          content: [
            {
              language: "eng",
              title: "Vilejka. Girl's Blouse",
              subtitle: "",
              paragraph: "",
            },
            {
              language: "blr",
              title: "Вілейка. Дзявочая блуза",
              subtitle: "",
              paragraph: "",
            },
            {
              language: "ru",
              title: "Вилейка. Девичья блузка",
              subtitle: "",
              paragraph: "",
            },
          ],
        },
      ],
    },
    {
      name: "Mahiliou",
      description: [
        {
          language: "eng",
          description:
            "The eastern region has same typical examples of costume embroidery as the western part of the country. A perfect example of how common identity works through the costume.",
        },
        {
          language: "blr",
          description:
            "Усходняя вобласць дэманструе такія ж тыповыя прыклады вышыўкі ў касцюме, як і захад краіны. Гэта ярка паказвае як агульную ідэнтычнасць можна прасачыць праз калектыўнае разуменне адзення.",
        },
        {
          language: "ru",
          description:
            "Восточная область демонстрирует такие же типичные примеры вышивки в костюме, как и запад страны. Это ярко показывает как общую идентичность можно проследить через коллективное понимание костюма.",
        },
      ],
      exhibition: [
        {
          id: 1,
          amountImg: "25",
          image: `https://polyreactsa.blob.core.windows.net/images/mahiliou/mahiliou-1-1.jpg${sas}`,
          content: [
            {
              language: "eng",
              title: "Artel Production. Men's Shirt",
              subtitle: "Approx. 1940-1950s.",
              paragraph:
                "The example of factory manufactured item, found in Minsk. The most known by that time artel was based in Babrujsk so we placed this shirt here as a clear example of traditional influence on fashion.",
            },
            {
              language: "blr",
              title: "Арцельная вытворчасць. Мужчынская кашуля",
              subtitle: "Прыкладна 1940-1950я гады вытворчасці.",
              paragraph:
                "Прыклад арцельнай вытворчасць, знойдзена ў Мінску. Найбольш вядомая вышывальніцкая арцель знаходзілася ў Бабруйску, таму мы размясцілі гэтую кашулю тут як прыклад уплыву традыцыйнага адзення на модную вытворчасць.",
            },
            {
              language: "ru",
              title: "Артельное производство. Мужская рубашка",
              subtitle: "Примерно 1940-1950я годы создания.",
              paragraph:
                "Пример артельного производства, найдена в Минске. Наиболее известная вышивальщицкая артель находилась в городе Бобруйск, потому мы разместили эту сорочку здесь как пример влияния традиционной одежды на модную индустрию того времени.",
            },
          ],
        },
      ],
    },
  ],
};

const initialStoreData = {
  state: { ...state },
  content: { ...content },
};

export default initialStoreData;
