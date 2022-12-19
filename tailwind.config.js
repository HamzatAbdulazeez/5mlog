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
        pick: "linear-gradient(to right ,rgba(33, 40, 33, 1), rgba(62, 78, 62, .9), rgba(62, 78, 62, .5)), url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1671294039/5mlog/pick_cdmyq4.jpg')",
        freight: "linear-gradient(to right ,rgba(33, 40, 33, 1), rgba(62, 78, 62, .9), rgba(62, 78, 62, .5)), url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1671307784/5mlog/freight_1_yqguno.jpg')",
        inter: "linear-gradient(to right ,rgba(33, 40, 33, 1), rgba(62, 78, 62, .9), rgba(62, 78, 62, .5)), url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1671369635/5mlog/logistic_nl0loq.jpg')",
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
        air: "linear-gradient(to right ,rgba(33, 40, 33, 1), rgba(62, 78, 62, .6), rgba(62, 78, 62, 0)), url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1671275590/5mlog/Rectangle_19631_mkesac.png')",
        ocean: "linear-gradient(to right ,rgba(33, 40, 33, 1), rgba(62, 78, 62, .6), rgba(62, 78, 62, 0)), url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1671275590/5mlog/Rectangle_19587_xdzbln.png')",
        ware: "linear-gradient(to right ,rgba(33, 40, 33, 1), rgba(62, 78, 62, .6), rgba(62, 78, 62, 0)), url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1671275590/5mlog/Rectangle_19630_ewlard.png')",
        log: "linear-gradient(to right ,rgba(33, 40, 33, 1), rgba(62, 78, 62, .6), rgba(62, 78, 62, 0)), url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1671275590/5mlog/Rectangle_19590_fegrzi.png')",

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