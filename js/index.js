$( document ).ready( function () {
    const indicators = [ {
        title: "Ҳудудларда қонун ҳужжатларига риоя қилиниши",
        percent: 9.8,
        subtitle: [ {
            title: "Қонун ва қонуности ҳужжатларнинг ҳудудларда ижро этилиши аҳволи.",
            percent: 5,
        },
        {
            title: "Маъмурий тартиб-таомилларга риоя этилиши ҳолати.",
            percent: 5,
        },
        {
            title: "Мулк ҳуқуқи дахлсизлигининг таъминланганлиги.",
            percent: 5,
        },
        ],
    },
    {
        title: "Фуқаролар ҳуқуқ ва эркинликларининг таъминланиши",
        percent: 3.2,
        subtitle: [ {
            title: "Ҳуқуқни муҳофаза қилувчи органлар томонидан қийноқлар ва асоссиз ушлаб туриш ҳолатлари.",
            percent: 5,
        },
        {
            title: "Гумон қилинувчи, айбланувчи ва судланувчининг ҳуқуқларини амалга оширишда тўсиқларнинг мавжуд эмаслиги.",
            percent: 5,
        },
        {
            title: "Фикр ва сўз эркинлигидан фойдаланган фуқаролар ва журналистларга нисбатан босим ўтказиш ҳолатлари.",
            percent: 5,
        },
        {
            title: "Шахсий ҳаётга ўзбошимчалик билан аралашиш ҳолатлари.",
            percent: 5,
        },
        {
            title: "Фуқаролик жамияти институтларининг ривожланганлиги.",
            percent: 5,
        },
        {
            title: "Асосий меҳнат ҳуқуқларининг (иш ҳақи, иш вақти, мажбурий меҳнат ва бошқалар) таъминланганлиги.",
            percent: 5,
        },
        ],
    },
    {
        title: "Одил судлов ва суд қарорларининг ижро этилиши",
        percent: 3.2,
        subtitle: [ {
            title: "Аҳолининг судлар орқали ўз ҳуқуқларини рўёбга чиқариш имкониятидан фойдаланиши.",
            percent: 5,
        },
        {
            title: "Аҳолининг суд қарорлари холислигидан қаноатланиши.",
            percent: 5,
        },
        {
            title: "Аҳолининг суд органларида коррупция аломатлари мавжудлиги ҳақидаги тасаввурлари.",
            percent: 5,
        },
        {
            title: "Судларнинг давлат органлари таъсиридан холилиги.",
            percent: 5,
        },
        {
            title: "Судлар томонидан процессуал муддатларга риоя қилиниши.",
            percent: 5,
        },
        {
            title: "Суд қарорларининг лозим даражада ижро этилиши.",
            percent: 5,
        },
        ],
    },
    {
        title: "Ҳуқуқ-тартибот ўрнатилганлиги ва хавфсизликнинг таъминланганлиги",
        percent: 3.2,
        subtitle: [ {
            title: "Ҳудудларда жиноятчилик даражаси.",
            percent: 5,
        },
        {
            title: "Ҳудудларда ҳуқуқбузарликлар профилактикаси самарадорлиги.",
            percent: 5,
        },
        {
            title: "Ҳудуддаги жиноятларни аниқлаш ва уларга қарши самарали чоралар кўрилиши.",
            percent: 5,
        },
        {
            title: "Фуқароларнинг адолатни «шахсан» қарор топтиришга мойиллиги.",
            percent: 5,
        },
        ],
    },
    {
        title: "Маҳаллий ижро органлари фаолиятининг самарали назорат қилиниши",
        percent: 5.2,
        subtitle: [ {
            title: "Халқ депутатлари Кенгаши томонидан ҳокимликлар фаолиятининг назорат қилиниши.",
            percent: 5,
        },
        {
            title: "Маҳаллий ижро органлари қарорлари билан боғлиқ низоларнинг маъмурий судларда кўриб чиқилиши.",
            percent: 5,
        },
        {
            title: "Маҳаллий ижро органлари масъулларининг содир этган ҳуқуқбузарликлари учун жавобгарлиги таъминланиши.",
            percent: 5,
        },
        {
            title: "Маҳаллий ижро органлари фаолияти устидан жамоатчилик назорати.",
            percent: 5,
        },
        ],
    },
    {
        title: "Коррупцияга қарши курашишнинг самарадорлиги",
        percent: 5.2,
        subtitle: [ {
            title: "Ижро органлари мансабдор шахслари томонидан мансаб ваколатларини суиистеъмол қилиш ҳолатларининг мавжудлиги.",
            percent: 5,
        },
        {
            title: "Ҳуқуқни муҳофаза қилувчи ва назорат қилувчи органлар ходимлари томонидан мансаб ваколатларини суиистеъмол қилиш ҳолатларининг мавжудлиги.",
            percent: 2,
        },
        {
            title: "Ижтимоий соҳада коррупциянинг тарқалганлик даражаси.",
            percent: 2,
        },
        {
            title: "Давлат хизматларини кўрсатишда коррупциянинг тарқалганлик даражаси.",
            percent: 2,
        },
        {
            title: "Қариндош-уруғчилик, ошна-оғайнигарчилик ва маҳаллийчилик унсурларининг намоён бўлиш ҳолатлари.",
            percent: 2,
        },
        ],
    },
    {
        title: "Ҳокимият институтларининг шаффофлиги",
        percent: 5.2,
        subtitle: [ {
            title: "Маҳаллий давлат ҳокимияти органларининг очиқлиги.",
            percent: 2,
        },
        {
            title: "Маҳаллий ижро органлари томонидан фуқароларнинг ахборот олиш ҳуқуқи таъминланганлиги.",
            percent: 2,
        },
        {
            title: "Фуқароларнинг маҳаллий даражадаги қарорларни қабул қилиш жараёнидаги иштироки.",
            percent: 2,
        },
        {
            title: "Мансабдор шахслар хатти-ҳаракатлари устидан шикоят бериш механизмларидан самарали фойдаланилиши.",
            percent: 2,
        },
        ],
    },
    ];

    const indicatorsProgress = $( "#indicatorProgressId .row" );

    indicators.map( ( element, index ) => {
        indicatorsProgress.append(
            '<div class="col-md-6 col-sm-12 mb-5">' +
            '<div class="progres-box"> ' +
            '<div class="top-info-progress d-flex justify-content-between align-items-center align-content-center mb-3"> ' +
            '<div class="left-title"> ' +
            '<h4 class="text-white"> ' +
            element.title +
            ' <i class="fas fa-angle-down"></i>  </h4>' +
            "</div>" +
            '<div class="right-info d-flex"> ' +
            '<div class="with-border p-2 px-3 ml-2">' +
            '<svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">' +
            '<path d="M11.0417 5.83333C11.0417 6.29357 10.6686 6.66667 10.2083 6.66667C9.74808 6.66667 9.375 6.29357 9.375 5.83333C9.375 5.3731 9.74808 5 10.2083 5C10.6686 5 11.0417 5.3731 11.0417 5.83333ZM9.58333 8.125V12.2917C9.58333 12.6368 9.86317 12.9167 10.2083 12.9167C10.5535 12.9167 10.8333 12.6368 10.8333 12.2917V8.125C10.8333 7.77982 10.5535 7.5 10.2083 7.5C9.86317 7.5 9.58333 7.77982 9.58333 8.125Z" fill="white" />' +
            '<path fill-rule="evenodd" clip-rule="evenodd" d="M3.33325 3.75002C3.33325 2.59943 4.26599 1.66669 5.41659 1.66669H14.9999C16.1505 1.66669 17.0833 2.59943 17.0833 3.75002V15.625C17.0833 15.9702 16.8034 16.25 16.4583 16.25H4.58325C4.58325 16.7103 4.95635 17.0834 5.41659 17.0834H16.4583C16.8034 17.0834 17.0833 17.3632 17.0833 17.7084C17.0833 18.0535 16.8034 18.3334 16.4583 18.3334H5.41659C4.26599 18.3334 3.33325 17.4006 3.33325 16.25V3.75002ZM15.8333 15V3.75002C15.8333 3.28979 15.4602 2.91669 14.9999 2.91669H5.41659C4.95635 2.91669 4.58325 3.28979 4.58325 3.75002V15H15.8333Z" fill="white" />' +
            "</svg>" +
            "</div>" +
            '<div class="with-border p-2 ml-2 px-3 text-white font-weight-bold"> ' +
            element.percent +
            " </div>" +
            "</div> " +
            " </div>" +
            '<div class="progress-line-wrap p-2">' +
            '<div class="progress-line d-flex justify-content-end" percent=' +
            element.percent +
            ">" +
            '<div class="stick-wrap">' +
            '<div class="stick"></div>' +
            '<div class="stick"></div>' +
            '<div class="stick"></div>' +
            '<div class="stick"></div>' +
            '<div class="stick"></div>' +
            '<div class="stick"></div>' +
            '<div class="stick"></div>' +
            '<div class="stick"></div>' +
            '<div class="stick"></div>' +
            '<div class="stick"></div>' +
            '<div class="stick"></div>' +
            "</div>" +
            '<div class="progress-line-inner">' +
            "</div>" +
            "</div>" +
            "</div>" +
            " </div>" +
            '<div class="under-progress-box-info mt-3 p-5">' +
            element.subtitle.map(
                ( innerElement, index ) =>
                    '<div class="mb-3">' +
                    '<div class="top-info-progress d-flex justify-content-between align-items-center align-content-center mb-3">' +
                    '<div class="left-title">' +
                    '<h5 class="text-white">' +
                    innerElement.title +
                    "</h5>" +
                    "</div>" +
                    '<div class="right-info d-flex">' +
                    '<div class="with-border p-2 px-3 ml-2">' +
                    '<svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                    '<path d="M11.0417 5.83333C11.0417 6.29357 10.6686 6.66667 10.2083 6.66667C9.74808 6.66667 9.375 6.29357 9.375 5.83333C9.375 5.3731 9.74808 5 10.2083 5C10.6686 5 11.0417 5.3731 11.0417 5.83333ZM9.58333 8.125V12.2917C9.58333 12.6368 9.86317 12.9167 10.2083 12.9167C10.5535 12.9167 10.8333 12.6368 10.8333 12.2917V8.125C10.8333 7.77982 10.5535 7.5 10.2083 7.5C9.86317 7.5 9.58333 7.77982 9.58333 8.125Z" fill="white" />' +
                    '<path fill-rule="evenodd" clip-rule="evenodd" d="M3.33325 3.75002C3.33325 2.59943 4.26599 1.66669 5.41659 1.66669H14.9999C16.1505 1.66669 17.0833 2.59943 17.0833 3.75002V15.625C17.0833 15.9702 16.8034 16.25 16.4583 16.25H4.58325C4.58325 16.7103 4.95635 17.0834 5.41659 17.0834H16.4583C16.8034 17.0834 17.0833 17.3632 17.0833 17.7084C17.0833 18.0535 16.8034 18.3334 16.4583 18.3334H5.41659C4.26599 18.3334 3.33325 17.4006 3.33325 16.25V3.75002ZM15.8333 15V3.75002C15.8333 3.28979 15.4602 2.91669 14.9999 2.91669H5.41659C4.95635 2.91669 4.58325 3.28979 4.58325 3.75002V15H15.8333Z" fill="white" />' +
                    "</svg>" +
                    "</div>" +
                    '<div class="with-border p-2 ml-2 px-3 text-white font-weight-bold"> ' +
                    innerElement.percent +
                    "</div>" +
                    "</div>" +
                    "</div>" +
                    '<div class="progress-line-wrap p-2">' +
                    '<div class="progress-line d-flex justify-content-end" percent=' +
                    innerElement.percent +
                    ">" +
                    '<div class="stick-wrap">' +
                    '<div class="stick"></div>' +
                    '<div class="stick"></div>' +
                    '<div class="stick"></div>' +
                    '<div class="stick"></div>' +
                    '<div class="stick"></div>' +
                    '<div class="stick"></div>' +
                    '<div class="stick"></div>' +
                    '<div class="stick"></div>' +
                    '<div class="stick"></div>' +
                    '<div class="stick"></div>' +
                    '<div class="stick"></div>' +
                    "</div>" +
                    '<div class="progress-line-inner"></div>' +
                    "</div>" +
                    "</div>" +
                    "</div>"
            ) +
            "</div>" +
            " </div>"
        );
    } );

    function addDistrictHandle ( data, indicatorProgress ) {
        data.map( ( element, index ) => {
            indicatorProgress.append(
                '<div class="col-md-6 col-sm-12 mb-5">' +
                '<div class="progres-box"> ' +
                '<div class="top-info-progress d-flex justify-content-between align-items-center align-content-center mb-3"> ' +
                '<div class="left-title"> ' +
                '<h4 class="text-white"> ' +
                element.title +
                "  </h4>" +
                "</div>" +
                '<div class="right-info d-flex"> ' +
                '<div class="with-border p-2 px-3 ml-2">' +
                '<svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path d="M11.0417 5.83333C11.0417 6.29357 10.6686 6.66667 10.2083 6.66667C9.74808 6.66667 9.375 6.29357 9.375 5.83333C9.375 5.3731 9.74808 5 10.2083 5C10.6686 5 11.0417 5.3731 11.0417 5.83333ZM9.58333 8.125V12.2917C9.58333 12.6368 9.86317 12.9167 10.2083 12.9167C10.5535 12.9167 10.8333 12.6368 10.8333 12.2917V8.125C10.8333 7.77982 10.5535 7.5 10.2083 7.5C9.86317 7.5 9.58333 7.77982 9.58333 8.125Z" fill="white" />' +
                '<path fill-rule="evenodd" clip-rule="evenodd" d="M3.33325 3.75002C3.33325 2.59943 4.26599 1.66669 5.41659 1.66669H14.9999C16.1505 1.66669 17.0833 2.59943 17.0833 3.75002V15.625C17.0833 15.9702 16.8034 16.25 16.4583 16.25H4.58325C4.58325 16.7103 4.95635 17.0834 5.41659 17.0834H16.4583C16.8034 17.0834 17.0833 17.3632 17.0833 17.7084C17.0833 18.0535 16.8034 18.3334 16.4583 18.3334H5.41659C4.26599 18.3334 3.33325 17.4006 3.33325 16.25V3.75002ZM15.8333 15V3.75002C15.8333 3.28979 15.4602 2.91669 14.9999 2.91669H5.41659C4.95635 2.91669 4.58325 3.28979 4.58325 3.75002V15H15.8333Z" fill="white" />' +
                "</svg>" +
                "</div>" +
                '<div class="with-border p-2 ml-2 px-3 text-white font-weight-bold"> ' +
                element.percent +
                " </div>" +
                "</div> " +
                " </div>" +
                '<div class="progress-line-wrap p-2">' +
                '<div class="progress-line d-flex justify-content-end" percent=' +
                element.percent +
                ">" +
                '<div class="stick-wrap">' +
                '<div class="stick"></div>' +
                '<div class="stick"></div>' +
                '<div class="stick"></div>' +
                '<div class="stick"></div>' +
                '<div class="stick"></div>' +
                '<div class="stick"></div>' +
                '<div class="stick"></div>' +
                '<div class="stick"></div>' +
                '<div class="stick"></div>' +
                '<div class="stick"></div>' +
                '<div class="stick"></div>' +
                "</div>" +
                '<div class="progress-line-inner">' +
                "</div>" +
                "</div>" +
                "</div>" +
                " </div>" +
                " </div>"
            );
        } );
    }

    const districtsNavoi = [ {
        title: "1. Кармана тумани",
        percent: 8.4,
    },
    {
        title: "2. Зарафшон шаҳри",
        percent: 8.3,
    },
    {
        title: "3. Навбаҳор тумани",
        percent: 8.0,
    },
    {
        title: "4. Нурота тумани",
        percent: 7.9,
    },
    {
        title: "5. Конимех тумани",
        percent: 7.8,
    },
    {
        title: "6. Навоий шаҳри",
        percent: 7.6,
    },
    {
        title: "7. Қизилтепа тумани",
        percent: 7.5,
    },
    {
        title: "8. Томди тумани",
        percent: 7.4,
    },
    {
        title: "9. Хатирчи тумани",
        percent: 7.3,
    },
    {
        title: "10. Учқудуқ тумани",
        percent: 7.2,
    },
    ];

    const lineProgressNavoi = $( "#lineProgressNavoi .row" );

    addDistrictHandle( districtsNavoi, lineProgressNavoi );

    const districtsBuxoro = [ {
        title: "1. Олот тумани",
        percent: 8.1,
    },
    {
        title: "2. Қоровулбозор тумани",
        percent: 8.1,
    },
    {
        title: "3. Ромитан тумани",
        percent: 8.0,
    },
    {
        title: "4. Когон шаҳри",
        percent: 8.0,
    },
    {
        title: "5. Қоракўл тумани",
        percent: 7.7,
    },
    {
        title: "6. Пешку тумани",
        percent: 7.6,
    },
    {
        title: "7. Ғиждувон тумани",
        percent: 7.6,
    },
    {
        title: "8. Бухоро тумани",
        percent: 7.6,
    },
    {
        title: "9. Вобкент тумани",
        percent: 7.6,
    },
    {
        title: "10. Шофиркон тумани",
        percent: 7.2,
    },
    {
        title: "11. Бухоро шаҳри",
        percent: 7.1,
    },
    {
        title: "12. Когон тумани",
        percent: 7.1,
    },
    {
        title: "13. Жондор тумани",
        percent: 6.9,
    },
    ];

    const lineProgressBuxoro = $( "#lineProgressBuxoro .row" );

    addDistrictHandle( districtsBuxoro, lineProgressBuxoro );

    const lineProgressAndijon = $( "#lineProgressAndijon .row" );

    const districtAndijon = [ {
        title: "Qo'rg'ontepa tumani",
        percent: 8.4,
    },
    {
        title: "Buloqboshi tumani",
        percent: 8.0,
    },
    {
        title: "Baliqchi tumani ",
        percent: 8.0,
    },
    {
        title: "Andijon shahri ",
        percent: 7.9,
    },
    {
        title: " Bo'ston tumani",
        percent: 7.9,
    },
    {
        title: " Jalolquduq tumani",
        percent: 7.8,
    },
    {
        title: " Oltinko'l tumani",
        percent: 7.8,
    },
    {
        title: "Xo'jaobod tumani",
        percent: 7.7,
    },
    {
        title: "Ulug'nor tumani",
        percent: 7.7,
    },
    {
        title: "Izboskan tumani",
        percent: 7.6,
    },
    {
        title: "Shaxriston tumani",
        percent: 7.3,
    },
    {
        title: "Paxtaobod tumani",
        percent: 7.3,
    },
    {
        title: "Marxamat tumani",
        percent: 7.3,
    },
    {
        title: "Xonaobod shahri",
        percent: 7.2,
    },
    {
        title: "Andijon tumani",
        percent: 7.2,
    },
    {
        title: "Asaka tumani",
        percent: 6.9,
    },
    ];

    addDistrictHandle( districtAndijon, lineProgressAndijon );

    const lineProgressFargona = $( "#lineProgressFargona .row" );

    const districtFargona = [ {
        title: " Marg'ilon tumani ",
        percent: 8.0,
    },
    {
        title: "Furqat tumani",
        percent: 7.9,
    },
    {
        title: "Farg'ona shahri",
        percent: 7.9,
    },
    {
        title: "So'x tumani",
        percent: 7.9,
    },
    {
        title: "Qo'qon shahri",
        percent: 7.9,
    },
    {
        title: "Quvasoy shahri",
        percent: 7.6,
    },
    {
        title: "Qo'shtepa tumani",
        percent: 7.5,
    },
    {
        title: "Yozyuvon tumani",
        percent: 7.4,
    },
    {
        title: "Quva tumani",
        percent: 7.4,
    },
    {
        title: "Dang'ara tumani",
        percent: 7.4,
    },
    {
        title: "Farg'ona tumani",
        percent: 7.2,
    },
    {
        title: "Oltiariq tumani",
        percent: 7.1,
    },
    {
        title: "Beshariq tumani",
        percent: 7.1,
    },
    {
        title: "O'zbekiston tumani",
        percent: 7.1,
    },
    {
        title: "Toshloq tumani",
        percent: 7.1,
    },
    {
        title: "Bog'dod tumani",
        percent: 7.0,
    },
    {
        title: "Rishton tumani",
        percent: 6.9,
    },
    {
        title: "Uchkuprik tumani",
        percent: 6.5,
    },
    {
        title: "Buvayda tumani",
        percent: 6.4,
    },
    ];

    addDistrictHandle( districtFargona, lineProgressFargona );

    const lineProgressJizzax = $( "#lineProgressJizzax .row" );
    const districtJizzax = [ {
        title: "Yangiobod tumani",
        percent: 7.9,
    },
    {
        title: "Sharof Rashidov tumani",
        percent: 7.6,
    },
    {
        title: "Zomin tumani",
        percent: 7.6,
    },
    {
        title: "Mirzach'l tumani",
        percent: 7.6,
    },
    {
        title: "Zarbdor tumani",
        percent: 7.5,
    },
    {
        title: "Forish tumani",
        percent: 7.5,
    },
    {
        title: "G'allaorol tumani",
        percent: 7.5,
    },
    {
        title: "Zafarobod tumani",
        percent: 7.5,
    },
    {
        title: "Jizzax shahri",
        percent: 7.4,
    },
    {
        title: "Do'stlik tumani",
        percent: 7.3,
    },
    {
        title: "Arnasoy tumani",
        percent: 7.1,
    },
    {
        title: "Paxtakor tumani",
        percent: 7.0,
    },
    {
        title: "Baxmal tumani",
        percent: 6.3,
    },
    ];

    addDistrictHandle( districtJizzax, lineProgressJizzax );

    const lineProgressnamangan = $( "#lineProgressnamangan .row" );
    const districtNamangan = [ {
        title: "Namangan tumani",
        percent: 8.1,
    },
    {
        title: "Namangan tumani",
        percent: 8.0,
    },
    {
        title: "To'raqo'g'on tumani",
        percent: 7.9,
    },
    {
        title: "Pop tumani",
        percent: 7.6,
    },
    {
        title: "Uychi tumani",
        percent: 7.5,
    },
    {
        title: "Uchqo'rg'on tumani",
        percent: 7.4,
    },
    {
        title: "Norin tumani",
        percent: 7.4,
    },
    {
        title: "Chust tumani",
        percent: 7.2,
    },
    {
        title: "Mingbuloq tumani",
        percent: 7.2,
    },
    {
        title: "Chortoq tumani",
        percent: 7.1,
    },
    {
        title: "Kosonsoy tumani",
        percent: 6.9,
    },
    {
        title: "Yangiqo'rg'on tumani",
        percent: 6.6,
    },
    ];

    addDistrictHandle( districtNamangan, lineProgressnamangan );


    const lineProgressSirdaryo = $( "#lineProgressSirdaryo .row" )

    const districtSirdaryo = [
        {
            title: "Guliston shahri",
            percent: 8.3
        },
        {
            title: "Yangiyer shahri",
            percent: 7.9
        },
        {
            title: "Mirzaobod tumani",
            percent: 7.7
        },
        {
            title: "Sirdaryo tumani",
            percent: 7.7
        },
        {
            title: "Xavast tumani",
            percent: 7.5
        },
        {
            title: "Oqoltin tumani",
            percent: 7.5
        },
        {
            title: "Guliston tumani",
            percent: 7.5
        },
        {
            title: "Sardoba tumani",
            percent: 7.2
        },
        {
            title: "Boyovut tumani",
            percent: 6.9
        },
        {
            title: "Shirin shahri",
            percent: 6.9
        },
        {
            title: "Soyxunobod tumani",
            percent: 6.9
        },
    ]

    addDistrictHandle( districtSirdaryo, lineProgressSirdaryo )

    const lineProgressSurxondaryo = $( "#lineProgressSurxondaryo .row" )

    const districtSurxondaryo = [
        {
            title: "Jarqo'rg'on tumani",
            percent: 7.7
        },
        {
            title: "Denov tumani",
            percent: 7.6
        },
        {
            title: "Termiz tumani",
            percent: 7.5
        },
        {
            title: "Uzun tumani",
            percent: 7.5
        },
        {
            title: "Termiz shahri",
            percent: 7.3
        },
        {
            title: "Angor tumani",
            percent: 7.3
        },
        {
            title: "Oltinsoy tumani",
            percent: 7.2
        },
        {
            title: "Bandixon tumani",
            percent: 7.2
        },
        {
            title: "Sherobod tumani",
            percent: 7.1
        },
        {
            title: "Muzrabot tumani",
            percent: 7.1
        },
        {
            title: "Qiziriq tumani",
            percent: 7.1
        },
        {
            title: "Boysun tumani",
            percent: 7.1
        },
        {
            title: "Sho'rchi tumani",
            percent: 7.0
        },
        {
            title: "Sariosiyo tumani",
            percent: 7.0
        },
        {
            title: "Qo'mg'irg'on tumani",
            percent: 6.9
        },

    ]

    addDistrictHandle( districtSurxondaryo, lineProgressSurxondaryo );


    const lineProgressSamarqand = $( "#lineProgressSamarqand .row" );

    const districtSamarqand = [
        {
            title: "Jomboy tumani",
            percent: 8.0
        },
        {
            title: "Kattaqurg'on shahri",
            percent: 7.7
        },
        {
            title: "Qo'shrabot tumani",
            percent: 7.7
        },
        {
            title: "Nurabod tumani",
            percent: 7.7
        },
        {
            title: "Kattaqo'g'on tumani",
            percent: 7.6
        },
        {
            title: "Urgut tumani",
            percent: 7.4
        },
        {
            title: "Ishtixon tumani",
            percent: 7.4
        },
        {
            title: "Narpay tumani",
            percent: 7.3
        },
        {
            title: "Oqdaryo tumani",
            percent: 7.1
        },
        {
            title: "Tayloq tumani",
            percent: 7.0
        },
        {
            title: "Pastarg'om tumani",
            percent: 7.0
        },
        {
            title: "Bulung'ur tumani",
            percent: 7.0
        },
        {
            title: "Samarqand shahri",
            percent: 6.9
        },
        {
            title: "Paxtachi tumani",
            percent: 6.9
        },
        {
            title: "Payariq tumani",
            percent: 6.9
        },
        {
            title: "Samarqand tumani",
            percent: 6.5
        },
    ];

    addDistrictHandle( districtSamarqand, lineProgressSamarqand );


    const lineProgressToshkentsh = $( "#lineProgressToshkentsh .row" )

    const districtToshkentsh = [
        {
            title: "Bektemir tumani",
            percent: 9.0
        },
        {
            title: "Yakkasaroy tumani",
            percent: 8.4
        },
        {
            title: "Uchtepa tumani",
            percent: 8.3
        },
        {
            title: "Mirzo Ulug'bek tumani",
            percent: 8.1
        },
        {
            title: "Shayxontoxur tumani",
            percent: 8.1
        },
        {
            title: "Olmazor tumani",
            percent: 8.0
        },
        {
            title: "Yunusabod tumani",
            percent: 7.9
        },
        {
            title: "Sirg'ali tumani",
            percent: 7.8
        },
        {
            title: "Chilonzor tumani",
            percent: 7.7
        },
        {
            title: "Mirobod tumani",
            percent: 7.4
        },
        {
            title: "Yashnaobod tumani",
            percent: 7.4
        },
    ]

    addDistrictHandle( districtToshkentsh, lineProgressToshkentsh )


    const lineProgressToshkentv = $( "#lineProgressToshkentv .row" )

    const districtToshkentv = [
        {
            title: "Zangota tumani ",
            percent: 8.0
        },
        {
            title: "Bekobod shahri",
            percent: 7.8
        },
        {
            title: "Qibray tumani",
            percent: 7.7
        },
        {
            title: "Quyichirchiq tumani",
            percent: 7.6
        },
        {
            title: "Nurafshon shahri",
            percent: 7.6
        },
        {
            title: "Yuqorichirchiq tumani",
            percent: 7.6
        },
        {
            title: "Oqqurg'on tumani",
            percent: 7.6
        },
        {
            title: "Yangi yo'l shahri",
            percent: 7.5
        },
        {
            title: "Chirchiq shahri",
            percent: 7.5
        },
        {
            title: "Parkent tumani",
            percent: 7.4
        },
        {
            title: "Bo'stonliq tumani",
            percent: 7.4
        },
        {
            title: "Pskent tumani",
            percent: 7.4
        },
        {
            title: "O'rtachirchiq tumani",
            percent: 7.4
        },
        {
            title: "Bo'ka tumani",
            percent: 7.2
        },
        {
            title: "Angren shahri",
            percent: 7.2
        },
        {
            title: "Toshkent tumani",
            percent: 7.2
        },
        {
            title: "Chinoz tumani",
            percent: 7.2
        },
        {
            title: "Olmaliq shahri",
            percent: 7.1
        },
        {
            title: "Ohangaron tumani",
            percent: 7.0
        },
        {
            title: "Ohangaron shahri",
            percent: 6.6
        },
        {
            title: "Yangiyo'l tumani",
            percent: 6.5
        },
        {
            title: "Bekobod tumani",
            percent: 6.5
        },
    ]

    addDistrictHandle( districtToshkentv, lineProgressToshkentv )


    const lineProgressXorazim = $( "#lineProgressXorazim .row" )
    const districtXorazim = [
        {
            title: "Xonqa tumani",
            percent: 7.8
        },
        {
            title: "Urganch shahri",
            percent: 7.6
        },
        {
            title: "Yangiariq tumani",
            percent: 7.6
        },
        {
            title: "Qo'shkuprik tumani",
            percent: 7.6
        },
        {
            title: "Xazorasp tumani",
            percent: 7.5
        },
        {
            title: "Yangibozor tumani",
            percent: 7.4
        },
        {
            title: "Xiva tumani",
            percent: 7.4
        },
        {
            title: "Bog'ot tumani",
            percent: 7.4
        },
        {
            title: "Shavot tumani",
            percent: 7.3
        },
        {
            title: "Xiva sh.",
            percent: 7.3
        },
        {
            title: "Urganch tumani",
            percent: 7.2
        },
        {
            title: "Gurlan tumani",
            percent: 6.8
        },
        {
            title: "Tuproqqala tumani",
            percent: 6.5
        },
    ]


    addDistrictHandle( districtXorazim, lineProgressXorazim )

    $( ".home-page-owl-carousel" ).owlCarousel( {
        margin: 10,
        nav: true,
        items: 1,
        center: true,
        stagePadding: 30,
        autoHeight: true,
    } );
    $( ".reagion-card-carousel" ).owlCarousel( {
        loop: false,
        center: true,
        stagePadding: 30,
        margin: 20,

        autoHeight: true,
        autoWidth: true,
        items: 5,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 5,
            },
        },
    } );
    $( '[data-toggle="tooltip"]' ).tooltip();

    $( ".navbar-toggler" ).click( function ( e ) {
        e.preventDefault();
        if ( $( this ).children( "i" ).attr( "class" ) == "fas fa-bars" ) {
            $( this ).children( "i" ).removeClass( "fa-bars" ).addClass( "fa-times" );
        } else {
            $( this ).children( "i" ).removeClass( "fa-times" ).addClass( "fa-bars" );
        }
    } );

    const circleProgressBars = document.querySelectorAll( ".progress-ring-circle" );

    circleProgressBars.forEach( ( circle ) => {
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        const getPercent = 100 - circle.getAttribute( "percent" );
        var animationNumber = 0;

        circle.style.strokeDasharray = `${ circumference } ${ circumference }`;
        circle.style.strokeDashoffset = circumference;

        function setProgress ( percent ) {
            const offset = circumference - ( percent / 100 ) * circumference;
            circle.style.strokeDashoffset = -offset;

            // $(circle).next('text').text(`${percent}%`);

            var time = setInterval( () => {
                $( circle ).next( "text" ).text( `${ animationNumber }%` );

                animationNumber += 1;

                if ( animationNumber > 100 - percent ) {
                    clearInterval( time );
                    $( circle )
                        .next( "text" )
                        .text( `${ 100 - percent }%` );
                }
            }, 100 );
        }

        setProgress( getPercent );
    } );

    const lineProgressBars = document.querySelectorAll( ".progress-line" );

    lineProgressBars.forEach( ( line ) => {
        const getPercent = line.getAttribute( "percent" );

        const childWidth = 10 - getPercent;

        $( line )
            .children( ".progress-line-inner" )
            .css( {
                width: `${ childWidth * 10 }%`,
            } );
    } );

    $( "#buxoro" ).click( function ( e ) {
        e.preventDefault();
        // alert("this is buhor");
    } );

    const progressBox = $( ".progres-box" );

    progressBox.click( function ( e ) {
        e.preventDefault();
        $( this ).next().slideToggle();
        progressBox.not( this ).next().slideUp();
    } );
} );