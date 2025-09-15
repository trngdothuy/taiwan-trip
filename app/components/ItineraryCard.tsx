'use client'

const itinerary = [
  {
    day: 1,
    date: "04/10/25",
    city: "Đài Bắc - Trung tâm",
    locations: [
      {
        name: "1. Đài tưởng niệm Tưởng Giới Thạch",
        time: "Sáng",
        description: "- Gồm một khu phức hợp lớn với kiến trúc độc đáo\n - Một bức tượng lớn của Tưởng Giới Thạch bên trong sảnh chính, hai bộ cầu thang gồm 89 bậc tượng trưng cho tuổi thọ của ông, một thư viện và bảo tàng lưu giữ lịch sử Đài Loan, cùng với công viên và các công trình văn hóa khác xung quanh. ",
        image: "data:image/jpeg;base64,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",
        mapLink: "https://share.google/pU5G6JYFVS5EtxCc7",
        lat: 25.0375,
        lng: 121.5210,
      },
      {
        name: "2. Tòa nhà Văn phòng Tổng thống Đài Loan ",
        time: "Sáng",
        description: "- Đi bộ 13 phút từ chỗ Tưởng Giới Thạch\n- Là biểu tượng lịch sử và chính trị của đất nước, có lịch sử từ thời kỳ Nhật Bản cai trị.\n- Bên trong tòa nhà có các phòng ban chính phủ, sảnh, vườn hoa, cùng với các triển lãm về lịch sử và quá trình dân chủ hóa của Đài Loan.\n- Có thể tham quan các khu vực công cộng, xem các buổi triển lãm và chiêm ngưỡng kiến trúc độc đáo của tòa nhà.",
        image: "https://preview.redd.it/krslrxg7bp151.jpg?width=640&crop=smart&auto=webp&s=c5389a56a0f7146d519c98d55d7909cf819dbe17",
        mapLink: "https://maps.app.goo.gl/D6CWKhkFmDdcXhEN8",
        lat: 25.0339,
        lng: 121.5645,
      },
      {
        name: "3. Mì bò Lao Wang Ji",
        time: "Trưa",
        description: "- Mì bò Đài Loan nổi tiếng mlem mlem\n - Có thể ăn ở Liu Shandong nổi tiếng nhưng đông, uống trà sữa Chun Shui Tang",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEieEZaom1cHLIs3wMFNxhHPFBxwdaJjCyjG3Umm5auJ-nXg3wuIyQuaUUM_5fY8ndBSJtorWoE8D8DjpinnuZVt9kfDdDR9KgWvBlBiIPu_48qNLs_yI7d66_RXjBiZyD10TbLoEw/s1600/IMG_0950.JPG",
        mapLink: "https://maps.app.goo.gl/ttwNR67Eoimjargy8",
        lat: 25.0339,
        lng: 121.5645,
      },
      {
        name: "4. Phố Tây Môn Đình",
        time: "Trưa",
        description: "- Là một trong những địa điểm du lịch phổ biến nhất Đài Loan. Được biết đến với cái tên 'Harajuku của Đài Loan'\n- Là khu vực mua sắm, giải trí, điểm hẹn của giới trẻ và là địa điểm du lịch không thể bỏ qua khi ghé thăm Đài Loan.\n- Có thể check in Nhà Đỏ Tây môn đình\n- Tối chợ đêm\n - Nhiều quán ăn tại đây\n https://zoomtravel.vn/kham-pha-ve-dep-huyen-bi-va-soi-dong-tai-pho-ximending.html",
        image: "https://cdn.sanity.io/images/cpvxwd28/production/2ee88a1a84bee0e7a00d8e2294835ba97f06b336-1599x1142.jpg",
        mapLink: "https://maps.app.goo.gl/fwPhAosoCsBi2XeJ8",
        lat: 25.0510,
        lng: 121.5770,
      },
      {
        name: "5. Phố cổ Dihua (迪化街)",
        time: "Chiều",
        description: "- Từng là một khu kinh doanh ở Đài Bắc, nơi trung chuyển hàng hóa, các sản phẩm trà và vải phát triển thịnh vượng.\n- Có những điểm đặc trưng như kiến trúc lịch sử, các cửa hàng bán dược liệu, trà, đồ khô, đồ trang trí thủ công mỹ nghệ, cùng với các điểm văn hóa như Đền Thành Đô Taipei (Taipei Xiahai City God Temple)",
        image: "https://taiwanderers.com/wp-content/uploads/2024/07/dihua-Dadaocheng-44-1144x800.jpg",
        mapLink: "https://maps.app.goo.gl/kmTKN9riugv5VTRVA",
        lat: 25.0510,
        lng: 121.5770,
      },
      {
        name: "6. Công viên Cửu Khúc - Đại Đạo Thành (Dadaocheng Park)",
        time: "Chiều",
        description: "- Khu phố đậm chất Đài Loan\n- Nổi bật với bến tàu Dadaocheng (Dadaocheng Wharf), đường Dihua (Dihua Street), và đền thờ City God (Thành Hoàng Miếu).\n- Nơi đây mang đậm nét lịch sử và văn hóa, thu hút du khách với các hoạt động ven sông, chợ truyền thống và kiến trúc cổ kính\n- Có thể đi dạo ven sông, nhiều quán nước, quán ăn\n https://www.facebook.com/groups/156403131659286/posts/1874661126500136/",
        image: "https://www.travel.taipei/content/images/tours/374144/1024x768_tours-image-aqcsoqal1kyubusrbx95rw.jpg",
        mapLink: "https://maps.app.goo.gl/T4q6BmCoPALzM6fG7",
        lat: 25.0510,
        lng: 121.5770,
      },
      {
        name: "7. Chợ đêm Ninh Hạ (Ningxia)",
        time: "Tối",
        description: "- Giờ Măm đến rồi xD\n https://vn.trip.com/moments/poi-ningxia-night-market-10539668/",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWN-qojcJI_QWu33pqwwytZ0jK2rtH3cABcQ&s",
        mapLink: "https://maps.app.goo.gl/aAtqntGjD9aHj8fi6",
        lat: 25.0510,
        lng: 121.5770,
      },
      {
        name: "8. Trứng chiên hàu Yuen Huan Pien",
        time: "Tối",
        description: "- Đặc sản Đài Loan\n - Phải thử!!!\n - Đóng cửa thứ 5",
        image: "https://i0.wp.com/oo-foodielicious.com/wp-content/uploads/2023/09/Yuen-Huan-Pien-Oyster-Egg-Omelette-Taipei-Michelin-Guide-Review-8.jpg?ssl=1",
        mapLink: "https://maps.app.goo.gl/zsAX8UHUNnbL7pPF8",
        lat: 25.0510,
        lng: 121.5770,
      },
    ],
  },
  {
    day: 2,
    date: "05/10/25",
    city: "Đài Bắc - Làng cổ",
    locations: [
      {
        name: "1. Sữa đậu nành Yong He",
        time: "Sáng",
        description: "- Ăn sáng kiểu Đài Loan\n - Gần MRT Ximenting\n https://eatingintaipei.com/yonghe-world-soy-milk-king/",
        image: "https://i0.wp.com/eatingintaipei.com/wp-content/uploads/2023/04/soymilk-king_7.jpg?w=1116&ssl=1",
        mapLink: "https://maps.app.goo.gl/6Q8jJbiMZDxoemjD8",
        lat: 25.0881,
        lng: 121.5246,
      },
      {
        name: "2. Jiufen - Cửu phần",
        time: "Sáng",
        description: "- Làng cổ Cửu Phần, nổi tiếng với văn hoá trà đạo, view núi và biển rất đẹp\n - Có thể thuê xe tự đi cho tiện",
        image: "https://girleatworld.net/wp-content/uploads/2019/03/jiufen-taiwan-teahouse.jpg",
        mapLink: "https://maps.app.goo.gl/6Q8jJbiMZDxoemjD8",
        lat: 25.0881,
        lng: 121.5246,
      },
      {
        name: "3. A-Mei Tea House - nhà trà đạo",
        time: "Sáng",
        description: "- Trải nghiệm văn hoá trà đạo\n - Có thể mua voucher trước",
        image: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_863/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/gzu0wr027u1p3ztprefu/AmeiTeahouseinJiufen.jpg",
        mapLink: "https://maps.app.goo.gl/Bq99KFCEEKiwyqst5",
        lat: 25.0881,
        lng: 121.5246,
      },
      {
        name: "4. Tháp Thập Phần Shifen",
        time: "Trưa",
        description: "- Được mệnh danh là “Niagara của Châu Á”\n - Thác Shifen Đài Loan chính là bức tranh thiên nhiên với sự kết hợp khá hài hòa giữa cảnh vật thiên nhiên, cây cỏ, núi non và con người\n - Để con/em lại xem có phải đi bộ nhiều ko và có cần mua vé ko",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/51/ShiFengWaterFall_002.jpg",
        mapLink: "https://maps.app.goo.gl/N6UVQ1GkSxLAXpat7",
        lat: 25.0881,
        lng: 121.5246,
      },
      {
        name: "5. Phố Cổ Thập Phần Shifen",
        time: "Chiều",
        description: "- Phố cổ đường tàu\n - Thả đèn trời\n - Ăn đậu phụ thúi",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEir3RxtXPaCMpCg66NJv4i-Ha-uEppvWVUjmz5A0JfpbsmD7JnUIAWxfVPJKqiThAn5M9blaBgSRvbze_eM57l9jqFvA5D1yoOqMJoisQ-krsHudpNVCOQWyWvRdwl3ERvMKFmx1g/s1600/02+Shifen+Old+Street+-+Release+the+Sky+Lanterns+(%E5%8D%81%E5%88%86%E6%94%BE%E5%A4%A9%E7%87%88)!+@+New+Taipei+%5BTaiwan%5D+(Large).JPG",
        mapLink: "https://maps.app.goo.gl/WatRYxnqVTswpULp6",
        lat: 25.0881,
        lng: 121.5246,
      },
      {
        name: "6. Taipei 101",
        time: "Tối",
        description: "- Đi xe ô tô về khoảng 30p, có thể về nhà nghỉ trước đỡ mệt\n- Biểu tượng kiến trúc và trung tâm thương mại, tài chính sầm uất của Đài Bắc\n - Có đài quan sát 360 độ trên cao, một khu mua sắm cao cấp với nhiều thương hiệu nổi tiếng, cùng một khối cầu giảm chấn giúp bảo vệ trước bão và động đất\n - Ngắm cảnh, đi dạo, mua sắm\n - Ăn Din Tai Fung!!!!",
        image: "https://image-tc.galaxy.tf/wijpeg-19za0ro24q24b9b9ez8lz2e9x/taipei-101_standard.jpg?crop=112%2C0%2C1777%2C1333",
        mapLink: "https://maps.app.goo.gl/WatRYxnqVTswpULp6",
        lat: 25.0881,
        lng: 121.5246,
      },
    ]},
    {
    day: 3,
    date: "06/10/25",
    city: "Đài Bắc - Suối nước nóng",
    locations: [
      {
        name: "1. Suối nước nóng Beitou",
        time: "Sáng",
        description: "- Có thể ăn sáng ở Fuhang Soy Milk (đông)\n - Cách trung tâm tầm 20p ô tô, vùng núi với mạch nước nóng tự nhiên\n - Ngày cuối Đài Bắc để nghỉ ngơi, đi tắm nước nóng thư giãn\n - Có bể công cộng và riêng tư, công cộng chắc đông nên nhà mình chắc thuê phòng riêng cho thoải mái ạ\n - Ăn trưa tại đây luôn",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/32/dc/5f/img-20191203-wa0045-largejpg.jpg?w=900&h=500&s=1",
        mapLink: "https://maps.app.goo.gl/vzaRsGHFszosqQ418",
        lat: 25.0881,
        lng: 121.5246,
      },
      {
        name: "2. Trạm xe buýt Khiêu Thạch (Tiaoshi)",
        time: "Chiều",
        description: "- Trạm xe buýt ven biển nổi tiếng đẹp nhất Đài Loan \n - Đẹp như ngôn tình hú hú",
        image: "https://pbs.twimg.com/media/GSBvXLvbAAAJ4K3.jpg",
        mapLink: "https://maps.app.goo.gl/vzaRsGHFszosqQ418",
        lat: 25.0881,
        lng: 121.5246,
      },
      {
        name: "3. Chợ đêm Shilin",
        time: "Tối",
        description: "- Chợ đêm rộng nhất Đài Loan \n",
        image: "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2024/07/02/1c9957fa9f9f5c3cc6105dbe9ba1d9cf_1000x1000.jpg",
        mapLink: "https://maps.app.goo.gl/pzGZSZc8xZ1QpyyZA",
        lat: 25.0881,
        lng: 121.5246,
      },
    ]
  },
  {
    day: 4,
    date: "07/10/25",
    city: "Đài Trung",
    locations: [
      {
        name: "1. Làng Cầu Vồng",
        time: "Sáng",
        description: "- Trả phòng Đài Bắc, đi tàu cao tốc HSR khoảng 1h tới nơi\n - Nhận phòng, gửi đồ rồi đi chơi\n - Có các bức tranh tường và kiến trúc đầy màu sắc rực rỡ, mang đến không gian nghệ thuật độc đáo\n- Có quầy bán đồ lưu niệm, quán cà phê nhỏ",
        image: "https://static.toiimg.com/photo/91646475.cms",
        mapLink: "https://maps.app.goo.gl/mmx4kwcGakXr91a7A",
        lat: 25.0881,
        lng: 121.5246,
      },
      {
        name: "2. Cửa hàng trà sữa Chun Shui Tang",
        time: "Chiều",
        description: "- Đi khoảng 15p ô tô từ Làng Cầu Vồng\n- Cửa hàng nguyên bản đầu tiên, từ năm 1983 \n - Trà sữa trân châu Đài Loan",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/5e/61/68/photo-20190923-110241.jpg?w=800&h=500&s=1",
        mapLink: "https://maps.app.goo.gl/EbFDtEo7CigyjAkG6",
        lat: 25.0881,
        lng: 121.5246,
      },
      {
        name: "3. Miyahara",
        time: "Chiều",
        description: "- Đi bộ khoảng 15p là thiên đường đồ ngọt, điểm đến nổi tiếng của Đài Trung \n - Nên thử kem ở đây\n - Bánh dứa ngon, có cả cafe tầng 2",
        image: "https://taiwanderers.com/wp-content/uploads/2024/09/taichung-49-635x800.jpg",
        mapLink: "https://maps.app.goo.gl/sQ2c8GXZdFoLaKjM6",
        lat: 25.0881,
        lng: 121.5246,
      },
      {
        name: "4. Đường Thảo Ngộ (Calligraphy Greenway)",
        time: "Chiều",
        description: "- Còn được gọi là con đường thư pháp, dài khoảng 3,6km  \n - Là một hành lang xanh kết hợp thiên nhiên, nghệ thuật và cuộc sống đô thị.",
        image: "https://taichung.travel/content/images/attractions/16443/1024x768_Filedata635853583530210336.jpg",
        mapLink: "https://maps.app.goo.gl/sQ2c8GXZdFoLaKjM6",
        lat: 25.0881,
        lng: 121.5246,
      },
      {
        name: "5. Nhà hát Quốc gia Đài Trung",
        time: "Chiều",
        description: "- Nhà hát Opera với đặc điểm kiến trúc là thiết kế 'bức tường cong'  \n",
        image: "https://www.architecturalrecord.com/ext/resources/Issues/2016/Dec/building-type-studies/1612-Arts-Centers-Toyo-Ito-Associates-Taichung-City-Taiwan-National-Taichung-Theater-01.webp",
        mapLink: "https://maps.app.goo.gl/sQ2c8GXZdFoLaKjM6",
        lat: 25.0881,
        lng: 121.5246,
      },
      {
        name: "6. Đầm lầy Cao Mỹ (Gaomei Wetland)",
        time: "Hoàng hôn",
        description: "- Cách 30p đi xa, có thể đi nếu có thời gian\n - Là một khu bảo tồn đất ngập nước ở Đài Trung, Đài Loan, nổi tiếng với cảnh hoàng hôn lãng mạn, bãi cát bùn, thảm thực vật phong phú và nhiều loài động vật, đặc biệt là chim di cư\n- Hoàng hôn đẹp, giống biển vô cực",
        image: "https://imageapi.click2.travel/upload/turImageStock/20762/8AGCFVF1OL1S.jpg",
        mapLink: "https://maps.app.goo.gl/5oeKsLvjhtK1jQ2q6",
        lat: 25.0881,
        lng: 121.5246,
      },
      {
        name: "7. Chợ đêm Phùng Giáp (Fengchia)",
        time: "Tối",
        description: "- Chợ đêm nổi tiếng ẩm thực",
        image: "https://didailoan.net/wp-content/uploads/2022/07/cho-dem-phung-giap-1-1.png",
        mapLink: "https://maps.app.goo.gl/BSFfKSwqRkRK3tDN7",
        lat: 25.0881,
        lng: 121.5246,
      },
    ]
  },
  {
    day: 5,
    date: "08/10/25",
    city: "Đài Nam",
    locations: [
      {
        name: "1. Mỏ Muối Thất Cổ (Qigu))",
        time: "Sáng - Trưa",
        description: "- Đi HSR cao tốc tới Đài Nam\n - Cách trung tâm tầm 20km ô tô\n - Hệ sinh thái phong phú với các hồ nước lớn trên đất liền, thu hút nhiều loài chim quý hiếm như cò thìa mùa đông di cư và chim mặt đen.\n - Không có gì nhiều lắm, có thể đi hoặc ko hoặc đổi qua Rừng Ngập Mặn Sicao Green Tunel ",
        image: "https://www.swcoast-nsa.gov.tw/image/2475/1024x768",
        mapLink: "https://maps.app.goo.gl/EExzFHB86VeurkRi6",
        lat: 25.0881,
        lng: 121.5246,
      },
      {
        name: "2. Rừng Ngập Mặn Sicao",
        time: "Sáng - Trưa",
        description: "- Gần trung tâm hơn mỏ muối\n - Du thuyền Sicao-Taijiang: 200 Đài tệ cho toàn bộ vé vào cửa, 100 Đài tệ cho trẻ em, 100 Đài tệ cho vé giảm giá, 30 Đài tệ cho vé vé ngắm Cò thìa mặt đen.\n - Giờ mở cửa: Từ thứ Hai - Chủ Nhật (08:00 - 16:00)",
        image: "https://www.swcoast-nsa.gov.tw/image/13063/1024x768",
        mapLink: "https://maps.app.goo.gl/tPYxWSbxqDDhsJBU6",
        lat: 25.0881,
        lng: 121.5246,
      },
      {
        name: "3. Phố cổ An Bình",
        time: "Chiều",
        description: "- Thuộc địa cũ của Hà Lan \n - Kiến trúc nhà cổ, không khí cổ kính, nhiều đặc sản địa phương của Đài Nam và các hàng quán độc đáo, mang đến trải nghiệm thú vị cho du khách yêu thích sự hoài cổ.  \n - Có thể tham khảo Tour đi bộ miễn phí, thăm quan Pháo đài An Bình",
        image: "https://edisontours.com/wp-content/uploads/2023/12/Shennong-Street-3.jpg",
        mapLink: "https://maps.app.goo.gl/u8FgLGoc6JWG28jb6",
        lat: 25.0881,
        lng: 121.5246,
      },
      {
        name: "4. Nhà cổ Lu",
        time: "Chiều",
        description: "- Trên phố An Bình  \n - Nằm trong Tour đi bộ miễn phí",
        image: "https://lh3.googleusercontent.com/p/AF1QipOT6RzJhEwe-jL9QdEjZI65a6kNNNawuq6nTrZ0=w426-h240-k-no",
        mapLink: "https://maps.app.goo.gl/u8FgLGoc6JWG28jb6",
        lat: 25.0881,
        lng: 121.5246,
      },
      {
        name: "5. Haishan Hall (海山館)",
        time: "Chiều",
        description: "- Là một tòa nhà lịch sử và former military assembly hall (cựu hội trường quân sự)\n - Trưng bày bộ sưu tập các vật phẩm và bùa chú dùng để trừ tà và nằm trên một con phố hẹp, quanh co, con phố cổ nhất ở Đài Nam và cả Đài Loan.\n - Nằm trong Tour đi bộ miễn phí ",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/%E5%AE%89%E5%B9%B3%E6%B5%B7%E5%B1%B1%E9%A4%A8.JPG/1200px-%E5%AE%89%E5%B9%B3%E6%B5%B7%E5%B1%B1%E9%A4%A8.JPG",
        mapLink: "https://maps.app.goo.gl/u8FgLGoc6JWG28jb6",
        lat: 25.0881,
        lng: 121.5246,
      },
      {
        name: "6. Chợ Yong Le",
        time: "Trưa",
        description: "- Mở cửa 7h30 - 5h30 chiều \n - Nhiều quán ăn, mì, cơm dọc phố Gouhua, khu (section) 3 \n - Đầu cá kho nổi tiếng - món ngon nổi tiếng Chiayi trên Netflix",
        image: "https://scontent.fbcn10-1.fna.fbcdn.net/v/t39.30808-6/488050961_1085616100246876_6724320691079093423_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=8J2Y5pzsxXoQ7kNvwFa1sjs&_nc_oc=AdmilA-fWUbpC4OMSO3mFNp12Ve_5bw66fECnAZPKJX40ZQPHbqTDrJD-GnwO8KHbO0&_nc_zt=23&_nc_ht=scontent.fbcn10-1.fna&_nc_gid=VdXiJwfR_GENyxy4VnMFng&oh=00_AfaRuAXEzViZV3Gsbq15GYXeuumrkjWaUnHYNqlwk1qfXA&oe=68CE62DB",
        mapLink: "https://maps.app.goo.gl/1xxftY98scvGgym9A",
        lat: 25.0881,
        lng: 121.5246,
      },
      {
        name: "7. Phố Thần Nông (Shennong)",
        time: "Chiều tối",
        description: "- Là một huyền thoại sống về di sản và văn hóa, nằm ẩn mình trong những ngõ hẻm rối ren của thành phố Đài Nam sôi động.\n -  Phố cổ từng là trung tâm thương mại sầm uất trong quá khứ, nay trở thành trung tâm nghệ thuật sáng tạo với nhiều cửa hàng thủ công, quán ăn và kiến trúc văn hóa Thanh - Nhật Bản độc đáo\n - Đặc biệt nổi tiếng với không khí lung linh khi đèn lồng được thắp sáng vào buổi tối, thích hợp cho việc đi dạo và chụp ảnh. ",
        image: "https://media.istockphoto.com/id/1470709450/es/foto/shennong-street-en-tainan-taiw%C3%A1n.jpg?s=1024x1024&w=is&k=20&c=qMAIXYhm9WLFg0b07eWvUF_L0rlZ9ysUDaolTBa1Quo=",
        mapLink: "https://maps.app.goo.gl/u8FgLGoc6JWG28jb6",
        lat: 25.0881,
        lng: 121.5246,
      },
      {
        name: "8. Xích Khám Lâu (Chihkan Tower)",
        time: "Chiều",
        description: "- Pháo đài Provintia là một di tích lịch sử và văn hóa quan trọng ở Đài Nam, Đài Loan, bao gồm các công trình như Đền Haisheng, Biệt thự Wengchang và Trường Đại học Penghu, cùng với bức tượng của Tướng Minh Koxinga, người có công đánh bại quân Hà Lan. \n - Có thể đi tới đền Mazu thờ thần biển lớn nhất Đài Loan ở gần đó\n - Lựa chọn khác là bảng tàng Chimei (nên đi lúc hoàng hôn hoặc tối), hơi hướng Châu Âu",
        image: "https://www.taiwanquest.com/content/images/2023/03/fort-provintia-chihkan-tower-tainan.jpg",
        mapLink: "https://maps.app.goo.gl/u8FgLGoc6JWG28jb6",
        lat: 25.0881,
        lng: 121.5246,
      },
      {
        name: "9. Chợ đêm Đài Nam",
        time: "Tối",
        description: "- Chợ đêm Garden nổi tiếng với quy mô rộng lớn với gần 400 gian hàng và là một trong những chợ đêm nổi tiếng nhất khu vực \n - Mở cửa 5h chiều - 12h đêm",
        image: "https://c8.alamy.com/comp/T913HY/tainan-flower-night-market-or-garden-night-market-is-a-tourism-night-market-in-north-district-tainan-taiwan-T913HY.jpg",
        mapLink: "https://maps.app.goo.gl/aN1Crrp3bpCmz81Z9",
        lat: 25.0881,
        lng: 121.5246,
      },
    ]
  },
  {
    day: 6,
    date: "09/10/25",
    city: "Cao Hùng",
    locations: [
      {
        name: "1. Đầm Liên Trì",
        time: "Sáng",
        description: "- HSR Đài Nam => Cao Hùng khoảng 30p, có thể về khách sạn rồi đi tiếp hoặc nghỉ ngơi tuỳ\n - Nổi bật với các công trình kiến trúc tôn giáo độc đáo, bao gồm Chùa Long Hổ (Dragon and Tiger Pagodas) với tượng rồng hổ oai vệ, Đài Xuân Thu (Spring and Autumn Pavilions), và các đền chùa xung quanh hồ.\n- Hồ nhân tạo có cảnh quan thiên nhiên đẹp, những con đường lát gạch zig-zag trên mặt nước, và là một trong những điểm du lịch nổi tiếng nhất tại Cao Hùng. ",
        image: "https://www.getmetotaiwan.com/wp-content/uploads/2022/10/kaohsiung-lotus-pond-tiger-dragon-pavilion-drone.jpg",
        mapLink: "https://maps.app.goo.gl/jyy3p9py4x5dJxYE9",
        lat: 25.0881,
        lng: 121.5246,
      },
      {
        name: "2. Chùa Long Hổ",
        time: "Sáng",
        description: "- Cùng với Đài Xuân Thu, nằm trong khuân viên Hồ Liên Trì\n - Cảnh sắc nổi tiếng của Cao Hùng.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8GShBfANtWasAiTx3yUTlQKlUHNytH2KCjQ&s",
        mapLink: "https://maps.app.goo.gl/vzaRsGHFszosqQ418",
        lat: 25.0881,
        lng: 121.5246,
      },
      {
        name: "3. Ga tàu Formosa",
        time: "Chiều",
        description: "- Công trình bằng kính lớn nhất thế giới với hơn 4500 tấm kính màu bao phủ xung quanh\n - Nhà ga đẹp thứ 2 thế giới \n - Có show ánh sáng 10 phút vào 11h, 15h, 18h\n - Có thể thăm quan Pier-2 Art Center nếu muốn - khu tổ hợp nghệ thuật từ khu nhà kho ven biển cũ",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/74/65/8b/photo1jpg.jpg?w=1200&h=-1&s=1",
        mapLink: "https://maps.app.goo.gl/pzGZSZc8xZ1QpyyZA",
        lat: 25.0881,
        lng: 121.5246,
      },
      {
        name: "4. Chợ đêm Lưu Hà (Liuhe)",
        time: "Chiều tối",
        description: "- Mở cửa từ 5h chiều tới 2h sáng, cách ga Formosa chỉ 5p đi bộ",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTvExj5YE-Jg7AP6bTeyhp_bub4bgNqxgX8w&s",
        mapLink: "https://maps.app.goo.gl/6N5MMYJ5E3VUcFuL8",
        lat: 25.0881,
        lng: 121.5246,
      },
      {
        name: "5. Vịnh Sông Tình Yêu (Love River)",
        time: "Chiều tối",
        description: "- Sông Tình hay còn gọi là Sông Ái Hà dài khoảng 12km, là một dòng sông lãng mạn và thơ mộng\n - Có thể đi dạo, đi thuyền, ngắm cảnh \n - Có nhiều điểm tham quan và hoạt động hấp dẫn như Đài Quan Sát Cá Voi để ngắm cảnh (hoàng hôn và đèn đêm lung linh), các Tòa Triển Lãm (Cá Voi, Cá Heo, San Hô) với không gian văn hóa biển và âm nhạc, cùng Đại Lộ Cây Du xanh mát để thư giãn và chụp ảnh. ",
        image: "https://thumbs.dreamstime.com/b/yellow-rubber-ducks-love-river-bay-kaohsiung-taiwan-february-tourists-visit-display-port-yacht-marina-argo-366006626.jpg",
        mapLink: "https://maps.app.goo.gl/Gu6zyULGrHYaLrvK8",
        lat: 25.0881,
        lng: 121.5246,
      },
      {
        name: "6. Trung tâm Âm nhạc Cao Hùng (Kaohsiung Music Center)",
        time: "Tối",
        description: "-  Là trung tâm biểu diễn và giải trí lớn tại Đài Loan, thu hút du khách bằng kiến trúc độc đáo lấy cảm hứng từ hình dạng con sóng biển, nơi diễn ra các buổi hòa nhạc quốc tế, triển lãm, thị trường và nhiều sự kiện âm nhạc\n - Xung quanh nhiều cafe, nhà hàng ven sông, đi dạo chơi buổi tối",
        image: "https://khh.travel/image/34274/1920x1080",
        mapLink: "https://maps.app.goo.gl/tG1GzQ3TNniraFXF6",
        lat: 25.0881,
        lng: 121.5246,
      },
    ]
  },
  {
    day: 7,
    date: "10/10/25",
    city: "Cao Hùng - bay về",
    locations: [
      {
        name: "1. Phật Quang Sơn (Fo Guang Shan)",
        time: "Sáng",
        description: "- Nổi bật với tượng Phật khổng lồ cao 108m, bảo tàng văn hóa Phật giáo, hệ thống nhiều điện thờ và bảo tháp tráng lệ, các bức phù điêu và thư pháp nghệ thuật, cùng các hoạt động văn hóa như tổ chức hôn lễ và chiếu phim hoạt hình, tạo nên một điểm đến tâm linh và du lịch hấp dẫn. ",
        image: "https://www.hollandamerica.com/content/hal/au/en/cruise-destinations/asia-cruises/asia-ports/kao/47992/_jcr_content/root/container/shoreexcursionkeyinfo/image.coreimg.100.1280.jpeg/1566929580145/the-buddhist-monastery-at-fokuangshan-082719-47992-c037.jpeg",
        mapLink: "https://maps.app.goo.gl/zaRgtHewnkZiJpSL7",
        lat: 25.0881,
        lng: 121.5246,
      },
      {
        name: "2. Khu trung tâm mua sắm Dream Mall",
        time: "Chiều",
        description: "- Toạ lạc tại khu công nghệ cao với diện tích khoảng 400,000m2. Tòa nhà Dream Mall rộng lớn với 10 tầng\n - Ăn uống mua sắm ngày cuối",
        image: "https://mindtrip.ai/cdn-cgi/image/format=webp,w=1200/https://iorigin.mindtrip.ai/attractions/9332/91ed/8c18/5ed7/b2e3/d5a9/8721/e350",
        mapLink: "https://maps.app.goo.gl/qNZifsWbxdK8x9iZ7",
        lat: 25.0881,
        lng: 121.5246,
      },
      {
        name: "3. Sân bay Cao Hùng",
        time: "Tối",
        description: "- Cafe nghỉ ngơi rồi bay về, cất cánh 18h50 về HN vào 20h35, kết thúc chuyến đi \n",
        image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nroMTkqrwFeHAHZQdNNGuj9N5349417nsVItOASgWQvBa1tAcHG5Dz-9TdpippmJPlHC-6P2UxFa9Dg7K4UQ2v5i_FNZKctvpFB-pnQ6lhmkIoQoFR8n3BeoeLlSwn8GY9X9p4=w408-h306-k-no",
        mapLink: "https://maps.app.goo.gl/T4xE1E9VCTw2T9cB8",
        lat: 25.0881,
        lng: 121.5246,
      },
    ]
  },
];



import { useState } from "react";
// import Map from "./Map.tsx";

export default function ItineraryCard() {
  const [openDay, setOpenDay] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      {itinerary.map((day) => (
        <div key={day.day} className="border rounded-lg shadow-lg overflow-hidden">
          {/* Header của ngày, click để mở/thu gọn */}
          <div
            className="bg-blue-200 px-4 py-2 cursor-pointer flex justify-between items-center hover:bg-blue-300 transition-colors"
            onClick={() => setOpenDay(openDay === day.day ? null : day.day)}
          >
            <h3 className="text-2xl font-bold">Ngày {day.day} ({day.date}) - {day.city}</h3>
            <span className="text-xl">{openDay === day.day ? "▲" : "▼"}</span>
          </div>

          {/* Nội dung các địa điểm */}
          {openDay === day.day && (
            <div className="p-4 grid md:grid-cols-3 gap-6">
              {day.locations.map((loc) => (
                <div
                  key={loc.name}
                  className="border rounded-lg shadow hover:scale-105 transition-transform duration-200 overflow-hidden"
                >
                  <img
                    src={loc.image}
                    alt={loc.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-3">
                    <h4 className="font-bold text-lg mb-1">{loc.name}</h4>
                    <p className="text-sm mb-2 whitespace-pre-line">{loc.description}</p>
                    <p className="text-xs text-gray-500 mb-2">{loc.time}</p>
                    <a
                      href={loc.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline text-sm"
                    >
                      Xem bản đồ
                    </a>
                  </div>
                </div>
              ))}
              <div className="mt-6">
                    {/* <Map
                        locations={day.locations.map((loc) => ({
                        name: loc.name,
                        lat: loc.lat,
                        lng: loc.lng,
                        mapLink: loc.mapLink,
                        }))}
                    /> */}
                    </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
