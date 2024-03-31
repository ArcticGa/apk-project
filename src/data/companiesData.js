export const companiesData = [
  {
    id: 1,
    companyInfo: {
      companyName: 'Froza Team',
      companyMembers: [
        {
          companyMemberId: 1,
          companyMemberName: '@gross_franklin',
          companyMemberRole: 'тестировщик',
        },
        {
          companyMemberId: 2,
          companyMemberName: '@dsdemidov',
          companyMemberRole: 'администратор',
        },
        {
          companyMemberId: 3,
          companyMemberName: '@mihaylovvsjob',
          companyMemberRole: 'разработчик',
        },
      ],
      companyLinks: [
        {
          idLink: 1,
          nameLink: 'Notion',
          urlImgLink: '/src/assets/icons/notion.svg',
        },
        {
          idLink: 1,
          nameLink: 'Bitrix',
          urlImgLink: '/src/assets/icons/bitrix.svg',
        },
      ],
    },
    companyItems: [
      {
        idItem: 1,
        itemName: 'Warehouse',
        itemCommits: [
          {
            idCommit: 1,
            versionCommit: '1.2.4',
            statusCommit: 'release',
            dateCommit: '12 янв. 2024г.',
            apkNameLink: 'dt_warehouse.v1.2.4.apk',
            bugFixesCommit: [
              'Исправлен баг, при котором если отфильтровать список на размещение по зоне, закрыть и открыть страницу, то текст в фильтре станет “Все”',
            ],
            featuresCommit: [
              'Добавлена страница “Размещение на транзитном складе”',
              'Добавленая сортировка по клиенту на странице “Сбор отказных деталей”',
            ],
            bugsFoundCommit: [
              {
                idBugFoundCommit: 1,
                statusBug: 'alert',
                titleBug: 'При сканировании партстикера появляется ошибка',
                descriptionBug:
                  'При сканировании партстикера “В ячейку” на странице “Размещение на транзитном складе” появляется ошибка 400 Bad Request',
                orderOfActionsBug: [
                  'Заходим на страницу “Размещение на транзитном складе”',
                  'Тапаем на кнопку “В ячейку”, открывается pop-up',
                  'С помощью ТСД сканируем партстикер 121473224/1',
                  'В  pop-up-е появляется текст ошибки “400 Bad Request”',
                ],
                foundBy: '@gross_franklin',
              },
              {
                idBugFoundCommit: 2,
                statusBug: 'critical',
                titleBug: 'При сканировании партстикера появляется ошибка',
                descriptionBug:
                  'При сканировании партстикера “В ячейку” на странице “Размещение на транзитном складе” появляется ошибка 400 Bad Request',
                orderOfActionsBug: [
                  'Заходим на страницу “Размещение на транзитном складе”',
                  'Тапаем на кнопку “В ячейку”, открывается pop-up',
                  'С помощью ТСД сканируем партстикер 121473224/1',
                  'В  pop-up-е появляется текст ошибки “400 Bad Request”',
                ],
                foundBy: '@gross_franklin',
              },
              {
                idBugFoundCommit: 3,
                statusBug: 'error',
                titleBug: 'При сканировании партстикера появляется ошибка',
                descriptionBug:
                  'При сканировании партстикера “В ячейку” на странице “Размещение на транзитном складе” появляется ошибка 400 Bad Request',
                orderOfActionsBug: [
                  'Заходим на страницу “Размещение на транзитном складе”',
                  'Тапаем на кнопку “В ячейку”, открывается pop-up',
                  'С помощью ТСД сканируем партстикер 121473224/1',
                  'В  pop-up-е появляется текст ошибки “400 Bad Request”',
                ],
                foundBy: '@gross_franklin',
              },
            ],
          },
          {
            idCommit: 2,
            versionCommit: '1.2.4-test',
            statusCommit: 'testing',
            dateCommit: '12 янв. 2024г.',
            apkNameLink: 'dt_warehouse-test.v1.2.4.apk',
            bugFixesCommit: [
              'Исправлен баг, при котором если отфильтровать список на размещение по зоне, закрыть и открыть страницу, то текст в фильтре станет “Все”',
            ],
            featuresCommit: [
              'Добавлена страница “Размещение на транзитном складе”',
              'Добавленая сортировка по клиенту на странице “Сбор отказных деталей”',
            ],
            bugsFoundCommit: [
              {
                idBugFoundCommit: 1,
                statusBug: 'alert',
                titleBug: 'При сканировании партстикера появляется ошибка',
                descriptionBug:
                  'При сканировании партстикера “В ячейку” на странице “Размещение на транзитном складе” появляется ошибка 400 Bad Request',
                orderOfActionsBug: [
                  'Заходим на страницу “Размещение на транзитном складе”',
                  'Тапаем на кнопку “В ячейку”, открывается pop-up',
                  'С помощью ТСД сканируем партстикер 121473224/1',
                  'В  pop-up-е появляется текст ошибки “400 Bad Request”',
                ],
                foundBy: '@gross_franklin',
              },
              {
                idBugFoundCommit: 2,
                statusBug: 'critical',
                titleBug: 'При сканировании партстикера появляется ошибка',
                descriptionBug:
                  'При сканировании партстикера “В ячейку” на странице “Размещение на транзитном складе” появляется ошибка 400 Bad Request',
                orderOfActionsBug: [
                  'Заходим на страницу “Размещение на транзитном складе”',
                  'Тапаем на кнопку “В ячейку”, открывается pop-up',
                  'С помощью ТСД сканируем партстикер 121473224/1',
                  'В  pop-up-е появляется текст ошибки “400 Bad Request”',
                ],
                foundBy: '@gross_franklin',
              },
              {
                idBugFoundCommit: 3,
                statusBug: 'error',
                titleBug: 'При сканировании партстикера появляется ошибка',
                descriptionBug:
                  'При сканировании партстикера “В ячейку” на странице “Размещение на транзитном складе” появляется ошибка 400 Bad Request',
                orderOfActionsBug: [
                  'Заходим на страницу “Размещение на транзитном складе”',
                  'Тапаем на кнопку “В ячейку”, открывается pop-up',
                  'С помощью ТСД сканируем партстикер 121473224/1',
                  'В  pop-up-е появляется текст ошибки “400 Bad Request”',
                ],
                foundBy: '@gross_franklin',
              },
            ],
          },
          {
            idCommit: 3,
            versionCommit: '1.2.4-test',
            statusCommit: 'tested',
            dateCommit: '12 янв. 2024г.',
            apkNameLink: 'dt_warehouse-test.v1.2.4.apk',
            bugFixesCommit: [
              'Исправлен баг, при котором если отфильтровать список на размещение по зоне, закрыть и открыть страницу, то текст в фильтре станет “Все”',
            ],
            featuresCommit: [
              'Добавлена страница “Размещение на транзитном складе”',
              'Добавленая сортировка по клиенту на странице “Сбор отказных деталей”',
            ],
            bugsFoundCommit: [
              {
                idBugFoundCommit: 1,
                statusBug: 'alert',
                titleBug: 'При сканировании партстикера появляется ошибка',
                descriptionBug:
                  'При сканировании партстикера “В ячейку” на странице “Размещение на транзитном складе” появляется ошибка 400 Bad Request',
                orderOfActionsBug: [
                  'Заходим на страницу “Размещение на транзитном складе”',
                  'Тапаем на кнопку “В ячейку”, открывается pop-up',
                  'С помощью ТСД сканируем партстикер 121473224/1',
                  'В  pop-up-е появляется текст ошибки “400 Bad Request”',
                ],
                foundBy: '@gross_franklin',
              },
              {
                idBugFoundCommit: 2,
                statusBug: 'critical',
                titleBug: 'При сканировании партстикера появляется ошибка',
                descriptionBug:
                  'При сканировании партстикера “В ячейку” на странице “Размещение на транзитном складе” появляется ошибка 400 Bad Request',
                orderOfActionsBug: [
                  'Заходим на страницу “Размещение на транзитном складе”',
                  'Тапаем на кнопку “В ячейку”, открывается pop-up',
                  'С помощью ТСД сканируем партстикер 121473224/1',
                  'В  pop-up-е появляется текст ошибки “400 Bad Request”',
                ],
                foundBy: '@gross_franklin',
              },
              {
                idBugFoundCommit: 3,
                statusBug: 'error',
                titleBug: 'При сканировании партстикера появляется ошибка',
                descriptionBug:
                  'При сканировании партстикера “В ячейку” на странице “Размещение на транзитном складе” появляется ошибка 400 Bad Request',
                orderOfActionsBug: [
                  'Заходим на страницу “Размещение на транзитном складе”',
                  'Тапаем на кнопку “В ячейку”, открывается pop-up',
                  'С помощью ТСД сканируем партстикер 121473224/1',
                  'В  pop-up-е появляется текст ошибки “400 Bad Request”',
                ],
                foundBy: '@gross_franklin',
              },
            ],
          },
        ],
      },
      {
        idItem: 2,
        itemName: 'Warehouse',
        itemCommits: [],
      },
    ],
  },

  {
    id: 2,
    companyInfo: {
      companyName: 'BurnFish',
      companyMembers: [
        {
          companyMemberId: 1,
          companyMemberName: '@gross_franklin',
          companyMemberRole: 'тестировщик',
        },
        {
          companyMemberId: 2,
          companyMemberName: '@dsdemidov',
          companyMemberRole: 'администратор',
        },
        {
          companyMemberId: 3,
          companyMemberName: '@mihaylovvsjob',
          companyMemberRole: 'разработчик',
        },
      ],
      companyLinks: [
        {
          idLink: 1,
          nameLink: 'Notion',
          urlImgLink: '/src/assets/icons/notion.svg',
        },
        {
          idLink: 1,
          nameLink: 'Bitrix',
          urlImgLink: '/src/assets/icons/bitrix.svg',
        },
      ],
    },
    companyItems: [
      {
        idItem: 1,
        itemName: 'PojmajFishGame',
        itemCommits: [
          {
            idCommit: 1,
            versionCommit: '1.2.4',
            statusCommit: 'release',
            dateCommit: '12 янв. 2024г.',
            apkNameLink: 'dt_warehouse.v1.2.4.apk',
            bugFixesCommit: [
              'Исправлен баг, при котором если отфильтровать список на размещение по зоне, закрыть и открыть страницу, то текст в фильтре станет “Все”',
            ],
            featuresCommit: [
              'Добавлена страница “Размещение на транзитном складе”',
              'Добавленая сортировка по клиенту на странице “Сбор отказных деталей”',
            ],
            bugsFoundCommit: [
              {
                idBugFoundCommit: 1,
                statusBug: 'alert',
                titleBug: 'При сканировании партстикера появляется ошибка',
                descriptionBug:
                  'При сканировании партстикера “В ячейку” на странице “Размещение на транзитном складе” появляется ошибка 400 Bad Request',
                orderOfActionsBug: [
                  'Заходим на страницу “Размещение на транзитном складе”',
                  'Тапаем на кнопку “В ячейку”, открывается pop-up',
                  'С помощью ТСД сканируем партстикер 121473224/1',
                  'В  pop-up-е появляется текст ошибки “400 Bad Request”',
                ],
                foundBy: '@gross_franklin',
              },
              {
                idBugFoundCommit: 2,
                statusBug: 'critical',
                titleBug: 'При сканировании партстикера появляется ошибка',
                descriptionBug:
                  'При сканировании партстикера “В ячейку” на странице “Размещение на транзитном складе” появляется ошибка 400 Bad Request',
                orderOfActionsBug: [
                  'Заходим на страницу “Размещение на транзитном складе”',
                  'Тапаем на кнопку “В ячейку”, открывается pop-up',
                  'С помощью ТСД сканируем партстикер 121473224/1',
                  'В  pop-up-е появляется текст ошибки “400 Bad Request”',
                ],
                foundBy: '@gross_franklin',
              },
              {
                idBugFoundCommit: 3,
                statusBug: 'error',
                titleBug: 'При сканировании партстикера появляется ошибка',
                descriptionBug:
                  'При сканировании партстикера “В ячейку” на странице “Размещение на транзитном складе” появляется ошибка 400 Bad Request',
                orderOfActionsBug: [
                  'Заходим на страницу “Размещение на транзитном складе”',
                  'Тапаем на кнопку “В ячейку”, открывается pop-up',
                  'С помощью ТСД сканируем партстикер 121473224/1',
                  'В  pop-up-е появляется текст ошибки “400 Bad Request”',
                ],
                foundBy: '@gross_franklin',
              },
            ],
          },
        ],
      },
    ],
  },
]
