import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaptopIcon from '@mui/icons-material/Laptop';
import DesignServicesIcon from '@mui/icons-material/DesignServices';

const resumeData = {
    name: 'Cyrus Raj Gautam',
    title: 'UI developer and Data Analyst',
    birthday: '20th June, 1999',
    email: 'gautam.cyrus@gmail.com',
    address: '6540 Burlington Avenue',
    phone: '7789170967',

    socials: {
        Facebook: {
            link:'https://facebook.com',
            text: 'MyFacebook',
            Icon: <FacebookIcon />
        },
        LinkedIn: {
            link:'https://linkedIn.com',
            text: 'MylinkedIn',
            Icon: <LinkedInIcon />
        },
        Github: {
            link:'https://github.com',
            text: 'Mygithub',
            Icon: <GitHubIcon />
        },

    },
    about: 'This is a test Test test tstets ts dadasmnvndbvskjdhdkvs vssso sof soi sofigsufgs ifgsiuf sigfusdfg isdug fiudsgfsiufg sdiu fisdfg sdifgsdiufg sdif gsidfugsiufdg sifgsidfgsiu fg sdiuf sifsiufg sidufgsi fgsiuf sdifgsiufgsd iufg sifgsiufgsdfgwe fsfhap fsogv7s fafpsfg sdivdgv 87wifksbjd gfwe87 cb sdicygsdid gs8f fl gdg;r tilh',

    experiences: [
        {
            title:'Work 1',
            date: '2018-present',
            description: 'This is a test Test test tstets ts dadasmnvndbvskjdhdkvs vssso sof soi sofigsufgs ifgsiuf sigfusdfg isdug fiudsgfsiufg sdiu fisdfg sdifgsdiufg sdif gsidfugsiufdg sifgsidfgsiu fg sdiuf sifsiufg sidufgsi fgsiuf sdi',
            
        },
        {
            title:'Work 2',
            date: '2015-2018',
            description: 'This is a test Test test tstets ts dadasmnvndbvskjdhdkvs vssso sof soi sofigsufgs ifgsiuf sigfusdfg isdug fiudsgfsiufg sdiu fisdfg sdifgsdiufg sdif gsidfugsiufdg sifgsidfgsiu fg sdiuf sifsiufg sidufgsi fgsiuf sdi',
            
        },
        {
            title:'Work 3',
            date: '2014-2015',
            description: 'This is a test Test test tstets ts dadasmnvndbvskjdhdkvs vssso sof soi sofigsufgs ifgsiuf sigfusdfg isdug fiudsgfsiufg sdiu fisdfg sdifgsdiufg sdif gsidfugsiufdg sifgsidfgsiu fg sdiuf sifsiufg sidufgsi fgsiuf sdi',
            
        },
        {
            title:'Work 4',
            date: '2013-2014',
            description: 'This is a test Test test tstets ts dadasmnvndbvskjdhdkvs vssso sof soi sofigsufgs ifgsiuf sigfusdfg isdug fiudsgfsiufg sdiu fisdfg sdifgsdiufg sdif gsidfugsiufdg sifgsidfgsiu fg sdiuf sifsiufg sidufgsi fgsiuf sdi',
            
        },
    ],

    education: [
        {
            title:'Education 1',
            date: '2018-2022',
            description: 'This is a test Test test tstets ts dadasmnvndbvskjdhdkvs vssso sof soi sofigsufgs ifgsiuf sigfusdfg isdug fiudsgfsiufg sdiu fisdfg sdifgsdiufg sdif gsidfugsiufdg sifgsidfgsiu fg sdiuf sifsiufg sidufgsi fgsiuf sdi',
            
        },
        {
            title:'Education 2',
            date: '2015-2018',
            description: 'This is a test Test test tstets ts dadasmnvndbvskjdhdkvs vssso sof soi sofigsufgs ifgsiuf sigfusdfg isdug fiudsgfsiufg sdiu fisdfg sdifgsdiufg sdif gsidfugsiufdg sifgsidfgsiu fg sdiuf sifsiufg sidufgsi fgsiuf sdi',
            
        },
        {
            title: 'Education 3',
            date: '2014-2015',
            description: 'This is a test Test test tstets ts dadasmnvndbvskjdhdkvs vssso sof soi sofigsufgs ifgsiuf sigfusdfg isdug fiudsgfsiufg sdiu fisdfg sdifgsdiufg sdif gsidfugsiufdg sifgsidfgsiu fg sdiuf sifsiufg sidufgsi fgsiuf sdi',
            
        },
        
    ],
    services: [
        {
            title: 'Web Dev',
            description: 'I have been Web Dev for 2 years',
            icon: <LaptopIcon />
        },
        {
            title: 'Graphic Designer',
            description: 'I have been Web Dev for 2 years',
            icon: <DesignServicesIcon />
        },
        {
            title: '',
            description: 'I have been Web Dev for 2 years',
            icon: <LaptopIcon />
        }
    ],
    skills: [
        {
            title: 'FRONT-END',
            description: [
                'ReactJS',
                'JavaScript',
                'Material UI',
                'Bootstrap',
            ]
        },
        {
            title: 'Graphic Design',
            description: [
                'Illustrator',
                'Photoshop'
            ]
        },
        {
            title: 'Databases',
            description: [
                'Sql'
            ]
        }
    ]
}

export default resumeData
