(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{18:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n(1),c=n.n(a),i=n(4),r=n.n(i),s=n(5),l=n(6),d=n(20),m=function(e){var t=Object(a.useState)(e.isEditing),n=Object(s.a)(t,2),c=n[0],i=n[1],r=Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row border border-dark",children:Object(o.jsx)("div",{className:"col-md-12 m-4",children:Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i(!1)},children:[Object(o.jsxs)("div",{className:"row w-100",children:[Object(o.jsxs)("div",{className:"form-group col-md-4",children:[Object(o.jsx)("label",{htmlFor:"name",children:"Name"}),Object(o.jsx)("input",{type:"text",className:"form-control",name:"name",id:"name",value:e.person.name,onChange:e.onChange,required:!0})]}),Object(o.jsxs)("div",{className:"form-group col-md-4",children:[Object(o.jsx)("label",{htmlFor:"email",children:"Email"}),Object(o.jsx)("input",{type:"email",className:"form-control",name:"email",id:"email",value:e.person.email,onChange:e.onChange,required:!0,pattern:!0})]}),Object(o.jsxs)("div",{className:"form-group col-md-4",children:[Object(o.jsx)("label",{htmlFor:"phone",children:"Phone Number"}),Object(o.jsx)("input",{type:"text",className:"form-control",name:"phone",id:"phone",value:e.person.phone,onChange:e.onChange})]})]}),Object(o.jsx)("div",{className:"row w-100",children:Object(o.jsxs)("div",{className:"form-group col-md-12",children:[Object(o.jsx)("label",{htmlFor:"personalInformation",children:"Personal Information"}),Object(o.jsx)("textarea",{className:"form-control",name:"personalInformation",id:"personalInformation",cols:"30",rows:"10",value:e.person.personalInformation,onChange:e.onChange,required:!0})]})}),Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("button",{type:"submit",className:"btn btn-primary btn-sm m-3",children:"Submit"})})]})})})}),l=Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{className:"text-center",children:e.person.name}),Object(o.jsx)("div",{className:"text-center",children:e.person.email}),Object(o.jsx)("div",{className:"text-center",children:e.person.phone}),Object(o.jsx)("br",{}),Object(o.jsxs)("div",{className:"row border border-dark",children:[Object(o.jsx)("h4",{className:"text-left bg-dark text-light w-100",children:"Personal Information"}),Object(o.jsx)("p",{children:e.person.personalInformation})]}),Object(o.jsx)("button",{className:"btn btn-secondary btn-sm m-2",onClick:function(e){i(!0)},children:Object(o.jsx)(d.a,{})})]});return c&&r||l},h=n(21),b=function(e){var t=Object(a.useState)(e.education.isEditing),n=Object(s.a)(t,2),c=n[0],i=n[1],r=Object(o.jsx)("div",{className:"col-md-12 m-4",children:Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i(!1)},children:[Object(o.jsxs)("div",{className:"row w-100",children:[Object(o.jsxs)("div",{className:"form-group col-3",children:[Object(o.jsx)("label",{htmlFor:"title",children:"Title"}),Object(o.jsx)("input",{type:"text",className:"form-control",name:"title",id:"title",value:e.education.title,onChange:function(t){return e.onChange(e.id,t)},required:!0})]}),Object(o.jsxs)("div",{className:"form-group col-3",children:[Object(o.jsx)("label",{htmlFor:"school",children:"School"}),Object(o.jsx)("input",{type:"text",className:"form-control",name:"school",id:"school",value:e.education.school,onChange:function(t){return e.onChange(e.id,t)},required:!0})]}),Object(o.jsxs)("div",{className:"form-group col-3",children:[Object(o.jsx)("label",{htmlFor:"dateFrom",children:"Date From"}),Object(o.jsx)("input",{type:"date",className:"form-control",name:"dateFrom",id:"dateFrom",value:e.education.dateFrom,onChange:function(t){return e.onChange(e.id,t)},required:!0})]}),Object(o.jsxs)("div",{className:"form-group col-3",children:[Object(o.jsx)("label",{htmlFor:"dateTo",children:"Date To"}),Object(o.jsx)("input",{type:"date",className:"form-control",name:"dateTo",id:"dateTo",value:e.education.dateTo,onChange:function(t){return e.onChange(e.id,t)},required:!0})]})]}),Object(o.jsx)("div",{className:"row w-100",children:Object(o.jsxs)("div",{className:"form-group col-12",children:[Object(o.jsx)("label",{htmlFor:"description",children:"description"}),Object(o.jsx)("textarea",{className:"form-control",name:"description",id:"description",cols:"30",rows:"10",value:e.education.description,onChange:function(t){return e.onChange(e.id,t)}})]})}),Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("button",{type:"submit",className:"btn btn-primary btn-sm m-3",children:"Submit"})})]})}),l=Object(o.jsxs)("div",{className:"col-md-12",children:[Object(o.jsx)("h4",{children:e.education.title}),Object(o.jsx)("div",{className:"text-left",children:Object(o.jsx)("strong",{children:"".concat(e.education.school," (").concat(e.education.dateFrom," - ").concat(e.education.dateTo,")")})}),Object(o.jsx)("p",{children:e.education.description}),Object(o.jsx)("button",{className:"btn btn-secondary btn-sm m-2",onClick:function(e){i(!0)},children:Object(o.jsx)(d.a,{})}),e.isDeleteButton&&Object(o.jsx)("button",{className:"btn btn-secondary btn-sm m-2",onClick:function(){return e.onDelete(e.id)},children:Object(o.jsx)(h.a,{})})]});return c&&r||l},j=function(e){var t=Object(o.jsx)("div",{className:"col-md-12 m-4",children:Object(o.jsxs)("form",{onSubmit:function(t){return e.onSubmit(t,e.id)},children:[Object(o.jsxs)("div",{className:"row w-100",children:[Object(o.jsxs)("div",{className:"form-group col-3",children:[Object(o.jsx)("label",{htmlFor:"title",children:"Title"}),Object(o.jsx)("input",{type:"text",className:"form-control",name:"title",id:"title",value:e.job.title,onChange:function(t){return e.onChange(e.id,t)},required:!0})]}),Object(o.jsxs)("div",{className:"form-group col-3",children:[Object(o.jsx)("label",{htmlFor:"company",children:"Company"}),Object(o.jsx)("input",{type:"text",className:"form-control",name:"company",id:"company",value:e.job.company,onChange:function(t){return e.onChange(e.id,t)},required:!0})]}),Object(o.jsxs)("div",{className:"form-group col-3",children:[Object(o.jsx)("label",{htmlFor:"dateFrom",children:"Date From"}),Object(o.jsx)("input",{type:"date",className:"form-control",name:"dateFrom",id:"dateFrom",value:e.job.dateFrom,onChange:function(t){return e.onChange(e.id,t)},required:!0})]}),Object(o.jsxs)("div",{className:"form-group col-3",children:[Object(o.jsx)("label",{htmlFor:"dateTo",children:"Date To"}),Object(o.jsx)("input",{type:"date",className:"form-control",name:"dateTo",id:"dateTo",value:e.job.dateTo,onChange:function(t){return e.onChange(e.id,t)},required:!0})]})]}),Object(o.jsx)("div",{className:"row w-100",children:Object(o.jsxs)("div",{className:"form-group col-12",children:[Object(o.jsx)("label",{htmlFor:"description",children:"description"}),Object(o.jsx)("textarea",{className:"form-control",name:"description",id:"description",cols:"30",rows:"10",value:e.job.description,onChange:function(t){return e.onChange(e.id,t)}})]})}),Object(o.jsx)("div",{className:"row w-100",children:Object(o.jsx)("button",{type:"submit",className:"btn btn-primary btn-sm m-3",children:"Submit"})})]})}),n=Object(o.jsxs)("div",{className:"col-md-12",children:[Object(o.jsx)("h4",{children:e.job.title}),Object(o.jsx)("div",{className:"text-left",children:Object(o.jsx)("strong",{children:"".concat(e.job.company," (").concat(e.job.dateFrom," - ").concat(e.job.dateTo,")")})}),Object(o.jsx)("p",{children:e.job.description}),Object(o.jsx)("button",{className:"btn btn-secondary btn-sm m-2",onClick:function(){return e.onEdit(e.id)},children:Object(o.jsx)(d.a,{})}),e.isDeleteButton&&Object(o.jsx)("button",{className:"btn btn-secondary btn-sm m-2",onClick:function(){return e.onDelete(e.id)},children:Object(o.jsx)(h.a,{})})]});return e.job.isEditing&&t||n},u=function(){var e=function(){var e=h(r);e.education.splice(r.select,1),e.isModalShown=!1,d(e)},t=function(){var e=h(r);e.job.splice(r.select,1),e.isModalShown=!1,d(e)},n={person:{name:"Alex Erdei",email:"mralexerdei@yahoo.co.uk",phone:"07496034244",personalInformation:"Currently I am working on a project, \nwhich can automate the administration and the quality control procedures \nfor a cleaning company in the hotel industry.The ideas come partially from me, \nthe execution is my work guided by the feedback from my manager. \nRecently I have got the idea for a late career change to achieve my full potential\nand use my stronger mathematics and problem solving skills.I have realized that \nI should go back to the field,which I had formally studied and used to work in,but\nunfortunately I have never completed my formal education fully.In the current situation\nI have to wait to sell the project to the company,but I do not mind it,because solving \nproblems by computers is good fun.I realized that I should learn webdevelopment, because \ncurrently most of the software developer jobs are in it.I am looking for a company, which is\nhappy to use my web developer skills and in favour can provide intersting, function rich\nprojects, so I can get payed for doing something, which I love.My skills in web development\nare reaching from Linux, git, gitHub, HTML, CSS, Bootstrap, JavaScript ES5, ES6, TypeScript,\nnpm, webpack, Angular, React. My toolset is growing.",isEditing:!1},education:[{school:"Obuda University John von Neumann Faculty of Informatics",dateFrom:"2003-09-01",dateTo:"2006-06-30",title:"IT Engineer",description:"It was a 4 years long IT engineering course with the apropriate exam levels.\nWe learned about hardware and software as well from the basics.The software started from the algorithms \nand data structures and went up towards OOP.The language of the training was Pascal that time. We also\nlearnt some Delphi, C, C++, Java and even some assembly programming of micro controllers.We had an excessive\nsubject about hardware architecture and we also learned about networking.Unfortunately I have only completed\n3 years out of the 4 and never graduated with them.I've managed to find a junior developer position in Hungary\nand I thought that I didn't need that lot's of theory to build up a career. I might have been right if the\nrecession had not happened in 2008, when I became redundant and I decided to come to the UK.",isEditing:!1},{school:"E\xf6tv\xf6s L\xf3r\xe1nt University, Science Faculty",dateFrom:"1992-09-01",dateTo:"1997-06-30",title:"Degree in chemistry and physics",description:"I finished my studies with a very good qualification. It enables me to \nteach physics and chemistry.",isEditing:!1}],job:[{company:"Freelancer",dateFrom:"2009-03-16",dateTo:"2020-11-22",title:"Web Developer",description:"After I arrived to the UK, the focus was on learning English and settling down.\nIt wasn't easy, but I've managed to do it nicely. The only problem, that I needed to do jobs, which I\nwas over qualified for.I couldn't get a developer position without speaking English very well.I picked\nup some freelance work from time to time just to keep my skills alive and tried to learn new technologies.\nDuring all these years the technology has improved a lot, so I decided to actualize my knowledge with a\nfree online course, which is the best available on the web.I've found The Odin Project, which I've\nbeen doing actively since January 2020 before the first COVID-19 lockdown happened.",isEditing:!1},{company:"Citibank Zrt.",dateFrom:"2006-02-01",dateTo:"2009-01-31",title:"Software Developer",description:"My duties were very specific. I contributed to the coding of certain Delphi programs,\nwhich mostly dealt with data analysis of risk assessment in the corporate and retail sector too. Because of\nthe nature of the business security and confidentiality was the first priority.",isEditing:!1}],isModalShown:!1,select:1,onDelete:e},c=Object(a.useState)(function(){if(localStorage.getItem("state"))return JSON.parse(localStorage.getItem("state"))}()||n),i=Object(s.a)(c,2),r=i[0],d=i[1],h=function(e){return JSON.parse(JSON.stringify(e))},u=function(e,t){var n=t.target,o=n.name,a=n.value,c=h(r);c.education[e][o]=a,d(c)},p=function(e,t){var n=t.target,o=n.name,a=n.value,c=h(r);c.job[e][o]=a,d(c)},x=function(e){var t=h(r);t.job[e].isEditing=!0,d(t)},f=function(e,t){var n=h(r);n.select=e,n.onDelete=t,n.isModalShown=!0,d(n),g()},g=function(){localStorage.setItem("state",JSON.stringify(r))};return Object(a.useEffect)((function(){g()}),[r]),Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{className:"bg-info text-center text-light p-2",children:"CV Project"}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-1"}),Object(o.jsxs)("div",{className:"col-10 border-secondary shadow",children:[Object(o.jsx)(m,{person:r.person,onChange:function(e){e.preventDefault();var t=e.target,n=t.name,o=t.value,a=h(r);a.person[n]=o,d(a)}}),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("div",{className:"row border border-dark",children:[Object(o.jsx)("h4",{className:"text-left bg-dark text-light w-100",children:"Education"}),r.education.map((function(t,n){return Object(o.jsx)(b,{id:n,education:t,onDelete:function(t){f(t,e)},onChange:u,isDeleteButton:r.education.length>1},n)}))]}),Object(o.jsx)("button",{type:"submit",className:"btn btn-secondary btn-sm m-2",onClick:function(){var e=h(r);e.education.push({school:"",dateFrom:"",dateTo:"",title:"",description:"",isEditing:!0}),d(e)},children:"+"}),Object(o.jsxs)("div",{className:"row border border-dark",children:[Object(o.jsx)("h4",{className:"text-left bg-dark text-light w-100",children:"Work History"}),r.job.map((function(e,n){return Object(o.jsx)(j,{id:n,job:e,onDelete:function(e){f(e,t)},onChange:p,onEdit:x,onSubmit:function(e,t){return function(e,t){e.preventDefault();var n=h(r);n.job[t].isEditing=!1,d(n)}(e,t)},isDeleteButton:r.job.length>1},n)}))]}),Object(o.jsx)("button",{type:"submit",className:"btn btn-secondary btn-sm m-2",onClick:function(){var e=h(r);e.job.push({company:"",dateFrom:"",dateTo:"",title:"",description:"",isEditing:!0}),d(e)},children:"+"}),Object(o.jsxs)(l.a,{show:r.isModalShown,dialogClassName:"primaryModal",children:[Object(o.jsx)(l.a.Header,{className:"bg-dark",children:Object(o.jsx)("h2",{className:"text-warning text-center p-2",children:"Proceeding with Delete"})}),Object(o.jsxs)(l.a.Body,{children:[Object(o.jsx)("p",{children:"Are you sure, you want to delete the section permanently?"}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-md-3",children:Object(o.jsx)("button",{className:"btn btn-primary btn-sm m-2",onClick:function(){var e=h(r);e.isModalShown=!1,d(e)},children:"Cancel"})}),Object(o.jsx)("div",{className:"col-md-3"}),Object(o.jsx)("div",{className:"col-md-3"}),Object(o.jsx)("div",{className:"col-md-3",children:Object(o.jsx)("button",{className:"btn btn-warning btn-sm m-2",onClick:r.onDelete,children:"Proceed"})})]})]}),Object(o.jsx)(l.a.Footer,{})]})]})]})]})]})};n(17);r.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(u,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.6c2bfcc4.chunk.js.map