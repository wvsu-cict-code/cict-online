import cabacas from '../assets/faculty-and-staff/cabacas.png'
import decastro from '../assets/faculty-and-staff/decastro.png'
import elijorde from '../assets/faculty-and-staff/elijorde.png'
import gabawa from '../assets/faculty-and-staff/gabawa.jpg'
import sandig from'../assets/faculty-and-staff/sandig.png'
import subong from '../assets/faculty-and-staff/subong.png'
import cervantes from '../assets/faculty-and-staff/cervantes.png'
import defante from '../assets/faculty-and-staff/defante.png'
import feliprada from '../assets/faculty-and-staff/feliprada.jpg'
import gantala from '../assets/faculty-and-staff/gantala.jpg'
import sansolis from '../assets/faculty-and-staff/sansolis.jpg'
import sumido from '../assets/faculty-and-staff/sumido.jpg'
import concepcion from '../assets/faculty-and-staff/concepcion.png'
import dofitas from '../assets/faculty-and-staff/dofitas.png'
import ferrer from '../assets/faculty-and-staff/ferrer.jpg'
import gerardo from '../assets/faculty-and-staff/gerardo.jpg'
import sabayle from '../assets/faculty-and-staff/sabayle.png'
import ygot from'../assets/faculty-and-staff/ygot.png'
import dayot from'../assets/faculty-and-staff/dayot.png'
import dumpit from '../assets/faculty-and-staff/dumpit.png'
import figueroa from '../assets/faculty-and-staff/figueroa.jpg'
import osorio from '../assets/faculty-and-staff/osorio.png'
import secondes from '../assets/faculty-and-staff/secondes.png'

const shuffle = require('fisher-yates-shuffle')

const connector = (name, x, y) => ({
    title: name,
    ports: [
        { name: ' ', type: 'in' },
        { name: ' ', type: 'out' },
    ],
    color: '#EC1261',
    position: [x, y]
})

const mockSpecializations = [
    'Cyber, System and Network Security and Forensics',
    'Data Management',
    'Digital Systems Technology and Embedded Systems',
    'General Course of Study',
    'IT Entrepreneurship and Management',
    'Management Information Systems',
    'Networking, Information and Communications Technology',
    'Software Development',
    'System Administration',
    'Systems Analysis',
    'Web Design and Application Development',
    'Machine Learning',
    'Signal Processing',
    'Multimedia Systems'
]

const mockDescriptions = [
    '(Mock data only) adaptable, adventurous, affectionate, ambitious',
    '(Mock data only) amiable, compassionate, considerate, courageous',
    '(Mock data only) courteous, diligent, empathetic, exuberant',
    '(Mock data only) frank, generous, gregarious, impartial',
    '(Mock data only) intuitive, inventive, passionate, persistent',
    '(Mock data only) philosophical, practical, rational, reliable',
    '(Mock data only) resourceful, sensible, sincere, sympathetic',
    '(Mock data only) unassuming, witty',
]

const nodes = [
    {
        title: '(1) Dr. Joel T. De Castro',
        ports: [{ name: 'Dean', type: 'out' }],
        color: '#FFED18',
        position: [100, 100],
        description: shuffle(mockDescriptions)[0],
        specialization: `${shuffle(mockSpecializations)[0]}, ${shuffle(mockSpecializations)[3]}`,
        hobbies: 'None Specified Yet :(',
        photoUrl: decastro
    },
    connector('+', 338, 144),
    {
        title: '(3) Dr. Arnel N. Secondes',
        ports: [{ name: 'College Secretary', type: 'in' }],
        color: '#1565C0',
        position: [471, 49],
        description: shuffle(mockDescriptions)[0],
        specialization: `${shuffle(mockSpecializations)[0]}, ${shuffle(mockSpecializations)[3]}`,
        hobbies: 'None Specified Yet :(',
        photoUrl: secondes
    },
    {
        title: '(4) Dr. Luche Sabayle',
        ports: [{ name: 'Associate Dean', type: 'in' }],
        color: '#1565C0',
        position: [472, 249],
        description: shuffle(mockDescriptions)[0],
        specialization: `${shuffle(mockSpecializations)[0]}, ${shuffle(mockSpecializations)[3]}`,
        hobbies: 'None Specified Yet :(',
        photoUrl: sabayle
    },
    connector('+', 689.4629104616998, 136.6771159874604),
    {
        title: '(6) Ms. Jenibem Gantala',
        ports: [{ name: 'Graduate School Clerk / Technician', type: 'in' }],
        color: '#333',
        position: [734, 18],
        description: shuffle(mockDescriptions)[0],
        specialization: `${shuffle(mockSpecializations)[0]}, ${shuffle(mockSpecializations)[3]}`,
        hobbies: 'None Specified Yet :(',
        photoUrl: gantala
    },
    {
        title: '(7) Ms. Marian P. Figueroa',
        ports: [{ name: 'Admin Aide Clerk', type: 'in' }],
        color: '#333',
        position: [725, 295],
        description: 'She is very passionate about her work because she loves what she does, She have a steady source of motivation that drives her to do her best, this passion led her to challenge herself daily and learn new skills that helped her to do better work.',
        specialization: 'Entrepreneurship and Management',
        hobbies: 'Typing',
        photoUrl: figueroa
    },
    connector('+', 856.4629104616998, 150.6771159874604),
    connector('Coordinators', 1001.4629104616998, 70.6771159874604),
    connector('College Divisions', 972.4629104616998, 257.6771159874604),
    {
        title: '(11) Dr. Bobby D. Gerardo',
        ports: [{ name: 'VPAA, Graduate School Coordinator', type: 'in' }],
        color: '#1565C0',
        position: [1168.3821075795604, 148.13196786106622],
        description: shuffle(mockDescriptions)[0],
        specialization: `${shuffle(mockSpecializations)[0]}, ${shuffle(mockSpecializations)[3]}`,
        hobbies: 'None Specified Yet :(',
        photoUrl: gerardo
    },
    {
        title: '(12) Dr. Frank Elijorde',
        ports: [{ name: 'Research Coordinator', type: 'in' }],
        color: '#1565C0',
        position: [1365.8000180273216, 222.62610330240636],
        description: shuffle(mockDescriptions)[0],
        specialization: `${shuffle(mockSpecializations)[0]}, ${shuffle(mockSpecializations)[3]}`,
        hobbies: 'None Specified Yet :(',
        photoUrl: elijorde
    },
    {
        title: '(13) Prof. Cyreneo Dofitas Jr.',
        ports: [{ name: 'Research Coordinator', type: 'in' }],
        color: '#1565C0',
        position: [1476.8000180273216, 144.62610330240636],
        description: shuffle(mockDescriptions)[0],
        specialization: `${shuffle(mockSpecializations)[0]}, ${shuffle(mockSpecializations)[3]}`,
        hobbies: 'None Specified Yet :(',
        photoUrl: dofitas
    },
    {
        title: '(14) Mr. Evans Sansolis',
        ports: [
            { name: ' ', type: 'out' },
            { name: 'Computer Lab Supervisor', type: 'in' },
        ],
        color: '#1565C0',
        position: [1642.8000180273216, 210.62610330240636],
        description: shuffle(mockDescriptions)[0],
        specialization: `${shuffle(mockSpecializations)[0]}, ${shuffle(mockSpecializations)[3]}`,
        hobbies: 'None Specified Yet :(',
        photoUrl: sansolis
    },
    {
        title: '(15) Mr. Evan Sumido',
        ports: [{ name: 'Network Administrator', type: 'in' }],
        color: '#1565C0',
        position: [1780.7701672810529, 144.04401375016755],
        description: shuffle(mockDescriptions)[0],
        specialization: `${shuffle(mockSpecializations)[0]}, ${shuffle(mockSpecializations)[3]}`,
        hobbies: 'None Specified Yet :(',
        photoUrl: sumido
    },
    {
        title: '(16) Mr. Felizardo Ygot',
        ports: [
            { name: 'Computer Lab Personnel', type: 'in' },
            { name: ' ', type: 'out' },
        ],
        color: '#1565C0',
        position: [1746.8000180273216, 302.62610330240636],
        description: shuffle(mockDescriptions)[0],
        specialization: `${shuffle(mockSpecializations)[0]}, ${shuffle(mockSpecializations)[3]}`,
        hobbies: 'None Specified Yet :(',
        photoUrl: ygot
    },
    {
        title: '(17) Mr. Russel Laurence Ferrer',
        ports: [{ name: 'Computer Lab Personnel', type: 'in' }],
        color: '#1565C0',
        position: [1838.8000180273216, 399.62610330240636],
        description: shuffle(mockDescriptions)[0],
        specialization: `${shuffle(mockSpecializations)[0]}, ${shuffle(mockSpecializations)[3]}`,
        hobbies: 'None Specified Yet :(',
        photoUrl: ferrer
    },
    connector('Information Systems', 410.0081713775678, 487.48222780854667),
    connector('Information Technology', 701.8409722295378, 424.9625259981101),
    connector('Computer Science', 1134.766424838696, 497.02748872441464),
    connector('Entertainment and Multimedia Computing', 1553.819672975011, 496.02748872441464),
    connector('Masters in Information Technology', 2067.1093428365652, 492.06689234528784),
    {
        title: '(18) Engr. Karen Alinor Dumpit',
        ports: [
            { name: ' ', type: 'in' },
            { name: 'Department Head', type: 'out' },
        ],
        color: '#1565C0',
        position: [463.0081713775678, 567.4822278085467],
        description: 'Electronics and Communications Engineering Graduate',
        specialization: 'Logic Design, 2D Traditional Drawing',
        hobbies: 'Drawing, Nature Trip',
        photoUrl:dumpit
    },
    {
        title: '(19) Mrs. Cheryll Ann Feliprada',
        ports: [{ name: ' ', type: 'in' }],
        color: '#1565C0',
        position: [661.0081713775678, 647.4822278085467],
        description: shuffle(mockDescriptions)[0],
        specialization: `${shuffle(mockSpecializations)[0]}, ${shuffle(mockSpecializations)[3]}`,
        hobbies: 'None Specified Yet :(',
        photoUrl: feliprada
    },
    {
        title: '(20) Engr. Erwin Osorio',
        ports: [{ name: ' ', type: 'in' }],
        color: '#1565C0',
        position: [640.0081713775678, 707.4822278085467],
        description: shuffle(mockDescriptions)[0],
        specialization: `${shuffle(mockSpecializations)[0]}, ${shuffle(mockSpecializations)[3]}`,
        hobbies: 'None Specified Yet :(',
        photoUrl: osorio
    },
    {
        title: '(21) Dr. Beth Concepcion',
        ports: [{ name: ' ', type: 'in' }],
        color: '#1565C0',
        position: [609.0081713775678, 767.4822278085467],
        description: shuffle(mockDescriptions)[0],
        specialization: `${shuffle(mockSpecializations)[0]}, ${shuffle(mockSpecializations)[3]}`,
        hobbies: 'None Specified Yet :(',
        photoUrl: concepcion
    },
    {
        title: '(22) Mr. Shem Durst Elijah Sanding',
        ports: [{ name: ' ', type: 'in' }],
        color: '#1565C0',
        position: [563.0081713775678, 845.4822278085467],
        description: shuffle(mockDescriptions)[0],
        specialization: `${shuffle(mockSpecializations)[0]}, ${shuffle(mockSpecializations)[3]}`,
        hobbies: 'None Specified Yet :(',
        photoUrl: sandig
    },
    {
        title: '(23) Mr. Ralph Voltaire Dayot',
        ports: [
            { name: ' ', type: 'in' },
            { name: 'Department Head', type: 'out' },
        ],
        color: '#1565C0',
        position: [870.0081713775678, 561.4822278085467],
        description: shuffle(mockDescriptions)[0],
        specialization: `${shuffle(mockSpecializations)[0]}, ${shuffle(mockSpecializations)[3]}`,
        hobbies: 'None Specified Yet :(',
        photoUrl: dayot
    },
    {
        title: '(24) Engr. Lea Gabawa',
        ports: [{ name: ' ', type: 'in' }],
        color: '#1565C0',
        position: [1101.0081713775678, 634.4822278085467],
        description: shuffle(mockDescriptions)[0],
        specialization: `${shuffle(mockSpecializations)[0]}, ${shuffle(mockSpecializations)[3]}`,
        hobbies: 'None Specified Yet :(',
        photoUrl: gabawa
    },
    {
        title: '(25) Mr. Evans Sansolis',
        ports: [{ name: ' ', type: 'in' }],
        color: '#1565C0',
        position: [1065.0081713775678, 695.4822278085467],
        description: shuffle(mockDescriptions)[0],
        specialization: `${shuffle(mockSpecializations)[0]}, ${shuffle(mockSpecializations)[3]}`,
        hobbies: 'None Specified Yet :(',
        photoUrl: sansolis
    },
    {
        title: '(26) Mr. Paul Subong',
        ports: [{ name: ' ', type: 'in' }],
        color: '#1565C0',
        position: [1023.0081713775678, 761.4822278085467],
        description: shuffle(mockDescriptions)[0],
        specialization: `${shuffle(mockSpecializations)[0]}, ${shuffle(mockSpecializations)[3]}`,
        hobbies: 'None Specified Yet :(',
        photoUrl: subong
    },
    {
        title: '(27) Mr. Regin Cabacas',
        ports: [{ name: '(On Study Leave)', type: 'in' }],
        color: '#1565C0',
        position: [963.0081713775678, 826.4822278085467],
        description: 'Received his B.S. degree in Information Technology from West Visayas State University and Masters of Engineering from Kunsan National University, South Korea in 2010 and 2015, respectively. He is currently working toward the Doctors’s degree with the School of Computer, Information and Communication Engineering, Kunsan National University, Gunsan, South Korea.',
        specialization: 'Delay Tolerant Networks, Wireless Sensor Networks, Vehicular Ad-hoc Networks, Blockchain',
        hobbies: 'Reading manga (mecha, action, sports) and watching anime, travel blogs and food review shows.',
        photoUrl: cabacas
    },
    {
        title: '(28) Dr. Frank Elijorde',
        ports: [
            { name: ' ', type: 'in' },
            { name: 'Department Head', type: 'out' },
        ],
        color: '#1565C0',
        position: [1334.0081713775678, 556.4822278085467],
        description: shuffle(mockDescriptions)[0],
        specialization: `${shuffle(mockSpecializations)[0]}, ${shuffle(mockSpecializations)[3]}`,
        hobbies: 'None Specified Yet :(',
        photoUrl: elijorde
    },
    {
        title: '(29) Dr. Joel T. De Castro',
        ports: [{ name: ' ', type: 'in' }],
        color: '#1565C0',
        position: [1514.0081713775678, 627.4822278085467],
        description: shuffle(mockDescriptions)[0],
        specialization: `${shuffle(mockSpecializations)[0]}, ${shuffle(mockSpecializations)[3]}`,
        hobbies: 'None Specified Yet :(',
        photoUrl: decastro
    },
    {
        title: '(30) Dr. Ma. Luche Sabayle',
        ports: [{ name: ' ', type: 'in' }],
        color: '#1565C0',
        position: [1446.0081713775678, 691.4822278085467],
        description: shuffle(mockDescriptions)[0],
        specialization: `${shuffle(mockSpecializations)[0]}, ${shuffle(mockSpecializations)[3]}`,
        hobbies: 'None Specified Yet :(',
        photoUrl: sabayle
    },
    {
        title: '(31) Dr. Arnel N. Secondes',
        ports: [{ name: ' ', type: 'in' }],
        color: '#1565C0',
        position: [1380.0081713775678, 755.4822278085467],
        description: shuffle(mockDescriptions)[0],
        specialization: `${shuffle(mockSpecializations)[0]}, ${shuffle(mockSpecializations)[3]}`,
        hobbies: 'None Specified Yet :(',
        photoUrl: secondes
    },
    {
        title: '(32) Prof. Cyreneo Dofitas Jr.',
        ports: [{ name: ' ', type: 'in' }],
        color: '#1565C0',
        position: [1299.0081713775678, 824.4822278085467],
        description: shuffle(mockDescriptions)[0],
        specialization: `${shuffle(mockSpecializations)[0]}, ${shuffle(mockSpecializations)[3]}`,
        hobbies: 'None Specified Yet :(',
        photoUrl: dofitas
    },
    {
        title: '(33) Mr. Evan Sumido',
        ports: [
            { name: ' ', type: 'in' },
            { name: 'Department Head', type: 'out' },
        ],
        color: '#1565C0',
        position: [1820.0081713775678, 570.4822278085467],
        description: shuffle(mockDescriptions)[0],
        specialization: `${shuffle(mockSpecializations)[0]}, ${shuffle(mockSpecializations)[3]}`,
        hobbies: 'None Specified Yet :(',
        photoUrl: sumido
    },
    {
        title: '(34) Ms. Janine Defante',
        ports: [{ name: ' ', type: 'in' }],
        color: '#1565C0',
        position: [1879.0081713775678, 652.4822278085467],
        description: shuffle(mockDescriptions)[0],
        specialization: `${shuffle(mockSpecializations)[0]}, ${shuffle(mockSpecializations)[3]}`,
        hobbies: 'None Specified Yet :(',
        photoUrl: defante
    },
    {
        title: '(35) Dr. Bobby D. Gerardo',
        ports: [
            { name: ' ', type: 'in' },
            { name: 'VPAA, Department Head', type: 'out' },
        ],
        color: '#1565C0',
        position: [2431.008171377568, 551.4822278085467],
        description: shuffle(mockDescriptions)[0],
        specialization: `${shuffle(mockSpecializations)[0]}, ${shuffle(mockSpecializations)[3]}`,
        hobbies: 'None Specified Yet :(',
        photoUrl: gerardo
    },
    {
        title: '(36) Dr. Joel T. De Castro',
        ports: [{ name: ' ', type: 'in' }],
        color: '#1565C0',
        position: [2397.008171377568, 624.4822278085467],
        description: shuffle(mockDescriptions)[0],
        specialization: `${shuffle(mockSpecializations)[0]}, ${shuffle(mockSpecializations)[3]}`,
        hobbies: 'None Specified Yet :(',
        photoUrl: decastro
    },
    {
        title: '(37) Dr. Frank Elijorde',
        ports: [{ name: ' ', type: 'in' }],
        color: '#1565C0',
        position: [2359.008171377568, 686.4822278085467],
        description: shuffle(mockDescriptions)[0],
        specialization: `${shuffle(mockSpecializations)[0]}, ${shuffle(mockSpecializations)[3]}`,
        hobbies: 'None Specified Yet :(',
        photoUrl: elijorde
    },
    {
        title: '(38) Mr. Louie Cervantes',
        ports: [{ name: ' ', type: 'in' }],
        color: '#1565C0',
        position: [2306.008171377568, 750.4822278085467],
        description: 'Louie Cervantes is the IT Officer II of West Visayas State University and the Director of the Management Information System Office.',
        specialization: 'Information Engineering (Distributed Systems, Artificial Intelligence)',
        hobbies: 'Competitive Road Cycling',
        photoUrl: cervantes
    },
    {
        title: '(39) Dr. Arnel N. Secondes',
        ports: [{ name: ' ', type: 'in' }],
        color: '#1565C0',
        position: [2246.008171377568, 812.4822278085467],
        description: shuffle(mockDescriptions)[0],
        specialization: `${shuffle(mockSpecializations)[0]}, ${shuffle(mockSpecializations)[3]}`,
        hobbies: 'None Specified Yet :(',
        photoUrl: secondes
    },
    {
        title: '(40) Mr. Evan Sumido',
        ports: [{ name: ' ', type: 'in' }],
        color: '#1565C0',
        position: [2203.008171377568, 878.4822278085467],
        description: shuffle(mockDescriptions)[0],
        specialization: `${shuffle(mockSpecializations)[0]}, ${shuffle(mockSpecializations)[3]}`,
        hobbies: 'None Specified Yet :(',
        photoUrl: sumido
    },
    {
        title: '(41) Mr. Ralph Voltaire Dayot',
        ports: [{ name: ' ', type: 'in' }],
        color: '#1565C0',
        position: [2156.008171377568, 943.4822278085467],
        description: shuffle(mockDescriptions)[0],
        specialization: `${shuffle(mockSpecializations)[0]}, ${shuffle(mockSpecializations)[3]}`,
        hobbies: 'None Specified Yet :(',
        photoUrl: dayot
    },
    {
        title: '(42) Dr. Ma. Luche Sabayle',
        ports: [{ name: ' ', type: 'in' }],
        color: '#1565C0',
        position: [2118.008171377568, 1012.4822278085467],
        description: shuffle(mockDescriptions)[0],
        specialization: `${shuffle(mockSpecializations)[0]}, ${shuffle(mockSpecializations)[3]}`,
        hobbies: 'None Specified Yet :(',
        photoUrl: sabayle
    },
    {
        title: '(43) Mr. Regin C. Cabacas',
        ports: [{ name: '(On Study Leave)', type: 'in' }],
        color: '#1565C0',
        position: [2068.008171377568, 1081.4822278085467],
        description: 'Received his B.S. degree in Information Technology from West Visayas State University and Masters of Engineering from Kunsan National University, South Korea in 2010 and 2015, respectively. He is currently working toward the Doctors’s degree with the School of Computer, Information and Communication Engineering, Kunsan National University, Gunsan, South Korea.',
        specialization: 'Delay Tolerant Networks, Wireless Sensor Networks, Vehicular Ad-hoc Networks, Blockchain',
        hobbies: 'Reading manga (mecha, action, sports) and watching anime, travel blogs and food review shows.',
        photoUrl: cabacas
    },
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
    [22, 23],
    [14, 24],
    [14, 26],
    [14, 28],
    [14, 30],
    [14, 32],
    [25, 34],
    [35, 36],
    [35, 37],
    [35, 38],
    [35, 39],
    [27, 40], //
    [41, 42],
    [41, 43],
    [41, 44],
    [41, 45],
    [29, 46], //
    [47, 48],
    [47, 49],
    [47, 50],
    [47, 51],
    [31, 52], //
    [53, 54],
    [33, 55],
    [33, 56],
    [33, 57],
    [33, 58],
    [33, 59],
    [33, 60],
    [33, 61],
    [33, 62],
    [33, 63],
    [33, 64],
]

export {
    connector, nodes, connections
}