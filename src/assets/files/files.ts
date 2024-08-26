import Logo from '../../assets/logo.svg';
import Stroke from '../../assets/stroke.svg';
import Message from '../../assets/message.svg';
import Points from '../../assets/points.svg';
import Epalanga from '../../assets/epalanga_wallpaper.png';
import Comment from '../../assets/Comment.svg';
import Share from '../../assets/Share.svg';
import BookMarks from '../../assets/Bookmark.svg';
import Home from '../../assets/house.svg';
import Search from '../../assets/search.svg';
import Video from '../../assets/union.svg';


import user1 from '../../assets/users/user_1_.jpg';;
import user2 from '../../assets/users/user_2_.jpg';
import user3 from '../../assets/users/user_3_.jpg';
import user4 from '../../assets/users/user_4_.jpg';
import user5 from '../../assets/users/user_5_.jpg';
import user6 from '../../assets/users/user_6_.png';
import user7 from '../../assets/users/user_7_.png';
import user8 from '../../assets/users/user_8_.png';
import user9 from '../../assets/users/user_9_.png';

export const Icons = {
  Logo,
  Stroke,
  Message,
  Points,
  Epalanga,
  Comment,
  Share,
  BookMarks,
  Home,
  Search,
  Video,
}

export const Users = [

  {
    id: Math.random().toString(32).substring(2, 27),
    name: 'Jorge Epalanga',
    photo: user1,
  },

  {
    id: Math.random().toString(32).substring(2, 27),
    name: 'Mafuta Nkudi',
    photo: user7,
  },

  {
    id: Math.random().toString(32).substring(2, 27),
    name: 'Kiame Zola',
    photo: user3,
  },

  {
    id: Math.random().toString(32).substring(2, 27),
    name: 'Njinga Mbudy',
    photo: user6,
  },

  {
    id: Math.random().toString(32).substring(2, 27),
    name: 'Sekany Wakidila',
    photo: user4,
  },

  {
    id: Math.random().toString(32).substring(2, 27),
    name: 'Anaya Epalanga',
    photo: user9,
    userName: '@anaya.e',
  },

  {
    id: Math.random().toString(32).substring(2, 27),
    name: 'Hossi Ndoki',
    photo: user5,
  },

  {
    id: Math.random().toString(32).substring(2, 27),
    name: 'Ndoxa Kudi',
    photo: user8,
  },

  {
    id: Math.random().toString(32).substring(2, 27),
    name: 'Ngueve Kidima',
    photo: user2,
  }  

];
