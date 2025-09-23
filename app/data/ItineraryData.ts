export interface Location {
  name: string;
  time: string;
  description: string;
  image: string;
  mapLink: string;
}

export interface DayItinerary {
  day: number;
  date: string;
  city: string;
  locations: Location[];
}

export const itinerary: DayItinerary[] = [
  {
    day: 1,
    date: "09/10/25",
    city: "Cao Hùng - Thành phố cảng hiện đại",
    locations: [
  {
        name: "1. Sân bay Cao Hùng",
        time: "Hạ cánh khoảng 17:50",
        description: "- Bay từ 14:35\n - Hạ cánh, lấy hành lí",
        image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nroMTkqrwFeHAHZQdNNGuj9N5349417nsVItOASgWQvBa1tAcHG5Dz-9TdpippmJPlHC-6P2UxFa9Dg7K4UQ2v5i_FNZKctvpFB-pnQ6lhmkIoQoFR8n3BeoeLlSwn8GY9X9p4=w408-h306-k-no",
        mapLink: "https://maps.app.goo.gl/T4xE1E9VCTw2T9cB8",
      },
      {
        name: "2. Khách sạn",
        time: "Chiều tối",
        description: "- Quyết định sau, nghỉ 2 đêm Cao Hùng",
        image: "https://i.etsystatic.com/16237790/r/il/591da5/5840470695/il_fullxfull.5840470695_gwx4.jpg",
        mapLink: "https://maps.app.goo.gl/ttwNR67Eoimjargy8",
      },
      {
        name: "3. Ga tàu Formosa",
        time: "Tối",
        description: "- Công trình bằng kính lớn nhất thế giới với hơn 4500 tấm kính màu bao phủ xung quanh\n - Nhà ga đẹp thứ 2 thế giới \n - Có show ánh sáng 10 phút vào 11h, 15h, 18h",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/74/65/8b/photo1jpg.jpg?w=1200&h=-1&s=1",
        mapLink: "https://maps.app.goo.gl/pzGZSZc8xZ1QpyyZA",
      },
      {
        name: "4. Chợ đêm Lưu Hà (Liuhe)",
        time: "Tối",
        description: "- Mở cửa từ 5h chiều tới 2h sáng, cách ga Formosa chỉ 5p đi bộ\n - Hoặc đi chợ đêm Ruifeng",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTvExj5YE-Jg7AP6bTeyhp_bub4bgNqxgX8w&s",
        mapLink: "https://maps.app.goo.gl/6N5MMYJ5E3VUcFuL8",
      },
      {
        name: "5. Vịnh Sông Tình Yêu (Love River)",
        time: "Tối",
        description: "- 8p taxi từ Liuhe\n- Sông Tình hay còn gọi là Sông Ái Hà dài khoảng 12km, là một dòng sông lãng mạn và thơ mộng\n - Có thể đi dạo, đi thuyền, ngắm cảnh \n - Có nhiều điểm tham quan và hoạt động hấp dẫn như Đài Quan Sát Cá Voi để ngắm cảnh (hoàng hôn và đèn đêm lung linh), các Tòa Triển Lãm (Cá Voi, Cá Heo, San Hô) với không gian văn hóa biển và âm nhạc, cùng Đại Lộ Cây Du xanh mát để thư giãn và chụp ảnh. ",
        image: "https://thumbs.dreamstime.com/b/yellow-rubber-ducks-love-river-bay-kaohsiung-taiwan-february-tourists-visit-display-port-yacht-marina-argo-366006626.jpg",
        mapLink: "https://maps.app.goo.gl/Gu6zyULGrHYaLrvK8",
      },
      {
        name: "6. Trung tâm Âm nhạc Cao Hùng (Kaohsiung Music Center)",
        time: "Tối",
        description: "- Đi bộ khoảng 1p ven sông\n-  Là trung tâm biểu diễn và giải trí lớn tại Đài Loan, thu hút du khách bằng kiến trúc độc đáo lấy cảm hứng từ hình dạng con sóng biển, nơi diễn ra các buổi hòa nhạc quốc tế, triển lãm, thị trường và nhiều sự kiện âm nhạc\n - Xung quanh nhiều cafe, nhà hàng ven sông, đi dạo chơi buổi tối",
        image: "https://khh.travel/image/34274/1920x1080",
        mapLink: "https://maps.app.goo.gl/tG1GzQ3TNniraFXF6",
      },
    ],
  },
  {
    day: 2,
    date: "10/10/25",
    city: "Cao Hùng - Ngày 2",
    locations: [
      {
        name: "1. Ăn sáng Cao Hùng",
        time: "Sáng",
        description: "- Ăn sáng kiểu Đài Loan",
        image: "https://i0.wp.com/eatingintaipei.com/wp-content/uploads/2023/04/soymilk-king_7.jpg?w=1116&ssl=1",
        mapLink: "https://maps.app.goo.gl/6Q8jJbiMZDxoemjD8",
      },
      {
        name: "2. Đầm Liên Trì",
        time: "Sáng - trưa",
        description: "- Đây hoặc Phật Quang Sơn\n - Nổi bật với các công trình kiến trúc tôn giáo độc đáo, bao gồm Chùa Long Hổ (Dragon and Tiger Pagodas) với tượng rồng hổ oai vệ, Đài Xuân Thu (Spring and Autumn Pavilions), và các đền chùa xung quanh hồ.\n- Hồ nhân tạo có cảnh quan thiên nhiên đẹp, những con đường lát gạch zig-zag trên mặt nước, và là một trong những điểm du lịch nổi tiếng nhất tại Cao Hùng. ",
        image: "https://www.getmetotaiwan.com/wp-content/uploads/2022/10/kaohsiung-lotus-pond-tiger-dragon-pavilion-drone.jpg",
        mapLink: "https://maps.app.goo.gl/jyy3p9py4x5dJxYE9",
      },
      {
        name: "3. Chùa Long Hổ",
        time: "Sáng - trưa",
        description: "- Cùng với Đài Xuân Thu, nằm trong khuân viên Hồ Liên Trì\n - Cảnh sắc nổi tiếng của Cao Hùng.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8GShBfANtWasAiTx3yUTlQKlUHNytH2KCjQ&s",
        mapLink: "https://maps.app.goo.gl/vzaRsGHFszosqQ418",
      },
      {
        name: "4. Khu trung tâm mua sắm Dream Mall",
        time: "Trưa",
        description: "- Toạ lạc tại khu công nghệ cao với diện tích khoảng 400,000m2. Tòa nhà Dream Mall rộng lớn với 10 tầng\n - Ăn uống mua sắm",
        image: "https://mindtrip.ai/cdn-cgi/image/format=webp,w=1200/https://iorigin.mindtrip.ai/attractions/9332/91ed/8c18/5ed7/b2e3/d5a9/8721/e350",
        mapLink: "https://maps.app.goo.gl/qNZifsWbxdK8x9iZ7",
      },
      {
        name: "5. Horli Baking Cafe",
        time: "Chiều",
        description: "- Tiệm bánh concept tàu hoả độc đáo, như đang ở toa tàu\n - Mở 11h - 18h30 nghỉ thứ 3\n - Có thể thăm quan Pier-2 Art Center nếu muốn - khu tổ hợp nghệ thuật từ khu nhà kho ven biển cũ, dạo Lover Bay ban ngày",
        image: "https://images.adsttc.com/media/images/6825/bdb2/5ae7/be01/8667/3bbb/newsletter/horli-baking-true-thing-design-studio_12.jpg?1747303896",
        mapLink: "https://maps.app.goo.gl/vzaRsGHFszosqQ418",
      },
      {
        name: "6. Ga tàu Formosa",
        time: "Chiều",
        description: "- Công trình bằng kính lớn nhất thế giới với hơn 4500 tấm kính màu bao phủ xung quanh\n - Nhà ga đẹp thứ 2 thế giới \n - Có show ánh sáng 10 phút vào 11h, 15h, 18h",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/74/65/8b/photo1jpg.jpg?w=1200&h=-1&s=1",
        mapLink: "https://maps.app.goo.gl/pzGZSZc8xZ1QpyyZA",
      },
      {
        name: "7. Vịnh Tây Tự (Sizihwan)",
        time: "Chiều hoàng hôn",
        description: "- Đi taxi khoảng 20p từ bến Formosa\n- Là một khu vực ven biển nổi tiếng với bãi cát đen độc đáo, khung cảnh núi non và biển nước hữu tình",
        image: "https://eng.taiwan.net.tw/att/1/big_scenic_spots/pic_624_15.jpg",
        mapLink: "https://maps.app.goo.gl/HCBhKEbE1oFVgSis6",
      },
      {
        name: "7. Ăn tối",
        time: "Tối",
        description: "- Đi ăn, cafe tối cuối rồi về xếp đồ",
        image: "https://i.etsystatic.com/16237790/r/il/591da5/5840470695/il_fullxfull.5840470695_gwx4.jpg",
        mapLink: "https://maps.app.goo.gl/HCBhKEbE1oFVgSis6",
      },
    ]},
    {
    day: 3,
    date: "11/10/25",
    city: "Đài Nam - Cổ kính, lịch sử",
    locations: [
      {
        name: "1. HSR về Đài Nam",
        time: "Sáng",
        description: "- Ăn sáng rồi đi hoặc đi rồi ăn\n - HSR cao tốc tới Đài Nam 37 phút, về khách sạn nghỉ ngơi\n",
        image: "https://i.etsystatic.com/16237790/r/il/591da5/5840470695/il_fullxfull.5840470695_gwx4.jpg",
        mapLink: "https://maps.app.goo.gl/u8FgLGoc6JWG28jb6",
      },
      {
        name: "2. Chou's Shrimp Rolls",
        time: "Trưa",
        description: "- Mở cửa từ 10h30 - 21h30\n - Cuộn tôm chiên giòn, cơm hải sản, canh súp",
        image: "https://www.twtainan.net/content/images/shops/13273/640x480_508634777851747216250.jpg",
        mapLink: "https://maps.app.goo.gl/u8FgLGoc6JWG28jb6",
      },
      {
        name: "3. Phố cổ An Bình",
        time: "Trưa chiều",
        description: "- Taxi 12p\n- Thuộc địa cũ của Hà Lan \n - Kiến trúc nhà cổ, không khí cổ kính, nhiều đặc sản địa phương của Đài Nam và các hàng quán độc đáo, mang đến trải nghiệm thú vị cho du khách yêu thích sự hoài cổ.  \n - Có thể tham khảo Tour đi bộ miễn phí, thăm quan Pháo đài An Bình\n - Ăn vặt dọc phố cổ (kẹo đậu phộng, cá viên chiên, hàu nướng, kem dứa,.. - có hàng chè đậu đỏ)\n - Có thể thăm thêm Nhà cổ Lu, Haishan Hall, nhà cây An Bình",
        image: "https://edisontours.com/wp-content/uploads/2023/12/Shennong-Street-3.jpg",
        mapLink: "https://maps.app.goo.gl/u8FgLGoc6JWG28jb6",
      },
      {
        name: "4. Haishan Hall (海山館)",
        time: "Chiều",
        description: "- Điểm số 3, 4, 5, 6 trong cùng 1 khu\n- Là một tòa nhà lịch sử và former military assembly hall (cựu hội trường quân sự)\n - Trưng bày bộ sưu tập các vật phẩm và bùa chú dùng để trừ tà và nằm trên một con phố hẹp, quanh co, con phố cổ nhất ở Đài Nam và cả Đài Loan.\n - Nằm trong Tour đi bộ miễn phí ",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/%E5%AE%89%E5%B9%B3%E6%B5%B7%E5%B1%B1%E9%A4%A8.JPG/1200px-%E5%AE%89%E5%B9%B3%E6%B5%B7%E5%B1%B1%E9%A4%A8.JPG",
        mapLink: "https://maps.app.goo.gl/u8FgLGoc6JWG28jb6",
      },
      {
        name: "5. Nhà cổ Lu",
        time: "Chiều",
        description: "- Trên phố An Bình  \n - Nằm trong Tour đi bộ miễn phí",
        image: "https://lh3.googleusercontent.com/p/AF1QipOT6RzJhEwe-jL9QdEjZI65a6kNNNawuq6nTrZ0=w426-h240-k-no",
        mapLink: "https://maps.app.goo.gl/u8FgLGoc6JWG28jb6",
      },
      {
        name: "6. Nhà cây An Bình",
        time: "Chiều hoặc Hoàng hôn",
        description: "- Có thể qua pháo đài trước\n- Khung cảnh độc đáo của cây bồ đề mọc phủ kín một ngôi nhà cũ, tạo nên một công trình kiến trúc kỳ lạ và đẹp mắt\n - Rễ cây bồ đề đã mọc xuyên qua tường và mái nhà, tạo nên một khung cảnh độc đáo và huyền bí\n - Đây cũng là một địa điểm lý tưởng để chụp ảnh với những góc nhìn đẹp và độc đáo\n - Hoàng hôn ảo diệu",
        image: "https://www.twtainan.net/content/images/attractions/101390/1024x768_attractions-image-tmrcvul8e0etl_5yk87e2a.jpg",
        mapLink: "https://maps.app.goo.gl/u8FgLGoc6JWG28jb6",
      },
      {
        name: "7. Chùa Khổng Tử",
        time: "Chiều",
        description: "- Taxi khoảng 6p, có thể đi hoặc bỏ qua\n- Dạo chùa và khu phố cổ\n - Gần Fuzhong Street nhiều tiệm đồ thủ công, cafe xinh xắn, mua quà handmade\n - Có thể ghé Tainan Art Museum Building 2 gần đó hoặc vào Hayashi Department Store",
        image: "https://dulichchat.com/wp-content/uploads/2022/11/mieu-khong-tu-dai-nam-dai-loan-dulichchat-7.jpg",
        mapLink: "https://maps.app.goo.gl/u8FgLGoc6JWG28jb6",
      },
      {
        name: "8. Hongho Cafe",
        time: "Chiều",
        description: "- Gần Chùa Khổng Tử và Art Museum Building\n - Nằm trong hẻm nhỏ, quán là nhà cũ đc cải tạo\n- Mở 14h - 19h, nghỉ t3 t4",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_SZhKoBspbaWBdNfeAV9vxztUxxIb1Mx51g&s",
        mapLink: "https://maps.app.goo.gl/u8FgLGoc6JWG28jb6",
        lat: 25.0881,
        lng: 121.5246,
      },
      {
        name: "9. Phố Thần Nông (Shennong)",
        time: "Chiều tối",
        description: "- Taxi 12p\n- Là một huyền thoại sống về di sản và văn hóa, nằm ẩn mình trong những ngõ hẻm rối ren của thành phố Đài Nam sôi động.\n -  Phố cổ từng là trung tâm thương mại sầm uất trong quá khứ, nay trở thành trung tâm nghệ thuật sáng tạo với nhiều cửa hàng thủ công, quán ăn và kiến trúc văn hóa Thanh - Nhật Bản độc đáo\n - Đặc biệt nổi tiếng với không khí lung linh khi đèn lồng được thắp sáng vào buổi tối, thích hợp cho việc đi dạo và chụp ảnh.\n - Cafe nghỉ ngơi, có thể qua chợ Yong Le ăn (17h30 đóng, nhiều quán ăn, mì, cơm dọc phố Gouhua, khu section 3), TCRC Pub (mở đến đêm) hoặc thăm quan Chihkan Xích Khám Lâu \n",
        image: "https://ta-img.tatinta.com/resize/1024/webp/destination/file-1615175589631.jpg",
        mapLink: "https://maps.app.goo.gl/u8FgLGoc6JWG28jb6",
      },
      {
        name: "10. Chợ đêm Đài Nam",
        time: "Tối",
        description: "- Chợ đêm Garden nổi tiếng với quy mô rộng lớn với gần 400 gian hàng và là một trong những chợ đêm nổi tiếng nhất khu vực \n - Mở cửa 5h chiều - 12h đêm\n - Thứ 4 có thể ko mở, tìm quán khác\n - Nghỉ đêm tại Đài Nam",
        image: "https://c8.alamy.com/comp/T913HY/tainan-flower-night-market-or-garden-night-market-is-a-tourism-night-market-in-north-district-tainan-taiwan-T913HY.jpg",
        mapLink: "https://maps.app.goo.gl/aN1Crrp3bpCmz81Z9",
      },
    ]
  },
  {
    day: 4,
    date: "12/10/25",
    city: "Đài Trung - Văn hoá phong phú, gần gũi thiên nhiên",
    locations: [
      {
        name: "1. Fu Sheng Hao",
        time: "Sáng - Đài Nam",
        description: "- Ăn sáng Đài Nam 60 năm\n- Mở cửa 6h30 - 18h30\n - Wangou (bánh bột gạo mặn) + súp thịt heo",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG7ZwCwlRS0nfbLQLYrVpfSKFfdkugqj5tKg&s",
        mapLink: "https://maps.app.goo.gl/7wm2jU1YGnFDMy5Z8",
      },
      {
        name: "2. HSR về Đài Trung",
        time: "Sáng",
        description: "- HSR cao tốc tới Đài Trung 37 phút, về khách sạn nghỉ ngơi\n",
        image: "https://i.etsystatic.com/16237790/r/il/591da5/5840470695/il_fullxfull.5840470695_gwx4.jpg",
        mapLink: "https://maps.app.goo.gl/u8FgLGoc6JWG28jb6",
      },
      {
        name: "3. Làng Cầu Vồng",
        time: "Trưa",
        description: "- Trả phòng Đài Bắc, đi tàu cao tốc HSR khoảng 47p - 1h tới nơi\n - Nhận phòng, gửi đồ rồi đi chơi\n - Có các bức tranh tường và kiến trúc đầy màu sắc rực rỡ, mang đến không gian nghệ thuật độc đáo\n- Có quầy bán đồ lưu niệm, quán cà phê nhỏ",
        image: "https://static.toiimg.com/photo/91646475.cms",
        mapLink: "https://maps.app.goo.gl/mmx4kwcGakXr91a7A",
      },
      {
        name: "4. Cửa hàng trà sữa Chun Shui Tang",
        time: "Chiều",
        description: "- Đi khoảng 15p ô tô từ Làng Cầu Vồng\n- Cửa hàng nguyên bản đầu tiên, từ năm 1983 \n - Trà sữa trân châu Đài Loan",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/5e/61/68/photo-20190923-110241.jpg?w=800&h=500&s=1",
        mapLink: "https://maps.app.goo.gl/EbFDtEo7CigyjAkG6",
      },
      {
        name: "5. Miyahara",
        time: "Chiều",
        description: "- Đi bộ khoảng 15p hoặc ô tô 6p, là thiên đường đồ ngọt, điểm đến nổi tiếng của Đài Trung \n - Nên thử kem ở đây\n - Bánh dứa ngon, có cả cafe tầng 2",
        image: "https://taiwanderers.com/wp-content/uploads/2024/09/taichung-49-635x800.jpg",
        mapLink: "https://maps.app.goo.gl/sQ2c8GXZdFoLaKjM6",
      },
      {
        name: "6. Cafe Bugcat Capoo Foam Cat Cafe",
        time: "Chiều",
        description: "- Đi bộ 10p, taxi 2p từ\n- Mở 10 - 18h (nghỉ t2) \n - Tầng 2 ga Taichung",
        image: "https://i.pinimg.com/736x/6d/c3/05/6dc30592da30dd7adfe9e2a393b9c49b.jpg",
        mapLink: "https://maps.app.goo.gl/sQ2c8GXZdFoLaKjM6",
      },
      {
        name: "7. Nhà hát Quốc gia Đài Trung",
        time: "Chiều tối",
        description: "- Taxi 22p\n- Nhà hát Opera với đặc điểm kiến trúc là thiết kế 'bức tường cong'  \n- Có thể bỏ qua",
        image: "https://www.architecturalrecord.com/ext/resources/Issues/2016/Dec/building-type-studies/1612-Arts-Centers-Toyo-Ito-Associates-Taichung-City-Taiwan-National-Taichung-Theater-01.webp",
        mapLink: "https://maps.app.goo.gl/sQ2c8GXZdFoLaKjM6",
      },
      {
        name: "8. Đầm lầy Cao Mỹ (Gaomei Wetland)",
        time: "Hoàng hôn",
        description: "- Cách 30p đi xa, có thể đi nếu có thời gian\n - Là một khu bảo tồn đất ngập nước ở Đài Trung, Đài Loan, nổi tiếng với cảnh hoàng hôn lãng mạn, bãi cát bùn, thảm thực vật phong phú và nhiều loài động vật, đặc biệt là chim di cư\n- Hoàng hôn đẹp, giống biển vô cực",
        image: "https://imageapi.click2.travel/upload/turImageStock/20762/8AGCFVF1OL1S.jpg",
        mapLink: "https://maps.app.goo.gl/5oeKsLvjhtK1jQ2q6",
      },
      {
        name: "9. Chợ đêm Phùng Giáp (Fengchia)",
        time: "Tối",
        description: "- Chợ đêm nổi tiếng ẩm thực",
        image: "https://didailoan.net/wp-content/uploads/2022/07/cho-dem-phung-giap-1-1.png",
        mapLink: "https://maps.app.goo.gl/BSFfKSwqRkRK3tDN7",
      },
    ]
  },
  {
    day: 5,
    date: "13/10/25",
    city: "Nhật Nguyệt - Đài Trung",
    locations: [
      {
        name: "1. Hồ Nhật Nguyệt",
        time: "Sáng - chiều",
        description: "- Đi shuttle bus từ bến Taichung \n- Đi khoảng 8h - 16h30 lên xe, 18h về lại Taichung\n- Lịch: http://www.ntbus.com.tw/tour-sml.html\n https://www.sunmoonlaketrip.net/en/time_ticket.aspx\n https://www.sunmoonlake.gov.tw/en/guide/sunmoonlake\n https://en.thsrc.com.tw/",
        image: "https://dacsandailoan.vn/wp-content/uploads/2024/11/ho-nhat-nguyet-2.jpg",
        mapLink: "https://maps.app.goo.gl/u8FgLGoc6JWG28jb6",
      },
      {
        name: "2. Chơi tối ở Đài Trung",
        time: "Tối",
        description: "- Chơi tối cuối, ăn uống, về khách sạn nghỉ ngơi xếp đồ\n",
        image: "https://i.etsystatic.com/16237790/r/il/591da5/5840470695/il_fullxfull.5840470695_gwx4.jpg",
        mapLink: "https://maps.app.goo.gl/u8FgLGoc6JWG28jb6",
      },
    ]
  },
  {
    day: 6,
    date: "14/10/25",
    city: "Đài Bắc - Sôi động, hiện đại - Trung tâm",
    locations: [
      {
        name: "1. Khách sạn",
        time: "Trưa",
        description: "- Ăn uống, HSR về Đài Bắc, check in khách sạn",
        image: "https://i.etsystatic.com/16237790/r/il/591da5/5840470695/il_fullxfull.5840470695_gwx4.jpg",
        mapLink: "https://maps.app.goo.gl/ttwNR67Eoimjargy8",
      },
    {
        name: "2. Phố Tây Môn Đình",
        time: "Trưa chiều",
        description: "- Có thể bỏ qua đi sau\n - Là một trong những địa điểm du lịch phổ biến nhất Đài Loan. Được biết đến với cái tên 'Harajuku của Đài Loan'\n- Là khu vực mua sắm, giải trí, điểm hẹn của giới trẻ và là địa điểm du lịch không thể bỏ qua khi ghé thăm Đài Loan.\n- Có thể check in Nhà Đỏ Tây môn đình\n- Tối chợ đêm\n - Nhiều quán ăn tại đây\n https://zoomtravel.vn/kham-pha-ve-dep-huyen-bi-va-soi-dong-tai-pho-ximending.html",
        image: "https://cdn.sanity.io/images/cpvxwd28/production/2ee88a1a84bee0e7a00d8e2294835ba97f06b336-1599x1142.jpg",
        mapLink: "https://maps.app.goo.gl/fwPhAosoCsBi2XeJ8",
      },
      {
        name: "3. Du Hsiao Yueh",
        time: "Trưa chiều",
        description: "- Đồ Đài Loan, gần phố Dihua",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Fab0NDueqf5yZw4nXIUVL0ULBvNPxy-JLSboob4K7YIaY8tR",
        mapLink: "https://maps.app.goo.gl/FiTMM3TavTLF2jR598",
      },
      {
        name: "4. Công viên Cửu Khúc - Đại Đạo Thành (Dadaocheng Park)",
        time: "Chiều",
        description: "- Đi bộ 4p từ chỗ ăn\n - Khu phố đậm chất Đài Loan\n- Nổi bật với bến tàu Dadaocheng (Dadaocheng Wharf), đường Dihua (Dihua Street), và đền thờ City God (Thành Hoàng Miếu).\n- Nơi đây mang đậm nét lịch sử và văn hóa, thu hút du khách với các hoạt động ven sông, chợ truyền thống và kiến trúc cổ kính\n- Có thể đi dạo ven sông\n",
        image: "https://www.travel.taipei/image/208006/?r=1612164070193",
        mapLink: "https://maps.app.goo.gl/qmxMtiMM8rzHRt1Z8",
      },
      {
        name: "5. Phố cổ Dihua (迪化街)",
        time: "Chiều",
        description: "- Đi bộ từ công viên dọc ra\n - Từng là một khu kinh doanh ở Đài Bắc, nơi trung chuyển hàng hóa, các sản phẩm trà và vải phát triển thịnh vượng.\n- Có những điểm đặc trưng như kiến trúc lịch sử, các cửa hàng bán dược liệu, trà, đồ khô, đồ trang trí thủ công mỹ nghệ, cùng với các điểm văn hóa như Đền Thành Đô Taipei (Taipei Xiahai City God Temple)",
        image: "https://taiwanderers.com/wp-content/uploads/2024/07/dihua-Dadaocheng-44-1144x800.jpg",
        mapLink: "https://maps.app.goo.gl/kmTKN9riugv5VTRVA",
      },
      {
        name: "6. Cafe Op.118.2",
        time: "Chiều",
        description: "- Đi bộ dọc Dihua hoặc 8p từ bến tàu\n - Mở cửa 10h30 - 20h, nghỉ thứ 5",
        image: "https://tingandkao.com/wp-content/uploads/2024/11/20241218-zzqpt.jpg",
        mapLink: "https://maps.app.goo.gl/rsANk6PVGA97Uzt86",
      },
      {
        name: "7. Bến tàu Dadaocheng ngắm hoàng hôn",
        time: "Chiều",
        description: "- 8p từ quán cafe ra bến tàu\n",
        image: "https://www.travel.taipei/content/images/tours/374144/1024x768_tours-image-aqcsoqal1kyubusrbx95rw.jpg",
        mapLink: "https://maps.app.goo.gl/dsmM48xvfta9MW6t5",
      },
      {
        name: "8. Chợ đêm Ninh Hạ (Ningxia)",
        time: "Tối",
        description: "- Đi bộ 13p hoặc taxi 7p\n- Giờ Măm đến rồi xD\n - Mở cửa từ 17h - 23h30 https://vn.trip.com/moments/poi-ningxia-night-market-10539668/",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWN-qojcJI_QWu33pqwwytZ0jK2rtH3cABcQ&s",
        mapLink: "https://maps.app.goo.gl/aAtqntGjD9aHj8fi6",
      },
      {
        name: "9. Trứng chiên hàu Yuen Huan Pien",
        time: "Tối",
        description: "- Đi bộ 1p từ Ninh Hạ\n - Đặc sản Đài Loan, sao Michellin từ 2018\n - Phải thử!!!\n - Đóng cửa thứ 5, từ 12:00 PM đến 2:30 PM & 4:30 PM - 12:30 AM",
        image: "https://i0.wp.com/oo-foodielicious.com/wp-content/uploads/2023/09/Yuen-Huan-Pien-Oyster-Egg-Omelette-Taipei-Michelin-Guide-Review-8.jpg?ssl=1",
        mapLink: "https://maps.app.goo.gl/zsAX8UHUNnbL7pPF8",
      },
      {
        name: "10. Ngỗng A Cheng",
        time: "Tối",
        description: "- Taxi 5p từ hàng hàu\n - Mở 11h30 - 9h tối\n - Ăn xong có thể quay lại Ximending chơi hoặc sang chợ khác ",
        image: "https://i0.wp.com/trickytaipei.com/wp-content/uploads/2025/08/9d4b5-acheng-goose-taipei-1.jpg",
        mapLink: "https://maps.app.goo.gl/oBH8J1dUSzMmGCC78",
      },
      {
        name: "11. Chợ đêm Shilin",
        time: "Tối",
        description: "- Taxi 11p từ A Cheng\n- Chợ đêm rộng nhất Đài Loan \n - Gà rán XXL, hàu nướng, trà sữa, nhiều shop quần áo, game",
        image: "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2024/07/02/1c9957fa9f9f5c3cc6105dbe9ba1d9cf_1000x1000.jpg",
        mapLink: "https://maps.app.goo.gl/pzGZSZc8xZ1QpyyZA",
      },
    ]
  },
  {
    day: 7,
    date: "15/10/25",
    city: "Đài Bắc - Làng cổ (thuê xe ô tô)",
    locations: [
      {
        name: "1. Sữa đậu nành Yong He",
        time: "Sáng",
        description: "- Ăn sáng kiểu Đài Loan, ngoài ra còn Fuhang nhưng đợi 30p - 1 tiếng\n - Gần MRT Ximenting\n https://eatingintaipei.com/yonghe-world-soy-milk-king/",
        image: "https://i0.wp.com/eatingintaipei.com/wp-content/uploads/2023/04/soymilk-king_7.jpg?w=1116&ssl=1",
        mapLink: "https://maps.app.goo.gl/6Q8jJbiMZDxoemjD8",
      },
      {
        name: "2. Trạm xe buýt Khiêu Thạch (Tiaoshi)",
        time: "Sáng",
        description: "- Trạm xe buýt ven biển nổi tiếng đẹp nhất Đài Loan \n - Đẹp như ngôn tình hú hú\n - Đi taxi khoảng 50p từ trung tâm",
        image: "https://pbs.twimg.com/media/GSBvXLvbAAAJ4K3.jpg",
        mapLink: "https://maps.app.goo.gl/vzaRsGHFszosqQ418",
      },
      {
        name: "3. Jiufen - Cửu phần",
        time: "Sáng",
        description: "- Taxi từ trung tâm khoảng 40p, từ Khiêu Thạch 50p\n - Làng cổ Cửu Phần, nổi tiếng với văn hoá trà đạo, view núi và biển rất đẹp\n - Có thể thuê xe tự đi cho tiện\n - Ăn Taro Ball, Lai Ah Po, A Gan Yi",
        image: "https://girleatworld.net/wp-content/uploads/2019/03/jiufen-taiwan-teahouse.jpg",
        mapLink: "https://maps.app.goo.gl/6Q8jJbiMZDxoemjD8",
      },
      {
        name: "4. A-Mei Tea House - nhà trà đạo",
        time: "Sáng - trưa",
        description: "- Trải nghiệm văn hoá trà đạo tại Cửu Phần\n - Có thể mua voucher trước\n - Thăm quan tại Cửu Phần",
        image: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_863/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/gzu0wr027u1p3ztprefu/AmeiTeahouseinJiufen.jpg",
        mapLink: "https://maps.app.goo.gl/Bq99KFCEEKiwyqst5",
      },
      {
        name: "5. Thác Thập Phần Shifen",
        time: "Chiều",
        description: "- Đi ô tô 37p từ Jiufen\n - Được mệnh danh là “Niagara của Châu Á”\n - Thác Shifen Đài Loan chính là bức tranh thiên nhiên với sự kết hợp khá hài hòa giữa cảnh vật thiên nhiên, cây cỏ, núi non và con người\n - Để con/em lại xem có phải đi bộ nhiều ko và có cần mua vé ko",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/51/ShiFengWaterFall_002.jpg",
        mapLink: "https://maps.app.goo.gl/N6UVQ1GkSxLAXpat7",
      },
      {
        name: "6. Phố Cổ Thập Phần Shifen",
        time: "Chiều - Hoàng hôn",
        description: "- 2p đi ô tô từ Thác, 37p từ Jiufen\n - Phố cổ đường tàu, ngắm hoàng hôn\n - Thả đèn trời\n - Ăn đậu phụ thúi",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEir3RxtXPaCMpCg66NJv4i-Ha-uEppvWVUjmz5A0JfpbsmD7JnUIAWxfVPJKqiThAn5M9blaBgSRvbze_eM57l9jqFvA5D1yoOqMJoisQ-krsHudpNVCOQWyWvRdwl3ERvMKFmx1g/s1600/02+Shifen+Old+Street+-+Release+the+Sky+Lanterns+(%E5%8D%81%E5%88%86%E6%94%BE%E5%A4%A9%E7%87%88)!+@+New+Taipei+%5BTaiwan%5D+(Large).JPG",
        mapLink: "https://maps.app.goo.gl/WatRYxnqVTswpULp6",
      },
      {
        name: "7. Taipei 101",
        time: "Tối",
        description: "- Đi xe ô tô về khoảng 30p, có thể về nhà nghỉ trước đỡ mệt\n- Biểu tượng kiến trúc và trung tâm thương mại, tài chính sầm uất của Đài Bắc\n - Có đài quan sát 360 độ trên cao, một khu mua sắm cao cấp với nhiều thương hiệu nổi tiếng, cùng một khối cầu giảm chấn giúp bảo vệ trước bão và động đất\n - Ngắm cảnh, đi dạo, mua sắm\n - Ăn Din Tai Fung!!!!\n",
        image: "https://image-tc.galaxy.tf/wijpeg-19za0ro24q24b9b9ez8lz2e9x/taipei-101_standard.jpg?crop=112%2C0%2C1777%2C1333",
        mapLink: "https://maps.app.goo.gl/WatRYxnqVTswpULp6",
      },
      {
        name: "8. Chợ đêm Raohe",
        time: "Tối",
        description: "- Ăn vặt chợ đêm hoặc mua trà sữa",
        image: "https://media.istockphoto.com/id/501192481/photo/raohe-street-night-market-in-taipei-taiwan.jpg?s=612x612&w=0&k=20&c=eNrMc9_2bPFbc2bM1A22L5Ec7uPnFkO679vquxKTq9U=",
        mapLink: "https://maps.app.goo.gl/WatRYxnqVTswpULp6",
      },
    ]
  },
  {
    day: 8,
    date: "16/10/25",
    city: "Đài Bắc - Suối nước nóng",
    locations: [
      {
        name: "1. Fuhang Soy Milk",
        time: "Sáng",
        description: "- Rất đông, có thể đợi 1 tiếng\n - Ăn sáng đặc trưng",
        image: "https://wefuntaiwan.com/wp-content/uploads/2024/01/358172981_6399164123508680_2323760040338189169_n.jpg",
        mapLink: "https://maps.app.goo.gl/vzaRsGHFszosqQ418",
      },
      {
        name: "2. Suối nước nóng Beitou",
        time: "Sáng",
        description: " - Cách trung tâm tầm 20p ô tô, có thể đi tàu MRT 21 phút (12 trạm) từ ga chính Taipei Main Station\n - Vùng núi với mạch nước nóng tự nhiên\n - Ngày cuối Đài Bắc để nghỉ ngơi, đi tắm nước nóng thư giãn\n - Có bể công cộng và riêng tư, công cộng chắc đông nên nhà mình chắc thuê phòng riêng cho thoải mái ạ\n - Ăn tại đây luôn, đói về Đài Bắc ăn tiếp",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/32/dc/5f/img-20191203-wa0045-largejpg.jpg?w=900&h=500&s=1",
        mapLink: "https://maps.app.goo.gl/vzaRsGHFszosqQ418",
      },
      {
        name: "3. Mì bò Yong Kang",
        time: "Trưa chiều",
        description: "- Đi tàu về lại trung tâm Đài Bắc, đói có thể ăn luôn hoặc về nghỉ hoặc ăn sau tuỳ\n- Mì bò Đài Loan nổi tiếng mlem mlem\n - Gần bến tàu MRT Dongmen đi bộ 5p",
        image: "https://www.thediningexperience.org/wp-content/20170531-Taipei-YongKangBeefNoodle-04.jpg",
        mapLink: "https://maps.app.goo.gl/ttwNR67Eoimjargy8",
      },
      {
        name: "4. Đi dạo ngày cuối Taipei",
        time: "Chiều",
        description: "- Nghỉ ngơi trung tâm, cafe, mua sắm - cập nhật thêm",
        image: "https://www.rachelenroute.com/wp-content/uploads/2019/05/cafe-35.jpg",
        mapLink: "https://maps.app.goo.gl/vzaRsGHFszosqQ418",
      },
      {
        name: "5. Phố Tây Môn Đình",
        time: "Chiều tối",
        description: "- Tối lên đèn, chợ đêm\n- Chuẩn bị hôm sau đi Đài Trung",
        image: "https://www.travel.taipei/content/images/attractions/222891/1024x768_attractions-image-7b6ztxeerus80izhlkfeoq.jpg",
        mapLink: "https://maps.app.goo.gl/vzaRsGHFszosqQ418",
      },
      {
        name: "5. Diao Min Asia Sauerkraut Fish",
        time: "Tối",
        description: "- Ở Ximen luôn, canh cá cay nổi tiếng\n - Hoặc ăn Immanuel Fish Soup",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/65/67/3b/caption.jpg?w=900&h=500&s=1",
        mapLink: "https://maps.app.goo.gl/vzaRsGHFszosqQ418",
      },
      {
        name: "6. Cơm gà Shan Nei chợ đêm Nanjichang",
        time: "Tối",
        description: "- Ở gần Ximen đi taxi vài phút, chợ local\n- Mở 11h - 21h\n - Cơm gà rưới mỡ ngon",
        image: "https://miro.medium.com/v2/resize:fit:1400/1*4TH6Ngv5XflhBNN1I0atmg.jpeg",
        mapLink: "https://maps.app.goo.gl/vzaRsGHFszosqQ418",
      },
    ]
  },
  {
    day: 9,
    date: "17/10/25",
    city: "Đài Bắc - Ngày cuối",
    locations: [
      {
        name: "1. Sân bay Đài Bắc",
        time: "Bay 12:30",
        description: "- Ăn sáng rồi đi, hạ cánh 14:40, kết thúc chuyến đi\n - Hoặc về hôm trước từ 19h",
        image: "https://cdn.sanity.io/images/nxpteyfv/goguides/f2e575f11cb6e0c0b0049fcdd708841f025f1ec8-1600x1067.jpg",
        mapLink: "https://maps.app.goo.gl/ttwNR67Eoimjargy8",
      },
    ]
  },
];
