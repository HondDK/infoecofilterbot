import openai from 'openai';
import dotenv from 'dotenv';
dotenv.config();
const openaiClient = new openai({ apiKey: process.env.OPENAI_API_KEY });

export async function generateResponse(userMessage: string ) {
    try {
        console.log(userMessage)
        const response = await openaiClient.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                { role: "system", content: "Ты создан чтобы отвечать на вопросы по фильтрам ответы бери из этого текста: Всем здравствуйте! Мы команда Карагандинского университета Казпотребсоюза! В первую очередь хотелось бы поблагодарить организаторов сегодняшнего мероприятия и членов жюри за предоставленную  возможность участия. Мы презентуем проект под названием “EcoFilter”, который представляет собой разработку экологически - полезных фильтров для печного отопления. Мы столкнулись со следующими проблемами:\n" +                       "Загрязнение воздуха. Отопительные печи, работающие на угле и дровах, серьезно загрязняют воздух выбросами твердых частиц, углекислого газа, монооксида углерода, оксидов азота и летучих органических соединений.\n" +                       "Утрата биоразнообразия. Выбросы от отопительных печей способствуют кислотным осадкам, тем самым нанося вред растениям и животным, и уменьшая биоразнообразие в некоторых местах.\n" +                       "Влияние на здоровье. Загрязненный воздух может вызывать респираторные и сердечно-сосудистые заболевания, провоцировать астму и другие хронические проблемы со здоровьем.\n" +                       "Ухудшение качества жизни в городских и сельских районах. Загрязнение воздуха от отопительных печей ухудшает жизненные условия, особенно в густонаселенных городах или сельских районах, где используется печное отопление.\n" +                       "Согласно данным ООН, загрязнение воздуха становится причиной преждевременной смерти для 7 миллионов человек ежегодно, подчеркивая неотложность и важность нашей борьбы за чистый воздух. \n" +                       "Применение нашего фильтра открывает перед нами ряд бесценных возможностей:\n" +                       "Борьба с глобальным потеплением. Мы вносим свой вклад в замедление климатических изменений, сокращая выбросы парниковых газов и способствуя достижению международных климатических целей.\n" +                       "Снижение социальных и экономических потерь. Наша технология существенно сокращает расходы на здравоохранение, уменьшая бремя болезней и увеличивая производительность труда, что способствует созданию здорового и благополучного общества.\n" +                       "Эффективное уменьшение выбросов загрязняющих веществ. С помощью “EcoFilter” удастся значительно снизить уровень атмосферных загрязнителей, включая твердые частицы, монооксид углерода и оксиды азота, тем самым защищая окружающую среду и здоровье населения.\n" +                       "Содействие социальному равенству. Обеспечивая доступность чистых и эффективных решений для отопления, мы улучшаем качество жизни всех слоев населения, особенно малообеспеченных и уязвимых групп.\n" +                       "Соответствие экологическим нормам и стандартам. Наш продукт позволяет организациям и частным лицам соответствовать современным экологическим требованиям, избегая штрафов и содействуя экологически ответственному поведению.\n" +                       "Образовательный аспект. Внедрение образовательных программ и материалов увеличивает осведомленность об экологических вызовах и продвигает знания о важности чистых технологий в области отопления.\n" +                       "Балым:\n" +                       "Наши инновационные фильтры будут доступны через уникальную подписочную модель, которая включает в себя не только поставку самого фильтра, но и полный комплекс услуг по его ежемесячному обслуживанию и технической поддержке. Это означает, что наши квалифицированные специалисты будут регулярно осуществлять профессиональную очистку и замену фильтрующих материалов, гарантируя их бесперебойную и эффективную работу. Удобное и простое взаимодействие с клиентами будет организовано через специально разработанный нами Телеграм-бот, что существенно упрощает процесс коммуникации и заказа услуг.\n" +                       "Экономическая модель проекта также продумана до мелочей. Себестоимость производства одного фильтра составляет всего 6380 тенге. Для запуска производства партии из 100 фильтров необходим стартовый капитал в размере 3.000.000 тенге, учитывая все сопутствующие расходы, такие как налогообложение, зарплаты сотрудников, логистика, маркетинговые активности и аренда помещений.\n" +                       "Ожидаемый срок окупаемости проекта - всего 4 месяца, что делает инвестиции в “EcoFilter” особенно привлекательными. Учитывая сезонность использования фильтров, которая длится 5 месяцев, мы прогнозируем быстрое наращивание продаж и увеличение прибыли уже в первый год работы.\n" +                       "Если хотите узнать больше о нашем фильтре, просто отсканируйте этот QR-код. Он откроет вам наш Телеграм-бот. Там вы найдете всю нужную информацию и сможете задать вопросы на которые ответит наш ИИ. Это быстро, удобно и просто.\n" +                                          "Наш проект \"EcoFilter\" гармонично вписывается в глобальные цели устойчивого развития ООН, стремясь внести свой вклад в достижение более здоровой и устойчивой планеты. Вот как наша инициатива соприкасается и поддерживает ключевые Цели устойчивого развития:\n" +                       "3 Цель: Хорошее здоровье и благополучие. Наша разработка напрямую способствует снижению заболеваемости и смертности, вызванных загрязнением воздуха, повышая качество жизни и обеспечивая условия для хорошего здоровья населения.\n" +                       "6 Цель: Чистая вода и санитария. Хотя наш проект фокусируется на очистке воздуха, он также способствует сокращению загрязнения воды, поскольку уменьшает количество загрязняющих веществ, попадающих в водные ресурсы из атмосферы.\n" +                       "8 Цель: Достойная работа и экономический рост. \"EcoFilter\" создает новые рабочие места в секторе зеленых технологий и способствует экономическому росту через инновации в области экологически устойчивого производства.\n" +                       "9 Цель: Индустриализация, инновации и инфраструктуры. Наш проект воплощает в себе прогресс в области экологически чистых технологий, предоставляя инновационные решения для сокращения атмосферного загрязнения.\n" +                       "11 Цель: Устойчивые города и населенные пункты. \"EcoFilter\" улучшает качество воздуха в городах и населенных пунктах, делая их более здоровыми для жизни и устойчивыми к экологическим вызовам.\n" +                       "12 Цель: Ответственное потребление и производство. Наш проект поддерживает идею минимизации отходов и эффективного использования ресурсов на всех этапах производства и потребления.\n" +                       "13 Цель: Борьба с изменением климата. \"EcoFilter\" способствует снижению выбросов парниковых газов, активно внося вклад в глобальные усилия по борьбе с изменением климата.\n" +                       "14 и 15 Цели: Сохранение морских и наземных экосистем. Сокращая загрязнение воздуха, наш проект косвенно защищает и сохраняет биоразнообразие как в морских, так и в наземных экосистемах, предотвращая их деградацию.\n" +                       "17 Цель: Партнерство в интересах устойчивого развития. Мы открыты к сотрудничеству с организациями, правительствами и частным сектором, чтобы вместе работать над достижением целей устойчивого развития через инновации и совместные проекты.\n" +                       "Нияз:\n" +                       "Наша целевая аудитория охватывает:\n" +                       "Владельцы частных домов. Особое внимание уделяется владельцам частных домов, которые в холодное время года активно используют отопительные печи или камины. Наш продукт гарантирует, что их дома останутся уютными и теплыми, при этом минимизируя вредные выбросы в атмосферу.\n" +                       "Владельцы бань и саун. Для тех, кто владеет частными или общественными банными комплексами, наши фильтры станут ключом к созданию экологически чистой и здоровой атмосферы. Установка наших фильтров значительно снижает загрязнение воздуха, способствуя сохранению природы.\n" +                                        "Планы и перспективы развития проекта \"EcoFilter\" обширны и многообещающе, включая:\n" +                       "Глобализация через франшизу. Мы планируем активно развивать сеть франшиз по всему Казахстану, создавая надежную основу для дальнейшего выхода на международный рынок. Это позволит адаптировать нашу технологию к различным локальным условиям и спецификам, обеспечивая устойчивый рост и расширение нашего влияния в глобальном масштабе.\n" +                       "Инновации в утилизации отходов. Разработка технологий для использования скопленной сажи открывает новые возможности для нашего проекта. Мы исследуем способы переработки сажи в полезные продукты, например, в качестве компонента для производства строительных материалов или для создания чернил, что значительно уменьшит экологический след от ее утилизации и добавит ценность к нашему предложению.\n" +                       "Расширение линейки продуктов для промышленного сектора. Помимо фокуса на частные дома и малый бизнес, мы видим большой потенциал в разработке и внедрении специализированных фильтров для крупных промышленных предприятий. Это не только существенно увеличит нашу рыночную долю, но и окажет значительное положительное влияние на экологию, сокращая выбросы вредных веществ в атмосферу на большом масштабе.\n" +                       "Сотрудничество с государственными и международными экологическими программами. Мы стремимся активно сотрудничать с правительственными структурами и международными экологическими организациями для внедрения наших решений в рамках программ по снижению уровня загрязнения и борьбе с изменением климата. Это позволит нам получить поддержку и финансирование для масштабирования и дальнейшего развития проекта.\n" +                                       "В завершение нашей презентации, мы хотели бы поделиться глубоким убеждением, что наш продукт не просто решение - это мост к будущему, где уважение к экологии и ответственность перед планетой являются основой процветания. Инвестирование в наши экологические фильтры открывает дверь к миру, где чистый воздух становится источником здоровья и благополучия для каждого человека, а устойчивый подход к бизнесу – залогом его долгосрочного успеха. Настоящий бизнес и успех начинается не с цифр прибыли, а с осознанного выбора в пользу заботы об окружающей среде. Сделаем этот шаг вместе, стремясь к созданию зеленого будущего, где гармония с природой становится ключом к благополучию всего человечества!\n  " },
                { role: "user", content: userMessage}
            ],

        });
        console.log(response.choices[0].message.content as string | null);
        return response.choices[0].message.content as string | null;
    } catch (error) {
        console.error('Error generating response from OpenAI:', error);
        return 'Не могу ответить, ошибка.';
    }
}