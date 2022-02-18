const sas =
  "?sp=r&st=2022-02-15T17:13:20Z&se=2022-03-30T01:13:20Z&spr=https&sv=2020-08-04&sr=c&sig=CveLxLSKlLTrYsezdHHzNYpySvlub42nM%2FF7NX8y3Pw%3D";
const contentSas =
  "?sv=2020-10-02&st=2022-02-18T17%3A57%3A02Z&se=2027-01-31T17%3A57%3A00Z&sr=c&sp=r&sig=ae3fsZvxWWXaE7mTUmdiD%2Fv7p36XR6asc1GTWGs4Yyc%3D";

const state = {
  currentLanguage: "eng",
  currentRegion: "Minsk",
  activeExhibition: 1,
};

const textContent = {
  content: [
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
  exhibitions: [
    {
      language: "eng",
      regions: [
        {
          name: "Brest",
          description:
            "Western Polesie is the most striking example of the birth and evolution of polychrome embroidery.",
          exhibition: [
            {
              id: 1,
              name: "Name of exhibition",
              description: {
                title: "",
                subtitle: "",
                paragraph: "",
                btn: "",
              },
            },
            {
              id: 2,
              name: "Name of exhibition",
              description: {
                title: "",
                subtitle: "",
                paragraph: "",
                btn: "",
              },
            },
          ],
        },
        {
          name: "Viciebsk",
          description: "Not represented",
          exhibition: [],
        },
        {
          name: "Grodno",
          description:
            "Despite the rapid departure of the 'village' fashion from the everyday life of the west of the country, the examples are noticeably similar with Brest and Minsk regions.",
          exhibition: [
            {
              id: 1,
              name: "Name of exhibition",
              description: {
                title: "",
                subtitle: "",
                paragraph: "",
                btn: "",
              },
            },
          ],
        },
        {
          name: "Gomel",
          description:
            "The region is rich in bright colors. What’s distinctive about it is that inhabitants used variations of the folk costume almost until the end of the 20th century.",
          exhibition: [
            {
              id: 1,
              name: "Name of exhibition",
              description: {
                title: "",
                subtitle: "",
                paragraph: "",
                btn: "",
              },
            },
            {
              id: 2,
              name: "Name of exhibition",
              description: {
                title: "",
                subtitle: "",
                paragraph: "",
                btn: "",
              },
            },
          ],
        },
        {
          name: "Minsk",
          description:
            "The brightest examples of polychrome embroidery were found in the northwestern and southern borders of this area.",
          exhibition: [
            {
              id: 1,
              name: "The outfit of a teenage girl",
              description: {
                title: "The outfit of a teenage girl",
                subtitle:
                  "The system is difficult to unambiguously identify because of the family history it comes from",
                paragraph:
                  "The family comes from the village of Smalichi, Kopyl district, Minsk region. In the period from the second half of the 1940s to the end of the 1950s, frequent relocations within the Pinsk region complicated attribution. Most likely sewn in the mid-1950s, Teliakhany or Logishyn, Pinsk region (now Brest region). Found in the village of Smalichi.",
                btn: "",
              },
            },
          ],
        },
        {
          name: "Mahiliou",
          description:
            "The eastern region has same typical examples of costume embroidery as the western part of the country. A perfect example of how common identity works through the costume.",
          exhibition: [
            {
              id: 1,
              name: "Name of exhibition",
              description: {
                title: "",
                subtitle: "",
                paragraph: "",
                btn: "",
              },
            },
          ],
        },
      ],
    },
    {
      language: "blr",
      regions: [
        {
          name: "Brest",
          description:
            "Заходняе палессе - самы яркі прыклад нараджэння і развіцця паліхромнай вышыўкі.",
          exhibition: [
            {
              id: 1,
              name: "Назва выставы",
              description: {
                title: "",
                subtitle: "",
                paragraph: "",
                btn: "",
              },
            },
            {
              id: 2,
              name: "Назва выставы",
              description: {
                title: "",
                subtitle: "",
                paragraph: "",
                btn: "",
              },
            },
          ],
        },
        {
          name: "Viciebsk",
          description: "Не прадстаўлена",
          exhibition: [],
        },
        {
          name: "Grodno",
          description:
            "Нягледзячы на хуткі сыход 'вясковай' моды з ужытку захада краіны, знойдзеныя прыклады прыкметна пераклікаюцца з брэсцкім і цэнтральным рэгіёнам.",
          exhibition: [
            {
              id: 1,
              name: "Назва выставы",
              description: {
                title: "",
                subtitle: "",
                paragraph: "",
                btn: "",
              },
            },
          ],
        },
        {
          name: "Gomel",
          description:
            "Багаты на яркія фарбы край, жыхары якога выкарыстоўвалі варыяцыі народнага строя амаль да канца 20-га стагоддзя.",
          exhibition: [
            {
              id: 1,
              name: "Назва выставы",
              description: {
                title: "",
                subtitle: "",
                paragraph: "",
                btn: "",
              },
            },
            {
              id: 2,
              name: "Назва выставы",
              description: {
                title: "",
                subtitle: "",
                paragraph: "",
                btn: "",
              },
            },
          ],
        },
        {
          name: "Minsk",
          description:
            "Ярчэй за ўсё з'ява прадстаўлена на паўночна-заходняй і паўднёвай межах гэтай вобласці. ",
          exhibition: [
            {
              id: 1,
              name: "Строй дзяўчыны-падлетка.",
              description: {
                title: "Строй дзяўчыны-падлетка.",
                subtitle:
                  "Строй складана адназначна ідэнтыфікаваць з-за гісторыі сям'і, з якой ён паходзіць.",
                paragraph:
                  "Сям'я паходзіць з вёскі Смалічы, Копыльскі раён, Мінская вобласць. У перыяд з другой паловы 1940-х гадоў да канца 1950-х частыя пераезды ў межах Пінскай вобласці ўскладняюць атрыбуцыю. Верагодней усяго пашыты ў сярэдзіне 1950-х гадоў, г. Целяханы ці г. Лагішын, Пінскай вобласці (зараз Брэсцкая вобласць). Знайдзены ў вёске Смалічы.",
                btn: "",
              },
            },
          ],
        },
        {
          name: "Mahiliou",
          description:
            "Усходняя вобласць дэманструе такія ж тыповыя прыклады вышыўкі ў касцюме, як і захад краіны. Гэта ярка паказвае як агульную ідэнтычнасць можна прасачыць праз калектыўнае разуменне адзення.",
          exhibition: [],
        },
      ],
    },
    {
      language: "ru",
      regions: [
        {
          name: "Brest",
          description:
            "Западное Полесье – самый яркий пример рождения и развития полихромной вышивки.",
          exhibition: [
            {
              id: 1,
              name: "Название выставки",
              description: {
                title: "",
                subtitle: "",
                paragraph: "",
                btn: "",
              },
            },
            {
              id: 2,
              name: "Название выставки",
              description: {
                title: "",
                subtitle: "",
                paragraph: "",
                btn: "",
              },
            },
          ],
        },
        {
          name: "Viciebsk",
          description: "Не представлена",
          exhibition: [],
        },
        {
          name: "Grodno",
          description:
            "Несмотря на быстрый уход «деревенской» моды из обихода запада страны, найденные примеры заметно перекликаются с брестским и центральным регионом.",
          exhibition: [
            {
              id: 1,
              name: "Название выставки",
              description: {
                title: "",
                subtitle: "",
                paragraph: "",
                btn: "",
              },
            },
          ],
        },
        {
          name: "Gomel",
          description:
            "Богатый на яркие краски край, жители которого использовали вариации народного костюма почти до конца 20-го века.",
          exhibition: [
            {
              id: 1,
              name: "Название выставки",
              description: {
                title: "",
                subtitle: "",
                paragraph: "",
                btn: "",
              },
            },
            {
              id: 2,
              name: "Название выставки",
              description: {
                title: "",
                subtitle: "",
                paragraph: "",
                btn: "",
              },
            },
          ],
        },
        {
          name: "Minsk",
          description:
            "Ярче всего явление представлено на северо-западной и южной границах этой области.",
          exhibition: [
            {
              id: 1,
              name: "Название выставки",
              description: {
                title: "",
                subtitle: "",
                paragraph: "",
                btn: "",
              },
            },
          ],
        },
        {
          name: "Mahiliou",
          description:
            "Восточная область демонстрирует такие же типичные примеры вышивки в костюме, как и запад страны. Это ярко показывает как общую идентичность можно проследить через коллективное понимание костюма.",
          exhibition: [],
        },
      ],
    },
  ],
};

const imageContent = {
  homepage: {},
  about: {},
  regions: [
    {
      name: "Brest",
      exhibitions: [
        {
          id: 1,
          amountImg: "16",
          image: `https://polyreactsa.blob.core.windows.net/images/brest/brest-1-1.jpg${sas}`,
        },
        {
          id: 2,
          amountImg: "23",
          image: `https://polyreactsa.blob.core.windows.net/images/brest/brest-2-1.jpg${sas}`,
        },
        {
          id: 3,
          amountImg: "22",
          image: `https://polyreactsa.blob.core.windows.net/images/brest/brest-3-1.jpg${sas}`,
        },
      ],
    },
    {
      name: "Gomel",
      exhibitions: [
        {
          id: 1,
          amountImg: "19",
          image: `https://polyreactsa.blob.core.windows.net/images/gomel/gomel-1-1.jpg${sas}`,
        },
        {
          id: 2,
          amountImg: "19",
          image: `https://polyreactsa.blob.core.windows.net/images/gomel/gomel-2-1.jpg${sas}`,
        },
        {
          id: 3,
          amountImg: "23",
          image: `https://polyreactsa.blob.core.windows.net/images/gomel/gomel-3-1.jpg${sas}`,
        },
      ],
    },
    {
      name: "Grodno",
      exhibitions: [
        {
          id: 1,
          amountImg: "19",
          image: `https://polyreactsa.blob.core.windows.net/images/grodno/grodno-1-1.jpg${sas}`,
        },
      ],
    },
    {
      name: "Viciebsk",
      exhibitions: [],
    },
    {
      name: "Minsk",
      exhibitions: [
        {
          id: 1,
          amountImg: "22",
          image: `https://polyreactsa.blob.core.windows.net/images/minsk/minsk-1-1.jpg${sas}`,
        },
      ],
    },
    {
      name: "Mahiliou",
      exhibitions: [
        {
          id: 1,
          amountImg: "25",
          image: `https://polyreactsa.blob.core.windows.net/images/mahiliou/mahiliou-1-1.jpg${sas}`,
        },
      ],
    },
  ],
};

const initialStoreData = {
  state: { ...state },
  textContent: { ...textContent },
  imageContent: { ...imageContent },
};

export default initialStoreData;
