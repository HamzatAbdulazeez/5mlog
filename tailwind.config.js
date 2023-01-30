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
        '100': '230%',
        '18': '74px'
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
        login: "linear-gradient(to right bottom, rgba(4, 43, 84, 0.7), rgba(4, 43, 84, 0.7)), url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1673885325/5mlog/procure_hpvpmx.jpg')",
        register:  "linear-gradient(to right bottom, rgba(4, 43, 84, 0.6), rgba(4, 43, 84, 0.9)), url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1671811441/5mlog/login_lg2kib.jpg')",
        contact2: "url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1670473602/5mlog/Group_237774_ejqqdn.png')",
        faq: "url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1670473607/5mlog/Group_237790_ktkvic.png')",
        air: "linear-gradient(to right ,rgba(33, 40, 33, 1), rgba(62, 78, 62, .6), rgba(62, 78, 62, 0)), url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1671792754/5mlog/airplane_svvntk.png')",
        ocean: "linear-gradient(to right ,rgba(33, 40, 33, 1), rgba(62, 78, 62, .6), rgba(62, 78, 62, 0)), url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1671275590/5mlog/Rectangle_19587_xdzbln.png')",
        ware: "linear-gradient(to right ,rgba(33, 40, 33, 1), rgba(62, 78, 62, .6), rgba(62, 78, 62, 0)), url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1671275590/5mlog/Rectangle_19630_ewlard.png')",
        log: "linear-gradient(to right ,rgba(33, 40, 33, 1), rgba(62, 78, 62, .6), rgba(62, 78, 62, 0)), url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1671800768/5mlog/log_x4spd8.jpg')",
        shop: "linear-gradient(to right ,rgba(33, 40, 33, .7), rgba(62, 78, 62, .6), rgba(62, 78, 62, .4)), url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1672139239/5mlog/Group_237790_1_1_kwp6bd.png')",
        track: "linear-gradient(to right ,rgba(33, 40, 33, 0), rgba(62, 78, 62, 0), rgba(62, 78, 62, 0)), url('https://i.pinimg.com/736x/92/af/83/92af838d576c73138a52b5ad29412347--high-resolution-wallpapers-desktop-wallpapers.jpg')",
        users: "linear-gradient(to right ,rgba(33, 40, 33, 1), rgba(62, 78, 62, .9), rgba(62, 78, 62, .4)), url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1673087813/5mlog/customer_xp35pn.jpg')",
        partner: "linear-gradient(to right ,rgba(33, 40, 33, 1), rgba(62, 78, 62, .9), rgba(62, 78, 62, .4)), url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1673087782/5mlog/vendor_pheiux.jpg')",
        mlog: "linear-gradient(to right ,rgba(33, 40, 33, 1), rgba(62, 78, 62, .6), rgba(62, 78, 62, 0)), url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1674118621/5mlog/5mlog-1_rsmdx7.png')",
        vehicle: "linear-gradient(to right ,rgba(33, 40, 33, 1), rgba(62, 78, 62, .6), rgba(62, 78, 62, 0)), url('https://blog.ipleaders.in/wp-content/uploads/2017/04/BV-Acharya-7.jpg')",

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