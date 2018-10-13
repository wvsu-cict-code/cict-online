const connector = (name, x, y) => {
    return {
        title: name,
        ports: [
            { name: ' ', type: 'in' },
            { name: ' ', type: 'out' },
        ],
        color: '#EC1261',
        position: [x, y]
    }
}

const nodes = [
    {
        title: '(1) Dr. Joel T. De Castro',
        ports: [{ name: 'Dean', type: 'out' }],
        color: '#FFED18',
        position: [100, 100]
    },
    connector('+', 338, 144),
    {
        title: '(3) Dr. Arnel N. Secondes',
        ports: [{ name: 'College Secretary', type: 'in' }],
        color: '#1565C0',
        position: [471, 49]
    },
    {
        title: '(4) Dr. Luche Sabayle',
        ports: [{ name: 'Associate Dean', type: 'in' }],
        color: '#1565C0',
        position: [472, 249]
    },
    connector('+', 689.4629104616998, 136.6771159874604),
    {
        title: '(6) Ms. Jenibem Gantala',
        ports: [{ name: 'Graduate School Clerk / Technician', type: 'in' }],
        color: '#333',
        position: [734, 18]
    },
    {
        title: '(7) Ms. Marian P. Figueroa',
        ports: [{ name: 'Admin Aide Clerk', type: 'in' }],
        color: '#333',
        position: [725, 295]
    },
    connector('+', 856.4629104616998, 150.6771159874604),
    connector('Coordinators', 1001.4629104616998, 70.6771159874604),
    connector('College Divisions', 972.4629104616998, 257.6771159874604),
    {
        title: '(11) Dr. Bobby D. Gerardo',
        ports: [{ name: 'VPAA, Graduate School Coordinator', type: 'in' }],
        color: '#1565C0',
        position: [1168.3821075795604, 148.13196786106622]
    },
    {
        title: '(12) Dr. Frank Elijorde',
        ports: [{ name: 'Research Coordinator', type: 'in' }],
        color: '#1565C0',
        position: [1365.8000180273216, 222.62610330240636]
    },
    {
        title: '(13) Prof. Cyreneo Dofitas Jr.',
        ports: [{ name: 'Research Coordinator', type: 'in' }],
        color: '#1565C0',
        position: [1476.8000180273216, 144.62610330240636]
    },
    {
        title: '(14) Mr. Evans Sansolis',
        ports: [
            { name: ' ', type: 'out' },
            { name: 'Computer Lab Supervisor', type: 'in' },
        ],
        color: '#1565C0',
        position: [1642.8000180273216, 210.62610330240636]
    },
    {
        title: '(15) Mr. Evan Sumido',
        ports: [{ name: 'Computer Lab Supervisor', type: 'in' }],
        color: '#1565C0',
        position: [1780.7701672810529, 144.04401375016755]
    },
    {
        title: '(16) Mr. Felizardo Ygot',
        ports: [
            { name: 'Computer Lab Personnel', type: 'in' },
            { name: ' ', type: 'out' },
        ],
        color: '#1565C0',
        position: [1746.8000180273216, 302.62610330240636]
    },
    {
        title: '(17) Mr. Russel Laurence Ferrer',
        ports: [{ name: 'Computer Lab Personnel', type: 'in' }],
        color: '#1565C0',
        position: [1838.8000180273216, 399.62610330240636]
    },
    connector('+', 751.4629104616998,420.6771159874604),
]

const connections = [
    [0, 1],
    [2, 3],
    [2, 4],
    [2, 5],
    [6, 7],
    [6, 8],
    [5, 10],
    [10, 13],
    [10, 11],
    [12, 15],
    [12, 16],
    [12, 17],
    [19, 12],
    [12, 20],
    [21, 18],
    [22, 23]

]

export {
    connector, nodes, connections
}