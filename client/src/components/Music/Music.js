import React,{Component} from 'react';
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
import { light } from '@material-ui/core/styles/createPalette';
import './Music.css';
import Her from '../Music/images/her.jpg';
import lights from '../Music/images/light.jpg';
import friends from '../Music/images/friends.jpg';


const audioList1 = [


  {
    name: '1',
    singer: "1",
    musicSrc:
      'https://res.cloudinary.com/dgemakazn/video/upload/v1639437167/zz/irlyrlyrlyrlyrlyhurt_zenitt.mp3'
  
  },



 {
    name: '2',
    singer: "2",
    musicSrc:
      'https://res.cloudinary.com/dgemakazn/video/upload/v1638916781/zz/trauma_core_%E5%88%9B%E4%BC%A4%E6%A0%B8.trauma_core_%E5%88%9B%E4%BC%A4%E6%A0%B8.393769056_obtbhw.mp3'
  
  },

  
  {
    name: '3',
    singer: "3",
    musicSrc:
      'https://res.cloudinary.com/dgemakazn/video/upload/v1639436302/zz/-_---__---__-_-____tqlotj.mp3'
  
  },
  

 {
  name: '4',
  singer: "4",
  musicSrc:
    'https://res.cloudinary.com/dgemakazn/video/upload/v1638916778/zz/%E6%A2%A6%E6%A0%B8dreamcore_%E4%BB%A4%E4%BA%BA%E6%80%80%E6%97%A7%E5%8F%88%E6%A2%A6%E5%B9%BB%E7%9A%84%E5%9B%BE%E7%89%87._%E6%A2%A6%E6%A0%B8dreamcore_%E4%BB%A4%E4%BA%BA%E6%80%80%E6%97%A7%E5%8F%88%E6%A2%A6%E5%B9%BB%E7%9A%84%E5%9B%BE%E7%89%87.422870703_jmmnri.mp3'

},


{
  name: '5',
  singer: "5",
  musicSrc:
    'https://res.cloudinary.com/dgemakazn/video/upload/v1639436302/zz/_-__-___-------_qckzd1.mp3'

},


{
  name: '6',
  singer: "6",
  musicSrc:
    'https://res.cloudinary.com/dgemakazn/video/upload/v1638916774/zz/%E4%BC%A4%E6%A0%B8Traumacore_%E8%AE%A9%E4%BA%BA%E5%BC%95%E8%B5%B7%E7%AB%A5%E5%B9%B4%E5%88%9B%E4%BC%A4%E7%9A%84%E5%9B%BE%E7%89%87._%E4%BC%A4%E6%A0%B8Traumacore_%E8%AE%A9%E4%BA%BA%E5%BC%95%E8%B5%B7%E7%AB%A5%E5%B9%B4%E5%88%9B%E4%BC%A4%E7%9A%84%E5%9B%BE%E7%89%87.414992560_oscu8m.mp3'

},



{
  name: '7',
  singer: "7",
  musicSrc:
    'https://res.cloudinary.com/dgemakazn/video/upload/v1638916769/zz/weirdcore_dreamcore_Traumacore_%E6%80%AA%E6%A0%B8_%E6%A2%A6%E6%A0%B8_%E5%88%9B%E4%BC%A4%E6%A0%B8___I_lost_more_than_my_soul.._weirdcore_dreamcore_Traumacore_%E6%80%AA%E6%A0%B8_%E6%A2%A6%E6%A0%B8_%E5%88%9B%E4%BC%A4%E6%A0%B8___I_lost_more_than_my_soul..445156094_m5s5rk.mp3'

},



{
  name: '8',
  singer: "8",
  musicSrc:
    'https://res.cloudinary.com/dgemakazn/video/upload/v1638916766/zz/weirdcore_dreamcore_Traumacore_%E6%80%AA%E6%A0%B8_%E6%A2%A6%E6%A0%B8_%E5%88%9B%E4%BC%A4%E6%A0%B8______I_don_t_like_to_make_a_fire_here.._weirdcore_dreamcore_Traumacore_%E6%80%AA%E6%A0%B8_%E6%A2%A6%E6%A0%B8_%E5%88%9B%E4%BC%A4%E6%A0%B8______I_don_t_like_to_make_a_fire_here..432369870_r7p1ui.mp3'

},



{
  name: '9',
  singer: "9",
  musicSrc:
    'https://res.cloudinary.com/dgemakazn/video/upload/v1638915901/zz/c020109703_-_A22._%E3%81%B2%E3%81%AA%E3%81%9F%E3%81%BC%E3%81%A3%E3%81%93_o6q0tu.mp3'

},



{
  name: '10',
  singer: "10",
  musicSrc:
    'https://res.cloudinary.com/dgemakazn/video/upload/v1638915899/zz/c020109703_-_A21._%E3%82%84%E3%81%95%E3%81%97%E3%81%84%E3%81%93%E3%81%A0%E3%81%A8%E3%81%8A%E3%82%82%E3%81%A3%E3%81%A6%E3%81%9F_%E3%83%9D%E3%83%8B%E5%AD%90_mhdu7i.mp3'

},



{
  name: '11',
  singer: "11",
  musicSrc:
    'https://res.cloudinary.com/dgemakazn/video/upload/v1638915899/zz/c020109703_-_A02._%E3%82%86%E3%82%81%E3%81%AB%E3%81%A3%E3%81%8D.mp3_mctvmb.mp3'

},



{
  name: '12',
  singer: "12",
  musicSrc:
    'https://res.cloudinary.com/dgemakazn/video/upload/v1638915898/zz/c020109703_-_A55._cuomlt.mp3'

},



{
  name: '13',
  singer: "13",
  musicSrc:
    'https://res.cloudinary.com/dgemakazn/video/upload/v1638915898/zz/c020109703_-_A07._%E3%81%95%E3%82%80%E3%81%8F%E3%81%A6%E3%81%82%E3%81%A3%E3%81%9F%E3%81%8B%E3%81%84_%E3%81%B5%E3%82%86_%E9%9B%AA%E3%81%AE%E4%B8%96%E7%95%8C_.mp3_d45jwk.mp3'

},



{
  name: '14',
  singer: "14",
  musicSrc:
    'https://res.cloudinary.com/dgemakazn/video/upload/v1638915897/zz/c020109703_-_A35._%E3%81%9F%E3%81%AE%E3%81%97%E3%81%9D%E3%81%86%E3%81%AA%E3%83%94%E3%82%AF%E3%83%8B%E3%83%83%E3%82%AF_clmcvw.mp3'

},


{
  name: '15',
  singer: "15",
  musicSrc:
    'https://res.cloudinary.com/dgemakazn/video/upload/v1639436303/zz/---_smbkep.mp3'

},


{
  name: '16',
  singer: "16",
  musicSrc:
    'https://res.cloudinary.com/dgemakazn/video/upload/v1639436302/zz/----_----_------_----_oabd0n.mp3'

},




{
  name: '17',
  singer: "17",
  musicSrc:
    'https://res.cloudinary.com/dgemakazn/video/upload/v1639436302/zz/__-_-__lwknje.mp3'

},





















  // {
  //   name: '虚拟',
  //   singer: '王贰浪',
  //   cover:
  //     'https://img.bq233.com/upload/2019/1028/5db69eec3da61.jpg',
  //   musicSrc:
  //     'https://res.cloudinary.com/dgemakazn/video/upload/v1608441788/blog%20music/%E8%99%9A%E6%8B%9F_qi7gtr.mp3'
  
  // },

  // {
  //   name: '蒸发',
  //   singer: '好樂團',
  //   cover:
  //     'https://i1.sndcdn.com/artworks-000209040897-iwpkbn-t500x500.jpg',
  //   musicSrc:
  //     'https://res.cloudinary.com/dgemakazn/video/upload/v1609204535/blog%20music/%E5%A5%BD%E6%A8%82%E5%9C%98_GoodBand%E8%92%B8%E7%99%BC_Demo_buflac.mp3'
  
  // },

  // {
  //   name: '还愿',
  //   singer: '草东没有派对',
  //   cover:
  //     'https://vignette.wikia.nocookie.net/devotion/images/b/b5/DevotionPress1.png/revision/latest/scale-to-width-down/620?cb=20190203155605&path-prefix=zh-tw',
  //   musicSrc:
  //     'https://res.cloudinary.com/dgemakazn/video/upload/v1609608039/blog%20music/%E9%82%84%E9%A1%98_-_%E9%82%84%E9%A1%98_ixitqx.mp3'
  
  // },

  // {
  //   name: '离歌',
  //   singer: '草东没有派对',
  //   cover:
  //     'https://mocah.org/thumbs/5399787-tree-woodland-forest-dark-night-sky-stars-milky-way-black-black-and-white-silhouette-hill-night-sky-startrail-minimalistic-astrophotography-free-stock-photos.jpg',
  //   musicSrc:
  //     'https://res.cloudinary.com/dgemakazn/video/upload/v1638524419/blog%20music/%E7%A6%BB%E6%AD%8C-%E8%8D%89%E4%B8%9C%E6%B2%A1%E6%9C%89%E6%B4%BE%E5%AF%B9_ypy13m.mp3'
  
  // },
 

  
  // {
  //   name: '废柴',
  //   singer: '华北浪革',
  //   musicSrc:
  //     'https://res.cloudinary.com/dgemakazn/video/upload/v1638850646/blog%20music/%E5%8D%8E%E5%8C%97%E6%B5%AA%E9%9D%A9_%E5%BA%9F%E6%9F%B4_-1612832862385.mp4-%E8%87%AA%E5%8B%95%E6%9C%80%E9%AB%98%E7%95%AB%E8%B3%AA_bvzywe.mp3'
  // },

 
  // {
  //   name: '海底',
  //   singer: '一支榴莲',
  //   cover:
  //     'https://i.ytimg.com/vi/v5gK8np-OTA/maxresdefault.jpg',
  //   musicSrc:
  //     'https://res.cloudinary.com/dgemakazn/video/upload/v1609896225/blog%20music/%E6%B5%B7%E5%BA%95-%E4%B8%80%E6%94%AF%E6%A6%B4%E8%8E%B2%E5%90%AC%E6%AD%8C%E8%87%B4%E9%83%81%E4%BD%A0%E7%9A%84%E5%AD%A4%E7%8B%AC%E6%97%A0%E4%BA%BA%E5%8F%AF%E4%BB%A5%E5%88%B0%E8%BE%BE%E5%8A%A8%E6%80%81Lyric%E7%89%B9%E6%95%88%E4%B8%80%E9%A6%96%E8%B6%85%E5%A5%BD%E5%90%AC%E7%9A%84%E8%87%B4%E9%83%81%E7%B3%BB%E6%AD%8C%E6%9B%B2_emo5eq.mp3'
  
  // },


  // {
  //   name: '重要的事物就在眼睑之下闪烁',
  //   singer: 'Kokia',
  //   cover:
  //    {Her},
  //    musicSrc:
  //     'https://res.cloudinary.com/dgemakazn/video/upload/v1638525401/blog%20music/%E5%A4%A7%E4%BA%8B%E3%81%AA%E3%82%82%E3%81%AE%E3%81%AF%E7%9B%AE%E8%93%8B%E3%81%AE%E8%A3%8F_1_tqr7sg.mp3'
  
  // },




  // {
  //   name: 'One Last Kiss',
  //   singer: "宇多田光",
  //   cover:
  //     'https://www.otaquest.com/wp-content/uploads/2021/03/One-Last-Kiss-TOP.jpg',
  //   musicSrc:
  //     'https://res.cloudinary.com/dgemakazn/video/upload/v1631254430/blog%20music/One_Last_Kiss_ijxptz.mp3'
  
  // },


  // {
  //   name: '宇航员',
  //   singer: "めありー",
  //   cover:
  //     'https://img.youtube.com/vi/b1mU4zH-p8Q/hqdefault.jpg',
  //   musicSrc:
  //     'https://res.cloudinary.com/dgemakazn/video/upload/v1637112924/blog%20music/%E5%86%8D%E8%A7%81_wntqlt.mp3'
  
  // },



  // {
  //   name: '最珍贵的宝物',
  //   singer: 'LiSA',
  //   cover:
  //     {friends},
  //   musicSrc:
  //     'https://res.cloudinary.com/dgemakazn/video/upload/v1638774759/blog%20music/yui_final_ver_-2792802935442528566_rtcfpg.mp3'
  
  // },

  
  // {
  //   name: '温柔',
  //   singer: '五月天',
  //   cover:
  //     {lights},
  //   musicSrc:
  //     'https://res.cloudinary.com/dgemakazn/video/upload/v1638774069/blog%20music/mayday_tenderness_official_music_video_-1743330829090659202_iw0m5y.mp3'
  
  // },


  // {
  //   name: 'dSa3z5addd2k',
  //   singer: 'dskadosdjasoj',
  //   cover:'',
  //   musicSrc:
  //     'https://res.cloudinary.com/dgemakazn/video/upload/v1638849572/blog%20music/adsfsdfds_jzbzbt.mp3'
  
  // },



  // {
  //   name: '秦皇岛',
  //   singer: '万能青年旅店',
  //   cover:
  //     'https://miro.medium.com/max/6684/0*sP3CIVDRCGva0Lxk',
  //   musicSrc:
  //     'https://res.cloudinary.com/dgemakazn/video/upload/v1611205771/blog%20music/%E4%B8%87%E8%83%BD%E9%9D%92%E5%B9%B4%E6%97%85%E5%BA%97_%E7%A7%A6%E7%9A%87%E5%B3%B6_lyrics_dayqll.mp3'
  
  // },



    
  
 


  
 
]




const options = {
  // audio lists model
  audioLists: audioList1,
  defaultPlayMode:"orderLoop",
  defaultPlayIndex: 0,
  loadAudioErrorPlayNext:true,
  remove: false,
  showMiniProcessBar:true,
  defaultPosition: {
    top: 80,
    right: 50,
  },
  glassBg:true,
  // mode:'full'
  
}



   
    

export default class Music extends Component{
  constructor(props) {
   
    super(props);

    // this.state={
    //   WindowSize : window.innerWidth,
    //   top:30,
    //   right:70,
    // }
    // this.handleResize = this.handleResize.bind(this);
  }

//   componentDidMount() {
//     window.addEventListener("resize", this.handleResize);
//   }

//   handleResize() {
//     this.setState({WindowSize: window.innerWidth})
// }
  
  
  render() {
    // {console.log(this.state.WindowSize)}
  

    // {
      
    //   if(this.state.WindowSize<960){
    //   this.setState({
    //     top:60,
    //     right:70,
    //   })
    // }
    // }
  
  return(
   
    <div>
  <ReactJkMusicPlayer

   
   {...options}
   
   
   />
  </div>
  );
  }
}
