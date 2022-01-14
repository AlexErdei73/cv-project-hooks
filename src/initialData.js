export const initialState = {
  person: {
    name: "Alex Erdei",
    email: "mralexerdei@yahoo.co.uk",
    phone: "07496034244",
    webpage: "https://alexerdei73.github.io/landing-page/",
    personalInformation: `I think I am not alone with that I have started to learn new skills
       and improve my existing ones to change career. As a teacher I have excellent learning 
       abilities on my field and I have always been passionate about computers and programming
        generally, since I learned the Basic language at the age of 10 on ZX-81 computers. 
        Even during my secondary school years, I was building programs, which solved equations 
        of physical problems numerically. This is actually common practice in physics and 
        engineering, because most of the practical problems are difficult to solve or unsolvable 
        by analytical tools. During these years in England I also developed a software, which my 
        wife is still using in her current position, even if I have never worked in the UK as a 
        professional software developer. The idea came straightforwardly to learn web development 
        when we went to lockdown. I am still learning this, but my studies got to the point that 
        I think my knowledge is very useful for a company, which build web apps, especially if 
        they need front-end developer in a React based tech stack. Currently I am learning AWS 
        to get to the level with that BaaS technology to be able to use that instead of Google 
        Firebase in my Facebook clone. I am also planning to learn React Native, which would allow 
        me to develop a mobile app for the messenger part of my project. Why not to do it in a 
        professional environment?  For some of my portfolio project, please check my portfolio 
        page.
      Technical skills: 
                  ▪ HTML, CSS
                  ▪ JavaScript
                  ▪ npm, webpack
                  ▪ React
                  ▪ Automated unit testing by Jest
                  ▪ Firebase, Reactfire
                  ▪ Object Pascal, Delphi (open source Lazarus)
                  ▪ Python Numpy and Matplotlib (to solve physics problems with open source alternatives instead of Mathematica) 
                  ▪ Tkinter
                  ▪ Linux 
                  ▪ Git, GitHub `,
    isEditing: false,
  },
  education: [
    {
      school: "Obuda University John von Neumann Faculty of Informatics",
      dateFrom: "2003-09-01",
      dateTo: "2006-06-30",
      title: "IT Engineer",
      description: `It was a 4 years long IT engineering course with the apropriate exam levels.
We learned about hardware and software as well from the basics.The software started from the algorithms 
and data structures and went up towards OOP.The language of the training was Pascal that time. We also
learnt some Delphi, C, C++, Java and even some assembly programming of micro controllers.We had an excessive
subject about hardware architecture and we also learned about networking.Unfortunately I have only completed
3 years out of the 4 and never graduated with them.I've managed to find a junior developer position in Hungary
and I thought that I didn't need that lot's of theory to build up a career. I might have been right if the
recession had not happened in 2008, when I became redundant and I decided to come to the UK.`,
      isEditing: false,
    },
    {
      school: "Eötvös Lóránt University, Science Faculty",
      dateFrom: "1992-09-01",
      dateTo: "1997-06-30",
      title: "Degree in chemistry and physics",
      description: `I finished my studies with a very good qualification. It enables me to 
teach physics and chemistry.`,
      isEditing: false,
    },
  ],
  job: [
    {
      company: "Freelancer",
      dateFrom: "2009-03-16",
      dateTo: "2020-11-22",
      title: "Web Developer, Private Maths Tutor",
      description: `After I arrived to the UK, the focus was on learning English and settling down.
It wasn't easy, but I've managed to do it nicely. The only problem, that I needed to do jobs, which I
was over qualified for.I couldn't get a developer postion without speaking English very well.I picked
up some freelance work from time to time just to keep my skills alive and tried to learn new technologies.
During all these years the technology has improved a lot, so I decided to actualize my knowledge with a
free online course, which is the best available on the web.I've found The Odin Project, which I've
been doing actively since January 2020 before the first COVID-19 lockdown happened. I also did private
tutoring in math for Hungarian children until the lockdown happened. Currently I am working for a
company called Clipper Plc. My duties have nothing to do with the skills, which I have gained and 
been gaining, therefore it is time for a career change here in the UK. My learning potential is 
great, and I am convinced that someone, who could copy Facebook on his own and used to do software 
development professionally in the past for three years, should do the same here too.`,
      isEditing: false,
    },
    {
      company: "Citibank Zrt.",
      dateFrom: "2006-02-01",
      dateTo: "2009-01-31",
      title: "Software Developer",
      description: `My duties were very specific. I contributed to the coding of certain Delphi programs,
which mostly dealt with data analysis of risk assessment in the corporate and retail sector too. Because of
the nature of the business security and confidentiality was the first priority beside my coding abilities.`,
      isEditing: false,
    },
  ],
  select: -5,
  sectionType: "education",
  isModalShown: false,
};
