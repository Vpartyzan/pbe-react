const sas =
  "?sp=r&st=2022-02-15T17:13:20Z&se=2022-03-30T01:13:20Z&spr=https&sv=2020-08-04&sr=c&sig=CveLxLSKlLTrYsezdHHzNYpySvlub42nM%2FF7NX8y3Pw%3D";
const contentSas =
  "?sv=2020-10-02&st=2022-02-18T17%3A57%3A02Z&se=2027-01-31T17%3A57%3A00Z&sr=c&sp=r&sig=ae3fsZvxWWXaE7mTUmdiD%2Fv7p36XR6asc1GTWGs4Yyc%3D";

const state = {
  currentLanguage: "eng",
  currentRegion: "Minsk",
  activeExhibition: 1,
};

const content = {
  textContent: [
    {
      language: "eng",
      homePage: {
        title: "Polychrome Belarus Embroidery",
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
    },
    {
      language: "blr",
      homePage: {
        title: "Паліхромная беларуская вышыўка",
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
    },
    {
      language: "ru",
      homePage: {
        title: "Полихромная белорусская вышивка",
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
              title: "Men Shirt",
              subtitle: "Hortaĺ village, Ivacevičy district, Brest region.",
              paragraph:
                "Silk embroidery. A men shirt is a pretty rare find. This one is remarkable by its&apos; specific style. It combines archaic pattern with modern coloristic.",
            },
            {
              language: "blr",
              title: "Мужчынская кашуля",
              subtitle: "Вёска Горталь, Івацэвіцкі раён, Брэсцкая вобласць.",
              paragraph:
                "Шаўковая вышыўка каляровымі ніткамі. Мужчынская кашуля сама па сабе - даволі рэдкая знаходка. Гэтая унікальная яшчэ і спецыфічным стылем: у ёй спалучаны архаічны ўзор з сучаснай каларыстыкай.",
            },
            {
              language: "ru",
              title: "Мужская сорочка",
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
              title: "Name of exhibition",
              subtitle: "Bradok village, Drahičyn district, Brest region.",
              paragraph: "Made during 1920s.",
            },
            {
              language: "blr",
              title: "Вёска Брадок, Драгічынскі раён, Брэсцкай вобласці.",
              subtitle: "Пашыта ў сярэдзіне 1920-х гадоў у сям'і Богуш.",
              paragraph: "",
            },
            {
              language: "ru",
              title: "Деревня Бродок, Дрогичинский район, Брестская область.",
              subtitle: "Пошита в середине 1920-х годов.",
              paragraph: "",
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
              title: "Minkavičy village, Kamianiec county, Brest region",
              subtitle: "Sewn before World War II and was intact.",
              paragraph:
                "One-piece shirts (no seam in the middle) were a very festive option, with a great wedding option. According to the hostess, during the war part of the canvas was trimmed because there were more important things than girls ’dresses where the canvas was needed more. But the shirt was sewn again after the war.",
            },
            {
              language: "blr",
              title: "Вёска Мінкавічы, Камянецкі раён, Брэсцкай вобласці.",
              subtitle: "Пашыта да другой сусветнай вайны і была цэльнай.",
              paragraph:
                "Цэльныя кашулі (без шва пасярэдзіне) былі вельмі святочным варыянтам, з вялікай магчымасцю вясельным. Па словах гаспадыні пад час вайны частка палатна была абрэзана, бо існавалі больш важныя рэчы, чым дзявочыя сукенкі, дзе палатно было патрэбна больш. Але ж кашуля дашыта зноў ужо пасля вайны.",
            },
            {
              language: "ru",
              title: "д.Минковичи, Каменецкий район, Брестская область.",
              subtitle: "Сшит перед Второй мировой войной и остался цел.",
              paragraph:
                "Цельнокроеные рубашки (без шва посередине) были очень праздничным вариантом, с прекрасным свадебным вариантом. По словам хозяйки, во время войны часть холста обрезали, потому что были вещи поважнее девичьих платьев, где холста нужно было больше. Но рубашку снова сшили после войны.",
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
              title: "",
              subtitle: "",
              paragraph: "",
            },
            {
              language: "blr",
              title: "",
              subtitle: "",
              paragraph: "",
            },
            {
              language: "ru",
              title: "",
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
              title: "",
              subtitle: "",
              paragraph: "",
            },
            {
              language: "blr",
              title: "",
              subtitle: "",
              paragraph: "",
            },
            {
              language: "ru",
              title: "",
              subtitle: "",
              paragraph: "",
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
              title: "",
              subtitle: "",
              paragraph: "",
            },
            {
              language: "blr",
              title: "",
              subtitle: "",
              paragraph: "",
            },
            {
              language: "ru",
              title: "",
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
              title: "",
              subtitle: "",
              paragraph: "",
            },
            {
              language: "blr",
              title: "",
              subtitle: "",
              paragraph: "",
            },
            {
              language: "ru",
              title: "",
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
              title: "",
              subtitle: "",
              paragraph: "",
            },
            {
              language: "blr",
              title: "",
              subtitle: "",
              paragraph: "",
            },
            {
              language: "ru",
              title: "",
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
              title: "Womens Blouse",
              subtitle: "Masty district, Hrodna region.",
              paragraph:
                "Made approx 1940-1950s. This example shares common knitted collar style with all post 1940s examples.",
            },
            {
              language: "blr",
              title: "Жаночая блузка",
              subtitle: "Мастоўскі раён, Гродненская вобласць.",
              paragraph: "Прыкладна 1940-1950-я гг.",
            },
            {
              language: "ru",
              title: "Женская блузка",
              subtitle: "Мостовский район, Гродненская область.",
              paragraph: "Около 1940-1950 гг.",
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
              title: "Bride's dress",
              subtitle: "sewn in a year of 1920",
              paragraph:
                "from the village of Zarubanaje, Lelčycy district, Homieĺ region.",
            },
            {
              language: "blr",
              title: "Cтрой нявесты",
              subtitle: "Пашыты ў 1920-м годзе",
              paragraph:
                "З вёскі Зарубанае, Лельчыцкага раёна Гомельскай вобласці.",
            },
            {
              language: "ru",
              title: "Костюм невесты",
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
              title: "Bride mother's dress",
              subtitle: "sewn in a year of 1920",
              paragraph:
                "from the village of Zarubanaje, Lelčycy district, Homieĺ region.",
            },
            {
              language: "blr",
              title: "Cтрой маці нявесты",
              subtitle: "Пашыты ў 1920-м годзе",
              paragraph:
                "З вёскі Зарубанае, Лельчыцкага раёна Гомельскай вобласці.",
            },
            {
              language: "ru",
              title: "Костюм матери невесты",
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
              title: "Lojeŭ, mid-twentieth century.",
              subtitle: "This is a typical example of the Soviet period. ",
              paragraph:
                "Similar images were first distributed by guilds and then actively printed through popular magazines. The Bobruisk artel 'March 8' through its website tells about its work on collecting ancient embroidery images. Then processed drawings from towels, tablecloths and other embroidered products moved to costume details with colored additions.",
            },
            {
              language: "blr",
              title: "Лоеў, сярэдзіна ХХ стагоддзя.",
              subtitle: "Гэта тыповы прыклад савецкага перыяду.",
              paragraph:
                "Падобныя малюнкі былі распаўсюджаны спачатку арцелямі, а затым актыўна друкаваліся праз часопісы. Аб сваёй працы па збору старадаўніх малюнкаў вышывак цікава распавядае бабруйская арцель '8 Сакавіка' на сваім сайце. Так на адзенні пачалі з'яўляцца апрацаваныя малюнкі яшчэ і з рушнікоў, абрусаў і іншых вышытых вырабаў, да якіх дадаўся колер.",
            },
            {
              language: "ru",
              title: "Лоев, середина ХХ века.",
              subtitle: "Это типичный пример работы советского периода.",
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
              title: "",
              subtitle: "",
              paragraph: "",
            },
            {
              language: "blr",
              title: "",
              subtitle: "",
              paragraph: "",
            },
            {
              language: "ru",
              title: "",
              subtitle: "",
              paragraph: "",
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
              title: "",
              subtitle: "",
              paragraph: "",
            },
            {
              language: "blr",
              title: "",
              subtitle: "",
              paragraph: "",
            },
            {
              language: "ru",
              title: "",
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
              title: "",
              subtitle: "",
              paragraph: "",
            },
            {
              language: "blr",
              title: "",
              subtitle: "",
              paragraph: "",
            },
            {
              language: "ru",
              title: "",
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
              title: "The outfit of a teenage girl",
              subtitle:
                "It is difficult to unambiguously identify because of the family history it comes from.",
              paragraph:
                "The family comes from the village of Smalichi, Kopyl district, Minsk region. In the period from the second half of the 1940s to the end of the 1950s, frequent relocations within the Pinsk region complicated attribution. Most likely sewn in the mid-1950s, Teliakhany or Logishyn, Pinsk region (now Brest region). Found in the village of Smalichi.",
            },
            {
              language: "blr",
              title: "Строй дзяўчыны-падлетка.",
              subtitle:
                "Строй складана адназначна ідэнтыфікаваць з-за гісторыі сям'і, з якой ён паходзіць.",
              paragraph:
                "Сям'я паходзіць з вёскі Смалічы, Копыльскі раён, Мінская вобласць. У перыяд з другой паловы 1940-х гадоў да канца 1950-х частыя пераезды ў межах Пінскай вобласці ўскладняюць атрыбуцыю. Верагодней усяго пашыты ў сярэдзіне 1950-х гадоў, г. Целяханы ці г. Лагішын, Пінскай вобласці (зараз Брэсцкая вобласць). Знайдзены ў вёске Смалічы.",
            },
            {
              language: "ru",
              title: "Костюм девушки-подростка",
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
              title: "",
              subtitle: "",
              paragraph: "",
            },
            {
              language: "blr",
              title: "",
              subtitle: "",
              paragraph: "",
            },
            {
              language: "ru",
              title: "",
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
              title: "",
              subtitle: "",
              paragraph: "",
            },
            {
              language: "blr",
              title: "",
              subtitle: "",
              paragraph: "",
            },
            {
              language: "ru",
              title: "",
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
              title: "Artel men's shirt",
              subtitle: "Approx. 1940-1950s.",
              paragraph:
                "The example of factory manufactured item, found in Minsk. The most known by that time artel was based in Babrujsk so we placed this shirt here as a clear example of traditional influence on fashion.",
            },
            {
              language: "blr",
              title: "Арцельная мужчынская кашуля",
              subtitle: "Прыкладна 1940-1950я гады вытворчасці.",
              paragraph:
                "Прыклад арцельнай вытворчасць, знойдзена ў Мінску. Найбольш вядомая вышывальніцкая арцель знаходзілася ў Бабруйску, таму мы размясцілі гэтую кашулю тут як прыклад уплыву традыцыйнага адзення на модную вытворчасць.",
            },
            {
              language: "ru",
              title: "Артельная Мужская рубашка",
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
