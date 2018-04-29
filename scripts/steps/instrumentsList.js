
const instrumentList = [
    {
        instrument : 'Пила дискова(HW)',
        process: [
            { washing:'Миття', status: true },
            { deterioration:'Оцінка зносу', status: false },
            { sharpening:'Загострення', status: false },
            { balansing:'Балансування', status: true },
            { control:'Контроль', status: true },
            { leftover: 'Залишок ресурсу', status: true }
        ],
        description: 'Lorem Ipsum',
        imageUrl: 'l1'
    },
    {
        instrument : 'Пили для багатопилу',
        process: [
            { washing:'Миття', status: true },
            { deterioration:'Оцінка зносу', status: true },
            { sharpening:'Загострення', status: true },
            { balansing:'Балансування', status: false },
            { control:'Контроль', status: true },
            { leftover: 'Залишок ресурсу', status: true }
        ],
        description: 'Lorem Ipsum',
        imageUrl: 'l2'
    },
    {
        instrument : 'Пили дисковi(HSS)',
        process: [
            { washing:'Миття', status: true },
            { deterioration:'Оцінка зносу', status: true },
            { sharpening:'Загострення', status: true },
            { balansing:'Балансування', status: true },
            { control:'Контроль', status: true },
            { leftover: 'Залишок ресурсу', status: false }
        ],
        description: 'Lorem Ipsum',
        imageUrl: 'l1'
    },
    {
        instrument : 'Стругальні ножі (HW/HSS)',
        process: [
            { washing:'Миття', status: true },
            { deterioration:'Оцінка зносу', status: true },
            { sharpening:'Загострення', status: false },
            { balansing:'Балансування', status: true },
            { control:'Контроль', status: true },
            { leftover: 'Залишок ресурсу', status: true }
        ],
        description: 'Lorem Ipsum',
        imageUrl: 'l2'
    },
    {
        instrument : 'Профільні ножі (HW/HSS)',
        process: [
            { washing:'Миття', status: true },
            { deterioration:'Оцінка зносу', status: false },
            { sharpening:'Загострення', status: false },
            { balansing:'Балансування', status: true },
            { control:'Контроль', status: true },
            { leftover: 'Залишок ресурсу', status: true }
        ],
        description: 'Lorem Ipsum',
        imageUrl: 'l1'
    },
    {
        instrument : 'Кінцеві фрези (DIA/HW/HSS)',
        process: [
            { washing:'Миття', status: true },
            { deterioration:'Оцінка зносу', status: true },
            { sharpening:'Загострення', status: false },
            { balansing:'Балансування', status: true },
            { control:'Контроль', status: false },
            { leftover: 'Залишок ресурсу', status: true }
        ],
        description: 'Lorem Ipsum',
        imageUrl: 'l2'
    },
    {
        instrument : 'Насадні фрези (DIA/HW/HSS)',
        process: [
            { washing:'Миття', status: false },
            { deterioration:'Оцінка зносу', status: true },
            { sharpening:'Загострення', status: false },
            { balansing:'Балансування', status: true },
            { control:'Контроль', status: true },
            { leftover: 'Залишок ресурсу', status: false }
        ],
        description: 'Lorem Ipsum',
        imageUrl: 'l3'
    },
]

export default instrumentList