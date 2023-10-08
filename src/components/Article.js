import React, { useState, useRef, useImperativeHandle } from 'react';
import { useLocation } from 'react-router-dom';
import '../article.css';
import ArticleTitle from './ArticleTitle';
import { useSelector } from 'react-redux';
import AIVideoGen from './AIVideo';
import saveText from './SaveText';


import logo from '../img/logo.png';
import homeicon from '../img/home-icon.png';
import banner from '../img/banner.jpg';
import imgone from '../img/img_one.jpg';
import tek from '../img/2-tek.jpg';
import ads2 from '../img/ads_2.jpg';
import ads3 from '../img/ads_3.jpg';
import ads4 from '../img/ads_4.jpg';
import ads5 from '../img/ads_5.jpg';
import ads6 from '../img/ads_6.jpg';
import ads1 from '../img/ads_1.jpg';
import afamily from '../img/afamily.png';
import cine from '../img/cine.jpg';
import dep from '../img/dep.jpg';
import doisong from '../img/doisong.jpg';
import fashion from '../img/fashion.jpg';
import goctraitim from '../img/goctraitim.jpg';
import headertopbg from '../img/header-top-bg.png';
import headerwrapperbg from '../img/header-wrapper-bg.png';
import hocduong from '../img/hocduong.jpg';
import imgeight from '../img/img_eight.jpg';
import imgseven from '../img/img_seven.jpg';
import imgsix from '../img/img_six.jpg';
import imgfive from '../img/img_five.jpg';
import imgfour from '../img/img_four.jpg';
import imgthree from '../img/img_three.jpg';
import imgtwo from '../img/img_two.jpg';
import imgten from '../img/img_ten.jpg';
import imgnice from '../img/img_nice.JPG';
import khampha from '../img/khampha.jpg';
import la from '../img/la.gif';
import madebyme from '../img/madebyme.jpg';
import music from '../img/music.jpg';
import navigationbg from '../img/navigation-bg.png';
import skgt from '../img/skgt.jpg';
import soha from '../img/soha.jpg';
import sport from '../img/sport.JPG';
import thegioi from '../img/thegioi.jpg';
import titlebg from '../img/title-bg.png';
import tvshow from '../img/tvshow.png';
import xahoi from '../img/xahoi.jpg';
import xemanchoi from '../img/xem-an-choi.jpg';
import {
    Link
} from "react-router-dom";
const Article = ({ placeholder, images, caption }) => {
    const [showArticleTitle, setShowArticleTitle] = useState(false);
    const [showArticle, setShowArticle] = useState(true);

    let tmp = placeholder
    let pattern = /(?<=\.|\?|\!)\s{2}/;
    let arr = tmp.split(pattern);
    let rs = "";
    const regex = /[.!?]\s*[^.!?]*$/;
    const rs1 = rs.replace(regex, "");
    let tt = arr[0];
    let tt1 = arr[1];

    return (

        <div>
            {showArticleTitle && (<div>
                <ArticleTitle placeholder={placeholder} images={images} captions={caption} />
                {/* <AIVideoGen placeholder={placeholder} images={images} /> */}
                {/* <saveText placeholder={placeholder} /> */}
            </div>)}

            {showArticle && (<div>
                <div className="header">
                    <div className="header-top">
                        <div className="wrapper">
                            <ul>
                                <li><a href="#">JAM</a></li>
                                <li><a href="#">BLOG</a></li>
                                <li><a href="#">QUIZZ</a></li>
                                <li><a href="#">WESEND</a></li>
                            </ul>
                            <div className="search">
                                <input type="text" placeholder="Nhập nội dung tìm kiếm..." />
                            </div>
                        </div>
                    </div>
                    <div className="header-wrapper1">
                        <div className="wrapper1">
                            <div className="logo1">
                                <img src={logo} alt="" />
                                <div className="link-info1">
                                    <span className="website-name1">kenh14.vn</span>
                                    <span>Kênh Giải trí - Xã hội</span>
                                </div>
                            </div>
                            <div className="link-app">
                                <span className="send-message">Gửi tin nhắn nhanh - we</span>
                                <span className="down-app">Tải Ứng Dụng Đọc Tin Kênh 14</span>
                            </div>
                        </div>
                    </div>
                    <div className="navigation">
                        <div className="wrapper">
                            <ul>
                                <li><a href=""><img src={homeicon} alt="" /></a></li>
                                <li><a href="">Trang chủ</a></li>
                                <li><a href="">Star</a></li>
                                <li><a href="">Musik</a></li>
                                <li><a href="">Ciné</a></li>
                                <li><a href="">TV Show</a></li>
                                <li><a href="">Fashion</a></li>
                                <li><a href="">Đời sống</a></li>
                                <li><a href="">Xã hội</a></li>
                                <li><a href="">Thế giới</a></li>
                                <li><a href="">Sức khỏe - Giới tính</a></li>
                                <li><a href="">Made by Me</a></li>
                                <li><a href="">Sport</a></li>
                                <li><a href="">Khám phá</a></li>
                                <li><a href="">2-Tek</a></li>
                                <li><a href="">Lạ & Cool</a></li>
                                <li><a href="">Học đường</a></li>
                                <li><a href="">Video</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* <!-- End header --> */}

                <div className="container">
                    <div className="wrapper">
                        <div className="bodycontent">
                            <div className="banner border-shadow">
                                <img src={banner} alt="" />
                            </div>
                            <div className="main-content border-shadow">
                                <div className="col-left">
                                    <div className="focus-left-top">
                                        <div className="thumbnail">
                                            <img src={imgone} alt="" />
                                        </div>
                                        <div className="big-title">
                                            <h2>
                                                <a href="#">Ngọc Trinh, Angela Phương Trinh xuất hiện khác lạ "chìm nghỉm" giữa dàn mỹ nhân</a>
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="focus-left-hot">
                                        <span className="newstitle">TIN HOT TRONG NGÀY</span>
                                        <div className="list-article">
                                            <ul>
                                                <li><a href="">Angela Phương Trinh lấy lại phong độ nhan sắc sau khi mắc lỗi trang điểm</a></li>
                                                <li><a href="">Những tình tiết xoay quanh trai đẹp của "Vẫn Cứ Thích Em" khiến fan thích mê</a></li>
                                                <li><a href="">Những girlgroup và boygroup sở hữu fancafe "đông dân" nhất xứ Hàn</a></li>
                                                <li><a href="">Fan Kpop thích thú khi Diễm My đeo kính từ thương hiệu của Jessica</a></li>
                                                <li><a href="">Mỹ nhân Việt "méo mặt" bị khai quật ảnh cũ thời còn đen nhẻm, xấu xí</a></li>
                                                <li><a href="">Văn Toàn mặc nhầm quần của... Công Phượng</a></li>
                                                <li><a href="">Giải nhiệt mùa hè cùng bánh mỳ dưa hấu lạ mà ngon</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="focus-left-hot">
                                        <span className="newstitle">TIN HOT TRONG NGÀY</span>
                                        <div className="list-article">
                                            <ul>
                                                <li><a href="">Dấu hiệu Song Tử đang có xu hướng lừa dối người yêu</a></li>
                                                <li><a href="">Khủng long trong phim "jurassic world" được tạo ra như thế nào?</a></li>
                                                <li><a href="">Cụ ông xô ngã thiếu nữ vì không được nhường ghế trên xe buýt</a></li>
                                                <li><a href="">Loạt ảnh trước phẫu thuật thẩm mỹ của EXO gây tranh cãi</a></li>
                                                <li><a href="">Quen nhầm "yêu râu xanh", thiếu nữ bị cưỡng bức giữa đường</a></li>
                                                <li><a href="">Trailer chính thức của “Heroes Reborn” gây sốt</a></li>
                                                <li><a href="">Trải nghiệm thú vị tại ngày hội cưới Queen's Day 2015 - "Tình yêu thơ mộng"</a></li>
                                                <li><a href="">Sao Việt đồng loạt lăng xê phong cách thanh lịch</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="focus-left-hot">
                                        <span className="newstitle">SỰ KIỆN HOT</span>
                                        <div className="list-article article-hot">
                                            <ul>
                                                <li><a href="">Đại dịch MERS đang lây lan trên toàn thế giới</a></li>
                                                <li><a href="">Mỹ hợp pháp hóa hôn nhân đồng giới trên cả nước</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End col-left --> */}

                                <div className="col-center">
                                    <div className="focus-center-top">
                                        <div className="thumbnail">
                                            {/* <img src="img/img_two.jpg" alt="" /> */}
                                            <img className="img-title" src={images[0]} alt="" />
                                        </div>
                                        <div className="description">
                                            <h3 className='title-b' onClick={() => setShowArticleTitle(!showArticleTitle)}>
                                                {!showArticleTitle ? tt : setShowArticle(false)}
                                            </h3>

                                            <p onClick={() => setShowArticleTitle(!showArticleTitle)}>{!showArticleTitle ? tt1 : setShowArticle(false)}</p>
                                        </div>
                                    </div>
                                    <div className="focus-center-hot">
                                        <div className="thumbnail">
                                            <a href="#"><img src={imgthree} alt="" /></a>
                                            <h3>Đức Tuấn: "Chẳng hiểu luật LGBT liên quan gì đến Việt Nam mà mấy bạn ăn mừng như đúng rồi?</h3>
                                        </div>
                                        <div className="description">
                                            <p>"Chẳng hiểu có liên quan gì đến các bạn Việt Nam mà các bạn ăn mừng như đúng rồi, thay avatar như quốc khánh nhà bạn ấy" - Đức Tuấn bày tỏ quan điểm về việc cộng đồng mạng Việt thay avatar cờ lục sắc ủng hộ cộng đồng LGBT.</p>
                                        </div>
                                    </div>
                                    <div className="small-post">
                                        <ul>
                                            <li><a href="">
                                                <img src={imgfour} alt="" />
                                                Hà Tăng lần đầu lộ diện với vóc dáng thon gọn trên phố sau khi sinh con trai"
                                            </a></li>
                                            <li><a href="">
                                                <img src={imgfive} alt="" />
                                                Hà Tăng lần đầu lộ diện với vóc dáng thon gọn trên phố sau khi sinh con trai"
                                            </a></li>
                                            <li><a href="">
                                                <img src={imgsix} alt="" />
                                                Hà Tăng lần đầu lộ diện với vóc dáng thon gọn trên phố sau khi sinh con trai"
                                            </a></li>
                                            <li><a href="">
                                                <img src={imgseven} alt="" />
                                                Hà Tăng lần đầu lộ diện với vóc dáng thon gọn trên phố sau khi sinh con trai"
                                            </a></li>
                                            <li><a href="">
                                                <img src={imgeight} alt="" />
                                                Hà Tăng lần đầu lộ diện với vóc dáng thon gọn trên phố sau khi sinh con trai"
                                            </a></li>
                                            <li><a href="">
                                                <img src={imgnice} alt="" />
                                                Hà Tăng lần đầu lộ diện với vóc dáng thon gọn trên phố sau khi sinh con trai"
                                            </a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-right">
                                    <ul className="advertising">
                                        <li><img src={ads1} alt="" /></li>
                                        <li><img src={ads2} alt="" /></li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                        <div className="line"></div>
                        <div className="maincontent border-shadow">
                            <div className="column border-shadow">
                                <div className="box">
                                    <div className="box-title">
                                        <h2>// Star</h2>
                                    </div>
                                    <div className="box-content">
                                        <div className="thumbnail">
                                            <img src={imgten} alt="" />
                                        </div>
                                        <div className="description">
                                            <a href=""><h2>Loạt ảnh trước phẫu thuật thẩm mỹ của EXO gây tranh cãi </h2></a>
                                            <p>Những hình ảnh trước khi phẫu thuật thẩm mỹ của EXO làm nổ ra những cuộc tranh cãi nảy lửa.</p>
                                        </div>
                                        <ul>
                                            <li><a href="">Những nhan sắc đầu tiên của Hoa hậu Hoàn Vũ Việt Nam 2015</a></li>
                                            <li><a href="">NTK Adrian Anh Tuấn - Sơn Đoàn sẽ kết hôn hợp pháp tại Mỹ vào cuối năm nay</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="box-title">
                                        <h2>// Musik</h2>
                                    </div>
                                    <div className="box-content">
                                        <div className="thumbnail">
                                            <img src={music} alt="" />
                                        </div>
                                        <div className="description">
                                            <a href=""><h2>Loạt ảnh trước phẫu thuật thẩm mỹ của EXO gây tranh cãi </h2></a>
                                            <p>Những hình ảnh trước khi phẫu thuật thẩm mỹ của EXO làm nổ ra những cuộc tranh cãi nảy lửa.</p>
                                        </div>
                                        <ul>
                                            <li><a href="">Những nhan sắc đầu tiên của Hoa hậu Hoàn Vũ Việt Nam 2015</a></li>
                                            <li><a href="">NTK Adrian Anh Tuấn - Sơn Đoàn sẽ kết hôn hợp pháp tại Mỹ vào cuối năm nay</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="box-title">
                                        <h2>// Ciné</h2>
                                    </div>
                                    <div className="box-content">
                                        <div className="thumbnail">
                                            <img src={cine} alt="" />
                                        </div>
                                        <div className="description">
                                            <a href=""><h2>Loạt ảnh trước phẫu thuật thẩm mỹ của EXO gây tranh cãi </h2></a>
                                            <p>Những hình ảnh trước khi phẫu thuật thẩm mỹ của EXO làm nổ ra những cuộc tranh cãi nảy lửa.</p>
                                        </div>
                                        <ul>
                                            <li><a href="">Những nhan sắc đầu tiên của Hoa hậu Hoàn Vũ Việt Nam 2015</a></li>
                                            <li><a href="">NTK Adrian Anh Tuấn - Sơn Đoàn sẽ kết hôn hợp pháp tại Mỹ vào cuối năm nay</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="box-title">
                                        <h2>// TV Show</h2>
                                    </div>
                                    <div className="box-content">
                                        <div className="thumbnail">
                                            <img src={tvshow} alt="" />
                                        </div>
                                        <div className="description">
                                            <a href=""><h2>Loạt ảnh trước phẫu thuật thẩm mỹ của EXO gây tranh cãi </h2></a>
                                            <p>Những hình ảnh trước khi phẫu thuật thẩm mỹ của EXO làm nổ ra những cuộc tranh cãi nảy lửa.</p>
                                        </div>
                                        <ul>
                                            <li><a href="">Những nhan sắc đầu tiên của Hoa hậu Hoàn Vũ Việt Nam 2015</a></li>
                                            <li><a href="">NTK Adrian Anh Tuấn - Sơn Đoàn sẽ kết hôn hợp pháp tại Mỹ vào cuối năm nay</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="box box-style-2">
                                    <div className="box-title">
                                        <h2>// Sport</h2>
                                    </div>
                                    <div className="box-content">
                                        <div className="thumbnail-style-2">
                                            <span><img src={sport} alt="" /></span>
                                            <a href=""><h2>Một vụ kiện của "Ánh Viên" TP.HCM</h2></a>
                                            <p>Trong làng bơi Việt Nam hiện nay, người ta dự báo Nguyễn Diệp Phương Trâm là một Ánh Viên thứ hai. Tuy nhiên, sự nghiệp của tay bơi nhí 14 tuổi này đang gặp sóng gió...</p>
                                        </div>
                                        <ul>
                                            <li><a href="">Những nhan sắc đầu tiên của Hoa hậu Hoàn Vũ Việt Nam 2015</a></li>
                                            <li><a href="">NTK Adrian Anh Tuấn - Sơn Đoàn sẽ kết hôn hợp pháp tại Mỹ vào cuối năm nay</a></li>
                                            <li><a href="">NTK Adrian Anh Tuấn - Sơn Đoàn sẽ kết hôn hợp pháp tại Mỹ vào cuối năm nay</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="box box-style-2">
                                    <div className="box-title">
                                        <h2>// 2-Tek</h2>
                                    </div>
                                    <div className="box-content">
                                        <div className="thumbnail-style-2">
                                            <span><img src={tek} alt="" /></span>
                                            <a href=""><h2>Một vụ kiện của "Ánh Viên" TP.HCM</h2></a>
                                            <p>Trong làng bơi Việt Nam hiện nay, người ta dự báo Nguyễn Diệp Phương Trâm là một Ánh Viên thứ hai. Tuy nhiên, sự nghiệp của tay bơi nhí 14 tuổi này đang gặp sóng gió...</p>
                                        </div>
                                        <ul>
                                            <li><a href="">Những nhan sắc đầu tiên của Hoa hậu Hoàn Vũ Việt Nam 2015</a></li>
                                            <li><a href="">NTK Adrian Anh Tuấn - Sơn Đoàn sẽ kết hôn hợp pháp tại Mỹ vào cuối năm nay</a></li>
                                            <li><a href="">NTK Adrian Anh Tuấn - Sơn Đoàn sẽ kết hôn hợp pháp tại Mỹ vào cuối năm nay</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="box box-style-2">
                                    <div className="box-title">
                                        <h2>// Xem-Ăn-Chơi</h2>
                                    </div>
                                    <div className="box-content">
                                        <div className="thumbnail-style-2">
                                            <span><img src={xemanchoi} alt="" /></span>
                                            <a href=""><h2>Một vụ kiện của "Ánh Viên" TP.HCM</h2></a>
                                            <p>Trong làng bơi Việt Nam hiện nay, người ta dự báo Nguyễn Diệp Phương Trâm là một Ánh Viên thứ hai. Tuy nhiên, sự nghiệp của tay bơi nhí 14 tuổi này đang gặp sóng gió...</p>
                                        </div>
                                        <ul>
                                            <li><a href="">Những nhan sắc đầu tiên của Hoa hậu Hoàn Vũ Việt Nam 2015</a></li>
                                            <li><a href="">NTK Adrian Anh Tuấn - Sơn Đoàn sẽ kết hôn hợp pháp tại Mỹ vào cuối năm nay</a></li>
                                            <li><a href="">NTK Adrian Anh Tuấn - Sơn Đoàn sẽ kết hôn hợp pháp tại Mỹ vào cuối năm nay</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="box box-style-2">
                                    <div className="box-title">
                                        <h2>// Học Đường</h2>
                                    </div>
                                    <div className="box-content">
                                        <div className="thumbnail-style-2">
                                            <span><img src={hocduong} alt="" /></span>
                                            <a href=""><h2>Một vụ kiện của "Ánh Viên" TP.HCM</h2></a>
                                            <p>Trong làng bơi Việt Nam hiện nay, người ta dự báo Nguyễn Diệp Phương Trâm là một Ánh Viên thứ hai. Tuy nhiên, sự nghiệp của tay bơi nhí 14 tuổi này đang gặp sóng gió...</p>
                                        </div>
                                        <ul>
                                            <li><a href="">Những nhan sắc đầu tiên của Hoa hậu Hoàn Vũ Việt Nam 2015</a></li>
                                            <li><a href="">NTK Adrian Anh Tuấn - Sơn Đoàn sẽ kết hôn hợp pháp tại Mỹ vào cuối năm nay</a></li>
                                            <li><a href="">NTK Adrian Anh Tuấn - Sơn Đoàn sẽ kết hôn hợp pháp tại Mỹ vào cuối năm nay</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="box box-style-2">
                                    <div className="box-title">
                                        <h2>// Đẹp</h2>
                                    </div>
                                    <div className="box-content">
                                        <div className="thumbnail-style-2">
                                            <span><img src={dep} alt="" /></span>
                                            <a href=""><h2>Một vụ kiện của "Ánh Viên" TP.HCM</h2></a>
                                            <p>Trong làng bơi Việt Nam hiện nay, người ta dự báo Nguyễn Diệp Phương Trâm là một Ánh Viên thứ hai. Tuy nhiên, sự nghiệp của tay bơi nhí 14 tuổi này đang gặp sóng gió...</p>
                                        </div>
                                        <ul>
                                            <li><a href="">Những nhan sắc đầu tiên của Hoa hậu Hoàn Vũ Việt Nam 2015</a></li>
                                            <li><a href="">NTK Adrian Anh Tuấn - Sơn Đoàn sẽ kết hôn hợp pháp tại Mỹ vào cuối năm nay</a></li>
                                            <li><a href="">NTK Adrian Anh Tuấn - Sơn Đoàn sẽ kết hôn hợp pháp tại Mỹ vào cuối năm nay</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="box box-style-2">
                                    <div className="box-title">
                                        <h2>// Tin hay từ Afamily</h2>
                                    </div>
                                    <div className="box-content">
                                        <div className="thumbnail-style-2">
                                            <span><img src={afamily} alt="" /></span>
                                            <a href=""><h2>Một vụ kiện của "Ánh Viên" TP.HCM</h2></a>
                                            <p>Trong làng bơi Việt Nam hiện nay, người ta dự báo Nguyễn Diệp Phương Trâm là một Ánh Viên thứ hai. Tuy nhiên, sự nghiệp của tay bơi nhí 14 tuổi này đang gặp sóng gió...</p>
                                        </div>
                                        <ul>
                                            <li><a href="">Những nhan sắc đầu tiên của Hoa hậu Hoàn Vũ Việt Nam 2015</a></li>
                                            <li><a href="">NTK Adrian Anh Tuấn - Sơn Đoàn sẽ kết hôn hợp pháp tại Mỹ vào cuối năm nay</a></li>
                                            <li><a href="">NTK Adrian Anh Tuấn - Sơn Đoàn sẽ kết hôn hợp pháp tại Mỹ vào cuối năm nay</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="column border-shadow">
                                <div className="box">
                                    <div className="box-title">
                                        <h2>// Fashion</h2>
                                    </div>
                                    <div className="box-content">
                                        <div className="thumbnail">
                                            <img src={fashion} alt="" />
                                        </div>
                                        <div className="description">
                                            <a href=""><h2>Loạt ảnh trước phẫu thuật thẩm mỹ của EXO gây tranh cãi </h2></a>
                                            <p>Những hình ảnh trước khi phẫu thuật thẩm mỹ của EXO làm nổ ra những cuộc tranh cãi nảy lửa.</p>
                                        </div>
                                        <ul>
                                            <li><a href="">Những nhan sắc đầu tiên của Hoa hậu Hoàn Vũ Việt Nam 2015</a></li>
                                            <li><a href="">NTK Adrian Anh Tuấn - Sơn Đoàn sẽ kết hôn hợp pháp tại Mỹ vào cuối năm nay</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="box-title">
                                        <h2>// Đời sống</h2>
                                    </div>
                                    <div className="box-content">
                                        <div className="thumbnail">
                                            <img src={doisong} alt="" />
                                        </div>
                                        <div className="description">
                                            <a href=""><h2>Loạt ảnh trước phẫu thuật thẩm mỹ của EXO gây tranh cãi </h2></a>
                                            <p>Những hình ảnh trước khi phẫu thuật thẩm mỹ của EXO làm nổ ra những cuộc tranh cãi nảy lửa.</p>
                                        </div>
                                        <ul>
                                            <li><a href="">Những nhan sắc đầu tiên của Hoa hậu Hoàn Vũ Việt Nam 2015</a></li>
                                            <li><a href="">NTK Adrian Anh Tuấn - Sơn Đoàn sẽ kết hôn hợp pháp tại Mỹ vào cuối năm nay</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="box-title">
                                        <h2>// Xã hội</h2>
                                    </div>
                                    <div className="box-content">
                                        <div className="thumbnail">
                                            <img src={xahoi} alt="" />
                                        </div>
                                        <div className="description">
                                            <a href=""><h2>Loạt ảnh trước phẫu thuật thẩm mỹ của EXO gây tranh cãi </h2></a>
                                            <p>Những hình ảnh trước khi phẫu thuật thẩm mỹ của EXO làm nổ ra những cuộc tranh cãi nảy lửa.</p>
                                        </div>
                                        <ul>
                                            <li><a href="">Những nhan sắc đầu tiên của Hoa hậu Hoàn Vũ Việt Nam 2015</a></li>
                                            <li><a href="">NTK Adrian Anh Tuấn - Sơn Đoàn sẽ kết hôn hợp pháp tại Mỹ vào cuối năm nay</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="box-title">
                                        <h2>// Thế giới</h2>
                                    </div>
                                    <div className="box-content">
                                        <div className="thumbnail">
                                            <img src={thegioi} alt="" />
                                        </div>
                                        <div className="description">
                                            <a href=""><h2>Loạt ảnh trước phẫu thuật thẩm mỹ của EXO gây tranh cãi </h2></a>
                                            <p>Những hình ảnh trước khi phẫu thuật thẩm mỹ của EXO làm nổ ra những cuộc tranh cãi nảy lửa.</p>
                                        </div>
                                        <ul>
                                            <li><a href="">Những nhan sắc đầu tiên của Hoa hậu Hoàn Vũ Việt Nam 2015</a></li>
                                            <li><a href="">NTK Adrian Anh Tuấn - Sơn Đoàn sẽ kết hôn hợp pháp tại Mỹ vào cuối năm nay</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="box box-style-2">
                                    <div className="box-title">
                                        <h2>// Lạ & Cool</h2>
                                    </div>
                                    <div className="box-content">
                                        <div className="thumbnail-style-2">
                                            <span><img src={la} alt="" /></span>
                                            <a href=""><h2>Một vụ kiện của "Ánh Viên" TP.HCM</h2></a>
                                            <p>Trong làng bơi Việt Nam hiện nay, người ta dự báo Nguyễn Diệp Phương Trâm là một Ánh Viên thứ hai. Tuy nhiên, sự nghiệp của tay bơi nhí 14 tuổi này đang gặp sóng gió...</p>
                                        </div>
                                        <ul>
                                            <li><a href="">Những nhan sắc đầu tiên của Hoa hậu Hoàn Vũ Việt Nam 2015</a></li>
                                            <li><a href="">NTK Adrian Anh Tuấn - Sơn Đoàn sẽ kết hôn hợp pháp tại Mỹ vào cuối năm nay</a></li>
                                            <li><a href="">NTK Adrian Anh Tuấn - Sơn Đoàn sẽ kết hôn hợp pháp tại Mỹ vào cuối năm nay</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="box box-style-2">
                                    <div className="box-title">
                                        <h2>// Made by Me</h2>
                                    </div>
                                    <div className="box-content">
                                        <div className="thumbnail-style-2">
                                            <span><img src={madebyme} alt="" /></span>
                                            <a href=""><h2>Một vụ kiện của "Ánh Viên" TP.HCM</h2></a>
                                            <p>Trong làng bơi Việt Nam hiện nay, người ta dự báo Nguyễn Diệp Phương Trâm là một Ánh Viên thứ hai. Tuy nhiên, sự nghiệp của tay bơi nhí 14 tuổi này đang gặp sóng gió...</p>
                                        </div>
                                        <ul>
                                            <li><a href="">Những nhan sắc đầu tiên của Hoa hậu Hoàn Vũ Việt Nam 2015</a></li>
                                            <li><a href="">NTK Adrian Anh Tuấn - Sơn Đoàn sẽ kết hôn hợp pháp tại Mỹ vào cuối năm nay</a></li>
                                            <li><a href="">NTK Adrian Anh Tuấn - Sơn Đoàn sẽ kết hôn hợp pháp tại Mỹ vào cuối năm nay</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="box box-style-2">
                                    <div className="box-title">
                                        <h2>// Khám phá</h2>
                                    </div>
                                    <div className="box-content">
                                        <div className="thumbnail-style-2">
                                            <span><img src={khampha} alt="" /></span>
                                            <a href=""><h2>Một vụ kiện của "Ánh Viên" TP.HCM</h2></a>
                                            <p>Trong làng bơi Việt Nam hiện nay, người ta dự báo Nguyễn Diệp Phương Trâm là một Ánh Viên thứ hai. Tuy nhiên, sự nghiệp của tay bơi nhí 14 tuổi này đang gặp sóng gió...</p>
                                        </div>
                                        <ul>
                                            <li><a href="">Những nhan sắc đầu tiên của Hoa hậu Hoàn Vũ Việt Nam 2015</a></li>
                                            <li><a href="">NTK Adrian Anh Tuấn - Sơn Đoàn sẽ kết hôn hợp pháp tại Mỹ vào cuối năm nay</a></li>
                                            <li><a href="">NTK Adrian Anh Tuấn - Sơn Đoàn sẽ kết hôn hợp pháp tại Mỹ vào cuối năm nay</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="box box-style-2">
                                    <div className="box-title">
                                        <h2>// Góc trái tim</h2>
                                    </div>
                                    <div className="box-content">
                                        <div className="thumbnail-style-2">
                                            <span><img src={goctraitim} alt="" /></span>
                                            <a href=""><h2>Một vụ kiện của "Ánh Viên" TP.HCM</h2></a>
                                            <p>Trong làng bơi Việt Nam hiện nay, người ta dự báo Nguyễn Diệp Phương Trâm là một Ánh Viên thứ hai. Tuy nhiên, sự nghiệp của tay bơi nhí 14 tuổi này đang gặp sóng gió...</p>
                                        </div>
                                        <ul>
                                            <li><a href="">Những nhan sắc đầu tiên của Hoa hậu Hoàn Vũ Việt Nam 2015</a></li>
                                            <li><a href="">NTK Adrian Anh Tuấn - Sơn Đoàn sẽ kết hôn hợp pháp tại Mỹ vào cuối năm nay</a></li>
                                            <li><a href="">NTK Adrian Anh Tuấn - Sơn Đoàn sẽ kết hôn hợp pháp tại Mỹ vào cuối năm nay</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="box box-style-2">
                                    <div className="box-title">
                                        <h2>// Made by Me</h2>
                                    </div>
                                    <div className="box-content">
                                        <div className="thumbnail-style-2">
                                            <span><img src={madebyme} alt="" /></span>
                                            <a href=""><h2>Một vụ kiện của "Ánh Viên" TP.HCM</h2></a>
                                            <p>Trong làng bơi Việt Nam hiện nay, người ta dự báo Nguyễn Diệp Phương Trâm là một Ánh Viên thứ hai. Tuy nhiên, sự nghiệp của tay bơi nhí 14 tuổi này đang gặp sóng gió...</p>
                                        </div>
                                        <ul>
                                            <li><a href="">Những nhan sắc đầu tiên của Hoa hậu Hoàn Vũ Việt Nam 2015</a></li>
                                            <li><a href="">NTK Adrian Anh Tuấn - Sơn Đoàn sẽ kết hôn hợp pháp tại Mỹ vào cuối năm nay</a></li>
                                            <li><a href="">NTK Adrian Anh Tuấn - Sơn Đoàn sẽ kết hôn hợp pháp tại Mỹ vào cuối năm nay</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="box box-style-2">
                                    <div className="box-title">
                                        <h2>// Tin hot từ Soha.vn</h2>
                                    </div>
                                    <div className="box-content">
                                        <div className="thumbnail-style-2">
                                            <span><img src={soha} alt="" /></span>
                                            <a href=""><h2>Một vụ kiện của "Ánh Viên" TP.HCM</h2></a>
                                            <p>Trong làng bơi Việt Nam hiện nay, người ta dự báo Nguyễn Diệp Phương Trâm là một Ánh Viên thứ hai. Tuy nhiên, sự nghiệp của tay bơi nhí 14 tuổi này đang gặp sóng gió...</p>
                                        </div>
                                        <ul>
                                            <li><a href="">Những nhan sắc đầu tiên của Hoa hậu Hoàn Vũ Việt Nam 2015</a></li>
                                            <li><a href="">NTK Adrian Anh Tuấn - Sơn Đoàn sẽ kết hôn hợp pháp tại Mỹ vào cuối năm nay</a></li>
                                            <li><a href="">NTK Adrian Anh Tuấn - Sơn Đoàn sẽ kết hôn hợp pháp tại Mỹ vào cuối năm nay</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="column border-shadow"></div>
                            <div className="adversiting-bottom">
                                <div className="ads-items">
                                    <a href=""><h4>Cân sức khỏe Laica Italy giảm <span>50%</span></h4></a>
                                    <a href="" className="link-ads">muachung.vn</a>
                                    <a href="">
                                        <img src={ads3} alt="" />
                                        <p>Sử dụng dễ dàng nhờ công tắc tự động, mức cân tối đa 180kg. Bảo hành 1 năm. <span>Chỉ 290.000đ!</span></p>
                                    </a>
                                </div>
                                <div className="ads-items">
                                    <a href=""><h4>Cân sức khỏe Laica Italy giảm <span>50%</span></h4></a>
                                    <a href="" className="link-ads">muachung.vn</a>
                                    <a href="">
                                        <img src={ads4} alt="" />
                                        <p>Sử dụng dễ dàng nhờ công tắc tự động, mức cân tối đa 180kg. Bảo hành 1 năm. <span>Chỉ 290.000đ!</span></p>
                                    </a>
                                </div>
                                <div className="ads-items">
                                    <a href=""><h4>Cân sức khỏe Laica Italy giảm <span>50%</span></h4></a>
                                    <a href="" className="link-ads">muachung.vn</a>
                                    <a href="">
                                        <img src={ads5} alt="" />
                                        <p>Sử dụng dễ dàng nhờ công tắc tự động, mức cân tối đa 180kg. Bảo hành 1 năm. <span>Chỉ 290.000đ!</span></p>
                                    </a>
                                </div>
                                <div className="ads-items">
                                    <a href=""><h4>Cân sức khỏe Laica Italy giảm <span>50%</span></h4></a>
                                    <a href="" className="link-ads">muachung.vn</a>
                                    <a href="">
                                        <img src={ads6} alt="" />
                                        <p>Sử dụng dễ dàng nhờ công tắc tự động, mức cân tối đa 180kg. Bảo hành 1 năm. <span>Chỉ 290.000đ!</span></p>
                                    </a>
                                </div>
                            </div>
                            <div className="line" style={{ marginLeft: "0px" }}></div>
                            <div className="nav-bottom">
                                <ul>
                                    <li><a href="">Trang chủ</a></li>
                                    <li><a href="">Star</a></li>
                                    <li><a href="">Musik</a></li>
                                    <li><a href="">Ciné</a></li>
                                    <li><a href="">TV Show</a></li>
                                    <li><a href="">Fashion</a></li>
                                    <li><a href="">Đời sống</a></li>
                                    <li><a href="">Xã hội</a></li>
                                    <li><a href="">Thế giới</a></li>
                                    <li><a href="">Sức khỏe - Giới tính</a></li>
                                    <li><a href="">Made by Me</a></li>
                                    <li><a href="">Sport</a></li>
                                    <li><a href="">Khám phá</a></li>
                                    <li><a href="">2-Tek</a></li>
                                    <li><a href="">Lạ & Cool</a></li>
                                    <li><a href="">Học đường</a></li>
                                    <li><a href="">Video</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
                {/* <!--  End container --> */}

                <div className="footer1">
                    {/* <footer className="footer"> */}
                    <div className="container1 bottom_border">
                        <div className="row">
                            <div className=" col-sm-4 col-md col-sm-4  col-12 col">
                                <h5 className="headin5_amrc col_white_amrc pt2">Find us</h5>
                                {/* <!--headin5_amrc--> */}
                                <p className="mb10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                <p><i className="fa fa-location-arrow"></i> 9878/25 sec 9 rohini 35 </p>
                                <p><i className="fa fa-phone"></i>  +91-9999878398  </p>
                                <p><i className="fa fa fa-envelope"></i> info@example.com  </p>


                            </div>


                            <div className=" col-sm-4 col-md  col-6 col">
                                <h5 className="headin5_amrc col_white_amrc pt2">Quick links</h5>
                                {/* <!--headin5_amrc--> */}
                                <ul className="footer_ul_amrc">
                                    <li><a href="http://webenlance.com">Image Rectoucing</a></li>
                                    <li><a href="http://webenlance.com">Clipping Path</a></li>
                                    <li><a href="http://webenlance.com">Hollow Man Montage</a></li>
                                    <li><a href="http://webenlance.com">Ebay & Amazon</a></li>
                                    <li><a href="http://webenlance.com">Hair Masking/Clipping</a></li>
                                    <li><a href="http://webenlance.com">Image Cropping</a></li>
                                </ul>
                                {/* <!--footer_ul_amrc ends here--> */}
                            </div>


                            <div className=" col-sm-4 col-md  col-6 col">
                                <h5 className="headin5_amrc col_white_amrc pt2">Quick links</h5>
                                {/* <!--headin5_amrc--> */}
                                <ul className="footer_ul_amrc">
                                    <li><a href="http://webenlance.com">Remove Background</a></li>
                                    <li><a href="http://webenlance.com">Shadows & Mirror Reflection</a></li>
                                    <li><a href="http://webenlance.com">Logo Design</a></li>
                                    <li><a href="http://webenlance.com">Vectorization</a></li>
                                    <li><a href="http://webenlance.com">Hair Masking/Clipping</a></li>
                                    <li><a href="http://webenlance.com">Image Cropping</a></li>
                                </ul>
                                {/* <!--footer_ul_amrc ends here--> */}
                            </div>


                            <div className=" col-sm-4 col-md  col-12 col">
                                <h5 className="headin5_amrc col_white_amrc pt2">Follow us</h5>
                                {/* <!--headin5_amrc ends here--> */}

                                <ul className="footer_ul2_amrc">
                                    <li><a href="#"><i className="fab fa-twitter fleft padding-right"></i> </a><p>Lorem Ipsum is simply dummy text of the printing...<a href="#">https://www.lipsum.com/</a></p></li>
                                    <li><a href="#"><i className="fab fa-twitter fleft padding-right"></i> </a><p>Lorem Ipsum is simply dummy text of the printing...<a href="#">https://www.lipsum.com/</a></p></li>
                                    <li><a href="#"><i className="fab fa-twitter fleft padding-right"></i> </a><p>Lorem Ipsum is simply dummy text of the printing...<a href="#">https://www.lipsum.com/</a></p></li>
                                </ul>
                                {/* <!--footer_ul2_amrc ends here--> */}
                            </div>
                        </div>
                    </div>


                    <div className="container1">

                        {/* <!--foote_bottom_ul_amrc ends here--> */}
                        <p className="text-center">Copyright @2017 | Designed With by <a href="#">Your Company Name</a></p>


                        {/* <!--social_footer_ul ends here--> */}
                    </div>

                    {/* </footer> */}
                </div>
                {/* <!--  End footer --> */}
            </div>)}



        </div>
    );
};


export default Article;


