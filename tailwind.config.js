/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        '01': '590px',
        '02': '440px',
        '03': '500px',
        '05': '150%',
        '100': '230%'
      },
      backgroundImage: {
        hero: "url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1669209031/lazreb/hero_nw9ja9.png')",
        second: "linear-gradient(to right bottom, rgba(255, 120, 0, 0.7),rgba(255, 120, 0, 0.7)), url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1669195306/lazreb/abouthome_ma6irv.png')",
        stats: "url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1670473609/5mlog/Group_237788_qvqmns.png')",
        about2: "url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1670473609/5mlog/Group_237788_qvqmns.png')",
        about: "url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1670473629/5mlog/Group_237787_ewo8dg.png')",
        process: "url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1669904665/5mlog/Group_237749_crev6f.png')",
        footer: "url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1669904755/5mlog/Group_237743_dxp9ev.png')",
        service: "url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1670473612/5mlog/Group_237789_blmvss.png')",
        contact: "url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1670473623/5mlog/Group_237791_v5sgrf.png')",
        login: "linear-gradient(to right bottom, rgba(4, 43, 84, 0.9), rgba(4, 43, 84, 0.9)), url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1669646604/lazreb/login_p6smcr.jpg')",
        register:  "linear-gradient(to right bottom, rgba(4, 43, 84, 0.6), rgba(4, 43, 84, 0.9)), url('https://img.freepik.com/premium-photo/we-dont-take-time-granted-shot-delivery-man-standing-by-his-van_590464-2929.jpg?w=2000')",
        contact2: "url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1670473602/5mlog/Group_237774_ejqqdn.png')",
        faq: "url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1670473607/5mlog/Group_237790_ktkvic.png')",

      },
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'body': ['DM Sans', 'sans-serif'],
      'primary':['Montserrat', 'sans-serif'],
    }
  },
  plugins: [],
});